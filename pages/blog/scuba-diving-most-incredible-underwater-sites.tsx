import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ScubaDivingMostIncredibleSites() {
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
        <title>Scuba Diving: Most Incredible Underwater Sites - Premium Blog Platform</title>
        <meta name="description" content="Discover the world's most spectacular dive sites teeming with marine life" />
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
            Scuba Diving: Most Incredible Underwater Sites
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
            The underwater world offers some of the most breathtaking and diverse ecosystems on Earth. From vibrant coral reefs to mysterious wrecks, these dive sites provide unforgettable experiences for underwater explorers. Each location offers unique marine life, geological formations, and diving conditions that attract divers from around the world.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Great Blue Hole, Belize</h2>
          <p className="text-gray-300 mb-4">
            This perfectly circular marine sinkhole, over 300 meters across and 125 meters deep, offers a unique diving experience into the geological past. Divers descend through layers of stalactites and stalagmites, remnants of a limestone cave system formed during ice ages. The deep blue waters are home to Caribbean reef sharks, giant groupers, and diverse coral formations.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Raja Ampat, Indonesia</h2>
          <p className="text-gray-300 mb-4">
            Known as the "Rainbow of the Seas," Raja Ampat contains the highest marine biodiversity on Earth. With over 1,500 fish species and 600 coral species, divers experience an underwater kaleidoscope of colors and life. The region's four main islands are surrounded by pristine reefs, manta rays, and the elusive walking sharks that use their fins to move along the seafloor.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Great Barrier Reef, Australia</h2>
          <p className="text-gray-300 mb-4">
            The world's largest coral reef system stretches over 2,300 kilometers and offers diverse diving experiences. From the famous Cod Hole, where giant potato cod approach divers, to the Ribbon Reefs with their dramatic drop-offs, this UNESCO World Heritage site showcases the beauty and complexity of coral ecosystems. Divers encounter sea turtles, manta rays, and over 400 coral species.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Cenotes, Mexico</h2>
          <p className="text-gray-300 mb-4">
            These flooded limestone caves on the Yucatan Peninsula create otherworldly diving experiences. Crystal-clear freshwater reveals stunning geological formations, stalactites, and stalagmites formed when the caves were dry. The halocline effect creates a visible boundary between freshwater and saltwater, creating a surreal diving environment with unique light effects.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Red Sea, Egypt</h2>
          <p className="text-gray-300 mb-4">
            The Red Sea offers some of the world's clearest waters and most pristine coral reefs. The SS Thistlegorm wreck provides a historical diving experience with artifacts from World War II. Divers encounter hammerhead sharks, oceanic whitetip sharks, and the famous "Shark Reef" where multiple species congregate. The warm, clear waters and excellent visibility make it a year-round diving destination.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Galápagos Islands, Ecuador</h2>
          <p className="text-gray-300 mb-4">
            The unique marine ecosystem of the Galápagos creates extraordinary diving encounters. Hammerhead sharks, whale sharks, manta rays, and marine iguanas share the same waters. The cold, nutrient-rich currents support diverse marine life, while the islands' isolation has created unique species found nowhere else on Earth. Diving here feels like exploring an untouched world.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Palau, Micronesia</h2>
          <p className="text-gray-300 mb-4">
            Famous for the Jellyfish Lake, Palau offers unique diving experiences in marine lakes with millions of stingless jellyfish. The Rock Islands provide diverse reef systems, WWII wrecks, and the famous Blue Corner Wall where strong currents bring nutrient-rich water supporting abundant marine life. Divers encounter mantas, sharks, and pristine coral gardens.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Safety and Conservation</h2>
          <p className="text-gray-300 mb-4">
            Responsible diving practices protect these fragile ecosystems while ensuring diver safety. Proper buoyancy control prevents damage to coral formations. Following local guidelines, using reef-safe sunscreen, and maintaining appropriate distance from marine life preserves these environments for future generations. Dive certification, equipment checks, and dive plan reviews are essential for safety.
          </p>

          <p className="text-gray-300 mb-8">
            These incredible underwater destinations represent just a fraction of the world's diving opportunities. Each site offers unique experiences that connect divers with the wonders of the marine world, creating memories that last a lifetime while fostering appreciation for ocean conservation.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Related Articles</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/blog/safari-adventures-beyond-african-territory" className="text-yellow-400 hover:text-yellow-300">
                Safari Adventures Beyond African Territory
              </Link>
            </li>
            <li>
              <Link href="/blog/adventure-travel-safety-tips-experts" className="text-yellow-400 hover:text-yellow-300">
                Adventure Travel Safety Tips from Experts
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