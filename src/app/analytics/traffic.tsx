/* eslint-disable */
import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, TooltipItem } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

const data = {
  labels: ['COD', 'Online'],
  datasets: [
    {
      data: [50, 24],
      backgroundColor: [
        'rgba(136, 132, 216, 0.2)', 
        'rgba(131, 166, 237, 0.2)', 
      ],
      borderColor: [
        'rgba(136, 132, 216, 1)', 
        'rgba(131, 166, 237, 1)', 
      ],
      borderWidth: 4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '70%',
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context: TooltipItem<'doughnut'>) => { // Explicitly type context
          const label = context.label || '';
          const value = context.raw || 0; // Use context.raw to get the value directly
          return `${label}: ${value}`;
        },
      },
    },
  },
};

export default function RadialChart() {
  const chartRef:any = useRef(null);

  useEffect(() => {
    const chart:any = chartRef.current;

    if (chart) {
      chart.canvas.parentNode.style.height = '400px';
    }
  }, []);

  // Custom legend component
  const renderCustomLegend = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {data.labels.map((label, index) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', margin: '0 10px' }}>
            <div
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: data.datasets[0].backgroundColor[index],
                borderRadius: '50%',
                marginRight: '8px',
                border: `2px solid ${data.datasets[0].borderColor[index]}`,
              }}
            />
            <span style={{ fontSize: '16px', color: '#ffffff' }}>{label}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white bg-opacity-50 p-6 h-full w-full rounded-lg shadow-md flex flex-col">
      <h2 className="text-gray-600 text-2xl font-extrabold mb-4">Sale Type</h2>
      <div style={{ position: 'relative', height: '500px', width: '100%' }}>
        <Doughnut ref={chartRef} data={data} options={options} />
      </div>
      {renderCustomLegend()}
    </div>
  );
}
