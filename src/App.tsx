import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import Blog from './pages/Blog';
import CaseStudies from './pages/CaseStudies';
import { Contact } from './pages/Contact';
import './App.css';

// Scroll to the top of the page on every route change (unless the URL has a hash,
// which the target page handles itself, e.g. /about#certifications).
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-bg-page text-neutral-200 font-sans relative">
        {/* Global CRT scanline + grid overlay */}
        <div className="scanlines pointer-events-none fixed inset-0 z-[1]" aria-hidden="true" />
        <div className="grid-pattern pointer-events-none fixed inset-0 z-0 opacity-40" aria-hidden="true" />
        <Navbar />
        <main className="pt-16 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
