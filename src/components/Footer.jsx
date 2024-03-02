import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const FooterStyle = styled.footer`
  max-width: 100%;
  margin-top: 80px;
  padding: 56px 120px;
  background-color: ${(props) => props.theme.colors.grashy};
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  @media screen and (min-width: 760px) {
    flex-direction: row;
    padding: 24px 40px;
  }
`;

function Footer() {
  return (
    <>
      <FooterStyle>
        <img className="mr-[8px]" src="logoDark.svg" alt="" />
        <ul className="flex w-[95px]  flex-col    sm:flex-1 sm:flex-row gap-[32px] ">
          <li className="w-[95px] text-center">
            <Link className="uppercase text-[12px] text-[#fff]" to={"/"}>
              Home
            </Link>
          </li>
          <li className="w-[95px]  text-center">
            <Link
              className="uppercase text-[12px] text-[#fff]"
              to={"/portfolio"}
            >
              portfolio
            </Link>
          </li>
          <li className="w-[95px] text-center">
            <Link className="uppercase text-[12px] text-[#fff]" to={"/contact"}>
              contact 
            </Link>
          </li>
        </ul>
        <img  src="links.svg" alt="" />
      </FooterStyle>
    </>
  );
}

export default Footer;
