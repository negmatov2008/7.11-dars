import React from "react";
import { Outlet } from "react-router-dom";

function Portfolio() {
  return (
    <div>
      Portfolio
      <Outlet />
    </div>
  );
}

export default Portfolio;
