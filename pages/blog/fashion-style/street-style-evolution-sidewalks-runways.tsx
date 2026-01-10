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
      title: 'Street Style Evolution: From Sidewalks to Runways',
      slug: router.pathname.split('/').pop(),
      date: '2026-01-04',
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
        <title>Street Style Evolution: From Sidewalks to Runways | Premium Blog Platform</title>
        <meta name="description" content="How urban fashion influences high-end design and runway trends" />
        <link rel="canonical" href="https://www.premiumblogplatform.com/blog/street-style-evolution-sidewalks-runways" />
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
            Street Style Evolution: From Sidewalks to Runways
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-400 text-sm mb-6">
            <span className="mr-4">January 4, 2026</span>
            <span>7 min read</span>
          </div>
        </header>

        <main className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Street style has fundamentally transformed the fashion landscape, evolving from underground movements to legitimate sources of inspiration for high-end designers. What began as grassroots fashion experimentation has become a driving force that shapes seasonal collections and defines contemporary aesthetics. The relationship between street fashion and haute couture has grown increasingly symbiotic, with designers drawing inspiration from everyday style icons and street photographers capturing moments that influence global fashion trends.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Origins of Street Style</h2>
          
          <p className="mb-6 text-gray-200">
            Street style emerged in the mid-20th century as individuals began expressing their personalities through fashion outside traditional frameworks. The 1960s saw youth culture reject conservative dress codes, while the 1970s and 1980s brought punk, hip-hop, and goth movements that established street fashion as a form of rebellion and identity expression. These movements proved that fashion innovation wasn't confined to Parisian salons or Italian ateliers.
          </p>
          
          <p className="mb-6 text-gray-200">
            Early street style pioneers like Twiggy, David Bowie, and later, hip-hop artists, demonstrated how individual style could influence mass fashion consciousness. Their looks transcended their immediate circles, eventually inspiring mainstream designers who recognized the authenticity and cultural resonance of street-driven aesthetics.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Digital Age Transformation</h2>
          
          <p className="mb-6 text-gray-200">
            The internet and social media revolutionized street style's reach and influence. Platforms like Instagram democratized fashion photography, allowing anyone to become a street style influencer. This shift broke down the barriers between fashion insiders and outsiders, making sidewalk fashion as influential as runway presentations.
          </p>
          
          <p className="mb-6 text-gray-200">
            Street style photography evolved from Bill Cunningham's pioneering work at New York Fashion Week to millions of daily street style images shared globally. This democratization accelerated trend cycles and created new pathways for fashion discovery, with viral street looks sometimes influencing designer collections within weeks.
          </p>
          
          <p className="mb-6 text-gray-200">
            The rise of influencers and micro-influencers meant that street style became more diverse and inclusive, representing varied body types, ethnicities, and economic backgrounds. This diversity enriched the fashion ecosystem, pushing designers to consider broader market segments and cultural perspectives.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Influence on High Fashion</h2>
          
          <p className="mb-6 text-gray-200">
            Contemporary designers actively seek street style inspiration, often incorporating elements like oversized silhouettes, athletic wear integration, and gender-fluid approaches that originated in street fashion. Luxury brands collaborate with streetwear labels, recognizing that street credibility can enhance brand desirability among younger consumers.
          </p>
          
          <p className="mb-6 text-gray-200">
            The sneaker phenomenon exemplifies street style's influence on luxury fashion. What began as athletic footwear evolved into collectible luxury items, with collaborations between high-end designers and street-focused brands becoming major commercial successes.
          </p>
          
          <p className="mb-6 text-gray-200">
            Street style's emphasis on individuality and personal narrative has pushed luxury fashion toward more customizable and personalizable offerings. Consumers increasingly expect fashion to reflect their unique identities rather than conform to prescribed aesthetics.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Regional Variations and Cultural Fusion</h2>
          
          <p className="mb-6 text-gray-200">
            Street style varies significantly across cultures, creating rich fusions when globalized. Tokyo's Harajuku district, Seoul's Gangnam, London's Shoreditch, and Brooklyn's neighborhoods each contribute distinctive elements to global street fashion vocabulary.
          </p>
          
          <p className="mb-6 text-gray-200">
            These regional variations often blend traditional cultural elements with contemporary global fashion, creating hybrid styles that designers incorporate into international collections. This cross-pollination has made street style a powerful force for cultural exchange in fashion.
          </p>
          
          <p className="mb-6 text-gray-200">
            The globalization of street style has also highlighted the importance of cultural sensitivity in fashion design, as designers navigate between appreciation and appropriation when drawing inspiration from diverse street style traditions.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Future Directions</h2>
          
          <p className="mb-6 text-gray-200">
            Sustainability concerns are reshaping street style, with increasing emphasis on thrifting, upcycling, and conscious consumption. This movement influences luxury brands to reconsider their production approaches and embrace circular fashion principles.
          </p>
          
          <p className="mb-6 text-gray-200">
            Technology integration continues advancing, with smart fabrics and wearable technology beginning to appear in street fashion before entering luxury markets. This trend suggests street style will continue driving innovation in fashion functionality and aesthetics.
          </p>
          
          <p className="mb-6 text-gray-200">
            As street style matures, its relationship with high fashion becomes more sophisticated, moving beyond simple borrowing toward collaborative evolution. Both spheres increasingly recognize that their interconnection creates richer, more relevant fashion narratives.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusion</h2>
          
          <p className="mb-6 text-gray-200">
            The evolution of street style from sidewalk to runway represents a fundamental shift in fashion's power dynamics. Rather than flowing unidirectionally from high fashion to streets, influence now moves bidirectionally, creating a more democratic and dynamic fashion ecosystem.
          </p>
          
          <p className="mb-6 text-gray-200">
            This evolution has democratized fashion influence, recognizing that authentic style can emerge anywhere and impact global trends. As street style continues evolving, its role as fashion's primary innovation laboratory remains secure, continuing to drive creativity and relevance in high fashion.
          </p>
          
          <p className="mb-6 text-gray-200">
            The future promises even greater integration between street and high fashion, with both spheres learning from each other's strengths. This symbiosis ensures fashion remains connected to real-life experiences while maintaining its aspirational and artistic dimensions.
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