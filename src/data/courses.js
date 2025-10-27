import {
  Code,
  Database,
  LineChart,
  Globe,
  Brain,
  Layers,
  Settings,
  Cpu,
  Laptop,
  ChartBar,
  BarChartBig,
  Webhook,
  PenTool,
  Component,
  Briefcase,
  Network,
} from "lucide-react";

const courses = [
  // 🌟 Featured / High-Demand Courses
  { title: "Full Stack Development", icon: <Layers />, category: "Web Development" },
  { title: "Python", icon: <Brain />, category: "Programming" },
  { title: "Java", icon: <Code />, category: "Programming" },
  { title: "C / C++ Programming", icon: <Code />, category: "Programming" },
  { title: "Networking & Infrastructure Management", icon: <Network />, category: "IT Infrastructure" },

  // 💼 Career-Oriented & Professional Skills
  { title: "HR Training & Office Automation", icon: <Briefcase />, category: "Professional Skills" },
  { title: "Power BI", icon: <BarChartBig />, category: "Data Analytics" },
  { title: "Data Analytics & Data Science", icon: <ChartBar />, category: "Data Science" },
  { title: "SQL", icon: <Database />, category: "Data Science" },

  // 🌐 Web & Marketing Courses
  { title: "HTML, CSS, JS, React", icon: <Globe />, category: "Web Development" },
  { title: "PHP, WordPress", icon: <Webhook />, category: "Web Development" },
  { title: "Digital Marketing", icon: <LineChart />, category: "Marketing" },

  // 🤖 Advanced & Specialized Courses
  { title: "AI & ML", icon: <Brain />, category: "AI/ML" },
  { title: "Testing & Automation", icon: <Settings />, category: "QA/Automation" },
  { title: "Embedded Systems & VLSI", icon: <Cpu />, category: "Electronics" },
  { title: "AutoCAD", icon: <PenTool />, category: "Design" },

  // 🧾 ERP & Business Solutions
  { title: "SAP", icon: <Component />, category: "ERP" },
  { title: "Microsoft Dynamics", icon: <Laptop />, category: "ERP" },
];

export default courses;
