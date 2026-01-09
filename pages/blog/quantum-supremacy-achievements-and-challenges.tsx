import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import SEO from '../../components/Seo/SEO';

export default function BlogPost() {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <SEO
        title="Quantum Supremacy: Achievements and Challenges - HAM BLOGS"
        description="Reviewing the milestones achieved in quantum supremacy and remaining challenges"
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/category/tech/quantum" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-4">
            <span className="mr-2">←</span> Back to Quantum Computing Subcategory
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
            <span>January 8, 2026</span>
            <span>•</span>
            <span>10 min read</span>
            <span>•</span>
            <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">
              Quantum Computing
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Quantum Supremacy: Achievements and Challenges
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Reviewing the milestones achieved in quantum supremacy and remaining challenges
          </p>
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                QC
              </div>
              <div>
                <p className="text-white font-medium">HAM BLOGS Editorial Team</p>
                <p className="text-gray-400 text-sm">Quantum Computing Experts</p>
              </div>
            </div>
            
            <button
              onClick={toggleBookmark}
              className={`p-3 rounded-full border transition-all duration-200 ${
                bookmarked 
                  ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400' 
                  : 'border-gray-600 bg-gray-800/50 text-gray-400 hover:border-yellow-500 hover:text-yellow-500'
              }`}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill={bookmarked ? 'currentColor' : 'none'} 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-8">
            <img 
              src="https://images.unsplash.com/photo-1677442135792-ebc09e6f5a7a?w=800&h=400&fit=crop" 
              alt="Quantum Supremacy" 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Quantum supremacy represents one of the most significant milestones in the development of quantum computing, marking the moment when quantum computers can solve problems that classical computers practically cannot. This achievement has profound implications for computing, cryptography, and our understanding of computational complexity.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">The Dawn of Quantum Supremacy</h2>
            <p className="text-gray-300 mb-6">
              The concept of quantum supremacy was first proposed by physicist John Preskill in 2012, describing the point at which quantum computers would outperform classical computers for specific tasks. In October 2019, Google announced they had achieved quantum supremacy with their Sycamore processor, completing a calculation in 200 seconds that would take the world's fastest supercomputer thousands of years.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Technical Achievements</h2>
            <p className="text-gray-300 mb-6">
              Google's achievement involved a 53-qubit quantum processor performing a random sampling task that demonstrated quantum advantage. The experiment showcased the potential of quantum systems to explore computational spaces inaccessible to classical computers, opening new possibilities for research in quantum chemistry, materials science, and optimization problems.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Verification and Validation</h2>
            <p className="text-gray-300 mb-6">
              Verifying quantum supremacy calculations presents unique challenges since classical computers cannot efficiently check the results of problems that quantum computers solve rapidly. Researchers rely on statistical verification methods and partial computations to validate the quantum advantage claims, ensuring the quantum system operates correctly and demonstrates genuine quantum behavior.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Current Challenges</h2>
            <p className="text-gray-300 mb-6">
              Despite achieving quantum supremacy, practical quantum computers face significant challenges including quantum decoherence, error rates, and the need for extensive error correction. Current quantum systems require extreme cooling and isolation, limiting their practical applications and requiring specialized infrastructure.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Future Implications</h2>
            <p className="text-gray-300 mb-6">
              Quantum supremacy opens the door to solving complex problems in cryptography, drug discovery, financial modeling, and artificial intelligence. As quantum error correction improves and quantum computers become more stable, we can expect practical applications that transform entire industries and scientific disciplines.
            </p>
            
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-white mb-3">Key Milestones</h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Google's Sycamore processor achieves quantum supremacy (2019)
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  IBM and other companies pursuing alternative approaches
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Ongoing improvements in qubit quality and quantity
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Development of quantum error correction methods
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Commercial applications beginning to emerge
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-700">
          <Link href="/category/tech/quantum" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium">
            Browse More Quantum Computing Articles
          </Link>
          <Link href="/blog" className="bg-white/10 text-white px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-all">
            View All Blog Posts
          </Link>
        </div>
      </div>
    </div>
  );
}