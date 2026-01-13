import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function SolarSystemBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What are the main differences between terrestrial and gas giant planets?",
      answer: "Terrestrial planets (Mercury, Venus, Earth, Mars) are characterized by solid, rocky surfaces and relatively high densities. They have thin or no atmospheres and few or no moons. Gas giants (Jupiter, Saturn) are primarily composed of hydrogen and helium, have thick atmospheres, and numerous moons. Ice giants (Uranus, Neptune) contain more ices like water, ammonia, and methane in addition to hydrogen and helium."
    },
    {
      question: "What is the significance of the asteroid belt?",
      answer: "The asteroid belt, located between Mars and Jupiter, contains remnants from the early solar system formation. It provides insights into the conditions and processes that occurred during the solar system's formation 4.6 billion years ago. Some asteroids contain pristine materials from the early solar system, while others have been altered by geological processes."
    },
    {
      question: "What is the Kuiper Belt and Oort Cloud?",
      answer: "The Kuiper Belt is a region beyond Neptune containing icy bodies, including dwarf planets like Pluto. It extends from about 30 to 50 astronomical units from the Sun. The Oort Cloud is a theoretical spherical shell of icy objects that surrounds the solar system at distances of thousands of astronomical units. Both regions are sources of comets that occasionally enter the inner solar system."
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
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-black">
      <Head>
        <title>Solar System: Exploration and Discovery - Astronomy | HAM BLOGS</title>
        <meta name="description" content="Journey through our cosmic neighborhood and recent space missions." />
        <link rel="canonical" href="https://ham-blogs.com/blog/solar-system-exploration" />
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
          <h1 className="text-4xl font-bold text-white mb-4">Solar System: Exploration and Discovery</h1>
          <div className="flex items-center text-gray-300 mb-4">
            <span className="mr-4">🪐 Astronomy</span>
            <span>⏱️ 14 min read</span>
          </div>
          <p className="text-xl text-gray-200 italic">
            Journey through our cosmic neighborhood and recent space missions
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Introduction to Our Solar System <button onClick={() => toggleBookmark('intro')} className="ml-2 text-yellow-400">★</button></h2>
          <p>
            Our solar system is a vast cosmic neighborhood consisting of the Sun, eight planets, their moons, dwarf planets, asteroids, comets, and other celestial bodies. Formed about 4.6 billion years ago from a collapsing cloud of gas and dust, the solar system provides a unique laboratory for understanding planetary formation, evolution, and the potential for life.
          </p>
          
          <p>
            The solar system extends far beyond the planets, reaching out to the heliopause where the Sun's influence wanes and interstellar space begins. This complex system contains a remarkable diversity of worlds, from the scorching surface of Mercury to the icy moons of the outer planets, each offering unique insights into planetary processes and the potential for habitability.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">The Inner Planets <button onClick={() => toggleBookmark('inner')} className="ml-2 text-yellow-400">★</button></h2>
          <h3 className="text-yellow-300">Terrestrial Worlds</h3>
          <p>
            The four inner planets—Mercury, Venus, Earth, and Mars—are characterized by solid, rocky surfaces and relatively high densities. Mercury, closest to the Sun, has a heavily cratered surface and extreme temperature variations. Venus, despite being similar in size to Earth, has a thick, toxic atmosphere creating a runaway greenhouse effect.
          </p>

          <p>
            Earth, our home planet, is unique in its ability to sustain complex life, with liquid water, a protective magnetic field, and a stable atmosphere. Mars, the Red Planet, shows evidence of past water activity and may have once harbored life. Its thin atmosphere and polar ice caps make it a prime target for future human exploration.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">The Outer Planets <button onClick={() => toggleBookmark('outer')} className="ml-2 text-yellow-400">★</button></h2>
          <h3 className="text-yellow-300">Gas Giants</h3>
          <p>
            Jupiter and Saturn are gas giants composed primarily of hydrogen and helium. Jupiter, the largest planet, has a complex atmosphere with storms like the Great Red Spot and a strong magnetic field. It hosts 79 known moons, including the potentially habitable Europa with its subsurface ocean.
          </p>

          <h3 className="text-yellow-300">Ice Giants</h3>
          <p>
            Uranus and Neptune, known as ice giants, contain more ices like water, ammonia, and methane in addition to hydrogen and helium. Uranus rotates on its side, possibly due to a past collision, while Neptune has the strongest winds in the solar system. Both have ring systems and numerous moons.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Small Bodies and Regions <button onClick={() => toggleBookmark('small_bodies')} className="ml-2 text-yellow-400">★</button></h2>
          <p>
            Beyond the planets lie numerous small bodies that provide clues to the solar system's formation. The asteroid belt between Mars and Jupiter contains rocky remnants from the early solar system. The Kuiper Belt, beyond Neptune, hosts icy bodies including dwarf planets like Pluto. The theoretical Oort Cloud extends to the solar system's edge, containing long-period comets.
          </p>

          <p>
            Comets, often called "dirty snowballs," originate from these outer regions and develop spectacular tails when approaching the Sun. Asteroids range from small rocks to dwarf planets like Ceres, the largest object in the asteroid belt. These small bodies preserve pristine materials from the early solar system.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Space Missions and Discoveries <button onClick={() => toggleBookmark('missions')} className="ml-2 text-yellow-400">★</button></h2>
          <p>
            Space exploration has revolutionized our understanding of the solar system. The Voyager missions provided the first close-up views of the outer planets. The Cassini mission revealed the complexity of Saturn's system, including the potential habitability of Enceladus. The New Horizons mission gave us our first detailed look at Pluto and the Kuiper Belt.
          </p>

          <p>
            Mars exploration has included orbiters, landers, and rovers like Curiosity and Perseverance, searching for signs of past life. The Juno mission is currently studying Jupiter's interior and magnetic field. The Parker Solar Probe is exploring the Sun's corona, while the James Webb Space Telescope is providing new insights into the outer solar system.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Future of Solar System Exploration <button onClick={() => toggleBookmark('future')} className="ml-2 text-yellow-400">★</button></h2>
          <p>
            The future of solar system exploration is promising with numerous planned missions. NASA's Artemis program aims to return humans to the Moon and establish a sustainable presence. Mars sample return missions will bring Martian rocks to Earth for detailed analysis. Missions to the icy moons Europa and Enceladus will search for subsurface life.
          </p>

          <p>
            Advanced technologies like ion propulsion, improved radiation shielding, and autonomous navigation will enable more ambitious missions. The search for life beyond Earth continues with missions targeting potentially habitable environments in our solar system, while continued observation helps us understand the potential for life elsewhere in the universe.
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
                <p className="font-medium mb-2 text-gray-200">1. Which planet has the strongest magnetic field in our solar system?</p>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) Earth</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) Jupiter</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Saturn</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) Mercury</span></label>
              </div>

              <div>
                <p className="font-medium mb-2 text-gray-200">2. What is the name of the region beyond Neptune that contains icy bodies like Pluto?</p>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) The asteroid belt</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) The Oort Cloud</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) The Kuiper Belt</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) The heliopause</span></label>
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
                  <p className="text-gray-200">Question 1: {quizAnswers.q1 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - Jupiter has the strongest magnetic field in our solar system.</p>
                  <p className="text-gray-200">Question 2: {quizAnswers.q2 === 'C' ? '✓ Correct' : '✗ Incorrect (Correct: C)'} - The Kuiper Belt is the region beyond Neptune containing icy bodies like Pluto.</p>
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
              <Link href="/blog/cosmology-big-bang-theory" className="text-yellow-400 hover:underline">
                ← Cosmology: The Big Bang Theory
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-300">Next Article</h3>
              <Link href="/blog" className="text-yellow-400 hover:underline">
                Back to All Articles →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}