import React from "react";
import StatisticsClasses from "../../scss/modules/statistics.module.scss";
import Tablerow from "./tr";

const MatchHistory = (props) => {
  return (
    <div className={StatisticsClasses.Statistics}>
      <span className={StatisticsClasses.warning}>
        Log into PC to view Match History
      </span>
      <div>
        <table>
          <caption>Match History</caption>
          <thead>
            <tr>
              <th>RESULT</th>
              <th>K/A/D</th>
              <th>K/R</th>
              <th>K/D</th>
              <th>HS %</th>
              <th>SCORE</th>
              <th>MAP</th>
              <th>Date</th>
              <th>ELO</th>
              <th>LINK</th>
            </tr>
          </thead>
          <tbody>
            {props.data.matchHistory.map((data, i) => (
              <Tablerow data={data} key={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatchHistory;
