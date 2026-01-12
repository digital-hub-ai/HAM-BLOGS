import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function BestCardioWorkoutsForWeightLoss() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Best Cardio Workouts for Weight Loss - HAM BLOGS</title>
        <meta name="description" content="Effective cardio exercises to burn calories and boost metabolism for weight loss" />
      </Head>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8"
        >
          <span className="mr-2">←</span> Back to Fitness
        </button>

        <article className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm mb-4">
                Fitness
              </span>
              <h1 className="text-4xl font-bold text-white mb-4">
                Best Cardio Workouts for Weight Loss
              </h1>
              <div className="flex items-center text-gray-400">
                <span className="mr-6">January 8, 2026</span>
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
              Effective cardio exercises to burn calories and boost metabolism for weight loss. Cardiovascular exercise is one of the most important components of any weight loss program.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Running and Jogging</h2>
            <p className="text-gray-300 leading-relaxed">
              Running is one of the most effective forms of cardio for burning calories. A 155-pound person can burn approximately 372 calories during 30 minutes of running at a moderate pace. The beauty of running is that it can be done almost anywhere with minimal equipment.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Cycling</h2>
            <p className="text-gray-300 leading-relaxed">
              Whether you're cycling outdoors or using a stationary bike, this low-impact exercise is excellent for burning calories while being easier on the joints. Indoor cycling classes have become increasingly popular for their community aspect and structured workouts.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Swimming</h2>
            <p className="text-gray-300 leading-relaxed">
              Swimming provides a full-body workout that burns calories while building muscle endurance. It's particularly beneficial for those with joint issues since it's completely non-weight bearing.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Jump Rope</h2>
            <p className="text-gray-300 leading-relaxed">
              Jumping rope is incredibly efficient for burning calories in a short amount of time. Just 10 minutes of jump rope can burn as many calories as running an 8-minute mile.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Rowing</h2>
            <p className="text-gray-300 leading-relaxed">
              Rowing machines provide an excellent full-body cardio workout that engages both upper and lower body muscles. It's low-impact but highly effective for burning calories and building endurance.
            </p>

            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
              <p className="text-gray-300">
                Consistency is more important than intensity when starting a cardio routine. Aim for at least 150 minutes of moderate-intensity cardio per week as recommended by health professionals.
              </p>
            </div>
          </div>
        </article>

        <div className="mt-8 flex justify-between items-center">
          <Link href="/category/health/fitness" className="text-yellow-400 hover:text-yellow-300">
            ← More Fitness Articles
          </Link>
        </div>
      </div>
    </div>
  );
}