import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function WorldHeritageSitesPreservingHumanHistory() {
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
        <title>World Heritage Sites: Preserving Human History - Premium Blog Platform</title>
        <meta name="description" content="Exploring UNESCO World Heritage sites and their significance in preserving our shared history" />
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
            World Heritage Sites: Preserving Human History
          </h1>
          
          <div className="flex justify-center items-center space-x-4 text-gray-300 mb-6">
            <span>January 6, 2026</span>
            <span>•</span>
            <span>11 min read</span>
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
            UNESCO World Heritage Sites represent the most significant cultural and natural treasures on Earth. These designated locations embody humanity's shared heritage and serve as tangible links to our collective past. The World Heritage Convention, established in 1972, recognizes sites that possess "outstanding universal value" and require protection for future generations. These locations tell the story of human civilization, from ancient settlements to architectural marvels to natural wonders.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Historical Significance of World Heritage Designation</h2>
          <p className="text-gray-300 mb-4">
            The World Heritage designation acknowledges sites that meet at least one of ten criteria related to cultural or natural significance. These criteria ensure recognition of exceptional human achievements in architecture, urban planning, and artistic expression, as well as areas of outstanding natural beauty or scientific importance. The designation brings international attention and resources to support conservation efforts.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Machu Picchu, Peru</h2>
          <p className="text-gray-300 mb-4">
            This 15th-century Incan citadel represents one of the most significant archaeological sites in the Americas. Its sophisticated dry-stone construction and integration with the natural landscape exemplify Incan architectural and engineering achievements. The site's designation as both a UNESCO World Heritage Site and one of the New Seven Wonders of the World highlights its universal significance.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Petra, Jordan</h2>
          <p className="text-gray-300 mb-4">
            Known as the "Rose City," Petra showcases Nabataean culture through its rock-cut architecture and hydraulic systems. The site demonstrates the ingenuity of an ancient trading civilization that controlled caravan routes across the Arabian Peninsula. The Treasury and Monastery facades carved into rose-red sandstone remain among the world's most photographed archaeological features.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Angkor Wat, Cambodia</h2>
          <p className="text-gray-300 mb-4">
            Originally constructed as a Hindu temple complex and later transformed into a Buddhist temple, Angkor Wat represents the pinnacle of classical Khmer architecture. The site contains the world's largest religious monument and reflects the cosmology of Hinduism through its design and bas-reliefs depicting scenes from Hindu epics.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Historic Cairo, Egypt</h2>
          <p className="text-gray-300 mb-4">
            This area contains the world's oldest university, Al-Azhar, and some of the finest examples of Islamic architecture spanning over 1,000 years. The site includes mosques, madrasas, and palaces that demonstrate the evolution of Islamic civilization and the role of Cairo as a center of learning and culture.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Robben Island, South Africa</h2>
          <p className="text-gray-300 mb-4">
            This site represents the triumph of the human spirit over oppression and injustice. Robben Island housed political prisoners during South Africa's apartheid era, including Nelson Mandela. The island's designation acknowledges the struggle for freedom and democracy, serving as a powerful reminder of humanity's capacity for resilience and reconciliation.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Conservation Challenges and Success Stories</h2>
          <p className="text-gray-300 mb-4">
            Many World Heritage Sites face threats from urban development, pollution, climate change, and armed conflict. The World Heritage Committee monitors these threats and can place sites on the List of World Heritage in Danger to mobilize international assistance. Success stories include the restoration of the Old City of Dubrovnik after war damage and the recovery of the Everglades from development pressures.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Role of Visitors in Preservation</h2>
          <p className="text-gray-300 mb-4">
            Sustainable tourism plays a crucial role in supporting World Heritage conservation. Entrance fees and tourism revenue fund maintenance and protection efforts. However, overtourism threatens some sites, necessitating visitor management strategies. Responsible tourism practices, such as following designated paths and respecting local customs, help minimize negative impacts on these irreplaceable treasures.
          </p>

          <p className="text-gray-300 mb-8">
            World Heritage Sites represent humanity's most significant achievements and natural wonders. Their preservation ensures that future generations can experience and learn from these irreplaceable cultural and natural treasures. By visiting and supporting these sites responsibly, we contribute to their conservation and acknowledge our shared responsibility to protect our common heritage.
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
              <Link href="/blog/intangible-heritage-unesco-list-cultural-practices" className="text-yellow-400 hover:text-yellow-300">
                Intangible Heritage: UNESCO List of Cultural Practices
              </Link>
            </li>
            <li>
              <Link href="/blog/traditional-crafts-endangered-art-forms" className="text-yellow-400 hover:text-yellow-300">
                Traditional Crafts: Endangered Art Forms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}