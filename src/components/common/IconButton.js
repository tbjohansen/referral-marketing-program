const IconButton = ({
    icon,
    btnStyle,
    btnWrapperStyle,
    onButtonClick,
    withText,
    btnText,
    textColor,
    hasWhitishTop,
  }) => {
    return (
      <div
        className={`${btnWrapperStyle} group grid place-items-center cursor-pointer hover:scale-110 hover:transition-all duration-100`}
        onClick={onButtonClick}
      >
        <div
          className={`${btnStyle} rounded-full bg-secondaryColor group-hover:scale-125 group-hover:transition-all duration-100`}
        >
          <div
            className={`${btnStyle} ${
              hasWhitishTop ? `bg-screenBgColor` : `bg-primaryColor`
            } rounded-full -ml-[4px] items-center justify-center flex group-hover:ml-[0] group-hover:transition-all duration-100`}
          >
            {icon}
          </div>
        </div>
        {withText ? (
          <p
            className={`text-xs font-medium text-center text-${
              textColor || "white"
            } w-20 py-1`}
          >
            {btnText}
          </p>
        ) : null}
      </div>
    );
  };
  
  export default IconButton;