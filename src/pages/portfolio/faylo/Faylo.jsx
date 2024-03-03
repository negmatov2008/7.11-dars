import React from "react";
import Project from "../../../components/Project";

function Faylo() {
  return (
    <>
      <Project
        porto={"/porto4.png"}
        title={"Faylo"}
        p1={
          "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes."
        }
        m1={"/faylo1.jpg"}
        m2={"/faylo2.jpg"}
        navPer={"insure"}
        per={"Insure"}
        navNext={"manage"}
        next={"Manage"}
      />
    </>
  );
}

export default Faylo;
