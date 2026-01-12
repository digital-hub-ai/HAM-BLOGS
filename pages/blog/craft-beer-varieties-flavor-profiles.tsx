import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CraftBeerVarietiesFlavorProfiles() {
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
      question: "Which hop variety is known for its citrus and grapefruit notes?",
      options: ["Cascade", "Saaz", "Hallertau", "Fuggle"],
      correct: 0
    },
    {
      question: "What does IBU stand for in beer terminology?",
      options: ["International Beer Unit", "India Beer Union", "International Bitterness Units", "Intense Beer Undertone"],
      correct: 2
    },
    {
      question: "What is the typical alcohol content range for IPAs?",
      options: ["3-4%", "4-5%", "5-7%", "6-10%+"],
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-brown-100">
      <Head>
        <title>Craft Beer Varieties: Flavor Profiles | Culinary Arts</title>
        <meta name="description" content="Exploring the diverse world of craft beer styles and taste characteristics with expert brewing insights." />
        <link rel="canonical" href="https://ham-blogs.com/blog/craft-beer-varieties-flavor-profiles" />
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
          <header className="p-8 bg-gradient-to-r from-amber-600 to-brown-600 text-white">
            <h1 className="text-4xl font-bold mb-4">Craft Beer Varieties: Exploring Flavor Profiles and Brewing Techniques</h1>
            <div className="flex flex-wrap items-center text-amber-100">
              <span className="mr-4">📅 January 4, 2026</span>
              <span className="mr-4">⏱️ 8 min read</span>
              <span>👤 Brewmaster David Chen</span>
            </div>
          </header>

          <div className="p-8">
            <p className="text-xl text-gray-700 mb-6 italic">
              Explore the diverse world of craft beer styles and taste characteristics with expert insights into brewing techniques and flavor development.
            </p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-amber-800 mb-6">Understanding Beer Fundamentals</h2>
              <p className="mb-6">
                Craft beer encompasses a vast array of styles, each with distinct characteristics determined by ingredients, brewing techniques, and fermentation processes. The four primary ingredients—water, malt, hops, and yeast—combine in countless ways to create diverse flavor profiles.
              </p>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Ale vs. Lager</h2>
              <p className="mb-6">
                The primary distinction in beer styles is between ales and lagers, determined by the type of yeast and fermentation temperature.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Ale Varieties</h3>
              <p className="mb-6">
                Ales ferment at warmer temperatures (60-75°F) with top-fermenting yeast, creating complex flavor profiles with fruity, spicy, or earthy notes. IPAs, stouts, porters, and wheat beers are examples of ale styles that showcase the yeast's contribution to flavor.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Lager Characteristics</h3>
              <p className="mb-6">
                Lagers ferment at cooler temperatures (45-55°F) with bottom-fermenting yeast, then undergo extended cold conditioning. This process creates clean, crisp flavors with less yeast character, highlighting malt and hop profiles. Pilsners, helles, and dunkels are classic lager styles.
              </p>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Hop Varieties and Bitterness</h2>
              <p className="mb-6">
                Hops contribute bitterness, flavor, and aroma to beer, with hundreds of varieties offering distinct characteristics.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Bittering vs. Aroma Hops</h3>
              <p className="mb-6">
                Bittering hops are added early in the boil to isomerize alpha acids, creating bitterness. Aroma hops are added late in the boil or during dry-hopping to preserve volatile aromatic compounds. The International Bitterness Units (IBU) scale measures bitterness levels.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Regional Hop Characteristics</h3>
              <p className="mb-6">
                Cascade hops from the Pacific Northwest offer citrus and floral notes. European noble hops like Saaz and Hallertau provide delicate, earthy aromas. New Zealand hops like Nelson Sauvin bring tropical fruit characteristics. These regional differences reflect growing conditions and genetic heritage.
              </p>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Popular Craft Beer Styles</h2>
              <p className="mb-6">
                The craft beer movement has expanded traditional style boundaries, creating innovative interpretations and hybrid styles.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">IPAs and Their Variations</h3>
              <p className="mb-6">
                India Pale Ales, originally brewed with extra hops for preservation during sea voyages, now encompass numerous variations. West Coast IPAs feature aggressive hop bitterness and citrus notes. New England IPAs emphasize tropical fruit aromas with a hazy appearance. Double IPAs intensify all characteristics.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Sour and Wild Ales</h3>
              <p className="mb-6">
                These styles use wild yeasts and bacteria to create tart, funky flavors. Belgian lambics are spontaneously fermented, while Berliner Weisse uses specific bacterial cultures. These beers often have lower alcohol content and food-friendly acidity.
              </p>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Food Pairing with Craft Beer</h2>
              <p className="mb-6">
                Beer's carbonation, bitterness, and diverse flavor profiles make it a versatile companion to food.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Matching Intensity</h3>
              <p className="mb-6">
                Pair bold, hoppy IPAs with equally assertive foods like spicy dishes or strong cheeses. Delicate pilsners complement subtle flavors like seafood or salads. The key is balancing the intensity of both the beer and food.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Contrast and Complement</h3>
              <p className="mb-6">
                Sweet stouts pair well with chocolate desserts, complementing flavors. The carbonation in pilsners cleanses the palate after fatty foods, creating contrast. Experiment with both approaches to discover personal preferences.
              </p>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Tasting and Evaluation</h2>
              <p className="mb-6">
                Proper beer appreciation involves engaging all senses to fully experience the brewer's artistry.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Visual Assessment</h3>
              <p className="mb-6">
                Observe color, clarity, and head retention. The appearance provides clues about ingredients and brewing techniques. A thick, lasting head suggests proper carbonation and protein content.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Aroma and Flavor</h3>
              <p className="mb-6">
                Swirl the beer gently to release aromatics, then take a deep sniff. Note malt sweetness, hop character, yeast esters, and any adjunct additions. The flavor should follow the nose with additional complexity from carbonation and temperature.
              </p>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4 mb-8">
                {[
                  {
                    question: "What is the difference between craft beer and mass-produced beer?",
                    answer: "Craft beer typically refers to beer produced by small, independent breweries using traditional ingredients and innovative techniques. Mass-produced beer often prioritizes consistency and cost over flavor complexity, using adjuncts like rice or corn."
                  },
                  {
                    question: "How should I properly store craft beer?",
                    answer: "Store beer upright in a cool, dark place to prevent oxidation and light-struck flavors. Most craft beers are best consumed fresh, though some high-alcohol styles can age. Avoid temperature fluctuations that can damage the beer."
                  },
                  {
                    question: "What glassware is best for different beer styles?",
                    answer: "Different styles benefit from specific glassware. Tulip glasses concentrate aromatics in IPAs. Pilsner glasses showcase color and carbonation in lagers. Wheat beer glasses highlight the style's characteristics. Proper glassware enhances the drinking experience."
                  },
                  {
                    question: "How do I read beer labels for information?",
                    answer: "Look for alcohol content (ABV), International Bitterness Units (IBU), original gravity, and style designation. Some brewers include hop varieties, aging information, or food pairing suggestions. The label provides insight into the beer's character."
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
                      <p className="text-green-700">Excellent! You've mastered craft beer knowledge.</p>
                    )}
                  </div>
                )}
              </div>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-amber-200">
                  <h3 className="font-bold text-lg mb-2 text-amber-800">Popular Beer Styles</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>IPA (India Pale Ale)</li>
                    <li>Stout</li>
                    <li>Pilsner</li>
                    <li>Wheat Beer</li>
                    <li>Sour Ale</li>
                    <li>Porter</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-amber-200">
                  <h3 className="font-bold text-lg mb-2 text-amber-800">Evaluation Criteria</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Appearance</li>
                    <li>Aroma</li>
                    <li>Flavor</li>
                    <li>Mouthfeel</li>
                    <li>Overall impression</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Conclusion</h2>
              <p className="mb-6">
                The craft beer world offers endless opportunities for exploration, with new styles, flavors, and brewing techniques emerging constantly. Understanding basic categories and flavor profiles helps appreciate the brewer's artistry and find personal favorites.
              </p>
              <p>
                Whether you prefer hoppy IPAs, malty stouts, or crisp lagers, the key to beer appreciation is an open mind and willingness to try new styles. Pay attention to flavors, aromatics, and how different beers pair with food. With knowledge of brewing techniques and ingredients, you'll gain a deeper appreciation for this ancient yet ever-evolving beverage.
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