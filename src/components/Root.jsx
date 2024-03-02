import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import ContactMe from "./ContactMe";
import Container from "./Container";
import Footer from "./Footer";

function Root() {
  const screenWidth = window.screen.width;
  return (
    <>
      <Container>
        <Header width={screenWidth} />
        <Outlet width={screenWidth} />
        <ContactMe />
      </Container>
      <Footer />
    </>
  );
}

export default Root;
