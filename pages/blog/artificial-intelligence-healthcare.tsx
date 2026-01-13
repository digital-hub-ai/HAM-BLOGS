import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function AIHealthcareBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "How is AI used in medical imaging?",
      answer: "AI is extensively used in medical imaging to analyze radiological scans like X-rays, CT scans, and MRIs. Machine learning algorithms can detect abnormalities such as tumors, fractures, or signs of diseases like pneumonia with accuracy that often matches or exceeds human radiologists. AI tools assist in faster diagnosis, reduce human error, and can prioritize urgent cases in emergency settings."
    },
    {
      question: "What are the limitations of AI in healthcare?",
      answer: "Despite its potential, AI in healthcare has several limitations. These include the need for large, high-quality datasets for training, potential algorithmic bias if training data is not diverse, lack of interpretability in some AI models (black box problem), regulatory challenges, and the need for extensive validation in clinical settings. Additionally, AI systems may struggle with rare conditions not well represented in training data."
    },
    {
      question: "How is AI transforming drug discovery?",
      answer: "AI is revolutionizing drug discovery by predicting molecular behavior, identifying potential drug targets, designing novel compounds, and predicting drug interactions. Machine learning models can screen millions of compounds virtually, significantly reducing the time and cost of early-stage drug discovery. AI also helps in identifying patient populations for clinical trials and predicting treatment responses."
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
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
      <Head>
        <title>Artificial Intelligence in Healthcare - Medicine | HAM BLOGS</title>
        <meta name="description" content="AI applications transforming diagnosis, treatment, and patient outcomes." />
        <link rel="canonical" href="https://ham-blogs.com/blog/artificial-intelligence-healthcare" />
      </Head>

      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-violet-600 hover:text-violet-800 font-medium flex items-center"
            >
              ← Back to Medicine
            </button>
            <div className="flex space-x-4">
              <button 
                onClick={() => toggleBookmark('main')}
                className={`p-2 rounded-full ${bookmarks.includes('main') ? 'bg-violet-500 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Artificial Intelligence in Healthcare</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">🤖 Medicine</span>
            <span>⏱️ 13 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            AI applications transforming diagnosis, treatment, and patient outcomes
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Introduction to AI in Healthcare <button onClick={() => toggleBookmark('intro')} className="ml-2 text-violet-500">★</button></h2>
          <p>
            Artificial intelligence is revolutionizing healthcare by enhancing diagnostic accuracy, streamlining clinical workflows, and enabling personalized treatment approaches. From machine learning algorithms that analyze medical images to natural language processing systems that extract insights from electronic health records, AI technologies are transforming how healthcare is delivered. These innovations are helping clinicians make better decisions, improve patient outcomes, and reduce healthcare costs.
          </p>
          
          <p>
            The integration of AI in healthcare builds upon decades of computational advances and the availability of large clinical datasets. As computing power continues to grow and algorithms become more sophisticated, AI applications in medicine are becoming increasingly sophisticated and clinically relevant. The field encompasses everything from simple decision support tools to complex autonomous systems that can perform specific medical tasks.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">AI in Medical Imaging <button onClick={() => toggleBookmark('imaging')} className="ml-2 text-violet-500">★</button></h2>
          <h3 className="text-violet-600">Computer Vision Applications</h3>
          <p>
            AI algorithms excel at analyzing medical images, often matching or surpassing human expert performance in detecting abnormalities. Deep learning models trained on large datasets of medical images can identify conditions like diabetic retinopathy, skin cancer, and lung nodules with remarkable accuracy. These systems can process images rapidly, assisting radiologists in prioritizing urgent cases and reducing diagnostic errors.
          </p>

          <h3 className="text-violet-600">Automated Analysis and Screening</h3>
          <p>
            AI-powered screening tools are being deployed for early detection of diseases like breast cancer through mammography analysis and cervical cancer through Pap smear evaluation. These systems can identify subtle patterns that may be missed by human observers, particularly in resource-limited settings where specialist expertise is scarce. Automated analysis also reduces inter-observer variability in diagnostic interpretation.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Predictive Analytics and Decision Support <button onClick={() => toggleBookmark('analytics')} className="ml-2 text-violet-500">★</button></h2>
          <p>
            Machine learning algorithms analyze vast amounts of patient data to predict outcomes, identify high-risk patients, and guide treatment decisions. Predictive models can forecast sepsis onset, readmission risk, and disease progression, enabling proactive interventions. Electronic health record data combined with AI can identify patients who may benefit from specific treatments or require additional monitoring.
          </p>

          <p>
            Clinical decision support systems powered by AI provide real-time recommendations to healthcare providers, considering patient history, current symptoms, and the latest medical literature. These systems help reduce diagnostic errors and ensure that evidence-based practices are consistently applied across different healthcare settings.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Drug Discovery and Development <button onClick={() => toggleBookmark('drug_discovery')} className="ml-2 text-violet-500">★</button></h2>
          <p>
            AI is accelerating drug discovery by identifying novel therapeutic targets, designing new molecules, and predicting drug efficacy and safety. Machine learning models can screen millions of compounds virtually, significantly reducing the time and cost of early-stage drug development. AI algorithms also help identify patient populations most likely to respond to experimental treatments, optimizing clinical trial design.
          </p>

          <p>
            Computational approaches are being used to predict protein structures, understand drug interactions, and repurpose existing drugs for new indications. Deep learning models like AlphaFold have revolutionized protein structure prediction, providing insights that can accelerate drug design and understanding of disease mechanisms.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Challenges and Ethical Considerations <button onClick={() => toggleBookmark('ethics')} className="ml-2 text-violet-500">★</button></h2>
          <p>
            The implementation of AI in healthcare faces several challenges, including data quality and standardization issues, regulatory approval processes, and the need for robust validation in diverse patient populations. Algorithmic bias is a significant concern, as AI systems trained on non-representative data may perform poorly for underrepresented groups.
          </p>

          <p>
            Ethical considerations include patient privacy protection, informed consent for AI-assisted care, and the question of accountability when AI systems make errors. Transparency and explainability of AI decisions are crucial for gaining physician trust and ensuring appropriate use of these technologies in clinical practice.
          </p>
        </section>

        <section className="bg-violet-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-violet-700">Interactive Quiz</h2>
          {!isQuizActive ? (
            <button 
              onClick={() => setIsQuizActive(true)}
              className="bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition-colors"
            >
              Test Your Knowledge
            </button>
          ) : (
            <div className="space-y-6">
              <div>
                <p className="font-medium mb-2 text-gray-700">1. In which area has AI shown particular success in healthcare?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) Medical imaging analysis</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) Patient billing systems</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Hospital cleaning schedules</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) Cafeteria menu planning</span></label>
              </div>

              <div>
                <p className="font-medium mb-2 text-gray-700">2. What is a major challenge in implementing AI in healthcare?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) Lack of interest from healthcare providers</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) Algorithmic bias and data representation</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) Too much available data</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) Excessive computing power</span></label>
              </div>

              <button 
                onClick={checkQuizAnswers}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4"
              >
                Check Answers
              </button>
              
              {showQuizResults && (
                <div className="mt-4 p-4 bg-white/70 rounded border border-violet-300">
                  <h3 className="font-bold mb-2 text-violet-700">Results:</h3>
                  <p className="text-gray-700">Question 1: {quizAnswers.q1 === 'A' ? '✓ Correct' : '✗ Incorrect (Correct: A)'} - AI has shown particular success in medical imaging analysis.</p>
                  <p className="text-gray-700">Question 2: {quizAnswers.q2 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - Algorithmic bias and data representation is a major challenge.</p>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="bg-purple-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-700">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-700">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-purple-200 pb-4">
                <h3 className="font-semibold text-violet-700">{faq.question}</h3>
                <p className="mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <nav className="border-t border-violet-200 pt-6 mt-8">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Previous Article</h3>
              <Link href="/blog/precision-medicine-genomics" className="text-violet-600 hover:underline">
                ← Precision Medicine and Genomics
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Next Article</h3>
              <Link href="/blog/immunotherapy-breakthroughs" className="text-violet-600 hover:underline">
                Immunotherapy Breakthroughs →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}