"use client";

import CustomerRetention from "./customer";
import CardExpenseSummary from "./expenseSummary";
import SaleGraph from "./saleGraph";
import ServerTraffic from "./servertraffic";
import Traffic from "./traffic";
import RevenueToday from "./revenuetoday";
import CardPurchaseSummary from "./cardpurchasesummary";
import ServerLoad from "./serverload";

const Analytics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 pb-4 custom-grid-rows">
      <div className="col-span-1 md:col-span-2 xl:row-span-6">
        <SaleGraph />
      </div>

      <div className="row-span-3 xl:row-span-6 md:col-span-1">
        <Traffic />
      </div>

      <div className="row-span-3 xl:row-span-6 md:col-span-1">
        <CardExpenseSummary />
      </div>

      <div className="row-span-3 xl:row-span-6 md:col-span-1">
        <CustomerRetention />
      </div>

      <div className="row-span-3 xl:row-span-6 md:col-span-1 flex flex-col">
        <div className="flex-1">
          <ServerTraffic />
        </div>
        <div className="flex-1">
          <RevenueToday />
        </div>
        <div className="flex-1">
          <ServerLoad />
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 xl:row-span-6">
        <CardPurchaseSummary/>
      </div>
    </div>
  );
};

export default Analytics;
