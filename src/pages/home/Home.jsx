import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Button from "../../components/Button";
import SimpleButton from "../../components/SimpleButton";

const HomeStyle = styled.div`
  margin-top: 56px;
`;
const About = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 100%;

  @media screen and (min-width: 760px) {
    padding: 56px 56px 0 0;
    background-color: white;
    max-width: 514px;
    gap: 48px;
    position: absolute;
    top: 368px;
  }
  @media screen and (min-width: 1340px) {
    max-width: 445px;
    top: 368px;
  }
`;

const ME = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 76px;

  @media screen and (min-width: 760px) {
    flex-direction: row;
    gap: 125px;
  }
`;
function Home({ width }) {
  return (
    <>
      <HomeStyle>
        <About>
          <img
            className="w-full sm:h-[700px]"
            src={width > 760 ? "imgg.svg" : "about2.png"}
            alt=""
          />
          <Content>
            <h1 className="text-[40px] font-[700] lg:font-[500] max-w-[450px] text-[#33323D] ">
              Hey, Im Alex Spencer and I love building beautiful websites
            </h1>
            <Button>ABOUT ME</Button>
          </Content>
        </About>
        <ME>
          <img
            className="mb-[45px] md:w-[540px] "
            src={
              width > 420 && width < 769
                ? "me2.png"
                : width > 760 && width < 1590
                ? "me3.png"
                : "me1.png"
            }
            alt=""
          />
          <div className="flex flex-col md:max-w-[350px] md:gap-6 ">
            <h1 className="text-[40px] font-[600] text-[#33323D]">About Me</h1>
            <p className="text-[16px] opacity-[0.8] mb-[24px] text-[#33323D]">
              Im a junior front-end developer looking for a new role in an
              exciting company. I focus on writing accessible HTML, using modern
              CSS practices and writing clean JavaScript. When writing
              JavaScript code, I mostly use React, but I can adapt to whatever
              tools are required. Im based in London, UK, but Im happy working
              remotely and have experience in remote teams. When Im not coding,
              youll find me outdoors. I love being out in nature whether thats
              going for a walk, run or cycling. Id love you to check out my
              work.
            </p>
            <SimpleButton to={"/portfolio"}>GO TO PORTFOLIO</SimpleButton>
            
          </div>
        </ME>
      </HomeStyle>
    </>
  );
}

export default Home;
