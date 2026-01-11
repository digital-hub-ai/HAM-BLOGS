import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import SEO from "../../components/Seo/SEO";

export default function FinanceCategory() {
  const [hoveredSubcategory, setHoveredSubcategory] = useState<string | null>(null);

  // Define finance subcategories
  const subcategories = [
    {
      id: "budgeting",
      title: "Budgeting",
      subtitle: "Master Your Money",
      color: "#00f3ff",
      description: "Strategies for managing personal finances and creating effective budgets"
    },
    {
      id: "retirement",
      title: "Retirement Planning",
      subtitle: "Secure Your Future",
      color: "#06d6a0",
      description: "Planning for your golden years and securing your financial future"
    },
    {
      id: "stocks",
      title: "Stock Market",
      subtitle: "Investment Insights",
      color: "#ffd166",
      description: "Investing in the stock market and building wealth through equities"
    },
    {
      id: "real-estate",
      title: "Real Estate",
      subtitle: "Property Investment",
      color: "#ff6b6b",
      description: "Property investment, buying, selling, and market trends"
    },
    {
      id: "crypto",
      title: "Cryptocurrency",
      subtitle: "Digital Assets",
      color: "#9d4edd",
      description: "Digital assets, blockchain technology, and crypto investment strategies"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden relative">
      <SEO
        title="Finance - HAM BLOGS"
        description="Expert insights on personal finance, investing, and money management"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Finance</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert insights on personal finance, investing, and money management to help you achieve financial freedom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subcategories.map((subcategory) => (
            <Link 
              key={subcategory.id}
              href={`/blog/finance/${subcategory.id}`}
              className="block"
            >
              <div 
                className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                  hoveredSubcategory === subcategory.id 
                    ? 'border-blue-500 shadow-lg shadow-blue-500/20' 
                    : 'border-gray-700 hover:border-gray-600'
                }`}
                style={{
                  boxShadow: hoveredSubcategory === subcategory.id 
                    ? `0 0 30px ${subcategory.color}40` 
                    : 'none'
                }}
                onMouseEnter={() => setHoveredSubcategory(subcategory.id)}
                onMouseLeave={() => setHoveredSubcategory(null)}
              >
                <div className="flex items-center mb-4">
                  <div 
                    className="w-3 h-3 rounded-full mr-3" 
                    style={{ backgroundColor: subcategory.color }}
                  ></div>
                  <h3 className="text-2xl font-bold text-white">{subcategory.title}</h3>
                </div>
                <h4 className="text-lg text-blue-300 mb-3">{subcategory.subtitle}</h4>
                <p className="text-gray-400">{subcategory.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/blog" className="inline-flex items-center text-blue-300 hover:text-white transition-colors">
            ← Back to all categories
          </Link>
        </div>
      </div>
    </div>
  );
}