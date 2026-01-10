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
        title: 'Stress Management Techniques for Modern Life',
        slug: 'stress-management-techniques-modern-life',
        excerpt: 'Effective strategies for managing stress in our fast-paced world...'
      },
      {
        id: '2',
        title: 'Mindfulness Meditation: Beginner\'s Guide',
        slug: 'mindfulness-meditation-beginners-guide',
        excerpt: 'Essential techniques for developing a sustainable meditation practice...'
      },
      {
        id: '3',
        title: 'Sleep Hygiene: Improving Rest Quality',
        slug: 'sleep-hygiene-improving-rest-quality',
        excerpt: 'Strategies for achieving deeper, more restorative sleep...'
      }
    ];
    
    // Randomly select 2 articles
    const shuffled = [...allArticles].sort(() => 0.5 - Math.random());
    setRelatedArticles(shuffled.slice(0, 2));
  }, [router]);

  const toggleBookmark = () => {
    const articleData = {
      id: Math.random().toString(36).substr(2, 9),
      title: 'Digital Detox: Benefits and Strategies',
      slug: router.pathname.split('/').pop(),
      date: '2026-01-02',
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
        <title>Digital Detox: Benefits and Strategies | Premium Blog Platform</title>
        <meta name="description" content="Reclaiming mental space by reducing digital overload" />
        <link rel="canonical" href="https://www.premiumblogplatform.com/blog/digital-detox-benefits-and-strategies" />
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
            Digital Detox: Benefits and Strategies
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-400 text-sm mb-6">
            <span className="mr-4">January 2, 2026</span>
            <span>7 min read</span>
          </div>
        </header>

        <main className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            In our hyperconnected world, digital devices demand constant attention, creating a state of perpetual distraction that can significantly impact mental health, sleep quality, and interpersonal relationships. A digital detox involves intentionally reducing or eliminating the use of digital devices and online platforms for a specified period to restore mental clarity, improve focus, and reconnect with the physical world. The benefits of digital detoxing extend beyond temporary relief from notifications and information overload, offering opportunities to rediscover hobbies, strengthen real-world relationships, and develop a healthier relationship with technology. Rather than suggesting complete abandonment of technology, a digital detox is about creating intentional boundaries that allow you to harness technology's benefits while mitigating its potential negative effects on your well-being.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Understanding Digital Overload</h2>
          
          <p className="mb-6 text-gray-200">
            The average person checks their phone over 90 times per day, often unconsciously reaching for devices during brief pauses in activity. This constant connectivity fragments attention and prevents the deep focus necessary for meaningful work or relaxation. Research shows that the mere presence of a phone—even when turned off—can reduce cognitive performance by occupying mental resources.
          </p>
          
          <p className="mb-6 text-gray-200">
            Social media platforms are specifically designed to capture and retain attention through intermittent reinforcement schedules that trigger dopamine release. This design can create addictive patterns of usage that interfere with sleep, productivity, and real-world social interactions.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Mental Health Benefits</h2>
          
          <p className="mb-6 text-gray-200">
            Reducing digital stimulation allows the mind to rest and reset, often resulting in improved focus, creativity, and emotional regulation. Without constant input, you may find that your attention span naturally increases and your mind becomes clearer.
          </p>
          
          <p className="mb-6 text-gray-200">
            Digital detoxes can reduce anxiety and depression symptoms by eliminating social comparison triggers and reducing the pressure to maintain an online presence. Face-to-face interactions often provide more meaningful social connection than digital communication.
          </p>
          
          <p className="mb-6 text-gray-200">
            Removing digital distractions allows for deeper engagement with activities and thoughts, promoting mindfulness and present-moment awareness that supports mental well-being.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Sleep Quality Improvement</h2>
          
          <p className="mb-6 text-gray-200">
            Blue light from screens suppresses melatonin production, interfering with natural sleep-wake cycles. Eliminating screen time before bed can significantly improve sleep onset and quality.
          </p>
          
          <p className="mb-6 text-gray-200">
            The mental stimulation from digital content can make it difficult to wind down for sleep. A digital sunset—stopping device use 1-2 hours before bed—allows the mind to naturally transition to a restful state.
          </p>
          
          <p className="mb-6 text-gray-200">
            Removing the temptation to check devices during the night improves sleep continuity and reduces sleep fragmentation.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Enhanced Relationships</h2>
          
          <p className="mb-6 text-gray-200">
            Digital detoxing creates opportunities for undivided attention during interactions with family and friends, strengthening bonds and improving communication quality.
          </p>
          
          <p className="mb-6 text-gray-200">
            Without the distraction of notifications, you're more likely to engage in meaningful conversations and activities that foster connection.
          </p>
          
          <p className="mb-6 text-gray-200">
            Reducing time spent on social media can decrease the pressure to document and share every moment, allowing for more authentic experiences.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Practical Detox Strategies</h2>
          
          <p className="mb-6 text-gray-200">
            Start with small, manageable changes rather than attempting a complete digital elimination. Try a phone-free hour during dinner or before bed, then gradually extend the duration as it becomes easier.
          </p>
          
          <p className="mb-6 text-gray-200">
            Create phone-free zones in your home, such as bedrooms or dining areas, to establish clear boundaries around device usage.
          </p>
          
          <p className="mb-6 text-gray-200">
            Use airplane mode during focused work periods or relaxation time to eliminate interruptions while maintaining access to offline features.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Digital Sunset Rituals</h2>
          
          <p className="mb-6 text-gray-200">
            Establish a consistent evening routine that replaces screen time with relaxing activities like reading, journaling, or gentle stretching.
          </p>
          
          <p className="mb-6 text-gray-200">
            Charge devices outside the bedroom to eliminate the temptation to use them during the night and reduce electromagnetic exposure near sleeping areas.
          </p>
          
          <p className="mb-6 text-gray-200">
            Use physical alarm clocks instead of phone alarms to remove the need to have devices in the bedroom.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Reconnecting with Offline Activities</h2>
          
          <p className="mb-6 text-gray-200">
            Use reclaimed time to rediscover hobbies that don't involve screens, such as reading physical books, gardening, cooking, or crafts.
          </p>
          
          <p className="mb-6 text-gray-200">
            Spend more time in nature, which provides mental restoration that complements the benefits of reduced digital stimulation.
          </p>
          
          <p className="mb-6 text-gray-200">
            Engage in face-to-face social activities that build stronger connections than digital communication allows.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Setting Healthy Boundaries</h2>
          
          <p className="mb-6 text-gray-200">
            Establish specific times for checking emails and social media rather than responding to notifications immediately.
          </p>
          
          <p className="mb-6 text-gray-200">
            Communicate your availability to others, letting them know when you're offline and unavailable.
          </p>
          
          <p className="mb-6 text-gray-200">
            Disable non-essential notifications to reduce interruptions and regain control over your attention.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusion</h2>
          
          <p className="mb-6 text-gray-200">
            A digital detox doesn't mean rejecting technology entirely, but rather developing a more intentional relationship with digital devices that serves your well-being. The goal is to use technology consciously rather than reactively, ensuring that it enhances rather than detracts from your quality of life.
          </p>
          
          <p className="mb-6 text-gray-200">
            Start with small experiments to see how reducing digital input affects your mood, energy, and focus. Use these insights to develop sustainable practices that work for your lifestyle and needs.
          </p>
          
          <p className="mb-6 text-gray-200">
            Remember that the purpose of a digital detox is to create space for more meaningful experiences and connections. The benefits experienced during a detox can guide you toward a more balanced approach to technology use that supports your overall wellness.
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