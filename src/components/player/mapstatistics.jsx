import React from "react";
import Tablerow from "./tra";
import StatisticsClasses from "../../scss/modules/statistics.module.scss";

const MapStatistics = (props) => {
  return (
    <div className={StatisticsClasses.Statistics}>
      <span className={StatisticsClasses.warning}>Log into PC to view Map Statistics</span>
      <table>
        <caption>Map Statistics</caption>
        <thead>
          <tr>
            <th>MAP</th>
            <th>Matches</th>
            <th>Win Rate</th>
            <th>Wins</th>
            <th>AVG K/R</th>
            <th>AVG K/D</th>
            <th>AVG HS</th>
            <th >Kills</th>
            <th>Triple</th>
            <th>Quadro</th>
            <th>ACE</th>
          </tr>
        </thead>
        <tbody>
        {props.data.mapStat.map((data, i) => (
              <Tablerow data={data} key={i} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MapStatistics;
