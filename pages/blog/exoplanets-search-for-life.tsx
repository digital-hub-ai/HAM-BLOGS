import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function ExoplanetsBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "How are exoplanets detected?",
      answer: "There are several methods for detecting exoplanets, with the most common being the transit method and radial velocity method. The transit method detects dips in starlight when a planet passes in front of its host star. The radial velocity method measures the star's wobble caused by the gravitational pull of orbiting planets. Other methods include direct imaging, gravitational microlensing, and astrometry."
    },
    {
      question: "What is the habitable zone?",
      answer: "The habitable zone (also called the Goldilocks zone) is the region around a star where liquid water could exist on a planet's surface. It's not too hot and not too cold, but just right for liquid water. The distance of the habitable zone from the star depends on the star's luminosity and temperature."
    },
    {
      question: "Have we found signs of life on other planets?",
      answer: "As of now, scientists have not confirmed the presence of life on any other planet. However, they have identified potentially habitable exoplanets and continue to search for biosignatures—indications of biological activity—in planetary atmospheres using telescopes like the James Webb Space Telescope."
    }
  ];

  const toggleBookmark = (section: string) => {
    if (bookmarks.includes(section)) {
      setBookmarks(bookmarks.filter(item => item !== section));
    } else {
      setBookmarks([...bookmarks, section]);
    }
  };

  const handleQuizAnswer = (questionId: string, answer: string) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionId]: answer
    });
  };

  const checkQuizAnswers = () => {
    setShowQuizResults(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black">
      <Head>
        <title>Exoplanets: The Search for Life - Astronomy | HAM BLOGS</title>
        <meta name="description" content="Discovering worlds beyond our solar system and the quest for habitable planets." />
        <link rel="canonical" href="https://ham-blogs.com/blog/exoplanets-search-for-life" />
      </Head>

      {/* Header */}
      <header className="bg-black/70 backdrop-blur-sm shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-yellow-300 hover:text-yellow-100 font-medium flex items-center"
            >
              ← Back to Astronomy
            </button>
            <div className="flex space-x-4">
              <button 
                onClick={() => toggleBookmark('main')}
                className={`p-2 rounded-full ${bookmarks.includes('main') ? 'bg-yellow-400 text-white' : 'bg-gray-700 text-gray-300'}`}
                aria-label="Bookmark"
              >
                ★
              </button>
            </div>
          </div>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Exoplanets: The Search for Life</h1>
          <div className="flex items-center text-gray-300 mb-4">
            <span className="mr-4">🪐 Astronomy</span>
            <span>⏱️ 15 min read</span>
          </div>
          <p className="text-xl text-gray-200 italic">
            Discovering worlds beyond our solar system and the quest for habitable planets
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Introduction to Exoplanets <button onClick={() => toggleBookmark('intro')} className="ml-2 text-yellow-400">★</button></h2>
          <p>
            Exoplanets, or extrasolar planets, are planets that orbit stars other than our Sun. Since the discovery of the first confirmed exoplanet in 1992, thousands of these distant worlds have been identified. The study of exoplanets has revolutionized our understanding of planetary systems and raised profound questions about the possibility of life elsewhere in the universe.
          </p>
          
          <p>
            The diversity of exoplanets discovered so far is remarkable. We've found gas giants larger than Jupiter orbiting closer to their stars than Mercury orbits our Sun, rocky planets slightly larger than Earth, and even planets that orbit binary star systems. This variety challenges our preconceptions about how planetary systems form and evolve.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Detection Methods <button onClick={() => toggleBookmark('detection')} className="ml-2 text-yellow-400">★</button></h2>
          <h3 className="text-yellow-300">Transit Photometry</h3>
          <p>
            The transit method detects periodic dips in a star's brightness when a planet passes in front of it from our perspective. This technique has been highly successful, particularly with missions like Kepler and TESS. The depth of the transit indicates the planet's size relative to its host star, while the duration and frequency provide information about the orbital period and distance from the star.
          </p>

          <h3 className="text-yellow-300">Radial Velocity</h3>
          <p>
            Radial velocity measurements detect the subtle wobble of a star caused by the gravitational pull of orbiting planets. As a planet orbits, it tugs on its host star, causing the star to move slightly toward and away from us. This motion creates small shifts in the star's spectral lines due to the Doppler effect, revealing the presence of planets and providing estimates of their minimum mass.
          </p>

          <h3 className="text-yellow-300">Direct Imaging and Other Techniques</h3>
          <p>
            Direct imaging involves capturing actual images of exoplanets, though this is extremely challenging due to the overwhelming brightness of their host stars. Advanced techniques like coronagraphy block starlight to reveal faint orbiting planets. Other methods include gravitational microlensing, which detects planets when they act as gravitational lenses, and astrometry, which measures the precise movement of stars.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Types of Exoplanets <button onClick={() => toggleBookmark('types')} className="ml-2 text-yellow-400">★</button></h2>
          <p>
            Exoplanets exhibit incredible diversity. Hot Jupiters are gas giants that orbit extremely close to their stars, completing orbits in just a few days. Super-Earths are planets larger than Earth but smaller than Neptune, representing a category not found in our solar system. Mini-Neptunes are smaller versions of ice giants, while terrestrial exoplanets have rocky compositions similar to Earth, Venus, Mars, and Mercury.
          </p>

          <p>
            Some exoplanets exist in binary or multiple star systems, experiencing complex gravitational dynamics. Others orbit pulsars, the rapidly rotating remnants of exploded stars. The discovery of these diverse planetary types has expanded our understanding of possible planetary architectures and formation mechanisms.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Habitable Zones and Potentially Habitable Worlds <button onClick={() => toggleBookmark('habitable')} className="ml-2 text-yellow-400">★</button></h2>
          <p>
            The habitable zone is the region around a star where conditions might allow liquid water to exist on a planet's surface—the key ingredient for life as we know it. However, habitability depends on many factors beyond just distance from the star, including atmospheric composition, planetary mass, magnetic field strength, and geological activity.
          </p>

          <p>
            Several potentially habitable exoplanets have been discovered, including Proxima Centauri b, TRAPPIST-1e, and Kepler-452b. These discoveries represent prime targets for follow-up observations to characterize their atmospheres and search for potential biosignatures.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Future Prospects and the Search for Life <button onClick={() => toggleBookmark('future')} className="ml-2 text-yellow-400">★</button></h2>
          <p>
            The search for extraterrestrial life continues with increasingly sophisticated instruments. The James Webb Space Telescope is analyzing the atmospheres of exoplanets for signs of water vapor, carbon dioxide, methane, and other potential biosignatures. Future missions like the Nancy Grace Roman Space Telescope and ground-based Extremely Large Telescopes will further advance our capabilities.
          </p>

          <p>
            The discovery of life elsewhere would fundamentally change our understanding of our place in the universe. While we have not yet found definitive evidence of extraterrestrial life, the growing catalog of exoplanets, particularly those in habitable zones, increases the likelihood that we may find signs of life in the coming decades.
          </p>
        </section>

        <section className="bg-indigo-900/50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-yellow-300">Interactive Quiz</h2>
          {!isQuizActive ? (
            <button 
              onClick={() => setIsQuizActive(true)}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Test Your Knowledge
            </button>
          ) : (
            <div className="space-y-6">
              <div>
                <p className="font-medium mb-2 text-gray-200">1. What is the habitable zone also called?</p>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) The temperate zone</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) The Goldilocks zone</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) The sweet spot</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) The comfort zone</span></label>
              </div>

              <div>
                <p className="font-medium mb-2 text-gray-200">2. Which method detects exoplanets by measuring dips in starlight?</p>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) Radial velocity</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) Direct imaging</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) Transit photometry</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) Microlensing</span></label>
              </div>

              <button 
                onClick={checkQuizAnswers}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4"
              >
                Check Answers
              </button>
              
              {showQuizResults && (
                <div className="mt-4 p-4 bg-black/30 rounded border border-purple-500">
                  <h3 className="font-bold mb-2 text-yellow-300">Results:</h3>
                  <p className="text-gray-200">Question 1: {quizAnswers.q1 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - The habitable zone is also called the Goldilocks zone.</p>
                  <p className="text-gray-200">Question 2: {quizAnswers.q2 === 'C' ? '✓ Correct' : '✗ Incorrect (Correct: C)'} - Transit photometry detects exoplanets by measuring dips in starlight.</p>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="bg-purple-900/50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-yellow-300">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-purple-700 pb-4">
                <h3 className="font-semibold text-yellow-200">{faq.question}</h3>
                <p className="mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <nav className="border-t border-purple-700 pt-6 mt-8">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold mb-2 text-gray-300">Previous Article</h3>
              <Link href="/blog/galaxies-and-cosmic-structure" className="text-yellow-400 hover:underline">
                ← Galaxies and Cosmic Structure
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-300">Next Article</h3>
              <Link href="/blog/black-holes-mysteries-revealed" className="text-yellow-400 hover:underline">
                Black Holes: Mysteries Revealed →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}