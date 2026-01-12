import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function HerbalMedicineAndPhytotherapy() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Herbal Medicine and Phytotherapy - HAM BLOGS</title>
        <meta name="description" content="Plant-based remedies and their therapeutic effects" />
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
                Herbal Medicine and Phytotherapy
              </h1>
              <div className="flex items-center text-gray-400">
                <span className="mr-6">January 4, 2026</span>
                <span>9 min read</span>
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
              Plant-based remedies and their therapeutic effects. Herbal medicine, also known as phytotherapy, involves the use of plants or plant extracts for medicinal purposes. This practice has been fundamental to human healthcare for thousands of years across all cultures. Many modern pharmaceuticals originated from plant compounds, such as aspirin from willow bark and digitalis from foxglove. Today, herbal medicine continues to be widely used both as standalone therapy and in combination with conventional treatments.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Active Compounds in Medicinal Plants</h2>
            <p className="text-gray-300 leading-relaxed">
              Plants produce numerous bioactive compounds including alkaloids, flavonoids, terpenoids, phenolic acids, and glycosides. These compounds serve various functions in plants, such as protection against predators or environmental stress, but also have therapeutic effects in humans. Examples include curcumin from turmeric with anti-inflammatory properties, berberine from goldenseal with antimicrobial activity, and ginkgo flavoneglycosides that may improve circulation.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Commonly Used Medicinal Herbs</h2>
            <p className="text-gray-300 leading-relaxed">
              Echinacea is widely used for immune support, though scientific evidence for its effectiveness is mixed. St. John's Wort has demonstrated efficacy for mild to moderate depression but can interact with numerous medications. Ginger is well-studied for nausea relief. Turmeric and its active compound curcumin have anti-inflammatory properties. Ginkgo biloba may help with circulation and cognitive function. Valerian root is commonly used for sleep support.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Quality and Standardization</h2>
            <p className="text-gray-300 leading-relaxed">
              The quality of herbal products can vary significantly between manufacturers and batches. Standardization ensures consistent levels of active compounds, but not all products are standardized. Third-party testing for purity, potency, and contamination is important. Factors like growing conditions, harvesting time, processing, and storage affect the composition and efficacy of herbal preparations. Organic certification and good manufacturing practices help ensure quality.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Safety and Drug Interactions</h2>
            <p className="text-gray-300 leading-relaxed">
              While often perceived as safer than pharmaceuticals, herbs can have significant side effects and drug interactions. St. John's Wort, for example, can reduce the effectiveness of birth control pills, blood thinners, and many other medications. Some herbs can be toxic in high doses or with prolonged use. It's essential to inform healthcare providers about all herbal supplements being used to avoid adverse interactions.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Scientific Evidence and Regulation</h2>
            <p className="text-gray-300 leading-relaxed">
              Research on herbal medicines varies widely in quality and quantity. Some herbs have robust scientific support for specific uses, while others rely primarily on traditional knowledge. The European Medicines Agency and other regulatory bodies have developed frameworks for evaluating herbal medicines. In the US, herbal products are regulated as dietary supplements rather than drugs, meaning they don't need to prove safety or efficacy before marketing.
            </p>

            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
              <p className="text-gray-300">
                Herbal medicine offers potential therapeutic benefits based on millennia of traditional use and growing scientific research. However, it's important to use quality products, be aware of potential interactions with medications, and consult with knowledgeable practitioners.
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