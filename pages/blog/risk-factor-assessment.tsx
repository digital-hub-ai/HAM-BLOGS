import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function RiskFactorAssessment() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Risk Factor Assessment - HAM BLOGS</title>
        <meta name="description" content="Identifying and managing health risks" />
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
                Risk Factor Assessment
              </h1>
              <div className="flex items-center text-gray-400">
                <span className="mr-6">January 6, 2026</span>
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
              Identifying and managing health risks. Risk factor assessment is a critical component of preventive healthcare. It involves identifying factors that increase the likelihood of developing diseases, conditions, or injuries. By understanding personal risk factors, individuals can take targeted actions to reduce their chances of developing health problems. Risk factors can be modifiable (like lifestyle choices) or non-modifiable (like genetics), and understanding both types is important for comprehensive health planning.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Modifiable Risk Factors</h2>
            <p className="text-gray-300 leading-relaxed">
              Modifiable risk factors are aspects of health and lifestyle that can be changed to reduce disease risk. These include smoking, excessive alcohol consumption, poor diet, physical inactivity, obesity, and chronic stress. Addressing these factors can significantly impact health outcomes. For example, quitting smoking can reduce lung cancer risk substantially, while regular exercise can decrease the risk of heart disease, diabetes, and stroke.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Non-Modifiable Risk Factors</h2>
            <p className="text-gray-300 leading-relaxed">
              Non-modifiable risk factors include age, gender, ethnicity, and genetics. While these cannot be changed, knowing about them can help with early detection and prevention strategies. For instance, having a family history of breast cancer might prompt earlier or more frequent screenings. Men over 50 have higher risk for prostate cancer, and older adults generally have increased risk for many diseases.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Cardiovascular Risk Assessment</h2>
            <p className="text-gray-300 leading-relaxed">
              Cardiovascular risk assessment considers multiple factors including age, gender, blood pressure, cholesterol levels, smoking status, and diabetes. Tools like the ASCVD risk calculator help estimate 10-year risk for heart attack or stroke. These assessments guide decisions about lifestyle changes, medication, and monitoring frequency. Regular reassessment is important as risk factors change over time.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Lifestyle Risk Factors</h2>
            <p className="text-gray-300 leading-relaxed">
              Lifestyle choices significantly impact health risks. Sedentary behavior increases risk for numerous conditions including heart disease, diabetes, and certain cancers. Poor sleep quality affects immune function and cognitive performance. Chronic stress can lead to inflammation and various health problems. Excessive alcohol consumption increases risk for liver disease, cancer, and accidents.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Environmental and Occupational Risks</h2>
            <p className="text-gray-300 leading-relaxed">
              Environmental exposures can increase disease risk. These include air pollution, chemical exposures, radiation, and infectious agents. Occupational hazards vary by profession and may include exposure to toxins, physical dangers, or chronic stress. Awareness of these risks can lead to protective measures such as proper equipment use, workplace safety practices, or environmental modifications.
            </p>

            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
              <p className="text-gray-300">
                Understanding your risk factors allows you to take proactive steps to protect your health. Regular assessment with healthcare providers can help identify changing risks and appropriate prevention strategies.
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