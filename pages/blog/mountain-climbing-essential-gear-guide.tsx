import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MountainClimbingEssentialGear() {
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
        <title>Mountain Climbing Essential Gear Guide - Premium Blog Platform</title>
        <meta name="description" content="Complete equipment checklist for safe and successful mountain expeditions" />
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
            Mountain Climbing Essential Gear Guide
          </h1>
          
          <div className="flex justify-center items-center space-x-4 text-gray-300 mb-6">
            <span>January 6, 2026</span>
            <span>•</span>
            <span>10 min read</span>
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
            Mountain climbing demands meticulous preparation and the right equipment for safety and success. The harsh mountain environment presents unique challenges including extreme weather, altitude sickness, and difficult terrain. This comprehensive guide covers essential gear for various climbing levels and objectives.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Clothing Systems</h2>
          <p className="text-gray-300 mb-4">
            Layered clothing systems are critical for temperature regulation. The base layer should be moisture-wicking synthetic or merino wool. The insulating layer provides warmth with materials like fleece or down. The outer shell protects against wind, rain, and snow with waterproof-breathable fabrics like Gore-Tex or eVent.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Insulation Options</h3>
          <p className="text-gray-300 mb-4">
            Down jackets and sleeping bags offer superior warmth-to-weight ratios but lose effectiveness when wet. Synthetic insulation maintains performance when damp but is bulkier. For mixed conditions, consider hybrid designs with down in core areas and synthetic in potential wet zones.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Footwear</h2>
          <p className="text-gray-300 mb-4">
            Mountaineering boots must provide ankle support, warmth, and compatibility with crampons for technical routes. Double boots feature an insulated inner boot and rigid outer shell for extreme cold. Single mountaineering boots are lighter for less technical terrain. Ensure proper fit with room for warm socks and slight foot swelling at altitude.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Climbing Hardware</h2>
          <p className="text-gray-300 mb-4">
            Essential hardware includes ice axes for self-arrest and support, crampons for traction on ice and snow, and climbing helmets for protection from falling debris. Carabiners, slings, and anchors are necessary for technical routes. Invest in quality equipment that meets UIAA or CE standards.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Rope Systems</h3>
          <p className="text-gray-300 mb-4">
            Dynamic ropes stretch to absorb fall impact and should meet UIAA standards for climbing. Single ropes (9-11mm diameter) are standard for most routes. Double ropes offer redundancy and reduced rope drag on wandering routes. Cords and webbing serve for anchor construction and rappelling.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Navigation and Communication</h2>
          <p className="text-gray-300 mb-4">
            GPS devices with extra batteries provide location data and emergency signaling capability. Maps in waterproof cases and compasses are backup navigation tools. Altimeters monitor elevation gain. Satellite communicators enable emergency contact in areas without cell coverage.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Safety Equipment</h2>
          <p className="text-gray-300 mb-4">
            Avalaunch equipment includes transceivers, probes, and shovels for rescue situations. First aid kits should address high-altitude and cold-weather injuries. Headlamps with extra batteries are essential for early starts and emergencies. Sunglasses protect against UV radiation reflected from snow and ice.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Emergency Gear</h3>
          <p className="text-gray-300 mb-4">
            Emergency shelters like bivvy sacks or lightweight tents provide protection during unexpected overnights. Fire-starting materials function in wet conditions. High-energy foods sustain energy during delays. Whistles signal for help. Reflective materials aid visibility to rescuers.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Backpack Selection</h2>
          <p className="text-gray-300 mb-4">
            Pack size depends on trip duration and objective. Day packs (20-30L) suit single-day climbs. Overnight trips require 40-60L capacity. Multi-day expeditions need 60-80L or larger. External frame packs distribute weight well for heavy loads. Internal frame packs offer better stability during technical climbing.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">High-Altitude Considerations</h2>
          <p className="text-gray-300 mb-4">
            Above 8,000 feet, altitude affects performance and health. Gradual acclimatization reduces acute mountain sickness risk. Oxygen systems may be necessary for extreme altitudes. Increased UV exposure requires enhanced sun protection. Temperature drops approximately 3.5°F per 1,000 feet of elevation gain.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Gear Maintenance and Inspection</h2>
          <p className="text-gray-300 mb-4">
            Regular inspection prevents equipment failure during critical moments. Check ropes for fraying, cuts, or excessive wear. Inspect carabiners for cracks or sharp edges. Test electronic devices before departure. Replace worn items well before departure to ensure availability of replacements.
          </p>

          <p className="text-gray-300 mb-8">
            Proper gear selection and maintenance significantly enhance safety and enjoyment in mountain environments. The investment in quality equipment pays dividends when conditions deteriorate or unexpected situations arise. Remember that gear is only effective when properly used and maintained.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Related Articles</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/blog/hiking-trails-most-breathtaking-views" className="text-yellow-400 hover:text-yellow-300">
                Hiking Trails with the Most Breathtaking Views
              </Link>
            </li>
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
          </ul>
        </div>
      </div>
    </div>
  );
}