import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function FamilyHistoryAndGenetics() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Family History and Genetics - HAM BLOGS</title>
        <meta name="description" content="Understanding inherited health risks" />
      </Head>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8"
        >
          <span className="mr-2">←</span> Back to Preventive Care
        </button>

        <article className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm mb-4">
                Preventive Care
              </span>
              <h1 className="text-4xl font-bold text-white mb-4">
                Family History and Genetics
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
              Understanding inherited health risks. Family history is one of the most important tools for assessing genetic predisposition to diseases. Many conditions have a hereditary component, meaning they occur more frequently in families due to shared genes, lifestyle factors, or environmental exposures. Understanding your family history can help identify increased risks for certain conditions and guide preventive strategies, screening schedules, and lifestyle choices.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Common Hereditary Conditions</h2>
            <p className="text-gray-300 leading-relaxed">
              Several conditions tend to run in families, including heart disease, diabetes, certain cancers, and mental health disorders. Breast and ovarian cancers have well-established genetic links, particularly with BRCA1 and BRCA2 gene mutations. Colorectal cancer risk increases with family history. Heart disease, stroke, and high blood pressure often cluster in families. Type 2 diabetes has a strong genetic component.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Collecting Family Health Information</h2>
            <p className="text-gray-300 leading-relaxed">
              Gathering comprehensive family health history involves collecting information about at least three generations. This includes parents, siblings, children, grandparents, aunts, uncles, and cousins. Key information includes diseases, age of onset, and causes of death. It's important to note whether relatives had conditions at unusually young ages, as this may indicate genetic predisposition. Both maternal and paternal sides of the family should be considered.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Genetic Testing and Counseling</h2>
            <p className="text-gray-300 leading-relaxed">
              Genetic testing can identify specific mutations that increase disease risk. However, not everyone needs genetic testing. It's typically recommended for individuals with strong family histories of certain conditions, those from populations with known genetic predispositions, or when results would influence medical management. Genetic counselors can help interpret results and guide decision-making. Testing has implications for family members as well as the individual.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Risk Assessment and Prevention</h2>
            <p className="text-gray-300 leading-relaxed">
              Knowledge of genetic risk doesn't mean developing a condition is inevitable. Many genetic predispositions can be managed through lifestyle changes, preventive medications, or increased surveillance. For example, those with family history of heart disease can focus on heart-healthy lifestyle choices and more frequent screenings. Those with increased cancer risk might start screening earlier or consider preventive measures.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Lifestyle Modifications Based on Genetic Risk</h2>
            <p className="text-gray-300 leading-relaxed">
              Understanding genetic predispositions can motivate targeted lifestyle changes. Those with family history of diabetes might focus more intensively on weight management and blood sugar control. Individuals with heart disease family history might be more vigilant about cholesterol management and blood pressure control. Those with cancer family history might be more committed to avoiding known carcinogens and maintaining a healthy weight.
            </p>

            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
              <p className="text-gray-300">
                Family history provides valuable information about potential health risks. While genetics play a role in many conditions, lifestyle choices and preventive care can significantly influence outcomes, even for those with genetic predispositions.
              </p>
            </div>
          </div>
        </article>

        <div className="mt-8 flex justify-between items-center">
          <Link href="/category/health/preventive" className="text-yellow-400 hover:text-yellow-300">
            ← More Preventive Care Articles
          </Link>
        </div>
      </div>
    </div>
  );
}