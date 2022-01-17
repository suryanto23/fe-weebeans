import React , {useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './css/primary-custom.css'
import Navigation from "./components/Navigation";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import PageNotFound from "./pages/PageNotFound";


function App() {
  const [count, setCount] = useState(0)
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/product" element={<ProductPage/>} />
        <Route path="/product/:id"  element={<ProductDetailPage count={count} setCount={setCount} />} />
        <Route path="/cart" element={<CartPage count={count} setCount={setCount} />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<PageNotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
