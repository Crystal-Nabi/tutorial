import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
const PageHeader = () => {
  return (
    <header className="navbar">
      <div>
        <ul className="menu">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/introduce">INTRODUCE</NavLink>
            <ul className="submenu">
              <li>
                <NavLink to="/introduce/our">OUR</NavLink>
              </li>
              <li>
                <NavLink to="/introduce/me"> ME</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
            <ul className="submenu">
              <li>
                <NavLink to="/about/our">about team</NavLink>
              </li>
              <li>
                <NavLink to="/about/me"> about SCG</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div>
        <ul className="menu">
          <li>
            <NavLink to="/login">login</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default PageHeader;
