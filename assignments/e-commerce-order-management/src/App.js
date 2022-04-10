
import React from "react";
// import Login from "./Components/Login";
import './App.css'
import Navbar from "./Common/Navbar";
import Products from "./Components/Products";
import ProductDetails from './Components/ProductDetails';
import Orders from './Components/Orders';
import SellerProducts from './Components/SellerProducts'

import { BrowserRouter , HashRouter, Switch, Route,Routes } from 'react-router-dom';
import Signin from "./Components/Signin";



function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Signin />} />
          {/* <Route exact path="/login" element={<Login />} /> */}
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/product/:productId" element={<ProductDetails />} />
          <Route exact path="/sellerproducts" element={<SellerProducts />} />
          <Route exact path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
