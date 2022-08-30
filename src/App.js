import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Homepage } from './components/Homepage'
import { About } from './components/About'
import { Shop } from './components/Shop'
import { Cart } from './components/Cart'
import { CartLogic } from './CartLogic'

function App() {
  const useCart = CartLogic()

  return (
    <BrowserRouter>
    <Navbar itemsCount={useCart.countItems()} />
      <Routes>
        <Route path="" element={<Homepage />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="shop" element={<Shop cart={useCart.cart} handleCart={useCart.handleCart} />}></Route>
        <Route path="cart" element={<Cart cart={useCart.cart} handleCart={useCart.handleCart} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export { App }
