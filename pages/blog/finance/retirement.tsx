import Head from 'next/head';
import Link from 'next/link';
import SEO from "../../../components/Seo/SEO";

// Define all retirement blog posts with their metadata
const retirementPosts = [
  {
    slug: 'comprehensive-guide-retirement-planning-starting-early',
    title: 'The Comprehensive Guide to Retirement Planning: Starting Early',
    description: 'Essential strategies for beginning your retirement planning journey and maximizing your long-term financial security...',
    date: 'January 8, 2026',
    readTime: '10 min read'
  },
  {
    slug: 'social-security-optimization-when-to-claim-benefits',
    title: 'Social Security Optimization: When to Claim Benefits',
    description: 'Strategic timing for claiming Social Security benefits to maximize your lifetime income...',
    date: 'January 7, 2026',
    readTime: '9 min read'
  },
  {
    slug: 'retirement-lifestyle-planning-non-financial-aspects',
    title: 'Retirement Lifestyle Planning: Non-Financial Aspects',
    description: 'Preparing for the non-financial challenges of retirement including health, relationships, and purpose...',
    date: 'January 6, 2026',
    readTime: '8 min read'
  },
  {
    slug: 'retirement-income-diversification-strategies',
    title: 'Retirement Income Diversification Strategies',
    description: 'Creating multiple streams of income to ensure financial security throughout retirement...',
    date: 'January 5, 2026',
    readTime: '11 min read'
  },
  {
    slug: 'inflation-retirement-planning-protecting-purchasing-power',
    title: 'Inflation and Retirement Planning: Protecting Purchasing Power',
    description: 'Strategies to protect your retirement savings from the eroding effects of inflation...',
    date: 'January 4, 2026',
    readTime: '9 min read'
  },
  {
    slug: 'healthcare-costs-retirement-medicare-planning',
    title: 'Healthcare Costs in Retirement: Medicare Planning',
    description: 'Understanding healthcare expenses in retirement and how to plan for medical costs...',
    date: 'January 3, 2026',
    readTime: '10 min read'
  },
  {
    slug: 'estate-planning-retirement-legacy-considerations',
    title: 'Estate Planning for Retirement: Legacy Considerations',
    description: 'How to plan your estate to protect your assets and provide for your heirs...',
    date: 'January 2, 2026',
    readTime: '12 min read'
  },
  {
    slug: '401k-ira-rollover-strategies-maximizing-savings',
    title: '401(k) and IRA Rollover Strategies for Maximizing Savings',
    description: 'Understanding the best approaches for managing your retirement accounts and optimizing your investment returns...',
    date: 'January 1, 2026',
    readTime: '11 min read'
  }
];

export default function RetirementCategory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <SEO
        title="Retirement - Finance - HAM BLOGS"
        description="Planning for your golden years and securing your financial future"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-blue-300 hover:text-white transition-colors mb-6">
            ← Back to blog
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">Retirement Planning</h1>
          <p className="text-xl text-gray-300 mb-6">Planning for your golden years and securing your financial future</p>
        </div>

        <div className="grid gap-8">
          {retirementPosts.map((post) => (
            <article 
              key={post.slug} 
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300"
            >
              <Link href={`/blog/retirement/${post.slug}`}>
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
              className="px-4 py-2 rounded-full text-sm font-medium bg-blue-600 text-white"
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
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-700 text-gray-200 hover:bg-gray-600"
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