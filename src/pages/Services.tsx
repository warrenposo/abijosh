
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ServicesSection from "../components/ServicesSection";

const Services = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">Design & Creative Services</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center mb-16">
              Comprehensive visual communication solutions to help businesses establish their brand identity and create impactful, engaging content.
            </p>
          </div>
        </section>
        <ServicesSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Services;
