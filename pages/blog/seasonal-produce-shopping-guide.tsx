import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SeasonalProduceShoppingGuide() {
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
      question: "What is the primary benefit of buying seasonal produce?",
      options: ["Lower prices", "Better flavor and nutrition", "Greater variety", "Longer shelf life"],
      correct: 1
    },
    {
      question: "Which season is best for stone fruits?",
      options: ["Spring", "Summer", "Fall", "Winter"],
      correct: 1
    },
    {
      question: "What should you do before purchasing fresh produce?",
      options: ["Smell it", "Check for bruises", "Feel its firmness", "All of the above"],
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
      <Head>
        <title>Seasonal Produce Shopping Guide | Culinary Arts</title>
        <meta name="description" content="Learn how to select the best seasonal fruits and vegetables for peak flavor and nutritional value." />
        <link rel="canonical" href="https://ham-blogs.com/blog/seasonal-produce-shopping-guide" />
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
            <Link href="/category/food/ingredients" className="text-green-700 hover:text-green-900 font-medium">
              Ingredients
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
          <header className="p-8 bg-gradient-to-r from-green-600 to-teal-600 text-white">
            <h1 className="text-4xl font-bold mb-4">Seasonal Produce Shopping Guide: Selecting the Best Fruits and Vegetables</h1>
            <div className="flex flex-wrap items-center text-green-100">
              <span className="mr-4">📅 January 7, 2026</span>
              <span className="mr-4">⏱️ 8 min read</span>
              <span>👤 Produce Expert Sarah Chen</span>
            </div>
          </header>

          <div className="p-8">
            <p className="text-xl text-gray-700 mb-6 italic">
              Master the art of selecting seasonal produce at peak flavor and nutritional value with expert tips from professional chefs and farmers.
            </p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-green-800 mb-6">The Benefits of Seasonal Shopping</h2>
              <p className="mb-6">
                Shopping for seasonal produce offers numerous advantages that extend beyond taste. When fruits and vegetables are harvested at their peak ripeness and consumed shortly after, they offer superior flavor, higher nutritional content, and often better value. Additionally, supporting seasonal agriculture contributes to environmental sustainability.
              </p>

              <h2 className="text-3xl font-bold text-green-800 mb-6">Spring Seasonal Produce</h2>
              <p className="mb-6">
                Spring brings tender, delicate produce as the earth awakens from winter dormancy. Look for asparagus, artichokes, peas, spring onions, and leafy greens like arugula and spinach.
              </p>

              <h3 className="text-2xl font-semibold text-green-700 mb-4">Selecting Spring Asparagus</h3>
              <p className="mb-6">
                Choose asparagus spears with compact, closed tips and firm stalks. The lower ends should be moist, not dried out. Thicker spears are often more tender than thin ones. Avoid spears with wilted or flowering tips, which indicate age.
              </p>

              <h3 className="text-2xl font-semibold text-green-700 mb-4">Spring Peas and Pod Selection</h3>
              <p className="mb-6">
                Fresh peas should feel full and rounded inside their pods, which should be bright green and plump. Snap peas should be crisp and bright with visible peas forming inside. Avoid pods that are yellowing, wrinkled, or feel flat.
              </p>

              <h2 className="text-3xl font-bold text-green-800 mb-6">Summer Seasonal Produce</h2>
              <p className="mb-6">
                Summer offers an abundance of vibrant, sun-ripened produce. Tomatoes, stone fruits, corn, peppers, and eggplants reach their peak during these warm months.
              </p>

              <h3 className="text-2xl font-semibold text-green-700 mb-4">Tomato Selection Techniques</h3>
              <p className="mb-6">
                Look for tomatoes with a deep, even color and slight give when gently squeezed. A sweet, earthy aroma near the stem indicates ripeness. Heavier tomatoes for their size suggest higher water content and better flavor. Avoid tomatoes with wrinkled skin or soft spots.
              </p>

              <h3 className="text-2xl font-semibold text-green-700 mb-4">Stone Fruit Inspection</h3>
              <p className="mb-6">
                For peaches, nectarines, and plums, look for a sweet fragrance at the stem end and a slight give to gentle pressure. The background color (not the red blush) should be creamy or yellow, indicating ripeness. Avoid fruit with green undertones, which suggests underripeness.
              </p>

              <h2 className="text-3xl font-bold text-green-800 mb-6">Fall Seasonal Produce</h2>
              <p className="mb-6">
                Autumn showcases the harvest season with hearty vegetables and fruits that store well. Squash, apples, pears, brussels sprouts, and root vegetables dominate fall markets.
              </p>

              <h3 className="text-2xl font-semibold text-green-700 mb-4">Apple Selection Tips</h3>
              <p className="mb-6">
                Choose apples that feel heavy for their size and have smooth, firm skin without wrinkles or soft spots. The stem should be intact, and there should be no signs of bruising. A sweet aroma indicates good ripeness, though this varies by variety.
              </p>

              <h3 className="text-2xl font-semibold text-green-700 mb-4">Winter Squash Evaluation</h3>
              <p className="mb-6">
                Good winter squash should feel heavy for its size, indicating dense flesh. The skin should be uniformly colored and free of soft spots or cracks. The stem should be intact and dry, not mushy. A hollow sound when tapped indicates maturity and good flavor concentration.
              </p>

              <h2 className="text-3xl font-bold text-green-800 mb-6">Winter Seasonal Produce</h2>
              <p className="mb-6">
                Winter produce focuses on storage crops that provide essential nutrients during colder months. Root vegetables, citrus fruits, and hardy greens are winter staples.
              </p>

              <h3 className="text-2xl font-semibold text-green-700 mb-4">Citrus Fruit Selection</h3>
              <p className="mb-6">
                Select citrus fruits that feel heavy for their size, indicating high juice content. The skin should be smooth and firm, not wrinkled or soft. A fragrant aroma indicates ripeness and good flavor. Avoid fruits with mold or soft spots.
              </p>

              <h3 className="text-2xl font-semibold text-green-700 mb-4">Root Vegetable Inspection</h3>
              <p className="mb-6">
                Choose root vegetables without soft spots, cracks, or signs of sprouting. Carrots should be firm and bright orange. Beets should be smooth and deep-colored. Potatoes should be firm without green spots or sprouting eyes.
              </p>

              <h2 className="text-3xl font-bold text-green-800 mb-6">Storage and Preservation</h2>
              <p className="mb-6">
                Proper storage extends the life of seasonal produce and maintains quality. Different fruits and vegetables have specific storage requirements.
              </p>

              <h3 className="text-2xl font-semibold text-green-700 mb-4">Refrigeration Guidelines</h3>
              <p className="mb-6">
                Store most leafy greens, herbs, and berries in the refrigerator crisper drawer. Wrap delicate greens in paper towels to absorb excess moisture. Store tomatoes at room temperature until fully ripe, then refrigerate if not using immediately.
              </p>

              <h3 className="text-2xl font-semibold text-green-700 mb-4">Counter Storage</h3>
              <p className="mb-6">
                Bananas, avocados, stone fruits, and melons ripen at room temperature. Store potatoes, onions, and winter squash in a cool, dark, well-ventilated area. Keep potatoes and onions separate, as they spoil each other faster when stored together.
              </p>

              <h2 className="text-3xl font-bold text-green-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4 mb-8">
                {[
                  {
                    question: "How can I tell if produce is truly in season?",
                    answer: "Seasonal produce will be abundant, relatively inexpensive, and offered by local vendors. It will also have superior appearance, aroma, and flavor compared to out-of-season alternatives that have traveled long distances."
                  },
                  {
                    question: "Is organic produce worth the extra cost?",
                    answer: "Organic produce avoids synthetic pesticides and fertilizers, but the choice depends on your priorities and budget. For produce with edible skins (like berries and apples), organic may be preferable. For thick-skinned items, conventional is often acceptable."
                  },
                  {
                    question: "How long can I store seasonal produce?",
                    answer: "Storage times vary greatly by type. Leafy greens last 3-5 days, while winter squashes can last 2-3 months. Store produce according to its specific requirements, and use the 'first in, first out' principle to minimize waste."
                  },
                  {
                    question: "What if seasonal produce isn't available in my area?",
                    answer: "Frozen produce is often flash-frozen at peak ripeness and retains nutritional value. Canned goods from reputable producers can also be good alternatives, especially for items like tomatoes and beans."
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
                      <p className="text-green-700">Excellent! You've mastered seasonal produce shopping.</p>
                    )}
                  </div>
                )}
              </div>

              <h2 className="text-3xl font-bold text-green-800 mb-6">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-green-200">
                  <h3 className="font-bold text-lg mb-2 text-green-800">Seasonal Availability Chart</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Spring: Asparagus, peas, artichokes</li>
                    <li>Summer: Tomatoes, stone fruits, corn</li>
                    <li>Fall: Apples, squash, brussels sprouts</li>
                    <li>Winter: Citrus, root vegetables</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-green-200">
                  <h3 className="font-bold text-lg mb-2 text-green-800">Shopping Tips</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Visit farmers' markets for freshness</li>
                    <li>Shop frequently for peak quality</li>
                    <li>Buy a little extra of peak items</li>
                    <li>Preserve surplus through freezing</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-green-800 mb-6">Conclusion</h2>
              <p className="mb-6">
                Shopping for seasonal produce enhances both the flavor and nutritional value of your meals while supporting sustainable agriculture. By understanding how to select, evaluate, and store seasonal fruits and vegetables, you can maximize the benefits of nature's seasonal offerings.
              </p>
              <p>
                Remember that seasonal eating is a journey of discovery. Explore new varieties, visit local markets, and experiment with recipes that highlight the peak flavors of each season. With practice, you'll develop an intuitive sense for selecting the best seasonal produce, leading to more delicious and nutritious meals year-round.
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