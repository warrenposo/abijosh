import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Set active link based on current path
    const path = location.pathname;
    if (path === "/") setActiveLink("home");
    else setActiveLink(path.replace("/", ""));

    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [location]);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    // Add smooth scrolling for same-page navigation
    if (location.pathname === "/" && link !== "home") {
      const element = document.getElementById(link);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-dark shadow-md py-3' : 'py-5'}`}>
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
        <Link to="/" className="flex items-center">
          <div className="flex items-center space-x-1 hover:scale-105 transition-transform duration-300">
            <div className="h-8 w-2 bg-brand-red"></div>
            <div className="h-8 w-2 bg-brand-yellow"></div>
            <div className="h-8 w-2 bg-brand-orange"></div>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-2">
          <Link 
            to="/" 
            className={`nav-link transition-all duration-300 ${activeLink === "home" ? "active" : ""}`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link transition-all duration-300 ${activeLink === "about" ? "active" : ""}`}
            onClick={() => handleLinkClick("about")}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className={`nav-link transition-all duration-300 ${activeLink === "services" ? "active" : ""}`}
            onClick={() => handleLinkClick("services")}
          >
            Services
          </Link>
          <Link 
            to="/portfolio" 
            className={`nav-link transition-all duration-300 ${activeLink === "portfolio" ? "active" : ""}`}
            onClick={() => handleLinkClick("portfolio")}
          >
            Portfolio
          </Link>
          <Link 
            to="/blog" 
            className={`nav-link transition-all duration-300 ${activeLink === "blog" ? "active" : ""}`}
            onClick={() => handleLinkClick("blog")}
          >
            Blog
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link transition-all duration-300 ${activeLink === "contact" ? "active" : ""}`}
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-red transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-red transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-red transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-red transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
          <a href="/contact" className="hidden md:inline-block border-2 border-brand-red hover:bg-brand-red text-white font-semibold px-5 py-2 rounded-md transition-colors duration-300 hover:scale-105 transform">
            LET'S TALK
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
