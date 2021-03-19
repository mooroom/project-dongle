import React from "react";
import { Link } from "react-router-dom";

// components
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Container from "../components/Container";
import BottomBox from "../components/BottomBox";

// packages

// images
import learn_info from "../asset/img/learn_info.png";

function Learn1() {
  return (
    <>
      <Navbar color="transparent" />
      <Container top="70px">
        <img
          src={learn_info}
          alt="learn_info"
          style={{ width: "100%", marginBottom: "1rem" }}
        />
        <h2>인공지능 배워보기</h2>
        <h4>동글이에게 얼굴, 팔, 다리를 알려주자!</h4>
        <br />
        <p>
          “인공지능 동글”과 함께 인공지능에 대해 배워보세요 ! 인공지능
          연구소에서 방금 태어난 동글이는 친구들과 함께 놀고 싶지만 아직
          아기라서 아무것도 몰라요. 친구들과 함께 놀려면 동글이에게 얼굴, 팔,
          다리를 알려줘야 해요. 스마트폰과 전용 포스터를 이용해서 동글이에게
          알려주세요!
        </p>
        <BottomBox nonfix>
          <Link to="/learn2">
            <Button width="100%">다음으로 넘어가기</Button>
          </Link>
        </BottomBox>
      </Container>
    </>
  );
}

export default Learn1;
