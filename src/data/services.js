import { 
  FaBriefcase, 
  FaProjectDiagram, 
  FaFileInvoice, 
  FaLightbulb, 
  FaUsersCog, 
  FaChalkboard, 
  FaLaptopCode, 
  FaHandshake,
  FaUserGraduate,
  FaGlobe
} from "react-icons/fa";

const services = [
  {
    title: "Placement Support for Freshers and Experienced Candidates",
    icon: <FaUserGraduate />,
    description: "Dedicated placement assistance, job alerts, and career guidance for both freshers and experienced professionals.",
    gradient: "from-emerald-500 to-lime-500",
  },
  {
    title: "Internships & Certifications",
    icon: <FaBriefcase />,
    description: "Hands-on corporate training programs with globally recognized certifications.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Academic & Final-Year Projects",
    icon: <FaProjectDiagram />,
    description: "Guidance on innovative projects with practical, industry-relevant applications.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "IT Training & Certification",
    icon: <FaLaptopCode />,
    description: "Expert guidance for coding, technical interviews, and IT certifications.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Website Design & Development",
    icon: <FaGlobe />,
    description: "Custom website design and development solutions for institutes, startups, and businesses.",
    gradient: "from-sky-400 to-blue-600",
  },
  {
    title: "Resume & LinkedIn Optimization",
    icon: <FaFileInvoice />,
    description: "ATS-friendly resume building and LinkedIn branding for maximum visibility.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    title: "Interview Preparation & Mock Rounds",
    icon: <FaUsersCog />,
    description: "Practice technical, HR, and group discussion sessions with expert feedback.",
    gradient: "from-red-400 to-rose-500",
  },
  {
    title: "Technical & HR Interview Strategies",
    icon: <FaHandshake />,
    description: "Learn strategies to impress HR managers, recruiters, and technical leads.",
    gradient: "from-fuchsia-500 to-purple-700",
  },
  {
    title: "Aptitude & Logical Reasoning",
    icon: <FaLightbulb />,
    description: "Sharpen analytical thinking, problem-solving, and reasoning skills.",
    gradient: "from-teal-400 to-cyan-600",
  },
  {
    title: "Soft Skills & Communication",
    icon: <FaChalkboard />,
    description: "Improve confidence, presentation skills, and professional workplace etiquette.",
    gradient: "from-green-400 to-lime-500",
  },
];

export default services;
