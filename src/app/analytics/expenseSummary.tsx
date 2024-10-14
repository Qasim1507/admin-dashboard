import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { TrendingUp } from "lucide-react";

ChartJS.register(ArcElement, Tooltip, Legend);

const CardExpenseSummary = () => {
  const dashboardMetrics = {
    expenseSummary: [
      { totalExpenses: 1000 },
    ],
    expenseByCategorySummary: [
      { category: "Food", amount: "300" },
      { category: "Transport", amount: "200" },
      { category: "Entertainment", amount: "150" },
      { category: "Utilities", amount: "250" },
    ],
  };

  const expenseSummary = dashboardMetrics.expenseSummary[0];
  const expenseByCategorySummary = dashboardMetrics.expenseByCategorySummary || [];

  const expenseSums = expenseByCategorySummary.reduce((acc: { [key: string]: number }, item) => {
    const category = item.category + " Expenses";
    const amount = parseInt(item.amount, 10);
    if (!acc[category]) acc[category] = 0;
    acc[category] += amount;
    return acc;
  }, {});

  const expenseCategories = Object.entries(expenseSums).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  const totalExpenses = expenseCategories.reduce((acc, category) => acc + category.value, 0);
  const formattedTotalExpenses = totalExpenses.toFixed(2);

  const data = {
    labels: expenseCategories.map(category => category.name),
    datasets: [
      {
        label: 'Expenses',
        data: expenseCategories.map(category => category.value),
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

  return (
    <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-md flex flex-col">
      <h2 className="text-gray-600 text-2xl font-extrabold mb-5">
        Expense Summary
      </h2>
      <div className="px-[30px]">
        <Pie data={data} options={options}/>
      </div>
      <div className="mt-3 flex justify-between items-center">
        <span className="font-bold text-xl">${formattedTotalExpenses}</span>
        {expenseSummary && (
          <span className="flex items-center">
            <TrendingUp className="mr-2 text-green-500" />
            30%
          </span>
        )}
      </div>
    </div>
  );
};

export default CardExpenseSummary;
