import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Homepage } from './components/Homepage'
import { About } from './components/About'
import { Shop } from './components/Shop'
import { Cart } from './components/Cart'

function App() {
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
