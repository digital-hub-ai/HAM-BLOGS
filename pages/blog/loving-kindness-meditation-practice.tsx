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
    { title: "Mindfulness for Better Sleep", slug: "/blog/mindfulness-for-better-sleep" },
    { title: "Developing a Regular Mindfulness Habit", slug: "/blog/developing-regular-mindfulness-habit" },
    { title: "Introduction to Mindfulness Meditation", slug: "/blog/introduction-to-mindfulness-meditation" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Loving-Kindness Meditation Practice - Compassion Building</title>
        <meta name="description" content="Cultivate compassion for yourself and others through loving-kindness meditation practice." />
        <link rel="canonical" href="https://www.hamblogs.tech/blog/loving-kindness-meditation-practice" />
        <meta property="og:title" content="Loving-Kindness Meditation Practice" />
        <meta property="og:description" content="Cultivate compassion for yourself and others through loving-kindness meditation practice." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.hamblogs.tech/blog/loving-kindness-meditation-practice" />
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
                Loving-Kindness Meditation Practice
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
              8 min read
            </div>
            <div className="flex items-center text-gray-300">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              January 3, 2026
            </div>
          </div>
        </header>

        <main className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="lead text-xl text-gray-200 mb-8">
              Loving-kindness meditation, also known as Metta meditation, is a practice that cultivates unconditional love and compassion toward yourself and others. This ancient practice can transform your relationships, reduce negative emotions, and increase positive feelings of connection and well-being.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Understanding Loving-Kindness</h2>
            <p>
              Loving-kindness (Metta in Pali) is one of the four Brahmaviharas or "divine abodes" in Buddhist tradition. It refers to an unconditional, benevolent love that is free from attachment, desire, or expectation. Unlike romantic love or affection based on personal gain, loving-kindness is a genuine wish for the happiness and welfare of all beings.
            </p>

            <p>
              The practice involves silently repeating phrases of goodwill, kindness, and warmth to yourself and others. Scientific research has shown that regular loving-kindness practice increases positive emotions, reduces symptoms of PTSD and depression, and enhances social connection.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Traditional Phrases</h2>
            <p>
              The classic loving-kindness phrases in English are:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>May I be happy</li>
              <li>May I be healthy</li>
              <li>May I be safe</li>
              <li>May I live with ease</li>
            </ul>

            <p>
              You can also use variations such as "May I be peaceful," "May I be free from suffering," or "May I be filled with loving-kindness." The exact words matter less than the intention behind them.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">The Traditional Sequence</h2>
            <p>
              Classical loving-kindness meditation follows a specific sequence that gradually expands your circle of compassion:
            </p>

            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li><strong>Yourself:</strong> Start by directing loving-kindness toward yourself</li>
              <li><strong>A loved one:</strong> Someone for whom you naturally feel love and care</li>
              <li><strong>A neutral person:</strong> Someone you neither like nor dislike (like a cashier or mail carrier)</li>
              <li><strong>A difficult person:</strong> Someone you have conflict with or find challenging</li>
              <li><strong>All beings:</strong> Extend loving-kindness to all living beings everywhere</li>
            </ol>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Step-by-Step Practice</h2>
            <p>
              Follow these steps for a complete loving-kindness meditation session:
            </p>

            <ol className="list-decimal pl-6 mb-6 space-y-4">
              <li>
                <strong>Find a comfortable position:</strong> Sit upright in a chair or cushion with your spine erect but not rigid. Close your eyes or lower your gaze.
              </li>
              <li>
                <strong>Connect with your breath:</strong> Take a few deep breaths and allow your breathing to settle into its natural rhythm. Spend a minute or two simply observing your breath.
              </li>
              <li>
                <strong>Direct loving-kindness to yourself:</strong> Begin with the traditional phrases, repeating them silently while imagining yourself. Picture yourself surrounded by warm, golden light representing loving-kindness. Repeat the phrases for 2-5 minutes.
              </li>
              <li>
                <strong>Extend to a loved one:</strong> Think of someone you care about deeply. Visualize them and repeat the phrases for them: "May you be happy, may you be healthy, may you be safe, may you live with ease." Hold them in your heart with warmth and goodwill.
              </li>
              <li>
                <strong>Include a neutral person:</strong> Bring to mind someone you see regularly but don't know well – perhaps a neighbor, store clerk, or colleague. Offer the same phrases of loving-kindness to this person.
              </li>
              <li>
                <strong>Offer to a difficult person:</strong> Think of someone with whom you have conflict or difficulty. This can be challenging, but try to extend the same wishes of well-being to them. Remember that they, like you, want to be happy and free from suffering.
              </li>
              <li>
                <strong>Expand to all beings:</strong> Finally, extend loving-kindness to all beings everywhere, in all directions. Imagine a vast ocean of compassion flowing from your heart to embrace all of existence.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Working with Difficult Emotions</h2>
            <p>
              During loving-kindness practice, you may encounter various emotional responses:
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Resistance to Self-Compassion</h3>
            <p>
              Many people struggle to direct loving-kindness toward themselves, feeling unworthy or uncomfortable with self-care. Remember that self-compassion is not selfish – it's necessary for extending genuine compassion to others. Start with phrases that feel manageable, such as "May I be okay."
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Anger Toward Difficult People</h3>
            <p>
              When directing loving-kindness to challenging individuals, strong emotions may arise. This is normal. You don't have to feel the emotion to offer the intention. You might start by wishing for their suffering to decrease rather than for their happiness directly.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Overwhelming Emotions</h3>
            <p>
              Sometimes the practice brings up intense sadness, grief, or loneliness. If this happens, pause and return to your breath. You can also direct loving-kindness to the part of you experiencing difficulty: "May the part of me that is sad be happy, may it be at peace."
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Benefits of Regular Practice</h2>
            <p>
              Research has demonstrated numerous benefits of loving-kindness meditation:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Increased positive emotions and life satisfaction</li>
              <li>Reduced symptoms of depression and PTSD</li>
              <li>Enhanced empathy and compassion</li>
              <li>Improved relationships and social connections</li>
              <li>Greater emotional resilience and stress management</li>
              <li>Reduced implicit bias and increased acceptance of others</li>
              <li>Physical health benefits, including reduced inflammation</li>
              <li>Increased vagal tone, associated with better emotional regulation</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Daily Integration</h2>
            <p>
              You can extend loving-kindness beyond formal meditation practice:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Send loving-kindness to people you encounter during the day</li>
              <li>Use the phrases as self-soothing when stressed</li>
              <li>Practice loving-kindness during difficult interactions</li>
              <li>End your day by extending good wishes to all beings</li>
              <li>Offer loving-kindness to yourself when facing challenges</li>
            </ul>

            <p>
              With consistent practice, loving-kindness meditation can transform your relationship with yourself and others, fostering a more compassionate and connected way of being in the world.
            </p>
          </div>
        </main>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">About Compassion Practices</h3>
          <p className="text-gray-300 mb-4">
            Loving-kindness meditation is part of a broader category of practices aimed at cultivating compassion and emotional well-being. These practices have been scientifically studied and shown to have significant positive effects on mental and physical health.
          </p>
          <p className="text-gray-300">
            Regular compassion practice can help counteract the negativity bias of our minds and build resilience against stress and difficult emotions.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
          <div className="space-y-4">
            <Link href="/blog/introduction-to-mindfulness-meditation" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-yellow-400">Introduction to Mindfulness Meditation</h4>
              <p className="text-gray-300">Learn the fundamentals of mindfulness meditation and its transformative benefits.</p>
            </Link>
            <Link href="/blog/mindfulness-in-daily-activities" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-yellow-400">Mindfulness in Daily Activities</h4>
              <p className="text-gray-300">Integrate mindfulness into routine tasks like walking, cleaning, and working.</p>
            </Link>
            <Link href="/blog/body-scan-meditation-guide" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-yellow-400">Body Scan Meditation: A Complete Guide</h4>
              <p className="text-gray-300">Step-by-step instructions for this powerful awareness technique.</p>
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