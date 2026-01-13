import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function AnalyticalChemistryBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is the difference between qualitative and quantitative analysis?",
      answer: "Qualitative analysis identifies what substances are present in a sample, determining the identity of components. Quantitative analysis measures how much of each substance is present, determining the concentration or amount. Both types of analysis are often performed together to fully characterize a sample."
    },
    {
      question: "What is chromatography and how does it work?",
      answer: "Chromatography is a separation technique based on the differential partitioning of compounds between a stationary phase and a mobile phase. Components of a mixture interact differently with the phases, causing them to separate as the mobile phase carries them along. Common types include gas chromatography (GC) and liquid chromatography (LC)."
    },
    {
      question: "What is spectrophotometry and its applications?",
      answer: "Spectrophotometry measures how much light a sample absorbs at specific wavelengths. It's based on the Beer-Lambert law, which relates absorbance to concentration. Applications include determining concentrations of analytes, studying molecular structure, and monitoring reaction kinetics. UV-Vis, IR, and atomic absorption spectroscopy are common variants."
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <Head>
        <title>Analytical Chemistry: Techniques and Instruments - Chemistry | HAM BLOGS</title>
        <meta name="description" content="Methods and tools for identifying and quantifying chemical substances." />
        <link rel="canonical" href="https://ham-blogs.com/blog/analytical-chemistry-techniques-instruments" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              ← Back to Chemistry
            </button>
            <div className="flex space-x-4">
              <button 
                onClick={() => toggleBookmark('main')}
                className={`p-2 rounded-full ${bookmarks.includes('main') ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Analytical Chemistry: Techniques and Instruments</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">🔬 Chemistry</span>
            <span>⏱️ 13 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            Methods and tools for identifying and quantifying chemical substances
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Introduction to Analytical Chemistry <button onClick={() => toggleBookmark('intro')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Analytical chemistry is the science of obtaining, processing, and communicating information about the composition and structure of matter. It encompasses both qualitative analysis (identifying what is present) and quantitative analysis (determining how much is present). Analytical chemistry plays a crucial role in all areas of chemistry and is essential in fields ranging from medicine and pharmaceuticals to environmental science and forensics.
          </p>
          
          <p>
            The field has evolved from classical wet chemistry methods to sophisticated instrumental techniques. Modern analytical chemistry combines fundamental chemical principles with advanced technology to provide precise, accurate, and reproducible measurements of chemical compositions and properties.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Classical Analytical Methods <button onClick={() => toggleBookmark('classical')} className="ml-2 text-yellow-600">★</button></h2>
          <h3>Gravimetric Analysis</h3>
          <p>
            Gravimetric analysis determines the amount of an analyte by measuring mass. The analyte is converted to a solid form through precipitation or volatilization, then weighed. This method can provide extremely accurate results when properly executed, as mass can be measured with high precision. However, it is time-consuming and requires careful attention to ensure complete precipitation and purity of the precipitate.
          </p>

          <h3>Volumetric Analysis (Titrimetry)</h3>
          <p>
            Volumetric analysis involves measuring the volume of a solution of known concentration required to react completely with the analyte. Acid-base titrations, redox titrations, and complexometric titrations are common examples. The method is relatively fast and accurate when performed correctly, relying on precise measurement of volumes using calibrated glassware.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Separation Techniques <button onClick={() => toggleBookmark('separations')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Separation techniques are essential for analyzing complex samples. Chromatography separates components based on their differential interactions with stationary and mobile phases. Gas chromatography (GC) is ideal for volatile compounds, while liquid chromatography (LC) works well for less volatile substances. High-performance liquid chromatography (HPLC) uses high pressure for faster, more efficient separations.
          </p>

          <p>
            Electrophoresis separates charged species based on their mobility in an electric field. Centrifugation separates components based on density differences. Extraction techniques use differences in solubility to separate compounds between immiscible solvents. Each method has specific applications based on the properties of the analytes.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Spectroscopic Methods <button onClick={() => toggleBookmark('spectroscopy')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Spectroscopic methods analyze the interaction of electromagnetic radiation with matter. Ultraviolet-visible (UV-Vis) spectroscopy measures absorption in the UV and visible regions, useful for compounds with conjugated systems. Infrared (IR) spectroscopy identifies functional groups based on vibrational transitions.
          </p>

          <p>
            Nuclear magnetic resonance (NMR) spectroscopy provides detailed structural information by observing the behavior of atomic nuclei in magnetic fields. Mass spectrometry (MS) determines molecular masses and fragmentation patterns, providing structural information. Atomic absorption spectroscopy (AAS) and inductively coupled plasma (ICP) techniques are excellent for elemental analysis.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Quality Assurance and Applications <button onClick={() => toggleBookmark('quality')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Quality assurance in analytical chemistry involves validation of methods, calibration of instruments, and use of standards to ensure accuracy and precision. Statistical analysis of data helps assess reliability. Calibration curves, blanks, and replicate measurements are essential for reliable results.
          </p>

          <p>
            Analytical chemistry applications are vast: environmental monitoring for pollutants, quality control in pharmaceuticals and food production, forensic analysis, clinical diagnostics, and research in all scientific fields. The field continues to evolve with new techniques for analyzing increasingly complex samples with greater sensitivity and specificity.
          </p>
        </section>

        <section className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Interactive Quiz</h2>
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
                <p className="font-medium mb-2">1. What does gravimetric analysis measure to determine analyte concentration?</p>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) Volume</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) Mass</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Light absorption</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) Electrical conductivity</span></label>
              </div>

              <div>
                <p className="font-medium mb-2">2. Which spectroscopic method is best for determining molecular structure and functional groups?</p>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) UV-Vis spectroscopy</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) IR spectroscopy</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) Mass spectrometry</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) Atomic absorption</span></label>
              </div>

              <button 
                onClick={checkQuizAnswers}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4"
              >
                Check Answers
              </button>
              
              {showQuizResults && (
                <div className="mt-4 p-4 bg-white rounded border">
                  <h3 className="font-bold mb-2">Results:</h3>
                  <p>Question 1: {quizAnswers.q1 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - Gravimetric analysis measures mass to determine analyte concentration.</p>
                  <p>Question 2: {quizAnswers.q2 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - IR spectroscopy is excellent for identifying functional groups and molecular structure.</p>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="bg-yellow-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-yellow-800">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="font-semibold">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <nav className="border-t pt-6 mt-8">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold mb-2">Previous Article</h3>
              <Link href="/blog/organic-chemistry-carbon-compounds" className="text-blue-600 hover:underline">
                ← Organic Chemistry: Carbon Compounds
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Next Article</h3>
              <Link href="/blog" className="text-blue-600 hover:underline">
                Back to Blog →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}