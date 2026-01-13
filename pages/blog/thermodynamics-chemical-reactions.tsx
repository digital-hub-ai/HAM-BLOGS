import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function ThermodynamicsBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What are the first and second laws of thermodynamics?",
      answer: "The first law states that energy cannot be created or destroyed, only transformed from one form to another (law of energy conservation). The second law states that the entropy of an isolated system always increases over time, and energy transformations are never 100% efficient."
    },
    {
      question: "What is the difference between enthalpy and entropy?",
      answer: "Enthalpy (H) is a measure of the total energy of a thermodynamic system, including internal energy and energy required to displace its environment. Entropy (S) measures disorder or randomness in a system. Spontaneous processes tend toward lower enthalpy and higher entropy."
    },
    {
      question: "How do you predict if a reaction is spontaneous?",
      answer: "Spontaneity is determined by Gibbs free energy (ΔG = ΔH - TΔS). If ΔG is negative, the reaction is spontaneous. The spontaneity depends on enthalpy change (ΔH), entropy change (ΔS), and temperature (T). Exothermic reactions with positive entropy changes are generally spontaneous."
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
        <title>Thermodynamics and Chemical Reactions - Chemistry | HAM BLOGS</title>
        <meta name="description" content="Understanding energy changes in chemical reactions and reaction spontaneity." />
        <link rel="canonical" href="https://ham-blogs.com/blog/thermodynamics-chemical-reactions" />
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Thermodynamics and Chemical Reactions</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">🔥 Chemistry</span>
            <span>⏱️ 14 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            Understanding energy changes in chemical reactions and reaction spontaneity
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Introduction to Thermodynamics <button onClick={() => toggleBookmark('intro')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Thermodynamics is the study of energy and its transformations, particularly the relationships between heat, work, and energy in chemical and physical processes. In chemistry, thermodynamics helps us understand why reactions occur, predict their direction, and calculate the energy changes associated with chemical processes. The principles of thermodynamics are fundamental to understanding everything from metabolic processes in living organisms to industrial chemical production.
          </p>
          
          <p>
            Chemical thermodynamics combines the laws of thermodynamics with chemistry to predict the feasibility of chemical reactions and the conditions under which they occur. The field helps chemists determine whether a reaction will proceed spontaneously, how much energy will be released or absorbed, and what the equilibrium position will be under given conditions.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>The Laws of Thermodynamics <button onClick={() => toggleBookmark('laws')} className="ml-2 text-yellow-600">★</button></h2>
          <h3>First Law: Conservation of Energy</h3>
          <p>
            The first law of thermodynamics states that energy cannot be created or destroyed, only converted from one form to another. In chemical reactions, this means that the total energy of the system and surroundings remains constant. When a chemical reaction occurs, energy may be transferred as heat or work, but the total energy is conserved. This principle allows us to calculate enthalpy changes and understand energy balances in chemical processes.
          </p>

          <h3>Second Law: Entropy and Direction of Processes</h3>
          <p>
            The second law states that the entropy of an isolated system always increases over time, and natural processes tend to move toward a state of maximum entropy. In chemical terms, this law explains why some reactions occur spontaneously while others do not. It also establishes that energy conversions are never 100% efficient, as some energy is always dispersed as heat.
          </p>

          <h3>Third Law: Absolute Zero</h3>
          <p>
            The third law states that the entropy of a perfect crystal at absolute zero (0 K) is zero. This provides a reference point for measuring absolute entropy values and allows for the calculation of entropy changes in chemical reactions.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Enthalpy and Heat Changes <button onClick={() => toggleBookmark('enthalpy')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Enthalpy (H) is a thermodynamic property that represents the total heat content of a system at constant pressure. The change in enthalpy (ΔH) during a chemical reaction indicates whether the reaction absorbs or releases heat. Reactions with negative ΔH values are exothermic (release heat), while reactions with positive ΔH values are endothermic (absorb heat).
          </p>

          <p>
            Enthalpy changes can be calculated using Hess's Law, which states that the total enthalpy change for a reaction is the same regardless of the pathway taken. Standard enthalpies of formation allow for the calculation of reaction enthalpies using the equation: ΔH°rxn = ΣΔH°f(products) - ΣΔH°f(reactants).
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Entropy and Disorder <button onClick={() => toggleBookmark('entropy')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Entropy (S) is a measure of randomness or disorder in a system. The second law tells us that spontaneous processes result in an increase in the total entropy of the universe. In chemical reactions, entropy changes depend on factors such as phase changes, the number of gas molecules, and the complexity of molecules.
          </p>

          <p>
            Generally, entropy increases when: solids melt or liquids vaporize, gases are formed from liquids or solids, the number of gas molecules increases, or complex molecules break down into simpler ones. Understanding entropy changes helps predict the spontaneity of reactions, especially when enthalpy changes are small.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Gibbs Free Energy and Spontaneity <button onClick={() => toggleBookmark('gibbs')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Gibbs free energy (G) combines enthalpy and entropy to predict reaction spontaneity. The relationship is given by the equation: ΔG = ΔH - TΔS, where T is the temperature in Kelvin. A reaction is spontaneous if ΔG is negative, nonspontaneous if ΔG is positive, and at equilibrium if ΔG is zero.
          </p>

          <p>
            Temperature plays a crucial role in determining spontaneity. Some reactions are spontaneous at high temperatures but nonspontaneous at low temperatures, and vice versa. This relationship explains why some processes occur only under specific temperature conditions.
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
                <p className="font-medium mb-2">1. What does a negative ΔG value indicate about a reaction?</p>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) The reaction is endothermic</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) The reaction is exothermic</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) The reaction is spontaneous</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) The reaction is at equilibrium</span></label>
              </div>

              <div>
                <p className="font-medium mb-2">2. According to the first law of thermodynamics, what happens to energy?</p>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) It can be created but not destroyed</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) It can be destroyed but not created</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) It cannot be created or destroyed, only transformed</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) It always increases in a system</span></label>
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
                  <p>Question 1: {quizAnswers.q1 === 'C' ? '✓ Correct' : '✗ Incorrect (Correct: C)'} - A negative ΔG indicates a spontaneous reaction.</p>
                  <p>Question 2: {quizAnswers.q2 === 'C' ? '✓ Correct' : '✗ Incorrect (Correct: C)'} - The first law states energy is conserved and only transformed.</p>
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
              <Link href="/blog/chemical-bonding-molecular-geometry" className="text-blue-600 hover:underline">
                ← Chemical Bonding and Molecular Geometry
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Next Article</h3>
              <Link href="/blog/kinetics-reaction-rates-catalysts" className="text-blue-600 hover:underline">
                Kinetics: Reaction Rates and Catalysts →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}