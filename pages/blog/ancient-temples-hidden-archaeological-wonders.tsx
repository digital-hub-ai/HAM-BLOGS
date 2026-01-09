import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function AncientTemplesHiddenWonders() {
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
        <title>Ancient Temples: Hidden Archaeological Wonders - Premium Blog Platform</title>
        <meta name="description" content="Discovering lesser-known temples and archaeological sites that hold fascinating historical secrets" />
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
            Ancient Temples: Hidden Archaeological Wonders
          </h1>
          
          <div className="flex justify-center items-center space-x-4 text-gray-300 mb-6">
            <span>January 8, 2026</span>
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
            While famous temples like Angkor Wat and the Parthenon draw millions of visitors annually, countless other ancient religious structures remain hidden from mainstream tourism. These lesser-known sites offer profound insights into the spiritual beliefs, architectural ingenuity, and cultural practices of past civilizations. Exploring these hidden archaeological wonders provides intimate encounters with history, away from the crowds that often obscure the spiritual essence of more popular destinations.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Kotorr Temple, Kosovo</h2>
          <p className="text-gray-300 mb-4">
            Hidden in the rugged mountains of western Kosovo, the Kotorr Temple complex dates back to the 4th century BCE. This ancient Illyrian sanctuary features unique architectural elements that predate Roman influence in the region. The temple's underground chambers contain intricate frescoes depicting ritual ceremonies that remain partially deciphered by archaeologists today.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Kailasa Temple, Ellora Caves, India</h2>
          <p className="text-gray-300 mb-4">
            Though technically known to scholars, Kailasa Temple remains overshadowed by more famous Indian monuments. Carved from a single rock in the 8th century CE, this monolithic structure represents one of humanity's greatest architectural achievements. Dedicated to Lord Shiva, the temple features elaborate sculptures and halls carved directly from the volcanic basalt of the Charanandri Hills.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Temple of the Dog, Hierakonpolis, Egypt</h2>
          <p className="text-gray-300 mb-4">
            Predating the Great Pyramid by several centuries, this ancient Egyptian temple dedicated to the jackal god Wepwawet offers insights into pre-dynastic religious practices. Recent archaeological work has revealed unique burial practices and ceremonial objects that challenge our understanding of early Egyptian civilization. The temple's architecture differs significantly from later pharaonic styles.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Hatra, Iraq</h2>
          <p className="text-gray-300 mb-4">
            This fortified city and temple complex in northern Iraq represents a unique blend of Mesopotamian, Greek, and Roman architectural influences. The Parthian capital of Hatra features impressive defensive walls and temples dedicated to Arabian, Aramean, and Babylonian gods. Despite surviving ISIL destruction attempts, the site remains relatively unknown to international tourists.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Takht-i-Bahi, Pakistan</h2>
          <p className="text-gray-300 mb-4">
            Perched on a hilltop in the Mardan district, Takht-i-Bahi's Buddhist monastery complex survived centuries of invasions due to its strategic location. Dating from the 1st century BCE to the 7th century CE, the site features stupas, monasteries, and assembly halls that illustrate the evolution of Buddhist architecture and monastic life in Gandhara.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Banteay Chhmar, Cambodia</h2>
          <p className="text-gray-300 mb-4">
            This remote temple complex rivals Angkor Wat in scale but remains largely unrestored and uncrowded. Built in the 12th century during the reign of Jayavarman VII, Banteay Chhmar features unique bas-reliefs depicting military campaigns and daily life during the Khmer Empire. The temple's remote location has preserved its atmospheric quality and connection to the surrounding landscape.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Medinet Habu, Egypt</h2>
          <p className="text-gray-300 mb-4">
            The mortuary temple of Ramesses III near Luxor contains some of the best-preserved reliefs in Egypt, depicting the pharaoh's battles against the Sea Peoples. Unlike more crowded temples, Medinet Habu offers peaceful contemplation of hieroglyphic texts and detailed carvings that provide insights into New Kingdom military organization and foreign relations.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Preservation Challenges and Responsible Tourism</h2>
          <p className="text-gray-300 mb-4">
            Many hidden archaeological sites face threats from looting, environmental degradation, and inadequate funding for conservation. Responsible tourism can support preservation efforts by providing economic incentives for local communities to protect these sites. Visiting lesser-known temples helps distribute tourist revenue and reduces pressure on heavily visited sites.
          </p>

          <p className="text-gray-300 mb-8">
            These hidden archaeological wonders remind us that the study of ancient civilizations continues to evolve as new discoveries challenge our assumptions about the past. Each temple complex tells unique stories about human spirituality, architectural innovation, and cultural exchange across millennia. By visiting and supporting the preservation of these sites, we contribute to a more complete understanding of our shared human heritage.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Related Articles</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/blog/world-heritage-sites-preserving-human-history" className="text-yellow-400 hover:text-yellow-300">
                World Heritage Sites: Preserving Human History
              </Link>
            </li>
            <li>
              <Link href="/blog/traditional-crafts-endangered-art-forms" className="text-yellow-400 hover:text-yellow-300">
                Traditional Crafts: Endangered Art Forms
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