import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail, HiOutlineGlobeAlt } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = ({ darkMode }) => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  const textColor = darkMode ? "text-white" : "text-gray-900";
  const footerBg = darkMode ? "bg-gray-900 backdrop-blur-xl" : "bg-white/10 backdrop-blur-xl";
  const borderColor = darkMode ? "border-gray-700" : "border-gray-300";

  return (
    <footer className={`relative ${footerBg} py-10 border-t ${borderColor}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">

        {/* Logo & About */}
        <div className="space-y-5 text-center sm:text-left">
          <Link to="/" className="flex items-center gap-3 justify-center sm:justify-start">
            <img
              src="/images/logos/ia4s_logo.jpeg"
              alt="IA4Solutions Logo"
              className="w-12 h-12 object-cover rounded-full border-2 border-orange-400 shadow-md"
            />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500">
              ia4solutions
            </span>
          </Link>
          <p className={`${textColor} text-sm leading-relaxed`}>
            Innovate | Learn | Succeed. Bridging the gap between learning and career success.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start pt-2">
            {[{
              icon: FaFacebookF,
              href: "https://www.facebook.com/people/Innovative-Academy-For-It-Solutions/61567177282782/",
              bg: "from-blue-600 to-indigo-500",
            },
            {
              icon: FaLinkedinIn,
              href: "https://www.linkedin.com/in/innovative-academy-it-solutions-00467b335/",
              bg: "from-blue-500 to-cyan-500",
            },
            {
              icon: FaInstagram,
              href: "https://www.instagram.com/innovativeacademyitsolutions/",
              bg: "from-pink-500 to-orange-400",
            },
            {
              icon: FaTwitter,
              href: "https://x.com/Innovative41842",
              bg: "from-gray-700 to-black",
            },
            {
              icon: FaYoutube,
              href: "https://www.youtube.com/@InnovativeAcademyForITSolution",
              bg: "from-red-500 to-pink-600",
            }].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-gradient-to-tr ${social.bg} hover:scale-110 transition-transform shadow-lg flex items-center justify-center`}
              >
                <social.icon className="text-white w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 text-center sm:text-left">
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">
            Contact
          </h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-start justify-center sm:justify-start gap-2">
              <HiOutlineLocationMarker className="text-orange-500 w-5 h-5 mt-0.5" />
              <span className={textColor}>
                #23-7-168, Santhi Nagar, M.R.Palli Circle, Tirupati – 517502
              </span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <HiOutlinePhone className="text-orange-500 w-5 h-5" />
              <span className={textColor}>8332029863 | 8008638374</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <HiOutlineMail className="text-orange-500 w-5 h-5" />
              <span className={textColor}>hr@ia4solutions.com</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <HiOutlineGlobeAlt className="text-orange-500 w-5 h-5" />
              <span className={textColor}>www.ia4solutions.com</span>
            </div>
          </div>
        </div>


        {/* Newsletter */}
        <div className="space-y-4 text-center sm:text-left">
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400">
            Subscribe
          </h3>
          <p className={`${textColor} text-sm`}>Get updates on courses, workshops, and events.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col space-y-2 mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-3 border rounded-lg 
              ${darkMode
                  ? "bg-gray-800 border-gray-600 text-white placeholder-gray-200 focus:border-orange-400"
                  : "bg-gray-200 border-gray-900 text-gray-900 placeholder-gray-900 focus:border-orange-500"} 
              focus:outline-none transition duration-200`}
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-xl font-semibold text-white hover:from-yellow-400 hover:to-orange-500 shadow-lg transition-transform transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div className="space-y-4 text-center sm:text-left">
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            {["Home", "About", "Courses", "Services", "Placements", "Contact"].map((link, i) => (
              <li key={i}>
                <Link
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className={`hover:text-orange-500 transition ${textColor}`}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div
        className={`text-center mt-6 border-t pt-6 text-sm font-medium tracking-wide 
          ${darkMode ? "text-gray-300 border-gray-400" : "text-gray-800 border-gray-600"}`}
      >
        &copy; {new Date().getFullYear()} ia4solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
