import './App.css';
import { Navbar, Home, About, Skill, Project, Contact } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact />
      </div>

    </div>
  );
}

export default App;