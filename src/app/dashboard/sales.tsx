import React from "react";
import CountUp from 'react-countup';
import { Truck } from "lucide-react";

const Sales = () => {
  const percentageChange = "-3.65";
  const sinceLastWeek = "Since last week";

  return (
    <div>
      <div className="bg-white bg-opacity-50 p-6 h-full rounded-lg shadow-md flex justify-between items-center">
        {" "}
        {/* Set background color to white with 50% opacity */}
        <div>
          <h2 className="text-gray-600 text-2xl font-extrabold">Sales</h2>
          <br />
          <div className="text-3xl font-bold"><CountUp start={3000} end={2382}/></div>
          <br />
          <div className="text-sm text-red-500">
            {percentageChange}% {sinceLastWeek}
          </div>
        </div>
        <div className="text-blue-100 bg-blue-500 rounded-full p-4">
          <Truck size={28} />
        </div>
      </div>
    </div>
  );
};

export default Sales;
