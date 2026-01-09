import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SurfingDestinationsBestWavesWorld() {
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
        <title>Surfing Destinations: Best Waves Around the World - Premium Blog Platform</title>
        <meta name="description" content="Find the perfect waves at the world's top surfing destinations catering to all skill levels" />
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
            Surfing Destinations: Best Waves Around the World
          </h1>
          
          <div className="flex justify-center items-center space-x-4 text-gray-300 mb-6">
            <span>January 5, 2026</span>
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
            The world's premier surf destinations continue to attract wave riders of all skill levels, from beginners learning on gentle rollers to experts seeking the most challenging barrels. As we look toward 2026, these coastal paradises offer not just world-class waves but complete experiences that combine surfing with luxury accommodations, cultural immersion, and pristine natural environments.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Legendary Pipeline Spots</h2>
          <p className="text-gray-300 mb-4">
            The world's most famous surf breaks continue to draw experienced surfers seeking the perfect wave. Pipeline in Hawaii, Teahupo'o in Tahiti, and Jeffreys Bay in South Africa offer consistent, powerful waves that challenge even the most skilled surfers. These destinations have developed comprehensive surf tourism infrastructures that support both competition-level riding and recreational surfing.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Pipeline, Oahu, Hawaii</h3>
          <p className="text-gray-300 mb-4">
            Known as the "Eighth Wonder of the World," Pipeline offers perfectly barreling waves that break over a shallow reef. The wave's power and hollow nature make it one of the most dangerous and rewarding waves for expert surfers. The surrounding North Shore provides a complete surf destination with multiple breaks for different skill levels and a vibrant surf culture.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Beginner-Friendly Destinations</h2>
          <p className="text-gray-300 mb-4">
            Many destinations specialize in providing gentle, consistent waves perfect for learning and improvement. These locations offer surf schools, board rentals, and supportive communities that welcome newcomers to the sport while maintaining the authentic surf lifestyle.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Byron Bay, Australia</h3>
          <p className="text-gray-300 mb-4">
            Byron Bay offers gentle waves suitable for beginners while maintaining the laid-back Australian surf culture. The town provides comprehensive surf instruction, board rental options, and consistent swells that allow learners to progress gradually. The surrounding rainforest and abundant wildlife add to the destination's appeal beyond surfing.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Emerging Surf Destinations</h2>
          <p className="text-gray-300 mb-4">
            New surf destinations continue to be discovered as surfers explore remote coastlines worldwide. These locations often provide uncrowded waves, unique cultural experiences, and the opportunity to surf in pristine environments before they become widely known.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Mentawai Islands, Indonesia</h3>
          <p className="text-gray-300 mb-4">
            The Mentawai Islands offer consistent, high-quality waves in a remote setting. The islands' surf breaks provide perfect barrels and long rides in a pristine environment. Surf charters provide access to these remote breaks, offering all-inclusive experiences that combine world-class surfing with luxury accommodations and local cultural immersion.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Surf Resort Experiences</h2>
          <p className="text-gray-300 mb-4">
            Surf resorts have evolved to provide comprehensive experiences that cater to all skill levels. These properties offer wave forecasts, board storage, lesson programs, and access to multiple surf spots via boat shuttles. Many resorts employ former professional surfers as guides and instructors.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Luxury Surf Accommodations</h3>
          <p className="text-gray-300 mb-4">
            High-end surf resorts combine luxury hospitality with expert surf guidance. These properties feature multiple surf breaks within easy reach, professional photography services, and equipment maintenance. Guests enjoy five-star amenities while experiencing world-class waves, creating the ultimate surf vacation.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Seasonal Considerations</h2>
          <p className="text-gray-300 mb-4">
            Surf conditions vary significantly by season, with different destinations offering optimal conditions at different times of year. Understanding swell patterns, wind directions, and seasonal weather helps surfers plan trips that maximize wave quality and consistency.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Northern vs. Southern Hemisphere Surfing</h3>
          <p className="text-gray-300 mb-4">
            The Northern Hemisphere offers prime surf conditions during northern hemisphere winter months (December-February), when storms generate consistent swells. The Southern Hemisphere peaks during northern summer months, providing year-round surf opportunities for dedicated travelers. This pattern allows surfers to chase optimal conditions throughout the year.
          </p>

          <p className="text-gray-300 mb-8">
            Surf destinations represent the perfect combination of athletic pursuit and coastal paradise, offering experiences that connect surfers with the ocean's power and beauty. Whether seeking beginner-friendly rollers or expert-level barrels, these destinations provide opportunities to experience the sport in its most natural and beautiful settings, surrounded by like-minded individuals who share a passion for wave riding.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Related Articles</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/blog/tropical-paradise-beaches-2026" className="text-yellow-400 hover:text-yellow-300">
                Tropical Paradise Beaches: Ultimate Island Getaways 2026
              </Link>
            </li>
            <li>
              <Link href="/blog/secluded-beaches-hidden-coastal-gems" className="text-yellow-400 hover:text-yellow-300">
                Secluded Beaches: Hidden Coastal Gems Off the Beaten Path
              </Link>
            </li>
            <li>
              <Link href="/blog/adventure-beaches-water-sports-activities" className="text-yellow-400 hover:text-yellow-300">
                Adventure Beaches: Water Sports and Coastal Activities
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}