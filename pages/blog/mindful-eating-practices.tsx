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
    { title: "Body Scan Meditation: A Complete Guide", slug: "/blog/body-scan-meditation-guide" },
    { title: "Mindfulness in Daily Activities", slug: "/blog/mindfulness-in-daily-activities" },
    { title: "Loving-Kindness Meditation Practice", slug: "/blog/loving-kindness-meditation-practice" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Mindful Eating Practices - Mindfulness Techniques</title>
        <meta name="description" content="How to cultivate awareness and appreciation during meals through mindful eating practices." />
        <link rel="canonical" href="https://www.hamblogs.tech/blog/mindful-eating-practices" />
        <meta property="og:title" content="Mindful Eating Practices" />
        <meta property="og:description" content="How to cultivate awareness and appreciation during meals through mindful eating practices." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.hamblogs.tech/blog/mindful-eating-practices" />
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
                Mindful Eating Practices
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
              January 6, 2026
            </div>
          </div>
        </header>

        <main className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="lead text-xl text-gray-200 mb-8">
              Mindful eating is the practice of paying full attention to the experience of eating and drinking, both inside and outside the body. It involves noticing the colors, smells, textures, flavors, temperatures, and even the sounds of your food, as well as recognizing hunger and satiety cues.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Why Mindful Eating Matters</h2>
            <p>
              In our fast-paced world, eating has often become an automatic activity done while multitasking. We eat while driving, working, watching TV, or scrolling through our phones. This mindless eating can lead to overconsumption, poor digestion, and reduced satisfaction from our meals.
            </p>

            <p>
              Mindful eating helps you develop a healthier relationship with food by reconnecting you with your body's natural hunger and fullness signals. It allows you to enjoy your food more fully while making more conscious choices about what and how much you eat.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Core Principles of Mindful Eating</h2>
            <p>
              The practice of mindful eating is built on several foundational principles:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Non-judgment:</strong> Observing your eating habits without criticizing yourself</li>
              <li><strong>Present-moment awareness:</strong> Focusing on the immediate experience of eating</li>
              <li><strong>Hunger and satiety awareness:</strong> Recognizing physical cues for hunger and fullness</li>
              <li><strong>Gratitude:</strong> Appreciating the effort that went into producing your meal</li>
              <li><strong>Acceptance:</strong> Acknowledging your eating patterns without trying to change them immediately</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Practical Steps for Mindful Eating</h2>
            <p>
              Here's how to incorporate mindful eating into your daily routine:
            </p>

            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li><strong>Prepare mindfully:</strong> Take a moment before eating to appreciate your meal and set an intention to eat consciously</li>
              <li><strong>Engage your senses:</strong> Notice the colors, textures, and aromas of your food before taking the first bite</li>
              <li><strong>Take small bites:</strong> Eat slowly and chew thoroughly, savoring each flavor</li>
              <li><strong>Put down utensils:</strong> Between bites, place your fork or spoon down to slow the pace</li>
              <li><strong>Check in with hunger:</strong> Pause halfway through your meal to assess your level of fullness</li>
              <li><strong>Eliminate distractions:</strong> Turn off screens and focus solely on the eating experience</li>
            </ol>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Mindful Eating Exercises</h2>
            <p>
              Try these specific exercises to deepen your mindful eating practice:
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">The Raisin Exercise</h3>
            <p>
              This classic mindfulness exercise can be done with any small piece of food:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Examine the raisin as if you've never seen one before - notice its texture, color, and shape</li>
              <li>Feel its weight in your palm and fingers</li>
              <li>Place it in your mouth without chewing, noticing how it feels</li>
              <li>Begin to chew slowly, noticing the changes in texture and taste</li>
              <li>Swallow and notice the sensation of the raisin moving down your throat</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">The Hunger Scale</h3>
            <p>
              Before eating, rate your hunger on a scale from 1 to 10 (1 = starving, 10 = uncomfortably full). Aim to start eating when you're at a 3 or 4, and stop when you reach a 6 or 7.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Benefits of Mindful Eating</h2>
            <p>
              Research has shown that mindful eating can provide numerous benefits:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Weight management through better portion control</li>
              <li>Improved digestion and nutrient absorption</li>
              <li>Reduced emotional eating and binge eating episodes</li>
              <li>Greater satisfaction and enjoyment of food</li>
              <li>Enhanced awareness of food triggers and eating patterns</li>
              <li>Better blood sugar control for people with diabetes</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Overcoming Common Challenges</h2>
            <p>
              Developing a mindful eating practice takes time and patience. Common challenges include:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Rushing through meals:</strong> Set a timer for 20-30 minutes to ensure adequate eating time</li>
              <li><strong>Forgotten awareness:</strong> Use reminders or alarms to prompt mindful moments during meals</li>
              <li><strong>Social pressure:</strong> Explain your practice to friends and family, or start with solo meals</li>
              <li><strong>Busy schedule:</strong> Begin with just one mindful snack per day</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Integrating Mindful Eating into Daily Life</h2>
            <p>
              You don't need to practice mindful eating for every meal right away. Start with small steps:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Begin with one meal or snack per day</li>
              <li>Focus on one aspect of mindful eating at a time</li>
              <li>Practice during less stressful meals first</li>
              <li>Use mindful eating during celebrations to fully appreciate special foods</li>
              <li>Notice how different foods make you feel physically and emotionally</li>
            </ul>

            <p>
              Remember, mindful eating is not about perfection but about developing a more conscious relationship with food. Over time, you'll likely find that you enjoy your meals more while naturally making choices that support your health and well-being.
            </p>
          </div>
        </main>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">About Mindful Living</h3>
          <p className="text-gray-300 mb-4">
            Mindful eating is just one aspect of mindful living, which encompasses bringing awareness to all daily activities. It helps create a foundation for more intentional decision-making around food and nutrition.
          </p>
          <p className="text-gray-300">
            By practicing mindfulness in eating, you develop skills that can be applied to other areas of your life, enhancing overall well-being and satisfaction.
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