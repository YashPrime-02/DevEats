import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import CartPage from "./pages/Cart/Cart_Page";
import Brand from "./pages/Brands/Brand";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path ="/brand" element ={<Brand/>}/>
      </Routes>
    </BrowserRouter>
  );
}
