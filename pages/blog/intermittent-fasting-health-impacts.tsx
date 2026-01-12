import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function IntermittentFastingHealthImpacts() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Intermittent Fasting: Health Impacts - HAM BLOGS</title>
        <meta name="description" content="Examining the science behind different intermittent fasting approaches" />
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
                Intermittent Fasting: Health Impacts
              </h1>
              <div className="flex items-center text-gray-400">
                <span className="mr-6">January 5, 2026</span>
                <span>10 min read</span>
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
              Examining the science behind different intermittent fasting approaches. Intermittent fasting (IF) is an eating pattern that cycles between periods of eating and fasting. Rather than focusing on what to eat, IF focuses on when to eat. Research suggests that IF can have numerous health benefits, though it's not suitable for everyone.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Popular Intermittent Fasting Methods</h2>
            <p className="text-gray-300 leading-relaxed">
              The 16/8 method involves fasting for 16 hours and eating during an 8-hour window, such as eating between noon and 8 PM. The 5:2 approach involves eating normally for five days and restricting calories to 500-600 on two non-consecutive days. Alternate-day fasting involves alternating between days of normal eating and days of severe calorie restriction. The Eat-Stop-Eat method involves 24-hour fasts once or twice per week.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Metabolic Benefits</h2>
            <p className="text-gray-300 leading-relaxed">
              IF can improve insulin sensitivity, which helps regulate blood sugar levels. Studies suggest that IF may reduce insulin resistance, lowering the risk of type 2 diabetes. Additionally, IF can increase levels of human growth hormone (HGH), which plays a role in muscle gain and fat loss. The metabolic switching that occurs during fasting can improve cellular repair processes and gene expression.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Weight Management</h2>
            <p className="text-gray-300 leading-relaxed">
              By restricting the eating window, IF naturally reduces calorie intake, which can lead to weight loss. Additionally, fasting periods can increase metabolism slightly, helping with weight management. IF may also preserve muscle mass better than continuous calorie restriction during weight loss.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Cellular Repair and Longevity</h2>
            <p className="text-gray-300 leading-relaxed">
              During fasting periods, cells initiate autophagy, a process where cells remove damaged components and regenerate new ones. This cellular "cleanup" may contribute to longevity and protection against diseases. Animal studies suggest IF may extend lifespan, though more research is needed in humans.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Considerations and Contraindications</h2>
            <p className="text-gray-300 leading-relaxed">
              IF is not appropriate for everyone, including pregnant or breastfeeding women, individuals with a history of eating disorders, or those with certain medical conditions. Some people may experience initial side effects like hunger, irritability, or fatigue. It's important to stay hydrated during fasting periods and eat nutritious foods during eating windows.
            </p>

            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
              <p className="text-gray-300">
                Intermittent fasting can be an effective tool for weight management and health improvements for many people, but it's not suitable for everyone. Consult with a healthcare provider before starting any fasting regimen.
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