import React from "react";
import { styled } from "styled-components";
import Container from "./Container";
import SimpleButton from "./SimpleButton";

const ContactStyled = styled.div`
  padding-top: 80px;
  display: flex;
  max-width: 100%;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  @media screen and (min-width: 760px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

function ContactMe({ width }) {
  return (
    <>
      <ContactStyled>
        <h1 className="font-['Ibarra Real Nova'] text-[40px] font-[700] max-w-[311px] text-center sm:max-w-[380px]">
          Interested in doing a project together?
        </h1>
        <SimpleButton to={"/contact"}>Contact me</SimpleButton>
      </ContactStyled>
    </>
  );
}

export default ContactMe;
