import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";

const Portfolio = () => {
  // Using the same project data structure as in ProjectDetail for consistency
  const projects = [
    {
      id: "project-1",
      image: "/images/Logo1.png",
      category: "Branding & Identity",
      title: "Corporate Brand Identity System",
      client: "Tech Innovations Inc.",
      completion: "March 2024"
    },
    {
      id: "project-2",
      image:  "/images/Mio Mango.png",
      category: "Motion Graphics",
      title: "Motion Graphics",
      client: "Global Products Co.",
      completion: "January 2024"
    },
    {
      id: "project-3",
      image: "/images/Hodie.png",
      category: "Print Designs",
      title: "Print Designs",
      client: "Lifestyle Publishers Ltd.",
      completion: "February 2024"
    },
    {
      id: "project-4",
      image: "/images/The Summer.png",
      category: "Digital Designs & Infographics",
      title: "Digital Designs & Infographics",
      client: "Online Retail Solutions",
      completion: "April 2024"
    },
    {
      id: "project-5",
      image: "/images/Roll.png",
      category: "Advertising & Marketing Design",
      title: "Advertising & Marketing Design",
      client: "FinTech Innovations",
      completion: "February 2024"
    },
    {
      id: "project-6",
      image: "/images/Product.png",
      category: "Environmental & Experiential Design",
      title: "Environmental & Experiential Design",
      client: "Marketing Solutions Group",
      completion: "May 2024"
    },
  ];

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">
              <span className="text-brand-red">Featured</span> Portfolio
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center mb-16">
              A curated showcase of premium design work across various disciplines including branding, motion graphics, editorial design, and digital media campaigns.
            </p>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="bg-dark-200 border-none overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-red text-white text-xs px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                    <div className="flex justify-between text-sm text-gray-400 mb-4">
                      <span>{project.client}</span>
                      <span>{project.completion}</span>
                    </div>
                    <Link 
                      to={`/portfolio/${project.id}`} 
                      className="inline-block bg-dark border border-brand-red text-white px-6 py-2 rounded uppercase text-sm font-semibold tracking-wider hover:bg-brand-red transition-colors w-full text-center mt-2"
                    >
                      View Project
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Portfolio;
