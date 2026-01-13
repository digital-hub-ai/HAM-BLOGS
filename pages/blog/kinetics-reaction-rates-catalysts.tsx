import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function KineticsBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What factors affect the rate of a chemical reaction?",
      answer: "Several factors affect reaction rates: concentration of reactants (higher concentration usually increases rate), temperature (higher temperature increases rate), surface area of solid reactants (greater surface area increases rate), presence of catalysts (which increase rate by lowering activation energy), and the nature of the reactants themselves."
    },
    {
      question: "What is activation energy?",
      answer: "Activation energy is the minimum energy required for a chemical reaction to occur. It represents the energy barrier that reactant molecules must overcome to form products. Catalysts work by providing an alternative pathway with lower activation energy, thus increasing the reaction rate without being consumed."
    },
    {
      question: "What is the difference between reaction rate and reaction mechanism?",
      answer: "Reaction rate is the speed at which reactants are converted to products, typically measured as change in concentration over time. Reaction mechanism is the detailed step-by-step process by which a reaction occurs, including intermediate species and transition states. The mechanism determines the rate law and rate constant."
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
        <title>Kinetics: Reaction Rates and Catalysts - Chemistry | HAM BLOGS</title>
        <meta name="description" content="How fast reactions occur and factors that influence reaction rates." />
        <link rel="canonical" href="https://ham-blogs.com/blog/kinetics-reaction-rates-catalysts" />
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kinetics: Reaction Rates and Catalysts</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">⏱️ Chemistry</span>
            <span>⏱️ 11 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            How fast reactions occur and factors that influence reaction rates
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Introduction to Chemical Kinetics <button onClick={() => toggleBookmark('intro')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Chemical kinetics is the branch of chemistry that studies the rates of chemical reactions and the mechanisms by which they occur. While thermodynamics tells us whether a reaction is possible and how much energy it releases or absorbs, kinetics tells us how fast the reaction proceeds. Understanding reaction rates is crucial for controlling industrial processes, understanding biological systems, and predicting the behavior of chemical systems over time.
          </p>
          
          <p>
            The rate of a chemical reaction is defined as the change in concentration of a reactant or product per unit time. For a reaction A → B, the rate can be expressed as -Δ[A]/Δt or Δ[B]/Δt. Reaction rates typically decrease as the reaction proceeds because reactant concentrations decrease over time.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Rate Laws and Rate Constants <button onClick={() => toggleBookmark('rate_laws')} className="ml-2 text-yellow-600">★</button></h2>
          <h3>Differential Rate Laws</h3>
          <p>
            The rate law expresses the relationship between the rate of a reaction and the concentrations of reactants. For a general reaction aA + bB → products, the rate law takes the form: Rate = k[A]^m[B]^n, where k is the rate constant, and m and n are the reaction orders with respect to A and B. The overall reaction order is the sum of m and n.
          </p>

          <h3>Integrated Rate Laws</h3>
          <p>
            Integrated rate laws express the concentration of reactants as a function of time. For zero-order reactions, the concentration decreases linearly with time. For first-order reactions, the natural logarithm of concentration decreases linearly with time. For second-order reactions, the reciprocal of concentration increases linearly with time. These relationships allow for the determination of rate constants and reaction orders experimentally.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Factors Affecting Reaction Rates <button onClick={() => toggleBookmark('factors')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Several factors influence the rate of chemical reactions. Concentration effects follow the collision theory: higher concentrations mean more frequent collisions between reactant molecules, leading to increased reaction rates. Temperature has a dramatic effect, as described by the Arrhenius equation, where rate constants increase exponentially with temperature.
          </p>

          <p>
            Surface area affects reactions involving solids, as more surface area provides more sites for reaction. Pressure affects gaseous reactions similarly to concentration. The nature of reactants, including molecular structure and bond strengths, also influences reaction rates. Finally, catalysts dramatically increase reaction rates by providing alternative pathways with lower activation energies.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Reaction Mechanisms and Elementary Steps <button onClick={() => toggleBookmark('mechanisms')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            A reaction mechanism is the detailed step-by-step description of how a reaction occurs at the molecular level. Most reactions proceed through a series of elementary steps, each involving the collision of one, two, or rarely three molecules. The rate law for the overall reaction is determined by the slowest step, known as the rate-determining step.
          </p>

          <p>
            Intermediates are species formed in one elementary step and consumed in a later step. They appear in the mechanism but not in the overall balanced equation. Understanding mechanisms allows chemists to predict rate laws and design more efficient reactions.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Catalysts and Their Role <button onClick={() => toggleBookmark('catalysts')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Catalysts are substances that increase reaction rates without being consumed in the overall reaction. They work by providing an alternative reaction pathway with a lower activation energy. Catalysts can be homogeneous (in the same phase as reactants) or heterogeneous (in a different phase).
          </p>

          <p>
            Enzymes are biological catalysts that are highly specific and efficient. They work by binding substrates in their active sites, orienting them for reaction, and stabilizing transition states. Industrial catalysts are essential for processes like the Haber process for ammonia synthesis and catalytic converters in automobiles.
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
                <p className="font-medium mb-2">1. What happens to the rate of most reactions when temperature increases?</p>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) The rate decreases</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) The rate increases</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) The rate remains constant</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) The rate becomes unpredictable</span></label>
              </div>

              <div>
                <p className="font-medium mb-2">2. What is the role of a catalyst in a chemical reaction?</p>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) It is consumed in the reaction</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) It increases activation energy</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) It decreases reaction rate</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) It increases reaction rate by lowering activation energy</span></label>
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
                  <p>Question 1: {quizAnswers.q1 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - Higher temperature increases kinetic energy of molecules, leading to more frequent and energetic collisions.</p>
                  <p>Question 2: {quizAnswers.q2 === 'D' ? '✓ Correct' : '✗ Incorrect (Correct: D)'} - Catalysts provide alternative pathways with lower activation energy, increasing reaction rate.</p>
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
              <Link href="/blog/thermodynamics-chemical-reactions" className="text-blue-600 hover:underline">
                ← Thermodynamics and Chemical Reactions
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Next Article</h3>
              <Link href="/blog/organic-chemistry-carbon-compounds" className="text-blue-600 hover:underline">
                Organic Chemistry: Carbon Compounds →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}