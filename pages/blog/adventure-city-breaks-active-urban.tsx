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
        title: 'Luxury City Breaks: Ultra Premium Urban Experiences',
        slug: 'luxury-city-breaks-ultra-premium',
        excerpt: 'Indulge in the most exclusive city experiences with premium accommodations, fine dining, and VIP access...'
      },
      {
        id: '2',
        title: 'Family-Friendly City Breaks: Urban Adventures for All Ages',
        slug: 'family-friendly-city-breaks',
        excerpt: 'Discover cities that offer engaging activities, attractions, and amenities perfect for family vacations...'
      },
      {
        id: '3',
        title: 'Cultural City Breaks: Arts, Museums, and Cultural Immersion',
        slug: 'cultural-city-breaks-arts-culture',
        excerpt: 'Immerse yourself in the rich cultural offerings of world-class cities with museums, galleries, and performances...'
      }
    ];
    
    // Randomly select 2 articles
    const shuffled = [...allArticles].sort(() => 0.5 - Math.random());
    setRelatedArticles(shuffled.slice(0, 2));
  }, [router]);

  const toggleBookmark = () => {
    const articleData = {
      id: Math.random().toString(36).substr(2, 9),
      title: 'Adventure City Breaks: Active Urban Exploration',
      slug: router.pathname.split('/').pop(),
      date: '2026-01-06',
      category: 'City Breaks'
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
        <title>Adventure City Breaks: Active Urban Exploration | Premium Blog Platform</title>
        <meta name="description" content="Experience cities through an adventurous lens with urban hiking, cycling, and active exploration" />
        <link rel="canonical" href="https://www.premiumblogplatform.com/blog/adventure-city-breaks-active-urban" />
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
              City Breaks
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
            Adventure City Breaks: Active Urban Exploration
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-400 text-sm mb-6">
            <span className="mr-4">January 6, 2026</span>
            <span>8 min read</span>
          </div>
        </header>

        <main className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Adventure city breaks offer an exhilarating way to experience urban environments through physical activity and active exploration. These dynamic trips combine sightseeing with exercise, providing an energetic approach to discovering cities. From urban hiking trails to cycling tours, rock climbing walls, and water sports in city harbors, adventure city breaks appeal to travelers seeking both cultural immersion and physical challenges.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Urban Adventure Opportunities</h2>
          
          <p className="mb-6 text-gray-200">
            Modern cities increasingly recognize the demand for active tourism and have developed extensive networks of urban trails, cycling paths, and adventure facilities. These range from elevated parklands like New York's High Line to extensive urban trail systems that wind through city centers, connecting parks and cultural landmarks.
          </p>
          
          <p className="mb-6 text-gray-200">
            Many cities have embraced adventure tourism by installing outdoor fitness equipment in parks, creating urban climbing walls, and establishing adventure parks within city limits. These facilities cater to varying skill levels, making active exploration accessible to both seasoned adventurers and casual exercisers.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Cities Leading Urban Adventure Tourism</h2>
          
          <p className="mb-6 text-gray-200">
            Vancouver exemplifies the adventure city break with its seamless integration of urban environment and outdoor recreation. The seawall provides a 9-kilometer paved path for cycling, jogging, and walking with spectacular mountain and ocean views. Nearby mountains offer hiking trails accessible within minutes of downtown, making it ideal for active urban exploration.
          </p>
          
          <p className="mb-6 text-gray-200">
            Cape Town offers unparalleled urban adventure opportunities with Table Mountain providing hiking trails of varying difficulty levels, while the Atlantic coastline offers surfing, kayaking, and other water sports. The city's compact layout makes it possible to combine cultural sightseeing with outdoor activities in a single day.
          </p>
          
          <p className="mb-6 text-gray-200">
            Melbourne has developed an extensive network of urban trails and cycling paths, complemented by laneways that provide unique running and walking routes. The city's proximity to surfing beaches and bushland hiking trails allows for diverse adventure experiences within a short distance of the urban center.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Active Transportation and Exploration</h2>
          
          <p className="mb-6 text-gray-200">
            Cycling has emerged as a premier way to explore cities actively. Many destinations offer bike-sharing programs with high-quality bicycles and well-marked cycling routes. Electric bikes have expanded accessibility, allowing people to cover greater distances and tackle hills with less exertion while still enjoying active exploration.
          </p>
          
          <p className="mb-6 text-gray-200">
            Running tours have gained popularity, with companies offering guided runs through city streets that combine fitness with sightseeing. These tours often take runners through areas they might not discover independently, with knowledgeable guides sharing historical and cultural insights along the route.
          </p>
          
          <p className="mb-6 text-gray-200">
            Segway and electric scooter tours provide intermediate transportation options that allow for active movement while reducing physical exertion. These options enable exploration of larger areas than walking while maintaining the ability to stop frequently and interact with the environment.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Adventure Sports in Urban Settings</h2>
          
          <p className="mb-6 text-gray-200">
            Rock climbing walls integrated into urban architecture have appeared in many cities, offering climbing experiences without leaving the city center. Some buildings feature climbing facades designed specifically for recreational climbing, while others host temporary wall installations for seasonal activities.
          </p>
          
          <p className="mb-6 text-gray-200">
            Water sports thrive in port cities and those with rivers or lakes running through them. Kayaking and stand-up paddleboarding have become popular ways to see cities from the water, offering unique perspectives of skylines and waterfronts. Many cities offer equipment rentals and guided tours for these activities.
          </p>
          
          <p className="mb-6 text-gray-200">
            Adventure parks and obstacle courses within cities provide structured active experiences for individuals and groups. These facilities often feature zip lines, rope courses, and climbing challenges designed for various skill levels, making them suitable for both experienced adventurers and novices.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Urban Hiking and Trail Running</h2>
          
          <p className="mb-6 text-gray-200">
            Many cities are built around hills, mountains, or other natural features that provide hiking opportunities within urban boundaries. These trails offer the unique experience of transitioning from dense urban environments to natural settings within short distances.
          </p>
          
          <p className="mb-6 text-gray-200">
            Urban hiking trails often provide panoramic views of city skylines, making the physical effort of climbing rewarding with spectacular vistas. Popular trails become destinations in themselves, offering photo opportunities and observation points that attract both locals and visitors.
          </p>
          
          <p className="mb-6 text-gray-200">
            Trail running in urban settings combines the cardiovascular benefits of running with navigation skills and awareness of varied terrain. Cities with elevation changes or integrated natural areas offer challenging routes that keep runners engaged and motivated.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Equipment and Preparation</h2>
          
          <p className="mb-6 text-gray-200">
            Proper footwear is essential for adventure city breaks, with options ranging from trail running shoes for mixed surfaces to lightweight hiking boots for varied terrain. Comfortable, moisture-wicking clothing that transitions from activity to urban dining is equally important.
          </p>
          
          <p className="mb-6 text-gray-200">
            Portable gear like folding bicycles, compact binoculars for wildlife viewing, and water purification tablets for longer explorations enhance the adventure city break experience. Multi-purpose items like sarongs that serve as towels, blankets, or modesty coverings prove valuable in urban settings.
          </p>
          
          <p className="mb-6 text-gray-200">
            Navigation tools including smartphone apps, offline maps, and portable chargers ensure that adventurers can explore confidently. Many cities offer downloadable maps specifically designed for cycling, hiking, or running routes with points of interest marked along the way.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Safety and Planning Considerations</h2>
          
          <p className="mb-6 text-gray-200">
            Weather conditions can change rapidly in urban environments due to heat islands and tall buildings creating microclimates. Checking forecasts and preparing for temperature variations, especially during sunrise or sunset activities, ensures comfort and safety during active exploration.
          </p>
          
          <p className="mb-6 text-gray-200">
            Crime rates and safe areas vary within cities, so researching safe routes for running, cycling, or hiking during different times of day is essential. Well-populated routes and daylight activities generally provide safer options for active exploration.
          </p>
          
          <p className="mb-6 text-gray-200">
            Hydration and nutrition planning becomes critical during active city exploration. Identifying cafes, restaurants, and water fountains along planned routes ensures that adventurers can maintain energy and fluid levels during extended activities.
          </p>

          <blockquote className="border-l-4 border-yellow-500 pl-6 py-2 my-8 text-gray-200 italic">
            Adventure city breaks transform urban environments into playgrounds for active exploration, where every street corner might reveal a new physical challenge or cultural discovery.
          </blockquote>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Specialized Adventure Tours</h2>
          
          <p className="mb-6 text-gray-200">
            Many cities offer specialized adventure tours that combine physical activity with cultural experiences. These might include sunrise hikes to viewpoints followed by breakfast at local cafes, cycling tours that incorporate cooking classes, or kayaking trips that include visits to waterside restaurants.
          </p>
          
          <p className="mb-6 text-gray-200">
            Night adventures provide unique perspectives of illuminated cityscapes. Night photography walks, full moon kayaking tours, or evening cycling excursions offer different sensory experiences of familiar urban environments.
          </p>
          
          <p className="mb-6 text-gray-200">
            Seasonal adventures take advantage of temporary opportunities like winter ice skating trails, autumn foliage hiking routes, spring cherry blossom cycling paths, or summer beach volleyball courts. These time-sensitive activities add urgency and special meaning to city break planning.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusion</h2>
          
          <p className="mb-6 text-gray-200">
            Adventure city breaks represent a growing segment of urban tourism that appeals to active travelers seeking to combine physical challenges with cultural exploration. These experiences offer opportunities to see cities from unique perspectives while maintaining fitness and enjoying outdoor activities.
          </p>
          
          <p className="mb-6 text-gray-200">
            The success of adventure city breaks depends on selecting destinations that offer diverse active opportunities and planning activities that match individual fitness levels and interests. With proper preparation, these trips provide memorable experiences that engage both body and mind.
          </p>
          
          <p className="mb-6 text-gray-200">
            As cities continue to invest in active recreation infrastructure, adventure city breaks will likely become more accessible and diverse. The integration of technology, improved safety measures, and expanded activity options promise even more engaging urban adventure experiences in the future.
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