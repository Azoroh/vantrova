import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styles from "./App.module.css";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";

export default function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Navbar />

        <div className={styles.page}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
