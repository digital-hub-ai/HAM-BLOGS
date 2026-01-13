import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function AtomicStructureBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What are the three main subatomic particles?",
      answer: "The three main subatomic particles are protons (positively charged), neutrons (neutral charge), and electrons (negatively charged). Protons and neutrons are located in the nucleus, while electrons orbit around the nucleus."
    },
    {
      question: "How is the periodic table organized?",
      answer: "The periodic table is organized by increasing atomic number (number of protons). Elements in the same column (group) have similar chemical properties, while rows (periods) represent electron shells. The table is divided into metals, nonmetals, and metalloids."
    },
    {
      question: "What is the significance of electron configuration?",
      answer: "Electron configuration determines an element's chemical properties and reactivity. The arrangement of electrons in shells and subshells explains why elements in the same group have similar properties and how they form chemical bonds."
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <Head>
        <title>Atomic Structure and the Periodic Table - Chemistry | HAM BLOGS</title>
        <meta name="description" content="Understanding atomic structure, elements, and organization of the periodic table." />
        <link rel="canonical" href="https://ham-blogs.com/blog/atomic-structure-periodic-table" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              ← Back to Chemistry
            </button>
            <div className="flex space-x-4">
              <button 
                onClick={() => toggleBookmark('main')}
                className={`p-2 rounded-full ${bookmarks.includes('main') ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Atomic Structure and the Periodic Table</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">⚛️ Chemistry</span>
            <span>⏱️ 12 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            Understanding atomic structure, elements, and organization of the periodic table
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Introduction to Atomic Structure <button onClick={() => toggleBookmark('intro')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Atomic structure forms the foundation of chemistry, explaining how matter is built and how elements interact. The atom, once thought to be indivisible, is now known to consist of even smaller particles. Understanding atomic structure is essential to comprehending the behavior of elements, their properties, and how they combine to form compounds.
          </p>
          
          <p>
            The development of atomic theory began with ancient Greek philosophers and evolved through the work of scientists like John Dalton, J.J. Thomson, Ernest Rutherford, and Niels Bohr. Modern quantum mechanical models describe electron behavior in terms of probability clouds rather than fixed orbits, providing a more accurate representation of atomic structure.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Subatomic Particles and Their Properties <button onClick={() => toggleBookmark('particles')} className="ml-2 text-yellow-600">★</button></h2>
          <h3>Protons, Neutrons, and Electrons</h3>
          <p>
            Atoms consist of three primary subatomic particles: protons, neutrons, and electrons. Protons carry a positive charge (+1) and have a mass of approximately 1 atomic mass unit (amu). Neutrons are electrically neutral (0 charge) and have nearly the same mass as protons. Electrons carry a negative charge (-1) and have a much smaller mass (about 1/1836 amu compared to a proton).
          </p>

          <h3>Atomic Number and Mass Number</h3>
          <p>
            The atomic number equals the number of protons in an atom and determines the element's identity. All atoms of the same element have the same atomic number. The mass number is the sum of protons and neutrons in the nucleus. Isotopes are atoms of the same element with different numbers of neutrons, resulting in different mass numbers but identical chemical properties.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Electron Arrangement and Energy Levels <button onClick={() => toggleBookmark('electrons')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Electrons occupy specific energy levels or shells around the nucleus. Each shell can hold a maximum number of electrons: the first shell holds up to 2, the second up to 8, the third up to 18, and so forth. Within each shell, electrons occupy subshells (s, p, d, f) with different shapes and energies.
          </p>

          <p>
            The electron configuration of an atom describes how electrons are distributed among the various atomic orbitals. The outermost electrons, known as valence electrons, primarily determine an element's chemical properties and its ability to form bonds with other atoms. Elements in the same group of the periodic table have the same number of valence electrons, explaining their similar chemical behaviors.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>The Periodic Table: Organization and Trends <button onClick={() => toggleBookmark('table')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Dmitri Mendeleev first arranged elements by increasing atomic weight in 1869, noting recurring patterns in their properties. Modern periodic tables arrange elements by increasing atomic number, revealing more accurate periodic trends. The table consists of 18 vertical columns called groups or families and 7 horizontal rows called periods.
          </p>

          <p>
            Groups 1 and 2 are the s-block elements, groups 3-12 are the d-block elements (transition metals), and groups 13-18 are the p-block elements. The lanthanides and actinides are placed separately at the bottom as f-block elements. Elements in the same group have similar chemical properties due to having the same number of valence electrons.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Periodic Trends and Chemical Behavior <button onClick={() => toggleBookmark('trends')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Several important trends emerge when moving across periods and down groups in the periodic table. Atomic radius decreases across a period (left to right) due to increased nuclear charge pulling electrons closer. Conversely, atomic radius increases down a group as additional electron shells are added.
          </p>

          <p>
            Ionization energy (energy required to remove an electron) generally increases across a period and decreases down a group. Electron affinity (energy change when adding an electron) tends to become more exothermic across a period. Metallic character decreases across a period and increases down a group, explaining the diagonal separation between metals, nonmetals, and metalloids.
          </p>
        </section>

        <section className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Interactive Quiz</h2>
          {!isQuizActive ? (
            <button 
              onClick={() => setIsQuizActive(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Test Your Knowledge
            </button>
          ) : (
            <div className="space-y-6">
              <div>
                <p className="font-medium mb-2">1. What determines the identity of an element?</p>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) Number of neutrons</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) Number of protons</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Number of electrons</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) Mass number</span></label>
              </div>

              <div>
                <p className="font-medium mb-2">2. Which subatomic particle has the smallest mass?</p>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) Proton</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) Neutron</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) Electron</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) They all have the same mass</span></label>
              </div>

              <button 
                onClick={checkQuizAnswers}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4"
              >
                Check Answers
              </button>
              
              {showQuizResults && (
                <div className="mt-4 p-4 bg-white rounded border">
                  <h3 className="font-bold mb-2">Results:</h3>
                  <p>Question 1: {quizAnswers.q1 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - The number of protons (atomic number) determines the element's identity.</p>
                  <p>Question 2: {quizAnswers.q2 === 'C' ? '✓ Correct' : '✗ Incorrect (Correct: C)'} - Electrons have much smaller mass than protons or neutrons.</p>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="bg-yellow-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-yellow-800">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="font-semibold">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <nav className="border-t pt-6 mt-8">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold mb-2">Previous Article</h3>
              <Link href="/blog" className="text-blue-600 hover:underline">
                ← Back to Blog
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Next Article</h3>
              <Link href="/blog/chemical-bonding-molecular-geometry" className="text-blue-600 hover:underline">
                Chemical Bonding and Molecular Geometry →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}