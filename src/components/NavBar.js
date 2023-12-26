import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Button from "./common/Button";
import SearchBar from "./SearchBar";

const NavBar = () => {
  
  const navigate = useNavigate();

  const user = false;

  const handleOrders = () => {
    if (user) {
    } else {
      navigate(`/sign-in`);
    }
  };

  const handleProfile = () => {
    if (user) {
    } else {
      navigate(`/sign-in`);
    }
  };

  return (
    <div className="bg-[#0A365C] w-screen h-[15vh]">
      <div className="flex flex-row gap-2 justify-between h-full">
        <div className="w-[20%]"></div>
        <div className="w-[50%] flex flex-row gap-6 justify-center text-primaryColor font-ligt">
          <div className="bg-white rounded-xl w-[90%] my-3 flex flex-row gap-2 px-2">
            <div className="w-[70%] flex flex-col justify-center items-center">
              <SearchBar placeholder={"What are you looking for ?"} />
            </div>
            <div className="w-[30%] ml-4 flex flex-col justify-center items-center">
              <Button text={"Search"} />
            </div>
          </div>
        </div>
        <div className="w-[30%] flex flex-row gap-12 justify-center font-ligt text-white">
          <div
            onClick={() => handleOrders()}
            className="flex flex-col justify-center items-center gap-1 text-2xl cursor-pointer hover:text-thirdColor"
          >
            <FiShoppingBag />
            <p className="text-base">Orders</p>
          </div>
          <div
            onClick={() => handleProfile()}
            className="flex flex-col justify-center items-center gap-1 text-2xl cursor-pointer hover:text-thirdColor"
          >
            <FaRegUserCircle />
            <h4 className="text-base">
              {user ? <span></span> : <span>Sign in</span>}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
