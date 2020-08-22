import React from "react";
import StatisticsClasses from "../../scss/modules/statistics.module.scss";

const LastStatistics = (props) => {
  const matches = props.data;
  let n = 20;
  let avg_k = 0;
  let avg_a = 0;
  let avg_hs = 0;
  let avg_kd = 0;
  let avg_kr = 0;
  for (let i = 0; i < 20; i++) {
    if (!matches[i]) {
      n = i + 1;
      break;
    }
    const k = parseInt(
      matches[i].kad.replace("/", " ").replace("/", " ").split(" ")[0]
    );
    const a = parseInt(
      matches[i].kad.replace("/", " ").replace("/", " ").split(" ")[1]
    );
    const hs = parseInt(matches[i].hs);
    const kd = parseFloat(matches[i].kd);
    const kr = parseFloat(matches[i].kr);
    avg_k += k;
    avg_a += a;
    avg_hs += hs;
    avg_kd += kd;
    avg_kr += kr;
  }
  avg_k /= n;
  avg_a /= n;
  avg_hs /= n;
  avg_kd /= n;
  avg_kr /= n;
  avg_kd = Math.round(avg_kd * 100) / 100;
  avg_kr = Math.round(avg_kr * 100) / 100;
  return (
    <div className={StatisticsClasses.Statistics}>
      <table style={{ display: "table" }}>
        <caption>LAST 20 MATCHES</caption>
        <thead>
          <tr>
            <th>AVG Kills</th>
            <th>AVG Assists</th>
            <th>AVG HS %</th>
            <th>AVG K/D</th>
            <th>AVG K/R</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span
                style={
                  avg_k >= 23
                    ? { backgroundColor: "#09B300" }
                    : {
                        ...(avg_k >= 17
                          ? { backgroundColor: "#cc9900" }
                          : { backgroundColor: "#C30404" }),
                      }
                }
              >
                {avg_k}
              </span>
            </td>
            <td>
              <span
                style={
                  avg_a >= 4.8
                    ? { backgroundColor: "#09B300" }
                    : {
                        ...(avg_a >= 3.2
                          ? { backgroundColor: "#cc9900" }
                          : { backgroundColor: "#C30404" }),
                      }
                }
              >
                {avg_a}
              </span>
            </td>
            <td>
              <span
                style={
                  avg_hs >= 44
                    ? { backgroundColor: "#09B300" }
                    : {
                        ...(avg_hs >= 35
                          ? { backgroundColor: "#cc9900" }
                          : { backgroundColor: "#C30404" }),
                      }
                }
              >
                {avg_hs}
              </span>
            </td>
            <td>
              <span
                style={
                  avg_kd >= 1.02
                    ? { backgroundColor: "#09B300" }
                    : {
                        ...(avg_kd >= 0.94
                          ? { backgroundColor: "#cc9900" }
                          : { backgroundColor: "#C30404" }),
                      }
                }
              >
                {avg_kd}
              </span>
            </td>
            <td>
              <span
                style={
                  avg_kr >= 0.77
                    ? { backgroundColor: "#09B300" }
                    : {
                        ...(avg_kr >= 0.65
                          ? { backgroundColor: "#cc9900" }
                          : { backgroundColor: "#C30404" }),
                      }
                }
              >
                {avg_kr}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LastStatistics;
