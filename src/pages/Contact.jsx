// src/pages/Contact.jsx
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 text-2xl" />,
      label: "Address",
      text: "#23-7-168, Santhi Nagar, M.R.Palli Circle, Tirupati – 517502",
    },
    {
      icon: <FaPhoneAlt className="text-blue-600 dark:text-blue-400 text-2xl" />,
      label: "Phone",
      text: "8332029863 | 8008638374",
    },
    {
      icon: <FaEnvelope className="text-blue-600 dark:text-blue-400 text-2xl" />,
      label: "Email",
      text: "hr@ia4solutions.com",
    },
    {
      icon: <FaGlobe className="text-blue-600 dark:text-blue-400 text-2xl" />,
      label: "Website",
      text: "www.ia4solutions.com",
    },
  ];



  return (
    <div className="relative bg-gradient-to-b from-blue-50 dark:from-gray-950 via-white dark:via-gray-900 to-blue-100 dark:to-gray-800 py-20 px-4 sm:px-6 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100/60 via-transparent to-transparent blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* LEFT: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 p-10 rounded-2xl shadow-2xl hover:shadow-blue-200/40 transition-all duration-500"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-900 dark:text-blue-200">
            Let’s Connect
          </h2>
          <p className="mb-8 text-gray-600 dark:text-gray-400 leading-relaxed">
            Have a question, project idea, or partnership opportunity with{" "}
            <b>Innovative Academy for IT Solutions</b>?
            Fill in your details, and our team will get back to you promptly.
          </p>
          <ContactForm />
        </motion.div>

        {/* RIGHT: Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 p-10 rounded-2xl shadow-2xl hover:shadow-blue-200/40 transition-all duration-500"
        >
          <h2 className="text-3xl font-bold mb-8 text-blue-900 dark:text-blue-200">
            Contact Information
          </h2>

          <div className="space-y-6">
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-5"
              >
                <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100 text-lg">
                    {item.label}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center sm:text-left">
              Follow Us
            </h3>

            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              {[
                {
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
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`p-3 rounded-full bg-gradient-to-tr ${social.bg} shadow-lg flex items-center justify-center relative overflow-hidden`}
                >
                  <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 hover:opacity-20 transition-opacity"></span>
                  <social.icon className="text-white w-5 h-5 md:w-6 md:h-6 relative z-10" />
                </motion.a>
              ))}
            </div>
          </div>



          {/* Map */}
          <div className="mt-10 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
            <iframe
              title="IA4Solutions Location"
              src="https://www.google.com/maps?q=Innovative+Academy+for+IT+Solutions+Tirupati&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
