import React, { useEffect, useState } from "react";

// packages
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import YouTube from 'react-youtube';
import styled from 'styled-components';

// components
import Navbar from "../components/Navbar";
import BodyBackground from "../components/BodyBackground";
import Button from "../components/Button";
import Container from "../components/Container";
import BottomBox from "../components/BottomBox";
import Alert from "../components/Alert";

const YoutubeBlock = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 997;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

function Learn2(props) {
  const [ended, setEnded] = useState(false);
  const [show, setShow] = useState(false);
  const [link, setLink] = useState("/prepare");

  //[2021.04.01] for the test, link hadling logics are deactivated
  const linkHandler = () => {
    if (!ended) {
      setShow(true);
      setTimeout(() => setShow(false), 500);
    }
  };

  useEffect(() => {
    if (ended) {
      setLink("/prepare");
    }
  }, [ended]);

  const opts = {
    width: '100%',
  }

  return (
    <>
      <BodyBackground color="black" />
      <Navbar color="transparent" />
      <YoutubeBlock>
        <YouTube videoId="h0Ls3unm-nA" opts={opts} onEnd={() => setEnded(true)}  />
      </YoutubeBlock>
      <BottomBox>
        <Link to={link}>
          <Button width="100%" onClick={linkHandler}>
            다음으로 넘어가기
          </Button>
        </Link>
      </BottomBox>
      <Alert
        text="동영상을 모두 보고 난 후 다음 페이지로 갈 수 있어!"
        show={show}
      />
    </>
  );
}

export default Learn2;
