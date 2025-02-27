import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";
import ctaImage from "../../../public/hero.png";
import Image from "next/image";

const CTA = () => {
  return (
    <SectionWrapper
      id="cta"
      className="pb-0 hover:scale-[1.05] transition duration-700 ease-in-out shadow-sm"
    >
      <div className="custom-screen">
        <div className="items-center gap-x-12 lg:flex">
          <div className="flex-1 sm:hidden lg:block hover:scale-[1.1] transition duration-700 ease-in-out">
            <Image
              src={ctaImage}
              className="rounded-lg md:max-w-lg"
              alt="Create Successful Business Models with Our IT Solutions"
            />
          </div>
          <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Ebook website templates + Guide
            </h2>
            <p className="mt-3 text-gray-600 text-lg">
              Get access to 10 components, 15+ Landing pages & more in one
              design kit on Figma!
            </p>
            <NavLink
              href={process.env.NEXT_PUBLIC_STRIPE_PAY_LINK}
              className="inline-block mt-4 font-medium text-md text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:bg-white active:bg-white hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 hover: ring ring-transparent ring-offset-2 transition mb-2"
            >
              Do it now!
            </NavLink>
            <br />
            <span className="text-md font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ml-1">
             KEEP YOUR PROFITS!!
            </span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CTA;
