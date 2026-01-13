import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function GalaxiesBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What are the main types of galaxies?",
      answer: "The main types of galaxies are spiral, elliptical, and irregular galaxies. Spiral galaxies (like our Milky Way) have distinctive arms of stars and gas. Elliptical galaxies are smooth and featureless, ranging from circular to elongated shapes. Irregular galaxies have no definite shape and often result from gravitational interactions."
    },
    {
      question: "What is dark matter and why is it important?",
      answer: "Dark matter is a form of matter that does not emit, absorb, or reflect light, making it invisible to telescopes. It reveals its presence through gravitational effects on visible matter. Dark matter is crucial for galaxy formation and makes up about 27% of the universe's mass-energy content."
    },
    {
      question: "What is the large-scale structure of the universe?",
      answer: "The large-scale structure of the universe resembles a cosmic web of filaments and voids. Galaxies cluster on the edges of vast empty regions called voids. Superclusters are the largest known structures, connected by filaments of galaxies and dark matter, with massive voids in between."
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
        <title>Galaxies and Cosmic Structure - Astronomy | HAM BLOGS</title>
        <meta name="description" content="Exploring galaxies, clusters, and the large-scale structure of the universe." />
        <link rel="canonical" href="https://ham-blogs.com/blog/galaxies-and-cosmic-structure" />
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
          <h1 className="text-4xl font-bold text-white mb-4">Galaxies and Cosmic Structure</h1>
          <div className="flex items-center text-gray-300 mb-4">
            <span className="mr-4">🌌 Astronomy</span>
            <span>⏱️ 13 min read</span>
          </div>
          <p className="text-xl text-gray-200 italic">
            Exploring galaxies, clusters, and the large-scale structure of the universe
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Introduction to Galaxies <button onClick={() => toggleBookmark('intro')} className="ml-2 text-yellow-400">★</button></h2>
          <p>
            Galaxies are vast cosmic islands composed of billions to trillions of stars, along with gas, dust, and dark matter, all bound together by gravity. Our Milky Way galaxy is just one of an estimated 2 trillion galaxies in the observable universe. Each galaxy represents a unique system that has evolved over billions of years, shaped by internal processes and external interactions.
          </p>
          
          <p>
            The study of galaxies provides crucial insights into the formation and evolution of the universe. By examining different types of galaxies and their properties, astronomers can piece together the cosmic history from the early universe to the present day. Galaxies also serve as laboratories for understanding stellar evolution, star formation, and the role of supermassive black holes.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Classification of Galaxies <button onClick={() => toggleBookmark('classification')} className="ml-2 text-yellow-400">★</button></h2>
          <h3 className="text-yellow-300">Spiral Galaxies</h3>
          <p>
            Spiral galaxies feature distinctive spiral arms of stars, gas, and dust winding around a central bulge. The Milky Way is a barred spiral galaxy, characterized by a central bar-shaped structure. These galaxies actively form stars in their spiral arms where gas and dust are compressed by density waves. They typically have a flat disk component and a spherical halo of older stars.
          </p>

          <h3 className="text-yellow-300">Elliptical Galaxies</h3>
          <p>
            Elliptical galaxies range from nearly circular to highly elongated ellipses and contain mostly older stars with little ongoing star formation. They have smooth, featureless light distributions and are often found in the centers of galaxy clusters. The largest known galaxies are giant ellipticals that may form through the merger of smaller galaxies.
          </p>

          <h3 className="text-yellow-300">Irregular Galaxies</h3>
          <p>
            Irregular galaxies have no defined shape and often result from gravitational interactions or collisions with other galaxies. They typically have high rates of star formation and contain significant amounts of gas and dust. The Large and Small Magellanic Clouds, satellites of the Milky Way, are examples of irregular galaxies.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Galaxy Clusters and Superclusters <button onClick={() => toggleBookmark('clusters')} className="ml-2 text-yellow-400">★</button></h2>
          <p>
            Galaxies are not randomly distributed in space but form structures on various scales. Galaxy groups contain a few to dozens of galaxies, while galaxy clusters can contain hundreds to thousands of galaxies. The largest known structures are superclusters, which are collections of galaxy clusters and groups connected by filaments of galaxies and dark matter.
          </p>

          <p>
            The Virgo Cluster, containing over 1,000 galaxies, is the nearest large cluster to our Local Group. Our Local Group itself contains the Milky Way, Andromeda Galaxy, and about 54 other smaller galaxies. Superclusters like the Laniakea Supercluster, which contains our Milky Way, span hundreds of millions of light-years.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">The Cosmic Web <button onClick={() => toggleBookmark('web')} className="ml-2 text-yellow-400">★</button></h2>
          <p>
            On the largest scales, the universe has a web-like structure with galaxies and galaxy clusters forming filaments and sheets that surround vast empty regions called voids. This cosmic web formed as dark matter clumped together under gravity, creating a scaffolding for ordinary matter to follow. Galaxies formed along these dark matter filaments.
          </p>

          <p>
            Computer simulations of cosmic evolution show how tiny fluctuations in the early universe grew into the complex structure we observe today. Dark matter played a crucial role in this process, providing the gravitational wells necessary for gas to accumulate and form the first stars and galaxies.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-200">
          <h2 className="text-white">Dark Matter and Cosmic Evolution <button onClick={() => toggleBookmark('dark_matter')} className="ml-2 text-yellow-400">★</button></h2>
          <p>
            Dark matter, which does not interact with light but exerts gravitational influence, makes up about 27% of the universe. It plays a fundamental role in galaxy formation and the large-scale structure of the universe. The distribution of visible galaxies traces the underlying dark matter distribution, which acts as a cosmic framework.
          </p>

          <p>
            Galaxy formation models that include dark matter successfully reproduce the observed large-scale structure of the universe. Without dark matter, the universe would look vastly different, with far fewer galaxies and a much smoother distribution of matter.
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
                <p className="font-medium mb-2 text-gray-200">1. What type of galaxy is our Milky Way?</p>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) Elliptical</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) Spiral</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Irregular</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) Ring</span></label>
              </div>

              <div>
                <p className="font-medium mb-2 text-gray-200">2. What is the large-scale structure of the universe called?</p>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) Cosmic foam</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) Stellar network</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) Cosmic web</span></label>
                <label className="flex items-center space-x-2 text-gray-300"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) Galactic mesh</span></label>
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
                  <p className="text-gray-200">Question 1: {quizAnswers.q1 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - The Milky Way is a barred spiral galaxy.</p>
                  <p className="text-gray-200">Question 2: {quizAnswers.q2 === 'C' ? '✓ Correct' : '✗ Incorrect (Correct: C)'} - The large-scale structure is called the cosmic web.</p>
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
              <Link href="/blog/stellar-evolution-life-cycle-stars" className="text-yellow-400 hover:underline">
                ← Stellar Evolution: The Life Cycle of Stars
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-300">Next Article</h3>
              <Link href="/blog/exoplanets-search-for-life" className="text-yellow-400 hover:underline">
                Exoplanets: The Search for Life →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}