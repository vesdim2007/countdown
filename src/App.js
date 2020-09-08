import React, { useState } from "react";
import { SApp } from "./App.style";
import Timer from "./components/Timer";
import TimerInput from "./components/TimerInput";
import Actions from "./components/Actions";

const App = () => {
  const [minutes, setMinutes] = useState(0);
  const [leftTime, setLeftTime] = useState({ m: 0, s: 0 });
  const [timeInterval, setTimeInterval] = useState(1000);
  const [pause, setPause] = useState(false);

  const onChange = (e) => {
    setMinutes(Number(e.target.value));
  };

  const onStartTimer = () => {
    if (!Number.isInteger(minutes) || minutes < 1) {
      alert("Please provide positive integer for minutes");
      return;
    }

    setPause(false);
    setLeftTime({ m: minutes, s: 0 });
  };

  const onPauseTimer = () => {
    setPause(!pause);
  };

  const onSpeed = (interval) => {
    setTimeInterval(interval);
  };

  const clearTimer = () => {
    setMinutes(0);
    setLeftTime({ m: 0, s: 0 });
    setTimeInterval(1000);
  };

  return (
    <SApp>
      <TimerInput
        label="Countdown:"
        value={minutes}
        placeholder="(Min)"
        type="tel"
        onChange={onChange}
        onStartTimer={onStartTimer}
      />
      <Timer
        initialMinutes={leftTime.m}
        initialSeconds={leftTime.s}
        interval={timeInterval}
        pause={pause}
        onPauseTimer={onPauseTimer}
        clearTimer={clearTimer}
      />
      <Actions
        onSpeed={onSpeed}
        interval={timeInterval}
        disabled={leftTime.m === 0}
      />
    </SApp>
  );
};

export default App;
