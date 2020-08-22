import React from "react";
import MainClasses from "../../scss/modules/main.module.scss";

const Main = (props) => {
  return (
    <div className={MainClasses.statistics}>
      <img src={props.data.img} alt="" />
      <div className={MainClasses.main_statistics}>
        <div className={MainClasses.statistics_header}>
          <h1>{props.data.name}</h1>
          <div className={MainClasses.buttons}>
            <a href={props.data.steamUrl}>
              <button className={MainClasses.steam}>
                <i className="fa fa-steam fa-2x" aria-hidden="true"></i>
              </button>
            </a>
            <a href={props.data.faceitUrl}>
              <button className={MainClasses.faceit}>
                <i
                  className="fa fa-steam fa-2x"
                  style={{ visibility: "hidden" }}
                  aria-hidden="true"
                ></i>
                <span>F</span>
              </button>
            </a>
          </div>
        </div>
        <div className={MainClasses.statistics_world_ranking}>
          <span>
            <span
              className={props.data.rankings[0].rankCountry}
              style={{ marginRight: 10 }}
            ></span>
            {props.data.rankings[0].rankPosition}
          </span>
          <span style={{ marginLeft: 15 }}>
            <span
              className={props.data.rankings[1].rankCountry}
              style={{ marginRight: 10 }}
            ></span>
            {props.data.rankings[1].rankPosition}
          </span>
        </div>
        <div className={MainClasses.statistics_footer}>
          <span>
            <img src={props.data.lvl} alt={props.data.alt} />
          </span>
          <span>
            <strong>{props.data.elo}</strong>
            <br />
            <small>Elo</small>
          </span>
          <span>
            <strong>{props.data.matches}</strong>
            <br />
            <small>Matches</small>
          </span>
          <span>
            <strong>{props.data.kd}</strong>
            <br />
            <small>K/D</small>
          </span>
          <span>
            <strong>{props.data.winrate}</strong>
            <br />
            <small>WinRate</small>
          </span>
          <span>
            <strong>{props.data.hs}</strong>
            <br />
            <small>HS</small>
          </span>
          <span>
            <strong>{props.data.winstreak}</strong>
            <br />
            <small>Win Streak</small>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Main;
