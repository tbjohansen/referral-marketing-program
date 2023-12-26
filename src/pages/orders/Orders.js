import React from "react";
import OrderCard from "../../components/common/OrderCard";

const Orders = () => {
  const renderPendingOrders = () => {
    return (
      <div className="grid grid-cols-2 gap-4 justify-center">
        <OrderCard />
        <OrderCard />
      </div>
    );
  };

  const renderCompleteOrders = () => {};
  return (
    <div className="w-[100%]">
      <h4 className="font-medium text-lg py-0.5">Orders</h4>
      <div className="w-[100%] flex flex-row justify-center items-center">
        <div className="w-[80%] h-screen">
          <div className="w-full border-b-2 border-primaryColor flex items-center h-10">
            <a
              rel="noopener noreferrer"
              href="/"
              className="px-5 py-2 border-b-2 border-[#FFE001]"
            >
              Pending
            </a>
            <a
              rel="noopener noreferrer"
              href="/"
              className="px-5 py-2 border-b-2 border-primaryColor"
            >
              Completed
            </a>
          </div>
          <div className="py-4">
          {renderPendingOrders()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
