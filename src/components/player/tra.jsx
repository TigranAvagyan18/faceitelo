import React from "react";

const tr = (props) => {
  const data = props.data;
  return (
    <tr>
      <td style={{display:'flex',flexDirection:'column'}}>
        <img src={data.mapImg} alt="" /> 
        {data.map}
      </td>
      <td>{data.matchesAmount}</td>
      <td>{data.winrate}</td>
      <td>{data.wins}</td>
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
          {data.hs}%
        </span>
      </td>
      <td>{data.kills}</td>
      <td>{data.triple}</td>
      <td>{data.quadro}</td>
      <td>{data.ace}</td>
    </tr>
  );
};

export default tr;
