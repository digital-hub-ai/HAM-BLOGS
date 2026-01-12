import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function AyurvedicHealingPractices() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Ayurvedic Healing Practices - HAM BLOGS</title>
        <meta name="description" content="The science of life and natural healing" />
      </Head>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8"
        >
          <span className="mr-2">←</span> Back to Alternative Medicine
        </button>

        <article className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm mb-4">
                Alternative Medicine
              </span>
              <h1 className="text-4xl font-bold text-white mb-4">
                Ayurvedic Healing Practices
              </h1>
              <div className="flex items-center text-gray-400">
                <span className="mr-6">January 7, 2026</span>
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
              The science of life and natural healing. Ayurveda, meaning "science of life" in Sanskrit, is a traditional system of medicine from India that dates back thousands of years. It emphasizes balance between body, mind, and spirit to achieve optimal health. Ayurveda categorizes individuals into three primary doshas (body types) - Vata, Pitta, and Kapha - and tailors treatments accordingly. The practice includes dietary guidelines, lifestyle recommendations, herbal remedies, and cleansing procedures.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Three Doshas</h2>
            <p className="text-gray-300 leading-relaxed">
              According to Ayurveda, the three doshas - Vata (air and space), Pitta (fire and water), and Kapha (earth and water) - govern our physical and mental characteristics. Vata types tend to be creative, energetic, and prone to anxiety or digestive issues when imbalanced. Pitta types are often intense, ambitious, and may experience inflammation or anger when out of balance. Kapha types are typically calm, grounded, and may struggle with weight gain or congestion when imbalanced.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Ayurvedic Diet and Nutrition</h2>
            <p className="text-gray-300 leading-relaxed">
              Ayurvedic nutrition emphasizes eating according to your dosha and the season. Foods are classified by taste (sweet, sour, salty, pungent, bitter, astringent) and their effect on each dosha. For example, warm, cooked foods and healthy fats pacify Vata, cooling foods and avoiding spicy items help balance Pitta, and light, warming foods reduce excess Kapha. Eating in a calm environment and chewing thoroughly are also emphasized.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Panchakarama and Detoxification</h2>
            <p className="text-gray-300 leading-relaxed">
              Panchakarama is a comprehensive detoxification and rejuvenation program in Ayurveda. It includes five procedures designed to eliminate toxins and restore balance: vamana (therapeutic vomiting), virechana (purgation), basti (medicated enemas), nasya (nasal administration), and rakta moksha (bloodletting). These procedures are typically performed under expert supervision and are preceded by preparatory treatments.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Herbal Remedies and Medicines</h2>
            <p className="text-gray-300 leading-relaxed">
              Ayurveda employs numerous herbs and plant-based preparations for healing. Turmeric, ashwagandha, triphala, brahmi, and tulsi are commonly used herbs with documented health benefits. Formulations often combine multiple herbs to address specific conditions and minimize side effects. These remedies aim to address the root cause of illness rather than just symptoms, though quality and standardization can vary.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Yoga and Meditation Integration</h2>
            <p className="text-gray-300 leading-relaxed">
              Ayurveda and yoga developed together as complementary systems for health and spiritual development. Specific yoga practices are recommended based on dosha constitution. Pranayama (breathing exercises) and meditation are integral to Ayurvedic practice, helping to balance the mind and nervous system. Together, these practices support physical, mental, and spiritual well-being.
            </p>

            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
              <p className="text-gray-300">
                Ayurveda offers a personalized approach to health based on individual constitution. While many Ayurvedic practices have anecdotal support and some scientific backing, it's important to work with qualified practitioners and maintain communication with your healthcare team.
              </p>
            </div>
          </div>
        </article>

        <div className="mt-8 flex justify-between items-center">
          <Link href="/category/health/alternative" className="text-yellow-400 hover:text-yellow-300">
            ← More Alternative Medicine Articles
          </Link>
        </div>
      </div>
    </div>
  );
}