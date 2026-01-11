import Head from 'next/head';
import Link from 'next/link';
import SEO from "../../../components/Seo/SEO";

// Define all real estate blog posts with their metadata
const realEstatePosts = [
  {
    slug: 'commercial-real-estate-investment-strategies',
    title: 'Commercial Real Estate Investment Strategies',
    description: 'Exploring opportunities in office buildings, retail spaces, and industrial properties...',
    date: 'January 8, 2026',
    readTime: '10 min read'
  },
  {
    slug: 'first-time-home-buyers-guide-mortgage-options',
    title: 'First-Time Home Buyer\'s Guide: Mortgage Options',
    description: 'Understanding different mortgage types and finding the best financing options for your first home purchase...',
    date: 'January 7, 2026',
    readTime: '9 min read'
  },
  {
    slug: 'international-real-estate-investment-considerations',
    title: 'International Real Estate Investment Considerations',
    description: 'Key factors to evaluate when investing in property markets outside your home country...',
    date: 'January 6, 2026',
    readTime: '8 min read'
  },
  {
    slug: 'real-estate-crowdfunding-platforms-rental-income',
    title: 'Real Estate Crowdfunding Platforms: Rental Income',
    description: 'How to invest in real estate projects through online platforms without direct property ownership...',
    date: 'January 5, 2026',
    readTime: '11 min read'
  },
  {
    slug: 'real-estate-market-trends-2026-investment-opportunities',
    title: 'Real Estate Market Trends 2026: Investment Opportunities',
    description: 'Analyzing current market conditions and identifying emerging opportunities in the real estate sector...',
    date: 'January 4, 2026',
    readTime: '9 min read'
  },
  {
    slug: 'real-estate-tax-strategies-maximizing-deductions',
    title: 'Real Estate Tax Strategies: Maximizing Deductions',
    description: 'Legal methods to reduce your tax burden as a real estate investor or property owner...',
    date: 'January 3, 2026',
    readTime: '10 min read'
  },
  {
    slug: 'real-estate-tech-innovation-prop-tech-trends',
    title: 'Real Estate Tech Innovation: PropTech Trends',
    description: 'How technology is transforming the real estate industry and creating new investment opportunities...',
    date: 'January 2, 2026',
    readTime: '12 min read'
  },
  {
    slug: 'residential-property-flipping-pros-cons',
    title: 'Residential Property Flipping: Pros and Cons',
    description: 'A comprehensive analysis of house flipping as an investment strategy and potential pitfalls to avoid...',
    date: 'January 1, 2026',
    readTime: '11 min read'
  }
];

export default function RealEstateCategory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <SEO
        title="Real Estate - Finance - HAM BLOGS"
        description="Property investment, buying, selling, and market trends"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-blue-300 hover:text-white transition-colors mb-6">
            ← Back to blog
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">Real Estate</h1>
          <p className="text-xl text-gray-300 mb-6">Property investment, buying, selling, and market trends</p>
        </div>

        <div className="grid gap-8">
          {realEstatePosts.map((post) => (
            <article 
              key={post.slug} 
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300"
            >
              <Link href={`/blog/real-estate/${post.slug}`}>
                <h2 className="text-2xl font-bold text-white mb-3 hover:text-blue-300 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-300 mb-4">
                {post.description}
              </p>
              <div className="flex items-center text-gray-400 text-sm">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-4">Browse Other Subcategories in finance</h3>
          <div className="flex flex-wrap gap-3">
            <Link 
              href="/blog/finance/budgeting"
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-700 text-gray-200 hover:bg-gray-600"
            >
              Budgeting
            </Link>
            <Link 
              href="/blog/finance/retirement"
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-700 text-gray-200 hover:bg-gray-600"
            >
              Retirement
            </Link>
            <Link 
              href="/blog/finance/stocks"
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-700 text-gray-200 hover:bg-gray-600"
            >
              Stocks
            </Link>
            <Link 
              href="/blog/finance/real-estate"
              className="px-4 py-2 rounded-full text-sm font-medium bg-blue-600 text-white"
            >
              Real Estate
            </Link>
            <Link 
              href="/blog/finance/crypto"
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-700 text-gray-200 hover:bg-gray-600"
            >
              Cryptocurrency
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}