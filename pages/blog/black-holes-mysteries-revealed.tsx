import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function BlackHolesBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is an event horizon?",
      answer: "An event horizon is the boundary around a black hole beyond which nothing, not even light, can escape. It represents the point of no return. Once an object crosses the event horizon, it cannot communicate with the outside universe and will inevitably fall toward the singularity at the center of the black hole."
    },
    {
      question: "Can black holes evaporate?",
      answer: "Yes, according to Stephen Hawking's theoretical work, black holes can emit radiation and gradually lose mass over time, a process known as Hawking radiation. However, this effect is extremely weak for stellar-mass black holes, taking much longer than the current age of the universe to significantly affect the black hole's mass."
    },
    {
      question: "How do we know black holes exist if we can't see them?",
      answer: "Although we cannot see black holes directly because they do not emit light, we can observe their effects on their surroundings. These include the motion of stars orbiting invisible massive objects, the emission of X-rays from heated matter in accretion disks, gravitational lensing effects, and gravitational waves produced during black hole mergers."
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-indigo-900">
      <Head>
        <title>Black Holes: Mysteries Revealed - Astronomy | HAM BLOGS</title>
        <meta name="description" content="Exploring the enigmatic nature of black holes and their role in the cosmos." />
        <link rel="canonical" href="https://ham-blogs.com/blog/black-holes-mysteries-revealed" />
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
          <h1 className="text-4xl font-bold text-white mb-4">Black Holes: Mysteries Revealed</h1>
          <div className="flex items-center text-gray-300 mb-4">
            <span className="mr-4">🕳️ Astronomy</span>
            <span>⏱️ 12 min read</span>
          </div>
          <p className="text-xl text-gray-200 italic">
            Exploring the enigmatic nature of black holes and their role in the cosmos
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Introduction to Black Holes <button onClick={() => toggleBookmark('intro')} className="ml-2 text-yellow-400">★</button></h2>
          <p>
            Black holes are among the most fascinating and mysterious objects in the universe. These regions of spacetime possess gravitational fields so intense that nothing—not even light—can escape once it crosses the event horizon. First predicted by Einstein's general theory of relativity, black holes have moved from theoretical curiosities to confirmed astronomical objects that play crucial roles in the evolution of galaxies.
          </p>
          
          <p>
            Despite their name, black holes are not empty holes in space. Instead, they are concentrations of mass so dense that they severely warp spacetime itself. The study of black holes has revealed profound connections between gravity, quantum mechanics, and thermodynamics, pushing the boundaries of our understanding of physics.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Formation of Black Holes <button onClick={() => toggleBookmark('formation')} className="ml-2 text-yellow-400">★</button></h2>
          <h3 className="text-yellow-300">Stellar-Mass Black Holes</h3>
          <p>
            Stellar-mass black holes form when massive stars (typically more than 20-25 times the mass of our Sun) exhaust their nuclear fuel and undergo catastrophic collapse. When the core of such a star collapses beyond the point where neutron degeneracy pressure can support it, nothing can halt the collapse, resulting in a black hole. This process often accompanies a supernova explosion that can briefly outshine an entire galaxy.
          </p>

          <h3 className="text-yellow-300">Supermassive Black Holes</h3>
          <p>
            Supermassive black holes, found at the centers of most galaxies, contain millions to billions of times the mass of our Sun. Their formation mechanism is still an active area of research. They may form from the merger of smaller black holes, rapid accretion of matter, or the direct collapse of massive gas clouds in the early universe. These behemoths play a crucial role in galaxy formation and evolution.
          </p>

          <h3 className="text-yellow-300">Intermediate-Mass Black Holes</h3>
          <p>
            Intermediate-mass black holes, with masses between stellar-mass and supermassive black holes, represent a relatively new category. Their existence has been inferred from ultra-luminous X-ray sources and gravitational wave detections, but they remain less well understood than their smaller and larger counterparts.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Properties and Structure <button onClick={() => toggleBookmark('properties')} className="ml-2 text-yellow-400">★</button></h2>
          <p>
            Black holes are characterized by three fundamental properties: mass, electric charge, and angular momentum (spin). According to the no-hair theorem, these three parameters completely describe a black hole externally. The simplest black hole is non-rotating and uncharged (Schwarzschild black hole), while most realistic black holes are expected to rotate (Kerr black holes).
          </p>

          <p>
            The event horizon defines the boundary beyond which escape becomes impossible. Inside the event horizon lies the singularity, where spacetime curvature becomes infinite according to general relativity. However, quantum effects likely become important near the singularity, suggesting that our current understanding may be incomplete.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Observational Evidence and Detection <button onClick={() => toggleBookmark('detection')} className="ml-2 text-yellow-400">★</button></h2>
          <p>
            Although black holes themselves do not emit light, their presence can be inferred through their effects on surrounding matter. When matter falls toward a black hole, it forms an accretion disk that heats up to millions of degrees, emitting intense X-rays and other electromagnetic radiation. The motion of stars near the galactic center provides compelling evidence for supermassive black holes.
          </p>

          <p>
            The Event Horizon Telescope captured the first direct images of black holes, showing the shadow of the black hole against the glowing accretion disk. Additionally, the detection of gravitational waves from merging black holes by LIGO and Virgo has opened a new window for studying these enigmatic objects.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Role in the Universe <button onClick={() => toggleBookmark('role')} className="ml-2 text-yellow-400">★</button></h2>
          <p>
            Black holes play crucial roles in cosmic evolution. Supermassive black holes at galactic centers can regulate star formation through powerful jets and outflows, affecting the growth of their host galaxies. These active galactic nuclei (AGN) can outshine entire galaxies and influence large-scale cosmic structure.
          </p>

          <p>
            Black holes also contribute to the synthesis of heavy elements. When neutron stars merge with black holes or when black holes form from collapsing massive stars, r-process nucleosynthesis occurs, producing elements heavier than iron. These elements are then dispersed into the interstellar medium, enriching future generations of stars and planets.
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
                <p className="font-medium mb-2 text-gray-200">1. What is the boundary around a black hole beyond which nothing can escape?</p>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) Singularity</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) Ergosphere</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Event horizon</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) Accretion disk</span></label>
              </div>

              <div>
                <p className="font-medium mb-2 text-gray-200">2. How do stellar-mass black holes typically form?</p>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) From the collision of neutron stars</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) From the collapse of massive stars after exhausting nuclear fuel</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) Through the direct collapse of gas clouds</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) From the merger of white dwarfs</span></label>
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
                  <p className="text-gray-200">Question 1: {quizAnswers.q1 === 'C' ? '✓ Correct' : '✗ Incorrect (Correct: C)'} - The event horizon is the boundary beyond which nothing can escape.</p>
                  <p className="text-gray-200">Question 2: {quizAnswers.q2 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - Stellar-mass black holes form from the collapse of massive stars after exhausting nuclear fuel.</p>
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
              <Link href="/blog/exoplanets-search-for-life" className="text-yellow-400 hover:underline">
                ← Exoplanets: The Search for Life
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-300">Next Article</h3>
              <Link href="/blog/cosmology-big-bang-theory" className="text-yellow-400 hover:underline">
                Cosmology: The Big Bang Theory →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}