import React from "react";
import hp from "../../assets/images/microsoft4.jpg";
import Button from "./Button";

const OrderCard = () => {
  return (
    <div className="w-full h-[250px] rounded-xl bg-white flex flex-col gap-1">
      <a href="/" className="overflow-hidden rounded-xl">
        <div className="px-4">
          <div className="flex flex-row justify-end items-end py-1">
            <p className="text-primaryColor text-xl font-medium">
              TZS 2,350,000
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <div className="w-[30%]">
              <div className="h-24 w-24 border-[1px] rounded-xl border-primaryColor">
                <img
                  src={hp}
                  alt="HP 2022 15.6"
                  className="h-20 w-20 object-cover rounded-xl "
                />
              </div>
            </div>
            <div className="w-[70%]">
              <h4 className="truncate py-1">
                HP 2022 15.6 FHD Laptop, 12GB RAM, 512GB PCIe SSD
              </h4>
              <p className="text-primaryColor text-sm font-light py-1">
                HP 2022 15.6" FHD Laptop Computer, AMD Ryzen 5-5500U
                Processor(Beats Intel i7-1065G7), 12GB RAM, 512GB PCIe SSD, AMD
                Radeon Graphics, HD Webcam, Bluetooth, Wi-fi, Win 11, Blue, 32GB
                USB Card
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-between py-2">
            <div className="flex flex-col justify-center" >
                <h4 className="text-lg text-primaryColor font-medium">Order #ORD-176</h4>
            </div>
            <div className="">
              <Button text={"Pay Now"}/>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default OrderCard;
