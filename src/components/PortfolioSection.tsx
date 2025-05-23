import React from "react";
import { Link } from "react-router-dom";

const PortfolioSection = () => {
  const projects = [
    {
      image: "/images/Logo1.png",
      category: "Branding & Identity",
      title: "Branding & Identity Design",
      link: "/portfolio/project-1"
    },
    {
      image: "/images/Mio Mango.png",
      category: "Motion Graphics",
      title: "Motion Graphics",
      link: "/portfolio/project-2"
    },
    {
      image: "/images/Hodie.png",
      category: "Print Design",
      title: "Print Design",
      link: "/portfolio/project-3"
    },
    {
      image: "/images/The Summer.png",
      category: "Digital Designs & Infographics",
      title: "Digital Designs & Infographics",
      link: "/portfolio/project-4"
    },
    {
      image: "/images/Roll.png",
      category: "Advertising & Marketing Design",
      title: "Advertising & Marketing Design",
      link: "/portfolio/project-5"
    },
    {
      image: "/images/Product.png",
      category: "Environmental & Experiential Design",
      title: "Marketing ",
      link: "/portfolio/project-6"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-dark-100">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">
          <span className="text-brand-red">Featured</span> Projects
        </h2>
        <p className="section-subtitle text-center">
          A curated showcase of premium design work across various disciplines including branding, motion graphics, editorial design, and digital media campaigns.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-80 object-contain transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <span className="text-sm text-gray-300">{project.category}</span>
                <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                <Link 
                  to={project.link} 
                  className="inline-block bg-dark text-white px-6 py-2 rounded uppercase text-sm font-semibold tracking-wider hover:bg-brand-red transition-colors"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/portfolio" 
            className="inline-block border-2 border-brand-red hover:bg-brand-red text-white px-8 py-3 rounded-md font-semibold transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
