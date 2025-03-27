import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import ContactForm from "./pages/Contact";
import { About } from "./pages/About";
import Loader from "./components/common/Loader"; // Import Loader component
import { useState, useEffect } from "react";
import "./assets/style.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => setLoading(false), 5000);
  }, []);

  if (loading) return <Loader />; // Show loader before content

  return (
    <>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App
