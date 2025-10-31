import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Modern gradient color schemes
const colorSchemes = [
  { from: "from-indigo-500", to: "to-blue-500" },
  { from: "from-green-500", to: "to-emerald-500" },
  { from: "from-pink-500", to: "to-rose-500" },
  { from: "from-amber-500", to: "to-orange-500" },
];

const CourseCard = ({ title = "Course", icon, description, index = 0 }) => {
  const colors = colorSchemes[index % colorSchemes.length];

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative h-full min-h-[380px] max-w-[320px] border rounded-2xl p-6 
                 flex flex-col justify-between items-center text-center
                 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border-gray-200 dark:border-gray-700
                 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* Subtle Animated Background Glow */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-15 bg-gradient-to-r ${colors.from} ${colors.to} blur-2xl transition-all duration-500`}
      ></div>

      {/* Top Section */}
      <div className="flex flex-col items-center">
        {/* Icon Circle */}
        <div
          className={`relative w-20 h-20 flex items-center justify-center rounded-full mb-4
                      bg-gradient-to-tr ${colors.from} ${colors.to} shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <div className="text-5xl text-white">{icon}</div>
        </div>

        {/* Title */}
        <h3
          className={`text-xl md:text-2xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${colors.from} ${colors.to}`}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-6 line-clamp-4">
          {description ? (
            description
          ) : (
            <>
              Learn and master{" "}
              <span className="font-medium text-gray-800 dark:text-gray-200">
                {title}
              </span>{" "}
              with expert-led sessions designed for career success.
            </>
          )}
        </p>
      </div>

      {/* Button */}
      <Link
        to="/register"
        state={{ selectedCourse: title }}
        className={`relative inline-block px-6 py-2.5 rounded-lg font-semibold text-white text-sm md:text-base
              bg-gradient-to-r ${colors.from} ${colors.to}
              hover:opacity-90 shadow-md hover:shadow-lg transition-all duration-300`}
      >
        View More
      </Link>

    </motion.div>
  );
};

export default CourseCard;
