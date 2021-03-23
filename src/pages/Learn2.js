import React, { useEffect, useState } from "react";

// packages
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

// components
import Navbar from "../components/Navbar";
import BodyBackground from "../components/BodyBackground";
import Button from "../components/Button";
import Container from "../components/Container";
import BottomBox from "../components/BottomBox";
import Alert from "../components/Alert";

function Learn2(props) {
  const [ended, setEnded] = useState(false);
  const [show, setShow] = useState(false);
  const [link, setLink] = useState("#");

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

  return (
    <>
      <BodyBackground color="black" />
      <Navbar color="transparent" />
      <Container flex height="100vh">
        <ReactPlayer
          url="https://www.youtube.com/embed/h0Ls3unm-nA"
          config={{
            youtube: {
              playerVars: { showinfo: 1 },
            },
          }}
          width="100%"
          height="auto"
          onEnded={() => setEnded(true)}
          controls
        />
      </Container>
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
