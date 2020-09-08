import React from "react";
import PropTypes from "prop-types";
import { STimerWrapper, SInputLabel, SInput } from "./TimerInput.style";
import Button from "./Button";

const TimerInput = (props) => {
  return (
    <STimerWrapper>
      <SInputLabel>{props.label}</SInputLabel>
      <SInput
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
      />
      <Button
        height="2.6rem"
        text="START"
        color="#20B2AA"
        onClick={props.onStartTimer}
        active={true}
        border={false}
      />
    </STimerWrapper>
  );
};

TimerInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onStartTimer: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default TimerInput;
