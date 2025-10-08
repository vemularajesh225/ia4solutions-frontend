// src/components/PlacementLogoGrid.jsx
import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import companies from "../data/placements";

const LogoItem = ({ company }) => {
  const [err, setErr] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.12, rotate: 1 }}
      transition={{ type: "spring", stiffness: 250 }}
      className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-700 mx-4 my-2 hover:shadow-pink-400/40 hover:shadow-lg transition-all duration-300"
    >
      {!err ? (
        <img
          src={company.logo}
          alt={company.name}
          onError={() => setErr(true)}
          className="w-24 h-12 object-contain filter drop-shadow-md"
          loading="lazy"
        />
      ) : (
        <div className="w-32 h-16 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-md">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
            {company.name}
          </span>
        </div>
      )}
    </motion.div>
  );
};

const PlacementLogoGrid = () => {
  const [speed, setSpeed] = useState(50);

  // Adjust speed dynamically based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setSpeed(25); // mobile
      else if (width < 1024) setSpeed(35); // tablet
      else setSpeed(50); // desktop
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Split companies into two balanced groups
  const half = Math.ceil(companies.length / 2);
  const firstHalf = companies.slice(0, half);
  const secondHalf = companies.slice(half);

  return (
    <section className="w-full py-6 overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-500">

      {/* Top Marquee Row */}
      <div className="mb-4">
        <Marquee
          speed={speed}
          gradient={false}
          pauseOnHover={true}
          className="py-2"
        >
          {firstHalf.map((company, i) => (
            <LogoItem key={`top-${i}`} company={company} />
          ))}
        </Marquee>
      </div>

      {/* Bottom Marquee Row */}
      <div className="mt-4">
        <Marquee
          speed={speed - 10}
          gradient={false}
          direction="right"
          pauseOnHover={true}
          className="py-2"
        >
          {secondHalf.map((company, i) => (
            <LogoItem key={`bottom-${i}`} company={company} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default PlacementLogoGrid;
