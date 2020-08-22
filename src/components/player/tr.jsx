import React from "react";

const tr = (props) => {
  const data = props.data;
  const k = parseInt(data.kad.replace("/", " ").replace("/", " ").split(" ")[0]);
  const a = parseInt(data.kad.replace("/", " ").replace("/", " ").split(" ")[1]);
  const d = parseInt(data.kad.replace("/", " ").replace("/", " ").split(" ")[2]);
  return (
    <tr>
      <td
        style={
          data.result === "Win"
            ? { borderLeft: "3px solid #09B300" }
            : { borderLeft: "3px solid #C30404" }
        }
      >
        <span
          style={
            data.result === "Win"
              ? { backgroundColor: "#09B300" }
              : { backgroundColor: "#C30404" }
          }
        >
          {data.result}
        </span>
      </td>
      <td>
        <span
          style={
            k >= d
              ? { backgroundColor: "#09B300" }
              : {
                  ...(d - k < 10
                    ? {
                        ...(d - k < 5
                          ? { backgroundColor: "#cc9900" }
                          : {
                              ...(a >= 5
                                ? { backgroundColor: "#cc9900" }
                                : { backgroundColor: "#C30404" }),
                            }),
                      }
                    : { backgroundColor: "#C30404" }),
                }
          }
        >
          {data.kad}
        </span>
      </td>
      <td>
        <span
          style={
            data.kr >= 0.77
              ? { backgroundColor: "#09B300" }
              : {
                  ...(data.kr >= 0.65
                    ? { backgroundColor: "#cc9900" }
                    : { backgroundColor: "#C30404" }),
                }
          }
        >
          {data.kr}
        </span>
      </td>
      <td>
        <span
          style={
            data.kd >= 1.04
              ? { backgroundColor: "#09B300" }
              : {
                  ...(data.kd >= 0.94
                    ? { backgroundColor: "#cc9900" }
                    : { backgroundColor: "#C30404" }),
                }
          }
        >
          {data.kd}
        </span>
      </td>
      <td>
        <span
          style={
            data.hs >= 44
              ? { backgroundColor: "#09B300" }
              : {
                  ...(data.hs >= 35
                    ? { backgroundColor: "#cc9900" }
                    : { backgroundColor: "#C30404" }),
                }
          }
        >
          {data.hs + "%"}
        </span>
      </td>
      <td>
        <span
          style={
            data.result === "Win"
              ? { backgroundColor: "#09B300" }
              : { backgroundColor: "#C30404" }
          }
        >
          {data.score}
        </span>
      </td>
      <td>{data.map}</td>
      <td>{data.date}</td>
      <td>
        <span style={{ background: "#5c5c5c", marginRight: "10px" }}>
          {data.elo}
        </span>
        <span
          style={
            data.result === "Win"
              ? { backgroundColor: "#09B300" }
              : { backgroundColor: "#C30404" }
          }
        >
          {data.eloprogress}
        </span>
      </td>
      <td>
        <a href={data.matchLink} target="_blank" rel="noopener noreferrer">
          <button>
            <strong>
              <i className="fa fa-link" aria-hidden="true"></i>
            </strong>
          </button>
        </a>
      </td>
    </tr>
  );
};

export default tr;
