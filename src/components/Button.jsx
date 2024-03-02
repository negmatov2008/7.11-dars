import React from "react";
import { styled } from "styled-components";

const ButtonStyle = styled.button`
  max-width: 200px;
  display: flex;
  height: 48px;
  background-color: #203a4c;

  &:hover {
    background: #5fb4a2;
  }
`;
const Left = styled.div`
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;

  &:hover {
    background: inherit;
  }
`;
const Content = styled.div`
  height: 100%;
  width: 152px;
  background-color: rgba(32, 58, 76, 0.96);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;

  letter-spacing: 2px;
  text-transform: uppercase;

  &:hover {
    background-color: rgba(95, 180, 162, 0.96);
  }
`;
function Button({ children }) {
  return (
    <ButtonStyle>
      <Left>
        <img src="icon1.png" alt="" />
      </Left>
      <Content>{children}</Content>
    </ButtonStyle>
  );
}

export default Button;
