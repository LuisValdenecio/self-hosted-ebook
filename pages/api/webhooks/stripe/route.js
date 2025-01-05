import { Resend } from 'resend';
import NotionMagicLinkEmail from '../../../../emails/welcome';
import { NextResponse } from 'next/server';

import Stripe from 'stripe';
import { stripe } from '../../../../lib/stripe';

const resend = new Resend(process.env.RESEND_API_KEY);
const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

async function sendSuccessEmail(email) {
    try {
        await resend.emails.send({
            from: 'welcome@selfhostedebook.com',
            to: email.email,
            subject: 'Your Last purchase',
            react: NotionMagicLinkEmail(),
        });

        return NextResponse.json({ data: 'success' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error}, { status: 500 });
    }
}

export async function POST(req) {
    const body = await req.text();
    const sig = req.headers.get('Stripe-Signature');
    let event;

    try {
        event = stripe.webhooks.constructEvent(body, sig, WEBHOOK_SECRET);
    } catch (err) {
        console.log("webhook signature verification failed.", err.message);
        return new Response(`Webhook Error: ${err.message}`, { status: 400 });
    }

    // handle the event
    try {
        switch (event.type) {
            case "checkout.session.completed":
                const session = await stripe.checkout.sessions.retrieve(
                    (event.data.object).id,
                    {
                        expand: ['line_items']
                    }
                );
                //const customerId = session.customer as string;
                const customerDetails = session.customer_details;

                if (customerDetails?.email) {
                    await sendSuccessEmail({ email: customerDetails.email });
                }
                break;
            case "checkout.session.expired":
                const expired_session = await stripe.checkout.sessions.retrieve(
                    (event.data.object).id,
                    {
                        expand: ['line_items']
                    }
                );
                //const customerId = session.customer as string;
                const customer_details = expired_session.customer_details;

                if (customer_details?.email) {
                    await sendSuccessEmail({ email: customerDetails.email });
                }
                break;
            default:
                console.log(`Unhandled event type ${event.type}`);
        }
    } catch (error) {
        console.log("Error handling event", error);
        return new Response("Webhook error", {status: 400});
    }
    return new Response("Webhook received", { status: 200 });
}