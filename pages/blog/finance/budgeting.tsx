import Head from 'next/head';
import Link from 'next/link';
import SEO from "../../../components/Seo/SEO";

// Define all budgeting blog posts with their metadata
const budgetingPosts = [
  {
    slug: 'mastering-personal-budget-fundamentals-effective-money-management',
    title: 'Mastering Personal Budget: Fundamentals of Effective Money Management',
    description: 'Essential principles and strategies for creating and maintaining a successful personal budget...',
    date: 'January 8, 2026',
    readTime: '10 min read'
  },
  {
    slug: 'zero-based-budgeting-maximizing-your-income-allocation',
    title: 'Zero-Based Budgeting: Maximizing Your Income Allocation',
    description: 'A comprehensive approach to budgeting where every dollar is assigned a specific purpose...',
    date: 'January 7, 2026',
    readTime: '9 min read'
  },
  {
    slug: 'fifty-thirty-twenty-rule-applying-simple-budgeting-formula',
    title: '50/30/20 Rule: Applying the Simple Budgeting Formula',
    description: 'How to use the popular budgeting method that divides your income into three simple categories...',
    date: 'January 6, 2026',
    readTime: '8 min read'
  },
  {
    slug: 'digital-budgeting-tools-apps-tracking-expenses-effectively',
    title: 'Digital Budgeting Tools: Apps for Tracking Expenses Effectively',
    description: 'Exploring the best digital tools and applications for managing your budget and tracking expenses...',
    date: 'January 5, 2026',
    readTime: '11 min read'
  },
  {
    slug: 'budgeting-emergencies-building-financial-security',
    title: 'Budgeting for Emergencies: Building Financial Security',
    description: 'Creating an emergency fund as part of your budget to protect against unexpected expenses...',
    date: 'January 4, 2026',
    readTime: '9 min read'
  },
  {
    slug: 'budgeting-major-purchases-saving-strategies',
    title: 'Budgeting for Major Purchases: Saving Strategies',
    description: 'How to budget effectively for big-ticket items like homes, cars, or vacations...',
    date: 'January 3, 2026',
    readTime: '10 min read'
  },
  {
    slug: 'budgeting-marriage-aligning-financial-goals-couples',
    title: 'Budgeting in Marriage: Aligning Financial Goals for Couples',
    description: 'Strategies for managing finances together as a married couple or committed partners...',
    date: 'January 2, 2026',
    readTime: '12 min read'
  },
  {
    slug: 'budgeting-retirement-integrating-long-term-savings',
    title: 'Budgeting for Retirement: Integrating Long-Term Savings',
    description: 'Incorporating retirement savings into your budget for long-term financial security...',
    date: 'January 1, 2026',
    readTime: '11 min read'
  }
];

export default function BudgetingCategory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <SEO
        title="Budgeting - Finance - HAM BLOGS"
        description="Strategies for managing personal finances and creating effective budgets"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-blue-300 hover:text-white transition-colors mb-6">
            ← Back to blog
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">Budgeting</h1>
          <p className="text-xl text-gray-300 mb-6">Strategies for managing personal finances and creating effective budgets</p>
        </div>

        <div className="grid gap-8">
          {budgetingPosts.map((post) => (
            <article 
              key={post.slug} 
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300"
            >
              <Link href={`/blog/budgeting/${post.slug}`}>
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
              className="px-4 py-2 rounded-full text-sm font-medium bg-blue-600 text-white"
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