const DisplayTrack = ({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
}) => {
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
        </div>
      </div>
    </div>
  );
};
export default DisplayTrack;
