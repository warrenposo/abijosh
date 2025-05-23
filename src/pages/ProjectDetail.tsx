
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

// Project data with dummy content
const projectsData = {
  "project-1": {
    title: "Corporate Brand Identity System",
    category: "Branding & Identity",
    description: "A comprehensive brand identity system for a Fortune 500 tech company, including logo design, color palette, typography, and brand guidelines. This project involved extensive market research, competitor analysis, and stakeholder interviews to create a cohesive visual identity that resonates with the target audience.",
    client: "Tech Innovations Inc.",
    completion: "March 2024",
    mainImage: "/images/Collar tag.png",
    galleryImages: [
      "/images/Envelope.png",
      "/images/Collar tag.png",
      "/images/Business.png",
      "/images/Roll.png",
    ],
    videoId: "dQw4w9WgXcQ", // Example YouTube video ID
  },
  "project-2": {
    title: "Animated Promotional Campaign",
    category: "Motion Graphics",
    description: "A series of animated promotional videos for a product launch campaign. Using advanced motion graphics techniques to showcase product features and benefits in an engaging and visually appealing way. The campaign included social media content, website animations, and digital advertisements.",
    client: "Global Products Co.",
    completion: "January 2024",
    mainImage: "/images/Mio Mango.png",
    galleryImages: [
      "/images/Mio Mango.png",
      "/images/Coffee1.png",
      "/images/Coffee2.png",
      // "/images/COFFEE3,png",
      "/images/Coffee5.png",
    ],
    videoId: "9bZkp7q19f0", // Example YouTube video ID
  },
  "project-3": {
    title: "Logo designs",
    category: "Logo Designs",
    description: "A collection of custom logo designs crafted to capture the essence of each brand's identity. This project involved conceptual development, typography exploration, and graphic creation to deliver distinctive, memorable logos that align with each client's vision and values while maintaining visual impact and scalability across various media",
    client: "Lifestyle Publishers Ltd.",
    completion: "February 2024",
    mainImage: "/images/Rosybill logo.png",
    galleryImages: [
      "/images/Rosybill logo.png",
      "/images/Ab.png",
      "/images/Abl.png",
      "/images/ENDD.png",
      "/images/my logo.png",
      "/images/Nunua.png",
      "/images/RassArts logo.png",
      "/images/Tausialogo.png",
      "/images/Logo1.png",
       "/images/TDA.png",
    ],
    videoId: "bTqVqk7FSmY", // Example YouTube video ID
  },
  "project-4": {
    title: "E-commerce Platform Redesign",
    category: "Web Development",
    description: "Complete redesign of an e-commerce platform to improve user experience, increase conversions, and modernize the visual language. The project involved user research, wireframing, prototyping, and implementation of a responsive design system that works seamlessly across all devices.",
    client: "Online Retail Solutions",
    completion: "April 2024",
    mainImage: "/images/Tausia.png",
    galleryImages: [
      "/images/Tausia.png",
      "/images/Biryani.png",
      "/images/Hodie.png",
      "/images/Instagram.png",
      "/images/Spa.png",
    ],
    videoId: "LXb3EKWsInQ", // Example YouTube video ID
  },
  "project-5": {
    title: "Documentary and Short Ad Production",
    category: "UI/UX Design",
    description: "Production of compelling short-form video content, including documentaries and advertisements, designed to tell impactful stories and engage target audiences. This project encompassed concept development, scriptwriting, filming, editing, and post-production to deliver visually engaging and emotionally resonant media tailored for both digital and broadcast platforms.",
    client: "FinTech Innovations",
    completion: "February 2024",
    mainImage: "/images/Coffee1.png",
    galleryImages: [
     "/images/Coffee1.png",
      "/images/Coffee2.png",
      "/images/COFFEE3.png",
      "/images/Coffee5.png",
      "/images/MUG.png",
    ],
    videoId: "l3UjnxF_Gk4", // Example YouTube video ID
  },
  "project-6": {
    title: "Social Media Campaign Strategy",
    category: "Digital Marketing",
    description: "Development and execution of a comprehensive social media campaign strategy for a product launch. The project included content creation, audience targeting, engagement strategies, and performance analytics to ensure maximum reach and conversion across multiple social platforms.",
    client: "Marketing Solutions Group",
    completion: "May 2024",
    mainImage: "/images/The Summer.png",
    galleryImages: [
      "/images/The Summer.png",
      "/images/Tavel.png",
     "/images/club party.png",
     "/images/Cop.png",
     
    ],
    videoId: "9VQuZUa2H3o", // Example YouTube video ID
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectsData[projectId as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen bg-dark flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-xl text-gray-400 mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Link to="/portfolio" className="text-brand-red hover:underline">
          Return to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-dark-800 to-dark">
          <div className="container mx-auto px-4 py-20">
            <Link to="/portfolio" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <span className="text-brand-red uppercase tracking-wider text-sm">{project.category}</span>
                <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">{project.title}</h1>
                <p className="text-gray-400 leading-relaxed mb-8">{project.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <h3 className="text-sm text-gray-500 uppercase">Client</h3>
                    <p className="text-white">{project.client}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500 uppercase">Completed</h3>
                    <p className="text-white">{project.completion}</p>
                  </div>
                </div>
                <Button 
                  className="bg-brand-red hover:bg-brand-red/80" 
                  size="lg"
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${project.videoId}`, '_blank')}
                >
                  <Youtube className="mr-2 h-5 w-5" />
                  Watch Project Video
                </Button>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={project.mainImage} 
                  alt={project.title}
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-dark-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.galleryImages.map((image, index) => (
                <Card key={index} className="bg-dark-200 border-none overflow-hidden">
                  <CardContent className="p-0">
                    <img 
                      src={image} 
                      alt={`Project gallery image ${index + 1}`}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* YouTube Video Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Project Video</h2>
            <div className="aspect-video w-full max-w-4xl mx-auto bg-dark-200 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${project.videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ProjectDetail;
