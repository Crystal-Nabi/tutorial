import React from "react";
import { NavLink } from "react-router-dom";
const PageHeader = () => {
  return (
    <header>
      <div style={{ height: "100px", backgroundColor: "#e2e2e2" }}>
        <NavLink to="/">Home</NavLink>
      </div>
    </header>
  );
};
export default PageHeader;
