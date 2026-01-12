import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ChampagneCelebrationSelection() {
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
      question: "What is the traditional method for making Champagne?",
      options: ["Tank method", "Charmat method", "Méthode Champenoise", "Transfer method"],
      correct: 2
    },
    {
      question: "Which grape is NOT traditionally used in Champagne production?",
      options: ["Chardonnay", "Pinot Noir", "Pinot Meunier", "Sauvignon Blanc"],
      correct: 3
    },
    {
      question: "What does 'Brut' indicate in Champagne terminology?",
      options: ["Sweet", "Dry", "Medium-dry", "Very sweet"],
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100">
      <Head>
        <title>Champagne and Celebration Selection | Culinary Arts</title>
        <meta name="description" content="Choosing the perfect sparkling wines for any celebration with expert guidance on types and selection." />
        <link rel="canonical" href="https://ham-blogs.com/blog/champagne-celebration-selection" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <nav className="mb-6">
            <Link href="/" className="text-pink-700 hover:text-pink-900 font-medium">
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/category/food" className="text-pink-700 hover:text-pink-900 font-medium">
              Food
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/category/food/wine" className="text-pink-700 hover:text-pink-900 font-medium">
              Wine & Spirits
            </Link>
          </nav>
          
          <button 
            onClick={toggleBookmark}
            className={`mb-4 px-4 py-2 rounded-lg transition-colors ${
              bookmarked 
                ? 'bg-pink-500 text-white' 
                : 'bg-white text-pink-700 border border-pink-300 hover:bg-pink-50'
            }`}
          >
            {bookmarked ? '✓ Bookmarked' : 'Bookmark Article'}
          </button>
        </header>

        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <header className="p-8 bg-gradient-to-r from-pink-600 to-yellow-600 text-white">
            <h1 className="text-4xl font-bold mb-4">Champagne and Celebration Selection: Perfect Sparkling Wines for Every Occasion</h1>
            <div className="flex flex-wrap items-center text-pink-100">
              <span className="mr-4">📅 January 5, 2026</span>
              <span className="mr-4">⏱️ 7 min read</span>
              <span>👤 Champagne Expert Marie Dubois</span>
            </div>
          </header>

          <div className="p-8">
            <p className="text-xl text-gray-700 mb-6 italic">
              Discover how to select the perfect sparkling wines for any celebration, from intimate dinners to grand festivities, with expert guidance on types, styles, and selection criteria.
            </p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-pink-800 mb-6">Understanding Sparkling Wine Production</h2>
              <p className="mb-6">
                The méthode champenoise, or traditional method, involves a secondary fermentation in the bottle, creating the bubbles that define Champagne and other high-quality sparkling wines. This labor-intensive process, with extended aging on lees, creates complex flavors and fine, persistent bubbles.
              </p>

              <h2 className="text-3xl font-bold text-pink-800 mb-6">Champagne Regions and Styles</h2>
              <p className="mb-6">
                True Champagne comes exclusively from the Champagne region of France, where specific terroir conditions and strict production laws create distinctive characteristics.
              </p>

              <h3 className="text-2xl font-semibold text-pink-700 mb-4">Regional Differences</h3>
              <p className="mb-6">
                The Montagne de Reims produces powerful Pinot Noir-based Champagnes, while the Vallée de la Marne is known for Pinot Meunier. The Côte des Blancs specializes in elegant Chardonnay-dominant Champagnes. Each sub-region contributes unique characteristics to the final blend.
              </p>

              <h3 className="text-2xl font-semibold text-pink-700 mb-4">House Styles</h3>
              <p className="mb-6">
                Each Champagne house has a distinctive house style. Krug emphasizes richness and complexity through extended aging, while Louis Roederer's Cristal focuses on purity and elegance. Understanding house styles helps in selecting the right Champagne for your preferences and occasion.
              </p>

              <h2 className="text-3xl font-bold text-pink-800 mb-6">Sweetness Levels</h2>
              <p className="mb-6">
                Contrary to popular belief, most Champagne is dry, with sweetness levels indicated on the label.
              </p>

              <h3 className="text-2xl font-semibold text-pink-700 mb-4">From Dry to Sweet</h3>
              <p className="mb-6">
                Brut Nature (or Zero Dosage) contains no added sugar. Extra Brut is very dry. Brut, the most common style, is dry but with some dosage. Extra Dry is slightly sweet, though still dry by most standards. Demi-Sec is medium-sweet, and Doux is sweet.
              </p>

              <h2 className="text-3xl font-bold text-pink-800 mb-6">Non-Champagne Sparkling Wines</h2>
              <p className="mb-6">
                Excellent sparkling wines are produced worldwide, offering quality and value alternatives to Champagne.
              </p>

              <h3 className="text-2xl font-semibold text-pink-700 mb-4">Cava from Spain</h3>
              <p className="mb-6">
                Spanish Cava, primarily from Penedès, uses the traditional method with local grapes like Macabeo, Xarel·lo, and Parellada. Cava offers excellent value with crisp, clean flavors and fine bubbles, perfect for celebrations.
              </p>

              <h3 className="text-2xl font-semibold text-pink-700 mb-4">Prosecco from Italy</h3>
              <p className="mb-6">
                Made using the Charmat method, Prosecco features fresh, fruity flavors with larger, more effervescent bubbles. Its approachable style and lower price point make it ideal for casual celebrations and aperitivos.
              </p>

              <h2 className="text-3xl font-bold text-pink-800 mb-6">Food Pairing with Sparkling Wines</h2>
              <p className="mb-6">
                The acidity and bubbles in sparkling wines make them versatile food companions, cleansing the palate between bites.
              </p>

              <h3 className="text-2xl font-semibold text-pink-700 mb-4">Classic Pairings</h3>
              <p className="mb-6">
                Champagne pairs beautifully with oysters, caviar, and other seafood. The brininess of shellfish complements Champagne's minerality. Fatty foods like foie gras are balanced by the wine's acidity. Fried foods benefit from the palate-cleansing bubbles.
              </p>

              <h3 className="text-2xl font-semibold text-pink-700 mb-4">Modern Pairings</h3>
              <p className="mb-6">
                Sparkling wines work well with spicy foods, as the bubbles and sweetness (in off-dry styles) can balance heat. Asian cuisines, particularly sushi and sashimi, pair excellently with the clean, crisp nature of many sparkling wines.
              </p>

              <h2 className="text-3xl font-bold text-pink-800 mb-6">Serving and Storage</h2>
              <p className="mb-6">
                Proper serving enhances the sparkling wine experience, preserving the effervescence and revealing optimal flavors.
              </p>

              <h3 className="text-2xl font-semibold text-pink-700 mb-4">Temperature and Glassware</h3>
              <p className="mb-6">
                Serve sparkling wines between 45-50°F (7-10°C) to preserve bubbles and balance flavors. Use tall, narrow flutes or tulip-shaped glasses to preserve effervescence. Avoid wide bowls that dissipate bubbles quickly.
              </p>

              <h3 className="text-2xl font-semibold text-pink-700 mb-4">Opening Technique</h3>
              <p className="mb-6">
                Remove the foil and cage carefully. Hold the cork and twist the bottle (not the cork) slowly. The cork should ease out quietly, not pop dramatically, preserving the wine's structure and preventing loss of bubbles.
              </p>

              <h2 className="text-3xl font-bold text-pink-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4 mb-8">
                {[
                  {
                    question: "Is vintage Champagne always better than non-vintage?",
                    answer: "Not necessarily. Non-vintage Champagnes represent the house style and are often more approachable. Vintage Champagnes are made only in exceptional years and are typically more complex but may require aging to reach peak drinkability."
                  },
                  {
                    question: "How long can I keep Champagne?",
                    answer: "Non-vintage Champagne should be consumed within 3-5 years of release. Vintage Champagnes can age 10-20+ years, developing complex flavors. However, most sparkling wines are meant to be consumed young and fresh."
                  },
                  {
                    question: "What's the difference between Blanc de Blancs and Blanc de Noirs?",
                    answer: "Blanc de Blancs is made exclusively from white grapes (usually Chardonnay). Blanc de Noirs is made from black grapes (Pinot Noir and/or Pinot Meunier) but with minimal skin contact, resulting in a white wine with more body and complexity."
                  },
                  {
                    question: "Why are some sparkling wines more expensive than others?",
                    answer: "Price reflects production methods (traditional vs. tank), aging requirements, grape quality, yield limitations, and brand reputation. Traditional method sparkling wines require more time, labor, and materials than tank method wines."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border border-pink-200 rounded-lg">
                    <button
                      className="w-full p-4 text-left flex justify-between items-center bg-pink-50 hover:bg-pink-100 transition-colors"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className="font-medium text-pink-900">{faq.question}</span>
                      <span className="text-pink-700 text-xl">
                        {activeFAQ === index ? '−' : '+'}
                      </span>
                    </button>
                    {activeFAQ === index && (
                      <div className="p-4 border-t border-pink-200 bg-white">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-pink-800 mb-6">Interactive Quiz: Test Your Knowledge</h2>
              <div className="bg-pink-50 p-6 rounded-lg mb-8">
                {quizQuestions.map((q, qIndex) => (
                  <div key={qIndex} className="mb-6">
                    <p className="font-medium mb-3">{q.question}</p>
                    <div className="space-y-2">
                      {q.options.map((option, oIndex) => (
                        <label key={oIndex} className="flex items-center p-2 hover:bg-pink-100 rounded cursor-pointer">
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
                  className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors"
                >
                  Submit Answers
                </button>
                {submitted && (
                  <div className="mt-4 p-4 bg-pink-100 rounded-lg">
                    <p className="font-bold">Your Score: {calculateScore()}/{quizQuestions.length}</p>
                    {calculateScore() === quizQuestions.length && (
                      <p className="text-green-700">Excellent! You've mastered champagne selection.</p>
                    )}
                  </div>
                )}
              </div>

              <h2 className="text-3xl font-bold text-pink-800 mb-6">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-pink-200">
                  <h3 className="font-bold text-lg mb-2 text-pink-800">Sparkling Wine Types</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Champagne (France)</li>
                    <li>Cava (Spain)</li>
                    <li>Prosecco (Italy)</li>
                    <li>Cremant (France)</li>
                    <li>Crémant de Loire</li>
                    <li>Sparkling wine (other regions)</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-pink-200">
                  <h3 className="font-bold text-lg mb-2 text-pink-800">Selection Factors</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Sweetness level</li>
                    <li>Price point</li>
                    <li>Occasion</li>
                    <li>Food pairing</li>
                    <li>Personal preference</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-pink-800 mb-6">Conclusion</h2>
              <p className="mb-6">
                Selecting the perfect sparkling wine for any celebration involves understanding production methods, sweetness levels, and personal preferences. Whether choosing traditional Champagne for a milestone event or Prosecco for a casual gathering, the right selection enhances the festive atmosphere.
              </p>
              <p>
                Consider the occasion, your guests' preferences, and what foods will be served when making your selection. Remember that excellent sparkling wines are available at various price points, so you can find the perfect bottle to match your budget and celebration. With knowledge of different styles and proper serving techniques, you'll be able to enjoy sparkling wines to their fullest potential.
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