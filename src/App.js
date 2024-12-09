import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Experience/>
      <Projects />
      <Footer />
    </>
  );
}

export default App;