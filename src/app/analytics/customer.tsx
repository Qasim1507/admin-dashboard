import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CustomerRetention = () => {
  const data = {
    labels: ['Active', 'In-Active'],
    datasets: [
      {
        label: 'Order Status',
        data: [12, 19],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const totalRetention = data.datasets[0].data.reduce((acc, value) => acc + value, 0);

  return (
    <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-md flex flex-col">
      <h2 className="text-gray-600 text-2xl font-extrabold">Customer Retention</h2>
      <br />
      <div className="px-[30px]">
        <Pie data={data} options={options} />
      </div>
      <div className="mt-3 flex justify-between items-center">
        <span className="font-bold text-xl">Total Retention: {totalRetention}</span>
      </div>
    </div>
  );
};

export default CustomerRetention;
