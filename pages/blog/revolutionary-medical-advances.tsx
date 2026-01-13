import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function RevolutionaryMedicalAdvancesBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What are some of the most promising recent medical advances?",
      answer: "Some of the most promising recent medical advances include CAR-T cell therapy for cancer, CRISPR gene editing, artificial intelligence in medical imaging, robotic surgery, 3D bioprinting of tissues, and mRNA vaccine technology. These innovations are transforming how we prevent, diagnose, and treat diseases."
    },
    {
      question: "How is telemedicine changing healthcare delivery?",
      answer: "Telemedicine is revolutionizing healthcare by increasing access to medical care, especially in remote areas. It enables real-time consultations, remote monitoring of chronic conditions, and follow-up care without requiring patients to travel. This has been particularly valuable during the COVID-19 pandemic and continues to expand healthcare accessibility."
    },
    {
      question: "What is the role of nanotechnology in modern medicine?",
      answer: "Nanotechnology in medicine involves using materials and devices at the nanoscale (1-100 nanometers) for medical applications. This includes targeted drug delivery systems, nanobots for precise surgery, enhanced imaging agents, and nanosensors for early disease detection. These technologies allow for more precise and effective treatments with fewer side effects."
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <Head>
        <title>Revolutionary Medical Advances Transforming Healthcare - Medicine | HAM BLOGS</title>
        <meta name="description" content="Examining cutting-edge medical technologies and treatments reshaping patient care." />
        <link rel="canonical" href="https://ham-blogs.com/blog/revolutionary-medical-advances" />
      </Head>

      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              ← Back to Medicine
            </button>
            <div className="flex space-x-4">
              <button 
                onClick={() => toggleBookmark('main')}
                className={`p-2 rounded-full ${bookmarks.includes('main') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Revolutionary Medical Advances Transforming Healthcare</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">⚕️ Medicine</span>
            <span>⏱️ 15 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            Examining cutting-edge medical technologies and treatments reshaping patient care
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Introduction to Revolutionary Medical Advances <button onClick={() => toggleBookmark('intro')} className="ml-2 text-blue-500">★</button></h2>
          <p>
            The field of medicine is experiencing unprecedented transformation through revolutionary advances that are reshaping how healthcare is delivered, diagnosed, and treated. From gene editing technologies to artificial intelligence, these innovations are not only improving patient outcomes but also redefining the boundaries of what is possible in medicine. The convergence of multiple scientific disciplines is accelerating the pace of medical breakthroughs, offering new hope for previously incurable conditions.
          </p>
          
          <p>
            Today's medical landscape is characterized by precision, personalization, and prevention. Revolutionary advances are moving medicine away from a one-size-fits-all approach toward personalized treatments tailored to individual genetic, environmental, and lifestyle factors. These advances are also shifting the focus from treatment to prevention, with early detection and intervention becoming increasingly important.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Gene Editing and CRISPR Technology <button onClick={() => toggleBookmark('gene_editing')} className="ml-2 text-blue-500">★</button></h2>
          <h3 className="text-blue-600">CRISPR-Cas9 and Beyond</h3>
          <p>
            CRISPR-Cas9 technology has revolutionized gene editing by providing a precise, efficient, and cost-effective method to modify DNA sequences. This breakthrough allows scientists to add, remove, or alter specific genetic material, opening up possibilities for treating genetic disorders that were previously considered incurable. Clinical trials are already underway for conditions like sickle cell disease, beta-thalassemia, and certain types of blindness.
          </p>

          <h3 className="text-blue-600">Therapeutic Applications</h3>
          <p>
            Gene editing applications extend beyond treating genetic disorders. Researchers are exploring CRISPR for cancer immunotherapy, where immune cells are modified to better recognize and attack cancer cells. The technology is also being used to engineer disease-resistant cells, create better disease models for research, and potentially treat infectious diseases by targeting viral DNA.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Precision Medicine and Personalized Treatments <button onClick={() => toggleBookmark('precision_medicine')} className="ml-2 text-blue-500">★</button></h2>
          <p>
            Precision medicine tailors medical treatment to the individual characteristics of each patient, taking into account genetic, environmental, and lifestyle factors. This approach moves away from the traditional "one-size-fits-all" model of medicine, offering treatments that are more effective and have fewer side effects. Genomic sequencing and molecular profiling are enabling physicians to identify the most appropriate therapies for individual patients.
          </p>

          <p>
            Pharmacogenomics, a key component of precision medicine, studies how genes affect a person's response to drugs. This field is helping to predict which medications will work best for individual patients, reducing adverse drug reactions and improving treatment efficacy. As genomic sequencing becomes more accessible and affordable, precision medicine is becoming an integral part of routine healthcare.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Artificial Intelligence in Healthcare <button onClick={() => toggleBookmark('ai_healthcare')} className="ml-2 text-blue-500">★</button></h2>
          <p>
            Artificial intelligence is transforming healthcare through improved diagnostics, predictive analytics, and personalized treatment recommendations. AI algorithms can analyze medical images with accuracy that matches or exceeds human experts, enabling earlier detection of diseases like cancer, diabetic retinopathy, and cardiovascular conditions. Machine learning models are also being used to predict patient outcomes, optimize treatment plans, and identify new drug targets.
          </p>

          <p>
            Natural language processing is being used to extract valuable information from electronic health records, research papers, and clinical notes. AI-powered chatbots and virtual assistants are improving patient engagement and providing preliminary diagnostic support. Additionally, AI is accelerating drug discovery by identifying promising compounds and predicting their effectiveness.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Advanced Surgical Techniques <button onClick={() => toggleBookmark('surgical_tech')} className="ml-2 text-blue-500">★</button></h2>
          <p>
            Robotic surgery and minimally invasive techniques are revolutionizing surgical procedures, offering patients reduced pain, shorter recovery times, and lower risk of complications. Surgical robots provide enhanced precision, flexibility, and control compared to traditional techniques. These systems allow surgeons to operate with greater accuracy, especially in delicate procedures requiring fine motor skills.
          </p>

          <p>
            Augmented reality (AR) and virtual reality (VR) technologies are also transforming surgical planning and training. Surgeons can now visualize complex anatomical structures in 3D, practice procedures in virtual environments, and receive real-time guidance during operations. These technologies are improving surgical outcomes and reducing the learning curve for complex procedures.
          </p>
        </section>

        <section className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Interactive Quiz</h2>
          {!isQuizActive ? (
            <button 
              onClick={() => setIsQuizActive(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Test Your Knowledge
            </button>
          ) : (
            <div className="space-y-6">
              <div>
                <p className="font-medium mb-2 text-gray-700">1. What does CRISPR-Cas9 technology primarily enable scientists to do?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) Create new proteins</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) Modify DNA sequences precisely</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Clone entire organisms</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) Synthesize new drugs</span></label>
              </div>

              <div>
                <p className="font-medium mb-2 text-gray-700">2. What is a key principle of precision medicine?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) Using the same treatment for all patients</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) Tailoring treatment to individual characteristics</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) Focusing only on genetic factors</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) Eliminating the need for doctors</span></label>
              </div>

              <button 
                onClick={checkQuizAnswers}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4"
              >
                Check Answers
              </button>
              
              {showQuizResults && (
                <div className="mt-4 p-4 bg-white/70 rounded border border-blue-300">
                  <h3 className="font-bold mb-2 text-blue-700">Results:</h3>
                  <p className="text-gray-700">Question 1: {quizAnswers.q1 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - CRISPR-Cas9 enables precise modification of DNA sequences.</p>
                  <p className="text-gray-700">Question 2: {quizAnswers.q2 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - Precision medicine tailors treatment to individual characteristics.</p>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="bg-cyan-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-cyan-700">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-700">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-cyan-200 pb-4">
                <h3 className="font-semibold text-blue-700">{faq.question}</h3>
                <p className="mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <nav className="border-t border-blue-200 pt-6 mt-8">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Previous Article</h3>
              <Link href="/blog" className="text-blue-600 hover:underline">
                ← Back to Blog
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Next Article</h3>
              <Link href="/blog/precision-medicine-genomics" className="text-blue-600 hover:underline">
                Precision Medicine and Genomics →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}