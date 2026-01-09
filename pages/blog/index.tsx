import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import SEO from "../../components/Seo/SEO";

export default function OmniverseLibrary() {
  const [hoveredReality, setHoveredReality] = useState<string | null>(null);
  
  // Define the 8 main blog categories (realities)
  const realities = [
    {
      id: "tech",
      title: "Quantum Codex",
      subtitle: "The Technology Universe",
      color: "#00f3ff",
      particleCount: 1200,
      description: "Explore the latest in AI, software development, and digital innovation"
    },
    {
      id: "travel",
      title: "Chrono-Wanderer's Atlas",
      subtitle: "The Travel Dimension",
      color: "#06d6a0",
      particleCount: 800,
      description: "Journey through destinations, cultures, and travel experiences"
    },
    {
      id: "business",
      title: "Corporate Consciousness",
      subtitle: "The Business Realm",
      color: "#ffd166",
      particleCount: 600,
      description: "Insights on entrepreneurship, marketing, and business strategies"
    },
    {
      id: "science",
      title: "Laboratory of Reality",
      subtitle: "The Science Dimension",
      color: "#ff6b6b",
      particleCount: 900,
      description: "Discover breakthroughs in physics, biology, and research"
    },
    {
      id: "lifestyle",
      title: "Life's Tapestry",
      subtitle: "The Lifestyle Universe",
      color: "#9d4edd",
      particleCount: 700,
      description: "Wellness, personal growth, and daily living tips"
    },
    {
      id: "gaming",
      title: "Digital Frontiers",
      subtitle: "The Gaming Cosmos",
      color: "#06d6a0",
      particleCount: 1000,
      description: "Reviews, guides, and insights on the gaming world"
    },
    {
      id: "health",
      title: "Wellness Matrix",
      subtitle: "The Health Dimension",
      color: "#06d6a0",
      particleCount: 850,
      description: "Physical and mental health, fitness, and wellness"
    },
    {
      id: "design",
      title: "Aesthetic Forge",
      subtitle: "The Design Cosmos",
      color: "#ff6b6b",
      particleCount: 1500,
      description: "Creative design, UI/UX, and visual arts"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden relative">
    <SEO
      title="HAM BLOGS - World's Largest Premium Blogging Platform"
      description="Explore the world's largest premium blogging platform featuring cutting-edge technology, AI insights, and expert knowledge."
    />

      {/* Cosmic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-400/20 animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 2}px`,
                height: `${Math.random() * 10 + 2}px`,
                animationDuration: `${Math.random() * 5 + 3}s`,
              }}
            ></div>
          ))}
        </div>
        
        {/* Central Galaxy Core */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -mt-[300px] -ml-[300px] rounded-full border border-blue-500/30 animate-spin" style={{ animationDuration: '120s' }}></div>
        
        {/* Orbiting Elements */}
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -mt-[200px] -ml-[200px] rounded-full border border-purple-500/20 animate-spin" style={{ animationDuration: '90s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] -mt-[100px] -ml-[100px] rounded-full border border-cyan-500/20 animate-spin" style={{ animationDuration: '60s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        {/* Header Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-blue-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0 flex items-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  World Blogging
                </div>
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
        </header>

        <div className="pt-16"></div> {/* Space for fixed navbar */}

        {/* THE OMNIVERSE LIBRARY - Grand Atrium */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Reality Greeter */}
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                THE OMNIVERSE LIBRARY
              </h1>
              <p className="text-2xl text-blue-200 max-w-3xl mx-auto mb-12">
                Welcome to the Library of Realities. Each shelf holds a universe of knowledge. Choose your reality.
              </p>
              
              {/* Floating Knowledge Particles */}
              <div className="relative inline-block">
                <div className="flex space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-bounce"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured Tech Blog Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Post 1 */}
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#00f3ff20', color: '#00f3ff', border: '1px solid #00f3ff50' }}>
                  AI & Machine Learning
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Revolutionary AI Breakthroughs in 2025</h3>
                <p className="text-blue-200 text-sm mb-4">Exploring the latest revolutionary AI breakthroughs that are shaping our future</p>
                <div className="flex justify-between items-center text-xs text-blue-300">
                  <span>2025-01-15</span>
                  <span>12 min read</span>
                </div>
                <div className="mt-4">
                  <Link href="/blog/tech/post-tech-1" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                    Read more →
                  </Link>
                </div>
              </div>
              
              {/* Post 2 */}
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#00f3ff20', color: '#00f3ff', border: '1px solid #00f3ff50' }}>
                  Web Development
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Web Development Trends 2025</h3>
                <p className="text-blue-200 text-sm mb-4">The next generation of digital experiences</p>
                <div className="flex justify-between items-center text-xs text-blue-300">
                  <span>2025-01-18</span>
                  <span>10 min read</span>
                </div>
                <div className="mt-4">
                  <Link href="/blog/tech/post-tech-2" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                    Read more →
                  </Link>
                </div>
              </div>
              
              {/* Post 3 */}
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#00f3ff20', color: '#00f3ff', border: '1px solid #00f3ff50' }}>
                  Quantum Computing
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Quantum Computing Applications 2025</h3>
                <p className="text-blue-200 text-sm mb-4">From theory to reality in quantum computing</p>
                <div className="flex justify-between items-center text-xs text-blue-300">
                  <span>2025-01-20</span>
                  <span>14 min read</span>
                </div>
                <div className="mt-4">
                  <Link href="/blog/tech/post-tech-3" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                    Read more →
                  </Link>
                </div>
              </div>
              
              {/* Post 4 */}
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#00f3ff20', color: '#00f3ff', border: '1px solid #00f3ff50' }}>
                  Blockchain & Web3
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Blockchain Evolution 2025</h3>
                <p className="text-blue-200 text-sm mb-4">Beyond cryptocurrency to real-world applications</p>
                <div className="flex justify-between items-center text-xs text-blue-300">
                  <span>2025-01-22</span>
                  <span>11 min read</span>
                </div>
                <div className="mt-4">
                  <Link href="/blog/tech/post-tech-4" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                    Read more →
                  </Link>
                </div>
              </div>
              
              {/* Post 5 */}
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#00f3ff20', color: '#00f3ff', border: '1px solid #00f3ff50' }}>
                  Cloud Computing
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Cloud Computing Revolution 2025</h3>
                <p className="text-blue-200 text-sm mb-4">The new era of distributed infrastructure</p>
                <div className="flex justify-between items-center text-xs text-blue-300">
                  <span>2025-01-25</span>
                  <span>9 min read</span>
                </div>
                <div className="mt-4">
                  <Link href="/blog/tech/post-tech-5" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                    Read more →
                  </Link>
                </div>
              </div>
              
              {/* Additional placeholder for more posts */}
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 opacity-80">
                <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#00f3ff20', color: '#00f3ff', border: '1px solid #00f3ff50' }}>
                  Coming Soon
                </div>
                <h3 className="text-xl font-bold text-white mb-3">More Tech Insights</h3>
                <p className="text-blue-200 text-sm mb-4">Stay tuned for additional cutting-edge technology articles</p>
                <div className="flex justify-between items-center text-xs text-blue-300">
                  <span>Coming Soon</span>
                  <span>N/A</span>
                </div>
              </div>
            </div>

            {/* Legacy Knowledge Archive */}
            <div className="mt-20">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Legacy Knowledge Archive</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-h-[1200px] overflow-y-auto p-4">
                {/* Legacy Post 1 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#06d6a020', color: '#06d6a0', border: '1px solid #06d6a050' }}>
                    AI & Business
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI Automation for Business: Complete Guide to Scaling Operations</h3>
                  <p className="text-blue-200 text-sm mb-4">Complete guide to implementing AI automation across business operations</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>15 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-automation-business" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 2 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#ff6b6b20', color: '#ff6b6b', border: '1px solid #ff6b6b50' }}>
                    AI & Biotechnology
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Biotechnology: Revolutionary Breakthroughs 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">How AI is accelerating biotech discoveries and medical innovations</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>12 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-biotechnology-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 3 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#ffd16620', color: '#ffd166', border: '1px solid #ffd16650' }}>
                    AI & Climate
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI Solutions for Climate Change: Global Impact 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">Using AI to tackle climate challenges and environmental sustainability</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>14 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-climate-change-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 4 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#00f3ff20', color: '#00f3ff', border: '1px solid #00f3ff50' }}>
                    AI & Aerospace
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Aerospace: Revolutionary Technologies 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">How AI is transforming aerospace engineering and space exploration</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>13 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-aerospace-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 5 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#9d4edd20', color: '#9d4edd', border: '1px solid #9d4edd50' }}>
                    AI & Agriculture
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Agriculture: Future Farming Technologies 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">Transforming agriculture with AI-powered farming solutions</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>11 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-agriculture-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 6 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#ff9e6d20', color: '#ff9e6d', border: '1px solid #ff9e6d50' }}>
                    AI & Anthropology
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Anthropology: Cultural Analysis 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">Using AI to understand human cultures and societies</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>10 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-anthropology-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 7 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#6a9eff20', color: '#6a9eff', border: '1px solid #6a9eff50' }}>
                    AI & Archaeology
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Archaeology: NextGen Discovery Methods 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">Advanced AI techniques for archaeological research</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>12 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-archaeology-nextgen-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 8 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#b76eff20', color: '#b76eff', border: '1px solid #b76eff50' }}>
                    AI & Automotive
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Automotive: Revolutionary Transportation 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">Transforming the automotive industry with AI</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>14 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-automotive-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 9 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#4dffb820', color: '#4dffb8', border: '1px solid #4dffb850' }}>
                    AI & Aviation
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Aviation: NextGen Flight Systems 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">Advanced AI applications in aviation technology</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>13 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-aviation-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 10 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#ff6d6d20', color: '#ff6d6d', border: '1px solid #ff6d6d50' }}>
                    AI & Banking
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Banking: Financial Innovation 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">How AI is revolutionizing the banking sector</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>12 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-banking-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 11 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#ffd16620', color: '#ffd166', border: '1px solid #ffd16650' }}>
                    AI & Business Analytics
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI Business Analytics: Complete Guide 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">Complete guide to AI-powered business analytics</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>16 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-business-analytics-guide" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 12 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#00f3ff20', color: '#00f3ff', border: '1px solid #00f3ff50' }}>
                    AI & Chip Technology
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI Chip Wars: Next Generation Processors 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">The battle for AI chip supremacy and next-gen processors</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>14 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-chip-wars-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 13 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#6a9eff20', color: '#6a9eff', border: '1px solid #6a9eff50' }}>
                    AI & Climate Science
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Climate Science: Advanced Environmental Modeling 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">Using AI to advance climate science and environmental research</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>13 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-climate-science-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 14 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#b76eff20', color: '#b76eff', border: '1px solid #b76eff50' }}>
                    AI & Coding
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI Coding Assistants: Revolutionary Development Tools 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">How AI coding assistants are transforming software development</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>11 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-coding-assistants-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 15 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#4dffb820', color: '#4dffb8', border: '1px solid #4dffb850' }}>
                    AI & Construction
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Construction: Future Building Technologies 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">Transforming construction with AI-powered building solutions</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>12 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-construction-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 16 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#ff6d6d20', color: '#ff6d6d', border: '1px solid #ff6d6d50' }}>
                    AI & Content Creation
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Content Creation: Revolutionary Tools 2024</h3>
                  <p className="text-blue-200 text-sm mb-4">Advanced AI tools transforming content creation</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>10 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-content-creation-2024" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 17 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#ffd16620', color: '#ffd166', border: '1px solid #ffd16650' }}>
                    AI & Customer Service
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Customer Service: NextGen Support Systems 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">Transforming customer service with AI support systems</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>11 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-customer-service-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 18 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#00f3ff20', color: '#00f3ff', border: '1px solid #00f3ff50' }}>
                    AI & Cybersecurity
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Cybersecurity: NextGen Defense Systems 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">Advanced AI cybersecurity defense systems</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>13 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-cybersecurity-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 19 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#6a9eff20', color: '#6a9eff', border: '1px solid #6a9eff50' }}>
                    AI & Data Science
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Data Science: Advanced Analytics 2024</h3>
                  <p className="text-blue-200 text-sm mb-4">Advanced AI applications in data science</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>12 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-data-science-2024" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 20 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#b76eff20', color: '#b76eff', border: '1px solid #b76eff50' }}>
                    AI & Defense
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Defense: Revolutionary Security Technologies 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">Advanced AI applications in defense technology</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>14 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-defense-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 21 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#4dffb820', color: '#4dffb8', border: '1px solid #4dffb850' }}>
                    AI & Design
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Design Tools: Creative Revolution 2024</h3>
                  <p className="text-blue-200 text-sm mb-4">How AI is revolutionizing design tools and creative processes</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>11 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-design-tools-2024" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 22 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#ff6d6d20', color: '#ff6d6d', border: '1px solid #ff6d6d50' }}>
                    AI & Development
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Development Tools: NextGen Solutions 2024</h3>
                  <p className="text-blue-200 text-sm mb-4">Advanced AI tools for software development</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>10 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-development-tools-2024" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 23 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#ffd16620', color: '#ffd166', border: '1px solid #ffd16650' }}>
                    AI & E-commerce
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in E-commerce: Revolutionary Shopping Experiences 2024</h3>
                  <p className="text-blue-200 text-sm mb-4">Transforming e-commerce with AI-powered shopping</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>12 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-ecommerce-2024" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 24 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#00f3ff20', color: '#00f3ff', border: '1px solid #00f3ff50' }}>
                    AI & Education
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Education: Future Learning Systems 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">Transforming education with AI-powered learning systems</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>13 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-education-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 25 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#6a9eff20', color: '#6a9eff', border: '1px solid #6a9eff50' }}>
                    AI & Energy
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Energy: Future Power Systems 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">Advanced AI applications in energy systems</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>14 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-energy-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 26 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#b76eff20', color: '#b76eff', border: '1px solid #b76eff50' }}>
                    AI & Entertainment
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Entertainment: NextGen Media Experiences 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">Transforming entertainment with AI-powered media</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>11 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-entertainment-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 27 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#4dffb820', color: '#4dffb8', border: '1px solid #4dffb850' }}>
                    AI & Environmental Science
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Environmental Science: Climate Solutions 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">Using AI to address environmental challenges</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>12 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-environmental-science-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 28 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#ff6d6d20', color: '#ff6d6d', border: '1px solid #ff6d6d50' }}>
                    AI & Ethics
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI Ethics: Future Frameworks 2024</h3>
                  <p className="text-blue-200 text-sm mb-4">Exploring ethical frameworks for AI development</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>13 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-ethics-2024" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 29 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#ffd16620', color: '#ffd166', border: '1px solid #ffd16650' }}>
                    AI & Fashion
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Fashion: Revolutionary Design Systems 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">Transforming fashion with AI-powered design</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>10 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-fashion-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 30 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#00f3ff20', color: '#00f3ff', border: '1px solid #00f3ff50' }}>
                    AI & Finance
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Finance: Revolutionary Trading Systems 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">Transforming finance with AI-powered trading</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>14 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-finance-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 31 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#6a9eff20', color: '#6a9eff', border: '1px solid #6a9eff50' }}>
                    AI & Food & Beverage
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Food & Beverage: Future Production Systems 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">Transforming food and beverage with AI</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>11 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-food-beverage-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 32 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#b76eff20', color: '#b76eff', border: '1px solid #b76eff50' }}>
                    AI & Forestry
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Forestry: Sustainable Management Systems 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">Using AI for sustainable forestry management</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>12 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-forestry-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 33 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#4dffb820', color: '#4dffb8', border: '1px solid #4dffb850' }}>
                    AI & Future Technologies
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI Future Technologies: Innovation Roadmap 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">Exploring the future of AI technologies</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>13 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-future-technologies-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 34 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#ff6d6d20', color: '#ff6d6d', border: '1px solid #ff6d6d50' }}>
                    AI & Gaming
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Gaming: NextGen Interactive Experiences 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">Transforming gaming with AI-powered interactions</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>10 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-gaming-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 35 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#ffd16620', color: '#ffd166', border: '1px solid #ffd16650' }}>
                    AI & Geology
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Geology: Advanced Earth Sciences 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">Using AI to advance geological research</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>14 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-geology-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
                
                {/* Legacy Post 36 */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: '#00f3ff20', color: '#00f3ff', border: '1px solid #00f3ff50' }}>
                    AI & Government
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI in Government: Digital Governance Systems 2025</h3>
                  <p className="text-blue-200 text-sm mb-4">Transforming government with AI-powered systems</p>
                  <div className="flex justify-between items-center text-xs text-blue-300">
                    <span>Legacy</span>
                    <span>12 min read</span>
                  </div>
                  <div className="mt-4">
                    <Link href="/legacy-blogs/ai-government-2025" className="text-sm font-medium text-blue-300 hover:text-white transition-colors">
                      Read more →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}