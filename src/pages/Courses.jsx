import { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import courses from "../data/courses";
import CourseCard from "../components/CourseCard";
import { FaSearch } from "react-icons/fa";
import { HiArrowRight, HiDocumentText, HiUserGroup, HiBuildingOffice2, HiAcademicCap, HiUser } from "react-icons/hi2";

const categories = [
  "All",
  "Programming",
  "Data Science",
  "Data Analytics",
  "Web Development",
  "AI/ML",
  "Productivity",
  "Marketing",
  "QA/Automation",
  "Electronics",
  "Design",
  "ERP",
];

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter(
    (course) =>
      (activeCategory === "All" || course.category === activeCategory) &&
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-6 py-20">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Courses
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          Explore our <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent font-semibold">wide range of IT & professional courses</span>,
          designed to give you <span className="underline decoration-purple-400">hands-on experience</span> and <span className="font-semibold text-blue-600 dark:text-blue-400">career-ready skills</span>.
        </p>

        {/* Decorative underline accent */}
        <div className="mt-6 w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-60"></div>
      </motion.div>


      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute right-4 top-3.5 text-gray-400" />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-12 overflow-x-auto scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full font-semibold transition whitespace-nowrap ${activeCategory === cat
              ? "bg-blue-600 text-white shadow-lg transform scale-105"
              : "bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredCourses.map((course, i) => (
          <CourseCard
            key={course.title}
            index={i}
            title={course.title}
            icon={course.icon}
            description={course.description}
            category={course.category}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-20 flex flex-col md:flex-row justify-center gap-6">
        {/* Enroll Button */}
        <motion.a
          whileHover={{ scale: 1.05, boxShadow: "0px 15px 25px rgba(59,130,246,0.4)" }}
          href="/register"
          className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-800 text-white px-12 py-4 rounded-full shadow-lg text-lg font-semibold transition-all duration-300 hover:from-blue-800 hover:to-indigo-600"
        >
          <span>Enroll Now</span>
          <HiArrowRight className="ml-3 text-2xl transition-transform duration-300 group-hover:translate-x-1" />
        </motion.a>

        {/* Brochure Button */}
        <motion.a
          whileHover={{ scale: 1.05, boxShadow: "0px 12px 20px rgba(99,102,241,0.3)" }}
          href="/brochure.pdf"
          className="inline-flex items-center justify-center bg-white text-blue-600 px-10 py-4 rounded-full shadow-md text-lg font-semibold border border-blue-600 hover:bg-blue-50 transition-all duration-300"
        >
          <span>Download Brochure</span>
          <HiDocumentText className="ml-3 text-2xl" />
        </motion.a>
      </div>


      {/* Stats / Achievements */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { value: 3000, label: "Students Trained", icon: HiUserGroup, color: "from-blue-500 to-indigo-600" },
          { value: 20, label: "Companies Partnered", icon: HiBuildingOffice2, color: "from-green-400 to-emerald-500" },
          { value: 500, label: "Certifications Awarded", icon: HiAcademicCap, color: "from-purple-500 to-pink-500" },
          { value: 8, label: "Expert Trainers", icon: HiUser, color: "from-yellow-400 to-orange-500" },
        ].map((stat, i) => {
          const StatIcon = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`p-6 rounded-2xl bg-gradient-to-r ${stat.color} shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-white flex flex-col items-center justify-center`}
            >
              <StatIcon className="text-3xl mb-3" />
              <h3 className="text-3xl md:text-3xl font-bold">
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2}
                  separator=","
                />+
              </h3>
              <p className="text-lg mt-2 font-medium">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
