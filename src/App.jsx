import Navbar from "./components/Navbar";
import CatalogPage from "./pages/CatalogPage";
import AboutPage from "./pages/AboutPage";
import OrderPage from "./pages/OrderPage";
// import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router";
import { COLORS } from "./data/colors";
import Box from "@mui/material/Box";

export default function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: COLORS.LIGHT,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
        {/* <Footer /> */}
      </Box>
    </BrowserRouter>
  );
}
