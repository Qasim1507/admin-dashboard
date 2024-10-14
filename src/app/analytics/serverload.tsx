import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { LoaderCircle } from "lucide-react";

const ServerLoad = () => {
  const [width, setWidth] = useState(0);
  const targetWidth = 70;

  useEffect(() => {
    setWidth(targetWidth);
  }, []);

  return (
    <div className="w-full">
      <div className="bg-white bg-opacity-50 p-6 h-full rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-600 text-2xl font-extrabold">Server Load</h2>
          <LoaderCircle className="text-green-100 bg-green-500 rounded-full" size={24} />
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4 overflow-hidden">
          <div
            className="bg-green-500 h-full rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${width}%` }} 
          />
        </div>
        <div className="text-lg text-yellow-500 font-semibold">
          <CountUp end={targetWidth} duration={1} />% Load
        </div>
      </div>
    </div>
  );
};

export default ServerLoad;