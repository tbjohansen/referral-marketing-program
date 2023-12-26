import React from "react";

const Button = ({ text, onClick, customWidth, width, type, opacity }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={
        customWidth
          ? opacity
            ? `bg-[#0A365C] hover:bg-thirdColor text-[#ffffff] hover:text-primaryColor transition-all duration-300 ease-in-out py-2 px-4 rounded-md items-center border-r-2 border-[#fefefe] cursor-not-allowed opacity-25 w-[${width}%] h-[50px] max-md:h-[42px] max-sm:h-[42px]`
            : `bg-[#0A365C] hover:bg-thirdColor text-[#ffffff] hover:text-primaryColor transition-all duration-300 ease-in-out py-2 px-4 rounded-md items-center border-r-2 border-[#fefefe] w-[${width}%] h-[50px] max-md:h-[42px] max-sm:h-[42px]`
          : opacity
          ? `bg-[#0A365C] hover:bg-thirdColor text-[#ffffff] hover:text-primaryColor transition-all duration-300 ease-in-out py-2 px-4 rounded-md items-center border-r-2 border-[#fefefe] cursor-not-allowed opacity-25 w-[140px] h-[50px] max-md:h-[42px] max-sm:h-[42px]`
          : "bg-[#0A365C] hover:bg-thirdColor text-[#ffffff] hover:text-primaryColor transition-all duration-300 ease-in-out py-2 px-4 rounded-md items-center border-r-2 border-[#fefefe] w-[140px] h-[50px] max-md:h-[42px] max-sm:h-[42px]"
      }
    >
      <span
        className="text-sm font-medium"
      >
        {text}
      </span>
    </button>
  );
};

export default Button;
