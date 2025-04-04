import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 300); // Small delay ensures the DOM is fully rendered before scrolling
        }
      }
    };

    scrollToHash();
  }, [location]); // Runs when route changes

  // useEffect(() => {
  //   // Disable Right-Click
  //   const disableRightClick = (event) => event.preventDefault();
  //   document.addEventListener("contextmenu", disableRightClick);

  //   // Disable Keyboard Shortcuts
  //   const disableKeyboardShortcuts = (event) => {
  //     if (
  //       event.key === "F12" ||
  //       (event.ctrlKey && event.shiftKey && event.key === "I") ||
  //       (event.ctrlKey && event.key === "U")
  //     ) {
  //       event.preventDefault();
  //     }
  //   };
  //   document.addEventListener("keydown", disableKeyboardShortcuts);

  //   // Clean up listeners on unmount
  //   return () => {
  //     document.removeEventListener("contextmenu", disableRightClick);
  //     document.removeEventListener("keydown", disableKeyboardShortcuts);
  //   };
  // }, []);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => setLoading(false), 5000);
  }, []);

  if (loading) return <Loader />; // Show loader before contentN

  return (
    <>
      <ScrollToTop />
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
