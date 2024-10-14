"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  TooltipProps,
} from "recharts";

// Sample data for product sales
const productSales = [
  { name: "Jan", Sneakers: 2000, Accessory: 1400 },
  { name: "Feb", Sneakers: 1600, Accessory: 1900 },
  { name: "Mar", Sneakers: 1800, Accessory: 2130 },
  { name: "Apr", Sneakers: 2300, Accessory: 1900 },
  { name: "May", Sneakers: 1400, Accessory: 2300 },
  { name: "Jun", Sneakers: 2230, Accessory: 1320 },
];

const CustomTooltip: React.FC<TooltipProps<string, number>> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-lg">{label}</p>
        <p className="text-md text-blue-400">
          Sneakers:
          <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-md text-indigo-400">
          Accessory:
          <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
  return null; // Return null if the tooltip is not active
};

// Main component for the sales graph
const SaleGraph = () => {
  return (
    <div className="bg-white bg-opacity-50 p-6 h-full w-full rounded-lg shadow-md flex flex-col">
      <h2 className="text-gray-600 text-2xl font-extrabold mb-4">Sales Chart</h2>
      <ResponsiveContainer className="px-1">
        <LineChart width={500} height={400} data={productSales}>
          <YAxis domain={[0, 'dataMax + 1000']} interval={0} tickCount={6} />
          <XAxis dataKey="name" />
          <CartesianGrid strokeDasharray="5 5" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line dataKey="Sneakers" stroke="#2563eb" strokeWidth={3} />
          <Line dataKey="Accessory" stroke="#7c3aed" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SaleGraph;
