// import logo from './logo.svg';
import "./App.css";
import ProductCard from "./components/ProdutCard";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { Products } from "./pages/product";

function App() {
  return (
    // <BrandExample />
    // <ProductCard title="Hello" price={300} image="https://image3.mouthshut.com/images/imagesp/925042346s.jpg"/>
    // <Login />
    // <Register />
    <Routes>
      {/* <Route path='/' element={<Navigate to='/login' />} />- */}
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>

  );
}

export default App;
