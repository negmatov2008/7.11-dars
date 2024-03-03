import React from "react";
import Project from "../../../components/Project";

function Bookmark() {
  return (
    <>
      <Project
        porto={"/porto2.png"}
        title={"Bookmark"}
        p1={
          "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section."
        }
        m1={"/bookmark1.jpg"}
        m2={"/bookmark2.jpg"}
        navPer={"manage"}
        per={"Manage"}
        navNext={"insure"}
        next={"Insure"}
      />
    </>
  );
}

export default Bookmark;
