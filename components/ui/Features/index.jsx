import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink";

const Features = () => {

    const features = [
        {
            icon: "💵",
            title: "Stripe",
            desc: "Connect your Stripe account to receive payments directly, bypassing middlemen and maximizing your revenue."
        },
        {
            icon: "📩",
            title: "E-mail Automation",
            desc: "Automatically send purchase confirmations and digital assets to your customers instantly after payment."
        },
        {
            icon: "🌐",
            title: "SEO Optimization",
            desc: "Boost your website's visibility with built-in tools to help your digital assets rank higher on search engines."
        },
        {
            icon: "🛠️",
            title: "3 Customizable Templates (and Counting)",
            desc: "Easily customize three ready-made pages to showcase your digital products. Designed to grow with your needs."
        },
       {
            icon: "📙",
            title: "Setup Guide",
            desc: "Step-by-step instructions to help you get your site up and running, no technical skills required."
        },
        {
            icon: "",
            title: "Private Discord Server",
            desc: "Join our community of creators for support, tips, and troubleshooting. We're here to help every step of the way."
        }
    ]

    return (
        <SectionWrapper>
            <div id="features" className="custom-screen text-gray-600 mt-20">
            <h2 className="text-gray-800 text-3xl font-extrabold sm:text-4xl justify-center flex mb-20">
            What's included in the kit?                       
            </h2>            
                <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        features.map((item, idx) => (
                            <li key={idx} className="space-y-3">
                                <div className="w-12 h-12 text-4xl text-indigo-600 flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg text-gray-800 font-semibold">
                                    {item.title}
                                </h4>
                                <p>
                                    {item.desc}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </SectionWrapper>
    )
}

export default Features