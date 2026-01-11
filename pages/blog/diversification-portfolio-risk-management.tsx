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
    { title: "Value Investing: Warren Buffett Approach", slug: "/blog/value-investing-warren-buffett-approach" },
    { title: "Growth Investing: Technology Stocks", slug: "/blog/growth-investing-technology-stocks" },
    { title: "Index Fund Investing: Low-Cost Strategy", slug: "/blog/index-fund-investing-low-cost-strategy" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Diversification: Portfolio Risk Management - Finance Guide</title>
        <meta name="description" content="How to spread investments across different asset classes to minimize risk." />
        <link rel="canonical" href="https://www.hamblogs.tech/blog/diversification-portfolio-risk-management" />
        <meta property="og:title" content="Diversification: Portfolio Risk Management" />
        <meta property="og:description" content="How to spread investments across different asset classes to minimize risk." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.hamblogs.tech/blog/diversification-portfolio-risk-management" />
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
                Diversification: Portfolio Risk Management
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
              9 min read
            </div>
            <div className="flex items-center text-gray-300">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              January 7, 2026
            </div>
          </div>
        </header>

        <main className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="lead text-xl text-gray-200 mb-8">
              Diversification is one of the most fundamental principles of sound investing. By spreading investments across different asset classes, sectors, geographic regions, and investment styles, investors can reduce risk without necessarily sacrificing returns. The goal is to create a portfolio that isn't overly dependent on any single investment or market segment.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Understanding Correlation</h2>
            <p>
              Diversification works because different assets don't move in perfect synchronization. When one investment loses value, others may gain or lose less. The correlation coefficient measures how closely two investments move together, ranging from -1 (perfect negative correlation) to +1 (perfect positive correlation). The lower the correlation between your investments, the better your diversification.
            </p>

            <p>
              For example, government bonds typically have low correlation with stocks. During stock market downturns, bonds often maintain or increase their value, providing a cushion against losses. Real estate investment trusts (REITs) may have moderate correlation with stocks but offer exposure to the real estate market, further diversifying your portfolio.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Asset Class Diversification</h2>
            <p>
              The most basic level of diversification involves allocating your portfolio across different asset classes. Each asset class has unique risk and return characteristics:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Stocks:</strong> Offer growth potential but come with higher volatility</li>
              <li><strong>Bonds:</strong> Provide income and stability, though with lower expected returns</li>
              <li><strong>Real Estate:</strong> Offers inflation protection and diversification from stocks/bonds</li>
              <li><strong>Commodities:</strong> Provide protection against inflation and currency fluctuations</li>
              <li><strong>International Investments:</strong> Reduce dependence on domestic economic conditions</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Geographic Diversification</h2>
            <p>
              Geographic diversification involves investing in different countries and regions. This protects against country-specific risks like political instability, economic downturns, or currency fluctuations. International diversification can be achieved through:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Developed Markets:</strong> Stable economies like Europe, Japan, and Canada</li>
              <li><strong>Emerging Markets:</strong> Higher growth potential but increased risk in countries like China, India, Brazil</li>
              <li><strong>Frontier Markets:</strong> Smaller, less developed markets with highest risk/reward potential</li>
            </ul>

            <p>
              The optimal geographic allocation depends on your risk tolerance, time horizon, and views on global economic growth. Many investors use a blend of domestic and international investments, with allocations shifting as they approach retirement.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Sector Diversification</h2>
            <p>
              Within stocks, diversification across economic sectors is crucial. Different sectors perform differently based on economic conditions:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Cyclical Sectors:</strong> Technology, consumer discretionary, industrials (perform well during economic expansion)</li>
              <li><strong>Defensive Sectors:</strong> Utilities, consumer staples, healthcare (hold up better during recessions)</li>
              <li><strong>Growth vs. Value:</strong> Balance between high-growth and undervalued stocks</li>
              <li><strong>Market Capitalization:</strong> Mix of large-cap, mid-cap, and small-cap stocks</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Time Diversification</h2>
            <p>
              Time diversification involves spreading investments over time to reduce the impact of market timing. Strategies include:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Dollar-cost averaging:</strong> Investing fixed amounts regularly regardless of market conditions</li>
              <li><strong>Rebalancing:</strong> Periodically adjusting portfolio weights to maintain target allocations</li>
              <li><strong>Laddering:</strong> Staggering maturity dates for bonds or CDs</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Risk Factors and Diversification</h2>
            <p>
              Modern portfolio theory identifies various risk factors that investors should diversify across:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Size Factor:</strong> Small vs. large companies</li>
              <li><strong>Value Factor:</strong> Value vs. growth stocks</li>
              <li><strong>Momentum Factor:</strong> Stocks with recent strong performance</li>
              <li><strong>Quality Factor:</strong> Companies with strong financials</li>
              <li><strong>Volatility Factor:</strong> Low vs. high volatility stocks</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Measuring Diversification</h2>
            <p>
              Effective diversification can be measured through several metrics:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Portfolio Volatility:</strong> A well-diversified portfolio should have lower volatility than its individual components</li>
              <li><strong>Correlation Matrix:</strong> Shows how different holdings move in relation to each other</li>
              <li><strong>Concentration Risk:</strong> Ensure no single holding represents too large a portion of the portfolio</li>
              <li><strong>Tracking Error:</strong> How closely your portfolio tracks its benchmark</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Common Diversification Mistakes</h2>
            <p>
              Investors often make diversification errors that defeat the purpose:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Over-diversification:</strong> Holding so many positions that returns are diluted</li>
              <li><strong>Fake diversification:</strong> Holdings that are highly correlated (e.g., multiple tech stocks)</li>
              <li><strong>Home bias:</strong> Overweighting domestic investments at the expense of international</li>
              <li><strong>Ignoring correlation changes:</strong> Relationships between assets can change during crises</li>
            </ul>

            <p>
              Diversification is a powerful tool for managing portfolio risk, but it requires thoughtful implementation. The goal isn't to eliminate all risk but to achieve an optimal balance between risk and return based on your financial goals and timeline.
            </p>
          </div>
        </main>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">About Portfolio Management</h3>
          <p className="text-gray-300 mb-4">
            Diversification is a fundamental principle of portfolio management that helps investors reduce risk while maintaining potential for returns. Proper diversification requires balancing different asset classes, sectors, and geographic regions.
          </p>
          <p className="text-gray-300">
            The key is to achieve optimal diversification without over-complicating your portfolio or diluting returns.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
          <div className="space-y-4">
            <Link href="/blog/long-term-investment-strategies-wealth-building" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-yellow-400">Long-Term Investment Strategies for Wealth Building</h4>
              <p className="text-gray-300">Understanding buy-and-hold strategies and compound interest for building long-term wealth.</p>
            </Link>
            <Link href="/blog/value-investing-warren-buffett-approach" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-yellow-400">Value Investing: Warren Buffett Approach</h4>
              <p className="text-gray-300">Deep dive into the value investing principles of one of history's greatest investors.</p>
            </Link>
            <Link href="/blog/emerging-markets-investment-opportunities" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-yellow-400">Emerging Markets: Investment Opportunities</h4>
              <p className="text-gray-300">Exploring investment potential in rapidly developing economies worldwide.</p>
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