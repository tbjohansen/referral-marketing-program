import React from "react";
import ImageSwipe from "../../components/common/ImageSwipe";
import lenovo from "../../assets/images/lenovo3.png";
import microsoft from "../../assets/images/microsoft4b.jpg";
import Button from "../../components/common/Button";

const ProductOverview = () => {
  const images = [
    { id: 1, url: lenovo },
    { id: 2, url: microsoft },
  ];
  return (
    <div className="w-[100%]">
      <h4 className="text-lg font-medium py-0.5">Product overview</h4>
      <div className="w-[100%] flex flex-row justify-center items-center">
        <div className="w-[80%] bg-white rounded-xl my-3">
          <div className="w-[100%] flex flex-row justify-center items-center">
            <ImageSwipe productImages={images} />
          </div>
          <div className="py-2 px-2">
            <p className="text-base font-medium px-1 truncate">
              HP 2022 15.6" FHD Laptop Computer, AMD Ryzen 5-5500U Processor,
              12GB RAM, 512GB PCIe SSD
            </p>

            <p className="text-primaryColor text-xl font-medium px-1 py-2">
              TZS 2,350,000
            </p>

            <div className="text-primaryColor px-1 py-2">
              <h4 className="py-1 font-medium">Description</h4>
              <p className="text-primaryColor text-sm font-light px-1 py-2">
                HP 2022 15.6" FHD Laptop Computer, AMD Ryzen 5-5500U
                Processor(Beats Intel i7-1065G7), 12GB RAM, 512GB PCIe SSD, AMD
                Radeon Graphics, HD Webcam, Bluetooth, Wi-fi, Win 11, Blue, 32GB
                USB Card
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-end items-end py-2">
            <div className="mr-4">
              <Button text={"Buy Now"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
