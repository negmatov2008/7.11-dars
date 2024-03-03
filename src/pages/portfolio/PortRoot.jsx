import React from "react";
import { Outlet } from "react-router-dom";

function PortRoot() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default PortRoot;
