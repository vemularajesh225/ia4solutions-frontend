import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEye, FaBullseye, FaQuoteLeft, FaRocket } from "react-icons/fa";
import {
  HiLightBulb, HiAcademicCap, HiScale, HiUsers,
  HiUserGroup,
  HiCodeBracket,
  HiDocumentText,
  HiRocketLaunch,
  HiMicrophone,
  HiArrowRight,
} from "react-icons/hi2";
import { HiUserAdd } from "react-icons/hi";

;

const journey = [
  {
    icon: HiUserAdd,
    title: "Step 1: Join IA4Solutions",
    text: "Take your first step toward success — enroll in IA4Solutions and unlock structured career tracks curated by experts.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: HiAcademicCap,
    title: "Step 2: Learn Trending Technologies",
    text: "Master in-demand skills like Python, Java, Web Development, Data Science, and Cloud Computing through guided mentorship.",
    color: "from-indigo-400 to-indigo-600",
  },
  {
    icon: HiLightBulb,
    title: "Step 3: Build Problem-Solving Skills",
    text: "Sharpen your logic and analytical thinking with coding challenges, hackathons, and real-world case studies.",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    icon: HiCodeBracket,
    title: "Step 4: Develop Real Projects",
    text: "Apply your skills to build full-fledged projects — from idea to deployment — guided by mentors and industry standards.",
    color: "from-green-400 to-green-600",
  },
  {
    icon: HiUserGroup,
    title: "Step 5: Internships & Freelancing",
    text: "Gain hands-on experience through internships, freelance work, or collaborative projects that enhance your portfolio.",
    color: "from-teal-400 to-teal-600",
  },
  {
    icon: HiDocumentText,
    title: "Step 6: Build a Professional Resume & Profile",
    text: "Create an ATS-friendly resume, LinkedIn profile, and GitHub portfolio that reflect your skills and achievements.",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: HiMicrophone,
    title: "Step 7: Prepare for Interviews",
    text: "Get trained in mock interviews, aptitude, communication, and technical rounds to boost your confidence and readiness.",
    color: "from-pink-400 to-pink-600",
  },
  {
    icon: HiRocketLaunch,
    title: "Step 8: Step into the Industry",
    text: "Land your dream job with the support of our placement cell and network of hiring partners. Your journey begins here!",
    color: "from-red-400 to-red-600",
  },
];


const About = () => {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-3 space-y-6">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-center text-blue-900 dark:text-white relative"
        >
          About ia4solutions
          <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></span>
        </motion.h1>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed mt-6"
        >
          At{" "}
          <span className="font-semibold text-blue-800 dark:text-blue-400">
            Innovative Academy for IT Solutions (ia4s)
          </span>
          , we empower students, job seekers, and professionals with{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent font-medium">
            in-demand IT skills
          </span>
          ,{" "}
          <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent font-medium">
            hands-on projects
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-medium">
            career-ready exposure
          </span>
          . Our goal is to bridge the gap between learning and success in today’s digital-first world.
        </motion.p>


        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 text-center md:text-left">
          {[
            {
              icon: FaEye,
              title: "Our Vision",
              text: "To lead in IT education and digital innovation, empowering individuals and businesses with future-ready skills and smart technology solutions.",
              color: "text-blue-600",
            },
            {
              icon: FaBullseye,
              title: "Our Mission",
              text: "To train and mentor tech talent through practical, industry-focused learning, helping both freshers and professionals thrive in the evolving IT industry.",
              color: "text-green-600",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl border border-blue-100 dark:border-gray-700"
            >
              <item.icon className={`text-3xl mb-4 mx-auto md:mx-0 ${item.color}`} />
              <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-white">{item.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 dark:from-gray-900 to-indigo-50 dark:to-gray-800 p-8 md:p-12 rounded-3xl shadow-sm relative overflow-hidden"
        >
          {/* Decorative background shapes */}
          <div className="absolute -top-10 -left-10 w-36 h-36 bg-blue-200 dark:bg-blue-700 rounded-full opacity-10 blur-2xl animate-pulse-slow"></div>
          <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-indigo-200 dark:bg-indigo-700 rounded-full opacity-10 blur-2xl animate-pulse-slow"></div>
          <div className="absolute top-20 right-12 w-32 h-32 bg-purple-300 dark:bg-purple-700 rounded-full opacity-10 blur-2xl animate-pulse-slow"></div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
            {/* Main Icon */}
            <div className="flex items-center justify-center bg-white dark:bg-gray-700 rounded-full shadow-xl w-12 h-12 hover:shadow-2xl transition-all duration-500">
              <HiUsers className="text-purple-600 text-xl hover:text-indigo-500 transition-colors duration-500" />
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-white mb-8 text-center md:text-left relative">
                Our Core Values
                <span className="absolute left-1/2 md:left-0 -bottom-2 -translate-x-1/2 md:translate-x-0 w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></span>
              </h2>

              <div className="grid md:grid-cols-2 gap-6 text-left">
                {[
                  { icon: HiLightBulb, text: "Innovation-driven learning", color: "text-yellow-500" },
                  { icon: HiAcademicCap, text: "Practical & industry-focused training", color: "text-blue-500" },
                  { icon: HiScale, text: "Integrity and transparency", color: "text-green-600" },
                  { icon: HiUsers, text: "Lifelong mentorship & guidance", color: "text-pink-500" },
                  { icon: FaRocket, text: "Career success as our priority", color: "text-red-500", full: true },
                ].map((val, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.15, type: "spring", stiffness: 50 }}
                    className={`flex items-start gap-4 bg-white dark:bg-gray-700 p-3 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-transform hover:-translate-y-2 duration-500 ${val.full ? "md:col-span-2" : ""
                      }`}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-500">
                      <val.icon className={`${val.color} text-xl hover:text-indigo-500 transition-colors duration-500`} />
                    </div>

                    {/* Text */}
                    <p className="text-gray-800 dark:text-gray-300 text-base md:text-lg font-medium leading-relaxed">
                      {val.text.split(" ").map((word, idx) =>
                        ["Innovation-driven", "Practical", "Integrity", "Lifelong", "Career"].includes(word) ? (
                          <span
                            key={idx}
                            className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent font-semibold"
                          >
                            {word}{" "}
                          </span>
                        ) : (
                          word + " "
                        )
                      )}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>


        {/* Student Career Journey / Milestones */}
        <div className="relative py-2 md:py-8 overflow-hidden">

          {/* Decorative blobs */}
          <div className="absolute top-0 -left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-600/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 -right-10 w-72 h-72 bg-indigo-400/20 dark:bg-indigo-700/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center relative z-10 px-4"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-center relative z-10 leading-tight">
              <span className="bg-gradient-to-r from-blue-500 via-indigo-600 to-teal-500 bg-clip-text text-transparent animate-gradient-x">
                Your Career Journey
              </span>
              <span className="mx-2 text-gray-800 dark:text-gray-200 font-extrabold">at</span>
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-x delay-200">
                ia4solutions
              </span>
            </h2>

            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-center">
              <span className="font-semibold text-blue-600 dark:text-blue-400">Step-by-step roadmap</span>{" "}
              from <span className="text-indigo-600 dark:text-indigo-400 font-medium">mastering new skills</span>{" "}
              <span className="relative inline-block">
                <span className="underline decoration-indigo-500 dark:decoration-indigo-400 decoration-2 underline-offset-4">to landing your dream job</span>
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-30 rounded"></span>
              </span>{" "}
              in the tech industry.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-6xl mx-auto mt-16 md:mt-20 px-4">
            {/* Center Vertical Progress Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden md:block">
              <div className="absolute top-0 w-full h-full bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-500 rounded-full opacity-60 shadow-inner"></div>
            </div>

            <div className="space-y-8 md:space-y-0">
              {journey.map((step, i) => {
                const isLeft = i % 2 === 0;
                const StepIcon = step.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.15, type: "spring", stiffness: 60 }}
                    viewport={{ once: true }}
                    className="relative md:grid md:grid-cols-2 md:gap-12 md:items-center group"
                  >
                    {/* Step Number Badge on Timeline */}
                    <div className="absolute md:block left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-bold flex items-center justify-center shadow-lg">
                        {i + 1}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`mt-6 md:mt-0 ${isLeft ? 'md:col-start-1 md:order-1 md:text-right' : 'md:col-start-2 md:order-2 md:text-left'}`}>
                      <div className={`p-1 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                        <div className="bg-white/90 dark:bg-gray-800/80 backdrop-blur-md rounded-[15px] p-3 hover:-translate-y-2 hover:scale-105 hover:shadow-xs transition-transform duration-500">
                          <div className={`flex items-start gap-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                            <div
                              className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${step.color} text-white shadow-md flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
                            >
                              <StepIcon className="text-xl md:text-2xl" />
                            </div>
                            <div className="flex-grow">
                              <h3 className="text-sm md:text-lg font-bold text-blue-900 dark:text-white">{step.title}</h3>
                              <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed text-sm md:text-base">{step.text}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Connector Line */}
                    {i < journey.length - 1 && (
                      <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-14 w-0.5 h-full mt-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>


          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16 md:mt-24 relative z-10"
          >
            <Link to="/register">
              <button className="relative group inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="absolute left-0 top-0 w-full h-full bg-white opacity-0 transition-all duration-500 group-hover:opacity-20 group-hover:rotate-45"></span>
                <span className="relative flex items-center gap-2">
                  Start Your Journey Today <HiArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
                </span>
              </button>
            </Link>
          </motion.div>
        </div>




        {/* Trainer Testimonials */}
        <div className="py-16 bg-gradient-to-b from-blue-50 dark:from-gray-900 to-white dark:to-gray-700">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 relative z-10">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-sky-900 dark:from-blue-400 dark:to-indigo-400 animate-gradient-x">
              What Our
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 animate-gradient-x delay-200">
              Trainers
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600 dark:from-teal-300 dark:to-cyan-600 animate-gradient-x delay-400">
              Say
            </span>
          </h2>


          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: "Harshasree K",
                role: "Jr. Software Developer",
                quote: "‘Innovative academy for IT solutions’ training and placements are achieved by moving away from traditional lecture-based models towards experimental, project-based & Industry-aligned learning. These methods foster thinking, collaboration, and practical skills that prepare students for real-world applications.",
              },
              {
                name: "Vemula Rajesh",
                role: "Former Employee at Tech Mahindra",
                quote: "A former Tech Mahindra employee can transition into a successful software trainer at IA4Solutions, giving corporate experiences & continuous learning, applying practical knowledge of industry standards and projects, which are highly valuable assets for teaching students.",
              },
              {
                name: "Prasanna Kumar T",
                role: "Senior Business Process Management Consultant, Former Employee at Accenture",
                quote: "To become a successful consultant, I leverage my extensive experience to transition into a corporate trainer & placement coordinator at IA4Solutions, delivering presentations, mentoring students, and building strong industry connections.",
              },
              {
                name: "Sreekanth K",
                role: "Managing Director, IA4Solutions",
                quote: "Being a motivational trainer, several professionals recognize my approach. My goal is to deliver quality teaching and transform unemployed individuals into successful employees, helping them achieve their dreams.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.2, type: "spring", stiffness: 60 }}
                className={`relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-3 duration-500`}
              >
                {/* Quote Icon */}
                <FaQuoteLeft className="absolute -top-5 left-6 text-blue-300 dark:text-indigo-500 text-3xl" />

                {/* Trainer Avatar */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg mb-4 shadow-md">
                  {item.name.split(" ").map(n => n[0]).join("")}
                </div>

                {/* Quote */}
                <p className="text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed text-base">{item.quote}</p>

                {/* Name & Role */}
                <h3 className="text-blue-900 dark:text-white font-semibold text-lg mb-1 relative after:absolute after:-bottom-1 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-indigo-600 after:rounded-full">
                  {item.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-300 text-sm">{item.role}</p>
              </motion.div>
            ))}
          </div>
        </div>


        {/* Call to Action */}
        <div className="text-center mt-12">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/courses"
            className="relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-800 dark:from-blue-500 dark:to-indigo-600 text-white font-semibold text-base rounded-full shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl group"
          >
            {/* Animated Background Span */}
            <span className="absolute inset-0 w-full h-full bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-10 rounded-full"></span>

            {/* Button Text with Icon */}
            <span className="relative flex items-center gap-2">
              Join ia4solutions Today
              <HiArrowRight className="text-xl transform transition-transform duration-300 group-hover:translate-x-2" />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default About;
