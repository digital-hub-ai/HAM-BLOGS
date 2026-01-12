import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function CognitiveBehavioralTechniques() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Cognitive Behavioral Techniques - HAM BLOGS</title>
        <meta name="description" content="Practical CBT strategies for changing thought patterns" />
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
                Cognitive Behavioral Techniques
              </h1>
              <div className="flex items-center text-gray-400">
                <span className="mr-6">January 5, 2026</span>
                <span>8 min read</span>
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
              Practical CBT strategies for changing thought patterns. Cognitive Behavioral Therapy (CBT) is an evidence-based approach that helps people identify and change negative thought patterns and behaviors. The core principle is that our thoughts, feelings, and behaviors are interconnected, and by changing one, we can influence the others. CBT techniques can be practiced independently and are effective for managing anxiety, depression, and stress.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Identifying Negative Thought Patterns</h2>
            <p className="text-gray-300 leading-relaxed">
              The first step in CBT is recognizing unhelpful thinking patterns. Common cognitive distortions include catastrophizing (assuming the worst outcome), all-or-nothing thinking, overgeneralization, and mind reading. These distorted thoughts often feel true but are exaggerated or inaccurate. Keeping a thought record can help identify patterns and triggers for negative thinking.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Challenging Negative Thoughts</h2>
            <p className="text-gray-300 leading-relaxed">
              Once you've identified negative thoughts, examine them objectively. Ask: "Is this thought accurate? What evidence supports or contradicts it? Am I considering all possibilities or just the worst-case scenario?" Look for more balanced and realistic ways to interpret situations. Instead of "I'll never be able to do this," try "This is challenging, but I can learn and improve with practice."
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Behavioral Experiments</h2>
            <p className="text-gray-300 leading-relaxed">
              Test your negative predictions by conducting behavioral experiments. If you think "Everyone will judge me if I speak up in meetings," try speaking up and observe what actually happens. Often, our fears are exaggerated. This approach helps gather real evidence about the accuracy of our anxious predictions and builds confidence in challenging situations.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Activity Scheduling and Graded Exposure</h2>
            <p className="text-gray-300 leading-relaxed">
              Depression and anxiety often lead to avoidance of activities that used to bring pleasure or a sense of accomplishment. Activity scheduling involves planning enjoyable or meaningful activities, even when motivation is low. Graded exposure gradually increases engagement in avoided activities, starting with less challenging steps and building up to more difficult ones.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Thought Records and Behavioral Activation</h2>
            <p className="text-gray-300 leading-relaxed">
              Thought records are worksheets that help track situations, emotions, and thoughts to identify patterns. They typically include columns for the situation, emotions felt, thoughts that occurred, evidence for and against the thoughts, and a more balanced thought. Behavioral activation involves scheduling pleasant activities and daily accomplishments to counteract depression and build positive momentum.
            </p>

            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
              <p className="text-gray-300">
                CBT techniques require practice and patience to master. Start with one technique, such as thought challenging, and gradually incorporate others. Consistent practice of these techniques can lead to lasting changes in thought patterns and emotional well-being.
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