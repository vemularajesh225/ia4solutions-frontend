// src/components/RegistrationForm.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBook,
  FaGraduationCap,
  FaCommentDots,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_5bee66f";
const TEMPLATE_ID = "template_i3qw54j";
const PUBLIC_KEY = "5CjlwRVD1_PiEUBil";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    qualification: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          course: formData.course,
          qualification: formData.qualification,
          message: formData.message,
          title: "New Registration",
        },
        PUBLIC_KEY
      );

      setStatus("✅ Registration submitted successfully!");
      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        course: "",
        qualification: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Failed to send registration email. Please try again.");
    }
  };

  const inputFields = [
    { name: "fullName", type: "text", placeholder: "Full Name / Company Name", icon: <FaUser /> },
    { name: "email", type: "email", placeholder: "Email Address", icon: <FaEnvelope /> },
    { name: "phone", type: "text", placeholder: "Phone Number", icon: <FaPhone /> },
    { name: "course", type: "text", placeholder: "Course / Service Interested", icon: <FaBook /> },
    { name: "qualification", type: "text", placeholder: "Qualification / Business Domain", icon: <FaGraduationCap /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-lg mx-auto bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-blue-200/30 dark:border-gray-700 hover:shadow-blue-400/30 transition-all duration-500"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 text-transparent bg-clip-text mb-8">
        Register Now
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {inputFields.map((field, idx) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * idx }}
            className="relative"
          >
            <span className="absolute left-3 top-3 text-blue-600 dark:text-blue-300 text-lg">
              {field.icon}
            </span>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required
              className="w-full bg-transparent border-2 border-gray-300 dark:border-gray-600 focus:border-gradient-to-r focus:from-blue-500 focus:via-indigo-500 focus:to-purple-500 pl-10 py-3 rounded-xl outline-none transition-all duration-300 text-gray-800 dark:text-gray-100"
            />
          </motion.div>
        ))}

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative"
        >
          <span className="absolute left-3 top-3 text-blue-600 dark:text-blue-300 text-lg">
            <FaCommentDots />
          </span>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Message (Optional)"
            className="w-full bg-transparent border-2 border-gray-300 dark:border-gray-600 focus:border-gradient-to-r focus:from-blue-500 focus:via-indigo-500 focus:to-purple-500 pl-10 py-3 rounded-xl outline-none resize-none transition-all duration-300 text-gray-800 dark:text-gray-100"
          />
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={submitted}
          className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-blue-400/30 transition-all duration-300"
        >
          {submitted ? "Submitted ✅" : "Submit"}
        </motion.button>
      </form>

      {status && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`mt-5 text-center font-semibold ${
            status.includes("✅")
              ? "text-green-600 dark:text-green-400"
              : status.includes("⚠️")
              ? "text-yellow-600 dark:text-yellow-400"
              : status.includes("❌")
              ? "text-red-600 dark:text-red-400"
              : "text-blue-600 dark:text-blue-400"
          }`}
        >
          {status}
        </motion.p>
      )}
    </motion.div>
  );
};

export default RegistrationForm;
