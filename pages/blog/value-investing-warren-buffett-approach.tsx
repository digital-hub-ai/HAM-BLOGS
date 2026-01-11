import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BlogPost = () => {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [showNextArticle, setShowNextArticle] = useState(false);

  useEffect(() => {
    const bookmarks = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('blogBookmarks') || '[]') : [];
    if (bookmarks.includes(router.asPath)) {
      setBookmarked(true);
    }
  }, [router.asPath]);

  const toggleBookmark = () => {
    if (typeof window === 'undefined') return;
    
    const bookmarks = JSON.parse(localStorage.getItem('blogBookmarks') || '[]');
    let updatedBookmarks;
    
    if (bookmarked) {
      updatedBookmarks = bookmarks.filter((bookmark: string) => bookmark !== router.asPath);
    } else {
      updatedBookmarks = [...bookmarks, router.asPath];
    }
    
    localStorage.setItem('blogBookmarks', JSON.stringify(updatedBookmarks));
    setBookmarked(!bookmarked);
  };

  const nextArticles = [
    { title: "Growth Investing: Technology Stocks", slug: "/blog/growth-investing-technology-stocks" },
    { title: "Index Fund Investing: Low-Cost Strategy", slug: "/blog/index-fund-investing-low-cost-strategy" },
    { title: "Dollar Cost Averaging: An Effective Approach", slug: "/blog/dollar-cost-averaging-effective-approach" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Value Investing: Warren Buffett Approach - Finance Guide</title>
        <meta name="description" content="Deep dive into the value investing principles of one of history's greatest investors." />
        <link rel="canonical" href="https://www.hamblogs.tech/blog/value-investing-warren-buffett-approach" />
        <meta property="og:title" content="Value Investing: Warren Buffett Approach" />
        <meta property="og:description" content="Deep dive into the value investing principles of one of history's greatest investors." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.hamblogs.tech/blog/value-investing-warren-buffett-approach" />
      </Head>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <button 
            onClick={() => window.history.back()} 
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6"
          >
            <span className="mr-2">←</span> Back to Articles
          </button>
          
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium mb-4">
                Investing
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Value Investing: Warren Buffett Approach
              </h1>
            </div>
            <button
              onClick={toggleBookmark}
              className={`p-3 rounded-full ${bookmarked ? 'bg-yellow-400 text-gray-900' : 'bg-gray-700 text-yellow-400'} hover:scale-105 transition-transform duration-200`}
              aria-label={bookmarked ? "Remove bookmark" : "Bookmark this article"}
            >
              {bookmarked ? '★' : '☆'}
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center text-gray-300">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              11 min read
            </div>
            <div className="flex items-center text-gray-300">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              January 6, 2026
            </div>
          </div>
        </header>

        <main className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="lead text-xl text-gray-200 mb-8">
              Warren Buffett, known as the "Oracle of Omaha," has built his reputation and wealth through disciplined value investing principles. His approach, learned from his mentor Benjamin Graham, focuses on buying quality companies at prices below their intrinsic value. Over the decades, Buffett has demonstrated that this conservative approach can generate superior long-term returns.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">The Philosophy of Value Investing</h2>
            <p>
              Value investing is fundamentally about finding securities whose market price is below their intrinsic value. The intrinsic value represents the present value of all future cash flows a business will generate. Value investors believe that markets occasionally misprice securities, creating opportunities for those who can identify these discrepancies.
            </p>

            <p>
              Buffett's approach combines Graham's quantitative value screening with Philip Fisher's qualitative growth analysis. While Graham focused primarily on statistical bargains (net-nets and liquidation values), Buffett evolved to buy wonderful businesses at fair prices rather than fair businesses at wonderful prices.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">The Concept of Economic Moats</h2>
            <p>
              One of Buffett's most significant contributions to value investing is the concept of economic moats - durable competitive advantages that protect a company's market position. These moats can take several forms:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Brand Power:</strong> Companies like Coca-Cola or Apple command premium pricing due to brand loyalty</li>
              <li><strong>Network Effects:</strong> Platforms like Facebook or Visa become more valuable as more people join</li>
              <li><strong>Switching Costs:</strong> Businesses like Microsoft Office or Salesforce lock customers into their systems</li>
              <li><strong>Cost Advantages:</strong> Walmart's scale allows it to offer lower prices than competitors</li>
              <li><strong>Geographic Advantages:</strong> Local utilities or real estate in prime locations</li>
            </ul>

            <p>
              Companies with wide economic moats can maintain profitability and market share over long periods, making them ideal candidates for value investors.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Management Quality Assessment</h2>
            <p>
              Buffett places significant emphasis on management quality when evaluating potential investments. He looks for leaders who:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Allocate Capital Wisely:</strong> Deploy cash flow to profitable opportunities rather than empire building</li>
              <li><strong>Think Like Owners:</strong> Act in shareholders' interests rather than pursuing personal perks</li>
              <li><strong>Communicate Candidly:</strong> Honestly discuss both successes and failures with investors</li>
              <li><strong>Maintain Focus:</strong> Concentrate on their core business rather than chasing unrelated diversification</li>
              <li><strong>Operate Ethically:</strong> Maintain high standards of integrity and transparency</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Financial Metrics for Value Investors</h2>
            <p>
              While Buffett doesn't rely on a single metric, he evaluates several key financial indicators:
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Return on Equity (ROE)</h3>
            <p>
              Consistent high ROE indicates efficient use of shareholder capital. Buffett typically looks for companies with ROE of 15% or higher over long periods.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Owner Earnings</h3>
            <p>
              Buffett prefers owner earnings (net income + depreciation/amortization - maintenance capex) to accounting profits as it reveals the cash available for shareholders.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Debt-to-Equity Ratio</h3>
            <p>
              Conservative debt levels protect shareholders during economic downturns. Buffett prefers companies with manageable debt loads.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">The Circle of Competence</h2>
            <p>
              Buffett advocates staying within your circle of competence - investing only in businesses you understand. This principle prevents investors from making poor decisions in unfamiliar industries. Buffett famously avoided technology stocks for years because he couldn't assess their competitive advantages reliably.
            </p>

            <p>
              The circle of competence isn't fixed - it can expand through continuous learning. However, it's better to know your limitations than to invest in areas you don't understand.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Long-Term Perspective</h2>
            <p>
              Buffett thinks in decades rather than quarters. He believes that time is the friend of wonderful businesses and the enemy of mediocre ones. This long-term perspective allows value investors to:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Ignore short-term market volatility</li>
              <li>Benefit from compound growth of quality businesses</li>
              <li>Avoid costly transaction fees from frequent trading</li>
              <li>Allow economic moats to widen over time</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">The Margin of Safety</h2>
            <p>
              Graham's margin of safety principle remains central to Buffett's approach. This means buying stocks at prices significantly below calculated intrinsic value, providing a cushion against errors in calculation or unexpected adverse events.
            </p>

            <p>
              The margin of safety isn't just about low price-to-book ratios; it's about paying less than what a business is truly worth based on its ability to generate future cash flows. The wider the discount, the greater the safety margin.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Common Misconceptions</h2>
            <p>
              Many investors misunderstand value investing:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>It's not just about low P/E ratios:</strong> Cheap stocks may stay cheap if fundamentals deteriorate</li>
              <li><strong>It's not always boring:</strong> Growth and value can coexist in wonderful businesses</li>
              <li><strong>It's not market timing:</strong> Value investors focus on business quality, not market direction</li>
              <li><strong>It's not static:</strong> The approach has evolved to accommodate changing business models</li>
            </ul>

            <p>
              Warren Buffett's value investing approach combines rigorous financial analysis with qualitative assessment of business quality. By focusing on companies with sustainable competitive advantages, competent management, and attractive valuations, investors can build portfolios positioned for long-term success.
            </p>
          </div>
        </main>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">About Value Investing</h3>
          <p className="text-gray-300 mb-4">
            Value investing is a disciplined approach to equity investing that focuses on identifying securities trading below their intrinsic value. The strategy has been refined over decades by investors like Warren Buffett to combine quantitative analysis with qualitative business assessment.
          </p>
          <p className="text-gray-300">
            Success in value investing requires patience, discipline, and a long-term perspective that focuses on business fundamentals rather than market speculation.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
          <div className="space-y-4">
            <Link href="/blog/long-term-investment-strategies-wealth-building" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-yellow-400">Long-Term Investment Strategies for Wealth Building</h4>
              <p className="text-gray-300">Understanding buy-and-hold strategies and compound interest for building long-term wealth.</p>
            </Link>
            <Link href="/blog/diversification-portfolio-risk-management" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-yellow-400">Diversification: Portfolio Risk Management</h4>
              <p className="text-gray-300">How to spread investments across different asset classes to minimize risk.</p>
            </Link>
            <Link href="/blog/growth-investing-technology-stocks" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-yellow-400">Growth Investing: Technology Stocks</h4>
              <p className="text-gray-300">Strategies for identifying and investing in high-growth technology companies.</p>
            </Link>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => setShowNextArticle(!showNextArticle)}
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium mb-6"
          >
            Show Next Article
          </button>

          {showNextArticle && (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 inline-block">
              <h4 className="text-lg font-semibold text-white mb-3">Continue Reading</h4>
              <ul className="space-y-2">
                {nextArticles.map((article, index) => (
                  <li key={index}>
                    <Link href={article.slug} className="text-yellow-400 hover:text-yellow-300">
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;