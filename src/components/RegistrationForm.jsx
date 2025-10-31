import { useState, useEffect } from "react";
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
import { useLocation } from "react-router-dom";
import brochureLinks from "../data/brochures"; // ✅ Import your Google Drive links

// ✅ EmailJS credentials
const SERVICE_ID = "service_3ifr6k9";
const TEMPLATE_ID = "template_i3qw54j";
const PUBLIC_KEY = "5CjlwRVD1_PiEUBil";

const RegistrationForm = () => {
  const location = useLocation();
  const selectedCourse = location.state?.selectedCourse || "";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: selectedCourse,
    qualification: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // ✅ Update course if selected from previous page
  useEffect(() => {
    if (selectedCourse) {
      setFormData((prev) => ({ ...prev, course: selectedCourse }));
    }
  }, [selectedCourse]);

  // ✅ Handle Input Change
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // ✅ Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      // ✅ Send Email using EmailJS
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

      // ✅ Normalize course names for matching
      const nameMap = {
        "full stack development": "Web Development",
        python: "Python Full Stack",
        java: "Java Full Stack",
        "html, css, js, react": "Web Development",
        "php, wordpress": "Web Development",
        "data analytics": "Data Analytics",
        "data science": "Data Science",
        "digital marketing": "Digital Marketing",
        "power bi": "Data Analytics",
        "c / c++ programming": "Common",
        "networking & infrastructure management": "Common",
        "hr training & office automation": "Common",
        "testing & automation": "Common",
        "ai & ml": "Common",
        sap: "Common",
        "microsoft dynamics": "Common",
        autocad: "Common",
        "embedded systems & vlsi": "Common",
      };

      const normalizedCourse = formData.course.trim().toLowerCase();
      const mappedCourse = nameMap[normalizedCourse] || formData.course;

      // ✅ Find matching brochure link
      const brochureKey =
        Object.keys(brochureLinks).find(
          (key) => key.toLowerCase() === mappedCourse.toLowerCase()
        ) || "Common";

      const brochureLink = brochureLinks[brochureKey];

      if (brochureLink) {
        // ✅ Open the brochure in new tab
        window.open(brochureLink, "_blank");
      } else {
        console.warn("⚠️ No brochure found for:", formData.course);
        alert("⚠️ Brochure not found for this course. Please contact support.");
      }

      // ✅ Success status
      setStatus("✅ Registration submitted successfully!");
      setSubmitted(true);

      // ✅ Reset form after success
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        course: selectedCourse,
        qualification: "",
        message: "",
      });

      // ✅ Reset submitted flag
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("⚠️ Failed to send registration email. Please try again.");
    }
  };

  // ✅ Input fields list
  const inputFields = [
    {
      name: "fullName",
      type: "text",
      placeholder: "Full Name / Company Name",
      icon: <FaUser />,
    },
    { name: "email", type: "email", placeholder: "Email Address", icon: <FaEnvelope /> },
    { name: "phone", type: "text", placeholder: "Phone Number", icon: <FaPhone /> },
    {
      name: "course",
      type: "text",
      placeholder: "Course / Service Interested",
      icon: <FaBook />,
    },
    {
      name: "qualification",
      type: "text",
      placeholder: "Qualification / Business Domain",
      icon: <FaGraduationCap />,
    },
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
              value={
                field.name === "course"
                  ? formData.course || selectedCourse
                  : formData[field.name]
              }
              onChange={handleChange}
              placeholder={field.placeholder}
              required
              readOnly={field.name === "course" && !!selectedCourse}
              className="w-full bg-transparent border-2 border-gray-300 dark:border-gray-600 
                        focus:border-blue-500 focus:ring-2 focus:ring-blue-300
                        pl-10 py-3 rounded-xl outline-none transition-all duration-300 
                        text-gray-800 dark:text-gray-100"
            />
          </motion.div>
        ))}

        {/* Message Field */}
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
            className="w-full bg-transparent border-2 border-gray-300 dark:border-gray-600 
                      focus:border-blue-500 focus:ring-2 focus:ring-blue-300
                      pl-10 py-3 rounded-xl outline-none resize-none transition-all duration-300 
                      text-gray-800 dark:text-gray-100"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={submitted}
          className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 
                    text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-blue-400/30 
                    transition-all duration-300"
        >
          {submitted ? "Submitted ✅" : "Submit & Download Brochure"}
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
