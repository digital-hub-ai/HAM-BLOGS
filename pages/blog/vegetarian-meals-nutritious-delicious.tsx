import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const VegetarianMealsNutritiousDelicious = () => {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [activeQuiz, setActiveQuiz] = useState<number | null>(null);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
    // Here you could save to localStorage or send to backend
    alert(`Blog ${!bookmarked ? 'added to' : 'removed from'} bookmarks`);
  };

  const quizQuestions = [
    {
      question: "Which nutrient is most important to consider when planning vegetarian meals?",
      options: [
        "Vitamin C",
        "Protein",
        "Sugar",
        "Salt"
      ],
      answer: "Protein"
    },
    {
      question: "What is a complete protein source in vegetarian cooking?",
      options: [
        "Rice alone",
        "Beans alone",
        "Rice and beans together",
        "Lettuce and tomatoes"
      ],
      answer: "Rice and beans together"
    },
    {
      question: "Which cooking method best preserves nutrients in vegetables?",
      options: [
        "Boiling for long periods",
        "Deep frying",
        "Steaming or sautéing",
        "Microwaving with water"
      ],
      answer: "Steaming or sautéing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Head>
        <title>Vegetarian Meals: Nutritious and Delicious | Food Blog</title>
        <meta name="description" content="Explore a collection of flavorful vegetarian recipes that are both nutritious and satisfying." />
        <meta name="keywords" content="vegetarian recipes, healthy vegetarian meals, plant-based nutrition, vegetarian cooking, meatless meals, protein-rich vegetarian foods" />
        <link rel="canonical" href="https://ham-blogs.vercel.app/blog/vegetarian-meals-nutritious-delicious" />
        <meta property="og:title" content="Vegetarian Meals: Nutritious and Delicious | Food Blog" />
        <meta property="og:description" content="Explore a collection of flavorful vegetarian recipes that are both nutritious and satisfying." />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vegetarian Meals: Nutritious and Delicious | Food Blog" />
        <meta name="twitter:description" content="Explore a collection of flavorful vegetarian recipes that are both nutritious and satisfying." />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">Vegetarian Meals: Nutritious and Delicious</h1>
          <div className="flex items-center mt-2 text-gray-600">
            <span>Published: January 9, 2026</span>
            <span className="mx-2">•</span>
            <span>9 min read</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-start">
            <button 
              onClick={toggleBookmark}
              className={`px-4 py-2 rounded-lg transition-colors ${
                bookmarked 
                  ? 'bg-red-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {bookmarked ? 'Remove Bookmark' : 'Add Bookmark'}
            </button>
            
            <button 
              onClick={() => router.back()}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Back to Category
            </button>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction to Nutritious Vegetarian Cooking</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vegetarian cooking has evolved far beyond simple salads and basic dishes. Today's vegetarian cuisine is vibrant, diverse, and nutritionally balanced, offering a wide array of flavors, textures, and nutrients that can meet all dietary needs. Whether you're following a vegetarian diet for health, ethical, environmental, or personal reasons, the key to success lies in understanding how to create satisfying, nutritious meals.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              A well-planned vegetarian diet can provide all the nutrients your body needs while offering numerous health benefits. The focus should be on incorporating a variety of whole foods, including legumes, whole grains, nuts, seeds, fruits, and vegetables to ensure nutritional completeness.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Essential Nutrients in Vegetarian Cooking</h2>
            <h3 className="text-xl font-medium text-gray-700 mb-3">Protein Sources</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Contrary to common misconceptions, vegetarians can easily meet their protein needs through plant-based sources. Legumes (beans, lentils, chickpeas), quinoa, nuts, seeds, and soy products like tofu and tempeh are excellent protein sources. Combining different protein sources throughout the day ensures you get all essential amino acids.
            </p>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">Iron and Vitamin B12</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Plant-based iron sources include lentils, chickpeas, spinach, and fortified cereals. To enhance absorption, pair these with vitamin C-rich foods like citrus fruits, tomatoes, or bell peppers. Vitamin B12, primarily found in animal products, should be obtained through fortified foods or supplements in a vegetarian diet.
            </p>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">Omega-3 Fatty Acids</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Include sources of alpha-linolenic acid (ALA), a type of omega-3 fatty acid, such as flaxseeds, chia seeds, hemp seeds, and walnuts. These provide essential fatty acids that support brain and heart health.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Flavorful Vegetarian Recipe Ideas</h2>
            <h3 className="text-xl font-medium text-gray-700 mb-3">Mediterranean Chickpea Stew</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              This hearty stew combines chickpeas with tomatoes, olives, capers, and aromatic herbs like oregano and thyme. Serve over whole grain couscous or quinoa for a complete protein meal. The combination of Mediterranean flavors creates a satisfying and nutritious dish that's rich in fiber and plant-based protein.
            </p>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">Vegetable Stir-Fry with Tofu</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              A colorful mix of vegetables like broccoli, bell peppers, snap peas, and carrots stir-fried with cubed tofu in a savory sauce. The key is to cook ingredients quickly over high heat to preserve their nutrients and create appealing textures. Serve over brown rice or noodles for a complete meal.
            </p>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">Lentil Walnut Bolognese</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              This protein-rich alternative to traditional meat bolognese uses red lentils and finely chopped walnuts to create a hearty, satisfying sauce. The lentils provide protein and fiber, while the walnuts add richness and healthy fats. Serve over whole grain pasta for a complete meal.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Balancing Macronutrients in Vegetarian Meals</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A balanced vegetarian meal should include a source of protein, complex carbohydrates, healthy fats, and plenty of vegetables. This combination ensures sustained energy, satiety, and optimal nutrient absorption. For example, a bowl with quinoa (protein and carbs), avocado (healthy fats), and roasted vegetables provides a complete nutritional profile.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Pay attention to portion sizes and color variety on your plate. Aim to fill half your plate with vegetables and fruits, one quarter with complex carbohydrates, and one quarter with protein sources. This approach helps ensure nutritional balance without the need for complex calculations.
            </p>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">Creating Complete Proteins</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              While you don't need to combine complementary proteins in the same meal, knowing which foods work well together helps ensure you get all essential amino acids. Examples include rice and beans, hummus and whole grain pita, or peanut butter on whole grain bread.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meal Prep and Planning for Vegetarian Cooking</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Planning and preparation are key to maintaining a nutritious vegetarian diet. Batch cooking grains, preparing beans in advance, and washing and chopping vegetables ahead of time can make weeknight cooking much easier. Having a collection of versatile sauces and seasonings on hand also helps create variety with minimal effort.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Consider cooking large batches of versatile components like quinoa, roasted vegetables, or bean salads that can be mixed and matched throughout the week. This approach saves time while ensuring you have nutritious options readily available.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Addressing Common Vegetarian Cooking Challenges</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              One of the most common challenges in vegetarian cooking is achieving satisfying textures and flavors. This can be addressed by incorporating umami-rich ingredients like mushrooms, nutritional yeast, miso paste, and tamari. These ingredients add depth and richness to vegetarian dishes.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Another challenge is ensuring meals are filling enough. Focus on including protein, fiber, and healthy fats in each meal. These nutrients promote satiety and help prevent overeating or snacking between meals.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-medium text-gray-800">How do I get enough protein on a vegetarian diet?</h3>
                <p className="text-gray-700 mt-1">Include a variety of protein sources throughout the day: legumes, nuts, seeds, whole grains, and soy products. Most people can meet their protein needs with a varied vegetarian diet without needing to combine proteins in the same meal.</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-medium text-gray-800">Are vegetarian meals filling enough?</h3>
                <p className="text-gray-700 mt-1">Yes, when properly planned with adequate protein, fiber, and healthy fats, vegetarian meals can be very satisfying. Include protein sources like beans, lentils, or tofu, and don't forget to add healthy fats like avocado or nuts.</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-medium text-gray-800">How can I make vegetarian meals more interesting?</h3>
                <p className="text-gray-700 mt-1">Experiment with different cuisines, try new vegetables, use various cooking methods, and explore global flavors. Different herbs, spices, and condiments can transform simple ingredients into exciting dishes.</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-medium text-gray-800">Is vegetarian cooking more expensive?</h3>
                <p className="text-gray-700 mt-1">Often vegetarian meals are less expensive than meat-based meals, especially when centered around beans, lentils, seasonal vegetables, and whole grains. Planning meals around sales and seasonal produce can further reduce costs.</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Interactive Quiz: Test Your Knowledge</h2>
            <p className="text-gray-700 mb-4">Test your understanding of nutritious vegetarian cooking:</p>
            
            {quizQuestions.map((questionObj, index) => (
              <div key={index} className="mb-6 bg-gray-50 p-4 rounded-lg">
                <p className="font-medium text-gray-800">{index + 1}. {questionObj.question}</p>
                <div className="mt-2 space-y-2">
                  {questionObj.options.map((option, optionIndex) => (
                    <div key={optionIndex}>
                      <input 
                        type="radio" 
                        id={`q${index}-o${optionIndex}`} 
                        name={`question${index}`} 
                        className="mr-2"
                        onChange={() => {}}
                      />
                      <label htmlFor={`q${index}-o${optionIndex}`} className="text-gray-700">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
                <button 
                  className="mt-2 px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
                  onClick={() => setActiveQuiz(prev => prev === index ? null : index)}
                >
                  {activeQuiz === index ? 'Hide Answer' : 'Show Answer'}
                </button>
                {activeQuiz === index && (
                  <div className="mt-2 p-2 bg-green-100 text-green-800 rounded">
                    Correct answer: {questionObj.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Resources</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><a href="#" className="text-green-600 hover:underline">Complete Guide to Plant-Based Proteins</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Essential Vegetarian Cooking Techniques</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Seasonal Vegetable Guide</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Nutritional Yeast: A Vegetarian's Secret Weapon</a></li>
              <li><a href="#" className="text-green-600 hover:underline">Budget-Friendly Vegetarian Meal Planning</a></li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nutritious vegetarian cooking is both achievable and delicious when you understand the basics of nutrition and have a collection of versatile recipes. By focusing on whole foods and incorporating a variety of colors, textures, and flavors, you can create satisfying meals that meet all your nutritional needs.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Remember that vegetarian cooking is an exploration of flavors, techniques, and ingredients from around the world. With time and practice, you'll develop confidence in creating balanced, nutritious meals that delight your taste buds and support your health. The key is to start with simple recipes and gradually expand your repertoire as you become more comfortable with plant-based ingredients.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 Food Blog. All rights reserved.</p>
          <p className="mt-2 text-gray-400">Delivering delicious recipes and cooking inspiration to families worldwide.</p>
        </div>
      </footer>
    </div>
  );
};

export default VegetarianMealsNutritiousDelicious;