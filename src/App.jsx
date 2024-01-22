
import './App.css'
import Auth from './componets/Auth/Auth';
import Layout from './componets/Layout';
import Products from './componets/Products/products'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Layout><Products /></Layout>} />
            <Route path="/Login" element={<Auth/>} />
          </Routes>
        </Router>
      </div>
    );
  }

export default App
