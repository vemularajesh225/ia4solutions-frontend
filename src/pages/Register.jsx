// src/pages/Register.jsx
import RegistrationForm from "../components/RegistrationForm";
import { motion } from "framer-motion";
import { FaCheckCircle, FaLaptopCode, FaUsers, FaGraduationCap } from "react-icons/fa";

const Register = () => {
  const highlights = [
    { icon: <FaGraduationCap />, title: "Expert-Led Courses", desc: "Industry-relevant programs for career growth." },
    { icon: <FaLaptopCode />, title: "Professional Services", desc: "IT services & solutions tailored for businesses." },
    { icon: <FaUsers />, title: "Global Network", desc: "Connect with professionals and peers across industries." },
    { icon: <FaCheckCircle />, title: "Certifications & Placement", desc: "Get recognized and advance in your career." },
  ];

  return (
    <div className="relative py-24 px-6 bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 overflow-hidden transition-colors duration-500">

      {/* Animated Floating Background Shapes */}
      <motion.div
        className="absolute w-72 h-72 bg-purple-300/30 dark:bg-purple-500/20 rounded-full -top-16 -left-16 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-blue-300/20 dark:bg-blue-500/10 rounded-full -bottom-20 -right-20 blur-3xl"
        animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left: Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <RegistrationForm />
        </motion.div>

        {/* Right: Info / Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center space-y-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-700 text-transparent bg-clip-text mb-6"
          >
            Why Register With Us?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
          >
            We offer comprehensive courses, professional services, and career programs designed for students,
            professionals, and businesses. Our goal is to empower you with skills, certifications, and real-world
            exposure to succeed in your field.
          </motion.p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(59, 130, 246, 0.2)" }}
                transition={{ duration: 0.5, delay: 0.2 * i }}
                className="flex items-start gap-4 p-6 bg-white dark:bg-gray-900 rounded-3xl shadow-md border border-blue-100/30 dark:border-gray-700 transition-all cursor-pointer"
              >
                <motion.div
                  className="text-blue-600 dark:text-blue-300 text-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 + i, ease: "easeInOut" }}
                >
                  {item.icon}
                </motion.div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Terms & Info */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-6 text-gray-600 dark:text-gray-400 text-sm"
          >
            By registering, you agree to receive updates about <b>courses, workshops, services, and placements</b> from 
            <b> Innovative Academy for IT Solutions</b>. Please review our{" "}
            <a href="/register" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a> and{" "}
            <a href="/register" className="text-blue-600 dark:text-blue-400 hover:underline">Terms of Service</a>.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
