import React from "react";
import styled from "styled-components";

import Button from "../components/Button";

import dummy from "../asset/img/image_rect.png";
import dongle from "../asset/img/dongle_head.png";
import icon_1 from "../asset/img/icon_1.png";
import icon_2 from "../asset/img/icon_2.png";
import icon_3 from "../asset/img/icon_3.png";
import icon_o from "../asset/img/icon_o.png";
import icon_x from "../asset/img/icon_x.png";

const GuideBlock = styled.div`
  padding: 0 30px;
  width: 100vw;
  height: 100vh;
  padding-top: 70px;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .dongle-head {
    display: block;
    width: 100px;
  }
`;

const Card = styled.div`
  padding: 20px 40px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);

  .txt-con {
    word-break: keep-all;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const CardImg = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  .tag {
    position: absolute;
    top: -20px;
    left: -20px;
    width: 40px;
  }
  .left {
    width: 35%;
    background-color: #c6afde;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 40px;
    padding: 20px;
    box-sizing: border-box;
    word-break: keep-all;
  }
  .right {
    width: 65%;
    height: auto;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
  }
  & + & {
    margin-top: 1rem;
  }

  & + Button {
    margin-top: 1rem;
  }
`;

const types = {
  learn: [
    [icon_1, "얼굴을 찍어줘", dongle],
    [icon_2, "팔을 찍어줘", dongle],
    [icon_3, "다리를 찍어줘", dongle],
  ],
  arm: [
    [icon_x, "너무 가까워", dongle],
    [icon_o, "좋아!", dongle],
    [icon_x, "너무 멀어", dongle],
  ],
  face: [
    [icon_x, "너무 가까워", dongle],
    [icon_o, "좋아!", dongle],
    [icon_x, "너무 멀어", dongle],
  ],
  leg: [
    [icon_x, "너무 가까워", dongle],
    [icon_o, "좋아!", dongle],
    [icon_x, "너무 멀어", dongle],
  ],
};

function Guide({ type }) {
  let guideText;
  let guideType;

  if (type === "learn") {
    guideText =
      "동글이에게 얼굴, 팔, 다리 사진을 찍어서 보여주면 동글이가 얼굴, 팔, 다리를 만들 수 있어!";
    guideType = types.learn;
  } else if (type === "arm") {
    guideText =
      "손과 팔 사진 8장을 찍어서 모아줘! 손과 팔만 잘 나오도록 찍어줘야해~";
    guideType = types.arm;
  } else if (type === "face") {
    guideText =
      "얼굴 사진 8장을 찍어서 모아줘! 얼굴 전체가 다 나오게 찍어줘야해~";
    guideType = types.face;
  } else if (type === "leg") {
    guideText = "다리 사진 8장을 찍어서 모아줘! 다리만 잘 나오도록 찍어줘야해~";
    guideType = types.leg;
  }

  return (
    <GuideBlock>
      <Card>
        <div className="txt-con">{guideText}</div>
        {guideType.map((content) => (
          <CardImg>
            <img className="tag" src={content[0]} alt="tag" />
            <div className="left">{content[1]}</div>
            <img className="right" src={content[2]} alt="right" />
          </CardImg>
        ))}
        <Button width="100%">준비하기</Button>
      </Card>
    </GuideBlock>
  );
}

export default Guide;
