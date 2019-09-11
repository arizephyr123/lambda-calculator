import React from "react";

const OperatorButton = props => {
  //console.log(props.operators.char);
  return (
    <button className = 'operators'>
      {console.log(' in operatorbutton')}
      <span>{props.operators.char}</span>
    </button>
  );
};
export default OperatorButton;
