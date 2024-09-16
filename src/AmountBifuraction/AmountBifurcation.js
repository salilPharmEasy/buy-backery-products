import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { ThemeContext } from "../BakeyItemsWrapper/config";
import { itemsValues } from "../BakeyItemsWrapper/config";
import CloseButton from "./images/close.png";

import "./AmountBifuraction.scss";

export default function AmountBifurcation({
  isBifurcationFixed,
  toggleIsHidden,
}) {
  const contextConsumer = useContext(ThemeContext);
  const { checkout, totalAmount } = contextConsumer;
  const location = useLocation();
  const isPathCheckout = location.pathname === "/checkout";
  const navigate = useNavigate();
  const checkoutMap = Object.keys(checkout);

  const navigateHandler = () => {
    navigate("/checkout");
  };

  return (
    <div
      className="amountBifurcationContainer"
      style={isBifurcationFixed ? { width: "auto" } : {}}
    >
      <div>
        <div className="summaryHeaderContainer">
          <h1>Amount Summary</h1>
          {!isPathCheckout && (
            <img
              src={CloseButton}
              onClick={toggleIsHidden}
              className="closeButton"
              height="20px"
              width="20px"
              alt=""
            />
          )}
        </div>
      </div>

      {checkoutMap.length === 0 ? (
        <div className="emptySummary">Add Some Items</div>
      ) : (
        <div className="outerContainer">
          <div className="container">
            {checkoutMap.map((key) => {
              const { name, id, image, price } = itemsValues[key];
              const totalPrice = checkout[key] * price;
              console.log(
                "name:: " + name,
                "Item price:: " + price,
                "totalPrice:: " + totalPrice
              );
              return (
                <div key={id} className="perItem">
                  <div className="imageNameContainer">
                    <img
                      className="image"
                      src={image}
                      height="25px"
                      width="25px"
                      alt=""
                    />
                    <div>{name} </div>{" "}
                  </div>
                  <div>
                    {checkout[key]} * {price} ={" "}
                    <span className="makeBold">{totalPrice}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="line" />

          <div className="subtotal">
            <div>SubTotal</div>
            <div className="makeBold">{totalAmount.subTotal}</div>
          </div>
          <div className="subtotal">
            <div>Shipping</div>
            <div className="makeBold">{totalAmount.shipping}</div>
          </div>
          <div className="line" />
          <div className="total">
            <div>Total</div>
            <div className="makeBold">{totalAmount.total}</div>
          </div>
          {isPathCheckout ? (
            <div className="opConsole">Check the Output in console </div>
          ) : (
            <button className="buttonCheckout" onClick={navigateHandler}>
              Proceed to Checkout
            </button>
          )}
        </div>
      )}
    </div>
  );
}
