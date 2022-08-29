import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Homepage } from './components/Homepage'
import { About } from './components/About'
import { Shop } from './components/Shop'
import { Cart } from './components/Cart'
import { products } from './ProductLists'

function App() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    console.log(cart)
  }, [cart])

  function handleCart(event) {
    let selectedProduct = products.find((item) => item.id === +event.target.dataset.id)
    switch (event.target.dataset.action) {
      case 'add':
        handlePlus(selectedProduct)
        break;
      case 'remove':
        handleMinus(selectedProduct)
        break;
      default:
        clearCart()
    }    
  }

  function handlePlus(selectedProduct) {
    if (checkPresence(selectedProduct) === false) {
      addItem(selectedProduct)
    } else {
      incrementItem(selectedProduct)
    }
  }

  function handleMinus(selectedProduct) {
    if (checkPresence(selectedProduct) === false) {
      removeItem(selectedProduct)
    } else {
      decrementItem(selectedProduct)
    }
  }

  function addItem(selectedProduct) {
    let object = { product: selectedProduct,
      quantity: 1
    }
    setCart(cart => [...cart, object])
  }

  function incrementItem(selectedProduct) {
    let updatedCart = cart.map((item) => {
      if (item.product === selectedProduct) {
        item.quantity++
      }
      return item
    })
    setCart(updatedCart)
  }

  function removeItem(selectedProduct) {
    setCart(cart => cart.filter((product) => product !== selectedProduct))
  }

  function decrementItem(selectedProduct) {
    let updatedCart = cart.map((item) => {
      if (item.product === selectedProduct) {
        item.quantity--
      }
      return item
    })
    setCart(updatedCart)
  }

  function clearCart() {
    setCart([])
  }

  function checkPresence(selectedProduct) {
    if (cart.filter((item) => item.product === selectedProduct).length !== 0) return true
    return false
  }

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="" element={<Homepage />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="shop" element={<Shop handleCart={handleCart} />}></Route>
        <Route path="cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export { App }
