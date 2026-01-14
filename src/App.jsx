import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import CartPage from "./pages/Cart/Cart_Page";
import Brand from "./pages/Brands/Brand";
import ContactWrapper from "./pages/Contact/ContactWrapper";
import Terms from "./pages/terms/termsWrapper";
import FAQ from "./pages/FAQ/FAQWrapper";
import PrivacyWrapper from "./pages/privacy/privacyWrapper";
import AboutWrapper from "./pages/About/AboutWrapper";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutWrapper />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/contact" element={<ContactWrapper />} />
        <Route path="/privacy" element={<PrivacyWrapper />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}
