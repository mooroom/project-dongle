import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";

const YoutubeBlock = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

function YoutubeEmbed({ embedId, setEnded }) {
  const opts = {
    height: "853",
    width: "480",
    playerVars: {},
  };

  return (
    <YoutubeBlock>
      {/* <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embeded youtube"
      /> */}
      <YouTube videoId={embedId} onEnd={() => setEnded(true)} />
    </YoutubeBlock>
  );
}

export default YoutubeEmbed;
