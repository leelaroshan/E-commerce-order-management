
import React from "react";
import Login from "./Components/Login";
import './App.css'
import Navbar from "./Common/Navbar";
import Products from "./Components/Products";
import ProductDetails from './Components/ProductDetails';
import Orders from './Components/Orders';


import { BrowserRouter , HashRouter, Switch, Route,Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/product/:productId" element={<ProductDetails />} />
          <Route exact path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
