import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function VitaminsMineralsEssentialNutrients() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Vitamins and Minerals: Essential Nutrients - HAM BLOGS</title>
        <meta name="description" content="Key vitamins and minerals needed for optimal body function" />
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
                Vitamins and Minerals: Essential Nutrients
              </h1>
              <div className="flex items-center text-gray-400">
                <span className="mr-6">January 3, 2026</span>
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
              Key vitamins and minerals needed for optimal body function. Vitamins and minerals are essential nutrients that your body needs in small amounts to function properly. They play crucial roles in supporting immune function, bone health, energy production, and countless other bodily processes. While supplements can be helpful in certain situations, obtaining nutrients from food is generally the best approach.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Fat-Soluble Vitamins</h2>
            <p className="text-gray-300 leading-relaxed">
              Vitamins A, D, E, and K are fat-soluble, meaning they're absorbed with dietary fats and stored in the liver and fatty tissues. Vitamin A is important for vision and immune function, found in carrots, sweet potatoes, and leafy greens. Vitamin D supports bone health and immune function, synthesized in the skin through sun exposure and found in fatty fish and fortified foods. Vitamin E acts as an antioxidant, protecting cells from damage, abundant in nuts, seeds, and vegetable oils. Vitamin K is essential for blood clotting and bone health, found in leafy greens and cruciferous vegetables.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Water-Soluble Vitamins</h2>
            <p className="text-gray-300 leading-relaxed">
              The B-complex vitamins and vitamin C are water-soluble, meaning they dissolve in water and excess amounts are excreted in urine. B vitamins play crucial roles in energy metabolism and nervous system function. Vitamin B12 is essential for nerve function and red blood cell formation, primarily found in animal products. Folate (B9) is important for DNA synthesis and especially crucial during pregnancy. Vitamin C is an antioxidant that supports immune function and collagen synthesis, abundant in citrus fruits, berries, and peppers.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Essential Minerals</h2>
            <p className="text-gray-300 leading-relaxed">
              Macronutrients include calcium, phosphorus, magnesium, sodium, potassium, chloride, and sulfur. Calcium is crucial for bone health and muscle function, found in dairy products, leafy greens, and fortified foods. Magnesium is involved in over 300 enzymatic reactions, found in nuts, seeds, and whole grains. Potassium helps regulate blood pressure and muscle contractions, abundant in bananas, potatoes, and beans.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Trace Minerals</h2>
            <p className="text-gray-300 leading-relaxed">
              Trace minerals are needed in smaller amounts but are equally important. Iron is essential for oxygen transport in red blood cells, found in red meat, beans, and fortified cereals. Zinc supports immune function and wound healing, abundant in meat, shellfish, and legumes. Iodine is crucial for thyroid function, found in iodized salt, seafood, and dairy products. Selenium acts as an antioxidant and supports thyroid function, found in Brazil nuts, seafood, and whole grains.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Optimizing Nutrient Intake</h2>
            <p className="text-gray-300 leading-relaxed">
              A varied diet rich in whole foods is the best way to ensure adequate vitamin and mineral intake. Different foods provide different nutrients, so eating a wide variety helps cover all your needs. Cooking methods can affect nutrient content – steaming vegetables rather than boiling helps retain water-soluble vitamins. Some nutrients work together, like vitamin D and calcium for bone health, or vitamin C and iron absorption.
            </p>

            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
              <p className="text-gray-300">
                A balanced diet with a variety of whole foods is the best approach to meeting your vitamin and mineral needs. While supplements can be useful in specific situations, they should not replace a healthy diet rich in nutrient-dense foods.
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