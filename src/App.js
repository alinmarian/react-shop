import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import ProductDetails from './pages/products/ProductDetails';
import Products from './pages/products/Products';
import Contact from './pages/contact/Contact';
import AdminDashboard from './pages/admin/Dashboard/AdminDashboard';
import CreateProduct from './pages/admin/Dashboard/CreateProduct';
import EditProduct from './pages/admin/Dashboard/EditProduct';
import ShoppingCart from './pages/cart/ShoppingCart';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import React from 'react';
import UserProfile from './pages/admin/Dashboard/UserProfile';

function App() {

  // const navigate = useNavigate();

  // function checkToken() {
  //   if ("token" in localStorage) {
  //     alert("Welcome to the admin panel");
  //   } else {
  //     alert(`You don't have permission to view this page. Please login in order to view this resource!`);
  //     navigate("/");
  //   }
  // }

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/product/:id" element={<ProductDetails/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/dashboard" element={<AdminDashboard/>}></Route>
            <Route path="/product/create" element={<CreateProduct/>}></Route>
            <Route path="/product/edit/:productId" element={<EditProduct/>}></Route>
            <Route path="/cart" element={<ShoppingCart/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/profile" element={<UserProfile/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
