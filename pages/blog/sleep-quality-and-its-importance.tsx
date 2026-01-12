import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SleepQualityAndItsImportance() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Sleep Quality and Its Importance - HAM BLOGS</title>
        <meta name="description" content="How quality sleep impacts mental and physical health" />
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
                Sleep Quality and Its Importance
              </h1>
              <div className="flex items-center text-gray-400">
                <span className="mr-6">January 6, 2026</span>
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
              How quality sleep impacts mental and physical health. Sleep is a fundamental biological need that affects nearly every aspect of our health and well-being. During sleep, the brain consolidates memories, processes emotions, and clears waste products. The body repairs tissues, builds bone and muscle, and strengthens the immune system. Despite its importance, many people don't prioritize sleep or understand how to optimize it.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Stages of Sleep</h2>
            <p className="text-gray-300 leading-relaxed">
              Sleep consists of several stages that cycle throughout the night. Light sleep (N1 and N2) makes up the majority of our sleep and is important for energy restoration. Deep sleep (N3) is crucial for physical recovery, immune function, and memory consolidation. REM sleep, when most dreaming occurs, is vital for emotional regulation, memory processing, and cognitive function. Each stage serves different functions, and we need adequate amounts of each for optimal health.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Sleep and Mental Health</h2>
            <p className="text-gray-300 leading-relaxed">
              There's a strong bidirectional relationship between sleep and mental health. Poor sleep can contribute to anxiety, depression, irritability, and difficulty concentrating. Conversely, mental health conditions often disrupt sleep patterns. During sleep, especially REM sleep, the brain processes emotional experiences from the day. Inadequate sleep impairs emotional regulation and increases reactivity to stress.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Sleep Hygiene Best Practices</h2>
            <p className="text-gray-300 leading-relaxed">
              Maintain a consistent sleep schedule, even on weekends. Create a relaxing bedtime routine to signal to your body that it's time to sleep. Keep your bedroom cool, dark, and quiet. Limit exposure to screens at least an hour before bedtime, as blue light can suppress melatonin production. Avoid large meals, caffeine, and alcohol close to bedtime. Invest in a comfortable mattress and pillows.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Common Sleep Disruptors</h2>
            <p className="text-gray-300 leading-relaxed">
              Stress and worry are among the most common causes of sleep problems. Physical discomfort, certain medications, and medical conditions can also interfere with sleep. Environmental factors like noise, light, or temperature extremes can disrupt sleep. Stimulants like caffeine have a long half-life and can affect sleep even when consumed hours before bedtime. Alcohol may initially make you drowsy but disrupts sleep later in the night.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Improving Sleep Quality</h2>
            <p className="text-gray-300 leading-relaxed">
              If you're having trouble sleeping, try relaxation techniques like progressive muscle relaxation or meditation. Limit time in bed to actual sleep time to strengthen the association between bed and sleep. If you can't fall asleep within 20 minutes, get up and do a quiet activity until you feel sleepy. Regular exercise can improve sleep quality, but avoid vigorous exercise close to bedtime. Consider keeping a sleep diary to identify patterns and potential issues.
            </p>

            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
              <p className="text-gray-300">
                Quality sleep is essential for mental and physical health. Prioritizing good sleep hygiene and addressing sleep issues promptly can significantly improve overall well-being, cognitive function, and emotional regulation.
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