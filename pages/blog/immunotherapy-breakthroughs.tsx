import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function ImmunotherapyBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is CAR-T cell therapy?",
      answer: "CAR-T cell therapy is a type of immunotherapy that involves genetically modifying a patient's T cells to better recognize and attack cancer cells. T cells are extracted from the patient's blood, engineered in the lab to express chimeric antigen receptors (CARs) that specifically target cancer cells, and then infused back into the patient. This approach has shown remarkable success in treating certain blood cancers."
    },
    {
      question: "How do checkpoint inhibitors work?",
      answer: "Checkpoint inhibitors are drugs that block proteins that prevent T cells from attacking cancer cells. Cancer cells often exploit immune checkpoints (like PD-1/PD-L1 and CTLA-4) to hide from the immune system. Checkpoint inhibitors block these interactions, releasing the 'brakes' on the immune system and allowing T cells to recognize and destroy cancer cells more effectively."
    },
    {
      question: "What are the potential side effects of immunotherapy?",
      answer: "While immunotherapy can be highly effective, it can also cause immune-related adverse events (irAEs) as the activated immune system may attack healthy tissues. Common side effects include fatigue, skin reactions, flu-like symptoms, and inflammation of organs like the lungs, liver, or intestines. These side effects are generally manageable with appropriate medical care."
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
      <Head>
        <title>Immunotherapy Breakthroughs - Medicine | HAM BLOGS</title>
        <meta name="description" content="Harnessing the immune system to fight cancer and other diseases." />
        <link rel="canonical" href="https://ham-blogs.com/blog/immunotherapy-breakthroughs" />
      </Head>

      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-red-600 hover:text-red-800 font-medium flex items-center"
            >
              ← Back to Medicine
            </button>
            <div className="flex space-x-4">
              <button 
                onClick={() => toggleBookmark('main')}
                className={`p-2 rounded-full ${bookmarks.includes('main') ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Immunotherapy Breakthroughs</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">🛡️ Medicine</span>
            <span>⏱️ 16 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            Harnessing the immune system to fight cancer and other diseases
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Introduction to Immunotherapy <button onClick={() => toggleBookmark('intro')} className="ml-2 text-red-500">★</button></h2>
          <p>
            Immunotherapy represents a revolutionary approach to treating cancer and other diseases by harnessing the body's immune system to fight disease. Unlike traditional treatments like chemotherapy and radiation that directly target cancer cells, immunotherapy works by enhancing the immune system's natural ability to recognize and destroy abnormal cells. This approach has led to remarkable successes in treating previously incurable cancers and has fundamentally changed cancer treatment paradigms.
          </p>
          
          <p>
            The immune system has sophisticated mechanisms to distinguish between self and non-self, but cancer cells often develop ways to evade immune detection. Immunotherapy works by overcoming these evasion mechanisms, boosting immune responses, or providing the immune system with specific tools to identify and eliminate cancer cells. The field encompasses multiple approaches, each designed to enhance different aspects of immune function.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Checkpoint Inhibitors <button onClick={() => toggleBookmark('checkpoint')} className="ml-2 text-red-500">★</button></h2>
          <h3 className="text-red-600">PD-1/PD-L1 and CTLA-4 Pathways</h3>
          <p>
            Checkpoint inhibitors block proteins that prevent T cells from attacking cancer cells. Cancer cells often exploit immune checkpoints like PD-1/PD-L1 and CTLA-4 to hide from the immune system. Drugs like pembrolizumab, nivolumab, and ipilimumab block these pathways, releasing the 'brakes' on the immune system and allowing T cells to recognize and destroy cancer cells more effectively.
          </p>

          <h3 className="text-red-600">Clinical Success Stories</h3>
          <p>
            Checkpoint inhibitors have shown remarkable success in treating melanoma, lung cancer, kidney cancer, and several other cancer types. Patients with advanced melanoma, once facing a grim prognosis, now have significantly improved survival rates. The success of these drugs has led to their approval for multiple cancer types and their combination with other treatments to enhance efficacy.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">CAR-T Cell Therapy <button onClick={() => toggleBookmark('car_t')} className="ml-2 text-red-500">★</button></h2>
          <p>
            Chimeric Antigen Receptor (CAR) T-cell therapy represents one of the most exciting developments in immunotherapy. This personalized treatment involves extracting T cells from a patient's blood, genetically engineering them to express receptors that specifically target cancer cells, and then infusing them back into the patient. CAR-T cell therapies like Kymriah and Yescarta have achieved remarkable success in treating certain blood cancers.
          </p>

          <p>
            The process of CAR-T cell therapy is complex, involving the collection of T cells, genetic modification in specialized laboratories, expansion of the modified cells, and reinfusion into the patient. These engineered cells can persist in the body for months or years, continuing to target cancer cells. The approach has shown particularly impressive results in treating relapsed or refractory B-cell malignancies.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Other Immunotherapy Approaches <button onClick={() => toggleBookmark('other_approaches')} className="ml-2 text-red-500">★</button></h2>
          <p>
            Beyond checkpoint inhibitors and CAR-T cell therapy, immunotherapy encompasses several other innovative approaches. Therapeutic vaccines train the immune system to recognize and attack specific antigens associated with cancer or infectious diseases. Oncolytic virus therapy uses genetically modified viruses that selectively infect and kill cancer cells while stimulating immune responses.
          </p>

          <p>
            Adoptive cell transfer involves isolating immune cells directly from a patient's tumor (tumor-infiltrating lymphocytes or TILs), growing them in large quantities in the lab, and reinfusing them into the patient. Cytokines like interleukins and interferons can boost immune responses systemically. Combination approaches that use multiple immunotherapy strategies or combine immunotherapy with traditional treatments are showing enhanced efficacy.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Challenges and Future Directions <button onClick={() => toggleBookmark('future')} className="ml-2 text-red-500">★</button></h2>
          <p>
            Despite significant successes, immunotherapy faces several challenges. Many patients still do not respond to treatment, and some initially responding patients develop resistance over time. Solid tumors often create immunosuppressive microenvironments that limit immunotherapy effectiveness. Identifying biomarkers to predict treatment response remains an active area of research.
          </p>

          <p>
            Future directions include developing next-generation CAR-T cells with improved safety profiles and efficacy, creating universal donor cells to reduce manufacturing time and costs, and engineering immune cells with enhanced persistence and anti-tumor activity. Combination strategies that overcome tumor resistance mechanisms and personalized neoantigen vaccines based on individual tumor mutations hold promise for expanding immunotherapy benefits to more patients.
          </p>
        </section>

        <section className="bg-red-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-red-700">Interactive Quiz</h2>
          {!isQuizActive ? (
            <button 
              onClick={() => setIsQuizActive(true)}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Test Your Knowledge
            </button>
          ) : (
            <div className="space-y-6">
              <div>
                <p className="font-medium mb-2 text-gray-700">1. What does CAR-T cell therapy involve?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) Removing and genetically modifying T cells to better target cancer</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) Injecting antibodies to fight cancer</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Vaccinating against cancer</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) Using chemotherapy to stimulate immunity</span></label>
              </div>

              <div>
                <p className="font-medium mb-2 text-gray-700">2. How do checkpoint inhibitors work?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) By directly killing cancer cells</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) By blocking proteins that prevent T cells from attacking cancer</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) By replacing the immune system</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) By creating cancer vaccines</span></label>
              </div>

              <button 
                onClick={checkQuizAnswers}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4"
              >
                Check Answers
              </button>
              
              {showQuizResults && (
                <div className="mt-4 p-4 bg-white/70 rounded border border-red-300">
                  <h3 className="font-bold mb-2 text-red-700">Results:</h3>
                  <p className="text-gray-700">Question 1: {quizAnswers.q1 === 'A' ? '✓ Correct' : '✗ Incorrect (Correct: A)'} - CAR-T therapy involves modifying T cells to better target cancer.</p>
                  <p className="text-gray-700">Question 2: {quizAnswers.q2 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - Checkpoint inhibitors block proteins that prevent T cells from attacking cancer.</p>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="bg-orange-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-orange-700">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-700">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-orange-200 pb-4">
                <h3 className="font-semibold text-red-700">{faq.question}</h3>
                <p className="mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <nav className="border-t border-red-200 pt-6 mt-8">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Previous Article</h3>
              <Link href="/blog/artificial-intelligence-healthcare" className="text-red-600 hover:underline">
                ← Artificial Intelligence in Healthcare
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Next Article</h3>
              <Link href="/blog/regenerative-medicine-stem-cell-therapy" className="text-red-600 hover:underline">
                Regenerative Medicine and Stem Cell Therapy →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}