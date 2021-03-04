import React from "react";
import styled from "styled-components";

import dummy from "../asset/img/image.png";

const GuideBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  width: 80vw;

  .dongle-head {
    width: 100px;
  }
`;

const Card = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  text-align: center;
  padding: 20px 30px;
`;

const CardImg = styled.div`
  height: 120px;
  width: 100%;
  .left {
    text-align: center;
    background-color: #c6afde;
    font-size: 15px;
    height: 100%;
    width: 40%;
  }
  .right {
    height: 100%;
    width: 60%;
    background-image: url(${dummy});
    background-size: cover;
    background-position: center;
  }
`;

function Guide(props) {
  return (
    <GuideBlock>
      <img src={dummy} alt="dongle" className="dongle-head" />
      <Card>
        <CardImg />
      </Card>
    </GuideBlock>
  );
}

export default Guide;
