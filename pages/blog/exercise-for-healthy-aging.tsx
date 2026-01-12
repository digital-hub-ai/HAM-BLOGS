import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function ExerciseForHealthyAging() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Exercise for Healthy Aging - HAM BLOGS</title>
        <meta name="description" content="Physical activity strategies that promote healthy aging" />
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
                Exercise for Healthy Aging
              </h1>
              <div className="flex items-center text-gray-400">
                <span className="mr-6">January 7, 2026</span>
                <span>9 min read</span>
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
              Physical activity strategies that promote healthy aging. Regular exercise is one of the most powerful interventions for healthy aging. It helps maintain muscle mass, bone density, cardiovascular health, and cognitive function. Exercise also reduces inflammation and oxidative stress, key factors in aging. The good news is that it's never too late to start reaping the benefits of physical activity.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Resistance Training and Muscle Preservation</h2>
            <p className="text-gray-300 leading-relaxed">
              As we age, we naturally lose muscle mass and strength, a condition called sarcopenia. Resistance training is essential for maintaining muscle mass, bone density, and metabolic health. Strength training can be as simple as bodyweight exercises like squats, push-ups, and lunges, or using resistance bands or weights. Even two sessions per week can significantly impact muscle preservation and functional independence.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Cardiovascular Exercise</h2>
            <p className="text-gray-300 leading-relaxed">
              Aerobic exercise maintains heart health, improves circulation, and supports brain function. Activities like brisk walking, swimming, cycling, or dancing can be adapted to any fitness level. The American Heart Association recommends at least 150 minutes of moderate-intensity aerobic activity per week. Even small amounts of regular activity provide benefits compared to being sedentary.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Flexibility and Balance</h2>
            <p className="text-gray-300 leading-relaxed">
              Flexibility and balance become increasingly important with age to prevent falls and maintain mobility. Yoga and tai chi combine flexibility, balance, and strength training. Regular stretching helps maintain range of motion in joints. Balance exercises can be as simple as standing on one foot or walking heel-to-toe. These exercises help maintain independence and reduce injury risk.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Exercise and Cognitive Health</h2>
            <p className="text-gray-300 leading-relaxed">
              Physical activity supports brain health and may help prevent cognitive decline. Exercise increases blood flow to the brain and promotes the growth of new brain cells. It also reduces inflammation and oxidative stress that can damage brain cells. Regular physical activity has been associated with a reduced risk of dementia and improved executive function.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Making Exercise Sustainable</h2>
            <p className="text-gray-300 leading-relaxed">
              Choose activities you enjoy to make exercise sustainable long-term. Start gradually and increase intensity over time. Find a workout buddy for accountability and social connection. Set realistic goals and celebrate progress. Listen to your body and adjust as needed. Consistency is more important than intensity – regular, moderate activity provides substantial benefits.
            </p>

            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
              <p className="text-gray-300">
                Exercise is a powerful tool for healthy aging that benefits both physical and cognitive health. The key is finding activities you enjoy and can maintain consistently over time, regardless of your starting point.
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