import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaHandshake,
  FaUserTie,
  FaGlobeAsia,
  FaUsers,
  FaChalkboardTeacher,
  FaLaptopCode,
} from "react-icons/fa"; // more modern look (Font Awesome 6)


// Refined color palette (subtle luxury tones)
const presenceItems = [
  { id: 1, icon: <FaHandshake className="text-5xl text-indigo-500" />, title: "Industry Collaborations", count: 10 },
  { id: 2, icon: <FaUserTie className="text-5xl text-blue-500" />, title: "Students Placed", count: 150 },
  { id: 3, icon:  <FaChalkboardTeacher className="text-5xl text-amber-500" />, title: "Expert Mentors", count: 8},
  { id: 4, icon: <FaUsers className="text-5xl text-pink-500" />, title: "Active Students", count: 3000 },
  { id: 5, icon: <FaLaptopCode className="text-5xl text-cyan-500" />, title: "Tech-Driven Learning", count: null },
  { id: 6, icon: <FaGlobeAsia className="text-5xl text-emerald-500" />, title: "Global Reach", count: null },
];

// Smooth counting hook
const useCountUp = (target, isInView, duration = 2) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || !target) return;

    let start = 0;
    const stepTime = 20;
    const steps = duration * 1000 / stepTime;
    const increment = target / steps;

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [isInView, target, duration]);

  return count;
};

const PresenceCard = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const count = useCountUp(item.count, isInView);

  useEffect(() => {
    if (isInView) controls.start({ opacity: 1, y: 0 });
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative flex flex-col items-center justify-center min-h-[230px] p-8 
                 bg-white/80 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 rounded-2xl
                 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300
                 backdrop-blur-xl overflow-hidden"
    >
      {/* Animated Gradient Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500 via-blue-400 to-cyan-400 opacity-0 group-hover:opacity-15 blur-2xl transition duration-500"></div>

      {/* Icon */}
      <div className="relative z-10 mb-2">{item.icon}</div>

      {/* Counter */}
      {item.count && (
        <h3 className="relative z-10 text-2xl md:text-3xl font-extrabold text-gray-700 dark:text-white">
          {count.toLocaleString()}+
        </h3>
      )}

      {/* Title */}
      <p className="relative z-10 mt-2 text-lg font-medium text-gray-700 dark:text-gray-300 text-center">
        {item.title}
      </p>
    </motion.div>
  );
};

const PresenceSection = () => {
  return (
    <section className="relative py-12 px-6 md:px-12 lg:px-20 dark:from-gray-900 dark:to-gray-950 overflow-hidden">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto mb-10 relative z-10"
      >
        <h2 className="text-2xl md:text-4xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Our Presence Across Excellence
          </span>
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"> Empowering <span className="font-semibold text-orange-500">students</span> and <span className="font-semibold text-pink-500"> industries </span> with <span className="font-semibold text-violet-500">technology-driven learning excellence</span> </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-4xl mx-auto relative z-10">
        {presenceItems.map((item, index) => (
          <PresenceCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default PresenceSection;
