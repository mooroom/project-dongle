import React from "react";

// packages
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

// components
import Navbar from "../components/Navbar";
import BodyBackground from "../components/BodyBackground";
import Button from "../components/Button";
import Container from "../components/Container";
import BottomBox from "../components/BottomBox";

function Learn2(props) {
  const linkHandler = () => "/prepare";

  return (
    <>
      <BodyBackground color="black" />
      <Navbar color="transparent" />
      <Container flex height="100vh">
        <ReactPlayer
          url="https://www.youtube.com/embed/h0Ls3unm-nA"
          width="100%"
          height="auto"
        />
      </Container>

      <BottomBox>
        <Link to={linkHandler}>
          <Button width="100%">다음으로 넘어가기</Button>
        </Link>
      </BottomBox>
    </>
  );
}

export default Learn2;
