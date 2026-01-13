import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function OrganicChemistryBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What makes carbon unique in organic chemistry?",
      answer: "Carbon's unique ability to form four covalent bonds allows it to create diverse molecular structures. It can form long chains, branched chains, and rings, as well as multiple bonds with itself and other atoms. This versatility leads to millions of different organic compounds with varied properties and functions."
    },
    {
      question: "What are functional groups in organic chemistry?",
      answer: "Functional groups are specific arrangements of atoms within organic molecules that determine their characteristic chemical properties. Examples include alcohols (-OH), carboxylic acids (-COOH), amines (-NH2), ketones (C=O), and aldehydes (CHO). Molecules with the same functional group undergo similar reactions."
    },
    {
      question: "What is the difference between saturated and unsaturated hydrocarbons?",
      answer: "Saturated hydrocarbons contain only single bonds between carbon atoms and are 'saturated' with hydrogen atoms. Alkanes are examples. Unsaturated hydrocarbons contain at least one double or triple bond between carbon atoms. Alkenes (C=C) and alkynes (C≡C) are examples. Unsaturated compounds can undergo addition reactions that saturated compounds cannot."
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
        <title>Organic Chemistry: Carbon Compounds - Chemistry | HAM BLOGS</title>
        <meta name="description" content="The chemistry of carbon-based compounds and their applications." />
        <link rel="canonical" href="https://ham-blogs.com/blog/organic-chemistry-carbon-compounds" />
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Organic Chemistry: Carbon Compounds</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">🔬 Chemistry</span>
            <span>⏱️ 15 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            The chemistry of carbon-based compounds and their applications
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Introduction to Organic Chemistry <button onClick={() => toggleBookmark('intro')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Organic chemistry is the study of carbon-containing compounds and their properties, structure, composition, reactions, and synthesis. Although historically defined as compounds derived from living organisms, modern organic chemistry encompasses all carbon-based compounds, whether naturally occurring or synthetically produced. Carbon's unique ability to form stable covalent bonds with itself and other elements leads to millions of different organic molecules with diverse structures and functions.
          </p>
          
          <p>
            Organic chemistry is fundamental to understanding life processes, pharmaceuticals, materials science, and many industrial applications. The field bridges the gap between pure chemistry and biological systems, making it essential for biochemistry, molecular biology, and medicinal chemistry.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Hydrocarbons: The Foundation <button onClick={() => toggleBookmark('hydrocarbons')} className="ml-2 text-yellow-600">★</button></h2>
          <h3>Alkanes: Saturated Hydrocarbons</h3>
          <p>
            Alkanes are saturated hydrocarbons containing only single bonds between carbon atoms. They have the general formula CnH2n+2 and are relatively unreactive due to their strong C-C and C-H bonds. Examples include methane (CH4), ethane (C2H6), and propane (C3H8). Alkanes are important fuels and starting materials for synthesizing more complex organic compounds.
          </p>

          <h3>Alkenes and Alkynes: Unsaturated Hydrocarbons</h3>
          <p>
            Alkenes contain at least one carbon-carbon double bond and have the general formula CnH2n. Alkynes contain at least one carbon-carbon triple bond with the general formula CnH2n-2. These unsaturated hydrocarbons are more reactive than alkanes due to the presence of π bonds, which can participate in addition reactions.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Functional Groups and Their Properties <button onClick={() => toggleBookmark('functional_groups')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Functional groups are specific arrangements of atoms that determine the characteristic chemical properties of organic molecules. The hydroxyl group (-OH) makes alcohols, the carbonyl group (C=O) is found in aldehydes and ketones, the carboxyl group (-COOH) characterizes carboxylic acids, and the amino group (-NH2) is present in amines.
          </p>

          <p>
            Each functional group imparts specific reactivity patterns to molecules. For example, molecules with hydroxyl groups can participate in hydrogen bonding, affecting their boiling points and solubility. Carboxylic acids can donate protons, making them acidic. Understanding functional groups allows chemists to predict reactivity and design synthesis pathways.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Aromatic Compounds <button onClick={() => toggleBookmark('aromatic')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Aromatic compounds contain planar ring structures with delocalized π electrons following Hückel's rule (4n+2 π electrons). Benzene (C6H6) is the archetypal aromatic compound, with six π electrons delocalized over a hexagonal ring. Aromatic compounds are unusually stable and undergo substitution reactions rather than addition reactions, unlike simple alkenes.
          </p>

          <p>
            Many important biological molecules, pharmaceuticals, and industrial chemicals are aromatic. Examples include amino acids, nucleotides, benzene derivatives used in polymer production, and many drugs like aspirin and penicillin.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Bioorganic Chemistry and Applications <button onClick={() => toggleBookmark('bioorganic')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Bioorganic chemistry focuses on organic molecules in biological systems. Carbohydrates, lipids, proteins, and nucleic acids are all organic compounds that perform essential life functions. Understanding their structures and reactions is crucial for biochemistry, medicine, and biotechnology.
          </p>

          <p>
            Organic chemistry applications are vast: pharmaceutical synthesis of life-saving drugs, polymer production for plastics and fibers, flavor and fragrance development, agricultural chemicals, and materials science for electronics and nanotechnology. The field continues to evolve with new synthetic methods and applications in emerging technologies.
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
                <p className="font-medium mb-2">1. What is the general formula for alkanes?</p>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) CnH2n</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) CnH2n+2</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) CnH2n-2</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) CnHn</span></label>
              </div>

              <div>
                <p className="font-medium mb-2">2. Which functional group characterizes carboxylic acids?</p>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) -OH</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) -NH2</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) -COOH</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) C=O</span></label>
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
                  <p>Question 1: {quizAnswers.q1 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - Alkanes have the general formula CnH2n+2.</p>
                  <p>Question 2: {quizAnswers.q2 === 'C' ? '✓ Correct' : '✗ Incorrect (Correct: C)'} - The carboxyl group (-COOH) characterizes carboxylic acids.</p>
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
              <Link href="/blog/kinetics-reaction-rates-catalysts" className="text-blue-600 hover:underline">
                ← Kinetics: Reaction Rates and Catalysts
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Next Article</h3>
              <Link href="/blog/analytical-chemistry-techniques-instruments" className="text-blue-600 hover:underline">
                Analytical Chemistry: Techniques and Instruments →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}