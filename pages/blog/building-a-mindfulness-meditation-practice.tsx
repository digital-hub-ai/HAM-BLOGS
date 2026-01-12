import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function BuildingAMindfulnessMeditationPractice() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Building a Mindfulness Meditation Practice - HAM BLOGS</title>
        <meta name="description" content="Getting started with meditation and mindfulness for mental wellness" />
      </Head>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8"
        >
          <span className="mr-2">←</span> Back to Mental Health
        </button>

        <article className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm mb-4">
                Mental Health
              </span>
              <h1 className="text-4xl font-bold text-white mb-4">
                Building a Mindfulness Meditation Practice
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
              Getting started with meditation and mindfulness for mental wellness. Mindfulness meditation is a practice of focusing attention on the present moment without judgment. Research shows that regular mindfulness practice can reduce anxiety, depression, and stress while improving focus, emotional regulation, and overall well-being.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Understanding Mindfulness</h2>
            <p className="text-gray-300 leading-relaxed">
              Mindfulness is the practice of paying attention to the present moment with openness and acceptance. Rather than getting caught up in thoughts about the past or future, mindfulness involves observing your current experience without trying to change it. This includes awareness of thoughts, feelings, bodily sensations, and the surrounding environment.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Getting Started with Meditation</h2>
            <p className="text-gray-300 leading-relaxed">
              Begin with just 5-10 minutes per day. Find a quiet, comfortable place to sit. Close your eyes or focus on a spot in front of you. Focus on your breath, noticing the sensation of air entering and leaving your nostrils or the rise and fall of your chest. When your mind wanders (and it will), gently bring your attention back to your breath without judgment.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Common Challenges and Solutions</h2>
            <p className="text-gray-300 leading-relaxed">
              It's normal for your mind to wander during meditation. The practice isn't about stopping thoughts but noticing when your attention has wandered and returning to your focus point. If you're restless, try a walking meditation. If you're sleepy, meditate with your eyes partially open or choose a more alert time of day. Consistency is more important than duration – a short daily practice is better than occasional long sessions.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Types of Mindfulness Practices</h2>
            <p className="text-gray-300 leading-relaxed">
              Body scan meditation involves systematically focusing on different parts of your body. Loving-kindness meditation cultivates feelings of compassion for yourself and others. Walking meditation brings mindfulness to the experience of walking. Mindful eating involves paying full attention to the experience of eating. Choose practices that resonate with you and fit your lifestyle.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Integrating Mindfulness into Daily Life</h2>
            <p className="text-gray-300 leading-relaxed">
              Mindfulness doesn't have to be limited to formal meditation. Practice mindful moments throughout the day – when washing dishes, walking, or having conversations. Take a few conscious breaths before starting a new activity. Notice the sensations of your feet touching the ground as you walk. These small practices help build mindfulness skills that enhance your formal meditation practice.
            </p>

            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
              <p className="text-gray-300">
                Building a mindfulness meditation practice is a gradual process that requires patience and consistency. Start small, be compassionate with yourself, and remember that every moment of awareness is beneficial, regardless of how long your formal practice is.
              </p>
            </div>
          </div>
        </article>

        <div className="mt-8 flex justify-between items-center">
          <Link href="/category/health/mental" className="text-yellow-400 hover:text-yellow-300">
            ← More Mental Health Articles
          </Link>
        </div>
      </div>
    </div>
  );
}