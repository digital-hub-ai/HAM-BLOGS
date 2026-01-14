import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SettingBoundariesAndLearningToSayNo() {
  const router = useRouter();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Head>
        <title>Setting Boundaries and Learning to Say No | Ham Blogs</title>
        <meta name="description" content="Protecting your mental health by establishing healthy boundaries in personal and professional life." />
        <link rel="canonical" href="https://ham-blogs.vercel.app/blog/setting-boundaries-and-learning-to-say-no" />
      </Head>

      <article className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-10">
          <nav className="mb-6">
            <Link href="/" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/blog" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">Blog</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/category/wellness" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">Wellness</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/category/wellness/stress-management" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">Stress Management</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">Setting Boundaries and Learning to Say No</span>
          </nav>
          
          <div className="flex justify-between items-start">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Setting Boundaries and Learning to Say No</h1>
            
            <button 
              onClick={toggleBookmark}
              className={`p-2 rounded-full ${isBookmarked ? 'text-yellow-500' : 'text-gray-400'} hover:bg-gray-100 transition-colors duration-200`}
              aria-label={isBookmarked ? "Remove bookmark" : "Bookmark this article"}
            >
              {isBookmarked ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg>
              )}
            </button>
          </div>
          
          <div className="flex flex-wrap items-center text-gray-600 mb-6">
            <span className="mr-4">📅 March 11, 2026</span>
            <span className="mr-4">⏱️ 9 min read</span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Wellness</span>
            <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm ml-2">Stress Management</span>
            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm ml-2">Boundaries</span>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <img 
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Person setting healthy boundaries"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-600 italic">Establishing healthy boundaries to protect your mental health and reduce stress</p>
        </div>

        <div className="prose prose-lg prose-indigo max-w-none">
          <p className="text-xl text-gray-700 mb-6">
            In our interconnected world, the pressure to be constantly available and agreeable 
            can feel overwhelming. Many people struggle with saying no to requests, leading to 
            overcommitment, stress, and burnout. Setting healthy boundaries and learning to say 
            no are essential skills for protecting your mental health, maintaining relationships, 
            and achieving a balanced life. Boundaries are not walls meant to keep people out; 
            they are guidelines that define how you want to be treated and what you're willing 
            to take on. When properly established, boundaries actually improve relationships 
            and reduce stress for everyone involved.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Understanding Boundaries</h2>
          <p className="text-gray-700 mb-6">
            Boundaries are invisible lines that define where you end and others begin. They 
            encompass your physical space, time, emotions, and responsibilities:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Types of Boundaries</h3>
          <p className="text-gray-700 mb-4">
            Different areas of your life require different types of boundaries:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li className="text-gray-700"><strong>Physical boundaries:</strong> Personal space, physical touch, and privacy preferences</li>
            <li className="text-gray-700"><strong>Emotional boundaries:</strong> Protecting your feelings and not taking on others' emotions</li>
            <li className="text-gray-700"><strong>Time boundaries:</strong> How you allocate your time and energy</li>
            <li className="text-gray-700"><strong>Material boundaries:</strong> Personal possessions and financial limits</li>
            <li className="text-gray-700"><strong>Mental boundaries:</strong> Respecting your thoughts, opinions, and values</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">The Boundary Spectrum</h3>
          <p className="text-gray-700 mb-4">
            People tend to fall into three categories regarding boundaries:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700"><strong>Rigid boundaries:</strong> Walls that prevent healthy connection and intimacy</li>
            <li className="text-gray-700"><strong>Flexible boundaries:</strong> Healthy boundaries that adapt to different relationships and situations</li>
            <li className="text-gray-700"><strong>Loose boundaries:</strong> Porous boundaries that allow others to easily overstep</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Connection Between Boundaries and Stress</h2>
          <p className="text-gray-700 mb-4">
            Weak or absent boundaries contribute significantly to stress in multiple ways:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Overcommitment</h3>
          <p className="text-gray-700 mb-4">
            Without boundaries, you may take on too many responsibilities, leading to 
            overwhelm, exhaustion, and inability to fulfill commitments effectively. 
            This creates a cycle of stress and guilt.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Loss of Control</h3>
          <p className="text-gray-700 mb-4">
            When others consistently cross your boundaries, you lose control over your time, 
            energy, and decisions, leading to feelings of helplessness and stress.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Resentment</h3>
          <p className="text-gray-700 mb-4">
            Continuously saying yes when you want to say no creates resentment toward others 
            and yourself, damaging relationships and mental health.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Identifying Your Boundaries</h2>
          <p className="text-gray-700 mb-4">
            Before you can set boundaries, you need to identify what matters to you:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Self-Assessment</h3>
          <p className="text-gray-700 mb-4">
            Reflect on these questions to understand your boundaries:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li className="text-gray-700">What situations consistently make me feel drained or uncomfortable?</li>
            <li className="text-gray-700">What are my core values and non-negotiables?</li>
            <li className="text-gray-700">How do I prefer to be treated by others?</li>
            <li className="text-gray-700">What activities energize me versus deplete me?</li>
            <li className="text-gray-700">What level of communication do I need in relationships?</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Warning Signs</h3>
          <p className="text-gray-700 mb-4">
            Pay attention to signs that your boundaries are being crossed:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700">Feeling exhausted after interactions</li>
            <li className="text-gray-700">Having to repeatedly explain or defend your decisions</li>
            <li className="text-gray-700">Feeling guilty for taking care of yourself</li>
            <li className="text-gray-700">Being unavailable for the people and activities you value</li>
            <li className="text-gray-700">Feeling angry, resentful, or taken advantage of</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Setting Boundaries Effectively</h2>
          <p className="text-gray-700 mb-4">
            Setting boundaries requires clear communication and consistency:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Be Direct and Clear</h3>
          <p className="text-gray-700 mb-4">
            State your boundaries in a clear, non-apologetic manner. Use "I" statements to 
            express your needs without blaming others. For example: "I need to leave work 
            by 6 PM to spend time with my family" rather than "My spouse gets upset when 
            I work late."
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Be Consistent</h3>
          <p className="text-gray-700 mb-4">
            Apply your boundaries consistently across similar situations. Inconsistency 
            confuses others and weakens your boundaries. If you say you don't take work 
            calls after hours, stick to that boundary.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Offer Alternatives</h3>
          <p className="text-gray-700 mb-4">
            When setting boundaries, suggest alternatives when possible. For example: 
            "I can't take on that project right now, but I can recommend someone else 
            who might be able to help" or "I can't attend the meeting at 7 AM, but I 
            can join virtually if it's recorded."
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Mastering the Art of Saying No</h2>
          <p className="text-gray-700 mb-4">
            Saying no is a crucial skill that protects your time and energy:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">The Simple No</h3>
          <p className="text-gray-700 mb-4">
            Often, a simple "No, thank you" or "I can't do that" is sufficient. 
            You don't owe anyone lengthy explanations for declining requests.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">The Empathetic No</h3>
          <p className="text-gray-700 mb-4">
            Acknowledge the request while maintaining your boundary: "I understand this 
            is important to you, but I'm unable to commit to this right now."
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">The Deflecting No</h3>
          <p className="text-gray-700 mb-4">
            Redirect to someone else when appropriate: "That's not something I can 
            take on, but I can connect you with someone who might be able to help."
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Boundary Setting in Different Contexts</h2>
          <p className="text-gray-700 mb-4">
            Boundaries need to be adapted for different areas of life:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Workplace Boundaries</h3>
          <p className="text-gray-700 mb-4">
            In professional settings, boundaries might include:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li className="text-gray-700">Response time expectations for emails and messages</li>
            <li className="text-gray-700">Availability outside of work hours</li>
            <li className="text-gray-700">Acceptable workload and project scope</li>
            <li className="text-gray-700">Personal topics that are appropriate to discuss</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Family and Friend Boundaries</h3>
          <p className="text-gray-700 mb-4">
            With loved ones, boundaries might involve:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li className="text-gray-700">Financial support expectations</li>
            <li className="text-gray-700">Time spent together versus alone time</li>
            <li className="text-gray-700">Involvement in personal decisions</li>
            <li className="text-gray-700">Topics that are off-limits for discussion</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Digital Boundaries</h3>
          <p className="text-gray-700 mb-4">
            In our connected world, digital boundaries are crucial:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700">Response time expectations for messages</li>
            <li className="text-gray-700">Sharing personal information online</li>
            <li className="text-gray-700">Social media interaction patterns</li>
            <li className="text-gray-700">Screen time limits for yourself and family</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Dealing with Pushback</h2>
          <p className="text-gray-700 mb-4">
            When you start setting boundaries, you may encounter resistance:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Guilting and Manipulation</h3>
          <p className="text-gray-700 mb-4">
            Some people may try to guilt you into abandoning your boundaries. 
            Stay firm in your decisions and remember that you're not responsible 
            for others' reactions to your healthy choices.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Testing Period</h3>
          <p className="text-gray-700 mb-4">
            Others may test your new boundaries to see if you'll enforce them. 
            Remain consistent and follow through with consequences when boundaries 
            are crossed.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Adjustment Period</h3>
          <p className="text-gray-700 mb-4">
            Relationships may shift as you implement boundaries. Some people may 
            appreciate clearer expectations, while others may initially resist 
            the changes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Maintaining Your Boundaries</h2>
          <p className="text-gray-700 mb-4">
            Setting boundaries is an ongoing process:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700">Regularly evaluate and adjust boundaries as your life changes</li>
            <li className="text-gray-700">Practice self-compassion when enforcing boundaries feels difficult</li>
            <li className="text-gray-700">Seek support from others who respect your boundaries</li>
            <li className="text-gray-700">Remember that boundaries protect both you and others</li>
            <li className="text-gray-700">Reassess and reinforce boundaries that become weakened over time</li>
          </ul>

          <p className="text-gray-700 mt-8">
            Remember that setting boundaries and saying no are skills that require practice. 
            Start with smaller, less consequential situations and gradually work up to more 
            significant boundary-setting moments. The goal isn't to be selfish or hurtful, 
            but rather to create healthy, respectful relationships that honor your needs 
            and limitations. When you consistently maintain appropriate boundaries, you'll 
            find that you have more energy, time, and emotional capacity for the things 
            and people that truly matter to you. This leads to reduced stress, improved 
            relationships, and greater overall well-being.
          </p>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="mb-4 sm:mb-0">
              <h3 className="font-semibold text-gray-900 mb-2">Categories:</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Wellness</span>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Stress Management</span>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Boundaries</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Communication</span>
              </div>
            </div>
            <button 
              onClick={() => router.back()}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              Back to Previous Page
            </button>
          </div>
        </footer>
      </article>
    </div>
  );
}