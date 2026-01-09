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
        title="Understanding Transformer Architecture - HAM BLOGS"
        description="Deep dive into the transformer architecture that powers modern LLMs"
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/category/tech/ai" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-4">
            <span className="mr-2">←</span> Back to AI Subcategory
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
            <span>January 7, 2026</span>
            <span>•</span>
            <span>12 min read</span>
            <span>•</span>
            <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">
              Artificial Intelligence
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Understanding Transformer Architecture
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Deep dive into the transformer architecture that powers modern LLMs
          </p>
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                AI
              </div>
              <div>
                <p className="text-white font-medium">HAM BLOGS Editorial Team</p>
                <p className="text-gray-400 text-sm">AI & Technology Experts</p>
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
              src="https://images.unsplash.com/photo-1677442135133-33d364e7d1e6?w=800&h=400&fit=crop" 
              alt="Transformer Architecture" 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The transformer architecture, introduced in the groundbreaking paper "Attention Is All You Need" by Vaswani et al. in 2017, has fundamentally transformed the landscape of natural language processing and machine learning. This revolutionary architecture has become the foundation for state-of-the-art models like BERT, GPT, and countless others that power today's most advanced AI systems.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">The Birth of Transformers</h2>
            <p className="text-gray-300 mb-6">
              Before transformers, sequence-to-sequence models relied heavily on recurrent neural networks (RNNs) and long short-term memory (LSTM) networks. These models processed sequences sequentially, which limited parallelization and made training slow for long sequences. The transformer architecture solved this by eliminating recurrence entirely and relying solely on attention mechanisms.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Self-Attention Mechanism</h2>
            <p className="text-gray-300 mb-6">
              The core innovation of the transformer is the self-attention mechanism, which allows each position in the sequence to attend to all positions in the previous layer. This enables the model to capture long-range dependencies and contextual relationships more effectively than traditional RNNs. Self-attention computes representations of input sequences by weighing the importance of different parts of the sequence relative to each other.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Multi-Head Attention</h2>
            <p className="text-gray-300 mb-6">
              Transformers employ multi-head attention to allow the model to jointly attend to information from different representation subspaces at different positions. Instead of performing a single attention function, the attention function is linearly projected h times into different dimensions, allowing the model to learn different types of relationships in the data simultaneously.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Positional Encoding</h2>
            <p className="text-gray-300 mb-6">
              Since transformers don't have inherent knowledge of sequence order (unlike RNNs), positional encodings are added to the input embeddings to provide information about the position of tokens in the sequence. These encodings can be learned or fixed, with sinusoidal functions commonly used in the original implementation.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Encoder-Decoder Structure</h2>
            <p className="text-gray-300 mb-6">
              The original transformer consists of an encoder and a decoder. The encoder maps an input sequence to a sequence of continuous representations, while the decoder generates an output sequence based on the encoder's output. Each layer in the encoder consists of a multi-head self-attention mechanism followed by a position-wise fully connected feed-forward network. The decoder includes an additional attention layer that attends to the encoder's output.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Impact on Modern AI</h2>
            <p className="text-gray-300 mb-6">
              The transformer architecture has enabled the development of increasingly powerful language models. Its ability to process sequences in parallel has made it possible to train models on vast amounts of data, leading to breakthrough capabilities in natural language understanding, generation, and reasoning. The architecture has also been adapted for computer vision (Vision Transformers) and other domains.
            </p>
            
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-white mb-3">Key Components</h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Self-attention mechanism for capturing contextual relationships
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Multi-head attention for learning diverse representations
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Positional encoding for sequence order information
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Feed-forward networks for feature transformation
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Layer normalization and residual connections
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-700">
          <Link href="/category/tech/ai" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium">
            Browse More AI Articles
          </Link>
          <Link href="/blog" className="bg-white/10 text-white px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-all">
            View All Blog Posts
          </Link>
        </div>
      </div>
    </div>
  );
}