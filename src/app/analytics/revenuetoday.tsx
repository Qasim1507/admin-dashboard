import React from "react";
import CountUp from 'react-countup';
import { HandCoins } from "lucide-react";

const RevenueToday = () => {
    const percentageChange = "+3.65";

  return (
    <div>
      <div className="bg-white bg-opacity-50 p-6 h-full rounded-lg shadow-md flex justify-between items-center">
        <div>
          <h2 className="text-gray-600 text-2xl font-extrabold">Revenue</h2>
          <br />
          <div className="text-3xl font-bold">$<CountUp start={12000} end={15000}/></div>
          <br />
          <div className="text-lg text-green-500">
            {percentageChange}%
          </div>
        </div>
        <div className="text-green-100 bg-green-500 rounded-full p-4">
          <HandCoins size={28} />
        </div>
      </div>
    </div>
  );
};

export default RevenueToday;
