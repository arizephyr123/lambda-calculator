import React from "react";

const SpecialButton = props => {
  //console.log(props);
  return (
    <button className = 'specials'>
      <span>{props.specials}</span>
    </button>
  );
};
export default SpecialButton;
