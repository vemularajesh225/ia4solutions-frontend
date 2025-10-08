import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaArrowUp } from "react-icons/fa";

const MainLayout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Persist dark mode in localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") setDarkMode(true);
  }, []);

  // Apply/remove dark class to <html> and save preference
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Show scroll-to-top button on scroll
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Content */}
      <main className="flex-1 transition-colors duration-500">
        <div className="animate-fade-in">{children}</div>
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* Scroll-to-top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-colors duration-300 z-50 ${
            darkMode
              ? "bg-orange-500 text-white hover:bg-orange-600"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default MainLayout;
