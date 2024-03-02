import React, { useEffect, useRef, useState } from "react";

import { styled } from "styled-components";
import { Link, NavLink } from "react-router-dom";

const HeaderStyle = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  padding-top: 32px;
  position: relative;
`;

const Select = styled.button``;

function Header({ width }) {
  const [icon, setIcon] = useState("menyu.svg");

  const [count, setCount] = useState(true);

  const menyuEl = useRef();
  const handleClick = () => {
    if (count) {
      setIcon("back.svg");
      menyuEl.current.classList.remove("hidden");
      setCount(false);
    } else if (!count) {
      setIcon("menyu.svg");
      menyuEl.current.classList.add("hidden");
      setCount(true);
    }
  };

  return (
    <HeaderStyle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="61"
        height="32"
        viewBox="0 0 61 32"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M31.3469 26.1224L15.6735 0L0 26.1224H31.3469ZM60.0816 5.87755L44.4082 32L28.7347 5.87755H60.0816Z"
          fill="#33323D"
        />
      </svg>
      {width <= 375 && width < 760 ? (
        <>
          {" "}
          <Select onClick={handleClick}>
            <img src={icon} alt="" />
          </Select>
          <ul
            ref={menyuEl}
            className="max-w-[223px]  absolute top-[88px] right-[32px] z-10   flex flex-col hidden gap-[32px] items-center py-[40px] px-[64px] bg-[#33323D]"
          >
            <li>
              <Link to={"/"} className="text-[#fff] text-[12px]">
                HOME
              </Link>
            </li>
            <li>
              <Link to={"/portfolio"} className="text-[#fff] text-[12px]">
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="text-[#fff] text-[12px]">
                CONTACT ME
              </Link>
            </li>
          </ul>
        </>
      ) : (
        <ul className="flex gap-[42px]">
          <li>
            <NavLink className={"text-12px text-[#33323D] "} to={"/"}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink className={"text-12px text-[#33323D] "} to={"/portfolio"}>
              PORTFOLIO
            </NavLink>
          </li>
          <li>
            <NavLink className={"text-12px text-[#33323D] "} to={"/contact"}>
              CONTACT ME
            </NavLink>
          </li>
        </ul>
      )}
    </HeaderStyle>
  );
}

export default Header;
