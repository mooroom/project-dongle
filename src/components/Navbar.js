import React, {useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// components
import Menu from '../components/Menu';

// images
import { ReactComponent as HomeIcon } from "../asset/img/icon_home.svg";
import { ReactComponent as SoundIcon } from "../asset/img/icon_sound.svg";
import { ReactComponent as MenuIcon } from '../asset/img/icon_menu.svg';

import Timer from '../components/Timer'

const NavBlock = styled.div`
  position: fixed;
  z-index: 100;
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

  a {
    width: initial;
  }

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

  .sound {
    background: white;
    animation-name: alive;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  .timer {
    background: white;
    font-weight: bold;
    color: black;
    align-self: flex-end;
  }

  @keyframes alive {
    0% {
      opacity: 0.8;
    }
    50% {
      opacity: 1;
      transform: scale(1.1);
    }
    100% {
      opacity: 0.8;
    }
  }
`;

function Navbar({ text, audioPlaying, timerPlaying, home, ...rest }) {
  const [menu, setMenu] = useState(false);
  const onMenuClick = () => {
    setMenu(true);
  }
  const onCancel = () => {
    setMenu(false);
  }
  return (
    <>
      <Menu visible={menu} onCancel={onCancel}/>
      <NavBlock {...rest}>
        {!home && (
        <Link to="/">
          <div className="icon-container">
            <HomeIcon fill="#55119e" />
          </div>
        </Link>)}
        {home && (
          <div className="icon-container" onClick={onMenuClick}>
            <MenuIcon fill="#55119e" />
          </div>
        )}
        {audioPlaying && (
          <div className="icon-container sound">
            <SoundIcon fill="#55119e" />
          </div>
        )}
        {timerPlaying && (
          <div className="icon-container timer">
            <Timer start={timerPlaying}/>
          </div>
        )}
        <div className="title">{text}</div>
      </NavBlock>
    </>
  );
}

Navbar.defaultProps = {
  color: "#55119E",
};

export default Navbar;
