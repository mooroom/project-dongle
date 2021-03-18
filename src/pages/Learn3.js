import React from "react";
import { Link } from "react-router-dom";

// components
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Container from "../components/Container";
import BodyBackground from "../components/BodyBackground";
import BottomBox from "../components/BottomBox";

// packages
import styled from "styled-components";

// images
import cartoon from "../asset/img/cartoon.png";

const TextBlock = styled.div`
  color: white;
  margin-bottom: 1rem;
`;

function Learn3() {
  return (
    <>
      <BodyBackground color="#8C63BC" />
      <Navbar color="transparent" />
      <Container top="70px">
        <TextBlock>
          <h2>정리하기</h2>
          <h4>인공지능에 대해서 더 알아볼까?</h4>
        </TextBlock>
        <img src={cartoon} alt="learn_info" style={{ width: "100%" }} />
        <BottomBox nonfix>
          <Link to="/fin">
            <Button width="100%">다음으로 넘어가기</Button>
          </Link>
        </BottomBox>
      </Container>
    </>
  );
}

export default Learn3;
