import React, { useState } from "react";
import OperatorButton from "./OperatorButton";
import { operators } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

export default function Operators () {
  // STEP 2 - add the imported data to state
  const [operatorState] = useState(operators);
  //console.log("operators", useState());
  return (
    <div>
        {operatorState.map((operators, index) => (
          <OperatorButton key={index} operators={operators} />
        ))}
      </div>
  );
};


