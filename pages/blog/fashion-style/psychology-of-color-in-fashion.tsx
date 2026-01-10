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
        title: 'Minimalist Fashion: Less is More Philosophy',
        slug: 'minimalist-fashion-less-is-more-philosophy',
        excerpt: 'Embracing simplicity and quality over quantity in fashion choices...'
      },
      {
        id: '2',
        title: 'Sustainable Luxury Fashion Brands',
        slug: 'sustainable-luxury-fashion-brands',
        excerpt: 'Exploring eco-conscious luxury fashion labels making a difference...'
      },
      {
        id: '3',
        title: 'The Art of Accessorizing: Elevating Your Look',
        slug: 'art-of-accessorizing-elevating-your-look',
        excerpt: 'How accessories can transform and personalize any outfit...'
      }
    ];
    
    // Randomly select 2 articles
    const shuffled = [...allArticles].sort(() => 0.5 - Math.random());
    setRelatedArticles(shuffled.slice(0, 2));
  }, [router]);

  const toggleBookmark = () => {
    const articleData = {
      id: Math.random().toString(36).substr(2, 9),
      title: 'The Psychology of Color in Fashion',
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
        <title>The Psychology of Color in Fashion | Premium Blog Platform</title>
        <meta name="description" content="How colors influence mood, perception, and personal expression" />
        <link rel="canonical" href="https://www.premiumblogplatform.com/blog/psychology-of-color-in-fashion" />
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
            The Psychology of Color in Fashion
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-400 text-sm mb-6">
            <span className="mr-4">January 4, 2026</span>
            <span>9 min read</span>
          </div>
        </header>

        <main className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Color psychology in fashion explores how different hues influence mood, perception, and social interactions. The colors we choose to wear communicate non-verbal messages about our personality, intentions, and emotional state. Understanding the psychological impact of color allows individuals to make more intentional fashion choices that align with their desired image and the contexts in which they find themselves.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Science of Color Perception</h2>
          
          <p className="mb-6 text-gray-200">
            Color perception involves complex neurological processes that connect visual stimuli to emotional and psychological responses. Different wavelengths of light trigger specific reactions in the brain, influencing hormone production, heart rate, and cognitive function. These physiological responses form the basis of color psychology in fashion.
          </p>
          
          <p className="mb-6 text-gray-200">
            Cultural backgrounds and personal experiences also shape color associations, making the psychology of color both universal and individually nuanced. What evokes confidence in one culture might suggest mourning in another, highlighting the importance of context in color selection.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Red: Power and Passion</h2>
          
          <p className="mb-6 text-gray-200">
            Red is perhaps the most psychologically powerful color, associated with energy, passion, and authority. In fashion, red clothing can increase perceived confidence and attract attention, making it ideal for leadership roles or situations requiring assertiveness.
          </p>
          
          <p className="mb-6 text-gray-200">
            Research shows that wearing red can increase heart rate and adrenaline production, potentially enhancing performance in competitive or challenging situations. However, excessive use of red may be perceived as aggressive or overwhelming in certain contexts.
          </p>
          
          <p className="mb-6 text-gray-200">
            Strategic use of red accessories can provide the psychological benefits without overwhelming an outfit. Red lipstick, a red scarf, or red shoes can add impact to neutral ensembles while maintaining professionalism.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Blue: Trust and Calm</h2>
          
          <p className="mb-6 text-gray-200">
            Blue evokes feelings of trust, stability, and calm, making it a popular choice for professional environments. Navy blue, in particular, is associated with authority and competence, frequently worn by business leaders and in formal settings.
          </p>
          
          <p className="mb-6 text-gray-200">
            Lighter blues promote feelings of peace and openness, making them suitable for collaborative environments or situations requiring approachability. Darker blues convey seriousness and professionalism without the formality of black.
          </p>
          
          <p className="mb-6 text-gray-200">
            Blue clothing can help the wearer feel more composed and focused, potentially improving performance in detail-oriented tasks or high-pressure situations.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Green: Balance and Growth</h2>
          
          <p className="mb-6 text-gray-200">
            Green represents nature, growth, and balance, creating feelings of harmony and renewal. In fashion, green can suggest environmental consciousness, creativity, and a balanced perspective on life.
          </p>
          
          <p className="mb-6 text-gray-200">
            Studies indicate that green can reduce eye strain and promote relaxation, making it suitable for environments where stress reduction is important. It also symbolizes growth and renewal, ideal for new beginnings or career transitions.
          </p>
          
          <p className="mb-6 text-gray-200">
            Olive greens and earth tones are particularly versatile, working well in both casual and professional contexts while maintaining the psychological benefits of the color family.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Black: Sophistication and Authority</h2>
          
          <p className="mb-6 text-gray-200">
            Black represents sophistication, authority, and elegance in fashion. It creates an illusion of slimness and provides a neutral backdrop that allows other elements to stand out. Black is often chosen for formal occasions and professional settings.
          </p>
          
          <p className="mb-6 text-gray-200">
            Psychologically, black can provide a sense of power and confidence to the wearer while commanding respect from others. However, excessive use of black may appear intimidating or melancholic in social contexts requiring warmth and approachability.
          </p>
          
          <p className="mb-6 text-gray-200">
            The versatility of black makes it a cornerstone of most wardrobes, providing a foundation that works with other colors and remains stylish across seasons and trends.
          </p>

          <blockquote className="border-l-4 border-yellow-500 pl-6 py-2 my-8 text-gray-200 italic">
            Color in fashion is not merely aesthetic; it's a form of non-verbal communication that shapes how we feel about ourselves and how others perceive us.
          </blockquote>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Yellow: Optimism and Creativity</h2>
          
          <p className="mb-6 text-gray-200">
            Yellow evokes feelings of optimism, creativity, and warmth, making it ideal for social situations and creative environments. However, its high visibility and intensity require careful use to avoid overwhelming effects.
          </p>
          
          <p className="mb-6 text-gray-200">
            Research suggests that yellow can stimulate mental activity and generate feelings of cheerfulness, making it beneficial for creative work or social gatherings. However, in professional contexts, yellow may be perceived as unprofessional if used excessively.
          </p>
          
          <p className="mb-6 text-gray-200">
            Subtle yellow accessories or muted tones like cream and beige provide the positive psychological benefits of the color family while maintaining versatility and appropriateness across contexts.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Personal Color Analysis</h2>
          
          <p className="mb-6 text-gray-200">
            Individual color preferences are influenced by skin tone, hair color, and personal associations. Understanding which colors complement your natural coloring helps you look and feel your best while maximizing the psychological benefits of your clothing choices.
          </p>
          
          <p className="mb-6 text-gray-200">
            Seasonal color analysis categorizes individuals into color palettes based on undertones and contrast levels. This system helps identify which colors enhance natural features and create the most flattering appearance.
          </p>
          
          <p className="mb-6 text-gray-200">
            Personal experiences and cultural background also influence color preferences, making color psychology both universal and individually specific. What feels empowering to one person may feel restrictive to another.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Contextual Color Considerations</h2>
          
          <p className="mb-6 text-gray-200">
            Professional environments may require more conservative color choices, while creative industries offer greater flexibility for expressive color use. Consider the cultural and organizational norms when selecting colors for specific contexts.
          </p>
          
          <p className="mb-6 text-gray-200">
            Seasonal appropriateness also influences color selection, with lighter, brighter colors associated with spring and summer, and deeper, richer tones preferred for fall and winter.
          </p>
          
          <p className="mb-6 text-gray-200">
            Personal goals and desired outcomes should influence color choices. Wearing colors that align with your intentions can provide psychological advantages in various situations.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusion</h2>
          
          <p className="mb-6 text-gray-200">
            The psychology of color in fashion extends far beyond aesthetic preference, influencing both the wearer's psychological state and how others perceive them. Understanding these effects allows for more intentional and effective fashion choices.
          </p>
          
          <p className="mb-6 text-gray-200">
            Success lies in balancing psychological effects with personal style, cultural appropriateness, and practical considerations. The most effective use of color psychology in fashion is subtle and thoughtful, enhancing natural beauty and personal goals without overwhelming the overall aesthetic.
          </p>
          
          <p className="mb-6 text-gray-200">
            As awareness of color psychology grows, individuals can make more empowered fashion choices that support their emotional well-being, professional goals, and personal expression.
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