import React from "react";
import { Outlet } from "react-router-dom";
import Cards from "../../components/Cards";

const projects = [
  {
    img: "manage.png",
    navigate: "manage",
    title: "Manage",
    danger: false,
    p: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
  },
  {
    img: "bookmark.png",
    danger: true,
    navigate: "bookmark",
    title: "Bookmark",
    p: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
  },
  {
    img: "insure.png",
    danger: false,
    navigate: "insure",
    title: "Insure",
    p: "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
  },
  {
    img: "faylo.png",
    danger: true,
    navigate: "faylo",
    title: "Faylo",
    p: "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
  },
];

function Portfolio() {
  const screenWidth = window.screen.width;
  return (
    <div>
      {projects.map((p) => (
        <Cards
          img={p.img}
          title={p.title}
          p={p.p}
          navigat={p.navigate}
         
        />
      ))}
    </div>
  );
}

export default Portfolio;
