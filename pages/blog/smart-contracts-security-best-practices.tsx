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
        title="Smart Contracts: Security Best Practices - HAM BLOGS"
        description="Essential security considerations for developing smart contracts"
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/category/tech/blockchain" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-4">
            <span className="mr-2">←</span> Back to Blockchain Subcategory
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
            <span>January 7, 2026</span>
            <span>•</span>
            <span>10 min read</span>
            <span>•</span>
            <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">
              Blockchain
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Smart Contracts: Security Best Practices
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Essential security considerations for developing smart contracts
          </p>
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                BC
              </div>
              <div>
                <p className="text-white font-medium">HAM BLOGS Editorial Team</p>
                <p className="text-gray-400 text-sm">Blockchain & Cryptocurrency Experts</p>
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
              src="https://images.unsplash.com/photo-1677442135787-7c7c8c7c7c7c?w=800&h=400&fit=crop" 
              alt="Smart Contracts Security" 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Smart contracts, while revolutionary in their ability to execute automated agreements on blockchain networks, present unique security challenges that developers must carefully consider. The immutable nature of deployed contracts means that vulnerabilities can lead to significant financial losses and system failures, making security a paramount concern throughout the development lifecycle.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Common Smart Contract Vulnerabilities</h2>
            <p className="text-gray-300 mb-6">
              Smart contracts are susceptible to various types of attacks, including reentrancy attacks, integer overflow/underflow, gas optimization issues, and access control vulnerabilities. The DAO attack of 2016, which resulted in the loss of $60 million worth of Ether, highlighted the devastating consequences of reentrancy vulnerabilities and led to increased awareness of smart contract security.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Secure Development Practices</h2>
            <p className="text-gray-300 mb-6">
              Following established security patterns is crucial for smart contract development. This includes implementing the checks-effects-interactions pattern, using secure comparison operations, proper error handling, and ensuring that external calls are made safely. Developers should also follow the principle of least privilege, limiting access rights to only what is necessary for contract functionality.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Testing and Verification</h2>
            <p className="text-gray-300 mb-6">
              Comprehensive testing is essential for smart contract security. This includes unit testing, integration testing, and adversarial testing to identify potential attack vectors. Formal verification methods can mathematically prove the correctness of smart contracts, while fuzzing tools can automatically generate test cases to discover vulnerabilities.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Code Auditing and Reviews</h2>
            <p className="text-gray-300 mb-6">
              Professional code audits by experienced blockchain security experts are essential before deploying smart contracts with significant value at stake. Multiple independent audits, peer reviews, and bug bounty programs can help identify vulnerabilities that may have been missed during initial development and testing phases.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Post-Deployment Security</h2>
            <p className="text-gray-300 mb-6">
              Even after deployment, security remains critical. Implementing upgrade mechanisms (where appropriate), monitoring contract behavior, and having incident response plans in place are important for maintaining security over time. Time-locked upgrades and multi-signature governance can provide additional security layers.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Industry Standards and Tools</h2>
            <p className="text-gray-300 mb-6">
              The blockchain industry has developed numerous security standards, frameworks, and tools to help developers create more secure smart contracts. OpenZeppelin's library provides secure implementations of common patterns, while tools like MythX, Slither, and Securify help identify potential vulnerabilities in smart contract code.
            </p>
            
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-white mb-3">Security Checklist</h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Implement checks-effects-interactions pattern
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Use established security libraries and standards
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Conduct thorough testing and formal verification
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Perform professional security audits
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Implement proper access controls and limits
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-700">
          <Link href="/category/tech/blockchain" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium">
            Browse More Blockchain Articles
          </Link>
          <Link href="/blog" className="bg-white/10 text-white px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-all">
            View All Blog Posts
          </Link>
        </div>
      </div>
    </div>
  );
}