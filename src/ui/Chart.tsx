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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor?: string;
      borderColor?: string;
    }[];
  };
  options?: object;
  className?: string;
}

const Chart: React.FC<ChartProps> = ({ data, options, className }) => {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: 'rgba(200, 200, 200, 0.3)',
        },
        ticks: {
          color: '#4B5563', // Tailwind `text-gray-600`
        },
      },
      y: {
        grid: {
          color: 'rgba(200, 200, 200, 0.3)',
        },
        ticks: {
          color: '#4B5563',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#4B5563',
        },
      },
    },
    ...options,
  };

  return (
    <div className={`rounded-lg shadow-lg p-4 bg-white dark:bg-gray-800 ${className}`}>
      <div className="h-96">
        <Bar data={data} options={defaultOptions} />
      </div>
    </div>
  );
};

export default Chart;
