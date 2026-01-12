import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function BuildingResilienceOvercomingAdversity() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Building Resilience and Overcoming Adversity - HAM BLOGS</title>
        <meta name="description" content="Developing mental strength to cope with life challenges" />
      </Head>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8"
        >
          <span className="mr-2">←</span> Back to Mental Health
        </button>

        <article className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm mb-4">
                Mental Health
              </span>
              <h1 className="text-4xl font-bold text-white mb-4">
                Building Resilience and Overcoming Adversity
              </h1>
              <div className="flex items-center text-gray-400">
                <span className="mr-6">January 4, 2026</span>
                <span>7 min read</span>
              </div>
            </div>
            <button
              onClick={toggleBookmark}
              className={`p-2 rounded-full ${bookmarked ? 'text-yellow-400' : 'text-gray-400 hover:text-yellow-400'}`}
            >
              {bookmarked ? '★' : '☆'}
            </button>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              Developing mental strength to cope with life challenges. Resilience is the ability to adapt and bounce back when facing difficulties, adversity, trauma, or stress. It doesn't mean avoiding stress or never experiencing hardship, but rather developing the capacity to cope with challenges and recover from setbacks. Resilience can be built and strengthened over time through intentional practices and mindset shifts.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Understanding Resilience</h2>
            <p className="text-gray-300 leading-relaxed">
              Resilience is not a fixed trait but a set of skills and behaviors that can be developed. People who demonstrate resilience often share certain characteristics: they maintain a hopeful outlook, see change as an opportunity for growth, accept circumstances they cannot control, and focus on things they can influence. They also tend to have strong social connections and engage in self-care practices.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Building Emotional Regulation Skills</h2>
            <p className="text-gray-300 leading-relaxed">
              Emotional regulation is the ability to manage and respond to emotional experiences in a healthy way. Practice identifying and naming emotions without judgment. Develop coping strategies for difficult emotions like deep breathing, mindfulness, or physical activity. Allow yourself to feel emotions without being overwhelmed by them. Creating distance between yourself and your emotions (observing them rather than being consumed by them) can help you respond more effectively to challenges.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Developing a Growth Mindset</h2>
            <p className="text-gray-300 leading-relaxed">
              A growth mindset involves believing that abilities and intelligence can be developed through dedication and hard work. View challenges as opportunities to learn rather than threats to your competence. Reframe failures as learning experiences and focus on the process rather than just outcomes. Embrace feedback as valuable information for improvement. This perspective helps maintain motivation during difficult times and promotes continued learning and growth.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Strengthening Social Connections</h2>
            <p className="text-gray-300 leading-relaxed">
              Strong social support is one of the most important factors in resilience. Maintain relationships with family and friends who provide emotional support. Be willing to both give and receive support. Participate in community groups or activities that align with your values and interests. Having people to talk to during difficult times provides perspective and emotional relief.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Self-Care and Maintaining Perspective</h2>
            <p className="text-gray-300 leading-relaxed">
              Taking care of your physical and mental health strengthens your ability to handle stress. Maintain regular sleep, exercise, and eating habits even during difficult times. Engage in activities that bring you joy and relaxation. Practice gratitude and focus on what is going well in your life. Remind yourself of past challenges you've overcome and the strengths you used to navigate them. Maintaining a broader perspective helps put temporary setbacks in context.
            </p>

            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
              <p className="text-gray-300">
                Resilience is built through practice and the accumulation of small, positive habits. Start by developing one or two resilience skills and gradually add others. Remember that building resilience is an ongoing process, not a destination, and setbacks are part of the journey.
              </p>
            </div>
          </div>
        </article>

        <div className="mt-8 flex justify-between items-center">
          <Link href="/category/health/mental" className="text-yellow-400 hover:text-yellow-300">
            ← More Mental Health Articles
          </Link>
        </div>
      </div>
    </div>
  );
}