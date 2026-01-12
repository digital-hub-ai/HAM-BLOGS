import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SocialConnectionsMentalWellness() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Social Connections and Mental Wellness - HAM BLOGS</title>
        <meta name="description" content="The importance of relationships for psychological health" />
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
                Social Connections and Mental Wellness
              </h1>
              <div className="flex items-center text-gray-400">
                <span className="mr-6">January 3, 2026</span>
                <span>6 min read</span>
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
              The importance of relationships for psychological health. Humans are fundamentally social beings, and meaningful relationships are crucial for mental health and well-being. Strong social connections provide emotional support, reduce stress, and contribute to a sense of belonging and purpose. Research consistently shows that people with strong social ties live longer, healthier lives and have better mental health outcomes.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Science of Social Connection</h2>
            <p className="text-gray-300 leading-relaxed">
              Social connection activates the parasympathetic nervous system, which helps reduce stress hormones like cortisol. Oxytocin, often called the "bonding hormone," is released during positive social interactions and helps reduce anxiety and stress. Loneliness, on the other hand, has been linked to increased inflammation, higher risk of depression, and a greater likelihood of developing cognitive decline.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Quality vs. Quantity</h2>
            <p className="text-gray-300 leading-relaxed">
              The quality of relationships matters more than the quantity. Having a few close, supportive relationships is more beneficial than many superficial connections. Quality relationships involve mutual respect, trust, and genuine care for each other's well-being. These relationships provide emotional support during difficult times and shared joy during positive experiences.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Building and Maintaining Connections</h2>
            <p className="text-gray-300 leading-relaxed">
              Make time for relationships by scheduling regular check-ins with loved ones. Practice active listening and show genuine interest in others' experiences. Be vulnerable and share appropriately about your own experiences to deepen connections. Express gratitude and appreciation regularly. Offer support to others, which strengthens bonds and provides a sense of purpose. Be reliable and follow through on commitments to build trust.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Community and Belonging</h2>
            <p className="text-gray-300 leading-relaxed">
              Participating in community activities, volunteer work, religious or spiritual groups, or hobby clubs can provide a sense of belonging. These connections don't need to be deeply personal but offer opportunities for regular interaction and shared purpose. Feeling part of something larger than yourself contributes to meaning and mental wellness.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Digital Age Relationships</h2>
            <p className="text-gray-300 leading-relaxed">
              While technology enables us to maintain connections across distances, face-to-face interactions provide the most mental health benefits. Video calls can partially substitute for in-person meetings. Social media can supplement but shouldn't replace real-world interactions. Be mindful of how digital interactions affect your mood and mental state, and adjust accordingly.
            </p>

            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
              <p className="text-gray-300">
                Prioritizing social connections is an investment in your mental health. Make nurturing relationships a priority by investing time and emotional energy in building and maintaining meaningful connections with others.
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