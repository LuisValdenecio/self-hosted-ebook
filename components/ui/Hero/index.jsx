import NavLink from "../NavLink";

const Hero = () => (
  <section>
    <div className="custom-screen py-28 text-gray-600">
      <div className="space-y-5 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
          <span className="relative">
            10x 
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></span>
          </span>
          {" "}Your Sales{" "}         
            by hosting your own {" "}
          <span className="relative">
            Digital Assets 🚀
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"> </span>
          </span>
        </h1>

        <p className="max-w-xl text-xl mx-auto">
         Whether you sell ebooks or any other digital asset, being able to self host your content can make an enormous financial difference. 
        </p>
        <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
          <NavLink
            href="https://buy.stripe.com/dR6bLR9Mg1vvcMweV7"
            className="text-white text-bold text-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-5 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 hover:ring ring-transparent ring-offset-2 transition"
          >
            Do it now!
          </NavLink>
          
        </div>
        
      </div>
    </div>
  </section>
);

export default Hero;
