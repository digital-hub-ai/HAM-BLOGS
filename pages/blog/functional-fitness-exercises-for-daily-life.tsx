import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function FunctionalFitnessExercisesForDailyLife() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Functional Fitness Exercises for Daily Life - HAM BLOGS</title>
        <meta name="description" content="Practical exercises that improve your ability to perform everyday activities" />
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
                Functional Fitness Exercises for Daily Life
              </h1>
              <div className="flex items-center text-gray-400">
                <span className="mr-6">January 5, 2026</span>
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
              Practical exercises that improve your ability to perform everyday activities. Functional fitness focuses on training your body to work efficiently in daily life, emphasizing movements that engage multiple muscle groups simultaneously.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">What is Functional Fitness?</h2>
            <p className="text-gray-300 leading-relaxed">
              Functional fitness exercises train your muscles to work together and prepare them for daily tasks by simulating common movements you might do at home, at work, or in sports. These exercises typically involve multiple joints and muscles groups working together in harmony.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Core Functional Movements</h2>
            <p className="text-gray-300 leading-relaxed">
              The foundation of functional fitness includes five primary movement patterns: squatting, lunging, pushing, pulling, and rotating. Mastering these movements will improve your ability to perform daily tasks like lifting groceries, climbing stairs, and reaching overhead.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Squat Variations</h2>
            <p className="text-gray-300 leading-relaxed">
              Squats are among the most functional exercises, mimicking the movement pattern used when sitting down and standing up. Start with bodyweight squats, focusing on keeping your chest up and knees tracking over your toes. Progress to goblet squats with a dumbbell, then to barbell back squats as you advance.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Lunges and Step-ups</h2>
            <p className="text-gray-300 leading-relaxed">
              These unilateral exercises help correct muscle imbalances and improve stability. Forward lunges, reverse lunges, and step-ups onto a sturdy surface all simulate movements you make when climbing stairs or stepping over obstacles.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Pushing and Pulling</h2>
            <p className="text-gray-300 leading-relaxed">
              Push-ups and their variations train your pushing strength, essential for opening doors or pushing objects. Pull-ups, rows, and similar exercises develop pulling strength needed for carrying bags or pulling items toward you. Include both vertical and horizontal pushing and pulling movements in your routine.
            </p>

            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
              <p className="text-gray-300">
                Functional fitness improves your quality of life by making everyday activities easier and reducing injury risk. Focus on movement patterns rather than isolated muscles for the best results.
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