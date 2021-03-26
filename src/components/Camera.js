import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ml5 from "ml5";

const CameraBlock = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  .videoFeed {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .result {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 5px 8px;
    box-sizing: border-box;
    background: #e3e3e3;
    border-radius: 10px;
    font-size: 1.5rem;
    color: #333333;
    font-weight: bold;
    height: 2.5rem;
    text-align: center;
  }
`;

let classifier;

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function Camera({ testMode }) {
  const videoRef = useRef();
  const [result, setResult] = useState([]);

  useEffect(() => {
    classifier = ml5.imageClassifier("./model/model.json", () => {
      navigator.mediaDevices
        // .getUserMedia({ video: true, audio: false })
        .getUserMedia({video: {facingMode: {exact: "environment"}}, audio: false})
        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        });
    });
  }, []);

  let i;

  useInterval(() => {
    if (classifier) {
      classifier.classify(videoRef.current, (error, results) => {
        if (error) {
          console.error(error);
          return;
        }
        setResult(results);
      });
    }
  }, 500);

  return (
    <CameraBlock>
      <video className="videoFeed" ref={videoRef} />
      {testMode && (
        <div className="result">{result[0].label.split(",")[0]}</div>
      )}
    </CameraBlock>
  );
}

export default React.memo(Camera);
