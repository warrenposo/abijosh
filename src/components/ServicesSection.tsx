
import React from "react";

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
          <line x1="12" y1="22" x2="12" y2="15.5" />
          <polyline points="22 8.5 12 15.5 2 8.5" />
          <polyline points="2 15.5 12 8.5 22 15.5" />
          <line x1="12" y1="2" x2="12" y2="8.5" />
        </svg>
      ),
      title: "Branding & Identity Design",
      description: "Crafting unforgettable brands with logos, color palettes, typography, and full brand guidelines—ensuring your business stands out with a cohesive and professional look."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <rect x="8" y="7" width="8" height="6" rx="1" />
          <path d="M8 17h8" />
          <path d="M8 13h5" />
        </svg>
      ),
      title: "Print & Editorial Design",
      description: "Stunning print materials that make an impact—from sleek business cards and brochures to eye-catching posters, packaging, and magazine layouts."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <circle cx="12" cy="10" r="2" />
        </svg>
      ),
      title: "Digital Designs & Infographics",
      description: "High-converting digital experiences, including infographics, social media graphics, carousel, and engaging UI/UX that keeps users hooked."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
      title: "Motion Graphics & Animation",
      description: "Dynamic visuals that bring your brand to life—animated logos, explainer videos, title sequences, and captivating motion content for ads and social media."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      ),
      title: "Advertising & Marketing Design",
      description: "Attention-grabbing campaigns across billboards, digital ads, email graphics, and promotional content designed to boost engagement and sales."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      title: "Environmental & Experiential Design",
      description: "Immersive branding for physical spaces—signage, retail interiors, event branding, and exhibition designs that leave a lasting impression."
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Graphic Design & Motion Graphics Services</h2>
        <p className="section-subtitle text-center">
          Comprehensive design and visual communication solutions to help businesses establish their brand identity and create impactful visual content.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
