import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Projectpage from "./pages/Projectpage";
import Skillspage from "./pages/Skillspage";
import Contactpage from "./pages/Contactpage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/projects" element={<Projectpage />} />
        <Route path="/skills" element={<Skillspage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
    </div>
  );
}

export default App;
