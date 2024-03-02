import React from "react";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import Manage from "./pages/portfolio/manage/Manage";
import Bookmark from "./pages/portfolio/bookmark/Bookmark";
import Insure from "./pages/portfolio/insure/Insure";
import Faylo from "./pages/portfolio/faylo/Faylo";
import { ThemeProvider } from "styled-components";
import Root from "./components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/portfolio/",
        element: <Portfolio />,
        children: [
          {
            path: "manage",
            element: <Manage />,
          },
          {
            path: "bookmark",
            element: <Bookmark />,
          },
          {
            path: "insure",
            element: <Insure />,
          },
          {
            path: "faylo",
            element: <Faylo />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const theme = {
  colors: {
    cyan: "#5FB4A2",
    blue: "#203A4C",
    grashy: "#33323D",
    light: "#FAFAFA",
    veryLight: "#EAEAEB",
    red: "#F43030",
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
