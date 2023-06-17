import { useRef, useState } from "react";

const Stopwatch = () => {
  // 시작 시간을 저장하기 위한 state
  const [startTime, setStartTime] = useState(null);

  // 1/100 초 마다 측정하는 시간을 저장하기 위한 state
  const [now, setNow] = useState(null);

  let timeRef = useRef(null);

  let timePassed = 0;

  if (startTime !== null && now !== null) {
    timePassed = (now - startTime) / 1000;
  }

  const handleStartClick = () => {
    if (startTime === null) {
      const initTime = Date.now();
      setStartTime(initTime);
      setNow(initTime);

      timeRef.current = setInterval(() => {
        setNow(Date.now());
      }, 10);
    }

    if (startTime !== null) {
      timeRef.current = setInterval(() => {
        setNow(Date.now());
      }, 10);

      console.log(timeRef.current);
    }
  };

  const handleStopClick = () => {
    console.log(timeRef.current);
    clearInterval(timeRef.current);
  };

  return (
    <div>
      <h2>Stopwatch</h2>
      <button onClick={handleStartClick}>Start</button>
      <button onClick={handleStopClick}>Stop</button>
      <h3>Time : {timePassed}</h3>
    </div>
  );
};

export default Stopwatch;
