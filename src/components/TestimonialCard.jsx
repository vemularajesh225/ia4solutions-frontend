import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const TestimonialCard = ({
  name,
  company,
  review,
  image,
  rating = 5,
  layout = "horizontal",
  className = "",
}) => {
  return (
    <motion.div
      className={`relative overflow-hidden
    bg-gradient-to-br from-white/90 to-gray-50/80 dark:from-gray-800/70 dark:to-gray-700/50
    backdrop-blur-md border border-gray-100 dark:border-gray-600 shadow-md
    hover:shadow-xl hover:border-blue-500
    transition-all duration-500 ease-in-out
    p-6 sm:p-6 md:p-7 rounded-xl
    w-full max-w-full sm:max-w-2xl md:max-w-3xl
    ${layout === "horizontal"
          ? "flex flex-col md:flex-row items-center gap-6 md:gap-8"
          : "flex flex-col items-center text-center gap-5"} ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 250 }}
    >

      {/* Image / Avatar */}
      <div className="flex-shrink-0 z-10">
        {image ? (
          <motion.div
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-sky-500 shadow-lg mx-auto md:mx-0"
            whileHover={{ scale: 1.08 }}
          >
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </motion.div>

        ) : (
          <div
            className={`w-32 h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center shadow-md`}
          >
            <span className="text-2xl md:text-3xl font-bold text-gray-600 dark:text-gray-200">
              {name[0]}
            </span>
          </div>
        )}
      </div>



      {/* Content */}
      <div
        className={`flex-1 flex flex-col items-center justify-center relative z-10
          ${layout === "horizontal" ? "text-center md:text-left" : "text-center"}`}
      >
        {/* Review */}
        <p className="text-gray-700 dark:text-gray-300 italic text-sm sm:text-base md:text-lg 
  text-center md:text-left leading-relaxed mb-3 md:mb-4 mt-4 md:mt-6 
  relative z-10 break-words">
          “{review}”
        </p>

        {/* Stars */}
        <div className="flex items-center justify-center mb-3">
          {[...Array(rating)].map((_, i) => (
            <FaStar
              key={i}
              className="text-yellow-400 mr-1 text-sm md:text-base drop-shadow-md animate-pulse"
            />
          ))}
        </div>

        {/* Name & Company */}
        <div className="text-center">
          <h4 className="font-semibold text-lg md:text-xl text-gray-900 dark:text-white">
            {name}
          </h4>
          <span className="text-gray-500 dark:text-gray-300 text-sm md:text-base">
            <span className="font-medium text-indigo-500 dark:text-indigo-400">{company}</span>
          </span>
        </div>
      </div>

      {/* Floating Gradient Accent */}
      <span className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-50/40 dark:from-blue-900/30 to-transparent pointer-events-none animate-pulse-slow"></span>
    </motion.div>
  );
};

export default TestimonialCard;
