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
    { title: "Long-Term Investment Strategies for Wealth Building", slug: "/blog/long-term-investment-strategies-wealth-building" },
    { title: "Value Investing: Warren Buffett Approach", slug: "/blog/value-investing-warren-buffett-approach" },
    { title: "Growth Investing: Technology Stocks", slug: "/blog/growth-investing-technology-stocks" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>ESG Investing: Building a Sustainable Portfolio - Finance Guide</title>
        <meta name="description" content="How environmental, social, and governance factors can impact investment returns." />
        <link rel="canonical" href="https://www.hamblogs.tech/blog/esg-investing-sustainable-portfolio" />
        <meta property="og:title" content="ESG Investing: Building a Sustainable Portfolio" />
        <meta property="og:description" content="How environmental, social, and governance factors can impact investment returns." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.hamblogs.tech/blog/esg-investing-sustainable-portfolio" />
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
                ESG Investing: Building a Sustainable Portfolio
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
              January 1, 2026
            </div>
          </div>
        </header>

        <main className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="lead text-xl text-gray-200 mb-8">
              Environmental, Social, and Governance (ESG) investing has emerged as one of the fastest-growing investment approaches, driven by increasing awareness of sustainability issues and their financial implications. ESG investing integrates non-financial factors into investment decisions, considering how environmental stewardship, social responsibility, and corporate governance practices affect long-term financial performance.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Understanding ESG Criteria</h2>
            <p>
              ESG investing evaluates companies across three key dimensions:
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Environmental (E)</h3>
            <p>
              This considers how companies impact the environment and manage environmental risks, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Carbon emissions and climate change policies</li>
              <li>Resource usage and waste management</li>
              <li>Water and air pollution control</li>
              <li>Biodiversity and land use impact</li>
              <li>Environmental compliance and certifications</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Social (S)</h3>
            <p>
              This evaluates how companies manage relationships with employees, suppliers, customers, and communities:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Labor practices and employee relations</li>
              <li>Data privacy and security</li>
              <li>Product safety and quality</li>
              <li>Community relations and engagement</li>
              <li>Human rights and diversity practices</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Governance (G)</h3>
            <p>
              This assesses a company's leadership, executive pay, audits, internal controls, and shareholder rights:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Board composition and independence</li>
              <li>Executive compensation alignment</li>
              <li>Transparency and disclosure practices</li>
              <li>Shareholder rights and engagement</li>
              <li>Ethics and compliance programs</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Financial Performance and ESG</h2>
            <p>
              Research increasingly shows that ESG factors can impact financial performance:
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Risk Mitigation</h3>
            <p>
              Companies with strong ESG practices often face lower regulatory, legal, and reputational risks. Good governance reduces fraud risk, while environmental compliance prevents costly violations.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Access to Capital</h3>
            <p>
              ESG-focused companies often enjoy lower borrowing costs as lenders recognize reduced risk profiles. Many institutional investors now require ESG screening for investment decisions.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Operational Efficiency</h3>
            <p>
              Environmental initiatives often reduce costs through improved efficiency, while good social practices can improve employee retention and productivity.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Types of ESG Investing</h2>
            <p>
              ESG investing encompasses several approaches:
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Negative Screening</h3>
            <p>
              Excluding companies involved in controversial activities like tobacco, weapons, or fossil fuels. This approach focuses on avoiding harmful investments.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Positive Screening</h3>
            <p>
              Actively selecting companies with strong ESG practices. This approach seeks to invest in companies leading in sustainability.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">ESG Integration</h3>
            <p>
              Incorporating ESG factors alongside financial metrics in investment analysis. This approach considers ESG as part of fundamental analysis.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Impact Investing</h3>
            <p>
              Targeting investments to generate positive environmental or social impact alongside financial returns. This approach has specific impact objectives.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">ESG Investment Vehicles</h2>
            <p>
              Investors can access ESG strategies through various vehicles:
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">ESG Mutual Funds</h3>
            <p>
              Professionally managed funds that screen investments based on ESG criteria. These offer diversification and professional expertise.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">ESG ETFs</h3>
            <p>
              Exchange-traded funds that track ESG-focused indices. These typically have lower fees than mutual funds and trade like stocks.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Green Bonds</h3>
            <p>
              Fixed-income securities funding environmentally beneficial projects. These offer lower risk with moderate returns.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Challenges and Criticisms</h2>
            <p>
              ESG investing faces several challenges:
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Measurement Issues</h3>
            <p>
              ESG ratings can vary significantly between providers, making it difficult to assess companies consistently. Different methodologies and data sources lead to rating discrepancies.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Greenwashing Concerns</h3>
            <p>
              Some companies may exaggerate their ESG credentials to attract investment capital. Investors must carefully evaluate claims rather than relying solely on ratings.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Performance Debate</h3>
            <p>
              While some studies show positive ESG performance, others suggest mixed results. The relationship between ESG scores and returns continues to evolve.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Building an ESG Portfolio</h2>
            <p>
              To construct an effective ESG portfolio:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Define Objectives:</strong> Clarify your ESG priorities and financial goals</li>
              <li><strong>Research Providers:</strong> Compare different fund managers and their methodologies</li>
              <li><strong>Assess Diversification:</strong> Ensure adequate sector and geographic diversification</li>
              <li><strong>Monitor Costs:</strong> ESG funds may have higher fees due to research requirements</li>
              <li><strong>Evaluate Impact:</strong> Assess whether investments align with your values</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Future of ESG Investing</h2>
            <p>
              ESG investing continues to evolve with increasing standardization and regulatory oversight:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Greater transparency and disclosure requirements</li>
              <li>Standardization of ESG metrics and reporting</li>
              <li>Integration of climate risk into financial models</li>
              <li>Development of impact measurement tools</li>
            </ul>

            <p>
              ESG investing represents a maturing investment approach that recognizes the connection between sustainable business practices and long-term financial performance. While challenges remain, ESG considerations are increasingly essential for comprehensive investment analysis.
            </p>
          </div>
        </main>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">About ESG Investing</h3>
          <p className="text-gray-300 mb-4">
            ESG investing integrates environmental, social, and governance factors into investment decisions, recognizing that sustainable business practices can drive long-term financial performance. This approach appeals to investors seeking to align their investments with their values while potentially reducing risk.
          </p>
          <p className="text-gray-300">
            The field continues to mature with better standardization and measurement tools, making it an increasingly viable investment approach for mainstream investors.
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
            <Link href="/blog/value-investing-warren-buffett-approach" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-yellow-400">Value Investing: Warren Buffett Approach</h4>
              <p className="text-gray-300">Deep dive into the value investing principles of one of history's greatest investors.</p>
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