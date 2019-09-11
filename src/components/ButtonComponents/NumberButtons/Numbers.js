import React, { useState } from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders.
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

//
export default function Numbers() {
  // STEP 2 - add the imported data to state
  const [numberState] = useState(numbers);
  //console.log("numbers", useState());
  return (
    <div>
        {numberState.map((numbers, index) => (
          <NumberButton key={index} numbers={numbers} />
        ))}
      </div>
  );
}
// console.log(index);
