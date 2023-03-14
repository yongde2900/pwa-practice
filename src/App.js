import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './componet/Nav';
import Home from './pages/Home';
import Projects from './pages/Projects'
import Team from './pages/Team'
import Footer from './componet/Footer';
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <div className='rounded-3xl drop-shadow-md  max-w-4xl mx-auto '>
        <HashRouter >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Projects" element={<Projects />} />
          </Routes>
        </HashRouter>
      </div>
      <Footer/>
    </>
  );
}

export default App;
