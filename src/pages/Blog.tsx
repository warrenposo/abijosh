
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import BlogSection from "../components/BlogSection";

const Blog = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">Latest News</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center mb-16">
              Stay updated with the latest trends, insights, and news in design, development, and digital marketing.
            </p>
          </div>
        </section>
        <BlogSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blog;
