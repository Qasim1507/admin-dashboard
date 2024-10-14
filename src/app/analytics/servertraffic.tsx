import React from "react";
import CountUp from 'react-countup';
import { ChartNoAxesCombined } from "lucide-react";

const ServerTraffic = () => {

  return (
    <div>
      <div className="bg-white bg-opacity-50 p-6 h-full rounded-lg shadow-md flex justify-between items-center">
        <div>
          <h2 className="text-gray-600 text-2xl font-extrabold">Site Visits</h2>
          <br />
          <div className="text-3xl font-bold"><CountUp start={22750} end={23382}/></div>
          <br />
          <div className="text-lg text-green-500">
            +12%
          </div>
        </div>
        <div className="text-green-100 bg-green-500 rounded-full p-4">
          <ChartNoAxesCombined size={28} />
        </div>
      </div>
    </div>
  );
};

export default ServerTraffic;
