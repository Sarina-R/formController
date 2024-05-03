import React, { useContext } from "react";
import Chart from "react-apexcharts";
import { Context } from "../Table";
import "./chart.scss";
import { MdClose } from "react-icons/md";

const DataChart = ({ setChart }) => {
  const value = useContext(Context);
  console.log(value);

  const paymentData = [
    { "کارشناس منابع انسانی": 8000 },
    { "طراح گرافیک": 7000 },
    { "کارشناس ارتباطات": 5000 },
    { "مدیر فروش": 9000 },
    { "مهندس نرم‌افزار": 6000 },
  ];

  const seriesData = paymentData.map((jobPayment) => {
    const jobTitle = Object.keys(jobPayment)[0];
    const paymentAmount = jobPayment[jobTitle];
    return {
      name: jobTitle,
      data: [paymentAmount],
    };
  });

  const chartOptions = {
    chart: {
      id: "payment-job-chart",
      type: "bar",
    },
    xaxis: {
      categories: ["میزان دریافتی"],
    },
    title: {
      text: value.job,
      align: "center",
    },
  };

  return (
    <div className="chart">
      <button onClick={() => setChart(false)}>
        <MdClose />
      </button>
      <Chart
        options={chartOptions}
        series={seriesData}
        type="bar"
        width="500"
        className="chartC"
      />
    </div>
  );
};

export default DataChart;
