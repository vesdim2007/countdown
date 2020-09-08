import React from "react";
import PropTypes from "prop-types";
import { SText } from "./TextComponent.style";

const TextComponent = (props) => {
  TextComponent.propTypes = {
    text: PropTypes.string,
    blinking: PropTypes.bool,
    colored: PropTypes.bool,
  };

  return (
    <SText blinking={props.blinking} colored={props.colored}>
      {props.text}
    </SText>
  );
};

export default TextComponent;
