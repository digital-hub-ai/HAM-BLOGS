import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import SEO from "../components/Seo/SEO";

export default function Categories() {
  const [loadedCards, setLoadedCards] = useState<number[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse follower effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Staggered card loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadedCards([0, 1, 2]);
    }, 100);

    const timer2 = setTimeout(() => {
      setLoadedCards([0, 1, 2, 3, 4, 5]);
    }, 300);

    const timer3 = setTimeout(() => {
      setLoadedCards([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    }, 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Category data
  const categories = [
    {
      id: "tech",
      title: "Technology",
      description: "Cutting-edge insights into AI, quantum computing, and digital innovation",
      icon: "💻",
      subcategories: 24,
      image: "/images/tech-bg.jpg"
    },
    {
      id: "travel",
      title: "Travel",
      description: "Exquisite destinations and luxury travel experiences worldwide",
      icon: "✈️",
      subcategories: 18,
      image: "/images/travel-bg.jpg"
    },
    {
      id: "lifestyle",
      title: "Lifestyle",
      description: "Sophisticated living, wellness, and premium lifestyle choices",
      icon: "✨",
      subcategories: 15,
      image: "/images/lifestyle-bg.jpg"
    },
    {
      id: "finance",
      title: "Finance",
      description: "Investment strategies and financial wisdom for wealth building",
      icon: "💰",
      subcategories: 12,
      image: "/images/finance-bg.jpg"
    },
    {
      id: "health",
      title: "Health",
      description: "Wellness, fitness, and longevity for optimal living",
      icon: "🌿",
      subcategories: 20,
      image: "/images/health-bg.jpg"
    },
    {
      id: "design",
      title: "Design",
      description: "Creative inspiration and design trends from the masters",
      icon: "🎨",
      subcategories: 16,
      image: "/images/design-bg.jpg"
    },
    {
      id: "food",
      title: "Food",
      description: "Gourmet cuisine and culinary arts from around the world",
      icon: "🍽️",
      subcategories: 14,
      image: "/images/food-bg.jpg"
    },
    {
      id: "entertainment",
      title: "Entertainment",
      description: "Movies, music, and cultural experiences worth your time",
      icon: "🎬",
      subcategories: 22,
      image: "/images/entertainment-bg.jpg"
    },
    {
      id: "business",
      title: "Business",
      description: "Leadership insights and entrepreneurial success stories",
      icon: "💼",
      subcategories: 19,
      image: "/images/business-bg.jpg"
    },
    {
      id: "science",
      title: "Science",
      description: "Breakthrough discoveries and scientific advancements",
      icon: "🔬",
      subcategories: 17,
      image: "/images/science-bg.jpg"
    },
    {
      id: "arts",
      title: "Arts",
      description: "Visual arts, literature, and creative expression",
      icon: "🎭",
      subcategories: 13,
      image: "/images/arts-bg.jpg"
    },
    {
      id: "wellness",
      title: "Wellness",
      description: "Mindfulness, mental health, and holistic wellbeing",
      icon: "🧘",
      subcategories: 11,
      image: "/images/wellness-bg.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden relative">
      <SEO
        title="Categories - HAM BLOGS Premium Content Hub"
        description="Navigate our world of premium content across 12 luxury categories featuring the finest insights and expertise."
      />
      
      {/* Mouse follower */}
      <div 
        className="fixed w-6 h-6 bg-yellow-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-opacity duration-100"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          opacity: 0.8
        }}
      />
      
      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
              CATEGORIES
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light tracking-wide">
            Navigate Our World of Premium Content
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full px-4">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`transform transition-all duration-700 ease-out ${
                loadedCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <Link href={`/category/${category.id}`}>
                <div className="group relative w-full h-96 rounded-2xl overflow-hidden cursor-pointer perspective-1000">
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/20 to-transparent rotate-12"></div>
                      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-yellow-500/10 rounded-full blur-3xl"></div>
                    </div>
                    
                    {/* Icon */}
                    <div className="absolute top-6 left-6 z-10 text-4xl transform transition-transform duration-500 group-hover:scale-125">
                      {category.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
                        {category.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-yellow-400 text-sm font-medium">
                          {category.subcategories} Subcategories
                        </span>
                        <div className="w-8 h-8 border-2 border-yellow-400 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-180">
                          <span className="text-yellow-400 text-xs">→</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Border glow effect */}
                    <div className="absolute inset-0 rounded-2xl border border-transparent transition-all duration-500 group-hover:border-yellow-400/50"></div>
                  </div>
                  
                  {/* Hover shimmer effect */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-yellow-300 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
    </div>
  );
}