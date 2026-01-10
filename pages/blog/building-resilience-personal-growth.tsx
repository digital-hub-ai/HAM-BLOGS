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
        title: 'Digital Detox: Benefits and Strategies',
        slug: 'digital-detox-benefits-and-strategies',
        excerpt: 'Reclaiming mental space by reducing digital overload...'
      },
      {
        id: '3',
        title: 'Mindfulness Meditation: Beginner\'s Guide',
        slug: 'mindfulness-meditation-beginners-guide',
        excerpt: 'Essential techniques for developing a sustainable meditation practice...'
      }
    ];
    
    // Randomly select 2 articles
    const shuffled = [...allArticles].sort(() => 0.5 - Math.random());
    setRelatedArticles(shuffled.slice(0, 2));
  }, [router]);

  const toggleBookmark = () => {
    const articleData = {
      id: Math.random().toString(36).substr(2, 9),
      title: 'Building Resilience Through Personal Growth',
      slug: router.pathname.split('/').pop(),
      date: '2026-01-01',
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
        <title>Building Resilience Through Personal Growth | Premium Blog Platform</title>
        <meta name="description" content="Developing emotional strength and adaptability for life challenges" />
        <link rel="canonical" href="https://www.premiumblogplatform.com/blog/building-resilience-personal-growth" />
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
            Building Resilience Through Personal Growth
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-400 text-sm mb-6">
            <span className="mr-4">January 1, 2026</span>
            <span>9 min read</span>
          </div>
        </header>

        <main className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Resilience is the ability to bounce back from adversity, adapt to challenging circumstances, and maintain mental and emotional well-being during difficult times. It's not about avoiding stress or hardship, but rather developing the inner strength and adaptive skills necessary to navigate life's inevitable challenges with grace and wisdom. Building resilience is an ongoing process that involves cultivating emotional intelligence, developing coping strategies, and fostering a growth mindset that sees setbacks as opportunities for learning and development. Personal growth and resilience are deeply interconnected—each challenge overcome strengthens your capacity to handle future difficulties, creating a positive cycle of increasing emotional strength and adaptability.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Understanding Resilience</h2>
          
          <p className="mb-6 text-gray-200">
            Resilience is not a fixed trait but a set of skills and behaviors that can be developed and strengthened over time. Like a muscle, resilience grows stronger through appropriate challenge and practice. People who demonstrate high resilience often share common characteristics: they maintain a realistic yet hopeful outlook, possess strong problem-solving skills, maintain meaningful relationships, and have a sense of purpose that helps them persevere through difficulties.
          </p>
          
          <p className="mb-6 text-gray-200">
            It's important to understand that resilient people still experience stress, sadness, and fear during difficult times. The difference lies in their ability to process these emotions effectively and take constructive action despite their challenges.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Developing Emotional Regulation Skills</h2>
          
          <p className="mb-6 text-gray-200">
            The ability to manage emotions effectively is a cornerstone of resilience. This involves recognizing emotions as they arise, understanding their triggers, and choosing appropriate responses rather than reacting impulsively. Emotional regulation doesn't mean suppressing feelings but rather acknowledging them and deciding how to express them constructively.
          </p>
          
          <p className="mb-6 text-gray-200">
            Practice mindfulness techniques to observe your emotional responses without immediately acting on them. This creates space between the feeling and the response, allowing for more thoughtful action. Regular meditation, deep breathing exercises, or journaling can strengthen emotional regulation skills.
          </p>
          
          <p className="mb-6 text-gray-200">
            Develop a vocabulary for emotions that goes beyond basic terms like "happy" or "sad." The more precisely you can identify and label your emotions, the better equipped you are to address them appropriately.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Building Strong Support Networks</h2>
          
          <p className="mb-6 text-gray-200">
            Meaningful relationships provide crucial emotional support during challenging times and contribute to overall well-being. Resilient people often have diverse support networks including family, friends, colleagues, and mentors who can provide different types of assistance.
          </p>
          
          <p className="mb-6 text-gray-200">
            Invest in relationships during good times so that support is available when needed. This means being present for others, maintaining regular contact, and being willing to both give and receive support.
          </p>
          
          <p className="mb-6 text-gray-200">
            Don't hesitate to seek professional support when facing significant challenges. Therapists, counselors, and coaches can provide specialized guidance and support that friends and family may not be able to offer.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Cultivating a Growth Mindset</h2>
          
          <p className="mb-6 text-gray-200">
            A growth mindset views challenges and failures as opportunities for learning and development rather than evidence of inadequacy. This perspective transforms setbacks into valuable experiences that contribute to personal growth and future success.
          </p>
          
          <p className="mb-6 text-gray-200">
            Reframe challenges by asking "What can I learn from this experience?" or "How might this setback lead to unexpected opportunities?" This shift in perspective can reduce the emotional impact of difficulties and help identify actionable steps forward.
          </p>
          
          <p className="mb-6 text-gray-200">
            Embrace the concept of "failing forward"—viewing mistakes and setbacks as necessary steps in the learning process rather than evidence of failure. This approach reduces fear of taking calculated risks and pursuing meaningful goals.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Developing Problem-Solving Skills</h2>
          
          <p className="mb-6 text-gray-200">
            Resilient people approach challenges systematically, breaking large problems into smaller, manageable components. This analytical approach prevents feeling overwhelmed and identifies concrete steps that can be taken immediately.
          </p>
          
          <p className="mb-6 text-gray-200">
            Practice brainstorming multiple solutions to problems rather than fixating on the first idea that comes to mind. Sometimes the best solution isn't the most obvious one, and considering alternatives increases the likelihood of finding an effective approach.
          </p>
          
          <p className="mb-6 text-gray-200">
            Focus on factors within your control rather than expending energy on circumstances you cannot change. This redirects energy toward productive action and reduces feelings of helplessness.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Maintaining Perspective</h2>
          
          <p className="mb-6 text-gray-200">
            Resilient people can zoom out to see challenges within the broader context of their lives. This perspective helps distinguish between urgent problems that require immediate attention and those that will resolve themselves over time.
          </p>
          
          <p className="mb-6 text-gray-200">
            Develop practices that remind you of your core values and long-term goals. When facing difficulties, connecting with your deeper sense of purpose can provide motivation to persevere and maintain perspective.
          </p>
          
          <p className="mb-6 text-gray-200">
            Keep a record of past challenges you've overcome. Reviewing these experiences during difficult times reminds you of your capability to navigate difficulties and provides insight into effective strategies you've used before.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Self-Care and Recovery</h2>
          
          <p className="mb-6 text-gray-200">
            Building resilience requires adequate recovery time between stressful events. This means prioritizing sleep, nutrition, exercise, and activities that restore your mental and physical energy.
          </p>
          
          <p className="mb-6 text-gray-200">
            Recognize that building resilience is a gradual process that requires patience with yourself. Don't expect to be equally strong in every situation, and acknowledge that some challenges require more time and support to navigate effectively.
          </p>
          
          <p className="mb-6 text-gray-200">
            Develop a toolkit of stress-relief techniques that you can draw upon during challenging times. Having multiple options ensures that you can adapt your approach based on the situation and your current needs.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusion</h2>
          
          <p className="mb-6 text-gray-200">
            Building resilience is a lifelong journey that involves developing skills, habits, and perspectives that strengthen your ability to navigate life's challenges. The process itself contributes to personal growth, creating a positive cycle where increased resilience enables you to take on greater challenges, which in turn builds even greater resilience.
          </p>
          
          <p className="mb-6 text-gray-200">
            Remember that resilience isn't about being unaffected by difficulties but about developing the capacity to move through challenges with grace and emerge stronger. Everyone's path to resilience is unique, so experiment with different strategies and approaches to find what works best for your personality and circumstances.
          </p>
          
          <p className="mb-6 text-gray-200">
            The investment in building resilience pays dividends not only during difficult times but also in everyday life, enhancing your overall well-being, relationships, and ability to pursue meaningful goals with confidence and determination.
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