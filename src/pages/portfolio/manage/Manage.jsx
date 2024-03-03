import React from "react";
import Project from "../../../components/Project";

function Manage() {
  return (
    <>
      <Project
        porto={"/porto1.png"}
        title={"Manage"}
        p1={
          "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider."
        }
        m1={"/manage1.jpg"}
        m2={"/manage2.jpg"}
        navPer={"faylo"}
        per={"Faylo"}
        navNext={"bookmark"}
        next={"Bookmark"}
      />
    </>
  );
}

export default Manage;
