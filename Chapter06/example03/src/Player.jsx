import * as React from "react";
import videojs from "video.js";

const Player = ({ options, onReady, tag = "video" }) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);

  React.useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        onReady?.(player);
      }));
    }
  }, [options, videoRef]);

  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      {React.createElement(tag, {
        ref: videoRef,
        className: "video-js vjs-big-play-centered",
      })}
    </div>
  );
};

export default Player;
