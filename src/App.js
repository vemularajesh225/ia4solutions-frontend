import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Services from "./pages/Services";
import Placements from "./pages/Placements";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      {/* ScrollToTop should be directly under Router */}
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/services" element={<Services />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
