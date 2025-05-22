
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// This will be replaced with actual API fetching in the future
const fetchDummyBlogPosts = () => {
  return [
    {
      id: "post-1",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800",
      date: "May 12, 2025",
      category: "Design Trends",
      title: "The Future of Visual Communication Design for 2025",
      excerpt: "Exploring the cutting-edge design trends that are shaping the future of visual communication and brand experiences.",
      link: "/blog/post-1"
    },
    {
      id: "post-2",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800",
      date: "May 5, 2025",
      category: "Motion Graphics, Animation",
      title: "Essential Motion Design Principles Every Designer Should Master",
      excerpt: "A deep dive into the fundamental principles that create compelling, engaging, and effective motion graphics.",
      link: "/blog/post-2"
    },
    {
      id: "post-3",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800",
      date: "April 28, 2025",
      category: "Marketing Design",
      title: "Crafting Visual Narratives That Convert",
      excerpt: "Learn how to create comprehensive visual marketing strategies that drive results and maximize brand impact.",
      link: "/blog/post-3"
    }
  ];
};

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // This would be replaced with an actual API call to fetch blog posts
    const fetchPosts = async () => {
      setLoading(true);
      try {
        // In the future, replace this with actual API call
        const data = fetchDummyBlogPosts();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []);

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Latest Industry Insights</h2>
        <p className="section-subtitle text-center">
          Stay updated with the latest trends, insights, and innovations in design, animation, and visual communication.
        </p>

        {loading ? (
          <div className="flex justify-center items-center h-60">
            <div className="animate-pulse text-brand-red text-xl">Loading latest articles...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg mb-5">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 p-4 flex gap-2 text-xs">
                    {post.category.split(',').map((cat, i) => (
                      <span key={i} className="bg-dark px-3 py-1 rounded">{cat.trim()}</span>
                    ))}
                  </div>
                </div>
                <div className="mb-3 text-gray-400 text-sm">{post.date}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-red transition-colors">
                  <Link to={post.link}>{post.title}</Link>
                </h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <Link 
                  to={post.link} 
                  className="text-white hover:text-brand-red transition-colors inline-flex items-center"
                >
                  Read Full Article
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-2" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link 
            to="/blog" 
            className="inline-block border-2 border-brand-red hover:bg-brand-red text-white px-8 py-3 rounded-md font-semibold transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
