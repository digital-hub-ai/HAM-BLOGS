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
    { title: "Breathing Techniques for Stress Relief", slug: "/blog/breathing-techniques-for-stress-relief" },
    { title: "Mindful Eating Practices", slug: "/blog/mindful-eating-practices" },
    { title: "Body Scan Meditation: A Complete Guide", slug: "/blog/body-scan-meditation-guide" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Introduction to Mindfulness Meditation - Mindfulness Practices</title>
        <meta name="description" content="Learn the fundamentals of mindfulness meditation and its transformative benefits for mental health and well-being." />
        <link rel="canonical" href="https://www.hamblogs.tech/blog/introduction-to-mindfulness-meditation" />
        <meta property="og:title" content="Introduction to Mindfulness Meditation" />
        <meta property="og:description" content="Learn the fundamentals of mindfulness meditation and its transformative benefits for mental health and well-being." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.hamblogs.tech/blog/introduction-to-mindfulness-meditation" />
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
                Introduction to Mindfulness Meditation
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
              6 min read
            </div>
            <div className="flex items-center text-gray-300">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              January 8, 2026
            </div>
          </div>
        </header>

        <main className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="lead text-xl text-gray-200 mb-8">
              Mindfulness meditation is a simple yet profound practice that involves paying attention to the present moment without judgment. It's about observing your thoughts, feelings, bodily sensations, and surrounding environment with a gentle, accepting attitude.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">The Foundation of Mindfulness</h2>
            <p>
              At its core, mindfulness is about developing awareness of the here and now. Rather than getting caught up in regrets about the past or worries about the future, mindfulness invites you to anchor yourself in the present moment.
            </p>

            <p>
              This practice has roots in ancient Buddhist traditions but has been adapted for modern secular contexts by researchers like Jon Kabat-Zinn, who developed the Mindfulness-Based Stress Reduction (MBSR) program.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Benefits of Regular Practice</h2>
            <p>
              Research has consistently shown that regular mindfulness meditation offers numerous benefits:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Reduced stress and anxiety levels</li>
              <li>Improved emotional regulation</li>
              <li>Better focus and concentration</li>
              <li>Enhanced self-awareness</li>
              <li>Greater empathy and compassion</li>
              <li>Improved physical health markers</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Getting Started with Your Practice</h2>
            <p>
              Starting a mindfulness meditation practice doesn't require special equipment or hours of sitting in silence. Here's a simple approach for beginners:
            </p>

            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Choose a quiet space where you won't be disturbed</li>
              <li>Sit comfortably with your spine straight (on a chair or cushion)</li>
              <li>Close your eyes or soften your gaze downward</li>
              <li>Focus on your breath - feel the sensation of air entering and leaving your nostrils</li>
              <li>When your mind wanders (and it will), gently bring your attention back to your breath</li>
              <li>Start with just 5-10 minutes and gradually increase the duration</li>
            </ol>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Common Challenges and How to Overcome Them</h2>
            <p>
              Many beginners expect to achieve a completely "blank mind" during meditation, but this is a common misconception. The goal isn't to stop thinking altogether, but rather to observe thoughts without getting carried away by them.
            </p>

            <p>
              It's normal for your mind to wander frequently, especially in the beginning. Each time you notice your attention has drifted and you bring it back, you're strengthening your mindfulness muscle.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Incorporating Mindfulness into Daily Life</h2>
            <p>
              While formal meditation practice is valuable, you can also cultivate mindfulness throughout your day. This might involve:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Eating meals without distractions</li>
              <li>Taking mindful walks where you notice your surroundings</li>
              <li>Pausing to breathe deeply before responding to stressful situations</li>
              <li>Noticing the sensations of daily activities like washing dishes or brushing teeth</li>
            </ul>

            <p>
              Remember, mindfulness is a skill that develops over time. Be patient with yourself and approach your practice with curiosity rather than criticism. Even a few minutes of daily mindfulness can begin to create positive changes in your mental well-being.
            </p>
          </div>
        </main>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">About Mindfulness</h3>
          <p className="text-gray-300 mb-4">
            Mindfulness is the practice of bringing one's attention to the present moment in a non-judgmental way. It has been practiced for thousands of years in various traditions and has gained significant recognition in Western medicine and psychology for its therapeutic benefits.
          </p>
          <p className="text-gray-300">
            Regular mindfulness practice can help reduce stress, improve emotional regulation, enhance focus, and promote overall well-being. It's accessible to everyone regardless of age, background, or beliefs.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
          <div className="space-y-4">
            <Link href="/blog/breathing-techniques-for-stress-relief" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-yellow-400">Breathing Techniques for Stress Relief</h4>
              <p className="text-gray-300">Essential breathing exercises to calm your mind and reduce anxiety.</p>
            </Link>
            <Link href="/blog/body-scan-meditation-guide" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-yellow-400">Body Scan Meditation: A Complete Guide</h4>
              <p className="text-gray-300">Step-by-step instructions for this powerful awareness technique.</p>
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