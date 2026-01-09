import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LuxuryResortsMaldives() {
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
        <title>Top Luxury Resorts in the Maldives 2026 - Premium Blog Platform</title>
        <meta name="description" content="Curated list of the most exclusive resorts in paradise islands" />
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
            Top Luxury Resorts in the Maldives 2026
          </h1>
          
          <div className="flex justify-center items-center space-x-4 text-gray-300 mb-6">
            <span>January 8, 2026</span>
            <span>•</span>
            <span>7 min read</span>
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
            The Maldives continues to set the gold standard for luxury travel, with 2026 bringing unprecedented levels of opulence and exclusivity to its pristine atolls. From underwater villas to private islands, the top resorts are redefining what it means to experience paradise.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Soneva Jani: The Overwater Sanctuary</h2>
          <p className="text-gray-300 mb-4">
            Soneva Jani remains the pinnacle of overwater luxury, featuring 5-star villas with retractable roofs for stargazing and direct access to the lagoon. The resort's commitment to sustainability pairs with unparalleled luxury, offering guests experiences like the open-air cinema and the underwater restaurant.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Four Seasons Resort Maldives at Landaa Giraavaru</h2>
          <p className="text-gray-300 mb-4">
            This resort combines Maldivian culture with contemporary luxury, featuring villas with private pools and glass sunroofs. The resort's Marine Discovery Centre allows guests to participate in coral reef restoration and interact with rescued sea turtles.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Conrad Maldives Rangali Island: Underwater Excellence</h2>
          <p className="text-gray-300 mb-4">
            Famous for its underwater restaurant Ithaa, Conrad Maldives continues to innovate with the new Muraka, an underwater suite with a bedroom five meters below sea level. The resort offers unique experiences like private sandbank dinners and bioluminescent lagoon swims.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Velaa Private Island: Bespoke Luxury</h2>
          <p className="text-gray-300 mb-4">
            Meaning "Turtle" in the local Dhivehi language, Velaa Private Island caters to guests seeking ultimate privacy. Each residence features its own infinity pool, personal butler service, and access to the resort's Michelin-starred dining experiences.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Cheval Blanc Randheli: French Elegance</h2>
          <p className="text-gray-300 mb-4">
            Designed by Jacques Grange, this LVMH property brings French sophistication to the Maldives. The resort features spacious villas with contemporary décor, a Jean-Michel Gathy-designed spa, and multiple dining venues helmed by chefs from across the globe.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Six Senses Laamu: Holistic Paradise</h2>
          <p className="text-gray-300 mb-4">
            Located in the pristine Laamu Atoll, Six Senses Laamu focuses on wellness and sustainability. The resort offers overwater and beach villas with organic amenities, a state-of-the-art wellness center, and access to one of the Maldives' most biodiverse house reefs.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">St. Regis Maldives Vommuli Resort: Artistic Indulgence</h2>
          <p className="text-gray-300 mb-4">
            This resort combines contemporary design with Maldivian heritage, featuring villas with glass floors for underwater viewing and a striking art collection. The Iridium Spa offers innovative treatments, while the resort's three restaurants provide diverse culinary experiences.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">COMO Maalifushi: Minimalist Luxury</h2>
          <p className="text-gray-300 mb-4">
            The first COMO resort in the Maldives offers a minimalist approach to luxury, with beach and water villas featuring clean lines and natural materials. The resort's focus on wellness and sustainability appeals to conscious luxury travelers.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Planning Your Maldives Getaway</h2>
          <p className="text-gray-300 mb-4">
            When booking your stay in the Maldives, consider the season, your interests, and the type of experience you're seeking. The dry season from November to April offers the best weather, while the wet season from May to October provides fewer crowds and lower rates.
          </p>

          <p className="text-gray-300 mb-4">
            Each resort offers unique experiences, from marine conservation activities to underwater dining, ensuring that your stay in the Maldives will be nothing short of extraordinary. The 2026 season promises even more innovative amenities and personalized services as resorts continue to compete for the attention of discerning travelers.
          </p>

          <p className="text-gray-300 mb-8">
            Whether you're seeking a romantic escape, a family adventure, or a solo wellness retreat, the Maldives' luxury resorts provide the perfect backdrop for unforgettable memories in one of the world's most beautiful destinations.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Related Articles</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/blog/private-villa-rentals-caribbean-paradise" className="text-yellow-400 hover:text-yellow-300">
                Private Villa Rentals: Caribbean Paradise
              </Link>
            </li>
            <li>
              <Link href="/blog/swiss-alps-luxury-ski-resorts-comparison" className="text-yellow-400 hover:text-yellow-300">
                Swiss Alps: Luxury Ski Resorts Comparison
              </Link>
            </li>
            <li>
              <Link href="/blog/yacht-charters-mediterranean-2026-guide" className="text-yellow-400 hover:text-yellow-300">
                Yacht Charters: Mediterranean 2026 Guide
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}