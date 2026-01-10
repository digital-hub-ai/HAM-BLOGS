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
        title: 'Sustainable Home Design: Eco-Friendly Choices',
        slug: 'sustainable-home-design-eco-friendly-choices',
        excerpt: 'How to create an environmentally conscious living space...'
      },
      {
        id: '2',
        title: 'Maximizing Small Spaces: Apartment Living Tips',
        slug: 'maximizing-small-spaces-apartment-living-tips',
        excerpt: 'Creative solutions for making the most of compact living spaces...'
      },
      {
        id: '3',
        title: 'Color Psychology in Home Decor',
        slug: 'color-psychology-in-home-decor',
        excerpt: 'How colors affect mood and behavior in different rooms...'
      }
    ];
    
    // Randomly select 2 articles
    const shuffled = [...allArticles].sort(() => 0.5 - Math.random());
    setRelatedArticles(shuffled.slice(0, 2));
  }, [router]);

  const toggleBookmark = () => {
    const articleData = {
      id: Math.random().toString(36).substr(2, 9),
      title: 'Indoor Plants and Air Quality Benefits',
      slug: router.pathname.split('/').pop(),
      date: '2026-01-01',
      category: 'Home & Interior'
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
        <title>Indoor Plants and Air Quality Benefits | Premium Blog Platform</title>
        <meta name="description" content="Choosing the right plants to improve your home environment" />
        <link rel="canonical" href="https://www.premiumblogplatform.com/blog/indoor-plants-air-quality-benefits" />
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
              Home & Interior
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
            Indoor Plants and Air Quality Benefits
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-400 text-sm mb-6">
            <span className="mr-4">January 1, 2026</span>
            <span>7 min read</span>
          </div>
        </header>

        <main className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Indoor plants serve as natural air purification systems, converting carbon dioxide to oxygen while removing harmful toxins commonly found in household environments. Scientific research has confirmed that certain plant species can effectively filter airborne chemicals like formaldehyde, benzene, and trichloroethylene, which are emitted by furniture, carpets, cleaning products, and building materials. Beyond their air-purifying qualities, plants contribute to psychological well-being by reducing stress, enhancing mood, and creating connections to the natural world within indoor environments. The presence of living plants in homes and workplaces has been linked to improved concentration, creativity, and overall mental health. Understanding which plants offer the greatest benefits and how to care for them enables homeowners to create healthier, more vibrant living spaces while supporting environmental sustainability.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Scientific Basis for Air Purification</h2>
          
          <p className="mb-6 text-gray-200">
            NASA's Clean Air Study identified numerous houseplants capable of removing common indoor pollutants through their natural metabolic processes. Plants absorb airborne chemicals through their leaves and root systems, breaking down harmful compounds into harmless byproducts. The microorganisms living in plant soil also contribute to air purification, creating a complete biological filtration system.
          </p>
          
          <p className="mb-6 text-gray-200">
            The transpiration process, where plants release water vapor, increases indoor humidity levels, which helps reduce dust and allergens. Higher humidity levels also inhibit the survival of airborne viruses and bacteria. This natural humidification occurs without the energy consumption or maintenance requirements of mechanical humidifiers.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Top Air-Purifying Plants</h2>
          
          <p className="mb-6 text-gray-200">
            The snake plant (Sansevieria) stands out for its ability to remove toxins while thriving in low-light conditions and requiring minimal watering. This makes it ideal for bedrooms, bathrooms, or offices with limited natural light. Snake plants continue producing oxygen at night, making them particularly beneficial for bedrooms.
          </p>
          
          <p className="mb-6 text-gray-200">
            Peace lilies excel at removing ammonia, acetone, and other common household chemicals. Their elegant white blooms add aesthetic value while their broad leaves maximize air filtration capacity. Peace lilies also serve as natural humidity indicators, drooping when they need water.
          </p>
          
          <p className="mb-6 text-gray-200">
            Spider plants are particularly effective at removing formaldehyde and xylene from the air. They're also safe for homes with pets, making them ideal for households with cats or dogs. Spider plants reproduce readily, allowing you to expand your air-purifying garden while sharing plants with friends and family.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Plant Placement for Maximum Benefit</h2>
          
          <p className="mb-6 text-gray-200">
            Position plants strategically to maximize their air-purifying effects. Bedrooms benefit from plants that release oxygen at night, such as snake plants and aloe vera. These plants improve air quality while you sleep, potentially enhancing sleep quality and morning energy levels.
          </p>
          
          <p className="mb-6 text-gray-200">
            Kitchens and bathrooms, where moisture and chemical exposure are common, benefit from plants that tolerate humidity while filtering cleaning product vapors. Ferns and Boston ivy thrive in these conditions while removing airborne chemicals.
          </p>
          
          <p className="mb-6 text-gray-200">
            Living rooms and home offices benefit from larger plants that can handle higher concentrations of electronic equipment emissions. Rubber plants and ficus trees provide substantial air filtration while creating attractive focal points in these central spaces.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Low-Maintenance Plant Options</h2>
          
          <p className="mb-6 text-gray-200">
            For busy households or those new to plant care, succulents and cacti offer air-purifying benefits with minimal maintenance requirements. These plants store water in their leaves and stems, surviving extended periods between waterings. They're particularly suitable for sunny windowsills and dry environments.
          </p>
          
          <p className="mb-6 text-gray-200">
            ZZ plants (Zamioculcas zamiifolia) tolerate neglect and low light while maintaining attractive foliage year-round. Their waxy leaves resist dust accumulation, requiring less frequent cleaning while maintaining their air-purifying capacity.
          </p>
          
          <p className="mb-6 text-gray-200">
            Pothos vines grow rapidly and adapt to various lighting conditions while effectively filtering formaldehyde and other toxins. Their trailing growth habit makes them ideal for hanging baskets or high shelves, maximizing air contact while saving floor space.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Health Benefits Beyond Air Quality</h2>
          
          <p className="mb-6 text-gray-200">
            Studies show that caring for plants reduces stress and anxiety while promoting feelings of accomplishment and connection to nature. The act of watering, pruning, and observing plant growth provides meditative benefits that support mental health and mindfulness practices.
          </p>
          
          <p className="mb-6 text-gray-200">
            Plants reduce background noise through sound absorption, creating quieter, more peaceful indoor environments. Their leaves, stems, and soil absorb and deflect sound waves, particularly high-frequency noises that can cause stress and distraction.
          </p>
          
          <p className="mb-6 text-gray-200">
            The presence of greenery has been shown to reduce symptoms of depression and fatigue while improving cognitive function and creativity. Office studies demonstrate that employees with plants in their workspaces report higher job satisfaction and productivity.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Creating Plant-Friendly Environments</h2>
          
          <p className="mb-6 text-gray-200">
            Optimize lighting conditions by understanding each plant's specific requirements. South-facing windows provide intense light suitable for sun-loving plants, while north-facing windows offer gentle, indirect light ideal for shade-tolerant varieties. Rotate plants regularly to ensure even growth and optimal air contact.
          </p>
          
          <p className="mb-6 text-gray-200">
            Proper drainage prevents root rot and maintains healthy soil conditions. Use pots with drainage holes and appropriate soil mixes for each plant type. Self-watering pots can maintain consistent moisture levels for plants that require regular hydration.
          </p>
          
          <p className="mb-6 text-gray-200">
            Group plants together to create microclimates that enhance humidity levels and support mutual growth. Plants release moisture through transpiration, benefiting nearby plants while improving air quality throughout the area.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Seasonal Care Considerations</h2>
          
          <p className="mb-6 text-gray-200">
            Adjust watering schedules based on seasonal changes in light and temperature. Most plants require less water during winter months when growth slows. Monitor humidity levels, as heating systems can create excessively dry conditions that stress plants.
          </p>
          
          <p className="mb-6 text-gray-200">
            During spring and summer, plants typically require more frequent watering and occasional fertilization to support active growth. This is also the ideal time for propagation, allowing you to expand your collection or share plants with others.
          </p>
          
          <p className="mb-6 text-gray-200">
            Consider seasonal allergies when selecting plants. While most indoor plants improve air quality, some flowering varieties may produce pollen that affects sensitive individuals. Choose plants based on household health needs and preferences.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusion</h2>
          
          <p className="mb-6 text-gray-200">
            Indoor plants offer a natural, sustainable solution for improving air quality while enhancing the aesthetic and psychological benefits of home environments. The key to success lies in selecting appropriate species for your specific conditions and maintaining them properly to ensure optimal performance. As research continues revealing the profound connections between indoor environments and health, plants represent an accessible, beautiful approach to creating healthier living spaces.
          </p>
          
          <p className="mb-6 text-gray-200">
            The benefits of indoor plants extend far beyond air purification, contributing to overall well-being, productivity, and quality of life. By incorporating these living air purifiers into your home, you create an environment that supports both physical and mental health while connecting you to the natural world.
          </p>
          
          <p className="mb-6 text-gray-200">
            Starting with a few low-maintenance plants allows you to develop care skills while experiencing the benefits of improved indoor air quality. As your confidence grows, you can expand your collection to maximize both air purification and aesthetic benefits throughout your home.
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