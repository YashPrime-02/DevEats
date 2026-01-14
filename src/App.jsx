import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// ✅ Home stays eager (fast first paint)
import Home from "./pages/Home/Home";

// ⏳ Lazy-loaded pages
const About = lazy(() => import("./pages/About/AboutWrapper"));
const Menu = lazy(() => import("./pages/Menu/Menu"));
const CartPage = lazy(() => import("./pages/Cart/Cart_Page"));
const Brand = lazy(() => import("./pages/Brands/Brand"));
const ContactWrapper = lazy(() => import("./pages/Contact/ContactWrapper"));
const PrivacyWrapper = lazy(() => import("./pages/privacy/privacyWrapper"));
const Terms = lazy(() => import("./pages/terms/termsWrapper"));
const FAQ = lazy(() => import("./pages/FAQ/FAQWrapper"));

// ✅ Loader
import PageLoader from "./components/PageLoader";

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* ✅ Home loads immediately */}
          <Route path="/" element={<Home />} />

          {/* ⏳ Lazy routes */}
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/contact" element={<ContactWrapper />} />
          <Route path="/privacy" element={<PrivacyWrapper />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
