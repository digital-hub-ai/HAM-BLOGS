import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function StellarEvolutionBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "How do stars form?",
      answer: "Stars form from dense regions within molecular clouds of gas and dust in space. Gravity causes these regions to collapse, heating up as they compress. When the core temperature reaches about 10 million Kelvin, nuclear fusion of hydrogen begins, marking the birth of a star."
    },
    {
      question: "What determines a star's lifespan?",
      answer: "A star's mass is the primary factor determining its lifespan. More massive stars burn through their fuel much faster and have shorter lives, sometimes only a few million years. Smaller stars like red dwarfs can burn for trillions of years due to their slower fusion rates."
    },
    {
      question: "What happens when a star dies?",
      answer: "A star's death depends on its mass. Stars like our Sun will expand to red giants, shed their outer layers to form planetary nebulae, and end as white dwarfs. More massive stars explode as supernovae, potentially leaving neutron stars or black holes. The heaviest stars may collapse directly into black holes."
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
        <title>Stellar Evolution: The Life Cycle of Stars - Astronomy | HAM BLOGS</title>
        <meta name="description" content="Understanding how stars form, evolve, and meet their final fate." />
        <link rel="canonical" href="https://ham-blogs.com/blog/stellar-evolution-life-cycle-stars" />
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
          <h1 className="text-4xl font-bold text-white mb-4">Stellar Evolution: The Life Cycle of Stars</h1>
          <div className="flex items-center text-gray-300 mb-4">
            <span className="mr-4">⭐ Astronomy</span>
            <span>⏱️ 14 min read</span>
          </div>
          <p className="text-xl text-gray-200 italic">
            Understanding how stars form, evolve, and meet their final fate
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Introduction to Stellar Evolution <button onClick={() => toggleBookmark('intro')} className="ml-2 text-yellow-400">★</button></h2>
          <p>
            Stellar evolution is the process by which a star changes over the course of its lifetime. Stars are born from vast clouds of gas and dust, spend most of their lives fusing hydrogen into helium, and eventually die in spectacular ways that depend on their initial mass. Understanding stellar evolution is crucial to astronomy as it explains the origin of elements, the formation of planetary systems, and the evolution of galaxies.
          </p>
          
          <p>
            The life cycle of a star is primarily determined by its initial mass. Lower mass stars like red dwarfs can burn for trillions of years, while the most massive stars may live only a few million years. This fundamental relationship between mass and lifetime has profound implications for the evolution of stellar populations and the chemical enrichment of galaxies.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Star Formation and Birth <button onClick={() => toggleBookmark('formation')} className="ml-2 text-yellow-400">★</button></h2>
          <h3 className="text-yellow-300">Molecular Clouds and Gravitational Collapse</h3>
          <p>
            Stars form within giant molecular clouds, vast regions of cold gas and dust that can span hundreds of light-years. These clouds contain the raw materials for star formation: primarily hydrogen gas with traces of heavier elements. Triggered by shockwaves from nearby supernovae or gravitational instabilities, localized regions within these clouds begin to collapse under their own gravity.
          </p>

          <h3 className="text-yellow-300">Protostars and Stellar Nurseries</h3>
          <p>
            As the collapsing cloud fragments, dense cores form and continue to contract. These contracting cores, called protostars, heat up due to gravitational compression. The infalling material forms an accretion disk around the protostar, and magnetic fields channel some material into bipolar jets. When the core temperature reaches about 10 million Kelvin, hydrogen fusion ignites, and the protostar becomes a true star, joining the main sequence.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Main Sequence Phase <button onClick={() => toggleBookmark('main_sequence')} className="ml-2 text-yellow-400">★</button></h2>
          <p>
            The main sequence is the longest phase in a star's life, during which it fuses hydrogen into helium in its core. Our Sun is currently in this phase, having spent about 4.6 billion years here and having about 5 billion more to go. The star maintains equilibrium between the inward pull of gravity and the outward pressure from nuclear fusion.
          </p>

          <p>
            The position of a star on the main sequence depends on its mass. More massive stars are hotter, brighter, and bluer, while less massive stars are cooler, dimmer, and redder. The luminosity-mass relationship shows that more massive stars burn much more intensely, with their luminosity roughly proportional to their mass raised to the fourth power.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Stellar Death and End States <button onClick={() => toggleBookmark('death')} className="ml-2 text-yellow-400">★</button></h2>
          <p>
            When a star exhausts the hydrogen in its core, it begins to evolve off the main sequence. The subsequent evolution depends critically on the star's mass. Stars with masses similar to or less than about 8 solar masses will expand into red giants, fuse helium and lighter elements in their cores, and eventually shed their outer layers to form planetary nebulae, leaving behind white dwarf remnants.
          </p>

          <p>
            More massive stars undergo more complex fusion processes, creating elements up to iron in their cores. When these stars exhaust their nuclear fuel, they collapse catastrophically and explode as supernovae, dispersing heavy elements into space and potentially leaving behind neutron stars or black holes.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Significance and Impact <button onClick={() => toggleBookmark('significance')} className="ml-2 text-yellow-400">★</button></h2>
          <p>
            Stellar evolution is responsible for the cosmic abundance of elements. Stars synthesize elements up to iron through fusion processes, while elements heavier than iron are primarily created in the extreme conditions of supernova explosions. This process, called nucleosynthesis, explains why elements like carbon, oxygen, silicon, and iron are abundant in the universe.
          </p>

          <p>
            The death of stars also triggers new star formation by compressing surrounding gas clouds with shockwaves. Stellar winds and supernova explosions enrich the interstellar medium with heavy elements, allowing new generations of stars and planets to form with higher metallicities. This cycle is essential for the formation of rocky planets and the eventual emergence of life.
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
                <p className="font-medium mb-2 text-gray-200">1. What is the primary factor that determines a star's lifespan?</p>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) Distance from Earth</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) Mass</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Color</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) Rotation speed</span></label>
              </div>

              <div>
                <p className="font-medium mb-2 text-gray-200">2. What happens to stars like our Sun at the end of their lives?</p>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) They explode as supernovae</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) They become black holes</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) They expand to red giants, shed outer layers, and become white dwarfs</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) They merge with other stars</span></label>
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
                  <p className="text-gray-200">Question 1: {quizAnswers.q1 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - Mass is the primary factor determining a star's lifespan.</p>
                  <p className="text-gray-200">Question 2: {quizAnswers.q2 === 'C' ? '✓ Correct' : '✗ Incorrect (Correct: C)'} - Stars like our Sun become white dwarfs after the red giant phase.</p>
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
              <Link href="/blog" className="text-yellow-400 hover:underline">
                ← Back to Blog
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-300">Next Article</h3>
              <Link href="/blog/galaxies-and-cosmic-structure" className="text-yellow-400 hover:underline">
                Galaxies and Cosmic Structure →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}