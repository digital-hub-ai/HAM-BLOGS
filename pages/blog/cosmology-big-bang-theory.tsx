import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function CosmologyBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is the cosmic microwave background (CMB)?",
      answer: "The cosmic microwave background is the thermal radiation left over from the Big Bang, filling the entire universe. It is the oldest light we can observe, dating back to about 380,000 years after the Big Bang when the universe became transparent to light. The CMB provides crucial evidence for the Big Bang theory and contains information about the early universe's conditions."
    },
    {
      question: "What is dark energy?",
      answer: "Dark energy is a mysterious form of energy that permeates all of space and drives the accelerated expansion of the universe. It constitutes about 68% of the universe's mass-energy content. Unlike matter and dark matter, dark energy has negative pressure and causes space itself to expand at an ever-increasing rate."
    },
    {
      question: "What happened during cosmic inflation?",
      answer: "Cosmic inflation refers to a period of exponential expansion in the very early universe, occurring approximately 10^-36 to 10^-32 seconds after the Big Bang. During this brief period, the universe expanded faster than the speed of light, smoothing out irregularities and explaining the universe's observed homogeneity and flatness. Inflation also explains the origin of the small fluctuations that later became galaxies and large-scale structures."
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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-black">
      <Head>
        <title>Cosmology: The Big Bang Theory - Astronomy | HAM BLOGS</title>
        <meta name="description" content="Understanding the origin and evolution of the universe." />
        <link rel="canonical" href="https://ham-blogs.com/blog/cosmology-big-bang-theory" />
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
          <h1 className="text-4xl font-bold text-white mb-4">Cosmology: The Big Bang Theory</h1>
          <div className="flex items-center text-gray-300 mb-4">
            <span className="mr-4">🌌 Astronomy</span>
            <span>⏱️ 16 min read</span>
          </div>
          <p className="text-xl text-gray-200 italic">
            Understanding the origin and evolution of the universe
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Introduction to Cosmology <button onClick={() => toggleBookmark('intro')} className="ml-2 text-yellow-400">★</button></h2>
          <p>
            Cosmology is the scientific study of the origin, evolution, and ultimate fate of the universe. The Big Bang theory is the prevailing cosmological model that describes how the universe expanded from an initial state of extremely high density and temperature. This model explains numerous observations, including the expansion of the universe, the cosmic microwave background radiation, and the abundance of light elements.
          </p>
          
          <p>
            The Big Bang theory does not describe an explosion in space but rather the expansion of space itself. The universe began as a singularity approximately 13.8 billion years ago and has been expanding and cooling ever since. This expansion is supported by observational evidence such as the redshift of distant galaxies and the cosmic microwave background radiation.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Evidence for the Big Bang <button onClick={() => toggleBookmark('evidence')} className="ml-2 text-yellow-400">★</button></h2>
          <h3 className="text-yellow-300">Hubble's Law and Universal Expansion</h3>
          <p>
            In 1929, Edwin Hubble discovered that galaxies are moving away from us, with their recession velocity proportional to their distance. This observation, known as Hubble's law, provided the first direct evidence for an expanding universe. The relationship implies that the universe was smaller and denser in the past, leading to the concept of a primordial beginning.
          </p>

          <h3 className="text-yellow-300">Cosmic Microwave Background Radiation</h3>
          <p>
            The cosmic microwave background (CMB) radiation, discovered in 1965, is the afterglow of the Big Bang. This uniform radiation fills the entire universe and corresponds to a temperature of about 2.7 Kelvin. The CMB provides a snapshot of the universe when it became transparent to light, approximately 380,000 years after the Big Bang.
          </p>

          <h3 className="text-yellow-300">Primordial Nucleosynthesis</h3>
          <p>
            The observed abundances of light elements (hydrogen, helium, lithium) in the universe match predictions from Big Bang nucleosynthesis. During the first few minutes after the Big Bang, conditions were suitable for nuclear fusion, producing these light elements in proportions consistent with observations.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Timeline of the Universe <button onClick={() => toggleBookmark('timeline')} className="ml-2 text-yellow-400">★</button></h2>
          <p>
            The history of the universe can be divided into several distinct epochs. The Planck epoch (first 10^-43 seconds) represents the period when quantum gravity effects dominated. During cosmic inflation (around 10^-36 to 10^-32 seconds), the universe underwent exponential expansion. The electroweak epoch saw the separation of the electromagnetic and weak forces.
          </p>

          <p>
            After the first few minutes came Big Bang nucleosynthesis, during which the first atomic nuclei formed. For the next ~380,000 years, the universe remained opaque due to free electrons scattering photons. The recombination era marked the formation of neutral atoms and the decoupling of matter and radiation, allowing the release of the cosmic microwave background.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Dark Matter and Dark Energy <button onClick={() => toggleBookmark('dark_components')} className="ml-2 text-yellow-400">★</button></h2>
          <p>
            Modern cosmology reveals that ordinary matter (atoms) comprises only about 5% of the universe's content. Dark matter, which interacts through gravity but not electromagnetism, makes up about 27% of the universe. Its presence is inferred from gravitational effects on visible matter, galaxy rotation curves, and the large-scale structure of the universe.
          </p>

          <p>
            Dark energy, constituting approximately 68% of the universe, drives the accelerated expansion of the universe. Discovered in 1998 through observations of distant supernovae, dark energy remains one of the greatest mysteries in cosmology. Understanding its nature is crucial to predicting the ultimate fate of the universe.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Future of the Universe <button onClick={() => toggleBookmark('future')} className="ml-2 text-yellow-400">★</button></h2>
          <p>
            The universe's ultimate fate depends on the balance between the attractive force of gravity and the repulsive effect of dark energy. Current observations suggest that dark energy dominates, leading to continued acceleration of the universe's expansion. This scenario, known as the "Big Freeze" or "Heat Death," implies that galaxies will eventually become isolated and star formation will cease as the universe cools toward absolute zero.
          </p>

          <p>
            Alternative scenarios include the "Big Rip," where dark energy's strength increases over time, eventually tearing apart galaxies, stars, and even atoms. Less likely scenarios include the "Big Crunch," where gravity eventually reverses the expansion, or the "Big Bounce," where the universe cycles through expansion and contraction phases.
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
                <p className="font-medium mb-2 text-gray-200">1. What is the approximate age of the universe according to the Big Bang theory?</p>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) 4.6 billion years</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) 13.8 billion years</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) 20.1 billion years</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) 10.5 billion years</span></label>
              </div>

              <div>
                <p className="font-medium mb-2 text-gray-200">2. What does the cosmic microwave background radiation represent?</p>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) Light from the first stars</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) The afterglow of the Big Bang</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) Radiation from black holes</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) Interstellar dust emissions</span></label>
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
                  <p className="text-gray-200">Question 1: {quizAnswers.q1 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - The universe is approximately 13.8 billion years old.</p>
                  <p className="text-gray-200">Question 2: {quizAnswers.q2 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - The CMB represents the afterglow of the Big Bang.</p>
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
              <Link href="/blog/black-holes-mysteries-revealed" className="text-yellow-400 hover:underline">
                ← Black Holes: Mysteries Revealed
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-300">Next Article</h3>
              <Link href="/blog/solar-system-exploration" className="text-yellow-400 hover:underline">
                Solar System: Exploration and Discovery →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}