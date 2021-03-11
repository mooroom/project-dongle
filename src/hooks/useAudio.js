import { useState } from "react";

export const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const [ended, setEnd] = useState(false);

  const onPlay = () => {
    console.log(audio);
    setPlaying(true);
    audio.play();
  };

  audio.addEventListener("ended", () => {
    setPlaying(false);
    setEnd(true);
  });

  return [onPlay, playing, ended];
};
