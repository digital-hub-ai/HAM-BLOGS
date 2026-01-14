import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function IntroductionToMindfulnessMeditation() {
  const router = useRouter();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <Head>
        <title>Introduction to Mindfulness Meditation: Learn the Fundamentals | Ham Blogs</title>
        <meta name="description" content="Complete introduction to mindfulness meditation, covering fundamentals, techniques, and benefits for beginners." />
        <link rel="canonical" href="https://ham-blogs.vercel.app/blog/introduction-to-mindfulness-meditation" />
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
            <Link href="/category/wellness/meditation" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">Meditation</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">Introduction to Mindfulness Meditation</span>
          </nav>
          
          <div className="flex justify-between items-start">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Introduction to Mindfulness Meditation: Learn the Fundamentals</h1>
            
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
            <span className="mr-4">📅 January 10, 2026</span>
            <span className="mr-4">⏱️ 6 min read</span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Wellness</span>
            <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm ml-2">Meditation</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm ml-2">Beginner</span>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <img 
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Person practicing mindfulness meditation"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-600 italic">Starting your mindfulness meditation journey</p>
        </div>

        <div className="prose prose-lg prose-indigo max-w-none">
          <p className="text-xl text-gray-700 mb-6">
            Mindfulness meditation has gained significant popularity in recent years as people seek 
            effective ways to manage stress, improve focus, and enhance overall well-being. Rooted in 
            ancient contemplative traditions, mindfulness meditation has been scientifically validated 
            for its numerous benefits. If you're new to meditation, this guide will introduce you to 
            the fundamentals and help you establish a sustainable practice.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What is Mindfulness Meditation?</h2>
          <p className="text-gray-700 mb-6">
            Mindfulness meditation is the practice of paying attention to the present moment without 
            judgment. It involves observing your thoughts, feelings, bodily sensations, and surrounding 
            environment with a gentle, accepting attitude. Rather than getting caught up in thoughts 
            about the past or future, mindfulness meditation trains you to anchor your attention in 
            the here and now.
          </p>

          <p className="text-gray-700 mb-6">
            The essence of mindfulness meditation is not to stop thinking or empty your mind, but 
            rather to notice when your mind has wandered and gently return your attention to the 
            present moment. This practice cultivates awareness and acceptance of whatever arises in 
            your experience.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Core Principles of Mindfulness</h2>
          <p className="text-gray-700 mb-4">
            Understanding these fundamental principles will help you develop a deeper appreciation 
            for mindfulness meditation:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700"><strong>Present moment awareness:</strong> Focusing on what's happening right now, rather than dwelling on the past or anticipating the future.</li>
            <li className="text-gray-700"><strong>Non-judgmental observation:</strong> Noticing thoughts and feelings without labeling them as good or bad.</li>
            <li className="text-gray-700"><strong>Acceptance:</strong> Acknowledging experiences as they are, without trying to change them immediately.</li>
            <li className="text-gray-700"><strong>Beginner's mind:</strong> Approaching each moment with fresh curiosity, as if experiencing it for the first time.</li>
            <li className="text-gray-700"><strong>Patience:</strong> Understanding that developing mindfulness takes time and practice.</li>
            <li className="text-gray-700"><strong>Self-compassion:</strong> Being kind to yourself when your mind wanders or when you find the practice challenging.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Basic Techniques for Beginners</h2>
          <p className="text-gray-700 mb-4">
            Start with these foundational techniques to build your mindfulness meditation practice:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Breath Awareness</h3>
          <p className="text-gray-700 mb-4">
            This is the most common starting point for mindfulness meditation. Simply focus on 
            your natural breathing pattern. Notice the sensation of air entering and leaving your 
            nostrils, or the rise and fall of your chest or abdomen. When you notice your mind 
            has wandered (which is completely normal), gently return your attention to your breath.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Body Awareness</h3>
          <p className="text-gray-700 mb-4">
            Bring attention to physical sensations in your body. Start with a simple awareness of 
            the points of contact between your body and the chair or cushion you're sitting on. 
            Notice any areas of tension, warmth, coolness, or other sensations without trying to 
            change them.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Thought Observation</h3>
          <p className="text-gray-700 mb-4">
            Once you're comfortable with breath awareness, you can begin to observe your thoughts 
            as they arise. Instead of engaging with them, try to see them as passing clouds in 
            the sky of your mind. Acknowledge them and let them go, returning to your breath.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Getting Started: A Simple Practice</h2>
          <p className="text-gray-700 mb-4">
            Here's a step-by-step guide for your first mindfulness meditation session:
          </p>

          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li className="text-gray-700"><strong>Find a comfortable position:</strong> Sit upright in a chair with your feet flat on the floor, or sit cross-legged on a cushion. Keep your back straight but not rigid.</li>
            <li className="text-gray-700"><strong>Set a timer:</strong> Start with just 5-10 minutes. This removes the distraction of watching the clock.</li>
            <li className="text-gray-700"><strong>Close your eyes or soften your gaze:</strong> Choose what feels more comfortable for you.</li>
            <li className="text-gray-700"><strong>Focus on your breath:</strong> Begin by taking a few deep breaths, then allow your breathing to return to its natural rhythm.</li>
            <li className="text-gray-700"><strong>Notice your breath:</strong> Pay attention to the physical sensations of breathing. If your mind wanders, gently bring it back to the breath.</li>
            <li className="text-gray-700"><strong>End gently:</strong> When your timer goes off, take a moment before opening your eyes. Notice how you feel.</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Challenges and How to Address Them</h2>
          <p className="text-gray-700 mb-4">
            As a beginner, you'll likely encounter these common challenges:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">My mind keeps wandering</h3>
          <p className="text-gray-700 mb-4">
            This is completely normal and expected. The practice isn't about stopping thoughts 
            but noticing when your attention has wandered and gently returning to your focus point. 
            Every time you bring your attention back, you're strengthening your mindfulness muscle.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">I feel restless or uncomfortable</h3>
          <p className="text-gray-700 mb-4">
            Physical discomfort is common when sitting still. Make small adjustments as needed, 
            but try to observe the sensation without immediately reacting. Sometimes we're not 
            aware of how much tension we carry until we sit quietly.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">I don't have time</h3>
          <p className="text-gray-700 mb-4">
            Even 5 minutes of daily practice can be beneficial. You don't need to meditate for 
            long periods to experience benefits. Consistency matters more than duration.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Benefits of Regular Practice</h2>
          <p className="text-gray-700 mb-4">
            Research has shown that regular mindfulness meditation practice offers numerous benefits:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700"><strong>Reduced stress and anxiety:</strong> Mindfulness helps break the cycle of worry and rumination.</li>
            <li className="text-gray-700"><strong>Improved focus and concentration:</strong> Regular practice strengthens attention and cognitive function.</li>
            <li className="text-gray-700"><strong>Enhanced emotional regulation:</strong> Greater awareness of emotions allows for more thoughtful responses.</li>
            <li className="text-gray-700"><strong>Better sleep:</strong> Mindfulness can help calm the mind before bedtime.</li>
            <li className="text-gray-700"><strong>Increased self-awareness:</strong> Deeper understanding of your thought patterns and habits.</li>
            <li className="text-gray-700"><strong>Greater compassion:</strong> Mindfulness practice often leads to increased empathy and kindness toward yourself and others.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Building a Sustainable Practice</h2>
          <p className="text-gray-700 mb-4">
            To develop a lasting mindfulness meditation practice:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700">Start small and be consistent rather than aiming for long sessions</li>
            <li className="text-gray-700">Choose a time of day that works for your schedule</li>
            <li className="text-gray-700">Create a dedicated space for practice, even if it's just a corner of a room</li>
            <li className="text-gray-700">Use guided meditations initially to stay on track</li>
            <li className="text-gray-700">Be patient with yourself and approach the practice with curiosity rather than criticism</li>
            <li className="text-gray-700">Remember that some days will be easier than others, and that's perfectly normal</li>
          </ul>

          <p className="text-gray-700 mt-8">
            Remember, mindfulness meditation is a skill that develops with practice. There's no 
            perfect way to do it, and every session – regardless of how "successful" it feels – 
            is beneficial. The key is to approach your practice with patience, kindness, and 
            consistency. Over time, you may find that the benefits of mindfulness extend beyond 
            your meditation sessions into all areas of your daily life.
          </p>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="mb-4 sm:mb-0">
              <h3 className="font-semibold text-gray-900 mb-2">Categories:</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Wellness</span>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Meditation</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Beginner</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Mindfulness</span>
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