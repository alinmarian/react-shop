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


function App() {
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
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
