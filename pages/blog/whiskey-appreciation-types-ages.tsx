import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function WhiskeyAppreciationTypesAges() {
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
      question: "What is the minimum aging period for bourbon to be legally called bourbon?",
      options: ["1 year", "2 years", "No minimum", "3 years"],
      correct: 2
    },
    {
      question: "Which grain must make up at least 51% of bourbon mash bill?",
      options: ["Rye", "Corn", "Barley", "Wheat"],
      correct: 1
    },
    {
      question: "What is the maximum barrel entry proof for bourbon?",
      options: ["125 proof", "130 proof", "140 proof", "150 proof"],
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100">
      <Head>
        <title>Whiskey Appreciation: Types and Ages | Culinary Arts</title>
        <meta name="description" content="Understanding whiskey varieties, distillation methods, and aging processes for proper appreciation." />
        <link rel="canonical" href="https://ham-blogs.com/blog/whiskey-appreciation-types-ages" />
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
          <header className="p-8 bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
            <h1 className="text-4xl font-bold mb-4">Whiskey Appreciation: Types, Ages, and Distillation Methods</h1>
            <div className="flex flex-wrap items-center text-amber-100">
              <span className="mr-4">📅 January 6, 2026</span>
              <span className="mr-4">⏱️ 10 min read</span>
              <span>👤 Master Distiller Patricia O'Sullivan</span>
            </div>
          </header>

          <div className="p-8">
            <p className="text-xl text-gray-700 mb-6 italic">
              Understanding the varieties of whiskey, distillation methods, and aging processes to appreciate the complexity and craftsmanship of this beloved spirit.
            </p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-amber-800 mb-6">Understanding Whiskey Categories</h2>
              <p className="mb-6">
                Whiskey encompasses a diverse range of spirits distinguished by their ingredients, production methods, and regional characteristics. Each category has specific legal requirements and flavor profiles that define its identity.
              </p>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Bourbon and American Whiskey</h2>
              <p className="mb-6">
                Bourbon, America's native spirit, must contain at least 51% corn in its mash bill and be aged in new charred oak barrels. The high corn content creates a sweeter, fuller flavor profile compared to other whiskey styles.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Bourbon Production Standards</h3>
              <p className="mb-6">
                Bourbon must be distilled to no more than 80% alcohol by volume (160 proof) and entered into the barrel at no more than 62.5% ABV (125 proof). It cannot contain any added flavoring, coloring, or other spirits. Straight bourbon must be aged for at least two years.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Tennessee Whiskey</h3>
              <p className="mb-6">
                Tennessee whiskey follows bourbon standards but includes an additional step: charcoal mellowing through sugar maple charcoal, known as the Lincoln County Process. This creates a smoother, mellower flavor profile distinct from bourbon.
              </p>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Scotch Whisky</h2>
              <p className="mb-6">
                Scotch whisky must be produced in Scotland from malted barley (for single malt) and aged in oak barrels for at least three years. The regional differences and peat usage create diverse flavor profiles.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Regional Characteristics</h3>
              <p className="mb-6">
                Islay whiskies are known for their peaty, medicinal character due to peat smoke in the malting process. Speyside whiskies tend to be more delicate and floral, while Highland whiskies vary widely but often feature honeyed and nutty notes. Campbeltown whiskies have maritime influences.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">The Role of Peat</h3>
              <p className="mb-6">
                Peat, partially decayed organic matter, is burned to dry malted barley, imparting distinctive smoky, earthy flavors. The phenol parts per million (PPM) measures peat levels, with Islay whiskies often ranging from 20-50+ PPM compared to unpeated whiskies at 0-5 PPM.
              </p>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Irish Whiskey</h2>
              <p className="mb-6">
                Irish whiskey is typically triple-distilled, creating a smoother, lighter spirit. It must be aged for at least three years in wooden casks and can be made from malted or unmalted barley.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Pot Still Irish Whiskey</h3>
              <p className="mb-6">
                Pot still whiskey uses a mixture of malted and unmalted barley, creating a fuller-bodied, more complex spirit with spicy, oily characteristics distinct from both single malt and grain whiskey.
              </p>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Rye Whiskey</h2>
              <p className="mb-6">
                Rye whiskey, popular in both American and Canadian varieties, must contain at least 51% rye in the mash bill. The rye grain imparts spicy, peppery notes that distinguish it from corn-heavy bourbon.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">American Rye Characteristics</h3>
              <p className="mb-6">
                American rye tends to be spicier and drier than bourbon, with notes of pepper, cinnamon, and herbs. Higher rye content (60% or more) creates more intense spice, while lower rye content results in a more balanced profile.
              </p>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">The Aging Process</h2>
              <p className="mb-6">
                Whiskey aging in wooden barrels is where the spirit develops its color, flavor, and complexity. The interaction between spirit, wood, and air creates the characteristics that distinguish aged whiskey from new make.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Barrel Influence</h3>
              <p className="mb-6">
                New charred oak barrels (required for bourbon) contribute vanilla, caramel, and spice notes. Previously used barrels (common for Scotch) provide more subtle wood influence, allowing the distillate character to shine through. Different oak species and char levels create varying flavor profiles.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Climate Effects</h3>
              <p className="mb-6">
                Climate significantly affects aging. Kentucky's temperature fluctuations cause the spirit to expand into and contract from the wood, accelerating maturation. Scotland's cooler, more stable climate results in slower, more gradual maturation. Higher temperatures generally accelerate aging but can lead to excessive evaporation.
              </p>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Appreciation Techniques</h2>
              <p className="mb-6">
                Proper whiskey appreciation involves engaging all senses to fully experience the spirit's complexity.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Nosing Whiskey</h3>
              <p className="mb-6">
                Begin with the glass at arm's length to assess the initial aroma. Then bring closer for a more detailed examination. Add a few drops of water to open up the aromas. Common descriptors include vanilla, caramel, spice, fruit, floral, and smoky notes.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Tasting Method</h3>
              <p className="mb-6">
                Take a small sip, allowing it to coat your palate. Note the initial flavors, mid-palate development, and finish length. The finish (aftertaste) can last seconds to minutes and often reveals the whiskey's complexity and quality.
              </p>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4 mb-8">
                {[
                  {
                    question: "Does age always indicate better quality in whiskey?",
                    answer: "Not necessarily. While aging develops complexity, too much age can result in over-oaked flavors that overpower the spirit's character. The optimal age varies by whiskey style and distillery. Some excellent whiskeys are non-age statement or younger expressions."
                  },
                  {
                    question: "What is the 'angel's share' in whiskey aging?",
                    answer: "The angel's share is the portion of whiskey that evaporates from the barrel during aging, typically 1-2% per year. This evaporation concentrates flavors and is a natural part of the aging process, though it reduces the final volume available for bottling."
                  },
                  {
                    question: "Why do some whiskeys have different colors?",
                    answer: "Color comes primarily from the wood interaction during aging. Different wood types, char levels, and previous contents of the barrel (sherry, port, etc.) affect color. Some distilleries add caramel coloring for consistency, though this doesn't affect flavor."
                  },
                  {
                    question: "What is the difference between single malt and blended whiskey?",
                    answer: "Single malt is made from 100% malted barley at a single distillery. Blended whiskey combines whiskies from multiple distilleries, often mixing single malts with grain whiskey to create consistent flavor profiles."
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
                      <p className="text-green-700">Excellent! You've mastered whiskey appreciation.</p>
                    )}
                  </div>
                )}
              </div>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-amber-200">
                  <h3 className="font-bold text-lg mb-2 text-amber-800">Whiskey Categories</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Bourbon (American)</li>
                    <li>Scotch (Single Malt/Blended)</li>
                    <li>Irish Whiskey</li>
                    <li>Rye Whiskey</li>
                    <li>Canadian Whiskey</li>
                    <li>Japanese Whiskey</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-amber-200">
                  <h3 className="font-bold text-lg mb-2 text-amber-800">Appreciation Tools</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Snifter glasses</li>
                    <li>Whiskey stones</li>
                    <li>Water pipettes</li>
                    <li>Whiskey tasting mats</li>
                    <li>Flavor wheel</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Conclusion</h2>
              <p className="mb-6">
                Whiskey appreciation is a journey of discovery that combines understanding of production methods, aging processes, and regional characteristics with sensory evaluation. Each category offers distinct flavors and experiences that reflect the terroir, traditions, and craftsmanship of its origin.
              </p>
              <p>
                Whether you prefer the sweet, full-bodied nature of bourbon, the complex peatiness of Islay Scotch, or the smooth, light character of Irish whiskey, there's a world of flavors to explore. Take time to properly taste and appreciate each whiskey, noting its unique characteristics and how they reflect its production and aging process. With knowledge and experience, you'll develop a deeper appreciation for this complex and rewarding spirit.
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