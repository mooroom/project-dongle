import React from "react";
import styled from "styled-components";

const CameraBlock = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .videoFeed {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function Camera(props) {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      let video = document.getElementsByClassName("videoFeed")[0];
      if (video) {
        video.srcObject = stream;
      }
    })
    .catch((err) => console.log(err));

  return (
    <CameraBlock>
      <video className="videoFeed" autoPlay muted></video>
    </CameraBlock>
  );
}

export default React.memo(Camera);
