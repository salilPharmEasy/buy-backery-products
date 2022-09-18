import React, { useContext } from "react";
import { ThemeContext } from "../BakeyItemsWrapper/config";
import QuantitySelect from "../QuantitiySelect";
import AmountBifurcation from "../AmountBifuraction";
import FixedStrip from "../FixedStrip";

import { itemsKeys, itemsValues } from "./config";

import "./BakeryItemsWrapper.scss";

export default function BakeryItemsWrapper() {
  const contextConsumer = useContext(ThemeContext);
  const {
    totalAmount: { total },
  } = contextConsumer;
  return (
    <div className="bakerItemsContainer">
      <div className="flexContainer">
        <BakeryItems />
        <div className="amountBifurcation">
          <AmountBifurcation />
        </div>
      </div>
     {total !==0  && <FixedStrip />}
    </div>
  );
}

const BakeryItems = () => {
  const contextConsumer = useContext(ThemeContext);
  const { checkout } = contextConsumer;
  return (
    <div className="bakerItemsOuter">
      <h1>Select the Items you want to add</h1>
      <div className="bakerItems">
        {itemsKeys.map((item) => {
          const { maxQuantity, name, id, image, price } = itemsValues[item];
          return (
            <div className="bakerItem" key={id}>
              <img className="itemImage" src={image} alt="" />
              <div className="itemDescription">{name}</div>
              <div className="priceContainer">
                &#8377; <span className="price">{price}</span>
              </div>
              <QuantitySelect
                maxQuantity={maxQuantity}
                id={id}
                quantity={checkout[id]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
