import React from "react";
import { Line } from "react-chartjs-2";

const EloGraphics = (props) => {
  const info = props.data.eloProgress;
  const date = [];
  const elo = [];
  for (let i = 0; i < info.length; i++) {
    if (info[i].elo !== "") {
      date.push(info[i].elodate);
      elo.push(info[i].elo);
    }
  }
  const eloProgress = elo.reverse();
  const data = {
    labels: date.reverse(),
    datasets: [
      {
        label: "ELO",
        data: eloProgress,
        borderColor: "#ff8c00",
        backgroundColor: "rgba(255, 140, 0, 0.6)",
        fill: true,
      },
    ],
    options: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "ELO Progress",
      },
      elements: {
        line: {
          tension: 0, // disables bezier curves
        },
      },
    },
  };
  return (
    <div id="myChart">
      <h2>ELO Progress in last 30 matches</h2>
      <Line
        data={data}
        width={720}
        height={300}
        options={{ maintainAspectRatio: true }} // false
      />
    </div>
  );
};

export default EloGraphics;
