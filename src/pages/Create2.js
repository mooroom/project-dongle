import React, { useEffect, useState } from "react";

import styled from "styled-components";

// components
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Container from "../components/Container";
import Alert from "../components/Alert";
import BottomBox from "../components/BottomBox";
import Loader from "../components/Loader";
import Classifier from "../components/Classifier";
import Camera from "../components/Camera";
import Counter from "../components/Counter";
import Guide from "../components/Guide";

const CamButton = styled.div`
  position: absolute;
  bottom: 30px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background: #e3e3e3;
`;

function Create2(props) {
  const [guide, setGuide] = useState(true);
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const onCancel = () => {
    setGuide(false);
    setTimeout(() => {
      setStep((step) => step + 1);
    }, 250);
  };

  const onClick = () => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    if (count === 8) {
      setCount(0);
    }
  }, [count]);

  return (
    <Container flex height="100vh">
      <Guide visible={guide} step={step} onCancel={onCancel} />
      <Navbar text="동글이 키우는 법" />
      <Camera />
      <Counter count={count} />
      <Classifier />
      <CamButton onClick={onClick} />
    </Container>
  );
}

export default Create2;
