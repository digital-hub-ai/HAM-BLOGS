import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function CellTheoryBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What are the three main tenets of cell theory?",
      answer: "The three main tenets of cell theory are: 1) All living organisms are composed of cells, 2) The cell is the basic unit of life, and 3) All cells arise from pre-existing cells."
    },
    {
      question: "Who were the key scientists who contributed to cell theory?",
      answer: "Key contributors include Robert Hooke (who coined the term 'cell'), Anton van Leeuwenhoek (first observed bacteria), Matthias Schleiden (plant cells), Theodor Schwann (animal cells), and Rudolf Virchow (cells arise from pre-existing cells)."
    },
    {
      question: "What is the difference between prokaryotic and eukaryotic cells?",
      answer: "Prokaryotic cells lack a membrane-bound nucleus and organelles, while eukaryotic cells have a nucleus and membrane-bound organelles. Prokaryotes include bacteria and archaea, while eukaryotes include plants, animals, fungi, and protists."
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
        <title>Cell Theory: Structure and Function - Biology | HAM BLOGS</title>
        <meta name="description" content="Explore the fundamental principles of cell theory, cellular structure, and the basic units of life." />
        <link rel="canonical" href="https://ham-blogs.com/blog/cell-theory-structure-function" />
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cell Theory: Structure and Function</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">🔬 Biology</span>
            <span>⏱️ 12 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            Exploring the fundamental unit of life and understanding how cellular structure enables biological function
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Introduction to Cell Theory <button onClick={() => toggleBookmark('intro')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Cell theory represents one of the foundational concepts in biology, establishing the cell as the basic structural and functional unit of all living organisms. This revolutionary concept, developed in the 19th century, fundamentally changed our understanding of life itself and laid the groundwork for modern biological sciences.
          </p>
          
          <p>
            The development of cell theory was a collaborative effort spanning centuries of observation and experimentation. From Robert Hooke's initial observations of cork cells in 1665 to the detailed studies of Schleiden, Schwann, and Virchow in the 1800s, scientists gradually pieced together the universal principles that govern all living matter.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>The Three Core Principles <button onClick={() => toggleBookmark('principles')} className="ml-2 text-yellow-600">★</button></h2>
          <h3>All Living Organisms Are Composed of Cells</h3>
          <p>
            This principle establishes that cells are the fundamental building blocks of life. Whether examining a microscopic bacterium or a massive blue whale, all living entities are constructed from one or more cells. This universality across all life forms demonstrates the fundamental unity of biological organization.
          </p>

          <h3>The Cell Is the Basic Unit of Life</h3>
          <p>
            Cells represent the smallest unit capable of carrying out all life processes. They exhibit all the characteristics of life: metabolism, growth, reproduction, response to stimuli, and adaptation. This principle emphasizes that life's complexity emerges from the coordinated activities of cellular components.
          </p>

          <h3>All Cells Arise from Pre-existing Cells</h3>
          <p>
            This principle, established by Rudolf Virchow's famous phrase "Omnis cellula e cellula" (every cell from a cell), refuted the concept of spontaneous generation. It establishes that cells reproduce through division, passing genetic material to daughter cells and ensuring continuity of life.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Cell Structure and Organization <button onClick={() => toggleBookmark('structure')} className="ml-2 text-yellow-600">★</button></h2>
          <h3>Prokaryotic vs. Eukaryotic Cells</h3>
          <p>
            Cells are broadly classified into two categories based on their internal organization. Prokaryotic cells, found in bacteria and archaea, lack membrane-bound organelles and have their genetic material floating freely in the cytoplasm. Eukaryotic cells, found in plants, animals, fungi, and protists, possess a membrane-bound nucleus and specialized organelles that compartmentalize cellular functions.
          </p>

          <h3>Essential Cellular Components</h3>
          <p>
            Despite their diversity, all cells share certain fundamental components: a plasma membrane that defines the cell's boundary, cytoplasm containing cellular molecules, genetic material (DNA), and ribosomes for protein synthesis. These universal features underscore the common evolutionary origin of all life.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Modern Extensions of Cell Theory <button onClick={() => toggleBookmark('extensions')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Contemporary cell biology has expanded upon the classical principles of cell theory. We now understand that cells communicate with each other, form tissues and organs through specialization, and exhibit remarkable plasticity in their functions. The discovery of cellular differentiation, apoptosis, and cellular signaling pathways has enriched our understanding of cellular behavior.
          </p>

          <p>
            Additionally, advances in microscopy and molecular biology have revealed the incredible complexity within cells. Organelles like mitochondria and chloroplasts have their own genetic material, supporting the endosymbiotic theory of cellular evolution. The study of stem cells has shown that some cells retain the potential to differentiate into multiple cell types.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Applications and Significance <button onClick={() => toggleBookmark('applications')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Cell theory has profound implications across multiple fields. In medicine, understanding cellular dysfunction helps explain disease mechanisms and guides therapeutic development. Cancer, for instance, involves disruptions in normal cell cycle control. In agriculture, knowledge of plant cell structure aids in crop improvement and disease resistance.
          </p>

          <p>
            Biotechnology leverages cellular machinery for producing pharmaceuticals, biofuels, and other valuable compounds. Tissue engineering and regenerative medicine depend on our understanding of cellular properties and behaviors. Environmental science applies cell theory to understand how pollutants affect cellular function and ecosystem health.
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
                <p className="font-medium mb-2">1. Which of the following is NOT a principle of cell theory?</p>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) All living organisms are composed of cells</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) The cell is the basic unit of life</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Cells can spontaneously generate</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) All cells arise from pre-existing cells</span></label>
              </div>

              <div>
                <p className="font-medium mb-2">2. What distinguishes eukaryotic cells from prokaryotic cells?</p>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) Presence of a nucleus</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) Size</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) Shape</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) Both A and B</span></label>
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
                  <p>Question 1: {quizAnswers.q1 === 'C' ? '✓ Correct' : '✗ Incorrect (Correct: C)'} - The principle that cells arise from pre-existing cells refutes spontaneous generation.</p>
                  <p>Question 2: {quizAnswers.q2 === 'D' ? '✓ Correct' : '✗ Incorrect (Correct: D)'} - Eukaryotic cells have a nucleus and are typically larger than prokaryotic cells.</p>
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
              <Link href="/blog" className="text-blue-600 hover:underline">
                ← Back to Blog
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Next Article</h3>
              <Link href="/blog/genetics-dna-reproduction" className="text-blue-600 hover:underline">
                Genetics: DNA and Reproduction →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}