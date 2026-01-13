import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function GlobalHealthBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What are the major global health challenges today?",
      answer: "Major global health challenges include infectious diseases like HIV/AIDS, tuberculosis, and malaria, as well as emerging threats like COVID-19. Non-communicable diseases such as heart disease, cancer, and diabetes are growing concerns globally. Other challenges include health disparities between and within countries, antimicrobial resistance, climate change impacts on health, and inadequate healthcare infrastructure in many regions."
    },
    {
      question: "How does climate change affect global health?",
      answer: "Climate change affects global health through increased frequency of extreme weather events, changing patterns of infectious diseases, heat stress, malnutrition due to crop failures, and air pollution. Rising temperatures expand the range of disease vectors like mosquitoes, potentially spreading diseases to new regions. Climate-related disasters also disrupt healthcare systems and displace populations, creating additional health risks."
    },
    {
      question: "What is universal health coverage and why is it important?",
      answer: "Universal health coverage (UHC) ensures that all people have access to the health services they need without financial hardship. It includes the full spectrum of essential health services, from promotion and prevention to treatment, rehabilitation, and palliative care. UHC is important because it promotes health equity, reduces poverty, and contributes to economic development by ensuring healthy populations."
    }
  ];

  const toggleBookmark = (section: string) => {
    if (bookmarks.includes(section)) {
      setBookmarks(bookmarks.filter(item => item !== section));
    } else {
      setBookmarks([...bookmarks, section]);
    }
  };

  const handleQuizAnswer = (questionId: string, answer: string) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionId]: answer
    });
  };

  const checkQuizAnswers = () => {
    setShowQuizResults(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-lime-50">
      <Head>
        <title>Global Health Challenges and Solutions - Medicine | HAM BLOGS</title>
        <meta name="description" content="Addressing worldwide health disparities and emerging infectious diseases." />
        <link rel="canonical" href="https://ham-blogs.com/blog/global-health-challenges-solutions" />
      </Head>

      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-amber-600 hover:text-amber-800 font-medium flex items-center"
            >
              ← Back to Medicine
            </button>
            <div className="flex space-x-4">
              <button 
                onClick={() => toggleBookmark('main')}
                className={`p-2 rounded-full ${bookmarks.includes('main') ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                aria-label="Bookmark"
              >
                ★
              </button>
            </div>
          </div>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Global Health Challenges and Solutions</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">🌍 Medicine</span>
            <span>⏱️ 14 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            Addressing worldwide health disparities and emerging infectious diseases
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Introduction to Global Health <button onClick={() => toggleBookmark('intro')} className="ml-2 text-amber-500">★</button></h2>
          <p>
            Global health encompasses health issues that transcend national boundaries and governments, requiring international cooperation for resolution. It addresses health challenges that affect populations worldwide, with particular emphasis on health equity and the reduction of disparities between and within countries. Global health initiatives focus on improving health outcomes for all people, regardless of their geographic location, socioeconomic status, or political circumstances.
          </p>
          
          <p>
            The field recognizes that health is influenced by a complex interplay of factors including social determinants, economic conditions, environmental factors, and access to healthcare. Global health efforts aim to strengthen health systems, improve disease surveillance, promote health equity, and prepare for and respond to health emergencies that can cross borders rapidly.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Major Global Health Challenges <button onClick={() => toggleBookmark('challenges')} className="ml-2 text-amber-500">★</button></h2>
          <h3 className="text-amber-600">Infectious Diseases</h3>
          <p>
            Infectious diseases continue to pose significant threats to global health. HIV/AIDS, tuberculosis, and malaria remain leading causes of morbidity and mortality in many parts of the world. Emerging infectious diseases like COVID-19, Ebola, and Zika virus highlight the vulnerability of global populations to new pathogens. Antimicrobial resistance threatens to reverse decades of progress in treating infectious diseases.
          </p>

          <h3 className="text-amber-600">Non-Communicable Diseases</h3>
          <p>
            Non-communicable diseases (NCDs) such as cardiovascular disease, cancer, diabetes, and chronic respiratory diseases now account for the majority of deaths worldwide. These conditions disproportionately affect low- and middle-income countries and are linked to modifiable risk factors like tobacco use, unhealthy diets, physical inactivity, and harmful alcohol consumption.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Health Inequities and Access Issues <button onClick={() => toggleBookmark('inequities')} className="ml-2 text-amber-500">★</button></h2>
          <p>
            Significant disparities exist in health outcomes and access to healthcare services between and within countries. People in low-income countries often lack access to basic health services, essential medicines, and qualified healthcare workers. Within countries, marginalized populations including women, children, elderly, and ethnic minorities often face barriers to accessing quality healthcare.
          </p>

          <p>
            The social determinants of health—including education, housing, income, and social support—play crucial roles in health outcomes. Addressing these upstream factors is essential for achieving health equity. The World Health Organization estimates that social factors account for 80-90% of health outcomes, highlighting the importance of addressing broader societal issues to improve health.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Environmental Health and Climate Change <button onClick={() => toggleBookmark('climate')} className="ml-2 text-amber-500">★</button></h2>
          <p>
            Environmental factors significantly impact global health outcomes. Air pollution, unsafe water, poor sanitation, and exposure to toxic chemicals contribute to millions of deaths annually. Climate change is exacerbating these challenges, with rising temperatures, changing precipitation patterns, and extreme weather events affecting health directly and indirectly.
          </p>

          <p>
            Vector-borne diseases like malaria and dengue fever are spreading to new geographic areas as climate conditions change. Food security is threatened by droughts, floods, and changing agricultural conditions, leading to malnutrition. Climate-related disasters strain health systems and can lead to population displacement and conflict, creating additional health risks.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Innovative Solutions and Interventions <button onClick={() => toggleBookmark('solutions')} className="ml-2 text-amber-500">★</button></h2>
          <p>
            Addressing global health challenges requires innovative solutions and sustained international collaboration. Digital health technologies, including telemedicine and mobile health applications, are improving access to healthcare in remote areas. Community health worker programs have proven effective in extending healthcare services to underserved populations.
          </p>

          <p>
            Public-private partnerships are accelerating the development and distribution of vaccines, medicines, and diagnostic tools for diseases that primarily affect low-income populations. Universal health coverage initiatives aim to ensure that everyone has access to essential health services without financial hardship. Investment in health system strengthening, including workforce development and infrastructure improvement, is crucial for sustainable progress.
          </p>
        </section>

        <section className="bg-amber-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-amber-700">Interactive Quiz</h2>
          {!isQuizActive ? (
            <button 
              onClick={() => setIsQuizActive(true)}
              className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Test Your Knowledge
            </button>
          ) : (
            <div className="space-y-6">
              <div>
                <p className="font-medium mb-2 text-gray-700">1. What percentage of health outcomes is estimated to be attributed to social determinants?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) 10-20%</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) 30-40%</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) 50-60%</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) 80-90%</span></label>
              </div>

              <div>
                <p className="font-medium mb-2 text-gray-700">2. Which of the following is a major focus of global health initiatives?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) Improving health outcomes for all people regardless of location</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) Focusing only on wealthy nations</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) Reducing healthcare quality</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) Eliminating all diseases</span></label>
              </div>

              <button 
                onClick={checkQuizAnswers}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4"
              >
                Check Answers
              </button>
              
              {showQuizResults && (
                <div className="mt-4 p-4 bg-white/70 rounded border border-amber-300">
                  <h3 className="font-bold mb-2 text-amber-700">Results:</h3>
                  <p className="text-gray-700">Question 1: {quizAnswers.q1 === 'D' ? '✓ Correct' : '✗ Incorrect (Correct: D)'} - Social determinants account for 80-90% of health outcomes.</p>
                  <p className="text-gray-700">Question 2: {quizAnswers.q2 === 'A' ? '✓ Correct' : '✗ Incorrect (Correct: A)'} - Global health focuses on improving outcomes for all people regardless of location.</p>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="bg-yellow-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-yellow-700">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-700">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-yellow-200 pb-4">
                <h3 className="font-semibold text-amber-700">{faq.question}</h3>
                <p className="mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <nav className="border-t border-amber-200 pt-6 mt-8">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Previous Article</h3>
              <Link href="/blog/regenerative-medicine-stem-cell-therapy" className="text-amber-600 hover:underline">
                ← Regenerative Medicine and Stem Cell Therapy
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Next Article</h3>
              <Link href="/blog" className="text-amber-600 hover:underline">
                Back to All Articles →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}