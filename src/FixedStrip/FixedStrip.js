import React, { useState, useContext } from "react";
import AmountBifurcation from "../AmountBifuraction";
import { ThemeContext } from "../BakeyItemsWrapper/config";

import "./FixedStrip.scss";

export default function FixedStrip() {
  const [isHidden, setIsHidden] = useState(false);
  const contextConsumer = useContext(ThemeContext);
  const {
    totalAmount: { total },
  } = contextConsumer;

  const toggleIsHidden = () => setIsHidden(!isHidden);

  return (
    <div className="fixedStripContainer">
      {isHidden && (
        <AmountBifurcation isBifurcationFixed toggleIsHidden={toggleIsHidden} />
      )}
      <div className="fixedStripContainerInner" onClick={toggleIsHidden}>
        <div>Total Amount(tap to view summary)</div>
        <div className="makeBold"> Rs {total}</div>
      </div>
    </div>
  );
}
