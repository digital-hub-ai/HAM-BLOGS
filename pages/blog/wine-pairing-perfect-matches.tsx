import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function WinePairingPerfectMatches() {
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
      question: "Which wine is traditionally paired with fish and seafood?",
      options: ["Cabernet Sauvignon", "Chardonnay", "Pinot Noir", "Zinfandel"],
      correct: 1
    },
    {
      question: "What does 'terroir' refer to in wine terminology?",
      options: ["The grape variety", "The winemaking process", "The environment where grapes are grown", "The aging process"],
      correct: 2
    },
    {
      question: "Which principle is most important for successful wine pairing?",
      options: ["Matching intensity", "Contrasting flavors", "Complementing flavors", "All of the above"],
      correct: 3
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <Head>
        <title>Wine Pairing: Perfect Matches | Culinary Arts</title>
        <meta name="description" content="Classic and unexpected wine and food pairings for enhanced dining experiences with expert guidance." />
        <link rel="canonical" href="https://ham-blogs.com/blog/wine-pairing-perfect-matches" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <nav className="mb-6">
            <Link href="/" className="text-indigo-700 hover:text-indigo-900 font-medium">
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/category/food" className="text-indigo-700 hover:text-indigo-900 font-medium">
              Food
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/category/food/wine" className="text-indigo-700 hover:text-indigo-900 font-medium">
              Wine & Spirits
            </Link>
          </nav>
          
          <button 
            onClick={toggleBookmark}
            className={`mb-4 px-4 py-2 rounded-lg transition-colors ${
              bookmarked 
                ? 'bg-indigo-500 text-white' 
                : 'bg-white text-indigo-700 border border-indigo-300 hover:bg-indigo-50'
            }`}
          >
            {bookmarked ? '✓ Bookmarked' : 'Bookmark Article'}
          </button>
        </header>

        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <header className="p-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <h1 className="text-4xl font-bold mb-4">Wine Pairing: Perfect Matches for Enhanced Dining Experiences</h1>
            <div className="flex flex-wrap items-center text-indigo-100">
              <span className="mr-4">📅 January 8, 2026</span>
              <span className="mr-4">⏱️ 9 min read</span>
              <span>👤 Sommelier Alexandra Dupont</span>
            </div>
          </header>

          <div className="p-8">
            <p className="text-xl text-gray-700 mb-6 italic">
              Discover the art and science of wine pairing with expert guidance on classic combinations and unexpected matches that elevate your dining experience.
            </p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-indigo-800 mb-6">The Fundamentals of Wine Pairing</h2>
              <p className="mb-6">
                Wine pairing is both an art and a science that involves understanding how the characteristics of wine interact with the flavors, textures, and preparation methods of food. The goal is to create a harmonious experience where both the wine and food enhance each other's best qualities.
              </p>

              <h2 className="text-3xl font-bold text-indigo-800 mb-6">Classic Pairing Principles</h2>
              <p className="mb-6">
                Traditional wine pairing guidelines have been developed over centuries and remain relevant today, though modern sommeliers often enjoy experimenting with unexpected combinations.
              </p>

              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Regional Pairings</h3>
              <p className="mb-6">
                The concept of "what grows together, goes together" suggests that wines and foods from the same region naturally complement each other. For example, Italian Chianti pairs beautifully with tomato-based pasta dishes, while Loire Valley Sancerre enhances goat cheese salads.
              </p>

              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Weight and Intensity Matching</h3>
              <p className="mb-6">
                Match the weight and intensity of wine with the weight and intensity of food. Light, delicate fish pairs well with crisp, light white wines, while robust red meats complement full-bodied red wines. This ensures that neither the wine nor the food overpowers the other.
              </p>

              <h2 className="text-3xl font-bold text-indigo-800 mb-6">White Wine Pairings</h2>
              <p className="mb-6">
                White wines offer versatility in pairing due to their acidity and varying flavor profiles, from crisp and mineral to rich and buttery.
              </p>

              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Sauvignon Blanc and Seafood</h3>
              <p className="mb-6">
                The bright acidity and herbaceous notes of Sauvignon Blanc make it an excellent match for seafood, particularly oysters, shellfish, and light fish preparations. The wine's mineral character complements the briny flavors of the sea.
              </p>

              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Chardonnay and Roasted Chicken</h3>
              <p className="mb-6">
                A well-aged Chardonnay with oak aging complements the richness of roasted chicken while its buttery notes enhance the dish's flavors. The wine's body matches the heartiness of the preparation.
              </p>

              <h2 className="text-3xl font-bold text-indigo-800 mb-6">Red Wine Pairings</h2>
              <p className="mb-6">
                Red wines bring tannins and complex flavor profiles that pair beautifully with rich, savory dishes.
              </p>

              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Cabernet Sauvignon and Grilled Steak</h3>
              <p className="mb-6">
                The bold tannins and dark fruit flavors of Cabernet Sauvignon complement the char and richness of grilled red meat. The wine's structure matches the intensity of the dish, while the tannins help cut through the fat.
              </p>

              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Pinot Noir and Duck</h3>
              <p className="mb-6">
                The earthy, complex flavors of Pinot Noir pair beautifully with the rich, gamey flavors of duck. The wine's acidity balances the richness of the meat while its subtle fruit notes complement the dish's complexity.
              </p>

              <h2 className="text-3xl font-bold text-indigo-800 mb-6">Unexpected Pairings</h2>
              <p className="mb-6">
                Sommeliers often find that breaking traditional rules can lead to surprising and delightful pairings.
              </p>

              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Riesling and Spicy Asian Cuisine</h3>
              <p className="mb-6">
                The slight sweetness and high acidity of Riesling provide a cooling contrast to spicy Asian dishes while complementing the cuisine's complex flavor profiles. The wine's fruitiness enhances the aromatic spices used in these cuisines.
              </p>

              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Champagne and Fried Foods</h3>
              <p className="mb-6">
                The bubbles and acidity in Champagne cut through the richness of fried foods, while the wine's yeasty notes complement the bready texture. This pairing works particularly well with dishes like fried chicken or tempura.
              </p>

              <h2 className="text-3xl font-bold text-indigo-800 mb-6">Factors Affecting Pairings</h2>
              <p className="mb-6">
                Several elements of both wine and food can impact how well they pair together.
              </p>

              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Acidity Considerations</h3>
              <p className="mb-6">
                Wines with high acidity pair well with foods that have some fat or richness. The acid in wine helps to cut through fatty foods, creating a balanced mouthfeel. Conversely, acidic foods can make wine taste flat if the wine's acidity is too low.
              </p>

              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Sweetness and Spice</h3>
              <p className="mb-6">
                Sweet wines pair exceptionally well with spicy foods, as the sweetness helps to cool the palate and balance the heat. This is why Riesling is often recommended with spicy cuisines like Indian or Thai.
              </p>

              <h2 className="text-3xl font-bold text-indigo-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4 mb-8">
                {[
                  {
                    question: "Should I always follow traditional pairing rules?",
                    answer: "Traditional pairing rules provide a solid foundation, but experimentation is part of the joy of wine. Start with established pairings to build your palate, then gradually try unexpected combinations to discover your personal preferences."
                  },
                  {
                    question: "How does the cooking method affect wine pairing?",
                    answer: "Cooking method significantly impacts pairing choices. Grilled foods often pair better with bolder wines, while delicate steamed preparations work with lighter wines. The method affects the food's intensity and flavor profile."
                  },
                  {
                    question: "What if I'm serving a multi-course meal?",
                    answer: "Plan your wine progression from lighter to heavier, and from drier to sweeter. Start with lighter whites or sparkling wines, move to medium-bodied reds, and finish with dessert wines if serving them."
                  },
                  {
                    question: "How do I pair wine with vegetarian dishes?",
                    answer: "Vegetarian dishes can be challenging but rewarding. Earthy wines like Pinot Noir complement mushroom dishes, while herbaceous Sauvignon Blanc works with vegetable preparations. Consider the dish's dominant flavors and textures."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border border-indigo-200 rounded-lg">
                    <button
                      className="w-full p-4 text-left flex justify-between items-center bg-indigo-50 hover:bg-indigo-100 transition-colors"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className="font-medium text-indigo-900">{faq.question}</span>
                      <span className="text-indigo-700 text-xl">
                        {activeFAQ === index ? '−' : '+'}
                      </span>
                    </button>
                    {activeFAQ === index && (
                      <div className="p-4 border-t border-indigo-200 bg-white">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-indigo-800 mb-6">Interactive Quiz: Test Your Knowledge</h2>
              <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                {quizQuestions.map((q, qIndex) => (
                  <div key={qIndex} className="mb-6">
                    <p className="font-medium mb-3">{q.question}</p>
                    <div className="space-y-2">
                      {q.options.map((option, oIndex) => (
                        <label key={oIndex} className="flex items-center p-2 hover:bg-indigo-100 rounded cursor-pointer">
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
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Submit Answers
                </button>
                {submitted && (
                  <div className="mt-4 p-4 bg-indigo-100 rounded-lg">
                    <p className="font-bold">Your Score: {calculateScore()}/{quizQuestions.length}</p>
                    {calculateScore() === quizQuestions.length && (
                      <p className="text-green-700">Excellent! You've mastered wine pairing principles.</p>
                    )}
                  </div>
                )}
              </div>

              <h2 className="text-3xl font-bold text-indigo-800 mb-6">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-indigo-200">
                  <h3 className="font-bold text-lg mb-2 text-indigo-800">Essential Wine Pairings</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Chardonnay with roasted chicken</li>
                    <li>Cabernet Sauvignon with grilled steak</li>
                    <li>Sauvignon Blanc with goat cheese</li>
                    <li>Pinot Noir with duck</li>
                    <li>Riesling with spicy foods</li>
                    <li>Champagne with fried foods</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-indigo-200">
                  <h3 className="font-bold text-lg mb-2 text-indigo-800">Pairing Tools</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Wine aroma wheel</li>
                    <li>Food and wine pairing guide</li>
                    <li>Palate cleansing items</li>
                    <li>Proper glassware</li>
                    <li>Temperature control tools</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-indigo-800 mb-6">Conclusion</h2>
              <p className="mb-6">
                Wine pairing is an art that combines understanding of wine characteristics with knowledge of food preparation and flavor profiles. While traditional pairings provide a solid foundation, the most important aspect is personal preference and the joy of discovery.
              </p>
              <p>
                Start with classic pairings to develop your palate, then gradually experiment with unexpected combinations. Consider the cooking method, dominant flavors, and textures of your food when selecting a wine. With practice and experience, you'll develop an intuitive sense for successful wine and food pairings that enhance every dining experience.
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