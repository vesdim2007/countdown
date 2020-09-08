import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const blinkingAnimation = keyframes`
    50% {opacity: 0}
`;

export const SText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  font-style: italic;
  color: ${(props) => (props.colored ? "red" : "black")};
  animation-name: ${blinkingAnimation};
  animation-duration: ${(props) => (props.blinking ? "1s" : "0s")};
  animation-iteration-count: infinite;
`;

SText.propTypes = {
  colored: PropTypes.bool,
  blinking: PropTypes.bool,
};
