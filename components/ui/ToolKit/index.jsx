import SectionWrapper from "../../SectionWrapper"
import Image from "next/image"
import wordpress from "../../../public/icons/wordpress.svg"
import nextjs from "../../../public/icons/nextjs.svg"
import tailwind from "../../../public/icons/tailwind.svg"
import nodejs from "../../../public/icons/nodejs.svg"
import vercel from "../../../public/icons/vercel.svg"
import figma from "../../../public/icons/figma.svg"
import NavLink from "../NavLink";
import ctaImage from "../../../public/hero_two.PNG";

const ToolKit = () => {

    const features = [
        {
            icon: wordpress,
            title: "Download the templates",
            desc: "WordPress is an open-source content management system (CMS)."
        },
        {
            icon: nextjs,
            title:"Customize with your details",
            desc: "Next.js is a React framework that gives you building blocks to create web apps."
        },
        {
            icon: tailwind,
            title: "Deploy it to the World!",
            desc: "Tailwind CSS is basically a utility-first CSS framework for rapidly building UIs."
        },
    ]

    return (
        <SectionWrapper>
            <div id="toolkit" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 bg-black p-12 border rounded-2xl text-white">
                <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
                    <h2 className="text-white text-3xl font-extrabold sm:text-4xl">
                        Deploy your Digital Assets in 3<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ml-1"> Simple Steps</span>
                    </h2>
                    <p>
                        Get access to best practices, customizable Figma UI templates and lifetime weekly updates
                    </p>
                    <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                        <NavLink
                            href={process.env.NEXT_PUBLIC_STRIPE_PAY_LINK}
                            className="text-white text-bold text-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 hover:ring ring-transparent ring-offset-2 transition mb-5 mt-5"
                        >
                            Do it now!
                        </NavLink>      
                    </div>
                    <div className="flex-1 hidden sm:hidden lg: ml-10 lg:block hover:scale-[1.5] transition duration-700 ease-in-out bg-black text-black justify-center items-center align-center">
                        <Image
                            src={ctaImage}
                            className="rounded-2xl md:max-w-xl bg-black text-black"
                            alt="Create Successful Business Models with Our IT Solutions"
                        />            
                    </div>             
                </div>   
                        
                <div className="mt-12 text-white😻">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3 text-white">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4 text-white">
                                    <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center text-white">
                                        <p className="text-blue-700 text-xl">
                                            {idx + 1}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-lgfont-semibold text-white">
                                            {item.title}
                                        </h4>                                        
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>

        
            </div>
            
        </SectionWrapper>
    )
}

export default ToolKit