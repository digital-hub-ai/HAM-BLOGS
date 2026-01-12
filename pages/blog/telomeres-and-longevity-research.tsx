import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function TelomeresAndLongevityResearch() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Telomeres and Longevity Research - HAM BLOGS</title>
        <meta name="description" content="The science of telomeres and their role in aging" />
      </Head>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8"
        >
          <span className="mr-2">←</span> Back to Longevity
        </button>

        <article className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm mb-4">
                Longevity
              </span>
              <h1 className="text-4xl font-bold text-white mb-4">
                Telomeres and Longevity Research
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
              The science of telomeres and their role in aging. Telomeres are protective caps at the ends of chromosomes that shorten with each cell division. They play a crucial role in cellular aging and organismal longevity. Discovered by Elizabeth Blackburn, who won the Nobel Prize for her work on telomerase, telomeres have become a central focus in aging research. Understanding telomere biology offers insights into the aging process and potential interventions.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">What Are Telomeres?</h2>
            <p className="text-gray-300 leading-relaxed">
              Telomeres are repetitive DNA sequences (TTAGGG repeats in humans) that protect the ends of chromosomes from deterioration or fusion with neighboring chromosomes. They function like the plastic tips on shoelaces, preventing the chromosome from unraveling. Each time a cell divides, telomeres shorten slightly. When they become critically short, the cell enters senescence or undergoes programmed cell death (apoptosis).
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Hayflick Limit</h2>
            <p className="text-gray-300 leading-relaxed">
              Leonard Hayflick discovered that normal human cells can only divide a finite number of times before entering senescence. This limit, known as the Hayflick limit, is partly determined by telomere length. Most somatic cells lack sufficient telomerase activity to maintain telomere length, leading to progressive shortening with each division. This mechanism prevents uncontrolled cell growth but also contributes to aging.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Telomerase and Cellular Immortality</h2>
            <p className="text-gray-300 leading-relaxed">
              Telomerase is an enzyme that can add telomeric repeats to chromosome ends, effectively lengthening telomeres. Most cancer cells express high levels of telomerase, allowing them to divide indefinitely. Germ cells and stem cells also have telomerase activity. The challenge in therapeutic applications is selectively activating telomerase in normal cells without promoting cancer development.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Lifestyle Factors and Telomere Length</h2>
            <p className="text-gray-300 leading-relaxed">
              Research has shown that certain lifestyle factors can influence telomere length. Chronic stress, poor sleep, smoking, obesity, and sedentary behavior are associated with shorter telomeres. Conversely, regular exercise, a healthy diet, stress management, and adequate sleep are associated with longer telomeres. These findings suggest that lifestyle interventions may slow cellular aging.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Current Research and Therapeutic Potential</h2>
            <p className="text-gray-300 leading-relaxed">
              Scientists are exploring various approaches to maintain or lengthen telomeres therapeutically. TA-65, a compound derived from astragalus, has shown some promise in early studies. Gene therapy approaches to deliver telomerase are being investigated. However, the relationship between telomeres and cancer remains a significant concern. Research continues to balance the potential benefits of telomere maintenance with cancer risk.
            </p>

            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
              <p className="text-gray-300">
                While telomere length is just one factor in aging, research suggests that healthy lifestyle choices may help maintain telomere length and promote cellular health. More research is needed before direct therapeutic applications become available.
              </p>
            </div>
          </div>
        </article>

        <div className="mt-8 flex justify-between items-center">
          <Link href="/category/health/longevity" className="text-yellow-400 hover:text-yellow-300">
            ← More Longevity Articles
          </Link>
        </div>
      </div>
    </div>
  );
}