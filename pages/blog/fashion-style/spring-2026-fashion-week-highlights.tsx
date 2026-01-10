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
        title: 'Sustainable Luxury Fashion Brands',
        slug: 'sustainable-luxury-fashion-brands',
        excerpt: 'Exploring eco-conscious luxury fashion labels making a difference...'
      },
      {
        id: '2',
        title: 'Building a Capsule Wardrobe',
        slug: 'building-a-capsule-wardrobe',
        excerpt: 'How to curate a timeless and versatile wardrobe...'
      },
      {
        id: '3',
        title: 'Street Style Evolution: From Sidewalks to Runways',
        slug: 'street-style-evolution-sidewalks-runways',
        excerpt: 'How urban fashion influences high-end design and runway trends...'
      }
    ];
    
    // Randomly select 2 articles
    const shuffled = [...allArticles].sort(() => 0.5 - Math.random());
    setRelatedArticles(shuffled.slice(0, 2));
  }, [router]);

  const toggleBookmark = () => {
    const articleData = {
      id: Math.random().toString(36).substr(2, 9),
      title: 'Spring 2026 Fashion Week Highlights',
      slug: router.pathname.split('/').pop(),
      date: '2026-01-08',
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
        <title>Spring 2026 Fashion Week Highlights | Premium Blog Platform</title>
        <meta name="description" content="Key trends from the major fashion weeks around the globe" />
        <link rel="canonical" href="https://www.premiumblogplatform.com/blog/spring-2026-fashion-week-highlights" />
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
            Spring 2026 Fashion Week Highlights
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-400 text-sm mb-6">
            <span className="mr-4">January 8, 2026</span>
            <span>6 min read</span>
          </div>
        </header>

        <main className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            The Spring 2026 fashion weeks across New York, London, Milan, and Paris showcased an unprecedented fusion of sustainability and luxury, with designers embracing innovative materials and conscious production methods. This season marked a pivotal shift toward responsible fashion without compromising on glamour or creativity, setting the tone for the year ahead.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Sustainable Innovation Takes Center Stage</h2>
          
          <p className="mb-6 text-gray-200">
            The Spring 2026 collections revealed a significant emphasis on sustainable practices, with major fashion houses presenting pieces crafted from recycled ocean plastics, lab-grown leather, and innovative bio-materials. Stella McCartney led the charge with her entire collection featuring carbon-neutral materials, while Gucci introduced a new line of garments made from mushroom-based leather alternatives.
          </p>
          
          <p className="mb-6 text-gray-200">
            Color palettes reflected the environmental consciousness, with earth tones, ocean blues, and forest greens dominating the runways. These hues weren't merely aesthetic choices but symbolic representations of the industry's commitment to environmental stewardship.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Technology Meets Tradition</h2>
          
          <p className="mb-6 text-gray-200">
            Digital printing technologies reached new heights of sophistication, allowing designers to create intricate patterns that would have been impossible just a few seasons prior. Burberry unveiled garments featuring augmented reality elements that came alive when viewed through smartphone cameras, blending traditional craftsmanship with cutting-edge technology.
          </p>
          
          <p className="mb-6 text-gray-200">
            3D knitting techniques transformed the construction process, enabling seamless garment creation that reduces waste and increases comfort. These innovations were particularly evident in the knitwear collections, where complex textures and shapes were achieved without traditional seaming.
          </p>
          
          <p className="mb-6 text-gray-200">
            Artificial intelligence played a subtle but significant role in design processes, with several houses using algorithmic pattern generation to create unique textile designs that maintained artistic integrity while optimizing material usage.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Silhouettes and Proportions</h2>
          
          <p className="mb-6 text-gray-200">
            The Spring 2026 season saw a return to more structured silhouettes, with shoulder pads and defined waistlines making a comeback. However, these classic elements were reimagined with contemporary sensibilities, creating looks that felt both nostalgic and forward-thinking.
          </p>
          
          <p className="mb-6 text-gray-200">
            Oversized blazers paired with tailored shorts became a signature look for many collections, offering versatility and comfort without sacrificing style. This trend emphasized the growing importance of functional luxury in contemporary fashion.
          </p>
          
          <p className="mb-6 text-gray-200">
            Maxi dresses featured prominently, but with modern twists such as asymmetrical hems, architectural cutouts, and innovative draping techniques that created visual interest while maintaining elegance.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Accessories and Details</h2>
          
          <p className="mb-6 text-gray-200">
            Accessories took on sculptural qualities, with bags designed as wearable art pieces that doubled as fashion statements. Jewelry featured bold geometric shapes and sustainable materials, including recycled metals and ethically sourced stones.
          </p>
          
          <p className="mb-6 text-gray-200">
            Footwear embraced comfort without compromising style, with elevated sneakers and platform sandals becoming wardrobe essentials. Many designs incorporated recycled materials and innovative cushioning systems.
          </p>
          
          <p className="mb-6 text-gray-200">
            Hair and makeup trends emphasized natural beauty enhanced by subtle artistry, with dewy complexions and bold browns and burgundies on the lips reflecting the season's earth-toned aesthetic.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Cultural Fusion and Diversity</h2>
          
          <p className="mb-6 text-gray-200">
            Spring 2026 collections celebrated global influences, with designers drawing inspiration from diverse cultural traditions while ensuring respectful representation. African prints, Asian textiles, and Latin American patterns were woven into contemporary designs in ways that honored their origins.
          </p>
          
          <p className="mb-6 text-gray-200">
            The casting for shows reflected the industry's commitment to inclusivity, with models of various ages, sizes, and ethnicities showcasing the collections. This diversity wasn't tokenistic but integral to the narrative each designer wished to convey.
          </p>
          
          <p className="mb-6 text-gray-200">
            Collaborations between Western fashion houses and traditional artisans from around the world resulted in unique pieces that bridged cultural gaps and supported artisan communities globally.
          </p>

          <blockquote className="border-l-4 border-yellow-500 pl-6 py-2 my-8 text-gray-200 italic">
            Fashion is not just about clothes; it's about the stories we tell ourselves and the values we choose to wear.
          </blockquote>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Sustainability Beyond Materials</h2>
          
          <p className="mb-6 text-gray-200">
            The sustainability movement extended beyond materials to encompass production practices, labor conditions, and circular economy principles. Several brands announced initiatives to buy back worn garments for recycling or repurposing, creating closed-loop systems.
          </p>
          
          <p className="mb-6 text-gray-200">
            Transparency in supply chains became a competitive advantage, with brands using blockchain technology to provide customers with detailed information about the origins and production processes of their garments.
          </p>
          
          <p className="mb-6 text-gray-200">
            Rental and subscription models gained momentum, with several established brands launching their own rental services to promote garment longevity and reduce waste.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusion</h2>
          
          <p className="mb-6 text-gray-200">
            Spring 2026 Fashion Week represented a watershed moment in the industry's evolution, demonstrating that luxury and sustainability are not mutually exclusive. The collections showcased a mature fashion industry that understands its environmental and social responsibilities while continuing to inspire and innovate.
          </p>
          
          <p className="mb-6 text-gray-200">
            The trends emerging from these shows will influence consumer preferences and purchasing decisions for months to come, as shoppers increasingly seek items that align with their values and reflect their commitment to a more sustainable future.
          </p>
          
          <p className="mb-6 text-gray-200">
            As the fashion industry continues to evolve, the Spring 2026 collections serve as a blueprint for responsible luxury that doesn't compromise on creativity, beauty, or desirability. These shows proved that the future of fashion is bright, sustainable, and incredibly stylish.
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