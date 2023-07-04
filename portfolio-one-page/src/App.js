import "./App.css";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Projectpage from "./pages/Projectpage";
import Skillspage from "./pages/Skillspage";
import Contactpage from "./pages/Contactpage";
import Navbar from "./components/Navbar";
import { useRef } from "react";

function App() {
  const aboutSection = useRef(null);
  const skillSection = useRef(null);
  const scrollToSection = (elementRef) => {
    if (elementRef.current !== null) {
      const offset = elementRef.current.offsetTop;
      window.scrollTo({
        top: offset - 100,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <Navbar
        aboutSection={aboutSection}
        skillSection={skillSection}
        scrollToSection={scrollToSection}
      />
      <Homepage />
      <Aboutpage ref={aboutSection} />
      <Projectpage />
      <Skillspage ref={skillSection} />
      <Contactpage />
    </div>
  );
}

export default App;
