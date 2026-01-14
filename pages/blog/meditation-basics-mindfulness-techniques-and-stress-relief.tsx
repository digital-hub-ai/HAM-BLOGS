import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function MeditationBasics() {
  const router = useRouter();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // Here you would typically add logic to save the bookmark to a database
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Head>
        <title>Meditation Basics: Mindfulness Techniques and Stress Relief | Ham Blogs</title>
        <meta name="description" content="Learn essential meditation basics, mindfulness techniques, and stress relief practices to improve your mental wellness and daily life." />
        <link rel="canonical" href="https://ham-blogs.vercel.app/blog/meditation-basics-mindfulness-techniques-and-stress-relief" />
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
            <span className="text-gray-700">Meditation Basics</span>
          </nav>
          
          <div className="flex justify-between items-start">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Meditation Basics: Mindfulness Techniques and Stress Relief</h1>
            
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
            <span className="mr-4">📅 March 15, 2026</span>
            <span className="mr-4">⏱️ 12 min read</span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Wellness</span>
            <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm ml-2">Meditation</span>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <img 
            src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Person practicing meditation in peaceful setting"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-600 italic">Finding peace through meditation practice</p>
        </div>

        <div className="prose prose-lg prose-indigo max-w-none">
          <p className="text-xl text-gray-700 mb-6">
            In today's fast-paced world, finding moments of peace and tranquility can seem nearly impossible. 
            Meditation offers a pathway to inner calm, improved focus, and reduced stress. Whether you're 
            completely new to meditation or looking to deepen your practice, understanding the basics is 
            crucial for establishing a sustainable routine.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What is Meditation?</h2>
          <p className="text-gray-700 mb-6">
            Meditation is a practice where an individual uses a technique – such as mindfulness, focusing 
            the mind on a particular object, thought, or activity – to train attention and awareness, and 
            achieve a mentally clear and emotionally calm and stable state. While often associated with 
            spiritual traditions, meditation has gained widespread acceptance in modern psychology and 
            wellness practices for its proven benefits.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Types of Meditation Practices</h2>
          <p className="text-gray-700 mb-4">
            There are numerous meditation techniques, each with its own approach and benefits. Here are 
            some of the most accessible for beginners:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Mindfulness Meditation</h3>
          <p className="text-gray-700 mb-4">
            Perhaps the most popular form, mindfulness meditation involves paying attention to thoughts 
            as they pass through your mind without judging them as good or bad. Instead of dwelling on 
            the content of thoughts, you simply observe them and let them pass.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Focused Breathing</h3>
          <p className="text-gray-700 mb-4">
            This technique involves concentrating on your breath as it goes in and out, and counting 
            your breaths to maintain focus. You can count breaths from one to four, then start again. 
            This helps anchor your attention to the present moment.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Body Scan Meditation</h3>
          <p className="text-gray-700 mb-4">
            Also known as progressive relaxation, this practice involves focusing on different parts 
            of your body sequentially, noticing any sensations, tension, or discomfort. It promotes 
            awareness of physical sensations and can help release stored tension.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Getting Started with Your Practice</h2>
          <p className="text-gray-700 mb-4">
            Starting a meditation practice doesn't require any special equipment or extensive training. 
            Here's a simple guide to begin:
          </p>

          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li className="text-gray-700"><strong>Choose a Time:</strong> Early morning or evening often works best, but pick any time that fits your schedule consistently.</li>
            <li className="text-gray-700"><strong>Find a Quiet Space:</strong> Sit comfortably in a place where you won't be disturbed for the duration of your practice.</li>
            <li className="text-gray-700"><strong>Set a Timer:</strong> Start with just 5-10 minutes, gradually increasing the duration as you become more comfortable.</li>
            <li className="text-gray-700"><strong>Adopt a Comfortable Posture:</strong> Sit with your back straight but relaxed, hands resting on your knees or lap.</li>
            <li className="text-gray-700"><strong>Focus on Your Breath:</strong> Close your eyes and bring attention to your breathing, noticing the sensation of air entering and leaving your nostrils.</li>
            <li className="text-gray-700"><strong>Notice When Your Mind Wanders:</strong> Don't judge yourself; gently redirect your attention back to your breath.</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Benefits of Regular Meditation Practice</h2>
          <p className="text-gray-700 mb-4">
            Research has shown that regular meditation practice offers numerous benefits for both mental 
            and physical health:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700"><strong>Reduced Stress and Anxiety:</strong> Meditation decreases the production of stress hormones like cortisol.</li>
            <li className="text-gray-700"><strong>Improved Emotional Health:</strong> Regular practice can lead to a more positive outlook on life.</li>
            <li className="text-gray-700"><strong>Enhanced Self-Awareness:</strong> Helps develop a stronger understanding of yourself and your thought patterns.</li>
            <li className="text-gray-700"><strong>Better Attention Span:</strong> Improves the ability to sustain attention and focus.</li>
            <li className="text-gray-700"><strong>Increased Kindness:</strong> Some forms of meditation can increase positive feelings toward others.</li>
            <li className="text-gray-700"><strong>Improved Sleep:</strong> Can help you fall asleep faster and sleep more soundly.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Overcoming Common Challenges</h2>
          <p className="text-gray-700 mb-4">
            It's normal to encounter obstacles when starting a meditation practice. Here are some 
            common challenges and solutions:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Restlessness and Discomfort</h3>
          <p className="text-gray-700 mb-4">
            Physical discomfort is common, especially when sitting still. Adjust your posture as 
            needed, use cushions or a chair, and remember that comfort improves with practice.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Difficulty Concentrating</h3>
          <p className="text-gray-700 mb-4">
            A wandering mind is natural, not a failure. The practice lies in noticing when your 
            attention drifts and gently returning it to your focal point.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Inconsistent Practice</h3>
          <p className="text-gray-700 mb-4">
            Consistency is more important than duration. Try to meditate at the same time each day, 
            even if it's just for a few minutes. Using a meditation app or joining a group can help 
            maintain accountability.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Advanced Techniques for Experienced Practitioners</h2>
          <p className="text-gray-700 mb-4">
            Once you've established a regular practice, you might explore more advanced techniques:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700"><strong>Loving-Kindness Meditation:</strong> Focuses on developing unconditional love and compassion for yourself and others.</li>
            <li className="text-gray-700"><strong>Walking Meditation:</strong> Brings mindfulness to the act of walking, connecting movement with breath.</li>
            <li className="text-gray-700"><strong>Zen Meditation (Zazen):</strong> A traditional Buddhist practice emphasizing seated meditation and observing thoughts without attachment.</li>
            <li className="text-gray-700"><strong>Transcendental Meditation:</strong> Uses a mantra to settle the mind into a state of restful alertness.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Creating a Meditation Space</h2>
          <p className="text-gray-700 mb-4">
            Having a dedicated space for meditation can significantly enhance your practice. Consider:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700">Choose a quiet corner of your home where you won't be interrupted</li>
            <li className="text-gray-700">Keep the space clean and uncluttered to promote mental clarity</li>
            <li className="text-gray-700">Add elements that promote calmness, such as candles, plants, or soft lighting</li>
            <li className="text-gray-700">Consider using a meditation cushion or chair designed for comfortable sitting</li>
            <li className="text-gray-700">Keep your meditation supplies (cushion, blanket, etc.) in this designated space</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Integrating Mindfulness into Daily Life</h2>
          <p className="text-gray-700 mb-4">
            Meditation doesn't have to be confined to formal sitting practice. Mindfulness can be woven 
            into everyday activities:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700"><strong>Mindful Eating:</strong> Pay attention to the taste, texture, and smell of your food without distractions.</li>
            <li className="text-gray-700"><strong>Mindful Walking:</strong> Notice the sensation of your feet touching the ground and the rhythm of your movement.</li>
            <li className="text-gray-700"><strong>Mindful Listening:</strong> Give your full attention to others when they speak, without planning your response.</li>
            <li className="text-gray-700"><strong>Mindful Breathing:</strong> Take conscious breaths throughout the day to center yourself.</li>
          </ul>

          <p className="text-gray-700 mt-8">
            Remember, meditation is a journey rather than a destination. There's no "perfect" way to 
            meditate, and every session – regardless of how distracted you feel – is beneficial. The 
            key is to approach your practice with patience, kindness, and curiosity. With time and 
            consistency, you'll likely notice the positive effects extending beyond your meditation 
            sessions into all areas of your life.
          </p>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="mb-4 sm:mb-0">
              <h3 className="font-semibold text-gray-900 mb-2">Categories:</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Wellness</span>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Meditation</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Mindfulness</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Stress Relief</span>
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