import { star } from "../assets/icons";
const PopularProductsCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex sm:max-w-56 flex-col max-sm:items-center">
      <img
        src={imgURL}
        alt={name}
        className="w-[240px] h-[240px] hover:rotate-12 td"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat mt-1 text-l leading-normal text-slate-gray">
          {rating}
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-bold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold  font-montserrat text-coral-red text-xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductsCard;
