import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

const data = {
  labels: ['COD', 'Online'],
  datasets: [
    {
      data: [50, 24],
      backgroundColor: [
        'rgba(136, 132, 216, 0.9)', 
        'rgba(131, 166, 237, 0.9)', 
      ],
      hoverBackgroundColor: [
        'rgba(123, 121, 209, 0.8)', 
        'rgba(106, 142, 217, 0.8)', 
      ],
      borderColor: [
        'rgba(136, 132, 216, 0.3)', 
        'rgba(131, 166, 237, 0.3)', 
      ],
      borderWidth: 5,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '70%',
  plugins: {
    legend:{
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          const label = context.label || '';
          const value = context.parsed || 0;
          return `${label}: ${value}`;
        },
      },
    },
  },
};

export default function RadialChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;

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
      {renderCustomLegend()} {/* Call the custom legend rendering function */}
    </div>
  );
}
