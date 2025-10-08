// src/components/RegistrationForm.jsx
import { API_BASE_URL } from "../config"; // adjust path if needed
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
      const response = await fetch(`${API_BASE_URL}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });


      const data = await response.json();
      if (data.success) {
        setStatus("✅ Registration submitted successfully!");
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setStatus("❌ Failed to submit registration.");
      }
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Error submitting registration.");
    }

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      course: "",
      qualification: "",
      message: "",
    });
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
            className="relative group"
          >
            <span className="absolute left-3 top-4 text-blue-600 dark:text-blue-300 text-lg transition-transform group-focus-within:scale-110">
              {field.icon}
            </span>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder=" "
              required
              className="peer w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-blue-600 pl-10 p-3 pt-5 rounded-md outline-none transition-all duration-300 text-gray-800 dark:text-gray-100 placeholder-transparent"
            />
            <label className="absolute left-10 top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-blue-600 peer-focus:text-sm">
              {field.placeholder}
            </label>
          </motion.div>
        ))}

        {/* Message Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative group"
        >
          <span className="absolute left-3 top-4 text-blue-600 dark:text-blue-300 text-lg">
            <FaCommentDots />
          </span>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder=" "
            className="peer w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-blue-600 pl-10 p-3 pt-5 rounded-md outline-none resize-none transition-all duration-300 text-gray-800 dark:text-gray-100 placeholder-transparent"
          />
          <label className="absolute left-10 top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-blue-600 peer-focus:text-sm">
            Message (Optional)
          </label>
        </motion.div>

        {/* Submit Button */}
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

      {/* Status */}
      {status && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`mt-5 text-center font-semibold ${status.includes("✅")
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
