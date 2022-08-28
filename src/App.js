import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Homepage } from './components/Homepage'
import { About } from './components/About'
import { Shop } from './components/Shop'
import { Cart } from './components/Cart'
import { Products } from './ProductLists'

function App() {
  const [cart, setCart] = useState([])

  function addItem(event) {
    let newElement = event.target.index
    setCart(cart => [...cart, newElement])
  }

  function removeItem(event) {
    let item = event.target.index
    setCart(cart => cart.filter((product) => product !== item))
  }

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="" element={<Homepage />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
