import React from "react";
import { arrowRightWhite } from "../assets/icons";

const GoTop = () => {
  function goTop() {
    window.scrollTo(0, 0);
  }
  return (
    <button
      onClick={goTop}
      className=" bottom-4 right-4 z-20 sm:bottom-10 sm:right-10 fixed bg-coral-red rounded-full w-10 h-10 flex justify-center items-center hover:-translate-y-3 td"
    >
      <img
        src={arrowRightWhite}
        alt="Go Top"
        className="-rotate-90"
        width={40}
        height={40}
      />
    </button>
  );
};

export default GoTop;
