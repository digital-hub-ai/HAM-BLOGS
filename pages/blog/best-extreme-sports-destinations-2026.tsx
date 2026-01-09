import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function BestExtremeSportsDestinations() {
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
        <title>Best Extreme Sports Destinations 2026 - Premium Blog Platform</title>
        <meta name="description" content="Top locations worldwide for skydiving, bungee jumping, and other adrenaline-pumping activities" />
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
            Best Extreme Sports Destinations 2026
          </h1>
          
          <div className="flex justify-center items-center space-x-4 text-gray-300 mb-6">
            <span>January 8, 2026</span>
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
            For adrenaline junkies and thrill-seekers, the world offers countless opportunities to experience the ultimate rush. As we enter 2026, new destinations emerge while classic spots continue to evolve with enhanced safety measures and cutting-edge facilities. Here are the top extreme sports destinations that promise unforgettable experiences.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Queenstown, New Zealand: The Adventure Capital of the World</h2>
          <p className="text-gray-300 mb-4">
            Queenstown remains the undisputed leader in extreme sports tourism. Known as the birthplace of commercial bungee jumping, it offers everything from the original Kawarau Gorge Bridge jump to the world's highest swing at The Nevis. The Shotover Canyon Swing provides a unique experience, launching riders at 120 km/h through a narrow canyon.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Moab, Utah, USA: Desert Extremes</h2>
          <p className="text-gray-300 mb-4">
            Moab attracts rock climbers, mountain bikers, and off-road enthusiasts with its dramatic red rock formations. The area offers world-class climbing routes on iconic structures like Delicate Arch and Arches National Park. Mountain biking trails like the Whole Enchilada provide epic descents through varied terrain.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Switzerland: Alpine Extremes</h2>
          <p className="text-gray-300 mb-4">
            Switzerland has become a premier destination for paragliding, ice climbing, and extreme skiing. The Matterhorn region offers some of the most challenging climbs, while Interlaken serves as the base for numerous extreme activities including canyoning and cliff jumping.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Victoria Falls, Zambia/Zimbabwe: Water Extremes</h2>
          <p className="text-gray-300 mb-4">
            Victoria Falls offers some of the most thrilling water-based extreme sports. Activities include white-water rafting in the rapids below the falls, bungee jumping from the Victoria Falls Bridge, and swimming in Devil's Pool—a natural infinity pool on the edge of the falls during low water season.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Chamonix, France: Extreme Winter Sports</h2>
          <p className="text-gray-300 mb-4">
            Chamonix, nestled beneath Mont Blanc, is the birthplace of extreme skiing and mountaineering. The Vallée Blanche offers the longest glacier ski run in the world, while the Aiguille du Midi provides access to extreme climbing and skiing routes. The area is also famous for speed riding and extreme snowboarding.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Australia: Coastal Extremes</h2>
          <p className="text-gray-300 mb-4">
            Australia offers unique extreme experiences including shark cage diving in South Australia, cliff jumping in the Blue Mountains, and extreme surfing at breaks like Pipeline and Teahupo'o. The Great Barrier Reef provides opportunities for extreme diving and underwater adventures.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Nepal: Himalayan Extremes</h2>
          <p className="text-gray-300 mb-4">
            Nepal continues to attract extreme mountaineers and trekkers. Beyond Everest expeditions, the country offers extreme trekking routes like the Annapurna Circuit and challenging rock climbing opportunities. Paragliding from Pokhara's hills provides spectacular views of the Annapurna range.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Safety Considerations</h2>
          <p className="text-gray-300 mb-4">
            While extreme sports provide unparalleled excitement, safety should remain the top priority. Always use certified operators, proper equipment, and undergo adequate training before attempting any extreme sport. Weather conditions, altitude, and local regulations vary significantly by location and season.
          </p>

          <p className="text-gray-300 mb-8">
            As extreme sports continue to evolve, new destinations emerge and established locations refine their offerings. The year 2026 promises exciting developments in safety technology, accessibility, and unique experiences that will attract thrill-seekers from around the world.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Related Articles</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/blog/adventure-travel-safety-tips-experts" className="text-yellow-400 hover:text-yellow-300">
                Adventure Travel Safety Tips from Experts
              </Link>
            </li>
            <li>
              <Link href="/blog/backpacking-through-remote-destinations" className="text-yellow-400 hover:text-yellow-300">
                Backpacking Through Remote Destinations
              </Link>
            </li>
            <li>
              <Link href="/blog/mountain-climbing-essential-gear-guide" className="text-yellow-400 hover:text-yellow-300">
                Mountain Climbing Essential Gear Guide
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}