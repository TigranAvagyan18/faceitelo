import React from "react";
import EloProgressClasses from "../../scss/modules/eloprogress.module.scss";

const EloProgress = (props) => {
  const percent = (props.data/2150)*100+"%";
  return (
    <div className={EloProgressClasses.EloProgress}>
      <div className={EloProgressClasses.progressbar}>
        <div className={EloProgressClasses.bar} style={{width:percent}}></div>
      </div>
      <div className={EloProgressClasses.levels}>
        <div id="lvl1">
          <span>
            <img src="https://faceitelo.net/img/levels/1.svg" alt="" />
            <br />
            <small>0-800</small>
          </span>
        </div>
        <div id="lvl2">
          <span>
            <img src="https://faceitelo.net/img/levels/2.svg" alt="" />
            <br />
            <small>800-950</small>
          </span>
        </div>
        <div id="lvl3">
          <span>
            <img src="https://faceitelo.net/img/levels/3.svg" alt="" />
            <br />
            <small>950-1100</small>
          </span>
        </div>
        <div id="lvl4">
          <span>
            <img src="https://faceitelo.net/img/levels/4.svg" alt="" />
            <br />
            <small>1100-1250</small>
          </span>
        </div>
        <div id="lvl5">
          <span>
            <img src="https://faceitelo.net/img/levels/5.svg" alt="" />
            <br/>
            <small>1250-1400</small>
          </span>
        </div>
        <div id="lvl6">
          <span>
            <img src="https://faceitelo.net/img/levels/6.svg" alt="" />
            <br/>
            <small>1400-1550</small>
          </span>
        </div>
        <div id="lvl7">
          <span>
            <img src="https://faceitelo.net/img/levels/7.svg" alt="" />
            <br/>
            <small>1550-1700</small>
          </span>
        </div>
        <div id="lvl8">
          <span>
            <img src="https://faceitelo.net/img/levels/8.svg" alt="" />
            <br/>
            <small>1700-1850</small>
          </span>
        </div>
        <div id="lvl9">
          <span>
            <img src="https://faceitelo.net/img/levels/9.svg" alt="" />
            <br/>
            <small>1850-2000</small>
          </span>
        </div>
        <div id="lvl10">
          <span>
            <img src="https://faceitelo.net/img/levels/10.svg" alt="" />
            <br/>
            <small>2000-&infin;</small>
          </span>
        </div>
      </div>
    </div>
  );
};

export default EloProgress;
