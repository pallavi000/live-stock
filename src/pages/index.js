import React, { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import io from "socket.io-client";
import moment from "moment/moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    x: {
      ticks: {
        maxTicksLimit: 10,
      },
    },
  },
};

const index = () => {
  const socket = useRef();
  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: values,

        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  useEffect(() => {
    if (!socket.current) {
      socket.current = io("http://localhost:3000", {
        path: "/api/stock",
      });
    }
    if (socket.current) {
      socket.current.on("data", (data) => {
        console.log(data.label);

        setLabels((prev) => [
          ...prev,
          moment.unix(data.label / 1000).format("HH:mm:ss"),
        ]);
        setValues((prev) => [...prev, data.data]);
      });
    }
  }, []);

  return <Line options={options} data={data} />;
};

export default index;
