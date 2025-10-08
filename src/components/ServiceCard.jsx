import { motion } from "framer-motion";

const ServiceCard = ({
  title,
  icon,
  description,
  gradient = "from-orange-400 to-pink-500",
  className = "",
}) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group relative h-full min-h-[300px] border rounded-2xl p-6 flex flex-col items-center text-center
                  bg-white/40 dark:bg-gray-800/50 backdrop-blur-xl border-gray-200 dark:border-gray-700
                  shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden ${className}`}
    >
      {/* Animated gradient background halo */}
      <div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 bg-gradient-to-r ${gradient} blur-3xl transition-all duration-500`}
      ></div>

      {/* Top Icon */}
      <div className="relative w-16 h-16 flex items-center justify-center rounded-full mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
        <div
          className={`flex items-center justify-center w-full h-full rounded-full bg-gradient-to-r ${gradient}`}
        >
          <div className="text-3xl sm:text-4xl text-white dark:text-gray-200">{icon}</div>
        </div>
        <span
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradient} opacity-20 blur-xl animate-pulse`}
        ></span>
      </div>

      {/* Title */}
      <h3
        className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-base leading-relaxed flex-grow">
        {description || "Professional service to help you achieve career growth and success."}
      </p>

      {/* Optional CTA Button */}
      {/* <motion.a
        whileHover={{ scale: 1.05 }}
        href="/register"
        className={`mt-4 inline-block px-6 py-2.5 rounded-lg font-semibold text-white text-sm md:text-base bg-gradient-to-r ${gradient} hover:opacity-90 shadow-md hover:shadow-lg transition-all duration-300`}
      >
        Learn More
      </motion.a> */}
    </motion.div>
  );
};

export default ServiceCard;
