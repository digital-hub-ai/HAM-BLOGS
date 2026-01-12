import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function AntiAgingNutritionTips() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Anti-Aging Nutrition Tips - HAM BLOGS</title>
        <meta name="description" content="Foods and nutrients that support cellular health and longevity" />
      </Head>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8"
        >
          <span className="mr-2">←</span> Back to Longevity
        </button>

        <article className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm mb-4">
                Longevity
              </span>
              <h1 className="text-4xl font-bold text-white mb-4">
                Anti-Aging Nutrition Tips
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
              Foods and nutrients that support cellular health and longevity. Nutrition plays a crucial role in the aging process. The foods we eat can either accelerate or slow down cellular damage, inflammation, and oxidative stress – all key factors in aging. A well-designed anti-aging diet focuses on nutrient-dense foods that support cellular repair, reduce inflammation, and promote longevity pathways.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Antioxidant-Rich Foods</h2>
            <p className="text-gray-300 leading-relaxed">
              Antioxidants help neutralize free radicals that cause cellular damage. Colorful fruits and vegetables are rich sources of antioxidants. Blueberries, blackberries, and other dark berries are high in anthocyanins. Leafy greens like spinach and kale provide lutein and zeaxanthin. Colorful vegetables like bell peppers, carrots, and tomatoes offer carotenoids. Including a variety of colorful plant foods in your diet provides diverse protective compounds.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Omega-3 Fatty Acids</h2>
            <p className="text-gray-300 leading-relaxed">
              Omega-3 fatty acids have potent anti-inflammatory properties and support brain health. Fatty fish like salmon, sardines, and mackerel are excellent sources. Plant-based sources include walnuts, chia seeds, and flaxseeds. Regular consumption of omega-3s may help reduce inflammation associated with aging and support cognitive function.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Intermittent Fasting and Caloric Restriction</h2>
            <p className="text-gray-300 leading-relaxed">
              Periods of reduced caloric intake can trigger cellular repair processes like autophagy, where cells clean out damaged components. Intermittent fasting and caloric restriction have shown promise in extending lifespan in various organisms. These practices may activate longevity genes and improve metabolic health markers.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Polyphenol-Rich Foods</h2>
            <p className="text-gray-300 leading-relaxed">
              Polyphenols are plant compounds with anti-aging properties. Green tea contains EGCG, a powerful polyphenol. Red wine (in moderation) provides resveratrol. Dark chocolate offers flavonoids. Curcumin in turmeric has anti-inflammatory properties. These compounds may activate longevity pathways and protect against age-related diseases.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Nutritious Whole Foods</h2>
            <p className="text-gray-300 leading-relaxed">
              Focus on whole, minimally processed foods. Include plenty of vegetables, fruits, whole grains, legumes, nuts, and seeds. Choose high-quality proteins from fish, poultry, legumes, and occasionally grass-fed meats. Limit ultra-processed foods, added sugars, and trans fats, which can accelerate aging through inflammatory processes.
            </p>

            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
              <p className="text-gray-300">
                An anti-aging diet emphasizes whole, nutrient-dense foods that support cellular health. Consistency with healthy eating patterns over time is more important than perfection at any single meal.
              </p>
            </div>
          </div>
        </article>

        <div className="mt-8 flex justify-between items-center">
          <Link href="/category/health/longevity" className="text-yellow-400 hover:text-yellow-300">
            ← More Longevity Articles
          </Link>
        </div>
      </div>
    </div>
  );
}