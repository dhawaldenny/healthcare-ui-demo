"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "@/app/page";

// Register Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BloodPressureChart = ({data}:{data:any}) => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top", // Align the legend to the right
        labels: {
          boxWidth: 20,
          padding: 15,
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        min: 60, // Minimum value for Y-axis
        max: 180, // Maximum value for Y-axis
        title: {
          display: true,
          text: "Blood Pressure",
        },
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default BloodPressureChart;
