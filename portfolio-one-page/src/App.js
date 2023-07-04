import "./App.css";
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
      <Homepage />
      <Aboutpage />
      <Projectpage />
      <Skillspage />
      <Contactpage />
    </div>
  );
}

export default App;
