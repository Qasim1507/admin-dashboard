import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const OrderSummary = () => {
  // Data for the pie chart
  const data = {
    labels: ['Placed', 'In Transit', 'Delivered', 'Returned'],
    datasets: [
      {
        label: 'Order Status',
        data: [12, 19, 10, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)', 
          'rgba(54, 162, 235, 0.2)', 
          'rgba(75, 192, 192, 0.2)', 
          'rgba(255, 206, 86, 0.2)', 
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white bg-opacity-50 p-6  rounded-lg shadow-md flex flex-col">
      <h2 className="text-gray-600 text-2xl font-extrabold">Order Summary</h2>
      <div className="px-[30px] " >
        <Pie data={data}  />
      </div>
    </div>
  );
};

export default OrderSummary;
