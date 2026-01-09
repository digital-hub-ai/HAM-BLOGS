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
        title="Quantum Algorithms Explained: Deep Dive - HAM BLOGS"
        description="Understanding how quantum algorithms differ from classical counterparts"
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/category/tech/quantum" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-4">
            <span className="mr-2">←</span> Back to Quantum Computing Subcategory
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
            <span>January 7, 2026</span>
            <span>•</span>
            <span>9 min read</span>
            <span>•</span>
            <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">
              Quantum Computing
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Quantum Algorithms Explained: Deep Dive
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Understanding how quantum algorithms differ from classical counterparts
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
              src="https://images.unsplash.com/photo-1677442135801-7b0b0a0b0a0b?w=800&h=400&fit=crop" 
              alt="Quantum Algorithms" 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Quantum algorithms represent a fundamentally different approach to problem-solving compared to classical algorithms. By leveraging quantum mechanical phenomena such as superposition, entanglement, and interference, these algorithms can solve certain computational problems exponentially faster than their classical counterparts, opening new possibilities in cryptography, optimization, and simulation.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Foundations of Quantum Algorithms</h2>
            <p className="text-gray-300 mb-6">
              Quantum algorithms operate on quantum bits (qubits) that can exist in superposition states, representing multiple values simultaneously. This allows quantum computers to explore multiple solution paths in parallel, providing an inherent advantage for specific problem classes. The fundamental operations include quantum gates that manipulate qubit states while preserving quantum mechanical properties.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Deutsch-Jozsa Algorithm</h2>
            <p className="text-gray-300 mb-6">
              One of the earliest quantum algorithms, the Deutsch-Jozsa algorithm demonstrates quantum advantage by determining whether a function is constant or balanced with just a single function evaluation, compared to an exponential number of evaluations required by classical algorithms. This algorithm showcases the power of quantum superposition and interference.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Shor's Algorithm</h2>
            <p className="text-gray-300 mb-6">
              Perhaps the most famous quantum algorithm, Shor's algorithm can factor large integers exponentially faster than the best-known classical algorithms. This has profound implications for cryptography, particularly for RSA encryption, which relies on the computational difficulty of factoring large numbers. The algorithm combines quantum Fourier transforms with period-finding techniques.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Grover's Algorithm</h2>
            <p className="text-gray-300 mb-6">
              Grover's algorithm provides a quadratic speedup for searching unsorted databases, requiring only √N evaluations instead of N evaluations needed by classical algorithms. While not as dramatic as the exponential speedups of Shor's algorithm, Grover's algorithm has broader applications in optimization problems, constraint satisfaction, and database search operations.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Quantum Approximate Optimization Algorithm (QAOA)</h2>
            <p className="text-gray-300 mb-6">
              QAOA represents a class of quantum algorithms designed for optimization problems on near-term quantum devices. These algorithms alternate between two Hamiltonians to find approximate solutions to combinatorial optimization problems, bridging the gap between current noisy quantum devices and fault-tolerant quantum computers.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Quantum Machine Learning Algorithms</h2>
            <p className="text-gray-300 mb-6">
              Emerging quantum machine learning algorithms promise to accelerate certain aspects of machine learning, including principal component analysis, support vector machines, and neural network training. These algorithms leverage quantum linear algebra operations to achieve potential speedups for specific learning tasks.
            </p>
            
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-white mb-3">Algorithm Categories</h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Cryptographic algorithms (Shor's algorithm)
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Search algorithms (Grover's algorithm)
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Simulation algorithms (Quantum chemistry)
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Optimization algorithms (QAOA)
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Machine learning algorithms
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