import React, { useEffect } from "react";
import './App.css';
import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      const scrollToTopBtn = document.getElementById('scrollToTopBtn');

      if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(1, 1, 1, 0.5)'; // Kaydırıldığında opak yap
        scrollToTopBtn.style.display = 'block'; // Butonu göster
      } else {
        header.style.backgroundColor = 'rgba(1, 1, 1, 0.8)'; // Başlangıçta transparan yap
        scrollToTopBtn.style.display = 'none'; // Butonu gizle
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <button id="scrollToTopBtn" onClick={scrollToTop}>Üste Dön</button>
    </div>
  );
}

export default App;