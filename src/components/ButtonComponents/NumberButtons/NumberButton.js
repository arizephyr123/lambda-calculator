import React from "react";

const NumberButton = props => {
  //console.log(props);
  return (
      <button className = 'numbers'>
      <span>{props.numbers}</span>
      </button>
  );
};

export default NumberButton;
