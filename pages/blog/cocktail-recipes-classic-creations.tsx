import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CocktailRecipesClassicCreations() {
  const [bookmarked, setBookmarked] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  
  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const quizQuestions = [
    {
      question: "What is the primary spirit in a classic Manhattan cocktail?",
      options: ["Gin", "Vodka", "Whiskey", "Rum"],
      correct: 2
    },
    {
      question: "What is the proper way to chill a cocktail glass?",
      options: ["Fill with ice water", "Put in freezer", "Run cold water inside", "Leave at room temperature"],
      correct: 0
    },
    {
      question: "Which cocktail is made with gin, vermouth, and bitters?",
      options: ["Martini", "Negroni", "Manhattan", "Old Fashioned"],
      correct: 0
    }
  ];

  const [quizAnswers, setQuizAnswers] = useState(Array(quizQuestions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleQuizChange = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = optionIndex;
    setQuizAnswers(newAnswers);
  };

  const calculateScore = () => {
    return quizAnswers.reduce((score, answer, index) => {
      return answer === quizQuestions[index].correct ? score + 1 : score;
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-red-100">
      <Head>
        <title>Cocktail Recipes: Classic and Modern Creations | Culinary Arts</title>
        <meta name="description" content="Master mixologist recipes for timeless and innovative cocktails with proper techniques and ingredients." />
        <link rel="canonical" href="https://ham-blogs.com/blog/cocktail-recipes-classic-creations" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <nav className="mb-6">
            <Link href="/" className="text-amber-700 hover:text-amber-900 font-medium">
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/category/food" className="text-amber-700 hover:text-amber-900 font-medium">
              Food
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/category/food/wine" className="text-amber-700 hover:text-amber-900 font-medium">
              Wine & Spirits
            </Link>
          </nav>
          
          <button 
            onClick={toggleBookmark}
            className={`mb-4 px-4 py-2 rounded-lg transition-colors ${
              bookmarked 
                ? 'bg-amber-500 text-white' 
                : 'bg-white text-amber-700 border border-amber-300 hover:bg-amber-50'
            }`}
          >
            {bookmarked ? '✓ Bookmarked' : 'Bookmark Article'}
          </button>
        </header>

        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <header className="p-8 bg-gradient-to-r from-amber-600 to-red-600 text-white">
            <h1 className="text-4xl font-bold mb-4">Cocktail Recipes: Classic and Modern Creations</h1>
            <div className="flex flex-wrap items-center text-amber-100">
              <span className="mr-4">📅 January 7, 2026</span>
              <span className="mr-4">⏱️ 8 min read</span>
              <span>👤 Mixologist James Richardson</span>
            </div>
          </header>

          <div className="p-8">
            <p className="text-xl text-gray-700 mb-6 italic">
              Master mixologist recipes for timeless classics and innovative cocktails that showcase proper techniques and premium ingredients.
            </p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-amber-800 mb-6">The Foundation of Great Cocktails</h2>
              <p className="mb-6">
                Crafting exceptional cocktails requires understanding the balance of flavors, proper technique, and quality ingredients. The best cocktails achieve harmony between sweet, sour, bitter, and spirituous elements, with each component playing a specific role in the final drink.
              </p>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Classic Cocktail Techniques</h2>
              <p className="mb-6">
                Mastering fundamental bartending techniques is essential for creating consistently excellent cocktails.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Shaking vs Stirring</h3>
              <p className="mb-6">
                Shaking is used for cocktails containing juices, syrups, or other cloudy ingredients. The vigorous motion dilutes and aerates the drink while chilling it. Stirring is reserved for spirit-forward cocktails like Martinis or Manhattans, preserving clarity while achieving proper dilution and temperature.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Proper Dilution</h3>
              <p className="mb-6">
                Dilution is crucial for opening up flavors and achieving the right texture. The goal is 20-30% dilution through melting ice. Too little dilution results in harsh, overly alcoholic drinks, while too much creates weak, watery cocktails.
              </p>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Timeless Classics</h2>
              <p className="mb-6">
                Classic cocktails have endured because they represent perfect balance of flavors and technique.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">The Perfect Old Fashioned</h3>
              <p className="mb-6">
                Muddle a sugar cube with 2-3 dashes of Angostura bitters and a splash of water. Add ice and 2 oz of bourbon or rye whiskey. Stir for 30 seconds, then express and garnish with an orange twist. The key is using quality spirits and proper dilution.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">The Ideal Martini</h3>
              <p className="mb-6">
                Stir 2.5 oz gin (or vodka) with 0.5 oz dry vermouth over ice for 30 seconds. Strain into a chilled glass and garnish with a lemon twist or olives. The ratio of gin to vermouth can vary based on preference, from wet (more vermouth) to bone dry (minimal vermouth).
              </p>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Modern Innovations</h2>
              <p className="mb-6">
                Contemporary mixologists continue to innovate while respecting classic techniques and flavor principles.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">House-Smoked Cocktails</h3>
              <p className="mb-6">
                Adding smokiness to cocktails creates depth and complexity. Using a smoking gun or small smoker chamber, infuse the glass with aromatic woods like cherry or apple before adding the drink. The smoke adds a subtle layer of flavor that enhances the other ingredients.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Fat Washing Technique</h3>
              <p className="mb-6">
                Fat washing involves infusing spirits with fats (like bacon fat or butter) and then freezing the mixture to separate the fat from the alcohol. This technique adds richness and complexity to cocktails, popularized by drinks like the Boulevardier variation with fat-washed bourbon.
              </p>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Essential Bar Tools</h2>
              <p className="mb-6">
                Having the right tools ensures proper technique and consistent results.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">The Boston Shake</h3>
              <p className="mb-6">
                A two-piece shaker consisting of a mixing glass and a larger metal tin provides the best aeration and dilution. The seal between the two pieces should be tight enough to hold water when inverted.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Proper Glassware</h3>
              <p className="mb-6">
                Different cocktails require specific glassware to showcase their characteristics. Coupe glasses for shaken cocktails, rocks glasses for stirred drinks, and Nick and Nora glasses for spirit-forward cocktails. Chilling glasses beforehand enhances the drinking experience.
              </p>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Garnishing Techniques</h2>
              <p className="mb-6">
                Garnishes should complement the cocktail's flavors and add visual appeal.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Expressing Citrus Oils</h3>
              <p className="mb-6">
                For twists, hold the citrus peel over the drink and give it a firm twist to release the essential oils. The flame technique involves holding a lit match near the peel to caramelize the oils before expressing them into the drink.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Herb Infusions</h3>
              <p className="mb-6">
                Fresh herbs like mint, basil, or rosemary can be gently slapped or lightly muddled to release their essential oils without tearing the leaves, which can cause bitterness. The goal is to release aroma without adding unwanted flavors.
              </p>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4 mb-8">
                {[
                  {
                    question: "What's the difference between shaking and stirring a cocktail?",
                    answer: "Shaking is for cocktails with juices, syrups, or other cloudy ingredients, as it aerates and emulsifies the drink. Stirring is for spirit-forward cocktails, preserving clarity while achieving proper dilution and temperature."
                  },
                  {
                    question: "How important is the quality of ice?",
                    answer: "Ice quality is crucial. Clear, dense ice melts more slowly, preventing over-dilution. Large ice cubes melt slower than smaller ones. The temperature of the ice also matters - very cold ice chills drinks faster with less dilution."
                  },
                  {
                    question: "Can I substitute ingredients in classic recipes?",
                    answer: "While classics have proven formulas, substitutions can create new favorites. Use quality substitutes that match the original ingredient's characteristics. For example, different types of bitters can add unique flavors while maintaining the cocktail's structure."
                  },
                  {
                    question: "How do I properly store opened bottles?",
                    answer: "Spirits like whiskey, gin, and vodka can be stored at room temperature indefinitely. Vermouth and fortified wines should be refrigerated after opening. Liqueurs with high sugar content can be stored at room temperature but will last longer if refrigerated."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border border-amber-200 rounded-lg">
                    <button
                      className="w-full p-4 text-left flex justify-between items-center bg-amber-50 hover:bg-amber-100 transition-colors"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className="font-medium text-amber-900">{faq.question}</span>
                      <span className="text-amber-700 text-xl">
                        {activeFAQ === index ? '−' : '+'}
                      </span>
                    </button>
                    {activeFAQ === index && (
                      <div className="p-4 border-t border-amber-200 bg-white">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Interactive Quiz: Test Your Knowledge</h2>
              <div className="bg-amber-50 p-6 rounded-lg mb-8">
                {quizQuestions.map((q, qIndex) => (
                  <div key={qIndex} className="mb-6">
                    <p className="font-medium mb-3">{q.question}</p>
                    <div className="space-y-2">
                      {q.options.map((option, oIndex) => (
                        <label key={oIndex} className="flex items-center p-2 hover:bg-amber-100 rounded cursor-pointer">
                          <input
                            type="radio"
                            name={`question-${qIndex}`}
                            checked={quizAnswers[qIndex] === oIndex}
                            onChange={() => handleQuizChange(qIndex, oIndex)}
                            className="mr-3"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                <button
                  onClick={() => setSubmitted(true)}
                  className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
                >
                  Submit Answers
                </button>
                {submitted && (
                  <div className="mt-4 p-4 bg-amber-100 rounded-lg">
                    <p className="font-bold">Your Score: {calculateScore()}/{quizQuestions.length}</p>
                    {calculateScore() === quizQuestions.length && (
                      <p className="text-green-700">Excellent! You've mastered cocktail techniques.</p>
                    )}
                  </div>
                )}
              </div>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-amber-200">
                  <h3 className="font-bold text-lg mb-2 text-amber-800">Essential Bar Tools</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Boston shaker</li>
                    <li>Bar spoon</li>
                    <li>Jigger</li>
                    <li>Muddler</li>
                    <li>Strainer</li>
                    <li>Channel knife</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-amber-200">
                  <h3 className="font-bold text-lg mb-2 text-amber-800">Classic Cocktails</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Old Fashioned</li>
                    <li>Martini</li>
                    <li>Negroni</li>
                    <li>Manhattan</li>
                    <li>Mojito</li>
                    <li>Margarita</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Conclusion</h2>
              <p className="mb-6">
                Crafting exceptional cocktails combines technique, quality ingredients, and an understanding of flavor balance. Whether mastering classic recipes or experimenting with modern innovations, the key is consistency and attention to detail.
              </p>
              <p>
                Start with classic recipes to build your foundation, then gradually experiment with variations and new techniques. Focus on proper dilution, temperature, and garnishing to create drinks that are both visually appealing and delicious. With practice and attention to detail, you'll be able to create memorable cocktails that impress guests and enhance any occasion.
              </p>
            </div>
          </div>
        </article>

        <footer className="mt-12 text-center text-gray-600">
          <p>© 2026 Premium Blog Platform. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}