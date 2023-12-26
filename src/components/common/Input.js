import React from "react";

const Input = ({
  placeholder,
  label,
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
  compulsory,
}) => {
  return (
    <div>
      {compulsory ? (
        <h5 className="text-sm tracking-normal text-[#0A365C] mb-1 max-md:text-xs max-sm:text-xs">
          {label}
          <span className="text-red-500">*</span>
        </h5>
      ) : (
        <h5 className="text-sm tracking-normal text-[#0A365C] mb-1 max-md:text-xs max-sm:text-xs">{label}</h5>
      )}

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
        className={
          disabled
            ? `w-[100%] h-12 text-sm tracking-normal p-2 border-[2px] bg-[#F2F2F2] border-[#0A365C] border-solid rounded-md outline-none transition-all duration-300 focus:transition-all focus:duration-300 focus:border-thirdColor max-md:h-10 max-sm:h-10`
            : radio
            ? `text-4xl max-md:text-2xl max-sm:text-2xl`
            : `w-[100%] h-12 text-sm tracking-normal p-2 border-[2px] bg-[#F2F2F2] border-[#0A365C] border-solid rounded-md outline-none transition-all duration-300 focus:transition-all focus:duration-300 focus:border-thirdColor max-md:h-10 max-sm:h-10`
        }
      />
    </div>
  );
};

export default Input;
