# Buy Backery Products 
Created a Ecommerce platforms to buy a backet product along with the checkout flow(using context). The Project contains both mWeb,dWeb views and have checkout page as well.

<img width="1238" alt="Screenshot 2022-09-19 at 12 01 24 AM" src="https://user-images.githubusercontent.com/34935249/190923561-a90b621c-089b-43a1-ba66-cb26ee4dbe61.png">
<img width="327" alt="Screenshot 2022-09-19 at 12 01 48 AM" src="https://user-images.githubusercontent.com/34935249/190923575-3cb87e6c-cab1-4f28-9c14-18236828cc66.png">

## Features

 - [x] Adding backery items and Amount Bifurcartion is updated accordingly.
 - [x] mWeb and dWeb compatibility
 - [x] Checkout page


## Frontend High Level Architecture
```
itemsKeys = [100, 101, 102, 103, 104];

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
```

## Build with
This section should list any major npm packages that you built your project using.
- [React.js] 
- [node-sass]
- [react-router] (Context)


## Installation

Curriculam Authoring Tool requires [Node.js](https://nodejs.org/) v12+ to run.

Install the dependencies after cloning the repo and start the server.

```sh
$ git clone https://github.com/salil0001/buy-backery-products.git
$ yarn install 
$ yarn start
```
## Contributions

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
  
1. Clone the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request
  
  
   [React.js]: <https://reactjs.org/>
   [node-sass]:<https://www.npmjs.com/package/node-sass/>
   [react-router]: <https://reactrouter.com/en/main />

   [Deployment-Link]:<https://www.npmjs.com/package/>
