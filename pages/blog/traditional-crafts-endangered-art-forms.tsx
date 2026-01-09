import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function TraditionalCraftsEndangeredArtForms() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const savedBookmarks = localStorage.getItem('blogBookmarks');
    if (savedBookmarks) {
      const parsedBookmarks = JSON.parse(savedBookmarks);
      setBookmarks(parsedBookmarks);
      setIsBookmarked(parsedBookmarks.includes(router.asPath));
    }
  }, [router.asPath]);

  const toggleBookmark = () => {
    const newBookmarks = isBookmarked
      ? bookmarks.filter((b) => b !== router.asPath)
      : [...bookmarks, router.asPath];
    
    localStorage.setItem('blogBookmarks', JSON.stringify(newBookmarks));
    setBookmarks(newBookmarks);
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Traditional Crafts: Endangered Art Forms - Premium Blog Platform</title>
        <meta name="description" content="Preserving ancient craftsmanship techniques passed down through generations" />
      </Head>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6"
          >
            <span className="mr-2">←</span> Back to articles
          </button>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Traditional Crafts: Endangered Art Forms
          </h1>
          
          <div className="flex justify-center items-center space-x-4 text-gray-300 mb-6">
            <span>January 4, 2026</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
          
          <button
            onClick={toggleBookmark}
            className={`px-4 py-2 rounded-lg ${
              isBookmarked 
                ? 'bg-yellow-500 text-gray-900' 
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            {isBookmarked ? '✓ Bookmarked' : 'Bookmark Article'}
          </button>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-6">
            Traditional crafts represent humanity's creative heritage, embodying centuries of accumulated knowledge, skills, and aesthetic sensibilities. These art forms connect us to our ancestors and express cultural identity in tangible forms. However, rapid modernization, mass production, and shifting economic realities threaten the survival of many traditional crafts. Understanding and supporting these endangered art forms is essential for preserving cultural diversity and maintaining links to our heritage.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Threats to Traditional Crafts</h2>
          <p className="text-gray-300 mb-4">
            Globalization and industrialization have created significant challenges for traditional crafts. Mass-produced items often undercut handcrafted products on price, while younger generations migrate to urban areas seeking employment. The knowledge transfer from master artisans to apprentices has been disrupted, breaking chains of traditional learning. Economic pressures force artisans to abandon their craft in favor of more lucrative opportunities.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Pottery and Ceramics</h2>
          <p className="text-gray-300 mb-4">
            Traditional pottery techniques, from Japanese raku to Moroccan tagines, represent sophisticated understanding of clay, firing, and glazing. Master potters spend decades perfecting techniques passed down through generations. The Oaxacan black pottery of Mexico and the blue-and-white porcelain of Jingdezhen, China, exemplify how regional variations developed unique characteristics reflecting local materials and cultural aesthetics.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Textiles and Weaving</h2>
          <p className="text-gray-300 mb-4">
            From Peruvian textiles to Indian saris, traditional weaving techniques preserve complex patterns and symbolic meanings. The backstrap loom technique used in Guatemala and the ikat dyeing method found in Indonesia and Central Asia require years to master. These crafts carry cultural narratives and social meanings encoded in their patterns and colors.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Woodworking and Carving</h2>
          <p className="text-gray-300 mb-4">
            Traditional woodcarvers and furniture makers employ techniques refined over centuries. Japanese joinery, which uses no nails or adhesives, and Scandinavian bentwood furniture demonstrate how traditional craftsmen maximized material efficiency. These techniques often incorporate sustainable practices that respected the finite nature of forest resources.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Jewelry and Metalwork</h2>
          <p className="text-gray-300 mb-4">
            Traditional metalworkers in regions like Rajasthan, India, and Taxco, Mexico, developed sophisticated techniques for working with silver, gold, and other metals. Techniques like granulation, cloisonné, and repoussé require precise knowledge of metallurgy and artistic vision. These crafts often carry spiritual or symbolic meanings beyond their aesthetic value.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Preservation Efforts and Revival</h2>
          <p className="text-gray-300 mb-4">
            Organizations worldwide work to document and preserve traditional crafts. UNESCO's Intangible Cultural Heritage lists include many traditional crafts, raising awareness of their importance. Craft schools, cultural centers, and museums provide spaces for knowledge transmission. Digital archives preserve techniques and patterns for future generations.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Supporting Traditional Artisans</h2>
          <p className="text-gray-300 mb-4">
            Consumers can support traditional crafts by purchasing authentic handmade items directly from artisans or fair trade organizations. Visiting craft villages and workshops provides income for artisans while raising awareness of their work. Supporting craft education programs ensures knowledge transfer to younger generations. Documentation projects help preserve techniques that might otherwise be lost.
          </p>

          <p className="text-gray-300 mb-8">
            Traditional crafts embody the wisdom, creativity, and aesthetic sensibilities of countless generations. Their preservation requires conscious effort from individuals, communities, and governments. By supporting traditional crafts, we maintain links to our heritage while acknowledging the value of handmade, sustainable alternatives to mass production. These art forms represent irreplaceable repositories of human creativity and cultural knowledge.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Related Articles</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/blog/ancient-temples-hidden-archaeological-wonders" className="text-yellow-400 hover:text-yellow-300">
                Ancient Temples: Hidden Archaeological Wonders
              </Link>
            </li>
            <li>
              <Link href="/blog/world-heritage-sites-preserving-human-history" className="text-yellow-400 hover:text-yellow-300">
                World Heritage Sites: Preserving Human History
              </Link>
            </li>
            <li>
              <Link href="/blog/intangible-heritage-unesco-list-cultural-practices" className="text-yellow-400 hover:text-yellow-300">
                Intangible Heritage: UNESCO List of Cultural Practices
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}