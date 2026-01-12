import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MiddleEasternCuisineAromaticDishes() {
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
      question: "What is the primary spice blend used in Middle Eastern cooking?",
      options: ["Ras el hanout", "Za'atar", "Baharat", "Dukkah"],
      correct: 2
    },
    {
      question: "Which grain is central to many Middle Eastern dishes?",
      options: ["Quinoa", "Couscous", "Bulgur", "Freekeh"],
      correct: 1
    },
    {
      question: "What does 'mezze' refer to in Middle Eastern cuisine?",
      options: ["Main course", "Appetizer", "Small plates for sharing", "Dessert"],
      correct: 2
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Head>
        <title>Middle Eastern Cuisine: Aromatic Dishes | Culinary Arts</title>
        <meta name="description" content="Traditional Middle Eastern recipes featuring herbs and spices with authentic techniques and ingredients." />
        <link rel="canonical" href="https://ham-blogs.com/blog/middle-eastern-cuisine-aromatic-dishes" />
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
            <Link href="/category/food/cuisines" className="text-amber-700 hover:text-amber-900 font-medium">
              World Cuisines
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
          <header className="p-8 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
            <h1 className="text-4xl font-bold mb-4">Middle Eastern Cuisine: Traditional Aromatic Dishes</h1>
            <div className="flex flex-wrap items-center text-amber-100">
              <span className="mr-4">📅 January 3, 2026</span>
              <span className="mr-4">⏱️ 8 min read</span>
              <span>👤 Chef Layla Al-Rashid</span>
            </div>
          </header>

          <div className="p-8">
            <p className="text-xl text-gray-700 mb-6 italic">
              Explore the rich traditions of Middle Eastern cuisine with its distinctive spice blends, fresh herbs, and time-honored cooking techniques.
            </p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-amber-800 mb-6">The Foundation: Spices and Herbs</h2>
              <p className="mb-6">
                Middle Eastern cuisine is characterized by its generous use of aromatic spices and fresh herbs that create distinctive flavor profiles. The cuisine emphasizes the marriage of sweet and savory elements, often incorporating dried fruits, nuts, and aromatic spices in the same dish.
              </p>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Essential Spice Blends</h2>
              <p className="mb-6">
                The use of spice blends is fundamental to Middle Eastern cooking, with each blend adding a distinctive character to dishes.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Baharat</h3>
              <p className="mb-6">
                This versatile spice blend, meaning "spices" in Arabic, varies by region but typically includes black pepper, allspice, cinnamon, cardamom, cloves, and nutmeg. It's used to season meats, rice, and stews, providing warmth and complexity to dishes.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Za'atar</h3>
              <p className="mb-6">
                A blend of dried thyme, sumac, and toasted sesame seeds, often mixed with olive oil. Za'atar is used as a condiment for bread, in salads, and as a seasoning for meats. Its tangy, nutty flavor is distinctive to Levantine cuisine.
              </p>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Staple Ingredients and Grains</h2>
              <p className="mb-6">
                Middle Eastern cuisine features a variety of grains and legumes that form the foundation of many traditional dishes.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Couscous and Bulgur</h3>
              <p className="mb-6">
                Couscous, tiny granules of durum wheat, is central to North African and Middle Eastern cuisine. Properly steamed couscous should be light and fluffy. Bulgur, cracked wheat that has been precooked, is essential in dishes like tabbouleh and kibbeh.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Legumes and Lentils</h3>
              <p className="mb-6">
                Chickpeas, fava beans, and various lentils are staples in Middle Eastern cooking. They're used in salads, stews, and as the base for dishes like falafel and hummus. Proper preparation and seasoning are key to achieving the right texture and flavor.
              </p>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Mezze Culture</h2>
              <p className="mb-6">
                The mezze tradition involves sharing small plates of food, creating a communal dining experience that emphasizes hospitality and social connection.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Classic Mezze Components</h3>
              <p className="mb-6">
                Hummus, baba ghanoush, tabbouleh, fattoush, and dolmas represent the diversity of mezze. Each component offers different flavors, textures, and temperatures, creating a balanced selection that encourages sharing and conversation.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Accompaniments and Spreads</h3>
              <p className="mb-6">
                Labneh, strained yogurt cheese, is often drizzled with olive oil and served with za'atar. Pickled vegetables provide acidity and brightness. The combination of different textures and flavors creates a complete dining experience.
              </p>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Regional Variations</h2>
              <p className="mb-6">
                Middle Eastern cuisine varies significantly across different countries and regions, each with distinctive ingredients and techniques.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Levantine Cuisine</h3>
              <p className="mb-6">
                Encompassing Lebanon, Syria, Jordan, and Palestine, Levantine cuisine emphasizes fresh ingredients, olive oil, and lemon. Dishes like kibbeh, fattoush, and maqluba showcase the region's focus on combining grains, vegetables, and aromatic spices.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Persian Cuisine</h3>
              <p className="mb-6">
                Persian cuisine, from Iran, is known for its subtle, refined flavors and use of dried fruits and nuts in savory dishes. Rice dishes like tahdig (crispy bottom layer) and khoresh (stews) are central to Persian cooking, often featuring ingredients like saffron, barberries, and fresh herbs.
              </p>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Cooking Techniques</h2>
              <p className="mb-6">
                Traditional Middle Eastern cooking techniques have been passed down through generations, emphasizing slow cooking and the development of deep flavors.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Slow Cooking and Braising</h3>
              <p className="mb-6">
                Many Middle Eastern dishes benefit from slow cooking methods that allow flavors to meld and proteins to become tender. Stews like kibbeh nayyeh and various khoresh are simmered for hours to develop complex flavors.
              </p>

              <h3 className="text-2xl font-semibold text-amber-700 mb-4">Grilling and Charcoal Cooking</h3>
              <p className="mb-6">
                Grilling over charcoal or wood imparts distinctive smoky flavors to meats and vegetables. Kofta, shish taouk, and grilled vegetables are common elements in Middle Eastern cuisine, with the smoky char providing an essential flavor component.
              </p>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4 mb-8">
                {[
                  {
                    question: "What is the difference between Middle Eastern and Mediterranean cuisine?",
                    answer: "While there is overlap, Middle Eastern cuisine encompasses a broader region including the Arabian Peninsula, Persia, and North Africa. It often features more aromatic spices and dried fruits. Mediterranean cuisine specifically refers to countries bordering the Mediterranean Sea and emphasizes olive oil, seafood, and fresh vegetables."
                  },
                  {
                    question: "Can I substitute ingredients if I can't find Middle Eastern specialties?",
                    answer: "Many Middle Eastern ingredients have alternatives, though flavor profiles will vary. Substitute bulgur with cracked wheat or quinoa, and use regular herbs if za'atar is unavailable. For sumac, try lemon juice mixed with a pinch of tartaric acid."
                  },
                  {
                    question: "How do I properly cook with tahini?",
                    answer: "Tahini can be bitter if not prepared properly. Always whisk in liquid gradually while stirring constantly to prevent clumping. Add lemon juice and salt to taste. For cooking, add tahini to warm (not boiling) liquids to prevent separation."
                  },
                  {
                    question: "What is the proper way to serve mezze?",
                    answer: "Mezze should be served in small portions with plenty of flatbread. Arrange dishes with a variety of flavors, textures, and temperatures. Serve at room temperature for optimal flavor, and encourage sharing family-style to follow the traditional hospitality customs."
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
                      <p className="text-green-700">Excellent! You've mastered Middle Eastern cuisine knowledge.</p>
                    )}
                  </div>
                )}
              </div>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-amber-200">
                  <h3 className="font-bold text-lg mb-2 text-amber-800">Essential Middle Eastern Ingredients</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Za'atar blend</li>
                    <li>Sumac</li>
                    <li>Tahini</li>
                    <li>Pomegranate molasses</li>
                    <li>Freekeh</li>
                    <li>Mastic</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-amber-200">
                  <h3 className="font-bold text-lg mb-2 text-amber-800">Traditional Tools</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Mortar and pestle</li>
                    <li>Spice grinder</li>
                    <li>Large mixing bowls</li>
                    <li>Heavy-bottomed pots</li>
                    <li>Grill pan</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-amber-800 mb-6">Conclusion</h2>
              <p className="mb-6">
                Middle Eastern cuisine offers a rich tapestry of flavors, techniques, and traditions that emphasize hospitality, fresh ingredients, and aromatic spice combinations. The cuisine celebrates the sharing of food and the bringing together of people through mezze culture and family-style dining.
              </p>
              <p>
                Understanding the foundational spices, cooking techniques, and cultural context of Middle Eastern cuisine will enhance your appreciation and preparation of these aromatic dishes. Whether preparing a simple hummus or an elaborate kibbeh, the key is to approach the cooking with patience and respect for the traditions that have shaped this diverse and flavorful cuisine.
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