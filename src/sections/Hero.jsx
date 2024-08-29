import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../Components/Button";
import ShoeCard from "../Components/ShoeCard";
import { shoes, statistics } from "../constants";

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-md:padding-x pt-28">
        <p className="text-xl z-20 font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-2 font-palanquin text-8xl text-[82px] max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className=" xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red  inline-block mt-3">Qike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-10 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-12 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl text-[32px] font-palanquin font-bold">
                {stat.value}
              </p>
              <p className="leading-3 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:h-[92vh] max-xl:py-40 bg-primary bg-hero bg-cover bg-left">
        <img
          src={bigShoeImg}
          alt="Shoe Collection"
          width={500}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] max-sm:px-6 items-center justify-start">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShowImage={(shoe) => {
                  setbigShoeImg(shoe);
                }}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
