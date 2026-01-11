import Head from 'next/head';
import Link from 'next/link';
import SEO from "../../../components/Seo/SEO";

// Define all stocks blog posts with their metadata
const stocksPosts = [
  {
    slug: 'beginners-guide-stock-market-investing-2026',
    title: 'Beginner\'s Guide to Stock Market Investing in 2026',
    description: 'Essential fundamentals for new investors entering the stock market in 2026. Learn key concepts, strategies, and common mistakes to avoid...',
    date: 'January 8, 2026',
    readTime: '10 min read'
  },
  {
    slug: 'day-trading-vs-long-term-investing-which-suits-you',
    title: 'Day Trading vs Long-Term Investing: Which Suits You?',
    description: 'Comparing two popular investment approaches and determining which aligns with your goals, personality, and risk tolerance...',
    date: 'January 7, 2026',
    readTime: '9 min read'
  },
  {
    slug: 'dividend-investing-strategies-building-passive-income',
    title: 'Dividend Investing Strategies: Building Passive Income',
    description: 'How to build a portfolio focused on dividend-paying stocks for steady income and long-term wealth growth...',
    date: 'January 6, 2026',
    readTime: '8 min read'
  },
  {
    slug: 'esg-investing-green-stocks-sustainable-portfolios',
    title: 'ESG Investing: Green Stocks and Sustainable Portfolios',
    description: 'Building environmentally and socially responsible portfolios with ESG criteria while maintaining strong financial performance...',
    date: 'January 5, 2026',
    readTime: '11 min read'
  },
  {
    slug: 'market-volatility-managing-risk-during-uncertainty',
    title: 'Market Volatility: Managing Risk During Uncertain Times',
    description: 'Strategies for navigating market turbulence and protecting your investments during periods of uncertainty and volatility...',
    date: 'January 4, 2026',
    readTime: '9 min read'
  },
  {
    slug: 'roth-ira-vs-traditional-ira-stock-investment',
    title: 'Roth IRA vs Traditional IRA for Stock Investment',
    description: 'Understanding retirement account options for maximizing stock investment returns and choosing the right account for your financial situation...',
    date: 'January 3, 2026',
    readTime: '10 min read'
  },
  {
    slug: 'technical-analysis-tools-chart-patterns-trading',
    title: 'Technical Analysis: Tools and Chart Patterns for Trading',
    description: 'Essential technical indicators and chart patterns every trader should know to make informed trading decisions...',
    date: 'January 2, 2026',
    readTime: '12 min read'
  },
  {
    slug: 'value-investing-strategies-warren-buffett-techniques',
    title: 'Value Investing Strategies: Learning from Warren Buffett',
    description: 'Time-tested value investing principles and techniques from the Oracle of Omaha. Learn how to identify undervalued companies and build long-term wealth...',
    date: 'January 1, 2026',
    readTime: '11 min read'
  }
];

export default function StocksCategory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <SEO
        title="Stocks - Finance - HAM BLOGS"
        description="Investing in the stock market and building wealth through equities"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-blue-300 hover:text-white transition-colors mb-6">
            ← Back to blog
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">Stock Market</h1>
          <p className="text-xl text-gray-300 mb-6">Investing in the stock market and building wealth through equities</p>
        </div>

        <div className="grid gap-8">
          {stocksPosts.map((post) => (
            <article 
              key={post.slug} 
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300"
            >
              <Link href={`/blog/stocks/${post.slug}`}>
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
              className="px-4 py-2 rounded-full text-sm font-medium bg-blue-600 text-white"
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