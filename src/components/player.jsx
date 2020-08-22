import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Main from "./player/main";
import LastStatistics from "./player/laststatistics";
import EloProgress from "./player/eloprogress";
import EloGraphics from "./player/elographics";
import MatchHistory from "./player/matchhistory";
import MapStatistics from "./player/mapstatistics";

const Player = (props) => {
  const url =
    "https://faceiteloback.herokuapp.com/player?profile=" +
    props.match.params.string;
  let lastUrl = `/players/${props.match.params.string}`;
  const [progress, setProgress] = useState(0);
  const [data, setData] = useState({});
  const [bool, setBool] = useState(false);
  let history = useHistory();
  const getData = async () => {
    bool ? console.log() : setProgress(35);
    try {
      const resp = await axios.get(url);
      setData(resp.data);
      setBool(true);
    } catch (e) {
      console.error(e);
    } finally {
      setProgress(100);
    }
  };
  history.listen((location) => {
    if (location.pathname !== lastUrl) {
      lastUrl = location.pathname;
      setBool(false);
      setProgress(0);
      setData({});
    }
  });
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {bool
        ? [
            console.log(data.main.name),
            <Main data={data.main} key={0} />,
            <LastStatistics data={data.matches.matchHistory} key={1} />,
            <EloProgress data={data.main.elo} key={2} />,
            <EloGraphics data={data.elographics} key={3} />,
            <MatchHistory data={data.matches} key={4} />,
            <MapStatistics data={data.maps} key={5} />,
          ]
        : [
            <div
              style={{
                fontSize: "300%",
                display: "flex",
                justifyContent: "center",
                marginTop: 100,
              }}
            >
              <i
                className="fa fa-spinner fa-pulse fa-3x fa-fw"
                style={{ color: "#ff7c05" }}
              ></i>
            </div>,
            <LoadingBar
              color="#ff7c05"
              progress={progress}
              loaderSpeed={500}
              onLoaderFinished={() => setProgress(0)}
            />,
          ]}
    </div>
  );
};

export default Player;
