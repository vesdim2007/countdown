import styled from "styled-components";
import PropTypes from "prop-types";

const SButton = styled.button`
  background-color: ${(props) => props.color};
  color: ${(props) => (props.color !== "transparent" ? "white" : "black")};
  height: ${(props) => props.height};
  width: ${(props) =>
    props.circle ? props.height : props.width ? props.width : "auto"};
  font-size: 1rem;
  padding: auto;
  border: ${(props) => (props.border ? "1px solid black" : "none")};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  outline: none;
  border-radius: ${(props) => (props.circle ? "50%" : "0.1rem")};
`;

SButton.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  border: PropTypes.bool,
  margin: PropTypes.string,
  circle: PropTypes.bool,
  width: PropTypes.string,
};

export default SButton;
