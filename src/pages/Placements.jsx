// src/pages/Placements.jsx
import PlacementLogoGrid from "../components/PlacementLogoGrid";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { HiUserGroup, HiOfficeBuilding, HiCurrencyRupee, HiStar, HiArrowNarrowRight } from "react-icons/hi";

const stats = [
  { label: "Students Placed", value: 150, suffix: "+", icon: HiUserGroup, color: "from-blue-500 to-indigo-600" },
  { label: "Partner Companies", value: 50, suffix: "+", icon: HiOfficeBuilding, color: "from-purple-500 to-pink-500" },
  { label: "Average Package (LPA)", value: { start: 2.25, end: 25 }, suffix: "+", icon: HiCurrencyRupee, color: "from-green-500 to-teal-500" },
  { label: "Success Stories", value: 100, suffix: "+", icon: HiStar, color: "from-yellow-400 to-orange-500" },
];



const Placements = () => {
  return (
    <div className="relative overflow-hidden py-20 px-6">


      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-center space-y-6 z-10 px-4 md:px-0"
      >
        {/* Main Heading */}
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 dark:from-pink-400 dark:via-purple-400 dark:to-indigo-400">
          Placements @ <span className="text-indigo-600 dark:text-purple-300">ia4solutions</span>
        </h1>

        {/* Decorative Accent Line */}
        <span className="block w-28 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mx-auto rounded-full shadow-lg animate-pulse"></span>

        {/* Subheading / Description */}
        <p className="text-gray-700 dark:text-gray-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          <span className="font-semibold text-pink-500 dark:text-pink-400">Dedicated Placement Team</span> |{' '}
          <span className="font-semibold text-purple-500 dark:text-purple-400">Exclusive Placement Portal</span> |{' '}
          <span className="font-semibold text-indigo-500 dark:text-indigo-300">Guest Lectures & Industry Collaborations</span>
        </p>

        {/* Optional Animated Highlight Dots */}
        <div className="flex justify-center space-x-2 mt-4">
          <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-150"></span>
          <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-300"></span>
        </div>
      </motion.div>



      {/* Stats Panel with Animated Counters */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 md:mt-16 px-4 md:px-8">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Gradient Glow Background */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 bg-gradient-to-r ${stat.color}`}
              ></div>

              {/* Card */}
              <div className="relative p-5 sm:p-6 rounded-2xl bg-white/80 dark:bg-gray-800/70 backdrop-blur-md border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center">

                {/* Icon Wrapper */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-md transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
                >
                  <Icon className="text-2xl sm:text-3xl" />
                </div>

                {/* Counter */}
                <h3 className="mt-4 text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-blue-300 dark:to-indigo-300 tracking-tight">
                  {typeof stat.value === "number" ? (
                    <>
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2.5}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                      {stat.suffix}
                    </>
                  ) : (
                    <>
                      <CountUp
                        start={stat.value.start}
                        end={stat.value.end}
                        duration={20}      // total animation time
                        decimals={2}      // show decimals like 2.25
                        enableScrollSpy
                        scrollSpyOnce
                      />
                      {stat.suffix}
                    </>
                  )}
                </h3>



                {/* Label */}
                <p className="mt-1 text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 leading-snug">
                  {stat.label}
                </p>

                {/* Accent line */}
                <div className="mt-3 w-10 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full group-hover:w-16 transition-all duration-500"></div>
              </div>
            </motion.div>
          );
        })}
      </div>



      {/* Placement Logos */}
      <div className="relative z-10 pt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 dark:text-blue-200 mb-8">
          Our Students Placed in Top MNCs
        </h2>
        <PlacementLogoGrid />
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mt-16"
      >
        <a
          href="/contact"
          className="inline-flex items-center gap-3 
               bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 
               text-white 
               px-6 sm:px-8 md:px-10 
               py-3 sm:py-3 md:py-4 
               rounded-full 
               shadow-xl 
               text-base sm:text-lg md:text-lg 
               font-semibold 
               hover:scale-105 hover:shadow-2xl 
               transition-all duration-300"
        >
          Join ia4solutions & Get Placed
          <HiArrowNarrowRight className="w-5 sm:w-5 md:w-6 h-5 sm:h-5 md:h-6 animate-bounce" />
        </a>
      </motion.div>

    </div>
  );
};

export default Placements;
