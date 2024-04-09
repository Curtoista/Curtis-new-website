import "./App.css";
import AboutMe from "./AboutMe.tsx";
import Navbar from "./Navbar.tsx";
import ProjectSection from "./ProjectSection.tsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <ProjectSection />
    </div>
  );
}

export default App;
