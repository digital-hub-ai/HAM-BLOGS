import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SuperfoodsNutritionalBenefits() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Superfoods and Their Nutritional Benefits - HAM BLOGS</title>
        <meta name="description" content="Exploring nutrient-dense foods that provide exceptional health benefits" />
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
                Superfoods and Their Nutritional Benefits
              </h1>
              <div className="flex items-center text-gray-400">
                <span className="mr-6">January 6, 2026</span>
                <span>7 min read</span>
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
              Exploring nutrient-dense foods that provide exceptional health benefits. Superfoods are foods that are particularly rich in vitamins, minerals, antioxidants, and other beneficial compounds. While no single food can provide all the nutrients you need, incorporating superfoods into your diet can boost your overall nutrition and support optimal health.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Antioxidant-Rich Berries</h2>
            <p className="text-gray-300 leading-relaxed">
              Berries like blueberries, acai, and goji berries are packed with antioxidants that protect cells from damage caused by free radicals. Blueberries are high in vitamin C and vitamin K, while also containing anthocyanins, which may support brain health. Acai berries contain high levels of antioxidants, particularly anthocyanins, and healthy fats.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Leafy Green Powerhouses</h2>
            <p className="text-gray-300 leading-relaxed">
              Spinach, kale, and other leafy greens are nutritional powerhouses, rich in vitamins A, C, K, and folate. They also provide iron, calcium, and fiber. These nutrients support bone health, immune function, and may reduce the risk of chronic diseases. The high fiber content also aids digestion and helps maintain stable blood sugar levels.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Omega-3 Rich Foods</h2>
            <p className="text-gray-300 leading-relaxed">
              Fatty fish like salmon, sardines, and mackerel are excellent sources of omega-3 fatty acids, which support heart and brain health. For plant-based options, chia seeds, flaxseeds, and walnuts provide alpha-linolenic acid (ALA), a type of omega-3. These healthy fats have anti-inflammatory properties and may reduce the risk of heart disease.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Nutrient-Dense Seeds</h2>
            <p className="text-gray-300 leading-relaxed">
              Chia seeds, hemp seeds, and pumpkin seeds are packed with nutrients. Chia seeds are high in fiber, protein, and omega-3 fatty acids. Hemp seeds provide all essential amino acids, making them a complete protein source. Pumpkin seeds are rich in magnesium, zinc, and healthy fats.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Colorful Vegetables</h2>
            <p className="text-gray-300 leading-relaxed">
              Colorful vegetables like sweet potatoes, bell peppers, and beets provide a variety of nutrients. Sweet potatoes are rich in beta-carotene, which converts to vitamin A in the body. Bell peppers are high in vitamin C, and beets contain nitrates that may support cardiovascular health. The different colors indicate different beneficial compounds.
            </p>

            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
              <p className="text-gray-300">
                While superfoods offer exceptional nutrition, the key to optimal health is variety and balance. Incorporate a range of nutrient-dense foods into your diet rather than focusing on a single "superfood" for health benefits.
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