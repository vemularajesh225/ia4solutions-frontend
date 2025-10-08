import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Services", path: "/services" },
    { name: "Placements", path: "/placements" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-sm ${
        scrolled
          ? "bg-white/70 dark:bg-gray-900/70 shadow-lg"
          : "bg-white/30 dark:bg-gray-900/30"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center py-3">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 sm:gap-4 group transition-all duration-300"
        >
          <img
            src="/images/logos/INNOVATIVE_ACDEMY.png"
            alt="IA4Solutions Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full"
          />
          <div className="w-[2px] h-10 sm:h-12 bg-gray-900 dark:bg-gray-300 transition-all duration-300 group-hover:h-14"></div>
          <span className="text-lg sm:text-xl font-bold text-blue-900 dark:text-white">
            ia4solutions
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className={`relative font-medium transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500"
                  : "text-gray-800 dark:text-gray-200 hover:text-orange-500 hover:scale-105"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 text-gray-800 dark:text-gray-200 hover:text-orange-500 transition transform hover:scale-110"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={toggleDarkMode}
            className="text-gray-800 dark:text-gray-200 hover:text-orange-500 transition"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-800 dark:text-gray-200 hover:text-orange-500 transition"
          >
            {open ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="backdrop-blur-md bg-white/70 dark:bg-gray-900/70 px-6 py-6 space-y-4 shadow-lg animate-slide-down">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block font-medium transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500"
                  : "text-gray-800 dark:text-gray-200 hover:text-orange-500 hover:scale-105"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
