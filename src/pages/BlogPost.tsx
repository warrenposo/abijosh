
import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

// Dummy blog post data - in a real app this would come from an API
const fetchPostById = (id: string) => {
  const dummyPosts = [
    {
      id: "post-1",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200",
      date: "May 12, 2025",
      category: "Design Trends",
      title: "The Future of Visual Communication Design for 2025",
      content: `
        <p class="mb-4">The design world is constantly evolving, with new trends emerging at a rapid pace. As we move further into 2025, several key visual communication design trends are taking center stage, reshaping how brands communicate with their audiences.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Immersive 3D Experiences</h2>
        <p class="mb-4">With advancements in technology, designers are now creating more immersive 3D experiences that blur the line between digital and physical. These experiences allow users to interact with brands in entirely new ways, creating memorable connections.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">AI-Generated Design Elements</h2>
        <p class="mb-4">Artificial intelligence is revolutionizing the design process. Designers are now leveraging AI tools to generate unique design elements, from illustrations to typography, that would have been time-consuming to create manually.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Sustainable Design Practices</h2>
        <p class="mb-4">As environmental consciousness grows, sustainable design practices are becoming more important. Designers are increasingly considering the environmental impact of their work, from digital carbon footprints to eco-friendly print materials.</p>
        
        <div class="my-8 border-l-4 border-brand-red pl-4 py-2 italic">
          "The future of design is not just about aesthetics, but about creating meaningful experiences that resonate with audiences while being mindful of our environmental impact." - Design Expert
        </div>

        <h2 class="text-2xl font-bold mt-8 mb-4">Related Industry Resources</h2>
        <p class="mb-4">Stay updated with the latest design trends and insights from these industry-leading sources:</p>
      `,
      relatedLinks: [
        {
          title: "AIGA Eye on Design",
          url: "https://eyeondesign.aiga.org/"
        },
        {
          title: "Smashing Magazine",
          url: "https://www.smashingmagazine.com/"
        },
        {
          title: "Awwwards",
          url: "https://www.awwwards.com/"
        }
      ]
    },
    {
      id: "post-2",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=1200",
      date: "May 5, 2025",
      category: "Motion Graphics, Animation",
      title: "Essential Motion Design Principles Every Designer Should Master",
      content: `
        <p class="mb-4">Motion design has become an essential skill in today's digital landscape. As screens become more prevalent in our daily lives, the ability to create engaging animated content is increasingly valuable.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Timing and Spacing</h2>
        <p class="mb-4">The cornerstone of effective animation, timing and spacing determine how quickly or slowly elements move and the distance between positions. Mastering these principles allows designers to create animations that feel natural and engaging.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Easing and Anticipation</h2>
        <p class="mb-4">Proper easing adds life to motion by mimicking real-world physics. Anticipation builds tension before a major action, preparing viewers for what's about to happen and making the subsequent motion more impactful.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Follow-through and Overlapping Action</h2>
        <p class="mb-4">These principles ensure that motion doesn't stop abruptly, with different parts of an object moving at different rates. This creates more fluid and realistic animations that feel less mechanical.</p>
        
        <div class="my-8 border-l-4 border-brand-red pl-4 py-2 italic">
          "Great motion design isn't just about making things move—it's about bringing them to life in a way that feels natural and purposeful." - Animation Expert
        </div>

        <h2 class="text-2xl font-bold mt-8 mb-4">Related Industry Resources</h2>
        <p class="mb-4">Enhance your motion design skills with these industry-leading resources:</p>
      `,
      relatedLinks: [
        {
          title: "School of Motion",
          url: "https://www.schoolofmotion.com/"
        },
        {
          title: "Motionographer",
          url: "https://motionographer.com/"
        },
        {
          title: "Motion Design School",
          url: "https://motiondesign.school/"
        }
      ]
    },
    {
      id: "post-3",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1200",
      date: "April 28, 2025",
      category: "Marketing Design",
      title: "Crafting Visual Narratives That Convert",
      content: `
        <p class="mb-4">In today's competitive digital landscape, effective visual marketing is essential for brand success. Creating visual narratives that not only captivate audiences but also drive conversions requires a strategic approach.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Understanding Your Audience</h2>
        <p class="mb-4">Effective visual narratives begin with a deep understanding of your target audience. Research their preferences, behaviors, and pain points to create visuals that resonate on a personal level.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Consistent Brand Storytelling</h2>
        <p class="mb-4">Maintain a consistent visual language across all touchpoints to reinforce your brand identity. This consistency helps build recognition and trust, key factors in driving conversions.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Data-Driven Design Decisions</h2>
        <p class="mb-4">Use analytics to inform your design choices. A/B testing different visual elements can provide valuable insights into what resonates with your audience and drives the desired actions.</p>
        
        <div class="my-8 border-l-4 border-brand-red pl-4 py-2 italic">
          "The most effective marketing designs tell a compelling story that aligns with your brand values while addressing the specific needs and desires of your audience." - Marketing Designer
        </div>

        <h2 class="text-2xl font-bold mt-8 mb-4">Related Industry Resources</h2>
        <p class="mb-4">Stay ahead with insights from these marketing design resources:</p>
      `,
      relatedLinks: [
        {
          title: "Creative Bloq",
          url: "https://www.creativebloq.com/"
        },
        {
          title: "Marketing Week",
          url: "https://www.marketingweek.com/"
        },
        {
          title: "AdWeek",
          url: "https://www.adweek.com/"
        }
      ]
    }
  ];
  
  return dummyPosts.find(post => post.id === id);
};

const BlogPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  
  useEffect(() => {
    if (postId) {
      const fetchedPost = fetchPostById(postId);
      if (fetchedPost) {
        setPost(fetchedPost);
      } else {
        setNotFound(true);
      }
      setLoading(false);
    }
  }, [postId]);
  
  if (notFound) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <main className="pt-20 pb-20">
        {loading ? (
          <div className="container mx-auto px-4 flex justify-center items-center h-60">
            <div className="animate-pulse text-brand-red text-xl">Loading article...</div>
          </div>
        ) : post ? (
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Hero section */}
              <div className="mb-8">
                <div className="mb-4 text-gray-400 text-sm">{post.date}</div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.category.split(',').map((cat: string, i: number) => (
                    <span key={i} className="bg-gray-800 px-3 py-1 rounded text-sm">{cat.trim()}</span>
                  ))}
                </div>
              </div>
              
              {/* Featured image */}
              <div className="relative w-full h-96 mb-10">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              {/* Article content */}
              <div 
                className="prose prose-lg prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Related links */}
              <Card className="mt-12 bg-gray-800 border-gray-700">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">External Resources</h3>
                  <div className="space-y-4">
                    {post.relatedLinks.map((link: {title: string, url: string}, idx: number) => (
                      <a 
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors"
                      >
                        <span className="font-medium">{link.title}</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : null}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogPost;
