const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 
        font-montserrat text-lg leading-none rounded-full border-2 min-w-44
        ${
          backgroundColor
            ? `${backgroundColor} ${borderColor} ${textColor}`
            : "bg-coral-red border-coral-red hover:bg-coral-darkred hover:border-coral-darkred text-white"
        } ${fullWidth ? "w-full" : "hover:translate-x-3"}  td`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
