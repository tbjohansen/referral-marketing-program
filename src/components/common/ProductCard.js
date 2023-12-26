import React from "react";
import hp from "../../assets/images/microsoft4.jpg";
import { Tooltip } from "./Tooltip";

const ProductCard = () => {
  return (
    <div className="w-full h-[350px] rounded-xl bg-white flex flex-col gap-1">
      <a
        href="/"
        className="overflow-hidden rounded-xl"
      >
        <img
          src={hp}
          alt="HP 2022 15.6"
          className="lg:h-[256px] h-40 w-full object-cover"
        />
      </a>
      <Tooltip message={"HP 2022 15.6 FHD Laptop, 12GB RAM, 512GB PCIe SSD"}>
      <p className="text-sm font-light px-1 truncate">HP 2022 15.6" FHD Laptop Computer, AMD Ryzen 5-5500U Processor, 12GB RAM, 512GB PCIe SSD</p>
      </Tooltip>
      <p className="text-primaryColor text-base font-medium px-1">TZS 2,350,000</p>
    </div>
  );
};

export default ProductCard;
