import React from "react";
import styled, { css } from "styled-components";

// images
import heli_face1 from "../asset/img/heli_face1.png";
import heli_face2 from "../asset/img/heli_face2.png";
import heli_face3 from "../asset/img/heli_face3.png";
import heli_leg1 from "../asset/img/heli_leg1.png";
import heli_leg2 from "../asset/img/heli_leg2.png";
import heli_leg3 from "../asset/img/heli_leg3.png";
import heli_arm1 from "../asset/img/heli_arm1.png";
import heli_arm2 from "../asset/img/heli_arm2.png";
import heli_arm3 from "../asset/img/heli_arm3.png";
import dongle_thinking from "../asset/img/dongle_thinking2.png";

import icon_1 from "../asset/img/icon_1.png";
import icon_2 from "../asset/img/icon_2.png";
import icon_3 from "../asset/img/icon_3.png";
import icon_o from "../asset/img/icon_o.png";
import icon_x from "../asset/img/icon_x.png";

const GuideBlock = styled.div`
  width: 100%;
  padding: 20px 40px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  transition: all 0.5s ease-in;
  z-index: 98;

  .txt-con {
    word-break: keep-all;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  ${(props) => {
    const hide = props.hide;

    if (hide) {
      console.log(`hide: ${hide}`);
      return css`
        opacity: 0;
        visibility: hidden;
      `;
    } else {
      return css`
        opacity: 1;
        visibility: visible;
      `;
    }
  }}
`;

const GuideImg = styled.div`
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
    [icon_1, "얼굴을 찍어줘", heli_face2],
    [icon_2, "팔을 찍어줘", heli_arm2],
    [icon_3, "다리를 찍어줘", heli_leg2],
  ],
  arm: [
    [icon_x, "너무 가까워", heli_arm1],
    [icon_o, "좋아!", heli_arm2],
    [icon_x, "너무 멀어", heli_arm3],
  ],
  face: [
    [icon_x, "너무 가까워", heli_face1],
    [icon_o, "좋아!", heli_face2],
    [icon_x, "너무 멀어", heli_face3],
  ],
  leg: [
    [icon_x, "너무 가까워", heli_leg1],
    [icon_o, "좋아!", heli_leg2],
    [icon_x, "너무 멀어", heli_leg3],
  ],
  test: dongle_thinking,
};

function Guide({ type, hide }) {
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
  } else if (type === "test") {
    guideText =
      "이제 동글이를 테스트해보자! 카메라를 통해 동글이에게 얼굴, 팔, 다리 중 하나를 물어보면 동글이가 맞춰볼꺼야!";
    guideType = types.test;
  }

  return (
    <GuideBlock hide={hide}>
      <div className="txt-con">{guideText}</div>
      {type === "test" ? (
        <img src={guideType} alt="img" style={{ width: "100%" }} />
      ) : (
        guideType.map((content, index) => (
          <GuideImg key={index}>
            <img className="tag" src={content[0]} alt="tag" />
            <div className="left">{content[1]}</div>
            <div className="right">
              <img src={content[2]} style={{ width: "100%" }} alt="right" />
            </div>
          </GuideImg>
        ))
      )}
    </GuideBlock>
  );
}

export default Guide;
