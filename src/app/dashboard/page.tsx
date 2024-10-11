"use client";

import Earnings from "./earnings";
import Orders from "./orders";
import OrderSummary from "./orderSummary";
import PopularProductsCard from "./popularProductsCard";
import Sales from "./sales";
import Visitors from "./visitors";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-7 pb-4 custom-grid-rows">
      <div className="row-span-3 xl:row-span-6">
        <PopularProductsCard />
      </div>
      {/* row-span-3 xl:row-span-6 */}

      <div className=" grid grid-cols-2 gap-4 py-[30px]">
        <div className="row-span-1 col-span-1 md:col-span-1"><Sales/></div>
        <div className="row-span-1 col-span-1 md:col-span-1"><Earnings/></div>
        <div className="row-span-1 col-span-1 md:col-span-1"><Orders/></div>
        <div className="row-span-1 col-span-1 md:col-span-1"><Visitors/></div>
      </div>

      <div className="row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1">
        <OrderSummary />
      </div>

      <div className="col-span-3 md:row-span-1 xl:row-span-2 bg-red-50" />
      <div className="col-span-3 md:row-span-1 xl:row-span-2 bg-red-50" />
      <div className="col-span-3 md:row-span-1 xl:row-span-2 bg-red-50" />
    </div>
  );
};

export default Dashboard;
