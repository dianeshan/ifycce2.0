interface DisplayTrackProps {
  currentTrack: any;
  audioRef: any;
  setDuration: (duration: number) => void;
  progressBarRef: any;
}

const DisplayTrack = (props: DisplayTrackProps) => {
  const { currentTrack, audioRef, setDuration, progressBarRef } = props;
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <div>
      <audio
        src={currentTrack.currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
      />
      <div className="audio-info">
        <div className="text">
          <p className="title">{currentTrack.currentTrack.title}</p>
          <p>{currentTrack.currentTrack.date}</p>
          <p>{currentTrack.currentTrack.info}</p>
        </div>
      </div>
    </div>
  );
};
export default DisplayTrack;
