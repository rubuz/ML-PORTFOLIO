import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import AnimatedBG from "./components/animatedBg/AnimatedBG";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <AnimatedBG />
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
