import React from "react";
import PropTypes from "prop-types";
import SButton from "./Button.style";

const Button = (props) => {
  return (
    <SButton
      onClick={props.onClick}
      disabled={props.disabled}
      color={props.active ? props.color : "transparent"}
      height={props.height}
      border={props.border}
      margin={props.margin}
      circle={props.circle}
      width={props.width}
    >
      {props.text}
    </SButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  height: PropTypes.string,
  border: PropTypes.bool,
  circle: PropTypes.bool,
  margin: PropTypes.string,
  width: PropTypes.string,
};

export default Button;
