
import React, { useState } from "react";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section id="about" className="py-20 bg-dark-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-2/5 mb-10 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800"
              alt="About Me" 
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-3/5 md:pl-12">
            <h2 className="text-5xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 mb-8">
              Michael Abijosh is a Creative Director and Digital Marketing Strategist with vast experience
              in the world of digital brand management. He has been in the Design & Digital Marketing industry
              for over 6 years and has worked for several large institutions including SHG Cooperation United Kingdom,
              Ministry of Foreign Affairs & International trade, BrewBistro, Big Five Breweries 
              and many other freelance projects.
            </p>
            
            <div className="border-b border-gray-700 mb-8">
              <div className="flex flex-wrap">
                <button 
                  onClick={() => setActiveTab("skills")}
                  className={`skill-tab ${activeTab === "skills" ? "active" : ""}`}
                >
                  Main Skills
                </button>
                <button 
                  onClick={() => setActiveTab("awards")}
                  className={`skill-tab ${activeTab === "awards" ? "active" : ""}`}
                >
                  Awards
                </button>
                <button 
                  onClick={() => setActiveTab("experience")}
                  className={`skill-tab ${activeTab === "experience" ? "active" : ""}`}
                >
                  Experience
                </button>
                <button 
                  onClick={() => setActiveTab("education")}
                  className={`skill-tab ${activeTab === "education" ? "active" : ""}`}
                >
                  Education & Certification
                </button>
              </div>
            </div>
            
            {activeTab === "skills" && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Graphics Design Expert</h3>
                  <p className="text-gray-400">Advanced Skills in Photoshop, Illustrator, Canva, InDesign</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Motion Graphics Expert</h3>
                  <p className="text-gray-400">Advanced skills in After Effects, Premiere Pro, Adobe Media Encoder</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Video Editing Expert</h3>
                  <p className="text-gray-400">DaVinci Resolve, Premiere Pro, After Effects</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Digital Marketing Expert</h3>
                  <p className="text-gray-400">Social Media Management, SEO, Google Ads, Email Marketing</p>
                </div>
              </div>
            )}

            {activeTab === "awards" && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Google UX Design Certificate</h3>
                  <p className="text-gray-400">Awarded by Google, 2022</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Best Digital Marketing Campaign</h3>
                  <p className="text-gray-400">Marketing Association Awards, 2021</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Creative Designer of the Year</h3>
                  <p className="text-gray-400">Design Industry Recognition, 2020</p>
                </div>
              </div>
            )}

            {activeTab === "experience" && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Creative Director</h3>
                  <p className="text-gray-400">Freelance | 2020 - Present</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Digital Marketing Specialist</h3>
                  <p className="text-gray-400">SHG Corporation UK | 2018 - 2020</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Graphic Designer</h3>
                  <p className="text-gray-400">Ministry of Foreign Affairs | 2016 - 2018</p>
                </div>
              </div>
            )}

            {activeTab === "education" && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Google UX Design Certificate</h3>
                  <p className="text-gray-400">Google/Coursera, 2022</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Digital Marketing Professional Certificate</h3>
                  <p className="text-gray-400">Digital Marketing Institute, 2019</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
