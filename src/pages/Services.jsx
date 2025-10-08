import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import CountUp from "react-countup";
import services from "../data/services";
import ServiceCard from "../components/ServiceCard";
import { HiUserGroup, HiBuildingOffice2, HiAcademicCap } from "react-icons/hi2";

const Services = () => {
  const stats = [
    { value: 500, label: "Projects Completed", icon: HiBuildingOffice2, color: "from-blue-500 to-indigo-600" },
    { value: 3000, label: "Students Trained", icon: HiUserGroup, color: "from-green-400 to-emerald-500" },
    { value: 50, label: "Top Companies Served", icon: HiAcademicCap, color: "from-purple-500 to-pink-500" },
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Our Services
        </h1>
        <span className="block w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></span>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          We provide industry-focused IT solutions and career support to help you grow professionally.
        </p>
      </div>

      {/* Stats Panel with counters */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10 text-center">
        {stats.map((stat, i) => {
          const StatIcon = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`p-6 rounded-xl bg-gradient-to-r ${stat.color} shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-white flex flex-col items-center justify-center`}
            >
              <StatIcon className="text-3xl mb-2" />
              <h3 className="text-3xl md:text-4xl font-bold">
                <CountUp start={0} end={stat.value} duration={2} />+
              </h3>
              <p className="text-lg mt-2 font-medium">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ServiceCard
              title={service.title}
              icon={service.icon}
              description={service.description}
              gradient={service.gradient}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Call-to-Action */}
      <div className="text-center mt-20">
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/contact"
          className="inline-flex items-center justify-center bg-blue-600 text-white px-10 py-4 rounded-full shadow-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Request a Consultation <HiArrowRight className="ml-2 text-2xl" />
        </motion.a>
      </div>
    </div>
  );
};

export default Services;
