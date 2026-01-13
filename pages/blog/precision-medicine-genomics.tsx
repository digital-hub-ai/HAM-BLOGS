import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function PrecisionMedicineBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is pharmacogenomics?",
      answer: "Pharmacogenomics is the study of how genes affect a person's response to drugs. It combines pharmacology and genomics to develop effective, safe medications and doses that are tailored to a person's genetic makeup. This field helps predict which medications will work best for individual patients and reduce adverse drug reactions."
    },
    {
      question: "How does genomic sequencing work in precision medicine?",
      answer: "Genomic sequencing determines the complete DNA sequence of an individual's genome. In precision medicine, this information is used to identify genetic variants that may affect disease risk, drug metabolism, or treatment response. This enables physicians to select the most appropriate treatments and dosages for individual patients based on their genetic profile."
    },
    {
      question: "What are the ethical considerations in precision medicine?",
      answer: "Precision medicine raises several ethical considerations, including privacy and data security of genetic information, potential genetic discrimination by employers or insurers, equitable access to genomic testing and personalized treatments, and informed consent for genetic testing. There are also concerns about the interpretation of genetic variants of uncertain significance."
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Head>
        <title>Precision Medicine and Genomics - Medicine | HAM BLOGS</title>
        <meta name="description" content="How genetic information is enabling personalized treatment approaches." />
        <link rel="canonical" href="https://ham-blogs.com/blog/precision-medicine-genomics" />
      </Head>

      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-green-600 hover:text-green-800 font-medium flex items-center"
            >
              ← Back to Medicine
            </button>
            <div className="flex space-x-4">
              <button 
                onClick={() => toggleBookmark('main')}
                className={`p-2 rounded-full ${bookmarks.includes('main') ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Precision Medicine and Genomics</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">🧬 Medicine</span>
            <span>⏱️ 14 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            How genetic information is enabling personalized treatment approaches
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Introduction to Precision Medicine <button onClick={() => toggleBookmark('intro')} className="ml-2 text-green-500">★</button></h2>
          <p>
            Precision medicine represents a revolutionary approach to healthcare that takes into account individual differences in people's genes, environments, and lifestyles. Rather than applying a one-size-fits-all treatment model, precision medicine tailors medical care to the individual characteristics of each patient. This approach has the potential to improve treatment efficacy while reducing adverse effects by matching therapies to patients most likely to benefit.
          </p>
          
          <p>
            The foundation of precision medicine lies in understanding how genetic variations influence disease susceptibility, drug metabolism, and treatment response. Genomic sequencing technologies have made it possible to analyze an individual's genetic makeup quickly and affordably, enabling physicians to make more informed decisions about prevention, diagnosis, and treatment strategies. This personalized approach is particularly valuable in treating complex diseases like cancer, where genetic variations play a crucial role.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Genomics and Personalized Treatment <button onClick={() => toggleBookmark('genomics')} className="ml-2 text-green-500">★</button></h2>
          <h3 className="text-green-600">Genomic Sequencing Technologies</h3>
          <p>
            Next-generation sequencing (NGS) technologies have dramatically reduced the cost and time required for genomic analysis. Whole genome sequencing, whole exome sequencing, and targeted gene panels allow clinicians to identify specific genetic variants associated with disease risk or treatment response. These technologies are increasingly being integrated into clinical practice, particularly in oncology where tumor genomic profiling guides treatment selection.
          </p>

          <h3 className="text-green-600">Clinical Applications</h3>
          <p>
            In oncology, genomic profiling of tumors identifies specific mutations that can be targeted with precision therapies. For example, patients with lung cancer harboring EGFR mutations respond well to EGFR inhibitors, while those with ALK rearrangements benefit from ALK inhibitors. Pharmacogenomic testing helps determine the appropriate dose of medications like warfarin and clopidogrel based on genetic variants that affect drug metabolism.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Pharmacogenomics in Practice <button onClick={() => toggleBookmark('pharmacogenomics')} className="ml-2 text-green-500">★</button></h2>
          <p>
            Pharmacogenomics studies how genes affect a person's response to drugs, enabling personalized medication selection and dosing. Genetic variations in drug-metabolizing enzymes like CYP2D6, CYP2C19, and CYP3A4 can significantly impact how individuals process medications. Some people may be ultra-rapid metabolizers, requiring higher doses, while others may be poor metabolizers, requiring lower doses or alternative medications to avoid toxicity.
          </p>

          <p>
            Clinical implementation of pharmacogenomics is expanding rapidly, with guidelines from organizations like the Clinical Pharmacogenetics Implementation Consortium (CPIC) providing evidence-based recommendations for incorporating genetic information into prescribing decisions. Electronic health records are increasingly integrating pharmacogenomic data to alert physicians about potential drug-gene interactions.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Challenges and Opportunities <button onClick={() => toggleBookmark('challenges')} className="ml-2 text-green-500">★</button></h2>
          <p>
            Despite its promise, precision medicine faces several challenges. The interpretation of genetic variants, particularly those of uncertain significance, remains complex. Data privacy and security concerns arise when handling sensitive genetic information. Additionally, there are disparities in genomic databases, with most data derived from populations of European ancestry, potentially limiting the applicability of findings to diverse populations.
          </p>

          <p>
            However, these challenges present opportunities for advancement. Efforts are underway to diversify genomic databases and improve variant interpretation. New technologies like polygenic risk scores are being developed to assess the combined effect of multiple genetic variants. Machine learning approaches are being applied to integrate genomic data with other clinical information for more accurate predictions.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Future of Precision Medicine <button onClick={() => toggleBookmark('future')} className="ml-2 text-green-500">★</button></h2>
          <p>
            The future of precision medicine will likely involve the integration of multiple data types, including genomics, proteomics, metabolomics, and digital health data from wearable devices. This multi-omics approach will provide a more comprehensive understanding of individual health and disease. Artificial intelligence will play an increasingly important role in analyzing complex datasets and identifying patterns that inform personalized treatment strategies.
          </p>

          <p>
            As genomic sequencing becomes more accessible and our understanding of genetic variants improves, precision medicine will expand beyond rare genetic diseases and cancer to encompass common conditions like cardiovascular disease, diabetes, and mental health disorders. The goal is to move toward predictive, preventive, personalized, and participatory (P4) medicine.
          </p>
        </section>

        <section className="bg-green-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-700">Interactive Quiz</h2>
          {!isQuizActive ? (
            <button 
              onClick={() => setIsQuizActive(true)}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Test Your Knowledge
            </button>
          ) : (
            <div className="space-y-6">
              <div>
                <p className="font-medium mb-2 text-gray-700">1. What does pharmacogenomics study?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) How genes affect drug response</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) How drugs affect gene expression</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) How genes cause diseases</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) How drugs are developed</span></label>
              </div>

              <div>
                <p className="font-medium mb-2 text-gray-700">2. What is a key benefit of precision medicine?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) One-size-fits-all approach</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) Tailored treatments for individuals</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) Reduced need for doctors</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) Lower healthcare costs</span></label>
              </div>

              <button 
                onClick={checkQuizAnswers}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4"
              >
                Check Answers
              </button>
              
              {showQuizResults && (
                <div className="mt-4 p-4 bg-white/70 rounded border border-green-300">
                  <h3 className="font-bold mb-2 text-green-700">Results:</h3>
                  <p className="text-gray-700">Question 1: {quizAnswers.q1 === 'A' ? '✓ Correct' : '✗ Incorrect (Correct: A)'} - Pharmacogenomics studies how genes affect drug response.</p>
                  <p className="text-gray-700">Question 2: {quizAnswers.q2 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - A key benefit of precision medicine is tailored treatments for individuals.</p>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="bg-emerald-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-emerald-700">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-700">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-emerald-200 pb-4">
                <h3 className="font-semibold text-green-700">{faq.question}</h3>
                <p className="mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <nav className="border-t border-green-200 pt-6 mt-8">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Previous Article</h3>
              <Link href="/blog/revolutionary-medical-advances" className="text-green-600 hover:underline">
                ← Revolutionary Medical Advances Transforming Healthcare
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Next Article</h3>
              <Link href="/blog/artificial-intelligence-healthcare" className="text-green-600 hover:underline">
                Artificial Intelligence in Healthcare →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}