import React from "react";
import { BsSearch } from "react-icons/bs";

function SearchBar({
  placeholder,
  onChange,
  value,
  type,
  maxLength,
  minLength,
  onInput,
  pattern,
  disabled,
  required,
  title,
  id,
  name,
  radio,
  onClick,
}) {
  return (
    <div className="relative inline-block w-[27rem] max-md:w-[20rem] max-sm:w-[20rem]">
      <input
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange}
        maxLength={maxLength}
        minLength={minLength}
        onInput={onInput}
        pattern={pattern}
        disabled={disabled}
        required={required}
        title={title}
        id={id}
        name={name}
        onClick={onClick}
        className={
          disabled
            ? `w-[100%] h-12 px-4 text-base text-black tracking-normal bg-[#FFFFFF10] border-[#0A365C] border-solid outline-none transition-all duration-300 focus:transition-all focus:duration-300 focus:border-[#82D209] 
            max-md:text-xs max-sm:text-xs max-md:h-7 max-sm:h-7 max-md:px-8 max-sm:px-8`
            : radio
            ? `text-4xl`
            : `w-[100%] h-12 px-4 text-base text-black tracking-normal bg-[#FFFFFF10] border-[#0A365C] border-solid outline-none transition-all duration-300 focus:transition-all focus:duration-300 
            max-md:text-xs max-sm:text-xs max-md:h-7 max-sm:h-7 max-md:px-8 max-sm:px-8`
        }
      />
    </div>
  );
}

export default SearchBar;
