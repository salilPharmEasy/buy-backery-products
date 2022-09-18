import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopNavbar from "./TopNavbar";
import BakeryItems from "./BakeyItemsWrapper";
import Checkout from "./Checkout/Checkout";

import {
  ThemeContext,
  checkout,
  itemsValues,
  totalAmount,
} from "./BakeyItemsWrapper/config";

import "./App.css";

const App = () => {
  const [state, setState] = useState({ checkout, totalAmount });

  const updateTotal = ({ quantity }) => {
    const newState = { ...state };
    let newSubTotal = 0;

    Object.keys(checkout).forEach((key) => {
      const { price } = itemsValues[key];
      newSubTotal = newSubTotal + quantity * price;
    });

    newState.totalAmount.subTotal = newSubTotal;
    const { shipping, subTotal } = state.totalAmount;
    newState.totalAmount.total = shipping + subTotal;
    //update
    setState(newState);
  };

  const updateQuantity = ({ type, maxQuantity, quantity, id }) => {
    if (type === "INCREMENT") {
      if (quantity < maxQuantity) {
        const newQuantity = quantity + 1;
        const newState = { ...state };
        newState.checkout[id] = newQuantity;
        setState(newState);

        updateTotal({ quantity: newQuantity });
      } else {
        alert("Max Quantity limit reached");
      }
    } else if (type === "DECREMENT") {
      if (quantity > 0) {
        const newQuantity = quantity - 1;
        const newState = { ...state };
        if (newQuantity === 0) {
          delete newState.checkout[id];
          setState(newState);
        } else {
          newState.checkout[id] = newQuantity;
          setState(newState);
        }

        updateTotal({ quantity: newQuantity });
      } else {
        alert("Min Quantity limit reached");
      }
    }
  };

  return (
    <Router>
      <ThemeContext.Provider
        value={{
          ...state,
          updateQuantity,
        }}
      >
        <div className="App">
          <TopNavbar />

          <Routes>
            <Route path="/" element={<BakeryItems />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
};

export default App;
