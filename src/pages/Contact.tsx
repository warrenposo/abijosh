
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ContactSection from "../components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">Contact Me</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center mb-16">
              Get in touch with me for freelance work, collaborations, or just to say hello.
            </p>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
