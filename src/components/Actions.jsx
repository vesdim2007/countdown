import React from "react";
import SButton from "./Button";
import PropTypes from "prop-types";
import { SActions } from "./Actions.style";

const Actions = (props) => {
  const intervals = [1, 1.5, 2];
  return (
    <SActions>
      {intervals.map((item) => (
        <SButton
          key={item}
          text={`${item}x`}
          active={props.interval === 1000 / item}
          height="2.5rem"
          width="4rem"
          color="#808080"
          border={true}
          margin="0.5rem"
          disabled={props.disabled}
          onClick={() => props.onSpeed(1000 / item)}
        />
      ))}
    </SActions>
  );
};

Actions.propTypes = {
  interval: PropTypes.number.isRequired,
  onSpeed: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Actions;
