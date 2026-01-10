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
    { title: "Workflow Optimization: Streamlining Daily Tasks", slug: "/blog/workflow-optimization-streamlining-tasks" },
    { title: "Time Blocking Mastery: Maximizing Focus and Output", slug: "/blog/time-blocking-mastery-maximizing-focus" },
    { title: "Pomodoro Technique: Optimized Work Sessions", slug: "/blog/pomodoro-technique-optimized-work-sessions" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Goal Setting: SMART Objectives Achievement - Productivity Guide</title>
        <meta name="description" content="Framework for setting and accomplishing meaningful goals efficiently using the SMART goal methodology." />
        <link rel="canonical" href="https://www.hamblogs.tech/blog/goal-setting-smart-objectives-achievement" />
        <meta property="og:title" content="Goal Setting: SMART Objectives Achievement" />
        <meta property="og:description" content="Framework for setting and accomplishing meaningful goals efficiently using the SMART goal methodology." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.hamblogs.tech/blog/goal-setting-smart-objectives-achievement" />
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
                Productivity
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Goal Setting: SMART Objectives Achievement
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
              January 2, 2026
            </div>
          </div>
        </header>

        <main className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="lead text-xl text-gray-200 mb-8">
              Effective goal setting is the bridge between dreams and reality. Without clear, well-defined objectives, efforts become scattered and progress stagnates. The SMART goal framework provides a systematic approach to creating goals that are Specific, Measurable, Achievable, Relevant, and Time-bound, dramatically increasing your chances of success.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Understanding SMART Goals</h2>
            <p>
              The SMART acronym, originally introduced by George Doran in 1981, stands for:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Specific:</strong> Clear and unambiguous about what you want to accomplish</li>
              <li><strong>Measurable:</strong> Quantifiable so you can track progress</li>
              <li><strong>Achievable:</strong> Realistic and attainable given your resources</li>
              <li><strong>Relevant:</strong> Aligned with your broader values and objectives</li>
              <li><strong>Time-bound:</strong> Has a deadline for completion</li>
            </ul>

            <p>
              This framework transforms vague aspirations into actionable plans that provide direction and motivation.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Breaking Down Each SMART Component</h2>
            <p>
              Let's examine each element in detail:
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Specific</h3>
            <p>
              Vague goals like "get in shape" or "be more productive" lack the clarity needed for action. Specific goals answer the five W's:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Who is involved?</li>
              <li>What do I want to accomplish?</li>
              <li>Where will it happen?</li>
              <li>When will it happen?</li>
              <li>Why is this goal important?</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Measurable</h3>
            <p>
              Include concrete criteria for measuring progress. Numbers provide objective feedback on your advancement. Instead of "read more," aim to "read 30 pages per day" or "finish 12 books this year."
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Achievable</h3>
            <p>
              While goals should stretch you, they must remain realistic. Consider your current skills, resources, and constraints. An achievable goal motivates you to act while remaining grounded in reality.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Relevant</h3>
            <p>
              Ensure your goals align with your broader life vision and values. A relevant goal matters to you and fits with other goals you have set. Ask yourself: Does this goal matter? Is it the right time?
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Time-bound</h3>
            <p>
              Set a deadline to create urgency and prevent indefinite postponement. Time-bound goals include specific dates, weeks, or months for completion.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Creating SMART Goals: A Practical Approach</h2>
            <p>
              Follow this step-by-step process to create effective goals:
            </p>

            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li><strong>Start with your vision:</strong> Define your long-term objectives</li>
              <li><strong>Break down large goals:</strong> Divide big goals into smaller, manageable pieces</li>
              <li><strong>Apply SMART criteria:</strong> Evaluate each goal against all five criteria</li>
              <li><strong>Refine as needed:</strong> Adjust elements that don't meet SMART standards</li>
              <li><strong>Write them down:</strong> Document your goals for accountability</li>
            </ol>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Examples of SMART vs. Non-SMART Goals</h2>
            <p>
              Comparing examples illustrates the power of the framework:
            </p>

            <div className="grid grid-cols-2 gap-4 my-6 p-6 bg-white/5 rounded-lg">
              <div className="border border-white/20 p-4 rounded">
                <h3 className="font-bold text-red-400 mb-2">Non-SMART</h3>
                <p className="text-sm">"I want to get better at my job"</p>
              </div>
              <div className="border border-white/20 p-4 rounded">
                <h3 className="font-bold text-green-400 mb-2">SMART</h3>
                <p className="text-sm">"I will complete a professional certification course in my field by March 31st, dedicating 5 hours per week to study"</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 my-6 p-6 bg-white/5 rounded-lg">
              <div className="border border-white/20 p-4 rounded">
                <h3 className="font-bold text-red-400 mb-2">Non-SMART</h3>
                <p className="text-sm">"I want to improve my productivity"</p>
              </div>
              <div className="border border-white/20 p-4 rounded">
                <h3 className="font-bold text-green-400 mb-2">SMART</h3>
                <p className="text-sm">"I will implement time-blocking for my most important tasks every morning from 9-11 AM, Monday through Friday, for the next 8 weeks"</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Advanced Goal Setting Techniques</h2>
            <p>
              Enhance your goal-setting practice with these additional strategies:
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">The Why Ladder</h3>
            <p>
              Drill down into your motivation by repeatedly asking "why" until you reach your core values. This creates deeper commitment to your goals.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Backwards Planning</h3>
            <p>
              Start with your desired outcome and work backwards to identify the steps needed to achieve it. This reveals critical milestones and dependencies.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Implementation Intentions</h3>
            <p>
              Formulate specific if-then plans: "If it's 9 AM, then I will start my most important task." This creates automatic responses to specific situations.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Tracking and Measuring Progress</h2>
            <p>
              Effective goal tracking involves:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Regular check-ins:</strong> Weekly or monthly reviews of your progress</li>
              <li><strong>Quantitative metrics:</strong> Numbers that show advancement toward your goal</li>
              <li><strong>Qualitative assessments:</strong> How you feel about your progress</li>
              <li><strong>Adjustment protocols:</strong> When and how to modify your approach</li>
              <li><strong>Accountability systems:</strong> Sharing goals with others for support</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Common Goal Setting Mistakes</h2>
            <p>
              Avoid these pitfalls that derail goal achievement:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Setting too many goals:</strong> Focus on a few high-impact objectives</li>
              <li><strong>Goals that are too big:</strong> Break large goals into smaller milestones</li>
              <li><strong>Not reviewing regularly:</strong> Check progress consistently</li>
              <li><strong>Perfectionism:</strong> Progress, not perfection, is the goal</li>
              <li><strong>Ignoring obstacles:</strong> Plan for potential challenges</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-10">Goal Adjustment and Flexibility</h2>
            <p>
              Successful goal setting requires adaptability:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Revise timelines when circumstances change</li>
              <li>Modify goals that no longer align with your priorities</li>
              <li>Break down overly ambitious objectives</li>
              <li>Combine related goals to improve focus</li>
              <li>Scale up goals that prove too easy</li>
            </ul>

            <p>
              Remember that goal setting is not a one-time event but an ongoing process of planning, executing, reviewing, and adjusting. The SMART framework provides a solid foundation, but success ultimately depends on consistent action and periodic evaluation.
            </p>
          </div>
        </main>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">About Goal Achievement</h3>
          <p className="text-gray-300 mb-4">
            Effective goal setting is a skill that improves with practice. The SMART framework provides a proven structure for creating goals that are more likely to be achieved, but success also depends on consistent execution and regular review.
          </p>
          <p className="text-gray-300">
            The most important goal is the one you actually work toward consistently.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
          <div className="space-y-4">
            <Link href="/blog/time-blocking-mastery-maximizing-focus" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-yellow-400">Time Blocking Mastery: Maximizing Focus and Output</h4>
              <p className="text-gray-300">Learn how to structure your day for peak performance using time-blocking techniques.</p>
            </Link>
            <Link href="/blog/priority-frameworks-eisenhower-matrix" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-yellow-400">Priority Frameworks: Eisenhower Matrix and Beyond</h4>
              <p className="text-gray-300">Discover proven systems for distinguishing urgent from important tasks.</p>
            </Link>
            <Link href="/blog/habit-stacking-building-productive-routines" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-semibold text-yellow-400">Habit Stacking: Building Productive Routines</h4>
              <p className="text-gray-300">Learn how to chain positive behaviors for compound productivity gains.</p>
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