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
    { title: "Mindful Eating Practices", slug: "/blog/mindful-eating-practices" },
    { title: "Body Scan Meditation: A Complete Guide", slug: "/blog/body-scan-meditation-guide" },
    { title: "Mindfulness in Daily Activities", slug: "/blog/mindfulness-in-daily-activities" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Breathing Techniques for Stress Relief - Mindfulness Practices</title>
        <meta name="description" content="Essential breathing exercises to calm your mind and reduce anxiety in stressful situations." />
        <link rel="canonical" href="https://www.hamblogs.tech/blog/breathing-techniques-for-stress-relief" />
        <meta property="og:title" content="Breathing Techniques for Stress Relief" />
        <meta property="og:description" content="Essential breathing exercises to calm your mind and reduce anxiety in stressful situations." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.hamblogs.tech/blog/breathing-techniques-for-stress-relief" />
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
                Breathing Techniques for Stress Relief
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
              January 7, 2026
            </div>
          </div>
        </header>

        <main className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="lead text-xl text-gray-200 mb-8">
              When stress takes over, your breathing often becomes shallow and rapid, which can exacerbate anxiety and tension. Learning specific breathing techniques can help you regain control, calm your nervous system, and restore a sense of peace.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">The Connection Between Breath and Stress</h2>
            <p>
              Our breath is directly connected to our autonomic nervous system. When we're stressed, our sympathetic nervous system activates the fight-or-flight response, causing rapid, shallow breathing. Conscious breathing techniques activate the parasympathetic nervous system, promoting relaxation and recovery.
            </p>

            <p>
              By intentionally changing your breathing pattern, you send a signal to your brain that you're safe and in control, which can quickly reduce stress hormones like cortisol and adrenaline.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Four-Seven-Eight Breathing Technique</h2>
            <p>
              This technique, developed by Dr. Andrew Weil, is particularly effective for managing anxiety and promoting sleep:
            </p>

            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Empty your lungs by exhaling completely through your mouth</li>
              <li>Closed your mouth and inhale quietly through your nose for 4 counts</li>
              <li>Hold your breath for 7 counts</li>
              <li>Exhale completely through your mouth for 8 counts, making a whoosh sound</li>
              <li>Repeat the cycle 3-4 times</li>
            </ol>

            <p>
              This technique helps slow your heart rate and induces a state of calm. It's especially helpful when you need immediate stress relief.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Box Breathing (Four-Square Breathing)</h2>
            <p>
              Box breathing is favored by athletes, military personnel, and performers for its effectiveness in high-pressure situations:
            </p>

            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Inhale through your nose for 4 counts</li>
              <li>Hold your breath for 4 counts</li>
              <li>Exhale through your mouth for 4 counts</li>
              <li>Hold empty for 4 counts</li>
              <li>Repeat the cycle for several minutes</li>
            </ol>

            <p>
              This technique creates a rhythm that helps focus your mind and oxygenates your body effectively. The equal timing of each phase promotes balance and centeredness.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Diaphragmatic Breathing</h2>
            <p>
              Also known as belly breathing, this technique engages your diaphragm properly, which is essential for full oxygen exchange and relaxation:
            </p>

            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Sit or lie down comfortably with one hand on your chest and one on your belly</li>
              <li>Slowly inhale through your nose for 3-4 seconds, focusing on expanding your belly (not your chest)</li>
              <li>Hold for 1-2 seconds</li>
              <li>Slowly exhale through pursed lips for 6-8 seconds, feeling your belly fall</li>
              <li>Repeat for 5-10 minutes</li>
            </ol>

            <p>
              This technique helps reduce stress by activating your relaxation response and improving oxygen delivery throughout your body.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">When to Use These Techniques</h2>
            <p>
              Different techniques work better in different situations:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Use Four-Seven-Eight before bed to calm racing thoughts</li>
              <li>Apply Box Breathing before presentations or challenging conversations</li>
              <li>Practice Diaphragmatic Breathing during overwhelming emotions</li>
              <li>Try any technique during breaks to reset and recharge</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Making Breathing Part of Your Routine</h2>
            <p>
              Like any skill, breathing techniques become more effective with practice. Consider incorporating them into your daily routine:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Start your morning with 5 minutes of conscious breathing</li>
              <li>Take breathing breaks between work tasks</li>
              <li>Use breathing techniques before meals</li>
              <li>End your day with calming breathwork to prepare for sleep</li>
            </ul>

            <p>
              With consistent practice, these techniques will become second nature, allowing you to quickly access a state of calm whenever stress arises.
            </p>
          </div>
        </main>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">About Stress Management</h3>
          <p className="text-gray-300 mb-4">
            Effective stress management involves multiple approaches, including breathing techniques, exercise, sleep hygiene, and cognitive strategies. Breathing is one of the fastest and most accessible tools for immediate stress relief.
          </p>
          <p className="text-gray-300">
            Regular practice of breathing techniques can help retrain your nervous system's response to stress, making you more resilient over time.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
          <div className="space-y-4">
            <Link href="/blog/introduction-to-mindfulness-meditation" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-yellow-400">Introduction to Mindfulness Meditation</h4>
              <p className="text-gray-300">Learn the fundamentals of mindfulness meditation and its transformative benefits.</p>
            </Link>
            <Link href="/blog/body-scan-meditation-guide" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-yellow-400">Body Scan Meditation: A Complete Guide</h4>
              <p className="text-gray-300">Step-by-step instructions for this powerful awareness technique.</p>
            </Link>
            <Link href="/blog/loving-kindness-meditation-practice" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-yellow-400">Loving-Kindness Meditation Practice</h4>
              <p className="text-gray-300">Cultivate compassion for yourself and others through this practice.</p>
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