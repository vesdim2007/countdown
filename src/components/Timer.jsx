import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextComponent from "./TextComponent";
import { STimer, SClock } from "./Timer.style";
import { STimerWrapper } from "./TimerInput.style";
import Button from "./Button";

const Timer = (props) => {
  const { initialMinutes, initialSeconds, interval, pause } = props;
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [end, setEnd] = useState(false);
  const [half, setHalf] = useState(false);

  useEffect(() => {
    setMinutes(initialMinutes);

    setSeconds(initialSeconds);
  }, [initialMinutes, initialSeconds]);

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (!pause) {
        if (seconds > 0) {
          if (minutes === 0) {
            setHalf(seconds - 1 < initialMinutes * 30);
          }
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            setEnd(initialMinutes !== 0);
            if (initialMinutes !== 0) {
              setTimeout(() => {
                props.clearTimer();
              }, 2000);
            }
            clearInterval(myInterval);
          } else {
            setHalf(minutes * 60 < (initialMinutes / 2) * 60);
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }
    }, interval);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <STimer>
      {initialMinutes !== 0 && (
        <TextComponent
          text={end ? "Time’s up!" : half ? "More than halfway there!" : ""}
          colored={minutes === 0 && seconds < 21 && !end}
          blinking={minutes === 0 && seconds < 11 && !end}
        />
      )}
      <STimerWrapper>
        <SClock>
          {" "}
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </SClock>
        {initialMinutes !== 0 && (
          <Button
            height="2rem"
            text={pause ? ">" : "||"}
            color="transparent"
            onClick={props.onPauseTimer}
            active={true}
            border={true}
            circle={true}
            margin="1rem"
          ></Button>
        )}
      </STimerWrapper>
    </STimer>
  );
};

Timer.propTypes = {
  initialMinutes: PropTypes.number.isRequired,
  initialSeconds: PropTypes.number.isRequired,
  interval: PropTypes.number.isRequired,
  pause: PropTypes.bool.isRequired,
  onPauseTimer: PropTypes.func.isRequired,
  clearTimer: PropTypes.func.isRequired,
};

export default Timer;
