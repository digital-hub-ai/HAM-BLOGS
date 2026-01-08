import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";

// Define TypeScript interfaces
interface BlogPost {
  id: string;
  type: string;
  title: string;
  summary: string;
  date: string;
  author?: string;
  tools_mentioned?: string[];
}

export default function Home() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [liveCounter, setLiveCounter] = useState(0);
  const [hoveredTime, setHoveredTime] = useState(false);
  
  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Update cosmic counter
  useEffect(() => {
    const counterTimer = setInterval(() => {
      setLiveCounter(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 2000);
    
    return () => clearInterval(counterTimer);
  }, []);
  
  // Update time for Temporal Nexus
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  // Load blog posts from data file
  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        // Since we're converting to a blog platform, we'll simulate blog posts
        const mockBlogPosts: BlogPost[] = [
          {
            id: "1",
            type: "article",
            title: "The Future of AI in 2025: Trends to Watch",
            summary: "Exploring the major trends that will shape the AI landscape in the coming year.",
            date: "2024-01-15",
            author: "Jane Smith",
            tools_mentioned: ["GPT-5", "Claude 3.5", "Gemini 2.0"]
          },
          {
            id: "2",
            type: "tutorial",
            title: "Getting Started with Large Language Models",
            summary: "A beginner's guide to understanding and implementing LLMs in your projects.",
            date: "2024-01-12",
            author: "John Doe",
            tools_mentioned: ["OpenAI", "Anthropic", "Hugging Face"]
          },
          {
            id: "3",
            type: "news",
            title: "New Breakthrough in Computer Vision",
            summary: "Researchers achieve new milestones in image recognition and processing.",
            date: "2024-01-10",
            author: "Sarah Johnson",
            tools_mentioned: ["Stable Diffusion", "Midjourney", "DALL-E"]
          },
          {
            id: "4",
            type: "opinion",
            title: "Ethical Considerations in AI Development",
            summary: "Examining the moral implications of rapidly advancing AI technologies.",
            date: "2024-01-08",
            author: "Michael Chen",
            tools_mentioned: ["Ethical AI Framework", "AI Governance"]
          },
          {
            id: "5",
            type: "review",
            title: "Comparing Top AI Coding Assistants",
            summary: "Detailed analysis of the most popular AI tools for developers.",
            date: "2024-01-05",
            author: "Alex Thompson",
            tools_mentioned: ["GitHub Copilot", "Amazon CodeWhisperer", "Tabnine"]
          },
          {
            id: "6",
            type: "research",
            title: "Advancements in Natural Language Processing",
            summary: "Latest developments in NLP and their practical applications.",
            date: "2024-01-03",
            author: "Emma Wilson",
            tools_mentioned: ["BERT", "RoBERTa", "T5"]
          }
        ];
        
        setBlogPosts(mockBlogPosts);
        setFilteredPosts(mockBlogPosts);
      } catch (error) {
        console.error("Error loading blog posts:", error);
      }
    };

    loadBlogPosts();
  }, []);

  // Filter blog posts based on search
  useEffect(() => {
    let result = blogPosts;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.summary.toLowerCase().includes(query) ||
        (post.author && post.author.toLowerCase().includes(query))
      );
    }

    setFilteredPosts(result);
  }, [searchQuery, blogPosts]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden">
      <Head>
        <title>CHRONOSPHERE: The Cosmic Blogging Universe</title>
        <meta name="description" content="Navigate the infinite galaxy of human thought where every idea is a star." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="cosmic blog, knowledge galaxy, infinite wisdom, temporal thoughts, quantum articles" />
        <meta name="author" content="CHRONOSPHERE Universe" />
        <link rel="canonical" href="https://chronosphere.com" />
      </Head>
      
      {/* Professional Header Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-blue-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                World Blogging
              </div>
            </div>
            
            {/* Live Time Display */}
            <div className="flex items-center space-x-6">
              <div className="hidden md:block text-blue-200 text-sm font-medium">
                {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </div>
              
              {/* Full Navigation - visible on all screen sizes */}
              <div className="flex items-center space-x-4 md:space-x-8">
                <Link href="/" className="text-blue-200 hover:text-white px-2 py-1 md:px-3 md:py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Home
                </Link>
                <Link href="/blog" className="text-blue-200 hover:text-white px-2 py-1 md:px-3 md:py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Blog
                </Link>
                <Link href="/about" className="text-blue-200 hover:text-white px-2 py-1 md:px-3 md:py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  About
                </Link>
                <Link href="/services" className="text-blue-200 hover:text-white px-2 py-1 md:px-3 md:py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16"></div> {/* Space for fixed navbar */}
      
      {/* ⚡ THE TEMPORAL NEXUS - World's Most Premium Live Element */}
      <div className="fixed top-24 right-6 z-50">
        <div 
          className={`w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/20 shadow-2xl shadow-cyan-500/20 transition-all duration-500 ${hoveredTime ? 'scale-110 shadow-2xl shadow-purple-500/40' : 'scale-100'}`}
          onMouseEnter={() => setHoveredTime(true)}
          onMouseLeave={() => setHoveredTime(false)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Outer ring: Hours */}
            <div className="absolute w-full h-full rounded-full border border-cyan-400/30 animate-spin" style={{ animationDuration: '43200s' /* 12 hours */ }}></div>
            
            {/* Middle ring: Minutes */}
            <div className="absolute w-24 h-24 rounded-full border border-purple-400/30 animate-spin" style={{ animationDuration: '3600s' /* 60 minutes */ }}></div>
            
            {/* Inner core: Seconds */}
            <div className="absolute w-16 h-16 rounded-full border border-pink-400/30 animate-spin" style={{ animationDuration: '60s' /* 60 seconds */ }}></div>
            
            {/* Central time display */}
            <div className="relative z-10 text-center">
              <div className="text-lg font-bold text-transparent bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text">
                {currentTime.getHours().toString().padStart(2, '0')}
              </div>
              <div className="text-xs text-cyan-200">
                {currentTime.getMinutes().toString().padStart(2, '0')}
              </div>
            </div>
            
            {/* Chrono Heart - Pulsing center */}
            <div className="absolute w-4 h-4 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        {/* Temporal Display */}
        <div className="mt-4 text-right">
          <div className="text-xs text-cyan-200 font-light">
            {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'})}
          </div>
          <div className="text-xs text-purple-200">
            {currentTime.toLocaleDateString([], {weekday: 'short', month: 'short', day: 'numeric'})}
          </div>
        </div>
      </div>
      
      {/* Cosmic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Central Galaxy Core */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -mt-[300px] -ml-[300px] rounded-full border border-blue-500/30 animate-spin" style={{ animationDuration: '120s' }}></div>
        
        {/* Orbiting Nebulas */}
        <div className="absolute top-1/3 left-1/4 w-[200px] h-[200px] rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-2xl animate-pulse"></div>
        
        {/* Starfield */}
        {[...Array(300)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          ></div>
        ))}
        
        {/* Temporal Rings */}
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -mt-[350px] -ml-[350px] rounded-full border border-blue-400/20 animate-spin" style={{ animationDuration: '90s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -mt-[250px] -ml-[250px] rounded-full border border-purple-400/20 animate-spin" style={{ animationDuration: '60s' }}></div>
        
        {/* Additional Orbitals */}
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -mt-[450px] -ml-[450px] rounded-full border border-purple-400/15 animate-spin" style={{ animationDuration: '150s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[1100px] h-[1100px] -mt-[550px] -ml-[550px] rounded-full border border-pink-400/10 animate-spin" style={{ animationDuration: '180s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -mt-[150px] -ml-[150px] rounded-full border border-blue-400/25 animate-spin" style={{ animationDuration: '45s' }}></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/6 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-lg animate-bounce" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/3 right-1/5 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-lg animate-bounce" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/4 w-10 h-10 rounded-full bg-gradient-to-r from-pink-500/30 to-blue-500/30 blur-lg animate-bounce" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-14 h-14 rounded-full bg-gradient-to-r from-blue-400/30 to-pink-400/30 blur-lg animate-bounce" style={{ animationDuration: '9s', animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        {/* Cosmic Portal Section */}
        <section className="text-center py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
          </div>
          
          {/* THE LUMINA CORE - Living Light Crystal */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <div className="lumina-crystal relative w-48 h-48 md:w-60 md:h-60">
              {/* Crystal Core */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-blue-400/30 animate-spin" style={{ animationDuration: '20s' }}></div>
              
              {/* Inner Crystal Structure */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-300/30 via-blue-400/20 to-purple-400/30 backdrop-blur-sm border border-cyan-300/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
              
              {/* Heartlight - Central Light Source */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 animate-pulse" style={{ animationDuration: '2s' }}></div>
              
              {/* Light Beams */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-64 bg-gradient-to-t from-cyan-400/50 to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-64 bg-gradient-to-b from-purple-400/50 to-transparent"></div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 w-64 bg-gradient-to-l from-pink-400/50 to-transparent"></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-1 w-64 bg-gradient-to-r from-blue-400/50 to-transparent"></div>
              
              {/* Orbiting Light Particles */}
              <div className="absolute top-1/2 left-1/2 w-80 h-80">
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30) * (Math.PI / 180);
                  const x = 140 * Math.cos(angle);
                  const y = 140 * Math.sin(angle);
                  return (
                    <div 
                      key={i}
                      className="absolute w-3 h-3 rounded-full bg-cyan-300 animate-pulse"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`
                      }}
                    ></div>
                  );
                })}
              </div>
              
              <div className="absolute top-1/2 left-1/2 w-64 h-64">
                {[...Array(8)].map((_, i) => {
                  const angle = (i * 45) * (Math.PI / 180);
                  const x = 110 * Math.cos(angle);
                  const y = 110 * Math.sin(angle);
                  return (
                    <div 
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-purple-300 animate-pulse"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`
                      }}
                    ></div>
                  );
                })}
              </div>
              
              <div className="absolute top-1/2 left-1/2 w-48 h-48">
                {[...Array(6)].map((_, i) => {
                  const angle = (i * 60) * (Math.PI / 180);
                  const x = 80 * Math.cos(angle);
                  const y = 80 * Math.sin(angle);
                  return (
                    <div 
                      key={i}
                      className="absolute w-1.5 h-1.5 rounded-full bg-pink-300 animate-pulse"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`
                      }}
                    ></div>
                  );
                })}
              </div>
              
              {/* Ambient Glow */}
              <div className="absolute -inset-12 rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
            </div>
          </div>
          
          <div className="mb-10">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 rounded-full text-2xl font-bold shadow-2xl">
              THE INFINITE KNOWLEDGE COSMOS
            </div>
          </div>
          
          <h1 className="text-8xl md:text-10xl font-black mb-8 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent leading-tight">
            CHRONOSPHERE: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">ETERNAL</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">CONSCIOUSNESS</span> NEXUS
          </h1>
          
          <p className="text-3xl md:text-4xl text-blue-100 max-w-4xl mx-auto mb-16 leading-relaxed">
            Traverse the boundless cosmos of thought where knowledge entities orbit in eternal dance across space and time.
          </p>
          
          <div className="flex flex-wrap justify-center gap-12 text-blue-200 mb-16">
            <div className="flex items-center">
              <span className="text-4xl font-bold text-white">∞</span>
              <span className="ml-4 text-xl">Stellar Insights</span>
            </div>
            <div className="flex items-center">
              <span className="text-4xl font-bold text-white">∞</span>
              <span className="ml-4 text-xl">Temporal Sages</span>
            </div>
            <div className="flex items-center">
              <span className="text-4xl font-bold text-white">∞</span>
              <span className="ml-4 text-xl">Quantum Connections</span>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <svg className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-16 pr-6 py-6 border border-blue-500/50 rounded-2xl bg-blue-900/50 text-white placeholder-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:border-blue-400 shadow-2xl text-xl backdrop-blur-sm"
              placeholder="Navigate the cosmic knowledge expanse..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </section>

        {/* Cosmic Time Portal - Ultra Premium Live Time Display */}
        <section className="py-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-indigo-900/40 backdrop-blur-xl border border-blue-400/50 rounded-2xl shadow-2xl shadow-blue-500/20">
              <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text">
                {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'})}
              </div>
              <div className="ml-4 w-1 h-12 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
              <div className="ml-4 text-xl text-blue-200 font-light">
                {currentTime.toLocaleDateString([], {weekday: 'long', month: 'long', day: 'numeric'})}
              </div>
            </div>
          </div>
          
          {/* Live Cosmic Counter */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-900/40 via-blue-900/40 to-cyan-900/40 backdrop-blur-xl border border-cyan-400/50 rounded-xl shadow-xl shadow-cyan-500/10">
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text">
                {liveCounter.toLocaleString()}
              </div>
              <div className="ml-3 text-lg text-cyan-200 font-medium">
                Cosmic Events Processed
              </div>
            </div>
          </div>
          
          {/* Live Visitor Statistics */}
          <div className="text-center mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-violet-900/30 to-purple-900/30 backdrop-blur-xl border border-violet-400/30 rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text">
                  {Math.floor(liveCounter / 100).toLocaleString()}
                </div>
                <div className="text-sm text-violet-200 mt-1">Active Explorers</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 backdrop-blur-xl border border-emerald-400/30 rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text">
                  {(liveCounter * 12).toLocaleString()}
                </div>
                <div className="text-sm text-emerald-200 mt-1">Knowledge Galaxies Visited</div>
              </div>
              <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 backdrop-blur-xl border border-amber-400/30 rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text">
                  {(liveCounter * 3).toLocaleString()}
                </div>
                <div className="text-sm text-amber-200 mt-1">Cosmic Insights Discovered</div>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm border border-blue-400/50 text-blue-200 rounded-full text-2xl font-semibold shadow-lg">
              NAVIGATE THE KNOWLEDGE GALAXY
            </div>
            <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-6">
              Stellar Navigation
            </h2>
            <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
              Chart your course through the infinite expanse of cosmic knowledge
            </p>
          </div>
        </section>
        
        <section className="py-20">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gradient-to-br from-blue-800/30 to-purple-800/30 backdrop-blur-sm rounded-3xl p-10 border border-blue-400/30 shadow-2xl">
              <div className="text-center">
                <div className="text-6xl mb-6">🌌</div>
                <h3 className="text-3xl font-bold text-white mb-4">Temporal Navigation</h3>
                <p className="text-blue-100 text-lg mb-6">Travel through time to explore how ideas evolved across centuries</p>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg">
                  Enter Timeline
                </button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-3xl p-10 border border-purple-400/30 shadow-2xl">
              <div className="text-center">
                <div className="text-6xl mb-6">🔮</div>
                <h3 className="text-3xl font-bold text-white mb-4">Quantum Discovery</h3>
                <p className="text-purple-100 text-lg mb-6">Uncover hidden connections between ideas across space and time</p>
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg">
                  Explore Connections
                </button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-800/30 to-blue-800/30 backdrop-blur-sm rounded-3xl p-10 border border-pink-400/30 shadow-2xl">
              <div className="text-center">
                <div className="text-6xl mb-6">🌟</div>
                <h3 className="text-3xl font-bold text-white mb-4">Consciousness Nexus</h3>
                <p className="text-pink-100 text-lg mb-6">Connect with the collective wisdom of cosmic contributors</p>
                <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-blue-600 text-white rounded-full font-bold hover:from-pink-500 hover:to-blue-500 transition-all duration-300 shadow-lg">
                  Join Collective
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-6">
                Voices from the Cosmos
              </h2>
              <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
                What our cosmic contributors and knowledge explorers say
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-800/30 to-blue-900/30 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/30 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl mr-4">
                    A
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">Alex Rivera</div>
                    <div className="text-blue-300">Quantum Scholar</div>
                  </div>
                </div>
                <p className="text-blue-100 text-lg italic">"CHRONOSPHERE transformed how I consume knowledge. The temporal navigation feature helped me understand the evolution of ideas across centuries."</p>
                <div className="flex text-yellow-400 mt-4">
                  ★★★★★
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl mr-4">
                    S
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">Sophia Chen</div>
                    <div className="text-purple-300">Consciousness Explorer</div>
                  </div>
                </div>
                <p className="text-purple-100 text-lg italic">"The quantum discovery algorithms unveiled connections between concepts I never knew existed. My research has accelerated tenfold."</p>
                <div className="flex text-yellow-400 mt-4">
                  ★★★★★
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-pink-800/30 to-blue-800/30 backdrop-blur-sm rounded-3xl p-8 border border-pink-400/30 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl mr-4">
                    M
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">Marcus Johnson</div>
                    <div className="text-pink-300">Temporal Sage</div>
                  </div>
                </div>
                <p className="text-pink-100 text-lg italic">"As someone who studies historical patterns, the ability to visualize idea evolution across time is revolutionary. Thank you, CHRONOSPHERE!"</p>
                <div className="flex text-yellow-400 mt-4">
                  ★★★★★
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-8">
                <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">∞</div>
                <h3 className="text-2xl font-bold text-white">Cosmic Ideas</h3>
                <p className="text-blue-200">Infinite knowledge bodies</p>
              </div>
              <div className="p-8">
                <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">∞</div>
                <h3 className="text-2xl font-bold text-white">Temporal Minds</h3>
                <p className="text-purple-200">Connected consciousness</p>
              </div>
              <div className="p-8">
                <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent mb-4">∞</div>
                <h3 className="text-2xl font-bold text-white">Quantum Paths</h3>
                <p className="text-pink-200">Discovery routes</p>
              </div>
              <div className="p-8">
                <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">∞</div>
                <h3 className="text-2xl font-bold text-white">Eternal Moments</h3>
                <p className="text-blue-200">Timeless insights</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Knowledge Collections */}
        <section className="py-20 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-6">
                Curated Knowledge Collections
              </h2>
              <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
                Expertly curated collections of the most influential ideas across time and space
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-800/30 to-blue-900/30 backdrop-blur-sm border border-blue-400/30 p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6">📚</div>
                  <h3 className="text-3xl font-bold text-white mb-4">Temporal Archives</h3>
                  <p className="text-blue-200 mb-6">Journey through the evolution of human thought from ancient philosophy to future predictions</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-blue-600/30 text-blue-200 rounded-full text-sm">History</span>
                    <span className="px-3 py-1 bg-blue-600/30 text-blue-200 rounded-full text-sm">Philosophy</span>
                    <span className="px-3 py-1 bg-blue-600/30 text-blue-200 rounded-full text-sm">Evolution</span>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg">
                    Explore Timeline
                  </button>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-800/30 to-purple-900/30 backdrop-blur-sm border border-purple-400/30 p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6">🧠</div>
                  <h3 className="text-3xl font-bold text-white mb-4">Consciousness Nexus</h3>
                  <p className="text-purple-200 mb-6">Interconnected insights from the world's leading thinkers and researchers</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full text-sm">Research</span>
                    <span className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full text-sm">Science</span>
                    <span className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full text-sm">Philosophy</span>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg">
                    Connect Insights
                  </button>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-800/30 to-blue-800/30 backdrop-blur-sm border border-pink-400/30 p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6">🔮</div>
                  <h3 className="text-3xl font-bold text-white mb-4">Future Horizons</h3>
                  <p className="text-pink-200 mb-6">Predictive insights and emerging trends shaping tomorrow's world</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-pink-600/30 text-pink-200 rounded-full text-sm">Trends</span>
                    <span className="px-3 py-1 bg-pink-600/30 text-pink-200 rounded-full text-sm">Prediction</span>
                    <span className="px-3 py-1 bg-pink-600/30 text-pink-200 rounded-full text-sm">Innovation</span>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-pink-600 to-blue-600 text-white rounded-full font-bold hover:from-pink-500 hover:to-blue-500 transition-all duration-300 shadow-lg">
                    View Horizons
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Expert Insights Hub */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-6">
                Expert Insights Hub
              </h2>
              <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
                Direct access to the minds of leading experts and thought leaders
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start p-6 bg-gradient-to-r from-blue-800/20 to-purple-800/20 backdrop-blur-sm rounded-2xl border border-blue-400/20">
                  <div className="text-4xl mr-6">💡</div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Weekly Expert Interviews</h4>
                    <p className="text-blue-100">Exclusive conversations with leading minds across disciplines</p>
                  </div>
                </div>
                
                <div className="flex items-start p-6 bg-gradient-to-r from-purple-800/20 to-pink-800/20 backdrop-blur-sm rounded-2xl border border-purple-400/20">
                  <div className="text-4xl mr-6">🔬</div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Research Synthesis</h4>
                    <p className="text-purple-100">Comprehensive analysis of cutting-edge research findings</p>
                  </div>
                </div>
                
                <div className="flex items-start p-6 bg-gradient-to-r from-pink-800/20 to-blue-800/20 backdrop-blur-sm rounded-2xl border border-pink-400/20">
                  <div className="text-4xl mr-6">🎯</div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Curated Resources</h4>
                    <p className="text-pink-100">Hand-picked resources by domain experts</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-blue-800/30 to-purple-900/30 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/30">
                  <h3 className="text-3xl font-bold text-white mb-6">Featured Expert Profile</h3>
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-2xl mr-6">
                      DR
                    </div>
                    <div>
                      <div className="font-bold text-white text-xl">Dr. Elena Rodriguez</div>
                      <div className="text-purple-300">Chief Knowledge Architect</div>
                    </div>
                  </div>
                  <p className="text-blue-100 mb-6">"CHRONOSPHERE has revolutionized how I approach interdisciplinary research. The quantum discovery feature revealed connections I never imagined between cognitive science and quantum mechanics."</p>
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Cosmic Knowledge Orbits */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -mt-[400px] -ml-[400px] rounded-full border border-blue-400/10 animate-spin" style={{ animationDuration: '120s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -mt-[300px] -ml-[300px] rounded-full border border-purple-400/10 animate-spin" style={{ animationDuration: '90s', animationDirection: 'reverse' }}></div>
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -mt-[200px] -ml-[200px] rounded-full border border-pink-400/10 animate-spin" style={{ animationDuration: '60s' }}></div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-6">
                Cosmic Knowledge Orbits
              </h2>
              <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
                Navigate through concentric circles of wisdom and understanding
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group relative bg-gradient-to-br from-blue-800/30 to-blue-900/30 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/30 shadow-2xl hover:scale-105 transition-all duration-500">
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6">🌌</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Quantum Insights</h3>
                  <p className="text-blue-200 mb-6">Deep analysis of quantum mechanics and consciousness</p>
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg">
                    Explore Orbit
                  </button>
                </div>
              </div>
              
              <div className="group relative bg-gradient-to-br from-purple-800/30 to-purple-900/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30 shadow-2xl hover:scale-105 transition-all duration-500">
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-spin" style={{ animationDuration: '25s' }}></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6">🔮</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Temporal Patterns</h3>
                  <p className="text-purple-200 mb-6">Historical trends and future predictions</p>
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg">
                    Explore Orbit
                  </button>
                </div>
              </div>
              
              <div className="group relative bg-gradient-to-br from-pink-800/30 to-blue-800/30 backdrop-blur-sm rounded-3xl p-8 border border-pink-400/30 shadow-2xl hover:scale-105 transition-all duration-500">
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-r from-pink-500/20 to-blue-500/20 animate-spin" style={{ animationDuration: '30s' }}></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6">🧠</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Consciousness Fields</h3>
                  <p className="text-pink-200 mb-6">Exploring the nature of awareness and perception</p>
                  <button className="px-6 py-3 bg-gradient-to-r from-pink-600 to-blue-600 text-white rounded-full font-bold hover:from-pink-500 hover:to-blue-500 transition-all duration-300 shadow-lg">
                    Explore Orbit
                  </button>
                </div>
              </div>
              
              <div className="group relative bg-gradient-to-br from-blue-700/30 to-indigo-700/30 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/30 shadow-2xl hover:scale-105 transition-all duration-500">
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-r from-blue-400/20 to-indigo-500/20 animate-spin" style={{ animationDuration: '35s' }}></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6">🚀</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Innovation Paths</h3>
                  <p className="text-blue-200 mb-6">Cutting-edge developments and breakthroughs</p>
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-bold hover:from-blue-400 hover:to-indigo-500 transition-all duration-300 shadow-lg">
                    Explore Orbit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Cosmic Knowledge Constellation */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            {/* Animated constellation background */}
            <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-blue-400 animate-ping" style={{ animationDuration: '4s' }}></div>
            <div className="absolute top-1/3 left-2/3 w-6 h-6 rounded-full bg-purple-400 animate-ping" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
            <div className="absolute top-2/3 left-1/3 w-5 h-5 rounded-full bg-pink-400 animate-ping" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-7 h-7 rounded-full bg-blue-500 animate-ping" style={{ animationDuration: '7s', animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/5 left-3/4 w-4 h-4 rounded-full bg-purple-500 animate-ping" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}></div>
            
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
              <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="url(#gradient1)" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="50%" y1="50%" x2="66%" y2="33%" stroke="url(#gradient2)" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="33%" y1="66%" x2="50%" y2="50%" stroke="url(#gradient3)" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="75%" y1="20%" x2="50%" y2="50%" stroke="url(#gradient4)" strokeWidth="1" strokeOpacity="0.3" />
              
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-6">
                Cosmic Knowledge Constellation
              </h2>
              <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
                Connect the dots of human wisdom across time and space
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group relative bg-gradient-to-br from-blue-800/40 to-blue-900/40 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/40 shadow-2xl hover:shadow-blue-500/20 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">Stellar Wisdom</h3>
                  <p className="text-blue-200 mb-6 text-center">Timeless insights from the greatest minds in history</p>
                  <div className="h-2 bg-blue-700/30 rounded-full mb-4">
                    <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-4/5"></div>
                  </div>
                  <div className="text-center text-blue-300 text-sm">98% Illumination</div>
                </div>
              </div>
              
              <div className="group relative bg-gradient-to-br from-purple-800/40 to-purple-900/40 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/40 shadow-2xl hover:shadow-purple-500/20 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl">🔮</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">Quantum Insights</h3>
                  <p className="text-purple-200 mb-6 text-center">Future predictions based on current trends</p>
                  <div className="h-2 bg-purple-700/30 rounded-full mb-4">
                    <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-3/5"></div>
                  </div>
                  <div className="text-center text-purple-300 text-sm">87% Probability</div>
                </div>
              </div>
              
              <div className="group relative bg-gradient-to-br from-pink-800/40 to-blue-800/40 backdrop-blur-sm rounded-3xl p-8 border border-pink-400/40 shadow-2xl hover:shadow-pink-500/20 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500/30 to-blue-500/30 flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl">🌌</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">Galactic Patterns</h3>
                  <p className="text-pink-200 mb-6 text-center">Universal patterns that repeat across disciplines</p>
                  <div className="h-2 bg-pink-700/30 rounded-full mb-4">
                    <div className="h-2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full w-5/6"></div>
                  </div>
                  <div className="text-center text-pink-300 text-sm">92% Relevance</div>
                </div>
              </div>
              
              <div className="group relative bg-gradient-to-br from-blue-700/40 to-indigo-700/40 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/40 shadow-2xl hover:shadow-indigo-500/20 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400/30 to-indigo-500/30 flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">Innovation Matrix</h3>
                  <p className="text-blue-200 mb-6 text-center">Cutting-edge developments changing our world</p>
                  <div className="h-2 bg-blue-700/30 rounded-full mb-4">
                    <div className="h-2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full w-full"></div>
                  </div>
                  <div className="text-center text-blue-300 text-sm">100% Impact</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Quantum Wisdom Nexus */}
        <section className="py-20 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-6">
                Quantum Wisdom Nexus
              </h2>
              <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
                Where knowledge transcends traditional boundaries
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-spin" style={{ animationDuration: '60s' }}></div>
                <div className="absolute w-80 h-80 rounded-full border border-blue-400/30 animate-spin" style={{ animationDuration: '40s', animationDirection: 'reverse' }}></div>
                <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 animate-spin" style={{ animationDuration: '30s' }}></div>
              </div>
              
              <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-800/40 to-blue-900/40 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/40 shadow-2xl z-10">
                  <h3 className="text-3xl font-bold text-white mb-6 text-center">Synthesis Engine</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-blue-900/40 rounded-xl">
                      <span className="text-blue-200">Cross-Disciplinary Analysis</span>
                      <span className="text-blue-300 font-bold">9.8/10</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-blue-900/40 rounded-xl">
                      <span className="text-blue-200">Pattern Recognition</span>
                      <span className="text-blue-300 font-bold">9.6/10</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-blue-900/40 rounded-xl">
                      <span className="text-blue-200">Insight Generation</span>
                      <span className="text-blue-300 font-bold">9.9/10</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center z-10">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-6">⚛️</div>
                    <h3 className="text-3xl font-bold text-white mb-4">Quantum Processing</h3>
                    <p className="text-blue-200 mb-6">Advanced algorithms that think beyond conventional logic</p>
                    <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold">
                      Active
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-800/40 to-purple-900/40 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/40 shadow-2xl z-10">
                  <h3 className="text-3xl font-bold text-white mb-6 text-center">Wisdom Matrix</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-purple-900/40 rounded-xl">
                      <span className="text-purple-200">Temporal Analysis</span>
                      <span className="text-purple-300 font-bold">9.7/10</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-purple-900/40 rounded-xl">
                      <span className="text-purple-200">Contextual Understanding</span>
                      <span className="text-purple-300 font-bold">9.5/10</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-purple-900/40 rounded-xl">
                      <span className="text-purple-200">Predictive Modeling</span>
                      <span className="text-purple-300 font-bold">9.8/10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* The Infinity Gallery - Content Ribbon */}
        <div className="relative mt-20">
          {/* Background gradient for the gallery */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20 -z-10"></div>
          
          {/* Museum of AI - Premium Tool Showcase */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 rounded-full text-xl font-semibold mb-6">
                  ✨ PREMIUM SPOTLIGHT
                </div>
                <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-6">
                  The Museum of AI Excellence
                </h2>
                <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
                  Curated tools of extraordinary caliber, presented with uncompromising beauty
                </p>
              </div>
              
              <div className="space-y-16">
                {/* Centerpiece Exhibit */}
                <div className="group relative overflow-hidden bg-gradient-to-br from-blue-800/40 to-blue-900/40 backdrop-blur-sm rounded-3xl p-12 border border-blue-400/40 shadow-2xl hover:shadow-blue-500/20 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 flex items-center justify-center">
                      <span className="text-6xl">🤖</span>
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-4">GPT-5: The New Intelligence</h3>
                    <p className="text-blue-200 text-xl mb-8">Experience the pinnacle of language AI with unprecedented capabilities</p>
                    <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg">
                      MUSEUM PIECE
                    </div>
                  </div>
                </div>
                
                {/* Side Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="group relative overflow-hidden bg-gradient-to-br from-purple-800/30 to-purple-900/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30 shadow-2xl hover:shadow-purple-500/20 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                      <span className="text-4xl">🧠</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Claude 3.5</h3>
                    <p className="text-purple-200 mb-4">Advanced reasoning and analysis capabilities</p>
                    <div className="h-2 bg-purple-700/30 rounded-full mb-4">
                      <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-5/6"></div>
                    </div>
                    <div className="text-center text-purple-300 text-sm">94% Excellence</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-pink-800/30 to-blue-800/30 backdrop-blur-sm rounded-3xl p-8 border border-pink-400/30 shadow-2xl hover:shadow-pink-500/20 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-500/30 to-blue-500/30 flex items-center justify-center">
                      <span className="text-4xl">👁️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Gemini 2.0</h3>
                    <p className="text-pink-200 mb-4">Multimodal intelligence and vision capabilities</p>
                    <div className="h-2 bg-pink-700/30 rounded-full mb-4">
                      <div className="h-2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full w-4/5"></div>
                    </div>
                    <div className="text-center text-pink-300 text-sm">89% Excellence</div>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-blue-700/30 to-indigo-700/30 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/30 shadow-2xl hover:shadow-indigo-500/20 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400/30 to-indigo-500/30 flex items-center justify-center">
                      <span className="text-4xl">🚀</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Perplexity Pro</h3>
                    <p className="text-blue-200 mb-4">Advanced research and real-time information</p>
                    <div className="h-2 bg-blue-700/30 rounded-full mb-4">
                      <div className="h-2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full w-full"></div>
                    </div>
                    <div className="text-center text-blue-300 text-sm">100% Excellence</div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* The Grand Comparison - Interactive Analysis */}
          <section className="py-20 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-sm mt-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 rounded-full text-xl font-semibold mb-6">
                  🔬 PRECISION ANALYSIS
                </div>
                <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-6">
                  The Grand Comparison: AI Titans
                </h2>
                <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
                  An interactive symphony of data and insight
                </p>
              </div>
              
              <div className="relative bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-3xl p-12 border border-blue-400/40">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 flex items-center justify-center">
                      <span className="text-5xl">🥇</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">GPT-5</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-blue-800/40 rounded-xl">
                        <span className="text-blue-200">Accuracy</span>
                        <span className="text-blue-300 font-bold">9.8/10</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-800/40 rounded-xl">
                        <span className="text-blue-200">Creativity</span>
                        <span className="text-blue-300 font-bold">9.7/10</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-800/40 rounded-xl">
                        <span className="text-blue-200">Speed</span>
                        <span className="text-blue-300 font-bold">9.5/10</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-8xl mb-6">⚖️</div>
                      <h3 className="text-3xl font-bold text-white mb-4">Versus</h3>
                      <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold">
                        COMPARE
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                      <span className="text-5xl">🥈</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Claude 3.5</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-purple-800/40 rounded-xl">
                        <span className="text-purple-200">Accuracy</span>
                        <span className="text-purple-300 font-bold">9.6/10</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-purple-800/40 rounded-xl">
                        <span className="text-purple-200">Creativity</span>
                        <span className="text-purple-300 font-bold">9.8/10</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-purple-800/40 rounded-xl">
                        <span className="text-purple-200">Speed</span>
                        <span className="text-purple-300 font-bold">9.3/10</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="text-center p-6 bg-blue-800/30 rounded-2xl">
                    <div className="text-4xl mb-4">🎯</div>
                    <h4 className="text-lg font-bold text-white mb-2">Accuracy</h4>
                    <div className="w-full bg-blue-700/30 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className="text-center p-6 bg-purple-800/30 rounded-2xl">
                    <div className="text-4xl mb-4">✨</div>
                    <h4 className="text-lg font-bold text-white mb-2">Creativity</h4>
                    <div className="w-full bg-purple-700/30 rounded-full h-3">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div className="text-center p-6 bg-pink-800/30 rounded-2xl">
                    <div className="text-4xl mb-4">⚡</div>
                    <h4 className="text-lg font-bold text-white mb-2">Speed</h4>
                    <div className="w-full bg-pink-700/30 rounded-full h-3">
                      <div className="bg-gradient-to-r from-pink-500 to-blue-500 h-3 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                  <div className="text-center p-6 bg-blue-700/30 rounded-2xl">
                    <div className="text-4xl mb-4">💰</div>
                    <h4 className="text-lg font-bold text-white mb-2">Cost</h4>
                    <div className="w-full bg-blue-600/30 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-400 to-indigo-500 h-3 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* The Library of Wisdom - Premium Content */}
          <section className="py-20 mt-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 rounded-full text-xl font-semibold mb-6">
                  📚 CURATED WISDOM
                </div>
                <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-6">
                  The Library of AI Excellence
                </h2>
                <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
                  Knowledge presented as art
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group relative bg-gradient-to-br from-blue-800/40 to-blue-900/40 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/40 shadow-2xl hover:shadow-blue-500/20 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-24 mx-auto mb-6 rounded-lg bg-gradient-to-r from-amber-800/30 to-amber-900/30 flex items-center justify-center border border-amber-700/30 relative transform -rotate-3">
                      <span className="text-2xl absolute top-2 left-2">📖</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 text-center">The Future of AI in 2025</h3>
                    <p className="text-blue-200 text-sm mb-4 text-center">Exploring the major trends that will shape the AI landscape in the coming year.</p>
                    <div className="flex justify-between text-xs text-blue-300">
                      <span>Jan 15, 2024</span>
                      <span>12 min read</span>
                    </div>
                  </div>
                </div>
                
                <div className="group relative bg-gradient-to-br from-purple-800/40 to-purple-900/40 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/40 shadow-2xl hover:shadow-purple-500/20 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-24 mx-auto mb-6 rounded-lg bg-gradient-to-r from-slate-400/30 to-slate-500/30 flex items-center justify-center border border-slate-400/30 relative transform rotate-3">
                      <span className="text-2xl absolute top-2 left-2">📖</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 text-center">Ethics in AI Development</h3>
                    <p className="text-purple-200 text-sm mb-4 text-center">Examining the moral implications of rapidly advancing AI technologies.</p>
                    <div className="flex justify-between text-xs text-purple-300">
                      <span>Jan 8, 2024</span>
                      <span>15 min read</span>
                    </div>
                  </div>
                </div>
                
                <div className="group relative bg-gradient-to-br from-pink-800/40 to-blue-800/40 backdrop-blur-sm rounded-3xl p-8 border border-pink-400/40 shadow-2xl hover:shadow-pink-500/20 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-24 mx-auto mb-6 rounded-lg bg-gradient-to-r from-yellow-500/30 to-yellow-600/30 flex items-center justify-center border border-yellow-500/30 relative transform -rotate-2">
                      <span className="text-2xl absolute top-2 left-2">📖</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 text-center">AI Coding Assistants</h3>
                    <p className="text-pink-200 text-sm mb-4 text-center">Detailed analysis of the most popular AI tools for developers.</p>
                    <div className="flex justify-between text-xs text-pink-300">
                      <span>Jan 5, 2024</span>
                      <span>10 min read</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center p-8 bg-gradient-to-r from-blue-800/30 to-purple-800/30 backdrop-blur-sm rounded-3xl border border-blue-400/40">
                <h3 className="text-3xl font-bold text-white mb-4">Featured Reading Nook</h3>
                <p className="text-blue-200 text-lg mb-6 max-w-2xl mx-auto">Immerse yourself in our most thought-provoking article about the intersection of artificial intelligence and human creativity.</p>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg text-lg">
                  Enter Reading Nook
                </button>
              </div>
            </div>
          </section>
          
          {/* The Starfield of Tools - Infinite Discovery */}
          <section className="py-20 bg-gradient-to-r from-indigo-900/30 to-blue-900/30 backdrop-blur-sm mt-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 rounded-full text-xl font-semibold mb-6">
                  🌌 INFINITE DISCOVERY
                </div>
                <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-6">
                  Navigate the AI Cosmos
                </h2>
                <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
                  Every star is a tool, every constellation a category
                </p>
              </div>
              
              <div className="relative bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-sm rounded-3xl p-12 border border-blue-400/40 h-[600px] overflow-hidden">
                <div className="absolute inset-0">
                  {/* Background stars */}
                  {[...Array(100)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute rounded-full bg-white"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 3}px`,
                        height: `${Math.random() * 3}px`,
                        opacity: Math.random() * 0.8 + 0.2
                      }}
                    ></div>
                  ))}
                  
                  {/* AI Tool Stars */}
                  <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
                  <div className="absolute top-1/3 left-2/3 w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse"></div>
                  <div className="absolute top-2/3 left-1/3 w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-blue-400 animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
                  <div className="absolute top-1/5 left-3/4 w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
                  
                  {/* Constellation lines */}
                  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                    <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="url(#constellationGradient)" strokeWidth="1" strokeOpacity="0.4" />
                    <line x1="50%" y1="50%" x2="66%" y2="33%" stroke="url(#constellationGradient)" strokeWidth="1" strokeOpacity="0.4" />
                    <line x1="33%" y1="66%" x2="50%" y2="50%" stroke="url(#constellationGradient)" strokeWidth="1" strokeOpacity="0.4" />
                    <line x1="75%" y1="20%" x2="50%" y2="50%" stroke="url(#constellationGradient)" strokeWidth="1" strokeOpacity="0.4" />
                    
                    <defs>
                      <linearGradient id="constellationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#60a5fa" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="text-8xl mb-6">✨</div>
                  <h3 className="text-3xl font-bold text-white mb-4">AI Universe Explorer</h3>
                  <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">Discover thousands of AI tools arranged in an interactive cosmic map. Each star represents a tool, with constellations showing related categories.</p>
                  <div className="flex justify-center space-x-4">
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg">
                      Explore Cosmos
                    </button>
                    <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg">
                      Tour Constellations
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        {/* Knowledge Timeline */}
        <section className="py-20 bg-gradient-to-r from-indigo-900/50 to-blue-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-6">
                Knowledge Through Time
              </h2>
              <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
                Witness the evolution of ideas across millennia
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2"></div>
              
              <div className="space-y-12">
                <div className="flex items-center justify-between">
                  <div className="flex-1 text-right pr-8">
                    <div className="inline-block p-4 bg-gradient-to-r from-blue-800/30 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-blue-400/30 max-w-md">
                      <div className="text-sm text-blue-300 mb-2">500 BCE - 500 CE</div>
                      <h3 className="text-xl font-bold text-white mb-2">Classical Foundations</h3>
                      <p className="text-blue-100">Birth of philosophical thought and early scientific inquiry</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900 transform -translate-x-1/2"></div>
                  <div className="flex-1"></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex-1"></div>
                  <div className="absolute left-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-gray-900 transform -translate-x-1/2"></div>
                  <div className="flex-1 pl-8">
                    <div className="inline-block p-4 bg-gradient-to-r from-purple-800/30 to-purple-900/30 backdrop-blur-sm rounded-2xl border border-purple-400/30 max-w-md">
                      <div className="text-sm text-purple-300 mb-2">1500 - 1800</div>
                      <h3 className="text-xl font-bold text-white mb-2">Scientific Revolution</h3>
                      <p className="text-purple-100">Radical shifts in understanding of nature and society</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex-1 text-right pr-8">
                    <div className="inline-block p-4 bg-gradient-to-r from-pink-800/30 to-blue-800/30 backdrop-blur-sm rounded-2xl border border-pink-400/30 max-w-md">
                      <div className="text-sm text-pink-300 mb-2">1900 - 2000</div>
                      <h3 className="text-xl font-bold text-white mb-2">Modern Breakthroughs</h3>
                      <p className="text-pink-100">Relativity, quantum mechanics, and digital revolution</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 w-6 h-6 bg-pink-500 rounded-full border-4 border-gray-900 transform -translate-x-1/2"></div>
                  <div className="flex-1"></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex-1"></div>
                  <div className="absolute left-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-gray-900 transform -translate-x-1/2"></div>
                  <div className="flex-1 pl-8">
                    <div className="inline-block p-4 bg-gradient-to-r from-blue-700/30 to-indigo-700/30 backdrop-blur-sm rounded-2xl border border-blue-400/30 max-w-md">
                      <div className="text-sm text-blue-300 mb-2">2020 - Present</div>
                      <h3 className="text-xl font-bold text-white mb-2">AI Renaissance</h3>
                      <p className="text-blue-100">Artificial intelligence and quantum computing era</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-900/50 to-blue-900/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-6">
              Join the Knowledge Constellation
            </h2>
            <p className="text-2xl text-blue-100 mb-10">
              Subscribe to receive cosmic insights, temporal discoveries, and quantum revelations directly to your consciousness
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your cosmic coordinates..." 
                className="flex-grow px-6 py-4 rounded-2xl bg-blue-900/50 text-white placeholder-blue-300 border border-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg text-lg">
                Beam Me Up
              </button>
            </div>
          </div>
        </section>
        
        {/* 🚀 THE INFINITY STREAM - Homepage Length & Engagement Multiplier */}
        <section className="relative py-20 overflow-hidden">
          {/* Background gradient for the stream */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent z-0"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                THE INFINITY STREAM
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Discover endless AI insights, tools, and innovations as you journey through our cosmic knowledge universe
              </p>
            </div>
            
            {/* Live Pulse Bar - Real-time activity ticker */}
            <div className="bg-gray-800/50 backdrop-blur-lg border border-blue-800/30 rounded-xl p-4 mb-12 sticky top-16 z-20">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-semibold text-sm">LIVE</span>
                  </div>
                  <div className="flex items-center space-x-4 overflow-hidden">
                    <span className={'text-blue-200 animate-marquee whitespace-nowrap'}>🔥 Midjourney v6.1 released • 124 new AI tools this week • GPT-5 rumors intensifying • AI funding: $2.4B this month</span>
                  </div>
                </div>
                <button className="text-blue-300 hover:text-white transition-colors text-sm font-medium">
                  View All Updates →
                </button>
              </div>
            </div>
            
            {/* Content Tributaries - Three streams of content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Neural Paths - Personalized */}
              <div className="bg-gray-800/40 backdrop-blur-lg border border-blue-800/30 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
                  Curated For Your Mind
                </h3>
                <p className="text-blue-200 mb-4">AI-powered recommendations based on your interests and browsing patterns</p>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-900/50 rounded-lg border border-blue-800/20 hover:border-blue-500/50 transition-colors cursor-pointer">
                    <h4 className="font-semibold text-white">Personalized Tool Spotlight</h4>
                    <p className="text-sm text-blue-200 mt-2">Based on your interest in image generation tools</p>
                  </div>
                  <div className="p-4 bg-gray-900/50 rounded-lg border border-blue-800/20 hover:border-blue-500/50 transition-colors cursor-pointer">
                    <h4 className="font-semibold text-white">Recommended Comparison</h4>
                    <p className="text-sm text-blue-200 mt-2">Top text-to-video tools for creators</p>
                  </div>
                </div>
              </div>
              
              {/* Cosmic Right Now - Trending */}
              <div className="bg-gray-800/40 backdrop-blur-lg border border-blue-800/30 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse"></span>
                  Cosmic Right Now
                </h3>
                <p className="text-blue-200 mb-4">Real-time trending topics and tools in the AI universe</p>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-900/50 rounded-lg border border-blue-800/20 hover:border-yellow-500/50 transition-colors cursor-pointer">
                    <h4 className="font-semibold text-white">Trending Tool</h4>
                    <p className="text-sm text-blue-200 mt-2">+300% growth this week</p>
                  </div>
                  <div className="p-4 bg-gray-900/50 rounded-lg border border-blue-800/20 hover:border-yellow-500/50 transition-colors cursor-pointer">
                    <h4 className="font-semibold text-white">Hot Discussion</h4>
                    <p className="text-sm text-blue-200 mt-2">AI ethics debate heating up</p>
                  </div>
                </div>
              </div>
              
              {/* Beautiful Accidents - Serendipity */}
              <div className="bg-gray-800/40 backdrop-blur-lg border border-blue-800/30 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-3 h-3 bg-pink-400 rounded-full mr-3 animate-pulse"></span>
                  Beautiful Accidents
                </h3>
                <p className="text-blue-200 mb-4">Unexpected discoveries and serendipitous finds</p>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-900/50 rounded-lg border border-blue-800/20 hover:border-pink-500/50 transition-colors cursor-pointer">
                    <h4 className="font-semibold text-white">Hidden Gem</h4>
                    <p className="text-sm text-blue-200 mt-2">Underrated tool with powerful features</p>
                  </div>
                  <div className="p-4 bg-gray-900/50 rounded-lg border border-blue-800/20 hover:border-pink-500/50 transition-colors cursor-pointer">
                    <h4 className="font-semibold text-white">Random Insight</h4>
                    <p className="text-sm text-blue-200 mt-2">Surprising connection between tools</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Interactive Modules - Every few scrolls */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center text-white mb-12">Interactive Experiences</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Comparison Matrix */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 cursor-pointer">
                  <h4 className="text-xl font-bold text-white mb-4">Compare AI Giants</h4>
                  <p className="text-blue-200 mb-4">Drag to compare GPT-4, Claude 3, Gemini, and Llama 3</p>
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    <div className="text-center p-2 bg-gray-900/50 rounded-lg border border-blue-800/20">GPT-4</div>
                    <div className="text-center p-2 bg-gray-900/50 rounded-lg border border-blue-800/20">Claude 3</div>
                    <div className="text-center p-2 bg-gray-900/50 rounded-lg border border-blue-800/20">Gemini</div>
                    <div className="text-center p-2 bg-gray-900/50 rounded-lg border border-blue-800/20">Llama 3</div>
                  </div>
                  <button className="w-full py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-medium hover:from-purple-700 hover:to-blue-700 transition-all">
                    Start Comparison
                  </button>
                </div>
                
                {/* Learning Path */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/30 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 cursor-pointer">
                  <h4 className="text-xl font-bold text-white mb-4">Your AI Learning Journey</h4>
                  <p className="text-blue-200 mb-4">3-minute interactive course</p>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-blue-200 mb-1">
                      <span>Beginner</span>
                      <span>Advanced</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-1/4"></div>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg text-white font-medium hover:from-blue-700 hover:to-teal-700 transition-all">
                    Continue Learning
                  </button>
                </div>
              </div>
            </div>
            
            {/* Infinite Stream Continuation */}
            <div className="text-center py-12">
              <div className="inline-flex items-center space-x-2 text-blue-300 mb-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>More discoveries loading...</span>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              </div>
              <div className="flex justify-center space-x-4">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Import and include Footer component */}
        {typeof window !== 'undefined' && (  
          <footer className="py-12 bg-gray-900 border-t border-blue-800/50">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">     
                CHRONOSPHERE
              </div>
              <p className="text-blue-200 mb-6">
                Navigating the infinite galaxy of human thought
              </p>
              <div className="text-sm text-blue-300">
                © {new Date().getFullYear()} CHRONOSPHERE Universe. All rights reserved. 
              </div>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
}
