import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function TraditionalFestivalsCulturalCelebrations() {
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
        <title>Traditional Festivals Around the World: Cultural Celebrations - Premium Blog Platform</title>
        <meta name="description" content="Immersing in vibrant festivals that showcase unique cultural traditions and customs" />
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
            Traditional Festivals Around the World: Cultural Celebrations
          </h1>
          
          <div className="flex justify-center items-center space-x-4 text-gray-300 mb-6">
            <span>January 7, 2026</span>
            <span>•</span>
            <span>9 min read</span>
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
            Traditional festivals serve as windows into the soul of different cultures, offering participants and observers opportunities to experience the rich tapestry of human expression. These celebrations connect people to their heritage, strengthen community bonds, and provide continuity across generations. From ancient harvest festivals to religious observances, traditional celebrations offer insights into the values, beliefs, and artistic expressions that define different societies.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Holi, India</h2>
          <p className="text-gray-300 mb-4">
            Known as the Festival of Colors, Holi celebrates the arrival of spring and the triumph of good over evil. Participants throw colored powders at each other, dance to traditional music, and share festive foods. The festival transcends social barriers, bringing people of all backgrounds together in celebration of renewal and joy.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Inti Raymi, Peru</h2>
          <p className="text-gray-300 mb-4">
            The Festival of the Sun recreates the ancient Incan ceremony honoring Inti, the sun god. Held annually in Cusco, the celebration includes processions, traditional music, and theatrical performances that recreate the grandeur of the Incan Empire. Participants dressed in colorful costumes recreate ancient rituals at the Sacsayhuamán fortress.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Obon, Japan</h2>
          <p className="text-gray-300 mb-4">
            This Buddhist tradition honors ancestral spirits who are believed to return to their families during this period. Families clean graves, offer food, and light lanterns to guide spirits. The festival culminates with Toro Nagashi, where floating lanterns are released onto rivers and seas to guide spirits back to the afterlife.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Carnival, Trinidad and Tobago</h2>
          <p className="text-gray-300 mb-4">
            Beyond its well-known Brazilian counterpart, Trinidad's Carnival represents a unique fusion of African, European, and East Indian traditions. The celebration features elaborate costumes, soca music, and calypso competitions. The festival embodies the multicultural nature of Trinidadian society and serves as a powerful expression of national identity.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Songkran, Thailand</h2>
          <p className="text-gray-300 mb-4">
            The Thai New Year celebration involves water fights that symbolize washing away bad luck from the previous year. The festival also includes merit-making at temples, traditional dances, and the respectful pouring of scented water over Buddha images and elders' hands.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Day of the Dead, Mexico</h2>
          <p className="text-gray-300 mb-4">
            Far from being a somber occasion, Día de los Muertos celebrates the ongoing relationship between the living and the dead. Families create colorful altars with marigolds, photos, and favorite foods of deceased relatives. The celebration demonstrates indigenous Mexican beliefs about death and rebirth.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Up Helly Aa, Scotland</h2>
          <p className="text-gray-300 mb-4">
            This fire festival in Shetland celebrates Viking heritage with torchlit processions and the burning of a replica Viking longship. The celebration, held on the last Tuesday of January, represents one of the world's largest fire festivals and connects modern Shetlanders with their Norse ancestors.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Respectful Participation in Traditional Festivals</h2>
          <p className="text-gray-300 mb-4">
            When participating in traditional festivals, it's important to understand cultural sensitivities and follow local customs. Some festivals may have restrictions for outsiders, while others welcome respectful participation. Learning about the festival's significance and observing proper etiquette demonstrates respect for the host community.
          </p>

          <p className="text-gray-300 mb-8">
            Traditional festivals offer unique opportunities to experience cultural heritage firsthand. These celebrations preserve ancient customs while adapting to contemporary realities, ensuring that cultural knowledge passes to future generations. Participating in traditional festivals creates lasting memories while fostering cross-cultural understanding and appreciation.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Related Articles</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/blog/cultural-etiquette-travel-guidelines-respectful-tourism" className="text-yellow-400 hover:text-yellow-300">
                Cultural Etiquette: Travel Guidelines for Respectful Tourism
              </Link>
            </li>
            <li>
              <Link href="/blog/oral-traditions-stories-passed-down-through-generations" className="text-yellow-400 hover:text-yellow-300">
                Oral Traditions: Stories Passed Down Through Generations
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