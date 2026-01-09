import Head from "next/head";
import Link from "next/link";
import SEO from "../components/Seo/SEO";

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <SEO
        title="Services - HAM BLOGS"
        description="Explore the services offered by HAM BLOGS, the world's largest premium blogging platform."
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-blue-200">
            Premium Blogging and Knowledge Services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all">
            <div className="text-blue-400 text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-white mb-3">Premium Blogging Platform</h3>
            <p className="text-gray-200">
              Access the world's largest premium blogging platform featuring cutting-edge technology, 
              AI insights, and expert knowledge across multiple domains.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all">
            <div className="text-purple-400 text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold text-white mb-3">Expert Knowledge Hub</h3>
            <p className="text-gray-200">
              Explore our cosmic library of expert knowledge spanning AI, quantum computing, 
              blockchain, cloud computing, and emerging technologies.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all">
            <div className="text-green-400 text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-white mb-3">Research & Analytics</h3>
            <p className="text-gray-200">
              Get access to comprehensive research reports, market analytics, and technology 
              trend analysis to stay ahead in the digital landscape.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all">
            <div className="text-yellow-400 text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-white mb-3">Community & Networking</h3>
            <p className="text-gray-200">
              Connect with experts, researchers, and enthusiasts from around the world in 
              our vibrant knowledge-sharing community.
            </p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Technology Focus Areas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">AI & Machine Learning</h3>
              <ul className="list-disc list-inside text-gray-200 space-y-2">
                <li>Deep learning frameworks and applications</li>
                <li>Natural language processing insights</li>
                <li>Computer vision and image recognition</li>
                <li>AI ethics and responsible development</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Emerging Technologies</h3>
              <ul className="list-disc list-inside text-gray-200 space-y-2">
                <li>Quantum computing applications</li>
                <li>Blockchain and decentralized systems</li>
                <li>Cloud computing solutions</li>
                <li>Web3 and decentralized internet</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">For Content Creators</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✍️</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Publishing Tools</h3>
              <p className="text-gray-200">Advanced publishing tools with rich formatting and analytics</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Audience Analytics</h3>
              <p className="text-gray-200">Detailed insights about your readers and content performance</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Revenue Sharing</h3>
              <p className="text-gray-200">Earn from your content through our revenue sharing program</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Enterprise Solutions</h2>
          <p className="text-gray-200 mb-4">
            For businesses and organizations looking to leverage our platform for knowledge management, 
            employee learning, or content distribution, we offer custom enterprise solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-blue-500/20 px-4 py-2 rounded-lg">
              <span className="text-blue-300">Knowledge Management</span>
            </div>
            <div className="bg-purple-500/20 px-4 py-2 rounded-lg">
              <span className="text-purple-300">Employee Training</span>
            </div>
            <div className="bg-green-500/20 px-4 py-2 rounded-lg">
              <span className="text-green-300">Content Distribution</span>
            </div>
            <div className="bg-yellow-500/20 px-4 py-2 rounded-lg">
              <span className="text-yellow-300">Research Collaboration</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all font-medium mr-4">
            Back to Home
          </Link>
          <Link href="/contact" className="inline-block bg-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all font-medium">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}