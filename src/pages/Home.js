import React from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import background from "../asset/img/background.png";
import Button from "../components/Button";

const Background = createGlobalStyle`
    body{
        background-image: url(${background});
        background-size: cover;
        background-position: center;
    }
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  text-align: center;
  color: white;
  .subtitle {
    font-size: 0.9rem;
  }
  .title {
    font-size: 2.5rem;
    font-weight: bold;
  }
  .collabo {
    font-size: 0.8rem;
    margin-bottom: 20px;
  }
`;

function Home(props) {
  return (
    <>
      <Background />
      <Container>
        <div className="subtitle">Artificial Intelligence DONGLE</div>
        <div className="title">
          인공지능 <span style={{ color: "yellow" }}>동글</span>
        </div>
        <Link to="/learn/1">
          <Button style={{ margin: "3.5rem auto" }}>체험 시작하기</Button>
        </Link>
        <div className="collabo">
          연세대학교 디지털미디어랩
          <br />X 국립어린이과학관
        </div>
      </Container>
    </>
  );
}

export default Home;
