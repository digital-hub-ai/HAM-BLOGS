import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function BlogPost() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    // Check if article is bookmarked
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const isBookmarked = bookmarks.some((article: any) => article.slug === router.pathname.split('/').pop());
    setBookmarked(isBookmarked);

    // Generate related articles
    const allArticles = [
      {
        id: '1',
        title: 'Ancient Temples: Hidden Archaeological Wonders',
        slug: 'ancient-temples-hidden-archaeological-wonders',
        excerpt: 'Discovering lesser-known temples and archaeological sites that hold fascinating historical secrets...'
      },
      {
        id: '2',
        title: 'Traditional Festivals Around the World: Cultural Celebrations',
        slug: 'traditional-festivals-around-world-cultural-celebrations',
        excerpt: 'Immersing in vibrant festivals that showcase unique cultural traditions and customs...'
      },
      {
        id: '3',
        title: 'World Heritage Sites: Preserving Human History',
        slug: 'world-heritage-sites-preserving-human-history',
        excerpt: 'Exploring UNESCO World Heritage sites and their significance in preserving our shared history...'
      }
    ];
    
    // Randomly select 2 articles
    const shuffled = [...allArticles].sort(() => 0.5 - Math.random());
    setRelatedArticles(shuffled.slice(0, 2));
  }, [router]);

  const toggleBookmark = () => {
    const articleData = {
      id: Math.random().toString(36).substr(2, 9),
      title: 'Intangible Heritage: UNESCO List of Cultural Practices',
      slug: router.pathname.split('/').pop(),
      date: '2026-01-01',
      category: 'Culture & Heritage'
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
        <title>Intangible Heritage: UNESCO List of Cultural Practices | Premium Blog Platform</title>
        <meta name="description" content="Celebrating performing arts, rituals, and social practices that define cultures" />
        <link rel="canonical" href="https://www.premiumblogplatform.com/blog/intangible-heritage-unesco-list-cultural-practices" />
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
              Culture & Heritage
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
            Intangible Heritage: UNESCO List of Cultural Practices
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-400 text-sm mb-6">
            <span className="mr-4">January 1, 2026</span>
            <span>10 min read</span>
          </div>
        </header>

        <main className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            UNESCO's Representative List of the Intangible Cultural Heritage of Humanity celebrates the living traditions that define communities worldwide. Unlike tangible heritage such as monuments or artifacts, intangible heritage encompasses practices, representations, expressions, knowledge, and skills that communities recognize as part of their cultural heritage. These traditions are transmitted from generation to generation, constantly recreated by communities in response to their environment, and provide a sense of identity and continuity.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Understanding Intangible Cultural Heritage</h2>
          
          <p className="mb-6 text-gray-200">
            Intangible cultural heritage includes traditions or living expressions inherited from ancestors and passed to descendants. These include oral traditions, performing arts, social practices, rituals, festive events, knowledge and practices concerning nature and the universe, and traditional craftsmanship. Unlike tangible heritage that remains static, intangible heritage is dynamic and evolves with communities.
          </p>
          
          <p className="mb-6 text-gray-200">
            The 2003 UNESCO Convention for the Safeguarding of the Intangible Cultural Heritage recognizes the importance of this heritage as a source of cultural diversity and human creativity. The list aims to ensure better protection of important traditions while respecting the cultural practices of communities, groups, and individuals.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Performing Arts and Music</h2>
          
          <p className="mb-6 text-gray-200">
            Traditional music and dance forms represent some of the most vibrant examples of intangible heritage. Flamenco from Spain, Kabuki theater from Japan, and the blues from the United States have all been recognized for their cultural significance. These art forms embody historical narratives, emotional expression, and cultural values within their movements, melodies, and rhythms.
          </p>
          
          <p className="mb-6 text-gray-200">
            Traditional instruments and musical techniques often carry deep cultural meanings. The didgeridoo of Australian Aboriginal culture, the gamelan orchestras of Indonesia, and the bagpipes of Scotland represent not just musical traditions but cultural identities and spiritual connections to land and ancestors.
          </p>
          
          <p className="mb-6 text-gray-200">
            Folk dances and ceremonial performances often tell stories of historical events, seasonal cycles, or spiritual beliefs. These performances connect communities to their past while providing cultural continuity for future generations.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Rituals and Ceremonial Practices</h2>
          
          <p className="mb-6 text-gray-200">
            Rituals and ceremonies form crucial components of intangible heritage, marking important life transitions, seasonal changes, and spiritual observances. The Day of the Dead celebrations in Mexico, the firewalking ceremonies of Fiji, and the tea ceremony of Japan demonstrate how rituals connect communities to spiritual beliefs and cultural values.
          </p>
          
          <p className="mb-6 text-gray-200">
            Religious and spiritual practices often form the core of community identity. These traditions provide frameworks for understanding existence, death, rebirth, and the relationship between humans and the natural world. Many of these practices have been passed down through centuries with remarkable fidelity.
          </p>
          
          <p className="mb-6 text-gray-200">
            Seasonal festivals and calendar-based celebrations maintain connections to agricultural cycles and astronomical events. These practices often integrate knowledge about weather patterns, planting seasons, and natural rhythms that supported human survival for millennia.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Traditional Knowledge Systems</h2>
          
          <p className="mb-6 text-gray-200">
            Indigenous and traditional knowledge systems encompass understanding of medicinal plants, sustainable agriculture, weather prediction, and navigation techniques. These knowledge systems represent thousands of years of observation and experimentation, often providing insights that complement or surpass modern scientific understanding.
          </p>
          
          <p className="mb-6 text-gray-200">
            Traditional ecological knowledge includes understanding of local ecosystems, species behavior, and sustainable resource management. Indigenous communities have developed sophisticated conservation practices that maintain biodiversity while supporting human needs.
          </p>
          
          <p className="mb-6 text-gray-200">
            Astronomical knowledge systems developed by various cultures demonstrate sophisticated understanding of celestial movements. These systems enabled navigation, agricultural planning, and the establishment of calendars that governed community activities.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Traditional Crafts and Skills</h2>
          
          <p className="mb-6 text-gray-200">
            Traditional craftsmanship represents embodied knowledge about materials, techniques, and aesthetics that have been refined over generations. These skills often involve understanding of local resources, sustainable practices, and cultural aesthetics that reflect community values.
          </p>
          
          <p className="mb-6 text-gray-200">
            Craftsmanship encompasses diverse skills from textile production and pottery to metalworking and woodworking. These practices often involve spiritual or ritual elements, with certain techniques reserved for special occasions or requiring specific ceremonial preparations.
          </p>
          
          <p className="mb-6 text-gray-200">
            Master-apprentice relationships maintain traditional techniques while allowing for innovation and adaptation. These relationships often involve more than technical instruction, encompassing cultural values, spiritual beliefs, and community responsibilities.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Language and Oral Traditions</h2>
          
          <p className="mb-6 text-gray-200">
            Languages themselves constitute important elements of intangible heritage, carrying unique worldviews, knowledge systems, and cultural expressions. Many indigenous languages contain concepts that cannot be translated directly, representing unique ways of understanding reality.
          </p>
          
          <p className="mb-6 text-gray-200">
            Oral literatures, including epic poems, myths, legends, and proverbs, preserve historical narratives, moral teachings, and cultural values. These traditions often encode practical knowledge about survival, social organization, and environmental management.
          </p>
          
          <p className="mb-6 text-gray-200">
            Storytelling traditions maintain cultural continuity while adapting to contemporary contexts. Master storytellers serve as repositories of cultural knowledge and community memory, transmitting values and wisdom through engaging narratives.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Threats and Preservation Efforts</h2>
          
          <p className="mb-6 text-gray-200">
            Globalization, urbanization, and cultural homogenization threaten many intangible heritage practices. Young people migrating to cities often lose connection to traditional knowledge holders, while modern education systems may not value traditional learning methods.
          </p>
          
          <p className="mb-6 text-gray-200">
            Climate change poses particular threats to traditions tied to specific environmental conditions. Changes in weather patterns, rising sea levels, and ecosystem disruption can render traditional practices obsolete or impossible to maintain.
          </p>
          
          <p className="mb-6 text-gray-200">
            Economic pressures often force communities to abandon traditional practices in favor of modern employment opportunities. This can break the chain of transmission that maintains intangible heritage vitality.
          </p>

          <blockquote className="border-l-4 border-yellow-500 pl-6 py-2 my-8 text-gray-200 italic">
            Intangible heritage represents the living soul of human culture, embodying the accumulated wisdom, creativity, and identity of communities across generations.
          </blockquote>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">UNESCO Recognition and Impact</h2>
          
          <p className="mb-6 text-gray-200">
            UNESCO recognition raises awareness of threatened traditions and provides frameworks for preservation efforts. This international acknowledgment often leads to increased funding, research, and institutional support for safeguarding activities.
          </p>
          
          <p className="mb-6 text-gray-200">
            The recognition process involves communities in documenting and evaluating their own traditions, often strengthening cultural pride and encouraging intergenerational transmission. Communities gain tools and resources for maintaining their heritage while adapting to contemporary contexts.
          </p>
          
          <p className="mb-6 text-gray-200">
            International cooperation facilitated by UNESCO recognition enables knowledge sharing between communities facing similar challenges. Best practices for preservation can be adapted to different cultural contexts while respecting local specificity.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusion</h2>
          
          <p className="mb-6 text-gray-200">
            Intangible cultural heritage represents humanity's living memory and creative expression, encompassing the practices, knowledge, and values that define communities and provide cultural continuity. These traditions embody sophisticated understanding of human nature, social organization, environmental management, and spiritual beliefs that have sustained communities for millennia.
          </p>
          
          <p className="mb-6 text-gray-200">
            The preservation of intangible heritage requires active participation from communities, institutional support, and international cooperation. These traditions provide alternatives to dominant cultural models and demonstrate the diversity of human creativity and adaptation. By safeguarding intangible heritage, we maintain cultural diversity while ensuring that future generations inherit the full richness of human cultural achievement.
          </p>
          
          <p className="mb-6 text-gray-200">
            As globalization continues to accelerate, protecting and celebrating intangible cultural heritage becomes increasingly urgent. These living traditions provide grounding and identity in rapidly changing worlds while offering insights and solutions for contemporary challenges. Supporting intangible heritage preservation contributes to human cultural diversity and ensures that the wisdom accumulated over millennia remains available for future generations.
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