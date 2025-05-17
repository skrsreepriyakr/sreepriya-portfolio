import React from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './styles/main.scss';


function App() {

// useEffect(() => {
//   AOS.init({ duration:1200 });
// }, []);

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      {/* <h2>Welcome to My React Portfolio</h2> */}
    </div>
  );
}

export default App;
