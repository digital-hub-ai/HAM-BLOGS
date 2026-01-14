import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function YogaForBetterSleepAndRestoration() {
  const router = useRouter();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <Head>
        <title>Yoga for Better Sleep and Restoration: Evening Practices | Ham Blogs</title>
        <meta name="description" content="Discover yoga poses and techniques specifically designed to prepare your body for deep, restorative sleep." />
        <link rel="canonical" href="https://ham-blogs.vercel.app/blog/yoga-for-better-sleep-and-restoration" />
      </Head>

      <article className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-10">
          <nav className="mb-6">
            <Link href="/" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/blog" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">Blog</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/category/wellness" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">Wellness</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/category/wellness/yoga" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">Yoga</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">Yoga for Better Sleep</span>
          </nav>
          
          <div className="flex justify-between items-start">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Yoga for Better Sleep and Restoration: Evening Practices</h1>
            
            <button 
              onClick={toggleBookmark}
              className={`p-2 rounded-full ${isBookmarked ? 'text-yellow-500' : 'text-gray-400'} hover:bg-gray-100 transition-colors duration-200`}
              aria-label={isBookmarked ? "Remove bookmark" : "Bookmark this article"}
            >
              {isBookmarked ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg>
              )}
            </button>
          </div>
          
          <div className="flex flex-wrap items-center text-gray-600 mb-6">
            <span className="mr-4">📅 February 4, 2026</span>
            <span className="mr-4">⏱️ 10 min read</span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Wellness</span>
            <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm ml-2">Yoga</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm ml-2">Sleep</span>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Person practicing gentle yoga poses before bed"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-600 italic">Gentle yoga poses to prepare your body for restful sleep</p>
        </div>

        <div className="prose prose-lg prose-indigo max-w-none">
          <p className="text-xl text-gray-700 mb-6">
            Quality sleep is essential for physical recovery, mental clarity, and overall health. 
            Yet millions of people struggle with sleep issues, whether it's difficulty falling 
            asleep, staying asleep, or achieving restorative sleep. While there are many approaches 
            to improving sleep, yoga offers a natural, gentle solution that prepares both body 
            and mind for deep rest. Evening yoga practices focus on calming the nervous system, 
            releasing physical tension, and creating a peaceful transition from the day's activities 
            to the restorative state of sleep.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How Yoga Improves Sleep Quality</h2>
          <p className="text-gray-700 mb-6">
            Yoga promotes better sleep through several interconnected mechanisms:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700"><strong>Activates the parasympathetic nervous system:</strong> Gentle yoga poses and breathing techniques trigger the body's rest-and-digest response, counteracting the day's stress.</li>
            <li className="text-gray-700"><strong>Reduces cortisol levels:</strong> Evening practice helps lower stress hormones that can interfere with sleep.</li>
            <li className="text-gray-700"><strong>Decreases anxiety and racing thoughts:</strong> Mindful movement and breathing help calm the mind and reduce pre-sleep worry.</li>
            <li className="text-gray-700"><strong>Relieves physical tension:</strong> Gentle stretching releases muscle tension accumulated during the day.</li>
            <li className="text-gray-700"><strong>Regulates circadian rhythms:</strong> Consistent evening practice helps establish a regular sleep schedule.</li>
            <li className="text-gray-700"><strong>Increases melatonin production:</strong> Certain yoga practices may naturally boost the production of sleep hormones.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Timing Your Evening Practice</h2>
          <p className="text-gray-700 mb-4">
            For optimal sleep benefits, consider these timing guidelines:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700"><strong>2-3 hours before bed:</strong> Allows your body temperature to drop naturally, signaling sleep time.</li>
            <li className="text-gray-700"><strong>Consistent schedule:</strong> Practice at the same time each evening to establish a routine.</li>
            <li className="text-gray-700"><strong>Duration:</strong> 15-30 minutes is sufficient for most people.</li>
            <li className="text-gray-700"><strong>Gradual transition:</strong> Allow 30 minutes after practice before sleep for full relaxation.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Restorative Yoga Poses for Sleep</h2>
          <p className="text-gray-700 mb-4">
            The following poses are specifically chosen for their sleep-promoting benefits:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Legs-Up-The-Wall Pose (Viparita Karani)</h3>
          <p className="text-gray-700 mb-4">
            This gentle inversion helps calm the nervous system and reduce stress hormones.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li className="text-gray-700">Sit sideways next to a wall</li>
            <li className="text-gray-700">Swing your legs up the wall as you lie back</li>
            <li className="text-gray-700">Adjust so your sitting bones are close to the wall</li>
            <li className="text-gray-700">Place a pillow under your hips for support if needed</li>
            <li className="text-gray-700">Keep your arms in a comfortable position, palms facing up</li>
            <li className="text-gray-700">Stay for 5-15 minutes, breathing slowly and deeply</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Child's Pose (Balasana)</h3>
          <p className="text-gray-700 mb-4">
            This nurturing pose provides a sense of safety and helps release tension in the back.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li className="text-gray-700">Kneel on your mat with knees wide apart</li>
            <li className="text-gray-700">Sit back on your heels or place a pillow between your thighs and calves</li>
            <li className="text-gray-700">Fold forward, extending your arms in front or alongside your body</li>
            <li className="text-gray-700">Rest your forehead on the mat or a pillow</li>
            <li className="text-gray-700">Breathe deeply and stay for 1-5 minutes</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Reclined Butterfly (Supta Baddha Konasana)</h3>
          <p className="text-gray-700 mb-4">
            This deeply relaxing pose opens the hips and chest while calming the mind.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li className="text-gray-700">Lie on your back and bring the soles of your feet together</li>
            <li className="text-gray-700">Let your knees fall open to the sides</li>
            <li className="text-gray-700">Place pillows or blocks under your knees for support</li>
            <li className="text-gray-700">Extend your arms out to the sides, palms facing up</li>
            <li className="text-gray-700">Stay for 5-10 minutes, focusing on deep, even breathing</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Supported Bridge Pose (Setu Bandha Sarvangasana)</h3>
          <p className="text-gray-700 mb-4">
            This gentle backbend opens the chest and helps release tension in the lower back.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li className="text-gray-700">Lie on your back with knees bent and feet flat on the floor</li>
            <li className="text-gray-700">Place feet hip-width apart, close to your sitting bones</li>
            <li className="text-gray-700">Press into your feet to lift your hips, creating a straight line from knees to shoulders</li>
            <li className="text-gray-700">Place a yoga block or pillow under your sacrum for support (optional)</li>
            <li className="text-gray-700">Hold for 1-3 minutes, breathing deeply</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5. Supine Spinal Twist (Supta Matsyendrasana)</h3>
          <p className="text-gray-700 mb-4">
            This gentle twist releases tension in the spine and massages the internal organs.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li className="text-gray-700">Lie on your back with arms extended out to the sides</li>
            <li className="text-gray-700">Bend your right knee and draw it across your body to the left</li>
            <li className="text-gray-700">Look to the right while your knee falls to the left</li>
            <li className="text-gray-700">Stay for 1-2 minutes, then repeat on the other side</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6. Corpse Pose (Savasana)</h3>
          <p className="text-gray-700 mb-4">
            The ultimate relaxation pose that allows your body to integrate the benefits of your practice.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li className="text-gray-700">Lie flat on your back with legs extended</li>
            <li className="text-gray-700">Let your arms rest at your sides, palms facing up</li>
            <li className="text-gray-700">Close your eyes and allow your whole body to relax completely</li>
            <li className="text-gray-700">Focus on your breath, letting thoughts come and go without attachment</li>
            <li className="text-gray-700">Remain for 5-10 minutes before transitioning to sleep</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Sleep-Promoting Breathing Techniques</h2>
          <p className="text-gray-700 mb-4">
            Combine these breathing practices with the poses above for enhanced relaxation:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4-7-8 Breathing</h3>
          <p className="text-gray-700 mb-4">
            This technique is particularly effective for calming the mind before sleep.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li className="text-gray-700">Inhale through your nose for 4 counts</li>
            <li className="text-gray-700">Hold your breath for 7 counts</li>
            <li className="text-gray-700">Exhale through your mouth for 8 counts</li>
            <li className="text-gray-700">Repeat for 3-4 cycles</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Brahmari (Bee Breath)</h3>
          <p className="text-gray-700 mb-4">
            This humming breath technique has a calming effect on the nervous system.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li className="text-gray-700">Sit or lie down comfortably</li>
            <li className="text-gray-700">Close your eyes and take a deep breath in</li>
            <li className="text-gray-700">As you exhale, make a low humming sound like a bee</li>
            <li className="text-gray-700">Repeat for 5-10 breaths</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Creating Your Evening Yoga Routine</h2>
          <p className="text-gray-700 mb-4">
            Design your own sleep-promoting sequence with these guidelines:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700"><strong>Start with centering:</strong> Begin with 2-3 minutes of conscious breathing to transition from your day</li>
            <li className="text-gray-700"><strong>Progressive relaxation:</strong> Move through 4-6 poses, holding each for 1-3 minutes</li>
            <li className="text-gray-700"><strong>Incorporate breathing:</strong> Add 2-3 minutes of sleep-promoting breathing techniques</li>
            <li className="text-gray-700"><strong>Finish with Savasana:</strong> End with 5-10 minutes of Corpse Pose for integration</li>
            <li className="text-gray-700"><strong>Dim the lights:</strong> Lower lighting to signal to your brain that it's time to wind down</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Environment and Setup</h2>
          <p className="text-gray-700 mb-4">
            Prepare your space for optimal relaxation:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700"><strong>Soft lighting:</strong> Use dim lights or candles instead of bright overhead lights</li>
            <li className="text-gray-700"><strong>Comfortable temperature:</strong> Keep your space cool to facilitate the natural drop in body temperature</li>
            <li className="text-gray-700"><strong>Supportive props:</strong> Have pillows, blankets, and blocks available for comfort</li>
            <li className="text-gray-700"><strong>Minimal distractions:</strong> Turn off electronic devices or put them in airplane mode</li>
            <li className="text-gray-700"><strong>Calming scents:</strong> Consider using lavender or other relaxing essential oils</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Tips for Success</h2>
          <p className="text-gray-700 mb-4">
            To make evening yoga a sustainable part of your sleep routine:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700">Start with just 10-15 minutes and gradually increase duration</li>
            <li className="text-gray-700">Practice at the same time each evening to establish a routine</li>
            <li className="text-gray-700">Choose poses that feel good to your body on any given evening</li>
            <li className="text-gray-700">Be consistent rather than perfect - even 5 minutes can be beneficial</li>
            <li className="text-gray-700">Pay attention to how different poses affect your sleep quality</li>
            <li className="text-gray-700">Keep a simple journal to track which poses work best for you</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Mistakes to Avoid</h2>
          <p className="text-gray-700 mb-4">
            Steer clear of these pitfalls that can disrupt your sleep:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700"><strong>Too vigorous:</strong> Avoid intense or heating practices that might energize rather than relax</li>
            <li className="text-gray-700"><strong>Too late:</strong> Don't practice right before bed, as it may be too stimulating</li>
            <li className="text-gray-700"><strong>Overdoing it:</strong> Gentle is more effective than intense for sleep preparation</li>
            <li className="text-gray-700"><strong>Using screens:</strong> Avoid electronic devices during your practice</li>
          </ul>

          <p className="text-gray-700 mt-8">
            Remember, the goal of evening yoga is to prepare your body and mind for rest, not to 
            provide a workout. The poses should feel nourishing and calming rather than challenging 
            or invigorating. With consistent practice, you may notice that your sleep becomes 
            deeper and more restorative, and you wake up feeling more refreshed. Listen to your 
            body each evening and adjust your practice accordingly – some days you might need 
            more gentle stretches, other days you might benefit from longer holds in restorative poses.
          </p>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="mb-4 sm:mb-0">
              <h3 className="font-semibold text-gray-900 mb-2">Categories:</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Wellness</span>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Yoga</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Sleep</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Restoration</span>
              </div>
            </div>
            <button 
              onClick={() => router.back()}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              Back to Previous Page
            </button>
          </div>
        </footer>
      </article>
    </div>
  );
}