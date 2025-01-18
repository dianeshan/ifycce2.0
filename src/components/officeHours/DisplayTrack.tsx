import { Track } from "./AudioPlayer";

interface DisplayTrackProps {
  currentTrack: Track;
  audioRef: any;
  setDuration: (duration: number) => void;
  progressBarRef: any;
  handleNext: () => void;
}

const DisplayTrack = (props: DisplayTrackProps) => {
  const { currentTrack, audioRef, setDuration, progressBarRef, handleNext } = props;
  
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <div>
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleNext}
      />
      <div className="audio-info">
        <div className="text">
          <p className="title">{currentTrack.title}</p>
          <p>{currentTrack.date}</p>
          <p>{currentTrack.info}</p>
        </div>
      </div>
    </div>
  );
};
export default DisplayTrack;
