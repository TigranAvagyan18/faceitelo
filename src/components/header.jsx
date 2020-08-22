import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderClasses from "../scss/modules/header.module.scss";

const Header = () => {
  const [obj, setValue] = useState({ value: "" });

  const handleChange = (event) => {
    setValue({ value: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <header>
      <ul className={HeaderClasses.nav}>
        <li>
          <NavLink to="/">FaceitElo <span>Dark</span></NavLink>
        </li>
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          value={obj.value}
          onChange={handleChange}
          placeholder="Nickname..."
        />
        <NavLink to={"/players/"+obj.value}>
          <button type="submit">Search</button>
        </NavLink>
      </form>
    </header>
  );
};

export default Header;
