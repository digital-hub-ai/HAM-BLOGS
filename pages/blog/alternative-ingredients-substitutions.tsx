import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function AlternativeIngredientsSubstitutions() {
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
      question: "What is a good substitute for eggs in baking?",
      options: ["Applesauce", "Mayonnaise", "Water", "All of the above"],
      correct: 3
    },
    {
      question: "Which plant-based milk is closest to dairy in protein content?",
      options: ["Almond milk", "Oat milk", "Soy milk", "Coconut milk"],
      correct: 2
    },
    {
      question: "What can be used as a binder instead of breadcrumbs?",
      options: ["Crushed crackers", "Oats", "Ground nuts", "All of the above"],
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
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100">
      <Head>
        <title>Alternative Ingredients: Substitutions Guide | Culinary Arts</title>
        <meta name="description" content="Smart ingredient substitutions for dietary restrictions and preferences with professional cooking tips." />
        <link rel="canonical" href="https://ham-blogs.com/blog/alternative-ingredients-substitutions" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <nav className="mb-6">
            <Link href="/" className="text-cyan-700 hover:text-cyan-900 font-medium">
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/category/food" className="text-cyan-700 hover:text-cyan-900 font-medium">
              Food
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/category/food/ingredients" className="text-cyan-700 hover:text-cyan-900 font-medium">
              Ingredients
            </Link>
          </nav>
          
          <button 
            onClick={toggleBookmark}
            className={`mb-4 px-4 py-2 rounded-lg transition-colors ${
              bookmarked 
                ? 'bg-cyan-500 text-white' 
                : 'bg-white text-cyan-700 border border-cyan-300 hover:bg-cyan-50'
            }`}
          >
            {bookmarked ? '✓ Bookmarked' : 'Bookmark Article'}
          </button>
        </header>

        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <header className="p-8 bg-gradient-to-r from-cyan-600 to-teal-600 text-white">
            <h1 className="text-4xl font-bold mb-4">Alternative Ingredients: A Comprehensive Substitutions Guide</h1>
            <div className="flex flex-wrap items-center text-cyan-100">
              <span className="mr-4">📅 January 3, 2026</span>
              <span className="mr-4">⏱️ 7 min read</span>
              <span>👤 Chef Victoria Chen</span>
            </div>
          </header>

          <div className="p-8">
            <p className="text-xl text-gray-700 mb-6 italic">
              Master the art of ingredient substitution with professional guidance for dietary restrictions, allergies, and preferences without compromising flavor.
            </p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-cyan-800 mb-6">Understanding Substitution Principles</h2>
              <p className="mb-6">
                Successful ingredient substitution requires understanding the role an ingredient plays in a recipe. Is it a binder, leavening agent, flavoring, or structural component? Different roles require different substitution strategies. The goal is to maintain the intended texture, flavor, and overall outcome of the dish.
              </p>

              <h2 className="text-3xl font-bold text-cyan-800 mb-6">Dairy-Free Substitutions</h2>
              <p className="mb-6">
                Whether due to lactose intolerance, dairy allergies, or dietary preferences, dairy-free cooking has become increasingly common. The key is selecting appropriate alternatives based on the specific role of dairy in the recipe.
              </p>

              <h3 className="text-2xl font-semibold text-cyan-700 mb-4">Milk Substitutes</h3>
              <p className="mb-6">
                For drinking and general cooking, oat milk offers creaminess with neutral flavor. Soy milk provides protein content closest to dairy. Almond milk works well in cereals and coffee but is thinner. Coconut milk adds richness to curries and desserts. For baking, consider that plant milks may alter texture slightly.
              </p>

              <h3 className="text-2xl font-semibold text-cyan-700 mb-4">Butter Alternatives</h3>
              <p className="mb-6">
                Vegan butter works well in most baking applications. Coconut oil provides richness but may impart subtle flavor. Olive oil works for sautéing but not in recipes requiring solid fat. For spreading, dairy-free margarines have improved significantly in taste and texture.
              </p>

              <h2 className="text-3xl font-bold text-cyan-800 mb-6">Egg Substitutions</h2>
              <p className="mb-6">
                Eggs serve multiple functions in cooking and baking—binding, leavening, emulsifying, and adding moisture. The substitution depends on the primary role in the recipe.
              </p>

              <h3 className="text-2xl font-semibold text-cyan-700 mb-4">Binding Agents</h3>
              <p className="mb-6">
                For binding, mashed banana, applesauce, or silken tofu work well in baking. Flaxseed meal mixed with water (1 tbsp flax + 3 tbsp water per egg) creates a gel-like substance that binds effectively. Commercial egg replacers are specifically formulated for baking applications.
              </p>

              <h3 className="text-2xl font-semibold text-cyan-700 mb-4">Leavening Agents</h3>
              <p className="mb-6">
                For leavening, a mixture of vinegar and baking soda (1 tbsp vinegar + 1 tsp baking soda per egg) can help baked goods rise. Whipped aquafaba (chickpea liquid) mimics egg whites for meringues and foam-like textures.
              </p>

              <h2 className="text-3xl font-bold text-cyan-800 mb-6">Gluten-Free Alternatives</h2>
              <p className="mb-6">
                Gluten-free baking requires understanding that gluten provides elasticity and structure. Simply replacing wheat flour with a single alternative often yields disappointing results.
              </p>

              <h3 className="text-2xl font-semibold text-cyan-700 mb-4">Flour Blends</h3>
              <p className="mb-6">
                Gluten-free all-purpose flour blends combine multiple flours and starches to mimic wheat flour properties. Popular blends include rice flour, tapioca starch, and potato starch. Adding xanthan gum helps replicate gluten's binding properties.
              </p>

              <h3 className="text-2xl font-semibold text-cyan-700 mb-4">Individual Grain Flours</h3>
              <p className="mb-6">
                Almond flour provides density and moisture, ideal for cookies and quick breads. Coconut flour is highly absorbent and requires more liquid. Oat flour offers milder flavor and works well in pancakes and muffins. Each requires recipe adjustments.
              </p>

              <h2 className="text-3xl font-bold text-cyan-800 mb-6">Sugar Substitutes</h2>
              <p className="mb-6">
                Reducing or eliminating refined sugar requires understanding sweetness levels and how substitutes affect texture, browning, and moisture in recipes.
              </p>

              <h3 className="text-2xl font-semibold text-cyan-700 mb-4">Natural Sweeteners</h3>
              <p className="mb-6">
                Maple syrup, honey, and agave nectar provide liquid sweetness but add moisture and alter texture. When substituting for granulated sugar, reduce other liquids in the recipe by 1/4 cup per cup of liquid sweetener. Dates and date paste offer fiber and minerals.
              </p>

              <h3 className="text-2xl font-semibold text-cyan-700 mb-4">Artificial and Alternative Sweeteners</h3>
              <p className="mb-6">
                Stevia and monk fruit sweeteners provide intense sweetness without calories but may have aftertastes. Erythritol and xylitol offer bulk similar to sugar but with fewer calories. For baking, blends of alternative sweeteners often work better than single ingredients.
              </p>

              <h2 className="text-3xl font-bold text-cyan-800 mb-6">Protein Substitutions</h2>
              <p className="mb-6">
                Plant-based proteins offer diverse options for meat alternatives, each with unique flavors and textures that work better in certain applications.
              </p>

              <h3 className="text-2xl font-semibold text-cyan-700 mb-4">Legume-Based Proteins</h3>
              <p className="mb-6">
                Lentils, chickpeas, and black beans work well in dishes where their distinct flavors complement other ingredients. Textured vegetable protein (TVP) and tempeh offer more neutral options that readily absorb seasonings.
              </p>

              <h3 className="text-2xl font-semibold text-cyan-700 mb-4">Processed Alternatives</h3>
              <p className="mb-6">
                Commercial plant-based meat alternatives have improved dramatically in texture and flavor. They work well as direct replacements in familiar dishes like burgers, tacos, and pasta sauces.
              </p>

              <h2 className="text-3xl font-bold text-cyan-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4 mb-8">
                {[
                  {
                    question: "Can I substitute ingredients in any recipe?",
                    answer: "While many substitutions are possible, some recipes are more forgiving than others. Baking is more sensitive to ingredient changes than cooking. Start with recipes designed for substitutions before attempting major modifications to traditional recipes."
                  },
                  {
                    question: "Do substitutions affect cooking time or temperature?",
                    answer: "Sometimes yes. Liquid sweeteners may require longer baking times, while denser flours may require lower temperatures. Plant-based milks may curdle at different temperatures than dairy milk. Monitor cooking closely when making substitutions."
                  },
                  {
                    question: "How do I adjust recipes when making multiple substitutions?",
                    answer: "Making multiple substitutions increases complexity. Start with one substitution at a time to understand its effects before adding additional changes. Some substitutions work well together, while others may compound negative effects."
                  },
                  {
                    question: "Are alternative ingredients more expensive?",
                    answer: "Some alternative ingredients cost more than traditional options, but prices are decreasing as demand increases. Consider buying in bulk, shopping sales, and focusing on whole food alternatives like beans and lentils, which are often less expensive than processed alternatives."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border border-cyan-200 rounded-lg">
                    <button
                      className="w-full p-4 text-left flex justify-between items-center bg-cyan-50 hover:bg-cyan-100 transition-colors"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className="font-medium text-cyan-900">{faq.question}</span>
                      <span className="text-cyan-700 text-xl">
                        {activeFAQ === index ? '−' : '+'}
                      </span>
                    </button>
                    {activeFAQ === index && (
                      <div className="p-4 border-t border-cyan-200 bg-white">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-cyan-800 mb-6">Interactive Quiz: Test Your Knowledge</h2>
              <div className="bg-cyan-50 p-6 rounded-lg mb-8">
                {quizQuestions.map((q, qIndex) => (
                  <div key={qIndex} className="mb-6">
                    <p className="font-medium mb-3">{q.question}</p>
                    <div className="space-y-2">
                      {q.options.map((option, oIndex) => (
                        <label key={oIndex} className="flex items-center p-2 hover:bg-cyan-100 rounded cursor-pointer">
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
                  className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors"
                >
                  Submit Answers
                </button>
                {submitted && (
                  <div className="mt-4 p-4 bg-cyan-100 rounded-lg">
                    <p className="font-bold">Your Score: {calculateScore()}/{quizQuestions.length}</p>
                    {calculateScore() === quizQuestions.length && (
                      <p className="text-green-700">Excellent! You've mastered ingredient substitution.</p>
                    )}
                  </div>
                )}
              </div>

              <h2 className="text-3xl font-bold text-cyan-800 mb-6">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-cyan-200">
                  <h3 className="font-bold text-lg mb-2 text-cyan-800">Essential Substitutes</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Flaxseed meal (egg substitute)</li>
                    <li>Gluten-free flour blend</li>
                    <li>Plant-based milk</li>
                    <li>Coconut oil (dairy-free)</li>
                    <li>Maple syrup (sweetener)</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-cyan-200">
                  <h3 className="font-bold text-lg mb-2 text-cyan-800">Helpful Tools</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Substitution reference guide</li>
                    <li>Adjustable measuring spoons</li>
                    <li>Good quality blender</li>
                    <li>Food processor</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-cyan-800 mb-6">Conclusion</h2>
              <p className="mb-6">
                Mastering ingredient substitutions opens up a world of culinary possibilities, allowing you to accommodate dietary restrictions, preferences, and ingredient availability without sacrificing flavor or texture. The key is understanding the function of each ingredient and selecting appropriate alternatives.
              </p>
              <p>
                Start with simple substitutions and gradually build your knowledge and confidence. Keep notes on what works and what doesn't, as this will inform your future cooking adventures. Remember that experimentation is part of the joy of cooking, and sometimes the best discoveries come from necessity. With practice, you'll become adept at creating delicious meals regardless of dietary constraints or ingredient limitations.
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