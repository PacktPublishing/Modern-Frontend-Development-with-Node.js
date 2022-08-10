import * as React from "react";
import { Link } from "react-router-dom";
import Player from "./Player";
import videoPath from "./earth.mp4";

const videoOptions = {
  autoplay: true,
  controls: true,
  sources: [
    {
      src: videoPath,
      type: "video/mp4",
    },
  ],
};

const Video = () => {
  return (
    <div>
      <Player onReady={undefined} options={videoOptions} tag="video" />
      <Link to="/">Homepage</Link>
    </div>
  );
};

export default Video;
