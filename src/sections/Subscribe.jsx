import Button from "../Components/Button";

const Subscribe = () => {
  return (
    <>
      <section
        id="contact-us"
        className="max-container flex max-4xl:flex-col justify-between items-center gap-10"
      >
        <h3 className=" text-4xl text-center leading-[68px] font-palanquin font-bold">
          Sign-Up For
          <span className="text-coral-red"> Updates </span>& Newsletter
        </h3>
        <div className=" w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
          <input
            type="text"
            placeholder="Subscribe@nike.com"
            className="input"
          />
          <div className="flex max-sm:justify-center items-center max-sm:w-full">
            <Button label="Sign Up" fullWidth={true} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
