import React, { useContext } from "react";

import { ThemeContext } from "../BakeyItemsWrapper/config";

import "./QuantitySelect.scss";

export default function QuantitySelect({ maxQuantity, quantity, id }) {
  const contextConsumer = useContext(ThemeContext);
  const { updateQuantity } = contextConsumer;
  const newQuantity = quantity ? quantity : 0;
  return (
    <div className="quantitySelectContainer">
      <div className="innerContainer">
        <div
          className="minus"
          onClick={() =>
            updateQuantity({
              type: "DECREMENT",
              maxQuantity,
              quantity: newQuantity,
              id,
            })
          }
        >
          -
        </div>

        <div className="quantityCount">{newQuantity}</div>
        <div
          className="plus"
          onClick={() =>
            updateQuantity({
              type: "INCREMENT",
              maxQuantity,
              quantity: newQuantity,
              id,
            })
          }
        >
          +
        </div>
      </div>
    </div>
  );
}
