import Head from "next/head";
import Link from "next/link";
import SEO from "../components/Seo/SEO";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <SEO
        title="About HAM BLOGS - World's Largest Premium Blogging Platform"
        description="Learn about HAM BLOGS, the world's largest premium blogging platform featuring cutting-edge technology, AI insights, and expert knowledge."
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">HAM BLOGS</span>
          </h1>
          <p className="text-xl text-blue-200">
            World's Largest Premium Blogging Platform
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-200 mb-4">
            At HAM BLOGS, we're dedicated to creating the world's largest premium blogging platform, 
            bringing together cutting-edge technology, AI insights, and expert knowledge from around the globe.
          </p>
          <p className="text-gray-200">
            Our platform serves as a cosmic library of human knowledge, where innovative minds share 
            their expertise across multiple dimensions of technology, science, and digital innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">
            <h3 className="text-xl font-bold text-white mb-3">Technology Focus</h3>
            <p className="text-gray-200">
              We specialize in AI, quantum computing, blockchain, cloud computing, and emerging technologies, 
              providing in-depth analysis and expert insights.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">
            <h3 className="text-xl font-bold text-white mb-3">Global Community</h3>
            <p className="text-gray-200">
              Our platform connects experts, researchers, and enthusiasts from around the world, 
              fostering knowledge exchange and innovation.
            </p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
          <p className="text-gray-200 mb-4">
            To create the ultimate knowledge repository where technology meets innovation, 
            where every cosmic insight is captured and shared for the advancement of human understanding.
          </p>
          <p className="text-gray-200">
            We envision HAM BLOGS as the central hub for technological enlightenment, 
            connecting minds across the digital universe to share, learn, and grow together.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all font-medium">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}