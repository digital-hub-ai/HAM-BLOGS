import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function StrengthTrainingBeginnersGuide() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Strength Training: Beginners Guide - HAM BLOGS</title>
        <meta name="description" content="Essential exercises and techniques for starting your strength training journey" />
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
                Strength Training: Beginners Guide
              </h1>
              <div className="flex items-center text-gray-400">
                <span className="mr-6">January 7, 2026</span>
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
              Essential exercises and techniques for starting your strength training journey. Building muscle through resistance training is crucial for overall health, metabolism, and functional fitness.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Getting Started Safely</h2>
            <p className="text-gray-300 leading-relaxed">
              Before diving into heavy lifting, it's important to master proper form with lighter weights or bodyweight exercises. Poor form can lead to injuries that set back your progress significantly. Consider working with a certified trainer for your first few sessions.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Compound Movements</h2>
            <p className="text-gray-300 leading-relaxed">
              Compound exercises work multiple muscle groups simultaneously and are highly efficient for beginners. Focus on movements like squats, deadlifts, bench press, rows, and overhead presses. These exercises provide the biggest return on your investment in terms of time spent.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Progressive Overload</h2>
            <p className="text-gray-300 leading-relaxed">
              To continue making gains, you must gradually increase the demands placed on your muscles. This can be achieved by increasing weight, reps, sets, or reducing rest time between sets. Track your progress to ensure consistent improvement.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Sample Beginner Routine</h2>
            <p className="text-gray-300 leading-relaxed">
              A simple 3-day-per-week routine focusing on full-body workouts is ideal for beginners. For example: Day 1 - Squats, Push-ups, Rows; Day 2 - Deadlifts, Bench Press, Overhead Press; Day 3 - Lunges, Pull-ups, Planks. Perform 2-3 sets of 8-12 repetitions for each exercise.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Recovery and Nutrition</h2>
            <p className="text-gray-300 leading-relaxed">
              Muscles grow during rest periods, not during workouts. Ensure you're getting adequate sleep (7-9 hours) and consuming enough protein (0.8-1 gram per pound of body weight) to support muscle recovery and growth.
            </p>

            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
              <p className="text-gray-300">
                Consistency trumps intensity for beginners. Focus on establishing a regular routine and mastering proper form before attempting to lift heavy weights.
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