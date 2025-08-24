import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Rates from './pages/Rates';
import Compliance from './pages/Compliance';
import Contact from './pages/Contact';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
