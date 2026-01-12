import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function BalancedDietNutritionBasics() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Balanced Diet: Nutrition Basics - HAM BLOGS</title>
        <meta name="description" content="Understanding macronutrients and micronutrients for optimal health" />
      </Head>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8"
        >
          <span className="mr-2">←</span> Back to Nutrition
        </button>

        <article className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm mb-4">
                Nutrition
              </span>
              <h1 className="text-4xl font-bold text-white mb-4">
                Balanced Diet: Nutrition Basics
              </h1>
              <div className="flex items-center text-gray-400">
                <span className="mr-6">January 8, 2026</span>
                <span>8 min read</span>
              </div>
            </div>
            <button
              onClick={toggleBookmark}
              className={`p-2 rounded-full ${bookmarked ? 'text-yellow-400' : 'text-gray-400 hover:text-yellow-400'}`}
            >
              {bookmarked ? '★' : '☆'}
            </button>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              Understanding macronutrients and micronutrients for optimal health. A balanced diet provides the right combination of nutrients to fuel your body, support immune function, and maintain overall health. The key is to consume a variety of foods in the right proportions.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Macronutrients: The Foundation</h2>
            <p className="text-gray-300 leading-relaxed">
              Macronutrients are nutrients your body needs in larger amounts. They include carbohydrates, proteins, and fats. Carbohydrates provide quick energy and should make up 45-65% of your daily calories. Choose complex carbs like whole grains, fruits, and vegetables over simple sugars. Proteins are essential for building and repairing tissues, making up 10-35% of your daily calories. Include lean proteins like poultry, fish, legumes, and low-fat dairy. Fats are crucial for hormone production and nutrient absorption, comprising 20-35% of daily calories. Focus on healthy fats from sources like avocados, nuts, seeds, and olive oil.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Micronutrients: The Essential Elements</h2>
            <p className="text-gray-300 leading-relaxed">
              Micronutrients include vitamins and minerals that your body needs in smaller amounts but are crucial for optimal functioning. Vitamins are categorized as fat-soluble (A, D, E, K) and water-soluble (B-complex and C). Minerals include both macrominerals (calcium, phosphorus, magnesium) and trace minerals (iron, zinc, iodine). A diverse diet rich in fruits, vegetables, whole grains, and lean proteins typically provides adequate micronutrients.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Building a Balanced Plate</h2>
            <p className="text-gray-300 leading-relaxed">
              A practical approach to balanced eating is the plate method: fill half your plate with colorful vegetables and fruits, one quarter with lean protein, and one quarter with complex carbohydrates. Add a small portion of healthy fats. This visual guide helps ensure you're getting a good mix of nutrients at each meal.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Hydration and Fiber</h2>
            <p className="text-gray-300 leading-relaxed">
              Don't forget about water and fiber, which are essential for health but not traditionally classified as nutrients. Aim for 8-10 glasses of water daily, more if you're active or in a hot climate. Include 25-35 grams of fiber daily from sources like fruits, vegetables, whole grains, and legumes to support digestive health and help control blood sugar levels.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Mindful Eating Practices</h2>
            <p className="text-gray-300 leading-relaxed">
              Eating mindfully can improve your relationship with food and help you recognize when you're full. Take time to chew slowly, savor flavors, and pay attention to hunger and satiety cues. This practice can prevent overeating and enhance the satisfaction you get from your meals.
            </p>

            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
              <p className="text-gray-300">
                A balanced diet doesn't mean perfection at every meal. Focus on consistency over time, variety in your food choices, and moderation in portions. Small, sustainable changes are more effective than drastic dietary restrictions.
              </p>
            </div>
          </div>
        </article>

        <div className="mt-8 flex justify-between items-center">
          <Link href="/category/health/nutrition" className="text-yellow-400 hover:text-yellow-300">
            ← More Nutrition Articles
          </Link>
        </div>
      </div>
    </div>
  );
}