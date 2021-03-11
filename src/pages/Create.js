import React, { useRef, useState } from "react";

// packages
import { Link } from "react-router-dom";

// components
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Container from "../components/Container";
import Alert from "../components/Alert";
import Guide from "../components/Guide";
import BottomBox from "../components/BottomBox";
import Loader from "../components/Loader";

// sounds
import audio_face from "../asset/sound/audio3_face.m4a";
import audio_arm from "../asset/sound/audio4_arm.m4a";
import audio_leg from "../asset/sound/audio5_leg.m4a";

function Create(props) {
  const [mode, setMode] = useState("guide");
  const [step, setStep] = useState("face");
  const [showAlert, setShowAlert] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [loader, setLoader] = useState(false);

  const count = useRef(0);

  // audio1
  const audio1 = new Audio(audio_face);
  const [ended1, setEnd1] = useState(false);
  const onPlay1 = () => {
    setPlaying(true);
    audio1.play();
  };
  audio1.addEventListener("ended", () => {
    setPlaying(false);
    setEnd1(true);
    setMode("photo");
    setStep("arm");
  });
  // audio2
  const audio2 = new Audio(audio_arm);
  const [ended2, setEnd2] = useState(false);
  const onPlay2 = () => {
    setPlaying(true);
    audio2.play();
  };
  audio2.addEventListener("ended", () => {
    setPlaying(false);
    setEnd2(true);
    setMode("photo");
    setStep("leg");
  });
  // audio3
  const audio3 = new Audio(audio_leg);
  const [ended3, setEnd3] = useState(false);
  const onPlay3 = () => {
    setPlaying(true);
    audio3.play();
  };
  audio3.addEventListener("ended", () => {
    setPlaying(false);
    setEnd3(true);
    setMode("photo");
  });

  //
  const clickHandler = () => {
    if (mode === "guide") {
      if (step === "face") {
        if (!playing && !ended1) {
          onPlay1();
        }
        if (playing && !ended1) {
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 500);
        }
      } else if (step === "arm") {
        if (!playing && !ended2) {
          onPlay2();
        }
        if (playing && !ended2) {
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 500);
        }
      } else if (step === "leg") {
        if (!playing && !ended3) {
          onPlay3();
        }
        if (playing && !ended3) {
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 500);
        }
      }
    } else if (mode === "photo") {
      count.current += 1;
      if (count.current === 8) {
        count.current = 0;
        setTimeout(() => {
          setLoader(true);
        }, 250);
      }
    }
  };
  const onCancel = () => {
    setMode("guide");
    setLoader(false);
    if (ended3) {
      window.location.href = "/test";
    }
  };
  return (
    <div>
      <Loader visible={loader} onCancel={onCancel} />

      <Navbar text="동글이 키우는 법" audioPlaying={playing} />
      {mode === "guide" && (
        <Container flex top="90px" bottom="110px">
          <Guide type={step} />
        </Container>
      )}
      <BottomBox>
        <Button
          width="100%"
          onClick={clickHandler}
          color={mode === "photo" ? "#8D60BE" : "#55119E"}
        >
          {mode === "photo" ? count.current : "준비하기"}
        </Button>
      </BottomBox>
      <Alert show={showAlert} />
    </div>
  );
}

export default Create;
