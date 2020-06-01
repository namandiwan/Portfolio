/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./App.css";
import JumbotronCode from "./Components/Jumbotron/Jumbotron";
import Experience from "./Components/Experience/Experience";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <JumbotronCode />
      <ImageSlider />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
