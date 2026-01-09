import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MultiSportAdventureRaces() {
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
        <title>Multi-Sport Adventure Races Around the World - Premium Blog Platform</title>
        <meta name="description" content="Challenging competitions combining multiple outdoor disciplines in stunning locations" />
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
            Multi-Sport Adventure Races Around the World
          </h1>
          
          <div className="flex justify-center items-center space-x-4 text-gray-300 mb-6">
            <span>January 1, 2026</span>
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
            Multi-sport adventure races combine multiple outdoor disciplines into epic competitions that test endurance, navigation skills, and mental fortitude. These events take participants through diverse terrains and environments, from tropical rainforests to arctic landscapes. The combination of physical challenges with navigation and strategy creates unique experiences that attract athletes seeking ultimate outdoor adventures.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Eco-Challenge: The Original Adventure Race</h2>
          <p className="text-gray-300 mb-4">
            Though the original Eco-Challenge has evolved into various formats, its legacy continues to influence adventure racing. These events typically combine trekking, mountain biking, kayaking, and navigation challenges over multiple days. Teams must work together to navigate checkpoints while managing energy, nutrition, and equipment across diverse terrains.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">The World's Toughest Mudder</h2>
          <p className="text-gray-300 mb-4">
            This extreme endurance challenge combines military-style obstacle courses with adventure racing elements. Participants face 20+ miles of terrain with over 25 obstacles designed to test physical and mental limits. The event emphasizes teamwork and perseverance in challenging conditions that simulate military training.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Raid Gauloise: The Classic Adventure Race</h2>
          <p className="text-gray-300 mb-4">
            The Raid Gauloise format combines trekking, mountain biking, kayaking, and orienteering over multiple days. Teams navigate using only a map and compass, finding checkpoints while managing equipment and nutrition. The race takes place in stunning locations worldwide, from New Zealand's South Island to the forests of Brazil.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Expedition Adventure Racing</h2>
          <p className="text-gray-300 mb-4">
            These multi-day events (typically 3-10 days) follow the Adventure Racing World Series format. Competitions include trekking, mountain biking, paddling, and navigation challenges. The Eco-Challenge Fiji and Eco-Challenge Patagonia represent some of the most challenging events, requiring teams to carry all their equipment while navigating diverse terrains.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Vertical Racing and Skyrunning</h2>
          <p className="text-gray-300 mb-4">
            Events like the Matterhorn Ultraks and other skyrunning races combine trail running with technical climbing elements. These races test athletes in high-altitude environments with significant elevation gain and exposure to challenging weather conditions. The combination of endurance running with technical skills creates unique challenges.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Tropical Adventure Races</h2>
          <p className="text-gray-300 mb-4">
            Races in locations like Costa Rica, Thailand, and Malaysia combine tropical elements with adventure racing challenges. Participants navigate through rainforests, rivers, and coastal environments while dealing with high humidity and variable weather. The terrain includes river crossings, jungle navigation, and cultural challenges with local communities.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Winter Adventure Racing</h2>
          <p className="text-gray-300 mb-4">
            Cold-weather adventure races like the Winter Eco-Challenge test participants in snow and ice conditions. Events may include cross-country skiing, snowshoeing, ice climbing, and winter navigation. The challenges include equipment management in freezing temperatures and navigation in environments where landmarks may be obscured by weather.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Training and Preparation</h2>
          <p className="text-gray-300 mb-4">
            Success in adventure racing requires cross-training in multiple disciplines. Athletes must develop proficiency in navigation, endurance sports, and technical skills. Mental preparation is equally important, as races can last several days with minimal sleep. Team dynamics and communication skills are crucial for team-based events.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Equipment and Logistics</h2>
          <p className="text-gray-300 mb-4">
            Adventure racers must carry essential equipment for safety and performance. This includes navigation tools, safety equipment, repair kits, and weather protection. Equipment must be lightweight yet durable enough to withstand extended use in challenging conditions. Proper equipment selection can be the difference between success and failure.
          </p>

          <p className="text-gray-300 mb-8">
            Multi-sport adventure races offer unique challenges that combine physical endurance, technical skills, navigation, and mental fortitude. These events take place in some of the world's most stunning locations, creating experiences that are as much about discovery and connection with nature as they are about competition. The sport continues to evolve, with new formats and locations emerging to challenge athletes in different ways.
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
              <Link href="/blog/best-extreme-sports-destinations-2026" className="text-yellow-400 hover:text-yellow-300">
                Best Extreme Sports Destinations 2026
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