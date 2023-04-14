import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/global_components/Header";
import Sell from "./pages/Sell";
import Basket from "./components/global_components/Basket";

function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home items= {items} setItems={setItems} cartItems={cartItems} setCartItems={setCartItems}/>} />
        <Route path="/sell" element={<Sell setItems={setItems}/>} /> 
		<Route path="/basket" element={<Basket cartItems={cartItems} setCartItems={setCartItems} />} />
      </Routes>
    </div>
  );
}

export default App;
