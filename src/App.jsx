import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Jumbotron from "./components/Jumbotron/Jumbotron.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import ContactMe from "./components/ContactMe/ContactMe.jsx";

function App() {

  return (
    <>
      <Navbar />
      <Jumbotron />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
};

export default App;
