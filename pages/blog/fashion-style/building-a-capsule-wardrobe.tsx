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
        title: 'Minimalist Fashion: Less is More Philosophy',
        slug: 'minimalist-fashion-less-is-more-philosophy',
        excerpt: 'Embracing simplicity and quality over quantity in fashion choices...'
      }
    ];
    
    // Randomly select 2 articles
    const shuffled = [...allArticles].sort(() => 0.5 - Math.random());
    setRelatedArticles(shuffled.slice(0, 2));
  }, [router]);

  const toggleBookmark = () => {
    const articleData = {
      id: Math.random().toString(36).substr(2, 9),
      title: 'Building a Capsule Wardrobe',
      slug: router.pathname.split('/').pop(),
      date: '2026-01-06',
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
        <title>Building a Capsule Wardrobe | Premium Blog Platform</title>
        <meta name="description" content="How to curate a timeless and versatile wardrobe" />
        <link rel="canonical" href="https://www.premiumblogplatform.com/blog/building-a-capsule-wardrobe" />
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
            Building a Capsule Wardrobe
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-400 text-sm mb-6">
            <span className="mr-4">January 6, 2026</span>
            <span>7 min read</span>
          </div>
        </header>

        <main className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            A capsule wardrobe represents a curated collection of essential, versatile, and timeless pieces that can be mixed and matched to create countless outfits. This approach to fashion emphasizes quality over quantity, promoting sustainable consumption while simplifying daily dressing decisions. Building a successful capsule wardrobe requires thoughtful planning and understanding of personal style, lifestyle needs, and color preferences.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Understanding Capsule Wardrobe Principles</h2>
          
          <p className="mb-6 text-gray-200">
            The concept of a capsule wardrobe originated in the 1970s with Susie Faux, owner of a London boutique. The traditional capsule consists of 37 pieces: 19 outer garments (including tops, blazers, skirts, pants, and dresses), 6 pairs of shoes, and 12 accessories. However, modern interpretations adapt these numbers to individual lifestyles and preferences.
          </p>
          
          <p className="mb-6 text-gray-200">
            The core principle is to select items that work harmoniously together, creating multiple outfit combinations from a limited number of pieces. This approach reduces decision fatigue, saves time, and promotes mindful consumption habits that align with sustainable fashion practices.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Assessing Your Lifestyle and Needs</h2>
          
          <p className="mb-6 text-gray-200">
            Before building a capsule wardrobe, analyze your daily activities and dress code requirements. Consider whether your lifestyle is primarily casual, business formal, or a mix of various settings. This assessment ensures that your capsule contains appropriate pieces for your specific needs.
          </p>
          
          <p className="mb-6 text-gray-200">
            Evaluate your climate and seasonal variations, as these factors influence the types of garments you'll need. Consider layering pieces that can adapt to temperature changes throughout the day or across seasons.
          </p>
          
          <p className="mb-6 text-gray-200">
            Take inventory of your current wardrobe, identifying pieces that you wear frequently and those that remain unworn. This exercise reveals your authentic style preferences and helps determine which items deserve a place in your capsule.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Color Coordination and Neutrals</h2>
          
          <p className="mb-6 text-gray-200">
            A successful capsule wardrobe relies on a cohesive color palette that allows all pieces to work together. Start with neutral foundations like black, white, navy, gray, and beige, which provide maximum versatility and form the base of most capsule collections.
          </p>
          
          <p className="mb-6 text-gray-200">
            Add a few carefully chosen accent colors that complement your skin tone and personal style. Limit these accent colors to 2-3 hues to maintain cohesion. Consider seasonal colors that reflect your personality while maintaining versatility.
          </p>
          
          <p className="mb-6 text-gray-200">
            When selecting colors, think about how they photograph for professional settings and how they complement your accessories. Consistent color coordination increases the number of viable outfit combinations from your limited pieces.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Essential Pieces for Any Capsule</h2>
          
          <p className="mb-6 text-gray-200">
            A well-designed capsule includes foundational pieces that form the basis of most outfits. These typically include a white button-down shirt, a well-fitted blazer, dark jeans, a little black dress, and comfortable flats. These items serve as anchors around which other pieces can be styled.
          </p>
          
          <p className="mb-6 text-gray-200">
            Include a mix of casual and formal options to accommodate various occasions. A capsule should contain at least one suit or blazer for professional settings, multiple tops for different seasons, and versatile bottoms that work across contexts.
          </p>
          
          <p className="mb-6 text-gray-200">
            Consider the "one-in, one-out" rule to maintain capsule size. When adding new pieces, remove an existing item that no longer serves your needs or reflects your style evolution.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Quality Over Quantity</h2>
          
          <p className="mb-6 text-gray-200">
            Invest in high-quality pieces that will withstand frequent wear and multiple seasons. Research brands known for durability and ethical production practices. Pay attention to fabric composition, construction details, and care requirements.
          </p>
          
          <p className="mb-6 text-gray-200">
            Choose natural fibers and quality synthetics that maintain their appearance and shape over time. Well-made pieces may cost more initially but provide better value through longevity and continued wearability.
          </p>
          
          <p className="mb-6 text-gray-200">
            Consider the total cost per wear when evaluating potential purchases. A $200 jacket worn 100 times costs $2 per wear, while a $20 item worn twice costs $10 per wear.
          </p>

          <blockquote className="border-l-4 border-yellow-500 pl-6 py-2 my-8 text-gray-200 italic">
            A capsule wardrobe is not about limiting self-expression; it's about expressing your authentic style with intention and purpose.
          </blockquote>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Seasonal Adaptation</h2>
          
          <p className="mb-6 text-gray-200">
            Adapt your capsule for seasonal changes by rotating pieces rather than completely changing your collection. Layering items like cardigans, blazers, and scarves can transform summer pieces for cooler weather.
          </p>
          
          <p className="mb-6 text-gray-200">
            Consider a core capsule that remains constant year-round, supplemented by seasonal additions. This approach maintains the capsule's integrity while accommodating weather and occasion changes.
          </p>
          
          <p className="mb-6 text-gray-200">
            Store off-season items properly to maintain their condition and prevent damage. This practice also helps you focus on the current season's possibilities.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Maintaining and Evolving Your Capsule</h2>
          
          <p className="mb-6 text-gray-200">
            Regularly assess your capsule's effectiveness by noting which pieces you wear most and which remain unused. This information guides future additions and helps refine your understanding of your authentic style.
          </p>
          
          <p className="mb-6 text-gray-200">
            Allow your capsule to evolve gradually as your lifestyle, preferences, or body changes. Resist the temptation to make dramatic changes; instead, make thoughtful additions and subtractions over time.
          </p>
          
          <p className="mb-6 text-gray-200">
            Seasonal reviews provide opportunities to refresh your capsule without abandoning its foundational principles. This practice ensures your wardrobe continues to serve your needs effectively.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Common Mistakes to Avoid</h2>
          
          <p className="mb-6 text-gray-200">
            Avoid including trendy pieces that may quickly become outdated. Focus on timeless silhouettes and classic designs that will remain stylish across multiple seasons.
          </p>
          
          <p className="mb-6 text-gray-200">
            Don't select pieces based solely on size or price if they don't align with your lifestyle or style preferences. A capsule should enhance your daily life, not complicate it.
          </p>
          
          <p className="mb-6 text-gray-200">
            Resist the urge to purchase too many pieces initially. Building a capsule gradually allows you to understand which items work best for your specific needs and preferences.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusion</h2>
          
          <p className="mb-6 text-gray-200">
            Building a capsule wardrobe is an investment in both personal style and sustainable fashion practices. This approach simplifies daily routines, reduces environmental impact, and promotes a more intentional relationship with clothing.
          </p>
          
          <p className="mb-6 text-gray-200">
            The key to success lies in understanding your authentic style preferences and lifestyle needs, then selecting quality pieces that serve multiple purposes. A well-curated capsule becomes more valuable over time as it continues to meet your changing needs while reflecting your personal aesthetic.
          </p>
          
          <p className="mb-6 text-gray-200">
            Remember that a capsule wardrobe is a personal journey rather than a rigid formula. Adapt the concept to your specific circumstances and preferences, allowing it to evolve as your life changes. The goal is to create a wardrobe that supports your lifestyle while reflecting your values and aesthetic sensibilities.
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