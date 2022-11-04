import * as React from "react";
import { Link } from "react-router-dom";
import Player from "./Player";
import audioPath from "./sound.mp3";

const audioOptions = {
  autoplay: true,
  controls: true,
  sources: [
    {
      src: audioPath,
      type: "audio/mp3",
    },
  ],
};

const Audio = () => {
  return (
    <div>
      <Player onReady={undefined} options={audioOptions} tag="audio" />
      <Link to="/">Homepage</Link>
    </div>
  );
};

export default Audio;
