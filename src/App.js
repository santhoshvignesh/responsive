import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import ServicesSection from './components/ServicesSection'; // Make sure to import the ServicesSection component
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Project';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <img src="/Synergy Logo.png" alt="Synergy Logo" className="logo" /> {/* Access from public folder */}
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
      <ServicesSection /> {/* Services section placed above Footer */}
      <Footer />
    </div>
  );
}

export default App;
