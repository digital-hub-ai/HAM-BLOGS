import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SpiritsStorageAgingTips() {
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
      question: "What is the optimal temperature for storing spirits?",
      options: ["32-40°F", "45-55°F", "55-65°F", "70-75°F"],
      correct: 2
    },
    {
      question: "How does evaporation affect the alcohol content in stored spirits?",
      options: ["Increases it", "Decreases it", "No effect", "Depends on temperature"],
      correct: 1
    },
    {
      question: "What happens to a spirit once a bottle is opened?",
      options: ["Continues aging", "Oxidizes and changes", "Improves with age", "No change"],
      correct: 1
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100">
      <Head>
        <title>Spirits Storage and Aging Tips | Culinary Arts</title>
        <meta name="description" content="Proper storage techniques to preserve and enhance spirit quality with expert aging and preservation guidance." />
        <link rel="canonical" href="https://ham-blogs.com/blog/spirits-storage-aging-tips" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <nav className="mb-6">
            <Link href="/" className="text-blue-700 hover:text-blue-900 font-medium">
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/category/food" className="text-blue-700 hover:text-blue-900 font-medium">
              Food
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/category/food/wine" className="text-blue-700 hover:text-blue-900 font-medium">
              Wine & Spirits
            </Link>
          </nav>
          
          <button 
            onClick={toggleBookmark}
            className={`mb-4 px-4 py-2 rounded-lg transition-colors ${
              bookmarked 
                ? 'bg-blue-500 text-white' 
                : 'bg-white text-blue-700 border border-blue-300 hover:bg-blue-50'
            }`}
          >
            {bookmarked ? '✓ Bookmarked' : 'Bookmark Article'}
          </button>
        </header>

        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <header className="p-8 bg-gradient-to-r from-gray-600 to-blue-600 text-white">
            <h1 className="text-4xl font-bold mb-4">Spirits Storage and Aging Tips: Preserving and Enhancing Quality</h1>
            <div className="flex flex-wrap items-center text-blue-100">
              <span className="mr-4">📅 January 3, 2026</span>
              <span className="mr-4">⏱️ 9 min read</span>
              <span>👤 Spirits Specialist Robert Hayes</span>
            </div>
          </header>

          <div className="p-8">
            <p className="text-xl text-gray-700 mb-6 italic">
              Proper storage techniques to preserve and enhance spirit quality with expert guidance on aging and preservation methods.
            </p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Understanding Spirit Maturation vs. Bottle Aging</h2>
              <p className="mb-6">
                It's crucial to distinguish between the aging process that occurs in wooden barrels and what happens once spirits are bottled. Most distilled spirits stop maturing once they're removed from wood and placed in glass bottles. Unlike wine, spirits don't continue to develop complexity in the bottle.
              </p>

              <h2 className="text-3xl font-bold text-blue-800 mb-6">Optimal Storage Conditions</h2>
              <p className="mb-6">
                Proper storage conditions preserve the spirit's intended character and prevent degradation over time.
              </p>

              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Temperature Stability</h3>
              <p className="mb-6">
                Maintain a consistent temperature between 55-65°F (13-18°C) to prevent expansion and contraction that could compromise seals. Temperature fluctuations can cause evaporation and allow oxygen to enter bottles, leading to oxidation and flavor deterioration.
              </p>

              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Humidity Control</h3>
              <p className="mb-6">
                Maintain 60-70% humidity to prevent cork drying in spirits with cork closures. A dried cork allows air infiltration, causing oxidation. However, excessive humidity can promote mold growth on labels and packaging.
              </p>

              <h2 className="text-3xl font-bold text-blue-800 mb-6">Light and Positioning</h2>
              <p className="mb-6">
                Protect spirits from direct sunlight and UV rays, which can degrade compounds and alter flavor profiles, especially in clear glass bottles.
              </p>

              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Avoiding Light Damage</h3>
              <p className="mb-6">
                Store bottles in dark locations or UV-filtered cabinets. Clear spirits like vodka and gin are particularly susceptible to light damage. Amber or green bottles offer some protection but aren't completely lightproof.
              </p>

              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Proper Positioning</h3>
              <p className="mb-6">
                Unlike wine, spirits should be stored upright to minimize contact between the liquid and the closure. This prevents the alcohol from degrading cork or rubber seals over time. Upright storage also makes it easier to see sediment or changes in clarity.
              </p>

              <h2 className="text-3xl font-bold text-blue-800 mb-6">Opened Bottles and Oxidation</h2>
              <p className="mb-6">
                Once opened, spirits begin interacting with oxygen, which can change their character over time.
              </p>

              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Minimizing Air Exposure</h3>
              <p className="mb-6">
                Transfer partially consumed bottles to smaller containers to reduce air space, or use vacuum pumps to remove oxygen. For high-value spirits, inert gas sprays can displace oxygen without affecting flavor.
              </p>

              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Consumption Timeline</h3>
              <p className="mb-6">
                Spirits with higher alcohol content (40%+ ABV) are more stable and can last years after opening if stored properly. Lower-proof spirits and liqueurs may degrade more quickly. Generally, consume opened bottles within 1-2 years for optimal quality.
              </p>

              <h2 className="text-3xl font-bold text-blue-800 mb-6">Special Considerations for Different Spirits</h2>
              <p className="mb-6">
                Different types of spirits have specific storage requirements based on their composition and production methods.
              </p>

              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Whiskey Storage</h3>
              <p className="mb-6">
                Whiskey is quite stable due to its high alcohol content. Store in a cool, dark place away from temperature fluctuations. Fluctuating temperatures can cause the wood components to expand and contract, potentially affecting flavor if the bottle is left open for extended periods.
              </p>

              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Liqueurs and Lower-Proof Spirits</h3>
              <p className="mb-6">
                Liqueurs, with their sugar and botanical content, are more prone to degradation after opening. Refrigeration can extend their life after opening. Cream-based liqueurs should be consumed within months of opening and kept refrigerated.
              </p>

              <h2 className="text-3xl font-bold text-blue-800 mb-6">Collecting and Investment Spirits</h2>
              <p className="mb-6">
                Collectors have additional considerations for preserving value and provenance.
              </p>

              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Condition Matters</h3>
              <p className="mb-6">
                Maintain original packaging when possible, as condition significantly affects collectible value. Keep boxes, certificates, and other accessories. Document the condition with photos for insurance purposes.
              </p>

              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Provenance Documentation</h3>
              <p className="mb-6">
                Keep records of purchase sources, dates, and storage conditions. For rare or valuable bottles, consider professional storage facilities that maintain optimal conditions and provide insurance.
              </p>

              <h2 className="text-3xl font-bold text-blue-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4 mb-8">
                {[
                  {
                    question: "Do spirits continue to age in the bottle?",
                    answer: "No, spirits stop aging once they're removed from wooden barrels and placed in glass bottles. Unlike wine, glass doesn't contribute to maturation. The flavor profile remains stable once bottled, assuming proper storage conditions."
                  },
                  {
                    question: "Is it better to store spirits in their original box?",
                    answer: "Yes, original packaging provides additional protection from light and can help maintain value for collectible bottles. Boxes also offer cushioning against vibrations and temperature fluctuations. However, ensure the storage area itself meets optimal conditions."
                  },
                  {
                    question: "What happens if a spirit freezes?",
                    answer: "Spirits with higher alcohol content (above 40% ABV) rarely freeze under normal conditions. Lower-proof spirits may become slushy but won't be permanently damaged if thawed slowly. Freezing can cause expansion that might compromise seals."
                  },
                  {
                    question: "How can I tell if a spirit has gone bad?",
                    answer: "Signs include unusual cloudiness, off-odors, or significant flavor changes. For opened bottles, expect gradual oxidation effects over time. Dramatic changes may indicate improper storage or contamination."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border border-blue-200 rounded-lg">
                    <button
                      className="w-full p-4 text-left flex justify-between items-center bg-blue-50 hover:bg-blue-100 transition-colors"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className="font-medium text-blue-900">{faq.question}</span>
                      <span className="text-blue-700 text-xl">
                        {activeFAQ === index ? '−' : '+'}
                      </span>
                    </button>
                    {activeFAQ === index && (
                      <div className="p-4 border-t border-blue-200 bg-white">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-blue-800 mb-6">Interactive Quiz: Test Your Knowledge</h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                {quizQuestions.map((q, qIndex) => (
                  <div key={qIndex} className="mb-6">
                    <p className="font-medium mb-3">{q.question}</p>
                    <div className="space-y-2">
                      {q.options.map((option, oIndex) => (
                        <label key={oIndex} className="flex items-center p-2 hover:bg-blue-100 rounded cursor-pointer">
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
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Submit Answers
                </button>
                {submitted && (
                  <div className="mt-4 p-4 bg-blue-100 rounded-lg">
                    <p className="font-bold">Your Score: {calculateScore()}/{quizQuestions.length}</p>
                    {calculateScore() === quizQuestions.length && (
                      <p className="text-green-700">Excellent! You've mastered spirits storage.</p>
                    )}
                  </div>
                )}
              </div>

              <h2 className="text-3xl font-bold text-blue-800 mb-6">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-lg mb-2 text-blue-800">Storage Essentials</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Dark, cool environment</li>
                    <li>Consistent temperature</li>
                    <li>Upright positioning</li>
                    <li>Proper humidity</li>
                    <li>Air-tight seals</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-lg mb-2 text-blue-800">Monitoring Tools</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Thermometer</li>
                    <li>Hygrometer</li>
                    <li>UV-filtered lighting</li>
                    <li>Vacuum pumps</li>
                    <li>Inert gas sprays</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-blue-800 mb-6">Conclusion</h2>
              <p className="mb-6">
                Proper storage of spirits is essential for preserving their intended character and quality. While most spirits don't continue aging in the bottle, proper conditions prevent degradation and maintain the distiller's intended flavor profile.
              </p>
              <p>
                Understanding the differences between various spirit types and their specific storage needs will help you maintain your collection properly. Whether you're storing everyday drinking spirits or valuable collectibles, following these guidelines will ensure optimal quality and longevity. Remember that opened bottles require additional attention due to oxidation, so consume them within a reasonable timeframe for the best experience.
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