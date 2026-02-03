import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// ✅ Home stays loaded from start
import Home from "./pages/Home/Home";

// ⏳ Lazy pages
const Auth = lazy(() => import("./pages/Auth/Auth"));
const Admin = lazy(() => import("./pages/Admin/AdminWrapper"));
const About = lazy(() => import("./pages/About/AboutWrapper"));
const Menu = lazy(() => import("./pages/Menu/Menu"));
const CartPage = lazy(() => import("./pages/Cart/Cart_Page"));
const Brand = lazy(() => import("./pages/Brands/Brand"));
const ContactWrapper = lazy(() => import("./pages/Contact/ContactWrapper"));
const PrivacyWrapper = lazy(() => import("./pages/privacy/privacyWrapper"));
const Terms = lazy(() => import("./pages/terms/termsWrapper"));
const FAQ = lazy(() => import("./pages/FAQ/FAQWrapper"));
const ThankYou = lazy(() => import("./pages/ThankYou/ThankYouWrapper"));
const NotFound = lazy(() => import("./pages/NotFound/NotFoundWrapper"));

import PageLoader from "./components/PageLoader";
import ScrollToTop from "./components/ScrollToTop";
import AuthGuard from "./components/Guards/AuthGuard";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* ✅ GLOBAL FIX */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={ <AuthGuard> <CartPage /></AuthGuard> }/>
          <Route path="/brand" element={<Brand />} />
          <Route path="/contact" element={<ContactWrapper />} />
          <Route path="/privacy" element={<PrivacyWrapper />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/thank-you" element={<ThankYou />} />

          {/* ❌*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}



