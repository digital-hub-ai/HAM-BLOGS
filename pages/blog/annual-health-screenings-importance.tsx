import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function AnnualHealthScreeningsImportance() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Annual Health Screenings and Their Importance - HAM BLOGS</title>
        <meta name="description" content="Essential health screenings by age and risk factors" />
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
                Annual Health Screenings and Their Importance
              </h1>
              <div className="flex items-center text-gray-400">
                <span className="mr-6">January 8, 2026</span>
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
              Essential health screenings by age and risk factors. Regular health screenings are crucial for early detection of diseases when treatment is most effective. Many serious conditions, including cancer, diabetes, and heart disease, can be managed more successfully when caught early. Preventive care helps identify health risks before symptoms appear, allowing for lifestyle changes or medical interventions that can prevent or delay disease progression.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Recommended Screenings by Age</h2>
            <p className="text-gray-300 leading-relaxed">
              Screening recommendations vary by age, gender, and risk factors. For adults in their 20s and 30s, routine checks include blood pressure, cholesterol, and BMI assessments. Starting at age 40, additional screenings become important, such as eye exams and hearing tests. Women should begin regular mammograms around age 40-50, depending on risk factors. Men should discuss prostate cancer screening with their doctors around age 50.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Cardiovascular Health Screenings</h2>
            <p className="text-gray-300 leading-relaxed">
              Heart disease is the leading cause of death globally, making cardiovascular screenings essential. Blood pressure should be checked regularly, with high readings warranting more frequent monitoring. Cholesterol panels help assess heart disease risk. For those with risk factors, additional tests like C-reactive protein or coronary artery calcium scoring may be recommended. Blood glucose testing helps identify diabetes or prediabetes.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Cancer Screenings</h2>
            <p className="text-gray-300 leading-relaxed">
              Various cancer screenings are recommended based on age and risk factors. Colorectal cancer screening typically begins at age 45-50 with colonoscopy or stool-based tests. Cervical cancer screening with Pap smears is recommended for women starting at age 21. Skin cancer screening should include regular self-examinations and professional skin checks, especially for those with risk factors.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Bone Health Assessments</h2>
            <p className="text-gray-300 leading-relaxed">
              Bone density testing becomes important as we age, particularly for postmenopausal women and men over 70. Early detection of osteoporosis allows for interventions that can prevent fractures. Risk factors for bone loss include family history, certain medications, and lifestyle factors like smoking and excessive alcohol consumption.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Mental Health Screenings</h2>
            <p className="text-gray-300 leading-relaxed">
              Mental health is an integral part of overall health. Regular screening for depression, anxiety, and other mental health conditions should be part of routine care. Healthcare providers often use standardized questionnaires to assess mental health status. Early identification allows for timely interventions that can prevent conditions from worsening.
            </p>

            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
              <p className="text-gray-300">
                Regular health screenings are investments in your long-term health. Following recommended screening guidelines based on your age, gender, and risk factors can help catch health issues early when they're most treatable.
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