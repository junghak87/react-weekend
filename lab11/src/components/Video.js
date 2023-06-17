import { useRef, useState } from "react";

const Video = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideo = () => {
    setPlaying(!playing);

    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <div>
      <h2>Video Player</h2>
      <button onClick={handleVideo}>{playing ? "일시정지" : "플레이"}</button>
      <div>
        <video width="400" ref={videoRef}>
          <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Video;
