import React, { useState } from "react";
import SpecialButton from "./SpecialButton";
import { specials } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

export default function Specials () {
  // STEP 2 - add the imported data to state
  const [specialState] = useState(specials);
  //console.log("specials", useState());
  return (
    <div>
        {specialState.map((specials, index) => (
          <SpecialButton key={index} specials={specials} />
        ))}
      </div>
  );
};

