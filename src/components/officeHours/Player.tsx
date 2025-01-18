import { useRef, useState } from "react";

// import components
import PlayerDisplayTrack from "./PlayerDisplayTrack";
import PlayerControls from "./PlayerControls";
import ProgressBar from "./ProgressBar";

//import style
import "../../styles/audio-player.css";

const AudioPlayer = (currentTrack: any) => {
  // states
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // reference
  const audioRef = useRef();
  const progressBarRef = useRef();

  return (
    <>
      <div className="player">
        <div className="inner">
          <PlayerDisplayTrack
            {...{
              currentTrack,
              audioRef,
              setDuration,
              progressBarRef,
            }}
          />
          <PlayerControls
            {...{
              audioRef,
              progressBarRef,
              duration,
              setTimeProgress,
            }}
          />
          <ProgressBar
            {...{ progressBarRef, audioRef, timeProgress, duration }}
          />
        </div>
      </div>
    </>
  );
};
export default AudioPlayer;
