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
        title: 'Sleep Hygiene: Improving Rest Quality',
        slug: 'sleep-hygiene-improving-rest-quality',
        excerpt: 'Strategies for achieving deeper, more restorative sleep...'
      },
      {
        id: '3',
        title: 'Physical Fitness: Integrating Into Daily Life',
        slug: 'physical-fitness-integrating-into-daily-life',
        excerpt: 'Simple exercises and movement practices for busy schedules...'
      }
    ];
    
    // Randomly select 2 articles
    const shuffled = [...allArticles].sort(() => 0.5 - Math.random());
    setRelatedArticles(shuffled.slice(0, 2));
  }, [router]);

  const toggleBookmark = () => {
    const articleData = {
      id: Math.random().toString(36).substr(2, 9),
      title: 'Nutritional Wellness: Balanced Eating Habits',
      slug: router.pathname.split('/').pop(),
      date: '2026-01-05',
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
        <title>Nutritional Wellness: Balanced Eating Habits | Premium Blog Platform</title>
        <meta name="description" content="Developing sustainable approaches to healthy eating" />
        <link rel="canonical" href="https://www.premiumblogplatform.com/blog/nutritional-wellness-balanced-eating-habits" />
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
            Nutritional Wellness: Balanced Eating Habits
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-400 text-sm mb-6">
            <span className="mr-4">January 5, 2026</span>
            <span>9 min read</span>
          </div>
        </header>

        <main className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Nutritional wellness extends far beyond restrictive diets or following the latest food trends. It encompasses a holistic approach to eating that nourishes the body, supports mental health, and fits seamlessly into your lifestyle. Sustainable nutritional wellness involves developing a healthy relationship with food that provides adequate nutrients while allowing for flexibility and enjoyment. The key is finding balance between nutrient-dense foods and occasional indulgences, understanding that food serves multiple purposes beyond mere sustenance—it's a source of pleasure, social connection, and cultural expression. Modern nutritional science emphasizes the importance of whole foods, adequate hydration, and mindful eating practices that support both physical health and psychological well-being.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Understanding Macronutrients</h2>
          
          <p className="mb-6 text-gray-200">
            Carbohydrates, proteins, and fats each play essential roles in maintaining optimal health. Carbohydrates serve as the body's primary energy source, with complex carbohydrates from whole grains, fruits, and vegetables providing sustained energy and important fiber. Simple carbohydrates should be consumed in moderation, focusing on natural sources like fruits rather than processed sugars.
          </p>
          
          <p className="mb-6 text-gray-200">
            Proteins provide amino acids necessary for muscle repair, enzyme production, and hormone synthesis. Aim for a variety of protein sources including lean meats, fish, legumes, nuts, seeds, and dairy. Plant-based proteins offer additional fiber and micronutrients while animal proteins provide complete amino acid profiles.
          </p>
          
          <p className="mb-6 text-gray-200">
            Fats are essential for hormone production, cell membrane integrity, and absorption of fat-soluble vitamins. Focus on healthy fats from sources like avocados, nuts, seeds, olive oil, and fatty fish while limiting trans fats and moderating saturated fat intake.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Building Balanced Meals</h2>
          
          <p className="mb-6 text-gray-200">
            The plate method offers a simple approach to balanced eating. Fill half your plate with colorful vegetables and fruits, one quarter with lean protein, and one quarter with complex carbohydrates. This visual guide helps ensure you're getting a variety of nutrients at each meal.
          </p>
          
          <p className="mb-6 text-gray-200">
            Variety is crucial for nutritional wellness. Different colored fruits and vegetables provide different vitamins, minerals, and antioxidants. Rotating your food choices ensures you're getting a wide range of nutrients while preventing dietary boredom.
          </p>
          
          <p className="mb-6 text-gray-200">
            Portion control is important but doesn't have to involve measuring or counting. Learn to recognize appropriate portion sizes using visual cues like comparing protein portions to a deck of cards or carbohydrate portions to a tennis ball.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Hydration and Its Importance</h2>
          
          <p className="mb-6 text-gray-200">
            Water is essential for nearly every bodily function, from temperature regulation to joint lubrication to waste removal. The general recommendation is about 8 cups of water daily, though individual needs vary based on activity level, climate, and overall health.
          </p>
          
          <p className="mb-6 text-gray-200">
            Other hydrating beverages like herbal teas, milk, and water-rich foods contribute to overall fluid intake. However, be mindful of added sugars in many beverages that can contribute unnecessary calories.
          </p>
          
          <p className="mb-6 text-gray-200">
            Signs of dehydration include fatigue, headaches, and decreased cognitive function. By the time you feel thirsty, you may already be mildly dehydrated, so aim to drink water consistently throughout the day.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Mindful Eating Practices</h2>
          
          <p className="mb-6 text-gray-200">
            Mindful eating involves paying attention to hunger and satiety cues, eating slowly, and savoring the flavors, textures, and aromas of food. This practice helps prevent overeating and increases satisfaction with meals.
          </p>
          
          <p className="mb-6 text-gray-200">
            Eliminate distractions while eating when possible. Turn off screens and focus on the experience of eating. This allows you to better recognize when you're satisfied and can help prevent overconsumption.
          </p>
          
          <p className="mb-6 text-gray-200">
            Eating slowly gives your brain time to register fullness, which takes about 20 minutes. Chew food thoroughly and put utensils down between bites to slow down your eating pace.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Meal Planning and Preparation</h2>
          
          <p className="mb-6 text-gray-200">
            Planning meals and snacks in advance helps ensure you have nutritious options available when hunger strikes. This prevents reliance on less healthy convenience foods when time is limited.
          </p>
          
          <p className="mb-6 text-gray-200">
            Batch cooking or preparing ingredients in advance can save time during busy weekdays. Wash and cut vegetables, cook grains, or prepare proteins in larger quantities to use throughout the week.
          </p>
          
          <p className="mb-6 text-gray-200">
            Keep healthy snacks readily available to prevent reaching for less nutritious options. Nuts, fruit, yogurt, or vegetables with hummus can bridge the gap between meals.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Addressing Emotional Eating</h2>
          
          <p className="mb-6 text-gray-200">
            Recognizing the difference between physical hunger and emotional hunger is crucial for nutritional wellness. Emotional eating often occurs in response to stress, boredom, or other emotions rather than true hunger.
          </p>
          
          <p className="mb-6 text-gray-200">
            Develop alternative coping strategies for emotions that don't involve food. This might include taking a walk, calling a friend, journaling, or practicing deep breathing exercises.
          </p>
          
          <p className="mb-6 text-gray-200">
            If you find yourself eating for emotional reasons, pause and ask yourself what you're really feeling. Address the underlying emotion directly rather than masking it with food.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Flexibility and Moderation</h2>
          
          <p className="mb-6 text-gray-200">
            Restrictive eating patterns often lead to binge eating or unhealthy relationships with food. Instead, adopt a flexible approach that allows for occasional treats while maintaining overall healthy patterns.
          </p>
          
          <p className="mb-6 text-gray-200">
            The 80/20 rule suggests eating nutrient-dense foods about 80% of the time while allowing for flexibility and enjoyment the remaining 20%. This approach is more sustainable than perfectionist eating patterns.
          </p>
          
          <p className="mb-6 text-gray-200">
            Remember that one meal or one day of eating doesn't define your overall nutritional wellness. Focus on patterns over time rather than individual instances of eating.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusion</h2>
          
          <p className="mb-6 text-gray-200">
            Nutritional wellness is a lifelong journey that requires patience, self-compassion, and flexibility. The goal is to develop sustainable habits that support your health while allowing for enjoyment and social connection. There's no one-size-fits-all approach to nutrition, so experiment with different strategies to find what works best for your body, lifestyle, and preferences.
          </p>
          
          <p className="mb-6 text-gray-200">
            Remember that small, consistent changes are more effective than dramatic overhauls. Focus on adding nutritious foods rather than restricting foods, and listen to your body's unique needs and signals. Over time, these practices will become natural habits that support your overall well-being.
          </p>
          
          <p className="mb-6 text-gray-200">
            If you have specific health conditions or dietary restrictions, consider consulting with a registered dietitian who can provide personalized guidance that takes your individual needs into account. Professional guidance can be particularly valuable when navigating complex dietary requirements or health goals.
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