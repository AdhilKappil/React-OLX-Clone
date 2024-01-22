
import './App.css'
import Auth from './componets/Auth/Auth';
import Layout from './componets/Layout';
import ProductDetais from './componets/Product Details/ProductDetais';
import Products from './componets/Products/products'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sell from './componets/SellProduct/Sell';

function App() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Layout><Products /></Layout>} />
            <Route path="/Login" element={<Auth/>} />
            <Route path='/ProductDetails' element={<ProductDetais/>} />
            <Route path='/sell' element={<Sell/>}/>
          </Routes>
        </Router>
      </div>
    );
  }

export default App
