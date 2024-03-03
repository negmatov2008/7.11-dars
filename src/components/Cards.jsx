import React from "react";
import { styled } from "styled-components";
import SimpleButton from "./SimpleButton";

const Cardd = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  max-width: 100%;

  @media screen and (min-width: 760px) {
    flex-direction: row;
    gap: 69px;
    align-items: center;
  }
  @media screen and (min-width: 1340px) {
    gap: 125px;
  }
`;

const Content = styled.div`
  display: flex;
  max-width: 100%;
  border-top: 1px solid rgba(51, 50, 61, 0.15);
  border-bottom: 1px solid rgba(51, 50, 61, 0.15);
  padding-block: 24px;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 760px) {
    padding-block: 32px;
    gap: 29px;
  }
  @media screen and (min-width: 1340px) {
    max-width: 350px;
    padding-block: 103px;
  }
`;

function Cards({ danger, danger2, img, title, p, navigat }) {
  return (
    <>
      <Cardd>
        {!danger2 ? (
          <img className="mb-[24px] sm:w-[339px] lg:w-[540px]" src={img} />
        ) : (
          ""
        )}
        <Content>
          <h1 className="text-[40px] font-[600] text-[#33323D]">{title}</h1>
          <p className="text-[15px] opacity-[0.8] sm:text-[16px] text-[#33323D]">
            {p}
          </p>
          <SimpleButton to={navigat}>VIEW PROJECT</SimpleButton>
          {danger2 ? (
            <img className="mb-[24px] lg:w-[540px]" src="manage.png" />
          ) : (
            ""
          )}
        </Content>
      </Cardd>
    </>
  );
}

export default Cards;
