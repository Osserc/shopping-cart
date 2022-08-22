import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Homepage } from './components/Homepage'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="" element={<Homepage />}></Route>
        {/* <Route path="about" element={<About />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="checkout" element={<Checkout />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
