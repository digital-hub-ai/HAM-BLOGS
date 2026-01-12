import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ThaiCuisineBalancingSweetSourSpicy() {
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
      question: "What are the four fundamental flavors in Thai cuisine?",
      options: ["Sweet, sour, salty, bitter", "Sweet, sour, salty, spicy", "Sweet, sour, spicy, umami", "Sour, salty, spicy, bitter"],
      correct: 1
    },
    {
      question: "Which herb is considered essential in Thai cooking?",
      options: ["Basil", "Cilantro", "Thai basil", "Parsley"],
      correct: 2
    },
    {
      question: "What is the primary ingredient in Thai curry pastes?",
      options: ["Coconut milk", "Chilies", "Lemongrass", "Galangal"],
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-100">
      <Head>
        <title>Thai Cuisine: Balancing Sweet, Sour, and Spicy | Culinary Arts</title>
        <meta name="description" content="Achieving the perfect balance of flavors in authentic Thai dishes with traditional ingredients and techniques." />
        <link rel="canonical" href="https://ham-blogs.com/blog/thai-cuisine-balancing-sweet-sour-spicy" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <nav className="mb-6">
            <Link href="/" className="text-green-700 hover:text-green-900 font-medium">
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/category/food" className="text-green-700 hover:text-green-900 font-medium">
              Food
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/category/food/cuisines" className="text-green-700 hover:text-green-900 font-medium">
              World Cuisines
            </Link>
          </nav>
          
          <button 
            onClick={toggleBookmark}
            className={`mb-4 px-4 py-2 rounded-lg transition-colors ${
              bookmarked 
                ? 'bg-green-500 text-white' 
                : 'bg-white text-green-700 border border-green-300 hover:bg-green-50'
            }`}
          >
            {bookmarked ? '✓ Bookmarked' : 'Bookmark Article'}
          </button>
        </header>

        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <header className="p-8 bg-gradient-to-r from-green-600 to-yellow-600 text-white">
            <h1 className="text-4xl font-bold mb-4">Thai Cuisine: Balancing Sweet, Sour, and Spicy Flavors</h1>
            <div className="flex flex-wrap items-center text-green-100">
              <span className="mr-4">📅 January 4, 2026</span>
              <span className="mr-4">⏱️ 9 min read</span>
              <span>👤 Chef Somsak Jindarak</span>
            </div>
          </header>

          <div className="p-8">
            <p className="text-xl text-gray-700 mb-6 italic">
              Discover the art of achieving perfect flavor balance in authentic Thai dishes with traditional ingredients and time-honored techniques.
            </p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-green-800 mb-6">The Philosophy of Balance</h2>
              <p className="mb-6">
                Thai cuisine is built upon the fundamental principle of balancing four primary flavors: sweet, sour, salty, and spicy. This balance, known as "rak", creates harmony in each dish and is essential to authentic Thai cooking. A well-prepared Thai dish will have elements of all four flavors, though not necessarily in equal proportions.
              </p>

              <h2 className="text-3xl font-bold text-green-800 mb-6">Essential Flavoring Agents</h2>
              <p className="mb-6">
                Understanding the ingredients that provide each of the four fundamental flavors is crucial to achieving authentic Thai taste profiles.
              </p>

              <h3 className="text-2xl font-semibold text-green-700 mb-4">Sweet Elements</h3>
              <p className="mb-6">
                Palm sugar is the traditional sweetener in Thai cuisine, providing a complex, caramel-like sweetness. Darker palm sugar offers deeper flavor than lighter varieties. When unavailable, brown sugar can be substituted. Fish sauce also adds subtle sweetness when used in small amounts alongside other seasonings.
              </p>

              <h3 className="text-2xl font-semibold text-green-700 mb-4">Sour Components</h3>
              <p className="mb-6">
                Lime juice provides bright, fresh acidity that balances rich and spicy elements. Tamarind paste offers a more complex, fruity sourness with slight sweetness. White vinegar and rice vinegar are also used, though less commonly than lime and tamarind.
              </p>

              <h2 className="text-3xl font-bold text-green-800 mb-6">The Heat: Thai Chilies</h2>
              <p className="mb-6">
                Thai cuisine uses various chilies to provide heat, each with distinct characteristics. The level of spiciness can be adjusted by removing seeds and membranes, which contain most of the capsaicin.
              </p>

              <h3 className="text-2xl font-semibold text-green-700 mb-4">Fresh Chilies</h3>
              <p className="mb-6">
                Bird's eye chilies (prik kee noo) are the most common, providing intense heat. Green chilies are milder and add fresh flavor. Red chilies offer different heat levels and are often used for color. The chilies are often sliced, minced, or used whole depending on the dish.
              </p>

              <h3 className="text-2xl font-semibold text-green-700 mb-4">Dried Chilies</h3>
              <p className="mb-6">
                Dried chilies are used in curry pastes and for oil infusions. They provide deeper, more concentrated heat. When rehydrated, they can be ground into pastes that form the base of many Thai curries.
              </p>

              <h2 className="text-3xl font-bold text-green-800 mb-6">Aromatic Herbs and Spices</h2>
              <p className="mb-6">
                Thai cuisine relies heavily on aromatic ingredients that provide complex layers of flavor and distinctive regional characteristics.
              </p>

              <h3 className="text-2xl font-semibold text-green-700 mb-4">Essential Aromatics</h3>
              <p className="mb-6">
                Lemongrass provides bright, citrusy notes with subtle floral undertones. Galangal, similar to ginger but with a sharper, pine-like flavor, is essential in many curries. Kaffir lime leaves contribute distinctive citrus aroma, while Thai basil has a licorice-like flavor that differs from Italian basil.
              </p>

              <h3 className="text-2xl font-semibold text-green-700 mb-4">Curry Pastes</h3>
              <p className="mb-6">
                Thai curry pastes are made by grinding fresh aromatics with dried chilies and other seasonings. Green curry paste uses fresh green chilies, red curry paste uses dried red chilies, and yellow curry paste incorporates turmeric. These pastes form the foundation of most Thai curries.
              </p>

              <h2 className="text-3xl font-bold text-green-800 mb-6">Regional Variations</h2>
              <p className="mb-6">
                Thailand's diverse geography has created distinct regional cuisines with different flavor preferences and ingredient availability.
              </p>

              <h3 className="text-2xl font-semibold text-green-700 mb-4">Central Thai Cuisine</h3>
              <p className="mb-6">
                Centered around Bangkok, central Thai cuisine features refined, balanced flavors with moderate spiciness. Dishes like pad thai and green curry exemplify this region's approach to balancing sweet, sour, and spicy elements. Coconut milk is frequently used to mellow heat and add richness.
              </p>

              <h3 className="text-2xl font-semibold text-green-700 mb-4">Northern and Northeastern Thai Cuisine</h3>
              <p className="mb-6">
                Northern Thai cuisine, influenced by neighboring Myanmar and China, features milder, earthier flavors with dishes like khao soi. Northeastern Thai (Isan) cuisine is known for its bold, spicy, and sour flavors, with som tam (papaya salad) and larb (meat salad) as signature dishes.
              </p>

              <h2 className="text-3xl font-bold text-green-800 mb-6">Balancing Techniques</h2>
              <p className="mb-6">
                Achieving the proper balance in Thai cooking requires constant tasting and adjustment throughout the cooking process.
              </p>

              <h3 className="text-2xl font-semibold text-green-700 mb-4">Taste and Adjust</h3>
              <p className="mb-6">
                Thai cooks continuously taste their dishes and adjust with small additions of fish sauce (salty), lime juice (sour), palm sugar (sweet), or chilies (spicy) until the perfect balance is achieved. This iterative process ensures harmony in the final dish.
              </p>

              <h3 className="text-2xl font-semibold text-green-700 mb-4">Layering Flavors</h3>
              <p className="mb-6">
                Flavors are built gradually, with each addition contributing to the overall balance. The base might start with curry paste fried in oil, then coconut milk to mellow the heat, protein added next, and final seasonings of fish sauce, lime, and sugar to achieve the perfect balance.
              </p>

              <h2 className="text-3xl font-bold text-green-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4 mb-8">
                {[
                  {
                    question: "How do I adjust the spiciness of a Thai dish?",
                    answer: "Add more palm sugar and lime juice to balance heat. Coconut milk can mellow spiciness. If a dish is too spicy, add more of the non-spicy components. If it's not spicy enough, add more chilies gradually until desired heat is achieved."
                  },
                  {
                    question: "Can I substitute Thai ingredients with more common alternatives?",
                    answer: "While substitutions are possible, Thai cuisine relies on specific ingredients for authentic flavors. Lemongrass can be replaced with lime zest and ginger, but the result won't be the same. Kaffir lime leaves are difficult to substitute but can be omitted if necessary."
                  },
                  {
                    question: "Why does my Thai curry taste different from restaurant versions?",
                    answer: "Restaurant versions may use more fish sauce, sugar, or MSG to balance flavors. At home, ensure you're balancing all four flavors (sweet, sour, salty, spicy) and using fresh aromatic ingredients. Curry pastes made at home also have different flavor profiles than commercial versions."
                  },
                  {
                    question: "How important is the balance of flavors in Thai cuisine?",
                    answer: "Critical. The balance of sweet, sour, salty, and spicy is fundamental to Thai cuisine. A dish that emphasizes only one or two flavors is not considered authentic. Each flavor should be present and complement the others."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border border-green-200 rounded-lg">
                    <button
                      className="w-full p-4 text-left flex justify-between items-center bg-green-50 hover:bg-green-100 transition-colors"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className="font-medium text-green-900">{faq.question}</span>
                      <span className="text-green-700 text-xl">
                        {activeFAQ === index ? '−' : '+'}
                      </span>
                    </button>
                    {activeFAQ === index && (
                      <div className="p-4 border-t border-green-200 bg-white">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-green-800 mb-6">Interactive Quiz: Test Your Knowledge</h2>
              <div className="bg-green-50 p-6 rounded-lg mb-8">
                {quizQuestions.map((q, qIndex) => (
                  <div key={qIndex} className="mb-6">
                    <p className="font-medium mb-3">{q.question}</p>
                    <div className="space-y-2">
                      {q.options.map((option, oIndex) => (
                        <label key={oIndex} className="flex items-center p-2 hover:bg-green-100 rounded cursor-pointer">
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
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Submit Answers
                </button>
                {submitted && (
                  <div className="mt-4 p-4 bg-green-100 rounded-lg">
                    <p className="font-bold">Your Score: {calculateScore()}/{quizQuestions.length}</p>
                    {calculateScore() === quizQuestions.length && (
                      <p className="text-green-700">Excellent! You've mastered Thai flavor balancing.</p>
                    )}
                  </div>
                )}
              </div>

              <h2 className="text-3xl font-bold text-green-800 mb-6">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-green-200">
                  <h3 className="font-bold text-lg mb-2 text-green-800">Essential Thai Ingredients</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Fish sauce (nam pla)</li>
                    <li>Palm sugar</li>
                    <li>Lime juice</li>
                    <li>Thai chilies</li>
                    <li>Kaffir lime leaves</li>
                    <li>Thai basil</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-green-200">
                  <h3 className="font-bold text-lg mb-2 text-green-800">Aromatic Essentials</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Lemongrass</li>
                    <li>Galangal</li>
                    <li>Garlic</li>
                    <li>Shallots</li>
                    <li>Shrimp paste</li>
                    <li>Curry pastes</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-green-800 mb-6">Conclusion</h2>
              <p className="mb-6">
                Thai cuisine's emphasis on balancing sweet, sour, salty, and spicy flavors creates complex, harmonious dishes that are both satisfying and memorable. The key to success lies in understanding how each flavor component contributes to the whole and continuously adjusting to achieve perfect balance.
              </p>
              <p>
                Mastering Thai cooking requires patience and practice in recognizing and adjusting flavors. Start with simple dishes like pad thai or som tam, focusing on achieving proper balance. As you become more comfortable with the fundamental flavors and techniques, you'll be able to create more complex dishes that truly capture the essence of Thai cuisine.
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