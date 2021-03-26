import React, { useEffect, useState } from "react";

import styled, { css } from "styled-components";

// components
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Camera from "../components/Camera";
import Counter from "../components/Counter";
import Guide from "../components/Guide";
import Loader from "../components/Loader";

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

  ${(props) =>
    (props.isLoading || props.testMode) &&
    css`
      visibility: hidden;
    `}
`;

function Create(props) {
  const [guide, setGuide] = useState(true);
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const [load, setLoad] = useState(false);
  const [test, setTest] = useState(false);

  const onCancel = () => {
    setGuide(false);
    if (step === 3) {
      setTest(true);
    }
  };

  const onClick = () => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    if (count === 8) {
      setCount(0);
      setLoad(true);
    }
  }, [count]);

  return (
    <Container flex height="100vh">
      <Camera testMode={test} />
      <Guide visible={guide} step={step} onCancel={onCancel} />
      <Navbar text="동글이 키우는 법" timerPlaying={test} />
      <Counter count={count} />
      <CamButton onClick={onClick} isLoading={load} testMode={test} />
      <Loader
        visible={load}
        step={step}
        setGuide={setGuide}
        setStep={setStep}
        setLoading={setLoad}
      />
    </Container>
  );
}

export default Create;
