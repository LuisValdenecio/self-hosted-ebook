import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";

const FooterCTA = () => (
  <SectionWrapper>
    <div className="custom-screen">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-gray-800 text-5xl font-bold sm:text-4xl">
          Cut The Middleman!
          <br />
          Host your {" "} 
          <span className="relative">
          digital assets
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"> </span>
          </span> today
        </h2>
        <div className="flex items-center justify-center gap-x-3 font-medium text-sm mt-5">
          <NavLink
            href={process.env.NEXT_PUBLIC_STRIPE_PAY_LINK}
            className="text-white text-bold text-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-5 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 hover:ring ring-transparent ring-offset-2 transition"
          >
            Do it now!
          </NavLink>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default FooterCTA;
