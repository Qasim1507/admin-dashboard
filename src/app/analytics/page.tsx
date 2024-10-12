"use client";

import CardExpenseSummary from "./expenseSummary";
import SaleGraph from "./saleGraph";
import Traffic from "./traffic";

const Analytics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 pb-4 custom-grid-rows">
      {/* Sale Graph: Full width on small and medium, spans 2 columns on extra large */}
      <div className="col-span-1 md:col-span-2 xl:row-span-6">
        <SaleGraph />
      </div>

      {/* Traffic: Takes full width on small screens, spans 1 column on medium, 1 column on extra large */}
      <div className="row-span-3 xl:row-span-6 md:col-span-1">
        <Traffic />
      </div>

      {/* Expense Summary: Takes full width on small screens, spans 1 column on medium, 1 column on extra large */}
      <div className="row-span-3 xl:row-span-6 md:col-span-1">
        <CardExpenseSummary />
      </div>

      {/* Placeholder Component 1 */}
      <div className="row-span-3 bg-red-50 xl:row-span-6 md:col-span-1"></div>

      {/* Placeholder Component 2 */}
      <div className="row-span-3 bg-red-50 xl:row-span-6 md:col-span-1"></div>

      {/* Placeholder Component 3: Full width on small screens, spans all columns on medium, 1 column on extra large */}
      <div className="col-span-1 md:col-span-2 bg-red-50 md:row-span-1 xl:row-span-6"></div>
    </div>
  );
};

export default Analytics;
