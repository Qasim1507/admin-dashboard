import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const productSales = [
  { name: "Jan", Sales: 4000, Profits: 1400 },
  { name: "Feb", Sales: 3600, Profits: 1900 },
  { name: "Mar", Sales: 4800, Profits: 2130 },
  { name: "Apr", Sales: 3300, Profits: 1900 },
  { name: "May", Sales: 4400, Profits: 2300 },
  { name: "Jun", Sales: 3230, Profits: 1320 },
];

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: 'false',
    },
  },
};

const data = {
  labels: productSales.map(item => item.name),
  datasets: [
    {
      label: 'Sales',
      data: productSales.map(item => item.Sales),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132, 1)',
      borderWidth: 3,
    },
    {
      label: 'Profits',
      data: productSales.map(item => item.Profits),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgb(75, 192, 192, 1)',
      borderWidth: 3,
    },
  ],
};

const CardPurchaseSummary = () => {
  return (
    <div className="bg-white bg-opacity-50 p-6 h-[500px] w-full rounded-lg shadow-md flex flex-col">
      <h2 className="text-gray-600 text-2xl font-extrabold mb-4">Sales and Profit</h2>
      <div className="flex-grow">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default CardPurchaseSummary;