import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function BlogPost() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [relatedArticles, setRelatedArticles] = useState<{ id: string; title: string; slug: string; excerpt: string; }[]>([]);

  useEffect(() => {
    // Check if article is bookmarked
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const isBookmarked = bookmarks.some((article: any) => article.slug === router.pathname.split('/').pop());
    setBookmarked(isBookmarked);

    // Generate related articles
    const allArticles = [
      {
        id: '1',
        title: 'Morning Routines: Setting a Positive Tone',
        slug: 'morning-routines-setting-positive-tone',
        excerpt: 'Start your day with practices that promote mental clarity and focus...'
      },
      {
        id: '2',
        title: 'Mindfulness Meditation: Beginner\'s Guide',
        slug: 'mindfulness-meditation-beginners-guide',
        excerpt: 'Essential techniques for developing a sustainable meditation practice...'
      },
      {
        id: '3',
        title: 'Stress Management Techniques for Modern Life',
        slug: 'stress-management-techniques-modern-life',
        excerpt: 'Effective strategies for managing stress in our fast-paced world...'
      }
    ];
    
    // Randomly select 2 articles
    const shuffled = [...allArticles].sort(() => 0.5 - Math.random());
    setRelatedArticles(shuffled.slice(0, 2));
  }, [router]);

  const toggleBookmark = () => {
    const articleData = {
      id: Math.random().toString(36).substr(2, 9),
      title: 'Sleep Hygiene: Improving Rest Quality',
      slug: router.pathname.split('/').pop(),
      date: '2026-01-06',
      category: 'Wellness'
    };

    let bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const existingIndex = bookmarks.findIndex((article: any) => article.slug === articleData.slug);

    if (existingIndex >= 0) {
      bookmarks.splice(existingIndex, 1);
    } else {
      bookmarks.push(articleData);
    }

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Sleep Hygiene: Improving Rest Quality | Premium Blog Platform</title>
        <meta name="description" content="Strategies for achieving deeper, more restorative sleep" />
        <link rel="canonical" href="https://www.premiumblogplatform.com/blog/sleep-hygiene-improving-rest-quality" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <header className="mb-8 sm:mb-12">
          <nav className="mb-6">
            <Link href="/" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
              <span className="mr-2">←</span> Home
            </Link>
          </nav>
          
          <div className="flex flex-wrap items-center justify-between mb-6">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 sm:mb-0">
              Wellness
            </span>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleBookmark}
                className={`p-2 rounded-full transition-colors ${
                  bookmarked 
                    ? 'text-yellow-400 bg-yellow-400/10' 
                    : 'text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10'
                }`}
                aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark article'}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24"
                  fill={bookmarked ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Sleep Hygiene: Improving Rest Quality
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-400 text-sm mb-6">
            <span className="mr-4">January 6, 2026</span>
            <span>8 min read</span>
          </div>
        </header>

        <main className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Sleep hygiene encompasses a series of behavioral and environmental practices designed to promote better quality sleep and daytime alertness. In our modern, always-connected world, many people struggle with sleep issues that can significantly impact their physical health, mental well-being, and daily functioning. Quality sleep is not a luxury but a biological necessity that supports immune function, cognitive performance, emotional regulation, and physical restoration. Understanding and implementing proper sleep hygiene practices can help reset your natural sleep-wake cycle and create the optimal conditions for restorative rest. The good news is that most sleep problems can be addressed through consistent, healthy sleep habits that don&#39;t require medication or complex interventions.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Understanding Sleep Architecture</h2>
          
          <p className="mb-6 text-gray-200">
            Sleep is not a uniform state but consists of different stages that cycle throughout the night. These include light sleep, deep sleep, and REM (rapid eye movement) sleep, each serving unique functions in physical and mental restoration. Deep sleep is particularly important for physical recovery and immune function, while REM sleep supports memory consolidation and emotional processing.
          </p>
          
          <p className="mb-6 text-gray-200">
            The average sleep cycle lasts about 90 minutes and repeats 4-6 times per night. Understanding these patterns helps explain why sleep quality matters as much as quantity. Fragmented sleep that disrupts these cycles can leave you feeling unrested even after sufficient hours in bed.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Optimizing Your Sleep Environment</h2>
          
          <p className="mb-6 text-gray-200">
            Temperature plays a crucial role in sleep quality. The ideal bedroom temperature is between 60-67°F (15-19°C), supporting your body&#39;s natural temperature drop that signals sleep readiness. Consider using breathable bedding, fans, or air conditioning to maintain this optimal range.
          </p>
          
          <p className="mb-6 text-gray-200">
            Darkness is essential for melatonin production, the hormone that signals your body to sleep. Use blackout curtains, eye masks, or cover electronic devices that emit light. Even small amounts of light can disrupt your circadian rhythm and reduce sleep quality.
          </p>
          
          <p className="mb-6 text-gray-200">
            Minimize noise disruptions with earplugs, white noise machines, or fans that create consistent background sound. A quiet environment allows your brain to transition smoothly between sleep stages without interruption.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Establishing Consistent Sleep Schedules</h2>
          
          <p className="mb-6 text-gray-200">
            Going to bed and waking up at the same times daily helps regulate your circadian rhythm, making it easier to fall asleep and wake up naturally. This consistency should be maintained even on weekends, as irregular sleep patterns can disrupt your internal clock.
          </p>
          
          <p className="mb-6 text-gray-200">
            Calculate your ideal bedtime based on your required sleep duration and wake-up time. Most adults need 7-9 hours of sleep per night, though individual needs may vary. Allow for a wind-down period before attempting to sleep.
          </p>
          
          <p className="mb-6 text-gray-200">
            If you struggle with falling asleep at your desired time, gradually shift your schedule by 15-minute increments until you reach your target bedtime. This gradual approach is more sustainable than dramatic changes.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Pre-Sleep Routine Development</h2>
          
          <p className="mb-6 text-gray-200">
            A consistent pre-sleep routine signals to your brain that it&#39;s time to wind down. This might include reading, taking a warm bath, practicing gentle stretches, or engaging in relaxation techniques. Choose activities that are calming and enjoyable for you.
          </p>
          
          <p className="mb-6 text-gray-200">
            Avoid stimulating activities in the hour before bed, including intense exercise, stressful conversations, or engaging work. Instead, focus on activities that promote relaxation and transition your mind away from daily concerns.
          </p>
          
          <p className="mb-6 text-gray-200">
            Dim lights in your living space during the hour before bed to help your body prepare for sleep. Bright light in the evening can delay melatonin production and make it harder to fall asleep.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Managing Light Exposure</h2>
          
          <p className="mb-6 text-gray-200">
            Exposure to natural light, especially in the morning, helps regulate your circadian rhythm. Spend time outdoors or near windows during daylight hours to support your natural sleep-wake cycle. This is particularly important during winter months when natural light is limited.
          </p>
          
          <p className="mb-6 text-gray-200">
            Reduce exposure to blue light from electronic devices in the evening. Blue light suppresses melatonin production and can delay sleep onset. Consider using blue light filters, wearing blue light blocking glasses, or avoiding screens 1-2 hours before bed.
          </p>
          
          <p className="mb-6 text-gray-200">
            If you must use electronic devices before bed, dim the brightness and maintain a distance from the screen. Many devices now have &quot;night mode&quot; settings that reduce blue light emission.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Diet and Sleep Considerations</h2>
          
          <p className="mb-6 text-gray-200">
            Caffeine consumption should be limited in the afternoon and evening. Caffeine has a half-life of about 5-6 hours, meaning that afternoon coffee can still affect sleep quality at bedtime. Generally, avoid caffeine 6-8 hours before your intended bedtime.
          </p>
          
          <p className="mb-6 text-gray-200">
            Alcohol may initially make you feel sleepy but disrupts sleep later in the night, particularly REM sleep. Limit alcohol consumption in the evening and be aware that it can fragment your sleep architecture.
          </p>
          
          <p className="mb-6 text-gray-200">
            Heavy meals close to bedtime can cause discomfort and indigestion that interferes with sleep. Aim to finish eating 2-3 hours before bed. If you need a light snack, choose something that promotes sleep, such as tart cherries, bananas, or whole grain crackers.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Exercise and Sleep</h2>
          
          <p className="mb-6 text-gray-200">
            Regular physical activity promotes better sleep quality and helps you fall asleep faster. However, the timing of exercise matters. Morning or afternoon exercise generally supports better sleep, while vigorous evening exercise may be too stimulating for some people.
          </p>
          
          <p className="mb-6 text-gray-200">
            If you prefer evening workouts, opt for gentler activities like yoga, stretching, or light walking. These activities can actually help with sleep preparation by raising and then allowing your body temperature to drop.
          </p>
          
          <p className="mb-6 text-gray-200">
            Consistency in exercise timing can help regulate your circadian rhythm. If possible, try to exercise at the same time daily to reinforce your natural sleep-wake cycle.
          </p>
          
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6 mt-8">
            <h3 className="text-xl font-bold text-white mb-3">Key Considerations</h3>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                Start with small, manageable changes to your sleep routine
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                Be consistent with your sleep schedule, even on weekends
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                Create a comfortable sleep environment
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                Limit exposure to screens before bedtime
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                Consider professional help if sleep problems persist
              </li>
            </ul>
          </div>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusion</h2>
          
          <p className="mb-6 text-gray-200">
            Sleep hygiene is a cornerstone of good health that deserves the same attention as diet and exercise. By implementing these practices consistently, you can significantly improve both the quality and quantity of your sleep. Remember that changes take time to show results, so be patient with yourself as you develop new habits.
          </p>
          
          <p className="mb-6 text-gray-200">
            Start with one or two changes rather than trying to overhaul your entire routine at once. As these new habits become automatic, you can gradually incorporate additional sleep hygiene practices. The investment in better sleep will pay dividends in every area of your life.
          </p>
          
          <p className="mb-6 text-gray-200">
            If sleep problems persist despite good sleep hygiene practices, consult with a healthcare provider to rule out underlying conditions like sleep apnea or restless leg syndrome. For most people, however, consistent application of these principles can lead to significantly improved sleep quality and overall well-being.
          </p>
        </main>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((article: any) => (
              <Link 
                href={`/blog/${article.slug}`} 
                key={article.id}
                className="block bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 hover:bg-white/20 transition-all"
              >
                <h4 className="font-bold text-white mb-2 hover:text-yellow-400 transition-colors">
                  {article.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {article.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/blog" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
            Explore More Articles
          </Link>
        </div>
      </div>
    </div>
  );
}