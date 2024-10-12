import React from "react";
import { UsersRound } from "lucide-react";
import CountUp from 'react-countup';

const Visitors = () => {
  const percentageChange = "+2.18";
  const sinceLastWeek = "Since last week";

  return (
    <div>
      <div className="bg-white bg-opacity-50 p-6 h-full rounded-lg shadow-md flex justify-between items-center">
        {" "}
        {/* Set background color to white with 50% opacity */}
        <div>
          <h2 className="text-gray-600 text-2xl font-extrabold">Visitors</h2>
          <br />
          <div className="text-3xl font-bold"><CountUp start={100} end={328}/></div>
          <br />
          <div className="text-sm text-green-500">
            {percentageChange}% {sinceLastWeek}
          </div>
        </div>
        <div className="text-blue-100 bg-blue-500 rounded-full p-4">
          <UsersRound size={28} />
        </div>
      </div>
    </div>
  );
};

export default Visitors;
