import React from "react";
import { styled } from "styled-components";
import SimpleButton from "./SimpleButton";
import { useNavigate } from "react-router-dom";

const ProjectStyle = styled.div`
  padding-top: 40px;
  max-width: 100%;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  max-width: 100%;
  @media screen and (min-width: 1340px) {
    flex-direction: row;
  }
`;

const Left = styled.div`
  display: flex;
  max-width: 100%;
  padding-block: 24px;
  gap: 24px;
  flex-direction: column;
  border-block: 1px solid rgba(51, 50, 61, 0.15);
`;

const Reight = styled.div`
  max-width: 100%;
`;

const Images = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 64px;

  @media screen and (min-width: 760px) {
    margin-bottom: 80px;
  }
`;
const Footer = styled.div`
  max-width: 100%;
  padding-block: 24px;
  border-block: 1px solid rgba(51, 50, 61, 0.15);
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 760px) {
    justify-content: space-between;
  }
`;
const Links1 = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-right: 1px solid rgba(51, 50, 61, 0.15);
  flex-grow: 1;
  cursor: pointer;

  @media screen and (min-width: 760px) {
    flex-direction: row;
    gap: 32px;
  }
`;

const Links2 = styled.div`
  max-width: 50%;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  gap: 16px;
  text-align: end;
  position: relative;
  margin-left: 16px;

  @media screen and (min-width: 760px) {
    flex-direction: row;
    gap: 32px;
  }
`;

function Project({ porto, title, p1, m1, m2, navPer, navNext, per, next }) {
  const navigate = useNavigate();
  return (
    <>
      <ProjectStyle>
        <img src={porto} className="w-full sm: mb-[40px]" alt="" />
        <Body>
          <Left>
            <h1 className="text-[40px] text-[#33323D] font-[600]">{title}</h1>
            <p className="text-[15px] text-[#33323D]">{p1}</p>
            <div className="felx leading-[30px] flex-col teext-[13px] text-[#5FB4A2] font-[700]">
              Interaction Design / Front End Development
              <span>HTML / CSS / JS</span>
            </div>
            <SimpleButton>VISIT WEBSITE</SimpleButton>
          </Left>
          <Reight>
            <h1 className="text-[32px] text-[#33323D]  pb-[40px] sm:pb-[28px]">
              Project Background
            </h1>
            <p className="text-[#33323D]  text-[15px] opacity-[0.8]  mb-[40px]">
              This project was a front-end challenge from Frontend Mentor. It’s
              a platform that enables you to practice building websites to a
              design and project brief. Each challenge includes mobile and
              desktop designs to show how the website should look at different
              screen sizes. Creating these projects has helped me refine my
              workflow and solve real-world coding problems. I’ve learned
              something new with each project, helping me to improve and adapt
              my style.
            </p>
            <h1 className="text-[32px] text-[#33323D] mb-[40px]">
              Static Previews
            </h1>
            <Images>
              <img src={m1} alt="" />
              <img src={m2} alt="" />
            </Images>
          </Reight>
        </Body>
        <Footer>
          <Links1 onClick={() => navigate(`/portfolio/${navPer}`)}>
            <img className="w-[8px]" src="/per.svg" alt="" />
            <div className="flex flex-col">
              <span className="text-[32px] text-[#33323D]">{per}</span>
              <span className="text-[16px] text-[#33323D] opacity-[0.5]">
                Previous Project
              </span>
            </div>
          </Links1>
          <Links2 onClick={() => navigate(`/portfolio/${navNext}`)}>
            <img
              className="w-[8px] absolute right-0 md:top-[35px]"
              src="/next.svg"
              alt=""
            />
            <div className="flex flex-col md:mr-[40px] mt-[30px] md:mt-[5px]">
              <span className="text-[32px] text-[#33323D]">{next}</span>
              <span className="text-[16px] text-[#33323D] opacity-[0.5]">
                Next Project
              </span>
            </div>
          </Links2>
        </Footer>
      </ProjectStyle>
    </>
  );
}

export default Project;
