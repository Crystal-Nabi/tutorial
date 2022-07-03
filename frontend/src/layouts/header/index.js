import React from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
const PageHeader = () => {
  return (
    <header>
      <Box
        display="flex"
        justifyContent={"space-between"}
        style={{ marginLeft: "3rem", marginRight: "3rem" }}
      >
        <Box>
          <NavLink to="/">Home</NavLink>
        </Box>
        <Box>
          <NavLink to="/signin">signin</NavLink>
          <NavLink to="/signup">signup</NavLink>
        </Box>
      </Box>
    </header>
  );
};
export default PageHeader;
