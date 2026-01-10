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
    { title: "Mindfulness in Daily Activities", slug: "/blog/mindfulness-in-daily-activities" },
    { title: "Loving-Kindness Meditation Practice", slug: "/blog/loving-kindness-meditation-practice" },
    { title: "Mindfulness for Better Sleep", slug: "/blog/mindfulness-for-better-sleep" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Body Scan Meditation: A Complete Guide - Mindfulness Practices</title>
        <meta name="description" content="Step-by-step instructions for body scan meditation, a powerful awareness technique for relaxation and presence." />
        <link rel="canonical" href="https://www.hamblogs.tech/blog/body-scan-meditation-guide" />
        <meta property="og:title" content="Body Scan Meditation: A Complete Guide" />
        <meta property="og:description" content="Step-by-step instructions for body scan meditation, a powerful awareness technique for relaxation and presence." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.hamblogs.tech/blog/body-scan-meditation-guide" />
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
                Body Scan Meditation: A Complete Guide
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
              9 min read
            </div>
            <div className="flex items-center text-gray-300">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              January 5, 2026
            </div>
          </div>
        </header>

        <main className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="lead text-xl text-gray-200 mb-8">
              Body scan meditation is a mindfulness practice that involves mentally scanning your body from head to toe, noticing any sensations, tensions, or discomfort without trying to change them. This practice helps develop awareness of the mind-body connection and promotes deep relaxation.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Understanding Body Scan Meditation</h2>
            <p>
              Body scan meditation is a form of progressive relaxation that brings awareness to different parts of your body systematically. It's often used in Mindfulness-Based Stress Reduction (MBSR) programs and has been shown to reduce anxiety, chronic pain, and insomnia while improving overall well-being.
            </p>

            <p>
              The practice involves moving your attention slowly through your body, observing physical sensations without judgment. You're not trying to relax muscles or change anything – just noticing what's already there.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Preparing for Your Practice</h2>
            <p>
              To get the most from your body scan meditation:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Find a quiet, comfortable space where you won't be disturbed</li>
              <li>Lie down on your back with your legs uncrossed and arms relaxed at your sides</li>
              <li>Close your eyes or keep them softly focused on the ceiling</li>
              <li>Wear loose, comfortable clothing</li>
              <li>Allow 20-45 minutes for a full body scan, though shorter versions are also beneficial</li>
            </ul>

            <p>
              Some people prefer to sit in a comfortable chair if lying down makes them sleepy. The key is finding a position that allows you to stay alert yet relaxed.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Step-by-Step Body Scan Instructions</h2>
            <p>
              Follow these steps for a complete body scan meditation:
            </p>

            <ol className="list-decimal pl-6 mb-6 space-y-4">
              <li>
                <strong>Settle in:</strong> Take 3-5 deep breaths, allowing your body to settle into the surface beneath you. Notice the points of contact between your body and the floor or bed.
              </li>
              <li>
                <strong>Focus on breathing:</strong> Bring attention to your natural breath for a minute or two, without changing it. Notice how your breath moves through your body.
              </li>
              <li>
                <strong>Begin at the top:</strong> Shift your attention to the top of your head. Notice any sensations there – warmth, coolness, tingling, or perhaps nothing at all. Don't judge or try to change anything.
              </li>
              <li>
                <strong>Move systematically:</strong> Slowly move your attention through your body in a specific order:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Forehead and temples</li>
                  <li>Eyes, cheeks, and jaw</li>
                  <li>Neck and throat</li>
                  <li>Shoulders and upper back</li>
                  <li>Arms, elbows, hands, and fingers</li>
                  <li>Chest and ribcage</li>
                  <li>Abdomen and lower back</li>
                  <li>Hips and pelvis</li>
                  <li>Thighs and knees</li>
                  <li>Lower legs, calves, and shins</li>
                  <li>Ankles and feet</li>
                  <li>Toes</li>
                </ul>
              </li>
              <li>
                <strong>Notice without changing:</strong> For each body part, spend 10-30 seconds observing sensations. They might be pleasant, unpleasant, or neutral. Simply acknowledge what's there.
              </li>
              <li>
                <strong>Return to breath:</strong> After scanning your whole body, return attention to your breath for a few moments.
              </li>
              <li>
                <strong>Whole body awareness:</strong> Finally, try to sense your entire body at once, like a wave of awareness washing over you.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Tips for Success</h2>
            <p>
              Here are some practical tips to enhance your body scan practice:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>If you fall asleep, don't worry – this is normal, especially when starting out</li>
              <li>It's okay if your mind wanders; gently return your attention to wherever you left off in the scan</li>
              <li>Some days you might notice more sensations than others, and that's perfectly normal</li>
              <li>Don't be surprised if you discover tension you weren't aware of</li>
              <li>Use guided recordings initially, then try the practice on your own as you become familiar with it</li>
              <li>Be patient – it takes time to develop sensitivity to subtle body sensations</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Variations and Adaptations</h2>
            <p>
              You can adapt the body scan practice to fit your needs:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Shortened version:</strong> Focus on major areas like head, shoulders, torso, hips, and feet for a 5-10 minute practice</li>
              <li><strong>Targeted scan:</strong> Focus on specific areas where you hold tension, such as the neck, shoulders, or jaw</li>
              <li><strong>Standing scan:</strong> Perform the practice while standing, useful for breaks during workdays</li>
              <li><strong>Walking scan:</strong> Bring awareness to your feet and legs while walking slowly</li>
              <li><strong>Bedtime scan:</strong> Use a gentle version as part of your evening wind-down routine</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Benefits of Regular Practice</h2>
            <p>
              Consistent body scan meditation offers numerous benefits:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Increased body awareness and mind-body connection</li>
              <li>Reduced physical tension and muscular stress</li>
              <li>Improved sleep quality and relaxation</li>
              <li>Enhanced emotional regulation through body awareness</li>
              <li>Greater ability to notice early signs of stress or illness</li>
              <li>Reduced symptoms of chronic pain conditions</li>
              <li>Improved focus and present-moment awareness</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Troubleshooting Common Challenges</h2>
            <p>
              You may encounter various challenges as you develop your practice:
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Difficulty Feeling Sensations</h3>
            <p>
              If you can't feel much in certain areas, that's completely normal. The body scan practice itself will help develop sensitivity over time. You can also imagine sending your attention to that area and see if that evokes any response.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Physical Discomfort</h3>
            <p>
              If lying still causes discomfort, adjust your position mindfully. Notice the intention to move and the actual movement, then resume the scan from where you left off.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Strong Emotions</h3>
            <p>
              Sometimes physical sensations trigger emotional responses. Acknowledge these feelings with the same non-judgmental awareness you bring to physical sensations. They usually pass when observed without resistance.
            </p>

            <p>
              Remember, body scan meditation is a practice of returning to the present moment through awareness of your physical experience. With patience and consistency, you'll likely find increased comfort in your own body and greater resilience to stress.
            </p>
          </div>
        </main>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">About Body Awareness</h3>
          <p className="text-gray-300 mb-4">
            Body scan meditation is part of a broader approach to developing somatic awareness, which has been shown to improve emotional regulation and stress resilience. Regular practice strengthens the connection between mind and body.
          </p>
          <p className="text-gray-300">
            This practice is particularly helpful for people who tend to live primarily in their heads and want to reconnect with their physical experience.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
          <div className="space-y-4">
            <Link href="/blog/introduction-to-mindfulness-meditation" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-yellow-400">Introduction to Mindfulness Meditation</h4>
              <p className="text-gray-300">Learn the fundamentals of mindfulness meditation and its transformative benefits.</p>
            </Link>
            <Link href="/blog/breathing-techniques-for-stress-relief" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-yellow-400">Breathing Techniques for Stress Relief</h4>
              <p className="text-gray-300">Essential breathing exercises to calm your mind and reduce anxiety.</p>
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