import { 
  FaBriefcase, 
  FaProjectDiagram, 
  FaFileInvoice, 
  FaLightbulb, 
  FaUsersCog, 
  FaChalkboard, 
  FaLaptopCode, 
  FaHandshake 
} from "react-icons/fa"; // Using fa6 for latest icons

const services = [
  {
    title: "Internships & Certifications",
    icon: <FaBriefcase />, // Professional career symbol
    description: "Hands-on corporate training programs with globally recognized certifications.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Academic & Final-Year Projects",
    icon: <FaProjectDiagram />, // Professional project planning
    description: "Guidance on innovative projects with practical, industry-relevant applications.",
    gradient: "from-green-500 to-teal-600",
  },
  {
    title: "Resume & LinkedIn Optimization",
    icon: <FaFileInvoice />, // Professional document / resume icon
    description: "ATS-friendly resume building and LinkedIn branding for maximum visibility.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    title: "Aptitude & Logical Reasoning",
    icon: <FaLightbulb />, // Symbolizes ideas and problem-solving
    description: "Sharpen analytical thinking, problem-solving, and reasoning skills.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Interview Preparation & Mock Rounds",
    icon: <FaUsersCog />, // Team + professional preparation
    description: "Practice technical, HR, and group discussion sessions with expert feedback.",
    gradient: "from-red-500 to-pink-500",
  },
  {
    title: "Soft Skills & Communication",
    icon: <FaChalkboard />, // Training/mentoring symbol
    description: "Improve confidence, presentation skills, and professional workplace etiquette.",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    title: "IT Training & Certification",
    icon: <FaLaptopCode />, // Technical skill icon
    description: "Expert guidance for coding, technical interviews, and IT certifications.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Technical & HR Interview Strategies",
    icon: <FaHandshake />, // Corporate handshake / professionalism
    description: "Learn strategies to impress HR managers, recruiters, and technical leads.",
    gradient: "from-yellow-400 to-red-500",
  },
];

export default services;
