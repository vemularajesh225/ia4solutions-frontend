// src/components/ContactForm.jsx
import { API_BASE_URL } from "../config";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCommentDots,
  FaUserTag,
} from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    userType: "Student",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.phone) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("Sending...");
    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setStatus("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          userType: "Student",
          message: "",
        });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch {
      setStatus("⚠️ Server error. Please try again.");
    }
  };

  const fields = [
    { name: "name", type: "text", placeholder: "Full Name", icon: <FaUser /> },
    { name: "email", type: "email", placeholder: "Email Address", icon: <FaEnvelope /> },
    { name: "phone", type: "tel", placeholder: "Phone Number", icon: <FaPhone /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 w-full max-w-xl mx-auto bg-white/80 dark:bg-gray-900/90 backdrop-blur-2xl rounded-2xl p-10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.25)] border border-transparent bg-clip-padding"
      style={{
        borderImage: "linear-gradient(135deg, #2563eb, #7c3aed, #0ea5e9) 1",
      }}
    >
      {/* Header */}
      <div className="text-center mb-6">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Fill out your details and we’ll get back you shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {fields.map((field) => (
          <div key={field.name} className="relative group">
            <span className="absolute left-3 top-3 text-blue-500 text-lg group-focus-within:text-blue-600 transition-all">
              {field.icon}
            </span>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required
              className="w-full pl-10 pr-3 py-3 bg-white/60 dark:bg-gray-800/60 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-800 dark:text-gray-200 placeholder-gray-400"
            />
            {errors[field.name] && (
              <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>
            )}
          </div>
        ))}

        {/* User Type */}
        <div className="relative">
          <FaUserTag className="absolute left-3 top-3 text-blue-500 text-lg" />
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            className="w-full pl-10 pr-3 py-3 bg-white/60 dark:bg-gray-800/60 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-800 dark:text-gray-200"
          >
            <option value="Student">Student</option>
            <option value="Professional">Professional</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div className="relative">
          <FaCommentDots className="absolute left-3 top-3 text-blue-500 text-lg" />
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            required
            className="w-full pl-10 pr-3 py-3 bg-white/60 dark:bg-gray-800/60 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none text-gray-800 dark:text-gray-200 placeholder-gray-400"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 15px rgba(59,130,246,0.5)",
          }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={submitted}
          className="relative w-full py-3 font-semibold text-white rounded-lg overflow-hidden group bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-indigo-600 hover:to-blue-600 shadow-lg transition-all"
        >
          <span className="relative z-10">
            {submitted ? "Message Sent ✅" : "Send Message"}
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-all" />
        </motion.button>
      </form>

      {/* Status */}
      {status && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-5 text-center text-sm font-medium ${status.includes("✅")
              ? "text-green-600"
              : status.includes("⚠️")
                ? "text-yellow-500"
                : status.includes("❌")
                  ? "text-red-600"
                  : "text-blue-600"
            }`}
        >
          {status}
        </motion.p>
      )}
    </motion.div>
  );
};

export default ContactForm;
