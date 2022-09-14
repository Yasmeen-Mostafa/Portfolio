import logo from "./logo.svg";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Resume = lazy(() => import("./pages/Resume/Resume"));
const ContactMe = lazy(() => import("./pages/ContactMe/ContactMe"));

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <main>
        <Suspense
          fallback={
            //Message showed on component loading
            <div className="loading-msg">
              <h1>Loading...</h1>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contactme" element={<ContactMe />} />
          </Routes>
        </Suspense>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
