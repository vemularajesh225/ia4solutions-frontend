import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImg1 from "../assets/classroom.png";
import heroImg2 from "../assets/software-tech.png";
import heroImg3 from "../assets/project-based.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    title: "Classroom &",
    desc: "Learn from professionals and gain real-world skills with live and online sessions.",
    img: heroImg1,
  },
  {
    title: "Industry-Related Software Curriculum with",
    desc: "Stay ahead in tech with courses crafted for current market demand and emerging tools.",
    img: heroImg2,
  },
  {
    title: "Project-Based Learning with",
    desc: "Apply knowledge to real projects and build a portfolio that impresses employers.",
    img: heroImg3,
  },
];

const loopWordsPerSlide = [
  ["Online Training", "Project Work", "Career Ready"],
  ["Trending Technology", "Software Tools", "Industry Skills"],
  ["Hands-On Experience", "Real Projects", "Portfolio Ready"],
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 200;
  const pauseBetweenWords = 1200;
  const pauseBetweenLoops = 6000;
  const autoSlideDelay =
    typingSpeed * 15 + pauseBetweenWords * 3 + pauseBetweenLoops; // auto timing sync

  // Auto slide after full typing loop
  useEffect(() => {
    if (isHovered) return;
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, autoSlideDelay);
    return () => clearTimeout(timer);
  }, [current, isHovered, autoSlideDelay]);

  // Typing effect
  useEffect(() => {
    const words = loopWordsPerSlide[current];
    const currentWord = words[wordIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, typingSpeed / 2);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseBetweenWords);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, current]);

  useEffect(() => {
    setDisplayText("");
    setWordIndex(0);
    setIsDeleting(false);
  }, [current]);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 15;
    const y = (e.clientY / innerHeight - 0.5) * 15;
    setOffset({ x, y });
  };

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section
      className="relative h-screen w-full overflow-hidden text-gray-100 dark:text-gray-100 z-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Background Images */}
      <AnimatePresence>
        {slides.map(
          (slide, index) =>
            index === current && (
              <motion.div
                key={index}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.img})`,
                  transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
                }}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2 }}
              />
            )
        )}
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/10 dark:from-black/70 dark:via-black/50 dark:to-black/20"></div>

      {/* Floating Particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/30 dark:bg-white/20"
          style={{
            width: `${5 + Math.random() * 10}px`,
            height: `${5 + Math.random() * 10}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, 15, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.9, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.98 }}
            transition={{ duration: 1 }}
            className="max-w-3xl bg-white/10 dark:bg-gray-800/20 backdrop-blur-xs rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-gray-700"
          >
            <h1 className="text-2xl md:text-4xl font-bold mb-6 text-gray-100 dark:text-gray-100">
              {slides[current].title}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-red-500">
                {displayText}
              </span>
              <span className="border-r-4 border-pink-600 ml-1 animate-pulse"></span>{" "}
              by Industry Experts
            </h1>

            <p className="text-gray-200 dark:text-gray-300 text-lg md:text-xl mb-10">
              {slides[current].desc}
            </p>

            <motion.a
              href="/register"
              className="relative inline-flex items-center justify-center px-12 py-3 rounded-xl
               font-semibold text-base tracking-wide text-white
               bg-gradient-to-r from-orange-400 via-pink-500 to-red-700
               shadow-[0_0_25px_rgba(0,0,0,0.2)]
               transition-all duration-500 overflow-hidden group
               hover:shadow-[0_0_50px_rgba(255,255,255,0.7),0_0_80px_rgba(0,200,255,0.7)]"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-orange-400 via-pink-500 to-red-700
                   blur-lg opacity-50 animate-borderRoll pointer-events-none"></span>

              <span className="relative z-10 flex items-center gap-3">
                <span className="font-bold text-lg">Enroll Now</span>
                <motion.span
                  className="w-2 h-2 bg-white/80 rounded-full"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </span>

              <span className="absolute inset-0 rounded-xl overflow-hidden">
                <span className="absolute top-0 left-[-70%] w-[50%] h-full
                     bg-gradient-to-r from-transparent via-white/25 to-transparent
                     animate-shimmer"></span>
              </span>
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-6 z-20">
        <button
          onClick={prevSlide}
          className="text-white bg-black/40 dark:bg-white/20 hover:bg-black/70 dark:hover:bg-white/40 p-3 rounded-full shadow-lg transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="text-white bg-black/40 dark:bg-white/20 hover:bg-black/70 dark:hover:bg-white/40 p-3 rounded-full shadow-lg transition"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2 z-20 w-40 h-1 bg-white/30 dark:bg-gray-600/30 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400"
          key={current}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: autoSlideDelay / 1000,
            ease: "linear",
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
