import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBusinessTime, FaProjectDiagram, FaHandshake } from "react-icons/fa";


import HeroSection from "../components/HeroSection";
import PresenceSection from "../components/PresenceSection";
import CourseCard from "../components/CourseCard";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import PlacementLogoGrid from "../components/PlacementLogoGrid";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import courses from "../data/courses";
import services from "../data/services";
import testimonials from "../data/testimonials";

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-loop testimonials every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Presence Section */}
      <PresenceSection />

      {/* Courses Section */}
      <section className="container mx-auto px-4 py-6 relative dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-center text-sky-900 dark:text-gray-100">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-yellow-400">
              Courses
            </span>
          </h2>
          <p className="text-center mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-700 dark:text-gray-300"> Explore <span className="text-orange-500 dark:text-pink-400 font-semibold">industry-focused IT courses</span> designed to equip you with the <span className="text-yellow-500 dark:text-green-400 font-semibold">skills to excel</span> in today's digital world. </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {courses.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.08,
                duration: 0.6,
                type: "spring",
                stiffness: 200,
              }}
            >
              <CourseCard
                title={c.title}
                icon={c.icon}
                description={c.description}
                index={i}
              />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            to="/register"
            className="inline-block px-8 py-3 font-semibold text-white rounded-lg shadow-md 
                 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-600 
                 transition-all duration-300"
          >
            View All Courses
          </Link>
        </motion.div>
      </section>

      {/* 🌟 Features Section */}
      <section className="relative py-10 md:py-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          {/* Heading */}
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 mb-4 md:mb-6"
          >
            ia4solutions – <span className="text-yellow-400">Why Choose Us</span>
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 md:mb-14 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            Transform your career with{" "}
            <span className="font-semibold text-pink-500 dark:text-pink-400">
              hands-on learning
            </span>
            , mentorship, and{" "}
            <span className="font-semibold text-indigo-500 dark:text-indigo-400">
              real-world skills
            </span>{" "}
            taught by industry experts.
          </motion.p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {[
              {
                icon: <FaBusinessTime />,
                title: "Professional Training",
                description:
                  "Structured programs delivered by industry professionals with <span class='font-medium text-blue-500'>practical business insights</span> and strategies.",
                delay: 0.1,
                gradient: "from-blue-500 via-indigo-500 to-purple-500",
              },
              {
                icon: <FaProjectDiagram />,
                title: "Project-Based Learning",
                description:
                  "Hands-on projects that simulate real-world corporate challenges with <span class='font-medium text-pink-500'>team collaboration</span> and problem-solving.",
                delay: 0.2,
                gradient: "from-pink-500 via-red-500 to-orange-500",
              },
              {
                icon: <FaHandshake />,
                title: "Career & Placement Support",
                description:
                  "Personalized mentorship and corporate networking opportunities to guide your career with <span class='font-medium text-purple-500'>placements and growth</span>.",
                delay: 0.3,
                gradient: "from-purple-500 via-indigo-500 to-blue-500",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: f.delay, duration: 0.6 }}
                className={`relative flex flex-col justify-between bg-white/90 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-3xl shadow-lg p-6 sm:p-8
             hover:shadow-2xl hover:scale-[1.03] hover:backdrop-brightness-105 transition-all duration-500 min-h-[320px]`}
              >
                {/* Icon Circle */}
                <div
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-5 flex items-center justify-center rounded-full bg-gradient-to-r ${f.gradient} text-white text-3xl sm:text-4xl shadow-lg`}
                >
                  {f.icon}
                  <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 via-white/10 to-white/20 blur-xl pointer-events-none animate-pulse-slow"></span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-3 text-gray-900 dark:text-white leading-snug">
                  {f.title}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: f.description }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-8 md:py-14 relative overflow-hidden">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 container mx-auto px-6"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-400 to-blue-500">
              Our
            </span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-400">
              Services
            </span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-4 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Comprehensive solutions to help students and professionals{" "}
            <span className="font-semibold text-pink-500 dark:text-pink-400 relative after:absolute after:w-full after:h-1 after:bg-pink-300 after:dark:bg-pink-400 after:bottom-0 after:left-0 after:rounded-full after:opacity-50">
              achieve career success
            </span>{" "}
            and{" "}
            <span className="font-semibold text-indigo-500 dark:text-indigo-400 relative after:absolute after:w-full after:h-1 after:bg-indigo-300 after:dark:bg-indigo-400 after:bottom-0 after:left-0 after:rounded-full after:opacity-50">
              skill mastery
            </span>
            .
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 20px 30px rgba(0,0,0,0.12)" }}
            >
              <ServiceCard
                title={s.title}
                icon={s.icon}
                description={s.description}
                gradient={s.gradient} // unique gradient per card
                className="hover:shadow-2xl hover:scale-[1.05] transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-12 md:py-20 px-4 sm:px-6 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] -translate-x-1/2 rounded-full bg-purple-200/30 dark:bg-purple-700/30 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full bg-pink-200/30 dark:bg-pink-700/30 blur-3xl"></div>
        </div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center relative z-10 mb-12 px-4 md:px-0"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 relative inline-block">
            Testimonials
            <span className="absolute left-1/2 -bottom-2 w-32 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full opacity-90 -translate-x-1/2"></span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            Hear from our <span className="font-semibold text-pink-500">students</span> and{" "}
            <span className="font-semibold text-purple-500">professionals</span> who have transformed their careers with{" "}
            <span className="font-bold text-indigo-500 dark:text-indigo-400">IA4Solutions</span>.
          </p>
        </motion.div>

        {/* Carousel Wrapper */}
        <div className="relative max-w-5xl mx-auto flex justify-center items-center min-h-[400px] sm:min-h-[420px] md:min-h-[380px] z-10 px-2 sm:px-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className={`absolute inset-0 flex justify-center items-center transition-all duration-1000
      ${i === currentTestimonial ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            >
              <TestimonialCard {...t} layout="horizontal" />
            </motion.div>
          ))}
        </div>


        {/* Gradient Overlay at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent pointer-events-none"></div>
      </section>


      {/* Placements Section */}
      <section className="relative bg-gradient-to-b from-white dark:from-gray-900 via-gray-50 dark:via-gray-800 to-white dark:to-gray-900 py-6 md:py-8 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-blue-100/30 dark:bg-blue-700/30 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-pink-100/20 dark:bg-pink-700/20 blur-3xl animate-spin-slow"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-purple-100/20 dark:bg-purple-700/20 blur-2xl -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 rounded-full bg-indigo-200/30 dark:bg-indigo-700/30 blur-xl animate-bounce-slow"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-20 container mx-auto px-3 text-center"
        >
          {/* Heading */}
          <h2 className="relative text-3xl md:text-5xl font-bold text-sky-900 leading-snug inline-block drop-shadow-md">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600">
              Candidates are
            </span>{" "}
            Working in {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">
              reputed MNC's
            </span>

            {/* Centered Underline */}
            <span className="absolute left-1/2 -bottom-3 w-36 h-1 bg-gradient-to-r from-teal-400 via-purple-400 to-indigo-500 rounded-full opacity-90 -translate-x-1/2 shadow-md"></span>
          </h2>



          {/* Paragraph */}
          <p className="text-gray-700 dark:text-gray-300 mt-4 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">

            Empowering talent with <span className="font-semibold text-pink-500">industry-ready skills</span>, hands-on{" "}
            <span className="font-semibold text-purple-500">project experience</span>, and opportunities to work with <span className="font-semibold text-indigo-600 dark:text-indigo-400">top global MNCs</span> for real-world success.
          </p>

        </motion.div>

        {/* Logo Grid */}
        <div className="relative z-20 max-w-6xl mx-auto mt-6">
          <PlacementLogoGrid />
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
      </section>



      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-gray-100 dark:from-gray-900 to-gray-200 dark:to-gray-800 py-8 md:py-12 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-12 md:p-24 text-center overflow-hidden">

            {/* Background Shapes */}
            <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-blue-200/40 dark:bg-blue-700/30 blur-3xl animate-spin-slow -translate-x-12 -translate-y-12 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full bg-pink-200/40 dark:bg-pink-700/30 blur-3xl animate-pulse-slow translate-x-16 translate-y-12 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-gradient-to-r from-purple-100/30 dark:from-purple-700/30 to-indigo-100/30 dark:to-indigo-800/30 blur-2xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            {/* Heading */}
            <motion.h3
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative z-20 text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-6 inline-block"
            >
              Elevate Your Career to the Next Level
              {/* Centered Underline */}
              <span className="absolute left-1/2 -bottom-2 w-32 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full opacity-90 -translate-x-1/2"></span>
            </motion.h3>


            {/* Paragraph */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-gray-800 dark:text-gray-200 text-base md:text-lg mb-12 max-w-3xl mx-auto leading-relaxed relative z-10"
            >
              Join{" "}
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-indigo-500">
                ia4solutions
              </span>{" "}
              and gain <span className="font-semibold text-pink-500">industry-ready skills</span>, hands-on{" "}
              <span className="font-semibold text-purple-500">project experience</span>, and opportunities with top global MNCs. Transform your knowledge into a rewarding career guided by{" "}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400">industry experts</span>.
            </motion.p>

            {/* Button */}
            <motion.a
              href="/register"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 inline-block 
             bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 
             dark:from-pink-600 dark:via-purple-700 dark:to-indigo-600
             text-white font-bold text-lg md:text-xl
             px-12 py-4 rounded-3xl
             shadow-lg shadow-pink-400/40 dark:shadow-indigo-900/50
             hover:shadow-xl hover:shadow-pink-500/60 dark:hover:shadow-indigo-700/60
             transition-all duration-300 ease-in-out
             ring-2 ring-transparent hover:ring-pink-300 dark:hover:ring-indigo-400"
            >
              Get Started
              {/* Optional animated spark */}
              <span className="absolute -top-2 -right-2 w-3 h-3 bg-white rounded-full opacity-70 animate-pulse"></span>
            </motion.a>



            {/* Overlay Blur */}
            <div className="absolute inset-0 bg-white/5 dark:bg-gray-700/20 backdrop-blur-sm pointer-events-none rounded-3xl"></div>
          </div>
        </div>

        {/* Floating Bubbles */}
        <div className="absolute top-0 left-1/4 w-2 h-2 rounded-full bg-blue-300/60 blur-sm animate-bounce-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 rounded-full bg-pink-300/50 blur-sm animate-bounce-slow delay-1500"></div>
      </section>


    </>
  );
};

export default Home;
