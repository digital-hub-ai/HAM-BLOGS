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
    { title: "Loving-Kindness Meditation Practice", slug: "/blog/loving-kindness-meditation-practice" },
    { title: "Mindfulness for Better Sleep", slug: "/blog/mindfulness-for-better-sleep" },
    { title: "Developing a Regular Mindfulness Habit", slug: "/blog/developing-regular-mindfulness-habit" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Mindfulness in Daily Activities - Practical Mindfulness</title>
        <meta name="description" content="How to integrate mindfulness into routine tasks like walking, cleaning, and working for enhanced awareness." />
        <link rel="canonical" href="https://www.hamblogs.tech/blog/mindfulness-in-daily-activities" />
        <meta property="og:title" content="Mindfulness in Daily Activities" />
        <meta property="og:description" content="How to integrate mindfulness into routine tasks like walking, cleaning, and working for enhanced awareness." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.hamblogs.tech/blog/mindfulness-in-daily-activities" />
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
                Mindfulness in Daily Activities
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
              January 4, 2026
            </div>
          </div>
        </header>

        <main className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="lead text-xl text-gray-200 mb-8">
              Mindfulness doesn't have to be confined to formal meditation sessions. You can cultivate present-moment awareness during everyday activities, turning routine tasks into opportunities for practice and insight. This approach, sometimes called "informal mindfulness," can help you develop continuous awareness throughout your day.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">The Power of Informal Practice</h2>
            <p>
              While sitting meditation is valuable, informal mindfulness practice allows you to bring awareness to the majority of your day that isn't spent in formal meditation. This continuous practice helps strengthen your mindfulness muscle and integrates awareness into your daily life.
            </p>

            <p>
              Informal practice involves choosing to be fully present during ordinary activities. Rather than doing these tasks on autopilot, you intentionally bring attention to the sensory experience of the activity.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Mindful Walking</h2>
            <p>
              Walking is one of the easiest activities to practice mindfulness with, whether you're taking a stroll, walking to your car, or moving around your home:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Notice the feeling of your feet touching the ground</li>
              <li>Pay attention to the rhythm of your steps</li>
              <li>Observe the movement of your legs and body</li>
              <li>Notice the environment around you – sights, sounds, smells</li>
              <li>Feel the air on your skin and the temperature</li>
            </ul>

            <p>
              You can practice mindful walking anywhere – in your neighborhood, at the office, or even while pacing during phone calls. The key is to focus on the physical sensations of walking rather than letting your mind wander.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Mindful Washing Dishes</h2>
            <p>
              Dishwashing is an excellent opportunity for mindfulness practice because it involves multiple senses and repetitive motions:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Feel the temperature of the water on your hands</li>
              <li>Notice the texture of the dishes and utensils</li>
              <li>Listen to the sounds of water and dishes</li>
              <li>Observe the soap bubbles and how they change</li>
              <li>Pay attention to the movements of your hands and arms</li>
            </ul>

            <p>
              Rather than rushing through dishwashing to get back to other activities, treat it as a mini meditation session. You might be surprised by how relaxing and centering this simple task can become.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Mindful Cleaning</h2>
            <p>
              Cleaning activities offer numerous opportunities for mindfulness practice:
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Vacuuming</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Notice the rhythm and sound of the vacuum</li>
              <li>Feel the vibration through your hands</li>
              <li>Observe the movement of the vacuum cleaner</li>
              <li>Watch the dust and debris disappear</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Laundry</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Feel the different textures of fabrics</li>
              <li>Notice the colors of the clothes</li>
              <li>Smell the detergent and fabric softener</li>
              <li>Observe the process of folding and organizing</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Organizing</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Notice the weight of items as you lift them</li>
              <li>Feel the surfaces you're organizing</li>
              <li>See how spaces transform as you work</li>
              <li>Appreciate the order you're creating</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Mindful Eating</h2>
            <p>
              Though covered in detail in another article, mindful eating deserves mention here as it's one of the most accessible daily practices:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Notice the colors, textures, and aromas of your food</li>
              <li>Chew slowly and savor flavors</li>
              <li>Pay attention to the temperature of your food</li>
              <li>Notice the sounds of eating</li>
              <li>Check in with hunger and fullness cues</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Mindful Working</h2>
            <p>
              Even at work, you can practice mindfulness:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Before starting a task, take three conscious breaths</li>
              <li>Notice the physical sensations of typing or writing</li>
              <li>Feel your feet on the floor and your back against the chair</li>
              <li>Take mindful breaks between tasks</li>
              <li>Pause and breathe before responding to emails or calls</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Mindful Commuting</h2>
            <p>
              Whether driving, taking public transport, or walking to work, commuting can be transformed into a mindfulness practice:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>If driving, notice the feeling of holding the steering wheel</li>
              <li>Observe the rhythm of traffic lights and stops</li>
              <li>Feel the acceleration and deceleration</li>
              <li>Notice the passing scenery</li>
              <li>Use the time to simply breathe if you're a passenger</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Tips for Success</h2>
            <p>
              Here are some strategies to help you integrate mindfulness into daily activities:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Start small:</strong> Choose just one activity to practice mindfulness with initially</li>
              <li><strong>Set reminders:</strong> Use phone notifications to prompt mindful moments</li>
              <li><strong>Be patient:</strong> Your mind will wander frequently – that's normal</li>
              <li><strong>Use transitions:</strong> Practice mindfulness during transitions between activities</li>
              <li><strong>Choose enjoyable activities:</strong> Start with activities you find pleasant</li>
              <li><strong>Practice regularly:</strong> Consistency is more important than duration</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Overcoming Challenges</h2>
            <p>
              You may encounter obstacles when practicing mindfulness in daily activities:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Time pressure:</strong> Remember that mindful practice doesn't take extra time – it transforms the time you're already spending</li>
              <li><strong>Distractions:</strong> Acknowledge distractions without judgment and return to the present moment</li>
              <li><strong>Perfectionism:</strong> There's no perfect way to practice – just being aware is the goal</li>
              <li><strong>Forgetfulness:</strong> Be kind to yourself when you forget, and gently return to practice</li>
            </ul>

            <p>
              With regular practice, mindful engagement in daily activities will become more natural, enriching even routine tasks with presence and awareness.
            </p>
          </div>
        </main>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">About Daily Mindfulness</h3>
          <p className="text-gray-300 mb-4">
            Integrating mindfulness into daily activities is often considered more important than formal sitting practice because it transforms the bulk of our waking hours into opportunities for awareness and presence.
          </p>
          <p className="text-gray-300">
            This approach helps make mindfulness a way of life rather than just a technique practiced at specific times.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
          <div className="space-y-4">
            <Link href="/blog/body-scan-meditation-guide" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-yellow-400">Body Scan Meditation: A Complete Guide</h4>
              <p className="text-gray-300">Step-by-step instructions for this powerful awareness technique.</p>
            </Link>
            <Link href="/blog/mindful-eating-practices" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-yellow-400">Mindful Eating Practices</h4>
              <p className="text-gray-300">How to cultivate awareness and appreciation during meals.</p>
            </Link>
            <Link href="/blog/breathing-techniques-for-stress-relief" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-yellow-400">Breathing Techniques for Stress Relief</h4>
              <p className="text-gray-300">Essential breathing exercises to calm your mind and reduce anxiety.</p>
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