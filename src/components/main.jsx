import React , {useState} from "react";
import MainModules from "./../scss/modules/mainmodules.module.scss";
import { NavLink } from "react-router-dom";

const Main = () => {
  const [obj, setValue] = useState({ value: "" });

  const handleChange = (event) => {
    setValue({ value: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className={MainModules.Main}>
      <h1>Check your CS:GO faceit stats</h1>
      <h2>
        With FaceitElo you can check your Level, Elo, History, Bans and Specific
        Statistics on any map, completely for free!
      </h2>
      <h3>Type your faceit login below to get started</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          value={obj.value}
          onChange={handleChange}
          placeholder="Nickname..."
        />
        <NavLink to={"/players/" + obj.value}>
          <button type="submit">Search</button>
        </NavLink>
      </form>
    </div>
  );
};

export default Main;
