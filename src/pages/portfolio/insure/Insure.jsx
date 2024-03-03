import React from "react";
import Project from "../../../components/Project";

function Insure() {
  return (
    <>
      <Project
        porto={"/porto3.png"}
        title={"Insure"}
        p1={
          "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation."
        }
        m1={"/insure1.jpg"}
        m2={"/insure2.jpg"}
        navPer={"bookmark"}
        per={"Bookmark"}
        navNext={"faylo"}
        next={"Faylo"}
      />
    </>
  );
}

export default Insure;
