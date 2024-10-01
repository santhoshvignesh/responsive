import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import NavBar from './components/Navbar';
import SocialMediaBar from './components/SocialMediaBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Project';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
{/*
  
  #8FC53C
  #5ADAE3
  #FFC414
  */}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SocialMediaBar/>
        <NavBar />
      </header>

      <main className="App-main">
        <h1>Welcome to the HomePage</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
