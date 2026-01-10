import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function BlogPost() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [relatedArticles, setRelatedArticles] = useState<{ id: string; title: string; slug: string; excerpt: string; }[]>([]);

  useEffect(() => {
    // Check if article is bookmarked
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const isBookmarked = bookmarks.some((article: any) => article.slug === router.pathname.split('/').pop());
    setBookmarked(isBookmarked);

    // Generate related articles
    const allArticles = [
      {
        id: '1',
        title: 'Spring 2026 Fashion Week Highlights',
        slug: 'spring-2026-fashion-week-highlights',
        excerpt: 'Key trends from the major fashion weeks around the globe...'
      },
      {
        id: '2',
        title: 'Sustainable Luxury Fashion Brands',
        slug: 'sustainable-luxury-fashion-brands',
        excerpt: 'Exploring eco-conscious luxury fashion labels making a difference...'
      },
      {
        id: '3',
        title: 'Building a Capsule Wardrobe',
        slug: 'building-a-capsule-wardrobe',
        excerpt: 'How to curate a timeless and versatile wardrobe...'
      }
    ];
    
    // Randomly select 2 articles
    const shuffled = [...allArticles].sort(() => 0.5 - Math.random());
    setRelatedArticles(shuffled.slice(0, 2));
  }, [router]);

  const toggleBookmark = () => {
    const articleData = {
      id: Math.random().toString(36).substr(2, 9),
      title: 'The Rise of Circular Fashion: Renting and Reselling',
      slug: router.pathname.split('/').pop(),
      date: '2026-01-02',
      category: 'Fashion & Style'
    };

    let bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const existingIndex = bookmarks.findIndex((article: any) => article.slug === articleData.slug);

    if (existingIndex >= 0) {
      bookmarks.splice(existingIndex, 1);
    } else {
      bookmarks.push(articleData);
    }

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>The Rise of Circular Fashion: Renting and Reselling | Premium Blog Platform</title>
        <meta name="description" content="Exploring the growing trend of sustainable fashion consumption" />
        <link rel="canonical" href="https://www.premiumblogplatform.com/blog/rise-circular-fashion-renting-reselling" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <header className="mb-8 sm:mb-12">
          <nav className="mb-6">
            <Link href="/" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
              <span className="mr-2">←</span> Home
            </Link>
          </nav>
          
          <div className="flex flex-wrap items-center justify-between mb-6">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 sm:mb-0">
              Fashion & Style
            </span>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleBookmark}
                className={`p-2 rounded-full transition-colors ${
                  bookmarked 
                    ? 'text-yellow-400 bg-yellow-400/10' 
                    : 'text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10'
                }`}
                aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark article'}
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
          
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The Rise of Circular Fashion: Renting and Reselling
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-400 text-sm mb-6">
            <span className="mr-4">January 2, 2026</span>
            <span>8 min read</span>
          </div>
        </header>

        <main className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            The fashion industry is undergoing a fundamental transformation as consumers embrace circular economy principles that prioritize reuse, rental, and resale over traditional ownership models. This shift represents a significant departure from fast fashion's linear model of produce-use-dispose, instead promoting sustainable consumption patterns that extend garment lifecycles and reduce environmental impact. The circular fashion movement is reshaping how consumers interact with clothing, creating new marketplaces and business models that align with environmental consciousness and economic efficiency.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Understanding Circular Fashion</h2>
          
          <p className="mb-6 text-gray-200">
            Circular fashion encompasses business models and consumer behaviors that keep clothing in circulation for as long as possible, maximizing their value before returning materials to the production cycle. This approach contrasts sharply with the traditional linear model that treats clothing as disposable commodities with short lifespans.
          </p>
          
          <p className="mb-6 text-gray-200">
            The circular fashion ecosystem includes clothing rental services, peer-to-peer resale platforms, clothing swaps, and take-back programs where brands reclaim used garments for recycling or refurbishment. These models reduce the demand for new production while extending the utility of existing garments.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Rental Revolution</h2>
          
          <p className="mb-6 text-gray-200">
            Clothing rental services have emerged as a major force in circular fashion, offering consumers access to luxury and special occasion items without permanent ownership. Companies like Rent the Runway pioneered this market, demonstrating that consumers value variety and access over possession for certain categories of clothing.
          </p>
          
          <p className="mb-6 text-gray-200">
            The rental model addresses several consumer pain points: storage limitations, cost of luxury items, and desire for variety without commitment. For special occasions like weddings or corporate events, rental provides high-quality options that would be expensive to purchase but wasteful to wear once.
          </p>
          
          <p className="mb-6 text-gray-200">
            Subscription-based rental services have expanded beyond special occasion wear to include everyday fashion, challenging traditional retail models. These services appeal to consumers seeking variety and convenience while reducing closet clutter and environmental impact.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Peer-to-Peer Resale Growth</h2>
          
          <p className="mb-6 text-gray-200">
            Platforms like Poshmark, ThredUp, and Vinted have democratized fashion resale, enabling individuals to buy and sell secondhand clothing easily. These platforms have grown rapidly, particularly among younger consumers who view vintage and secondhand items as fashion-forward rather than outdated.
          </p>
          
          <p className="mb-6 text-gray-200">
            The resale market has expanded beyond budget-conscious consumers to include luxury shoppers seeking authenticated vintage pieces and rare finds. This trend has created new market segments where secondhand luxury items command significant prices, sometimes approaching original retail values.
          </p>
          
          <p className="mb-6 text-gray-200">
            Social commerce features on these platforms create communities around fashion sharing, making resale feel more like social engagement than mere transactions. This community aspect encourages continued participation and builds loyalty to circular fashion practices.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Brand Integration and Take-Back Programs</h2>
          
          <p className="mb-6 text-gray-200">
            Major fashion brands are integrating circular principles into their business models through take-back programs that encourage customers to return used items for recycling or resale. Patagonia's Common Threads Initiative and H&M's garment collecting program exemplify this approach.
          </p>
          
          <p className="mb-6 text-gray-200">
            Some luxury brands are launching certified pre-owned programs, recognizing that resale doesn't diminish brand value but rather expands their market reach. These programs provide authentication and quality assurance that builds consumer confidence in pre-owned luxury items.
          </p>
          
          <p className="mb-6 text-gray-200">
            Circular initiatives also serve as valuable data sources, helping brands understand product longevity, customer preferences, and usage patterns. This information can inform future design decisions and improve product durability and relevance.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Environmental and Economic Benefits</h2>
          
          <p className="mb-6 text-gray-200">
            Circular fashion significantly reduces environmental impact by extending garment lifecycles and decreasing demand for new production. The fashion industry is responsible for approximately 10% of global carbon emissions, making circular practices crucial for environmental sustainability.
          </p>
          
          <p className="mb-6 text-gray-200">
            Water consumption in textile production is another critical concern addressed by circular models. Extending garment lifecycles reduces the need for water-intensive production processes, contributing to water conservation efforts globally.
          </p>
          
          <p className="mb-6 text-gray-200">
            Economically, circular fashion models provide consumers with access to higher-quality items at lower costs while creating new revenue streams for brands and individuals. This democratizes access to luxury and quality fashion while supporting sustainable consumption patterns.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Challenges and Solutions</h2>
          
          <p className="mb-6 text-gray-200">
            Despite growth, circular fashion faces challenges including hygiene concerns, sizing inconsistencies across platforms, and quality verification. These issues require technological solutions and standardized processes to build consumer confidence.
          </p>
          
          <p className="mb-6 text-gray-200">
            Authentication of luxury items remains a significant challenge, though blockchain technology and advanced verification systems are emerging as potential solutions. These technologies can create transparent records of garment provenance and authenticity.
          </p>
          
          <p className="mb-6 text-gray-200">
            Consumer education about garment care and maintenance is essential for extending item lifecycles. Brands and platforms increasingly provide care instructions and maintenance services to preserve garment quality throughout extended use periods.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Future Outlook</h2>
          
          <p className="mb-6 text-gray-200">
            The circular fashion market is projected to continue rapid growth as environmental consciousness increases and technology enables more efficient resale and rental platforms. Integration with augmented reality may soon allow virtual try-ons for online resale, reducing return rates and increasing satisfaction.
          </p>
          
          <p className="mb-6 text-gray-200">
            Regulatory support for circular practices is emerging in various markets, with potential legislation encouraging or requiring take-back programs and sustainable production practices. These policies will likely accelerate industry adoption of circular models.
          </p>
          
          <p className="mb-6 text-gray-200">
            As circular fashion matures, we can expect more sophisticated integration between rental, resale, and production systems, creating seamless experiences that prioritize sustainability without compromising fashion access or quality.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusion</h2>
          
          <p className="mb-6 text-gray-200">
            The rise of circular fashion represents a fundamental shift in how consumers relate to clothing, prioritizing access and sustainability over ownership. This transformation benefits consumers through cost savings and variety, brands through new revenue streams and customer insights, and the environment through reduced resource consumption.
          </p>
          
          <p className="mb-6 text-gray-200">
            Success in circular fashion requires continued innovation in technology, logistics, and consumer education. As these elements mature, circular fashion models will likely become standard practice rather than innovative alternatives.
          </p>
          
          <p className="mb-6 text-gray-200">
            The integration of renting and reselling into mainstream fashion consumption signals a broader cultural shift toward more conscious and sustainable living. This evolution promises to reshape the entire fashion ecosystem for greater environmental and economic sustainability.
          </p>
        </main>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((article: any) => (
              <Link 
                href={`/blog/${article.slug}`} 
                key={article.id}
                className="block bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 hover:bg-white/20 transition-all"
              >
                <h4 className="font-bold text-white mb-2 hover:text-yellow-400 transition-colors">
                  {article.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {article.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/blog" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
            Explore More Articles
          </Link>
        </div>
      </div>
    </div>
  );
}