"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const productSales = [
  {
    name: "Jan",
    product1: 1000,
    product2: 1400,
  },
  {
    name: "Feb",
    product1: 1200,
    product2: 1300,
  },
  {
    name: "Mar",
    product1: 1400,
    product2: 1230,
  },
  {
    name: "Apr",
    product1: 1300,
    product2: 1400,
  },
  {
    name: "May",
    product1: 1400,
    product2: 1300,
  },
  {
    name: "Jun",
    product1: 1230,
    product2: 1320,
  },
];

const SaleGraph = () => {
  return (
    <div className="bg-white bg-opacity-50 p-6 h-full w-full rounded-lg shadow-md flex flex-col">
      <h2 className="text-gray-600 text-2xl font-extrabold mb-4">Sales Chart</h2>
      <ResponsiveContainer className="px-1">
        <AreaChart width={500} height={400} data={productSales}>
          <YAxis domain={[0, 'dataMax + 1000']} interval={0} tickCount={6} />
          <XAxis dataKey="name" />
          <CartesianGrid strokeDasharray="5 5" />
          <Tooltip content={<CustomTooltip />} />
          <Legend/>
          <Area
            dataKey="product1"
            stroke="#2563eb"
            fill="#3b82f6"
            stackId={1}
          />
          <Area
            dataKey="product2"
            stroke="#7c3aed"
            fill="#8b5cf6"
            stackId={1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-lg">{label}</p>
        <p className="text-md text-blue-400">
          Product 1:
          <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-md text-indigo-400">
          Product 2:
          <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
  return null; // Ensure to return null if the tooltip is not active
};

export default SaleGraph;
