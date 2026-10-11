import Navbar from "./components/Navbar";
import CatalogPage from "./pages/CatalogPage";
import AboutPage from "./pages/AboutPage";
import OrderPage from "./pages/OrderPage";
// import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
