import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const ButtonStyle = styled.button`
  width: 162px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #33323d;
  font-family: "Public Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: 1px solid #33323d;

  &:hover {
    background: #33323d;
    color: white;
  }
`;

function SimpleButton({ children, to }) {
  const navigate = useNavigate();

  return (
    <>
      <ButtonStyle onClick={() => navigate(to)}>{children}</ButtonStyle>
    </>
  );
}

export default SimpleButton;
