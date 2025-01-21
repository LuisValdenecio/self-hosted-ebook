import SectionWrapper from "../../SectionWrapper"
import Image from "next/image"

const Testimonials = () => {

    const testimonials = [
        {
            avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Alex wonderson",
            title: "Novelist",
            quote: "I made $5,000 selling my novel with this self-hosting kit—something I never thought possible with platforms like Amazon Kindle. I kept all my profits, set my own prices, and connected directly with my readers. It’s a game-changer for writers!"
        },
        {
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Karim ahmed",
            title: "Personal Trainer",
            quote: "As a personal trainer, I created a healthy-eating guide and sold it directly to my clients using this self-hosting kit. No middleman, no hidden fees—just me sharing my expertise and earning 100% of the profits."
        },
        {
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
            name: "Lysa stian",
            title: "Marketing Specialist",
            quote: "As a marketing specialist, I launched my online marketing eBook using this self-hosting kit. It was seamless to set up, and I kept all the profits. Now, I have a professional platform to showcase my expertise and connect directly with my audience!"
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Angela stian",
            title: "Graphical Designer",
            quote: "This kit was perfect for selling my design file bundle. I set it up quickly, linked it to Stripe, and started receiving payments seamlessly. No complicated setup—just a smooth way to deliver files and get paid!"
        },
        {
            avatar: "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
            name: "Jurica koletic",
            title: "3D Artist",
            quote: "This kit has been incredible for my 3D art business. I’ve sold Blender assets directly through my own website and just hit $10,000 in sales—keeping every cent of my profits. No middlemen, no commissions, just pure creative freedom!"
        },
        {
            avatar: "https://images.unsplash.com/photo-1590038767624-dac5740a997b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Kavi laron",
            title: "Full stack engineer",
            quote: "Using this kit, I successfully sold my React templates without any hassle. The setup was simple, payments went through Stripe, and my templates were instantly delivered to buyers. It’s a game-changer for developers looking to monetize their work!"
        },
    ]

    return (
        <SectionWrapper className="pb-0">
            <div id="testimonials" className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl sm:text-center md:mx-auto">
                    <h2 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
                        Potential use cases
                    </h2>              
                    <p className="mt-2">*The cases below do not describe real cases. They demonstrate how you can use our solution.</p>    
                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx} className="bg-white border p-4 rounded-xl">
                                    <figure>
                                        <div className="flex items-center gap-x-4">
                                            <Image 
                                                src={item.avatar} 
                                                width={56}
                                                height={56}
                                                className="w-14 h-14 object-cover rounded-full" 
                                                alt={item.name} />
                                            <div>
                                                <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="mt-6 text-gray-700">
                                                {item.quote}
                                            </p>
                                        </blockquote>
                                    </figure>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Testimonials