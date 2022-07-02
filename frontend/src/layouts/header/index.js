import React from "react";
import { NavLink } from "react-router-dom";
const PageHeader = () => {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/signin">signin</NavLink>
      <NavLink to="/signup">signup</NavLink>
    </header>
  );
};
export default PageHeader;
