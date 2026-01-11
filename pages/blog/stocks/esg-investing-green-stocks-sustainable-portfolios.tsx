import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from "../../../components/Seo/SEO";

export default function ESGInvestingGreenStocksSustainablePortfolios() {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    try {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      setBookmarked(bookmarks.some((bookmark: { slug: string; }) => bookmark.slug === 'esg-investing-green-stocks-sustainable-portfolios'));
    } catch (error) {
      console.error('Error reading bookmarks from localStorage:', error);
    }
  }, []);

  const toggleBookmark = () => {
    try {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      if (bookmarked) {
        const filteredBookmarks = bookmarks.filter((bookmark: { slug: string; }) => bookmark.slug !== 'esg-investing-green-stocks-sustainable-portfolios');
        localStorage.setItem('bookmarks', JSON.stringify(filteredBookmarks));
        setBookmarked(false);
      } else {
        const newBookmark = {
          slug: 'esg-investing-green-stocks-sustainable-portfolios',
          title: 'ESG Investing: Green Stocks and Sustainable Portfolios',
          date: '2026-01-03',
          url: '/blog/stocks/esg-investing-green-stocks-sustainable-portfolios'
        };
        bookmarks.push(newBookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        setBookmarked(true);
      }
    } catch (error) {
      console.error('Error updating bookmarks in localStorage:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <SEO
        title="ESG Investing: Green Stocks and Sustainable Portfolios - HAM BLOGS"
        description="Building environmentally and socially responsible portfolios with ESG criteria while maintaining strong financial performance."
        canonical="https://ham-blogs.vercel.app/blog/stocks/esg-investing-green-stocks-sustainable-portfolios"
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/categories" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6">
            <span className="mr-2">←</span> Back to Categories
          </Link>
          
          <div className="flex justify-between items-start">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ESG Investing: Green Stocks and Sustainable Portfolios
            </h1>
            
            <button
              onClick={toggleBookmark}
              className={`p-2 rounded-lg ${
                bookmarked 
                  ? 'bg-yellow-500 text-white' 
                  : 'bg-white/10 text-yellow-400 hover:bg-white/20'
              }`}
              aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
            >
              {bookmarked ? '★' : '☆'}
            </button>
          </div>
          
          <div className="flex flex-wrap items-center text-gray-400 mb-8">
            <span className="mr-4">January 3, 2026</span>
            <span>9 min read</span>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed">
            Environmental, Social, and Governance (ESG) investing has transformed from a niche consideration to a mainstream investment approach. As investors increasingly seek to align their portfolios with their values while pursuing competitive returns, ESG investing offers a framework for evaluating companies based on their environmental stewardship, social responsibility, and corporate governance practices.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Understanding ESG Investing</h2>
          <p className="text-gray-300 leading-relaxed">
            ESG investing evaluates companies beyond traditional financial metrics, incorporating environmental, social, and governance factors into investment decisions. This approach recognizes that sustainable business practices often correlate with long-term financial performance and risk management.
          </p>

          <p className="text-gray-300 leading-relaxed">
            ESG investing doesn't necessarily sacrifice returns for values. In fact, research suggests that companies with strong ESG practices may outperform their peers over the long term by mitigating risks, attracting talent, and building stakeholder trust. However, ESG investing requires careful analysis to distinguish genuine sustainable practices from marketing efforts.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Three Pillars of ESG</h2>
          <p className="text-gray-300 leading-relaxed">
            ESG investing encompasses three key dimensions that investors evaluate when assessing companies:
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Environmental Factors</h3>
          <p className="text-gray-300 leading-relaxed">
            Environmental criteria examine how a company impacts the environment and manages climate-related risks. Key considerations include:
          </p>

          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong>Carbon Footprint:</strong> Company's greenhouse gas emissions and climate change mitigation strategies</li>
            <li><strong>Resource Management:</strong> Water usage, waste management, and raw material sourcing</li>
            <li><strong>Renewable Energy:</strong> Commitment to clean energy and energy efficiency initiatives</li>
            <li><strong>Environmental Compliance:</strong> Adherence to environmental regulations and sustainability reporting</li>
            <li><strong>Natural Capital:</strong> Impact on biodiversity, deforestation, and ecosystem preservation</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Social Factors</h3>
          <p className="text-gray-300 leading-relaxed">
            Social criteria evaluate how a company manages relationships with employees, suppliers, customers, and communities:
          </p>

          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong>Employee Relations:</strong> Workplace safety, diversity, compensation, and labor practices</li>
            <li><strong>Data Privacy:</strong> Protection of customer data and cybersecurity measures</li>
            <li><strong>Community Impact:</strong> Contributions to local communities and stakeholder engagement</li>
            <li><strong>Product Safety:</strong> Quality, safety, and ethical marketing of products/services</li>
            <li><strong>Human Rights:</strong> Respect for human rights throughout the supply chain</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Governance Factors</h3>
          <p className="text-gray-300 leading-relaxed">
            Governance criteria assess a company's leadership, executive pay, audits, internal controls, and shareholder rights:
          </p>

          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong>Board Composition:</strong> Independence, diversity, and expertise of board members</li>
            <li><strong>Executive Compensation:</strong> Alignment with performance and shareholder interests</li>
            <li><strong>Transparency:</strong> Quality and timeliness of financial reporting and ESG disclosures</li>
            <li><strong>Shareholder Rights:</strong> Voting rights and mechanisms for shareholder engagement</li>
            <li><strong>Ethics:</strong> Anti-corruption policies and ethical business conduct</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">ESG Investment Strategies</h2>
          <p className="text-gray-300 leading-relaxed">
            Investors can pursue ESG objectives through various strategies, each with different approaches to incorporating ESG factors:
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Negative Screening</h3>
          <p className="text-gray-300 leading-relaxed">
            Excludes companies involved in controversial activities such as tobacco, weapons, gambling, or fossil fuels. This approach removes investments that conflict with personal values or ethical beliefs.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Positive Screening</h3>
          <p className="text-gray-300 leading-relaxed">
            Actively selects companies with superior ESG practices or those contributing to positive outcomes, such as renewable energy, sustainable agriculture, or social services.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Thematic Investing</h3>
          <p className="text-gray-300 leading-relaxed">
            Focuses on specific ESG themes like clean energy, water conservation, gender equality, or sustainable transportation. This approach targets sectors expected to benefit from ESG trends.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Integration</h3>
          <p className="text-gray-300 leading-relaxed">
            Incorporates ESG factors alongside traditional financial analysis to assess risk and return potential. This approach aims to improve risk-adjusted returns by considering ESG risks and opportunities.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">ESG Investment Vehicles</h2>
          <p className="text-gray-300 leading-relaxed">
            Several investment products facilitate ESG investing across different asset classes:
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">ESG Mutual Funds</h3>
          <p className="text-gray-300 leading-relaxed">
            Professionally managed funds that screen holdings based on ESG criteria. These funds vary widely in their ESG focus and screening methodologies, so investors should carefully review their prospectuses.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">ESG ETFs</h3>
          <p className="text-gray-300 leading-relaxed">
            Exchange-traded funds that track ESG-focused indices, offering diversification and lower fees than many mutual funds. Popular ESG ETFs include those tracking the MSCI KLD 400 Social Index or the Dow Jones Sustainability World Index.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Impact Investing</h3>
          <p className="text-gray-300 leading-relaxed">
            Seeks to generate positive social or environmental impact alongside financial returns. Impact investments can target specific outcomes like affordable housing, clean water, or microfinance.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Measuring ESG Performance</h2>
          <p className="text-gray-300 leading-relaxed">
            ESG performance measurement involves various ratings and scoring systems provided by organizations like MSCI, Sustainalytics, and Refinitiv. These ratings aggregate multiple ESG factors into composite scores, though methodologies differ significantly.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Investors should understand that ESG ratings may vary between providers due to different weightings and methodologies. It's important to look beyond scores and examine the specific ESG practices that matter most to your investment objectives.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Benefits and Challenges</h2>
          <p className="text-gray-300 leading-relaxed">
            ESG investing offers several potential benefits but also presents certain challenges:
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Benefits</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong>Risk Mitigation:</strong> Identifies and manages ESG-related risks that could impact performance</li>
            <li><strong>Alignment with Values:</strong> Allows investors to align portfolios with personal values</li>
            <li><strong>Long-term Performance:</strong> Sustainable practices may contribute to long-term value creation</li>
            <li><strong>Regulatory Preparedness:</strong> Anticipates future regulations related to ESG issues</li>
            <li><strong>Stakeholder Appeal:</strong> Attracts employees, customers, and partners who value sustainability</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Challenges</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong>Measurement Complexity:</strong> Varying ESG metrics and rating methodologies</li>
            <li><strong>Greenwashing:</strong> Companies may overstate their ESG credentials</li>
            <li><strong>Performance Concerns:</strong> Potential for lower returns in certain market conditions</li>
            <li><strong>Higher Costs:</strong> Some ESG funds charge higher fees for specialized research</li>
            <li><strong>Subjectivity:</strong> Different interpretations of what constitutes ESG factors</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Future of ESG Investing</h2>
          <p className="text-gray-300 leading-relaxed">
            ESG investing continues to evolve with increasing regulatory requirements, standardization efforts, and technological advances in ESG data collection and analysis. Climate change concerns, social justice movements, and governance scandals continue to drive demand for sustainable investment options.
          </p>

          <p className="text-gray-300 leading-relaxed">
            As ESG investing matures, expect greater transparency, improved data quality, and more sophisticated analytical tools that better integrate ESG factors with financial performance.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Takeaways</h2>
          <p className="text-gray-300 leading-relaxed">
            ESG investing provides a framework for building portfolios that consider environmental, social, and governance factors alongside financial returns. While ESG investing doesn't guarantee superior performance, it can help manage risks, align investments with values, and potentially capture opportunities in the growing sustainable economy. Investors should carefully evaluate ESG investment options, understand the methodologies used, and consider how ESG factors fit within their overall investment strategy.
          </p>

          <p className="text-gray-300 leading-relaxed">
            As ESG investing continues to grow, staying informed about developments in ESG standards, regulations, and investment products will be crucial for making effective investment decisions.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Link href="/blog/stocks/technical-analysis-tools-chart-patterns-trading" className="text-yellow-400 hover:text-yellow-300">
              ← Previous Article: Technical Analysis: Tools and Chart Patterns for Trading
            </Link>
            <Link href="/blog/stocks/market-volatility-managing-risk-during-uncertainty" className="text-yellow-400 hover:text-yellow-300">
              Next Article: Market Volatility: Managing Risk During Uncertain Times →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}