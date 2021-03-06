import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as HomeIcon } from "../asset/img/icon_home.svg";

const NavBlock = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 15px;
  background-color: ${(props) =>
    props.color === "transparent" ? "" : props.color};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .icon-container {
    width: 40px;
    height: 40px;
    background-color: #ffea00;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 10px;

    & > * {
      width: 25px;
      height: 25px;
    }
  }

  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: bold;
  }
`;

function Navbar({ text, ...rest }) {
  return (
    <NavBlock {...rest}>
      <Link to="/">
        <div className="icon-container">
          <HomeIcon fill="#55119e" />
        </div>
      </Link>
      <div className="title">{text}</div>
    </NavBlock>
  );
}

Navbar.defaultProps = {
  color: "#55119E",
};

export default Navbar;
