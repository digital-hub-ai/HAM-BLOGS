import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import SEO from '../../../components/Seo/SEO';

export default function BlogPost() {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <SEO
        title="First-Time Home Buyers Guide: Mortgage Options - Premium Blog Platform"
        description="Navigating mortgage options and financing strategies for first-time home buyers"
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/category/finance/real-estate" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-4">
            <span className="mr-2">←</span> Back to Real Estate Subcategory
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
            <span>January 2, 2026</span>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">
              Real Estate
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            First-Time Home Buyers Guide: Mortgage Options
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Navigating mortgage options and financing strategies for first-time home buyers
          </p>
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                RE
              </div>
              <div>
                <p className="text-white font-medium">Premium Blog Platform Editorial Team</p>
                <p className="text-gray-400 text-sm">Real Estate & Investment Experts</p>
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
              src="https://images.unsplash.com/photo-1677442135831-8b0b0a0b0a0b?w=800&h=400&fit=crop" 
              alt="First Time Home Buyers" 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Purchasing your first home is one of the most significant financial decisions you'll make. With the complexity of mortgage options available, understanding the different types of loans, their requirements, and their long-term implications is crucial for making an informed decision. The right mortgage choice can save thousands of dollars over the life of the loan while making homeownership more affordable and achievable.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Conventional Loans Overview</h2>
            <p className="text-gray-300 mb-6">
              Conventional loans are mortgages that are not backed by a government agency. They typically require a minimum down payment of 3% for first-time buyers, though putting down 20% avoids private mortgage insurance (PMI). These loans often offer competitive interest rates for borrowers with good credit scores (typically 620 or higher). Conventional loans provide flexibility in terms of loan amounts, property types, and usage (primary residence, second home, or investment property).
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Government-Backed Loan Options</h2>
            <p className="text-gray-300 mb-6">
              Government-backed loans include FHA, VA, and USDA loans, each with specific eligibility requirements and benefits. FHA loans require as little as 3.5% down and accommodate lower credit scores (as low as 580 for the minimum down payment). VA loans offer 0% down payment for eligible veterans, service members, and surviving spouses, with no PMI requirement. USDA loans provide 0% down financing for homes in eligible rural areas, though they have income limits and property location requirements.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Fixed-Rate vs. Adjustable-Rate Mortgages</h2>
            <p className="text-gray-300 mb-6">
              Fixed-rate mortgages maintain the same interest rate throughout the loan term, providing payment stability and predictability. The most common terms are 15-year and 30-year mortgages, with 15-year loans offering lower interest rates and faster equity build-up but higher monthly payments. Adjustable-rate mortgages (ARMs) have interest rates that adjust periodically based on market indexes, typically starting with a fixed rate for 3, 5, 7, or 10 years before adjusting annually. ARMs may offer lower initial rates but carry interest rate risk.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Down Payment Assistance Programs</h2>
            <p className="text-gray-300 mb-6">
              Many states and local governments offer down payment assistance programs specifically for first-time homebuyers. These programs can provide grants, forgivable loans, or tax credits to help with down payment and closing costs. Some programs are paired with specific loan products and have income limits, purchase price caps, and homebuyer education requirements. Researching these programs early in the homebuying process can significantly expand purchasing power and affordability.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Credit Score and Financial Preparation</h2>
            <p className="text-gray-300 mb-6">
              Your credit score significantly impacts mortgage qualification and interest rates. Before applying for a mortgage, review your credit report for errors and work to improve your score if necessary. Lenders also evaluate debt-to-income ratio (DTI), employment history, and available assets. Pre-approval involves a thorough financial review and provides a realistic budget for house hunting while demonstrating serious buyer intent to sellers.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Closing Costs and Additional Considerations</h2>
            <p className="text-gray-300 mb-6">
              Closing costs typically range from 2% to 5% of the loan amount and include fees for loan origination, appraisal, title insurance, and other services. First-time buyers should budget for these costs in addition to the down payment. Some lenders offer lender credits to offset closing costs in exchange for a higher interest rate. Additionally, consider ongoing costs like property taxes, homeowners insurance, HOA fees, and maintenance when budgeting for homeownership.
            </p>
            
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-white mb-3">Key Steps for First-Time Buyers</h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Check and improve credit score before applying
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Research down payment assistance programs
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Get pre-approved for a mortgage
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Compare loan options from multiple lenders
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Budget for closing costs and ongoing expenses
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-700">
          <Link href="/category/finance/real-estate" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium">
            Browse More Real Estate Articles
          </Link>
          <Link href="/blog" className="bg-white/10 text-white px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-all">
            View All Blog Posts
          </Link>
        </div>
      </div>
    </div>
  );
}