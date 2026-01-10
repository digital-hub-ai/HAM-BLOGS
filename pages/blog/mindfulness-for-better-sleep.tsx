import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BlogPost = () => {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [showNextArticle, setShowNextArticle] = useState(false);

  useEffect(() => {
    const bookmarks = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('blogBookmarks') || '[]') : [];
    if (bookmarks.includes(router.asPath)) {
      setBookmarked(true);
    }
  }, [router.asPath]);

  const toggleBookmark = () => {
    if (typeof window === 'undefined') return;
    
    const bookmarks = JSON.parse(localStorage.getItem('blogBookmarks') || '[]');
    let updatedBookmarks;
    
    if (bookmarked) {
      updatedBookmarks = bookmarks.filter((bookmark: string) => bookmark !== router.asPath);
    } else {
      updatedBookmarks = [...bookmarks, router.asPath];
    }
    
    localStorage.setItem('blogBookmarks', JSON.stringify(updatedBookmarks));
    setBookmarked(!bookmarked);
  };

  const nextArticles = [
    { title: "Developing a Regular Mindfulness Habit", slug: "/blog/developing-regular-mindfulness-habit" },
    { title: "Breathing Techniques for Stress Relief", slug: "/blog/breathing-techniques-for-stress-relief" },
    { title: "Body Scan Meditation: A Complete Guide", slug: "/blog/body-scan-meditation-guide" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Mindfulness for Better Sleep - Sleep Improvement Techniques</title>
        <meta name="description" content="Techniques to quiet your mind and prepare for restful sleep using mindfulness practices." />
        <link rel="canonical" href="https://www.hamblogs.tech/blog/mindfulness-for-better-sleep" />
        <meta property="og:title" content="Mindfulness for Better Sleep" />
        <meta property="og:description" content="Techniques to quiet your mind and prepare for restful sleep using mindfulness practices." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.hamblogs.tech/blog/mindfulness-for-better-sleep" />
      </Head>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <button 
            onClick={() => window.history.back()} 
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6"
          >
            <span className="mr-2">←</span> Back to Articles
          </button>
          
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium mb-4">
                Mindfulness
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Mindfulness for Better Sleep
              </h1>
            </div>
            <button
              onClick={toggleBookmark}
              className={`p-3 rounded-full ${bookmarked ? 'bg-yellow-400 text-gray-900' : 'bg-gray-700 text-yellow-400'} hover:scale-105 transition-transform duration-200`}
              aria-label={bookmarked ? "Remove bookmark" : "Bookmark this article"}
            >
              {bookmarked ? '★' : '☆'}
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center text-gray-300">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              7 min read
            </div>
            <div className="flex items-center text-gray-300">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              January 2, 2026
            </div>
          </div>
        </header>

        <main className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="lead text-xl text-gray-200 mb-8">
              Sleep problems affect millions of people worldwide, with racing thoughts, anxiety, and stress being common culprits. Mindfulness practices offer gentle, effective ways to calm your mind and prepare your body for restful sleep without relying on medications or sleep aids.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">The Sleep-Mindfulness Connection</h2>
            <p>
              When you're struggling to sleep, your mind often races with thoughts about the day's events, tomorrow's responsibilities, or unresolved concerns. This mental chatter activates your sympathetic nervous system, making it difficult to transition into the parasympathetic state needed for sleep.
            </p>

            <p>
              Mindfulness practices help shift your attention away from thought narratives and into present-moment awareness. By focusing on immediate sensory experiences rather than mental content, you can calm the nervous system and create optimal conditions for sleep.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Preparation for Sleep Mindfulness</h2>
            <p>
              To maximize the effectiveness of mindfulness for sleep:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Create a consistent bedtime routine that includes mindfulness practice</li>
              <li>Dim lights at least an hour before bed to support melatonin production</li>
              <li>Keep electronic devices out of the bedroom or in airplane mode</li>
              <li>Keep the room cool, dark, and comfortable</li>
              <li>Set aside 10-20 minutes before sleep for your practice</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Mindful Breathing for Sleep</h2>
            <p>
              Conscious breathing is one of the simplest and most effective techniques for sleep preparation:
            </p>

            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Lie comfortably in bed with your spine straight but relaxed</li>
              <li>Close your eyes and take a few natural breaths</li>
              <li>Simply observe your breath without trying to change it</li>
              <li>Notice the sensation of air entering and leaving your nostrils</li>
              <li>Feel your chest and belly rise and fall with each breath</li>
              <li>When your mind wanders (and it will), gently return attention to your breath</li>
              <li>Continue for 5-15 minutes or until you feel drowsy</li>
            </ol>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Progressive Muscle Relaxation</h2>
            <p>
              This technique combines mindfulness with physical relaxation:
            </p>

            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Starting with your toes, tense the muscles for 3-5 seconds</li>
              <li>Release the tension and notice the sensation of relaxation</li>
              <li>Move systematically up through your body: feet, calves, thighs, hips, abdomen, chest, hands, arms, shoulders, neck, and face</li>
              <li>As you release tension in each area, focus on the contrast between tension and relaxation</li>
              <li>After completing the full body, take a few moments to feel your entire body in a state of relaxation</li>
            </ol>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Mindful Body Scanning</h2>
            <p>
              A modified version of body scanning works excellently for sleep:
            </p>

            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Lie comfortably in bed and close your eyes</li>
              <li>Bring attention to the top of your head, noticing any sensations</li>
              <li>Slowly move your attention down through your body: face, neck, shoulders, arms, hands, chest, abdomen, hips, legs, and feet</li>
              <li>Don't try to change anything – just observe what's there</li>
              <li>If you notice tension, breathe into that area and imagine it melting away</li>
              <li>Continue until you feel your whole body sinking into the bed</li>
            </ol>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Mindful Awareness of Mental Activity</h2>
            <p>
              When thoughts arise during sleep preparation, use this technique:
            </p>

            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Notice that your mind is active without judging it</li>
              <li>Imagine thoughts as clouds passing through the sky of your consciousness</li>
              <li>Don't engage with the content of thoughts – just observe them arising and passing</li>
              <li>Return attention to a physical sensation, like your breath or the feeling of your body against the bed</li>
              <li>If thoughts return, acknowledge them again and return to physical awareness</li>
            </ol>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Sleep Visualization</h2>
            <p>
              Gentle visualization can help redirect attention away from stimulating thoughts:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Imagine a peaceful scene, like a calm lake or gentle stream</li>
              <li>Picture yourself in a safe, comfortable place</li>
              <li>Visualize tension leaving your body like leaves floating down a river</li>
              <li>Imagine a soft, warm light surrounding your body and inducing relaxation</li>
              <li>Keep the imagery simple and soothing rather than elaborate or exciting</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Tips for Success</h2>
            <p>
              Here are strategies to make mindfulness practices more effective for sleep:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Don't try too hard – the effort to fall asleep can be counterproductive</li>
              <li>Approach the practice with gentle curiosity rather than forcing</li>
              <li>Remember that falling asleep during practice is perfectly fine</li>
              <li>If you're frustrated, take a break and try again another night</li>
              <li>Consistency matters more than perfection – even a few minutes can be beneficial</li>
              <li>Combine mindfulness with other sleep hygiene practices for best results</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Creating Your Nightly Ritual</h2>
            <p>
              Consider establishing a consistent mindfulness routine before sleep:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Start with gentle stretching or yoga poses</li>
              <li>Practice 5-10 minutes of mindful breathing or body scanning</li>
              <li>End with gratitude for the day's experiences</li>
              <li>Keep the lighting dim and atmosphere calm</li>
              <li>Gradually reduce stimulation as bedtime approaches</li>
            </ul>

            <p>
              Remember, mindfulness for sleep is not about achieving a blank mind but about developing a gentle, accepting relationship with whatever arises. With patience and practice, these techniques can help you transition more easily from wakefulness to restful sleep.
            </p>
          </div>
        </main>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">About Sleep and Mindfulness</h3>
          <p className="text-gray-300 mb-4">
            Research has shown that mindfulness practices can significantly improve sleep quality by reducing rumination, anxiety, and hyperarousal that often interfere with rest. Regular practice can help regulate sleep patterns and improve sleep efficiency.
          </p>
          <p className="text-gray-300">
            Mindfulness approaches to sleep are particularly valuable because they address the root causes of sleep difficulties without side effects.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
          <div className="space-y-4">
            <Link href="/blog/body-scan-meditation-guide" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-yellow-400">Body Scan Meditation: A Complete Guide</h4>
              <p className="text-gray-300">Step-by-step instructions for this powerful awareness technique.</p>
            </Link>
            <Link href="/blog/breathing-techniques-for-stress-relief" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-yellow-400">Breathing Techniques for Stress Relief</h4>
              <p className="text-gray-300">Essential breathing exercises to calm your mind and reduce anxiety.</p>
            </Link>
            <Link href="/blog/mindfulness-in-daily-activities" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-yellow-400">Mindfulness in Daily Activities</h4>
              <p className="text-gray-300">Integrate mindfulness into routine tasks like walking, cleaning, and working.</p>
            </Link>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => setShowNextArticle(!showNextArticle)}
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium mb-6"
          >
            Show Next Article
          </button>

          {showNextArticle && (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 inline-block">
              <h4 className="text-lg font-semibold text-white mb-3">Continue Reading</h4>
              <ul className="space-y-2">
                {nextArticles.map((article, index) => (
                  <li key={index}>
                    <Link href={article.slug} className="text-yellow-400 hover:text-yellow-300">
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;