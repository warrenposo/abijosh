
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
    mainImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=800",
    ],
    videoId: "dQw4w9WgXcQ", // Example YouTube video ID
  },
  "project-2": {
    title: "Animated Promotional Campaign",
    category: "Motion Graphics",
    description: "A series of animated promotional videos for a product launch campaign. Using advanced motion graphics techniques to showcase product features and benefits in an engaging and visually appealing way. The campaign included social media content, website animations, and digital advertisements.",
    client: "Global Products Co.",
    completion: "January 2024",
    mainImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1626785774625-ddcdcc3d0a38?auto=format&fit=crop&w=800",
    ],
    videoId: "9bZkp7q19f0", // Example YouTube video ID
  },
  "project-3": {
    title: "Editorial Magazine Layout",
    category: "Print Design",
    description: "Complete editorial design for a premium lifestyle magazine, including layout design, typography selection, image curation, and graphics creation. The project focused on creating a visually stunning yet readable experience that effectively communicates the magazine's content while maintaining brand consistency.",
    client: "Lifestyle Publishers Ltd.",
    completion: "February 2024",
    mainImage: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1594061677657-bc15c5a32aca?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1574351850223-769639884f3d?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1623227866882-904f49c2962e?auto=format&fit=crop&w=800",
    ],
    videoId: "bTqVqk7FSmY", // Example YouTube video ID
  },
  "project-4": {
    title: "E-commerce Platform Redesign",
    category: "Web Development",
    description: "Complete redesign of an e-commerce platform to improve user experience, increase conversions, and modernize the visual language. The project involved user research, wireframing, prototyping, and implementation of a responsive design system that works seamlessly across all devices.",
    client: "Online Retail Solutions",
    completion: "April 2024",
    mainImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800",
    ],
    videoId: "LXb3EKWsInQ", // Example YouTube video ID
  },
  "project-5": {
    title: "Mobile Banking Application",
    category: "UI/UX Design",
    description: "Design of a mobile banking application focused on creating an intuitive and secure experience for users. The project included user research, information architecture, interaction design, and visual design to create a solution that makes complex financial transactions simple and accessible.",
    client: "FinTech Innovations",
    completion: "February 2024",
    mainImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800",
    ],
    videoId: "l3UjnxF_Gk4", // Example YouTube video ID
  },
  "project-6": {
    title: "Social Media Campaign Strategy",
    category: "Digital Marketing",
    description: "Development and execution of a comprehensive social media campaign strategy for a product launch. The project included content creation, audience targeting, engagement strategies, and performance analytics to ensure maximum reach and conversion across multiple social platforms.",
    client: "Marketing Solutions Group",
    completion: "May 2024",
    mainImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800",
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
