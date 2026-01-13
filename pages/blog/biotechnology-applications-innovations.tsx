import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function BiotechnologyBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is biotechnology?",
      answer: "Biotechnology is the use of living systems and organisms to develop or make products. It encompasses techniques that use biological processes, organisms, or systems to manufacture products intended to improve human health and society. Modern biotechnology often involves genetic engineering and recombinant DNA technology."
    },
    {
      question: "What are some applications of biotechnology?",
      answer: "Biotechnology has applications in medicine (drug production, gene therapy, diagnostics), agriculture (GM crops, pest-resistant plants), industry (biofuels, enzymes, biodegradable plastics), and environmental science (bioremediation, waste treatment)."
    },
    {
      question: "What is CRISPR and why is it significant?",
      answer: "CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats) is a revolutionary gene-editing technology that allows scientists to make precise changes to DNA. It's significant because it's faster, cheaper, and more accurate than previous gene-editing methods, opening possibilities for treating genetic diseases."
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      <Head>
        <title>Biotechnology: Applications and Innovations - Biology | HAM BLOGS</title>
        <meta name="description" content="Modern biotechnology and its impact on society, medicine, and the environment." />
        <link rel="canonical" href="https://ham-blogs.com/blog/biotechnology-applications-innovations" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-green-600 hover:text-green-800 font-medium flex items-center"
            >
              ← Back to Biology
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Biotechnology: Applications and Innovations</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">🧪 Biology</span>
            <span>⏱️ 13 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            Modern biotech and its impact on society: from gene editing to sustainable solutions
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Introduction to Biotechnology <button onClick={() => toggleBookmark('intro')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Biotechnology harnesses biological processes, organisms, or systems to develop products and technologies that improve human health and society. While traditional biotechnology dates back thousands of years to fermentation and agriculture, modern biotechnology emerged in the 20th century with advances in molecular biology, genetics, and cellular biology. Today's biotechnology involves manipulating DNA, proteins, and cells to create solutions for medicine, agriculture, industry, and environmental challenges.
          </p>
          
          <p>
            The field encompasses multiple subdisciplines including red biotechnology (medical applications), green biotechnology (agricultural applications), white biotechnology (industrial applications), and blue biotechnology (marine and aquatic applications). These areas leverage the power of biological systems to create innovative solutions to pressing global challenges, from disease treatment to sustainable manufacturing.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Medical Applications <button onClick={() => toggleBookmark('medical')} className="ml-2 text-yellow-600">★</button></h2>
          <h3>Pharmaceutical Production</h3>
          <p>
            Biotechnology has revolutionized pharmaceutical production. Recombinant DNA technology allows the production of human proteins in bacterial or mammalian cell systems. Insulin, growth hormone, and clotting factors are now manufactured using genetically modified organisms. Monoclonal antibodies, used to treat cancer and autoimmune diseases, are produced through sophisticated cell culture techniques.
          </p>

          <h3>Gene Therapy and Diagnostics</h3>
          <p>
            Gene therapy aims to treat genetic disorders by introducing functional genes into patients' cells. Recent successes include treatments for inherited blindness, spinal muscular atrophy, and certain immune deficiencies. Diagnostic applications include PCR-based tests for infectious diseases, genetic screening for inherited disorders, and personalized medicine based on genetic profiles that predict drug responses.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Agricultural Innovations <button onClick={() => toggleBookmark('agriculture')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Agricultural biotechnology has transformed crop production through genetic engineering. Genetically modified (GM) crops with herbicide resistance, pest resistance, and improved nutritional content have increased yields and reduced pesticide use. Golden rice, engineered to produce beta-carotene, addresses vitamin A deficiency in developing countries. Marker-assisted breeding accelerates traditional breeding programs using genetic markers.
          </p>

          <p>
            Biotechnology also contributes to sustainable agriculture through nitrogen-fixing bacteria, biofertilizers, and biopesticides. These biological alternatives reduce dependence on chemical inputs, decreasing environmental impact. Disease-resistant crops reduce crop losses and improve food security. Climate-resilient varieties, developed using biotechnology tools, help agriculture adapt to changing environmental conditions.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Industrial and Environmental Applications <button onClick={() => toggleBookmark('industry')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Industrial biotechnology uses biological systems for manufacturing processes. Engineered microorganisms produce biofuels, pharmaceuticals, enzymes, and biodegradable plastics. Biofuel production from algae and waste materials offers renewable energy alternatives. Enzymes serve as environmentally friendly catalysts in detergents, textiles, and food processing.
          </p>

          <p>
            Environmental applications include bioremediation—the use of microorganisms to clean up contaminated environments. Engineered bacteria can break down oil spills, heavy metals, and toxic chemicals. Biotechnology contributes to waste management through composting, anaerobic digestion, and recycling of biological materials. Synthetic biology approaches design new biological systems for environmental cleanup.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Emerging Technologies and Future Directions <button onClick={() => toggleBookmark('future')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            CRISPR-Cas9 gene editing represents a revolutionary advancement in biotechnology, enabling precise DNA modifications. Base editing and prime editing refine this technology, allowing targeted changes without double-strand breaks. Synthetic biology constructs artificial biological systems and organisms with designed functions. Lab-grown meat and organoids provide alternatives to animal testing and potential solutions to organ shortages.
          </p>

          <p>
            The convergence of biotechnology with artificial intelligence and machine learning accelerates drug discovery and protein design. AI predicts protein structures, identifies drug targets, and optimizes biological pathways. Personalized medicine tailors treatments based on individual genetic, biomarker, and clinical profiles. Biotechnology continues to expand into new frontiers, including space biotechnology for life support systems and pharmaceutical production in space.
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
                <p className="font-medium mb-2">1. Which biotechnology discipline focuses on medical applications?</p>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) Red biotechnology</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) Green biotechnology</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) White biotechnology</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) Blue biotechnology</span></label>
              </div>

              <div>
                <p className="font-medium mb-2">2. What does CRISPR stand for?</p>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) Clustered Regularly Interspaced Short Palindromic Repeats</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) Controlled Replication and Insertion of Specific DNA Sequences</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) Catalyzed Recognition of Inserted Protein Sequences</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) Cloned Repetitive Integration System for Recombination</span></label>
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
                  <p>Question 1: {quizAnswers.q1 === 'A' ? '✓ Correct' : '✗ Incorrect (Correct: A)'} - Red biotechnology refers to medical applications of biotechnology.</p>
                  <p>Question 2: {quizAnswers.q2 === 'A' ? '✓ Correct' : '✗ Incorrect (Correct: A)'} - CRISPR stands for Clustered Regularly Interspaced Short Palindromic Repeats.</p>
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
              <Link href="/blog/human-anatomy-physiology" className="text-blue-600 hover:underline">
                ← Human Anatomy and Physiology
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