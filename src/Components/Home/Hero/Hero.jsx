import Grocery from "../../../assets/grocery.png";
import Button from "../../../Shared/Button";
const Hero = () => {
    return (
      <section>
        <div className="flex md:flex-row flex-col min-h-screen items-center justify-between  bg-white md:pt-25 pt-35">
          {/* Hero Content */}
          <div className="md:flex-1">
            <span className="bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full">
              Export Best Quality...
            </span>
            <h1 className="md:text-7xl/20 text-5xl/14 font-bold mt-4">
              Tasty Organic <span className="text-orange-500"><br /> Fruits</span> & <span className="text-orange-500">Veggies</span><br /> In Your
              City
            </h1>
            <p className="text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-10">
                Bred for a high content of beneficial substance. Our products are all fresh and healthy.
            </p>
            <Button content="Shop Now" />
          </div>
          {/* Hero Image */}
          <div className="md:flex-1 mt-8 md:mt-0">
            <img src={Grocery} alt="" />
          </div>
        </div>
      </section>
    );
};

export default Hero;