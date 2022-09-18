import Cake from "./Images/cake.png";
import Strawberry from "./Images/strawberry.png";
import FishCake from "./Images/fishCake.png";
import Berry from "./Images/berry.png";
import Bread from "./Images/bread.png";
import React from 'react';
export const itemsKeys = [100, 101, 102, 103, 104];

export const itemsValues = {
  100: {
    quantity: 0,
    maxQuantity: 12,
    name: "Cake",
    id: 100,
    image: Cake ,
    price: 100,
  },
  101: {
    quantity: 0,
    maxQuantity: 14,
    name: "Strawberry",
    id: 101,
    image:  Strawberry ,
    price: 200,
  },
  102: {
    quantity: 0,
    maxQuantity: 14,
    name: "FishCake",
    id: 102,
    image: FishCake ,
    price: 300,
  },
  103: {
    quantity: 0,
    maxQuantity: 14,
    name: "Pizza",
    id: 103,
    image: Berry ,
    price: 500,
  },
  104: {
    quantity: 0,
    maxQuantity: 14,
    name: "Buscuits",
    id: 104,
    image: Bread ,
    price: 150,
  },
};

export const checkout = {
}; 

export const totalAmount = {
  subTotal : 0,
  shipping: 500,
  total: 0
}


export const ThemeContext = React.createContext({
  checkout,
  totalAmount
});