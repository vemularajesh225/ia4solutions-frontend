import {
  FaUserGraduate,
  FaBriefcase,
  FaProjectDiagram,
  FaLaptopCode,
  FaGlobe,
  FaBullhorn,
  FaShoppingCart,
  FaChalkboardTeacher,
  FaHandshake,
  FaClipboardList
} from "react-icons/fa";

const services = [
  {
    title: "Placement Training & Assistance",
    icon: <FaUserGraduate />,
    description: "Comprehensive placement training for both freshers and experienced candidates, including resume making, screening tests, technical and HR rounds, soft skills, and communication development.",
    gradient: "from-emerald-500 to-lime-500",
  },
  {
    title: "Internships & Certifications",
    icon: <FaBriefcase />,
    description: "Gain hands-on industrial experience with professional certifications and real-time project exposure.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Academic & Final-Year Projects",
    icon: <FaProjectDiagram />,
    description: "Guidance and support for academic and industry-oriented final-year projects using the latest technologies.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "IT Training & Certification",
    icon: <FaLaptopCode />,
    description: "Specialized training in software development, data analytics, and IT certifications to enhance your technical expertise.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Website Design & Development",
    icon: <FaGlobe />,
    description: "Professional website design and full-stack development solutions tailored for businesses and institutions.",
    gradient: "from-sky-400 to-blue-600",
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn />,
    description: "Master digital marketing strategies including SEO, social media campaigns, and content marketing for business growth.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    title: "E-Commerce Development",
    icon: <FaShoppingCart />,
    description: "Design and build powerful e-commerce platforms with secure payment integration and scalable architecture.",
    gradient: "from-teal-400 to-cyan-600",
  },
  {
    title: "Campus Recruitment Training",
    icon: <FaChalkboardTeacher />,
    description: "Intensive campus recruitment preparation covering aptitude, technical tests, communication skills, and mock interviews.",
    gradient: "from-green-400 to-lime-500",
  },
  {
    title: "Corporate Collaboration & Industry Connect",
    icon: <FaHandshake />,
    description: "Collaborate with top companies for internships, live projects, and placement drives to boost employability.",
    gradient: "from-fuchsia-500 to-purple-700",
  },
  {
    title: "Career Assessment & Guidance",
    icon: <FaClipboardList />,
    description: "Get expert career counseling, skill assessment, and personalized growth strategies to achieve your goals.",
    gradient: "from-rose-500 to-red-600",
  },
];

export default services;
