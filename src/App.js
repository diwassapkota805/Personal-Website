import './App.css';
import { Navbar, Home, About, Skill, Project, Contact, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Home />
      </div>
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
