import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function GeneticsDNABlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is the structure of DNA?",
      answer: "DNA has a double helix structure consisting of two complementary strands twisted around each other. Each strand is made up of nucleotides containing a phosphate group, deoxyribose sugar, and nitrogenous bases (adenine, thymine, guanine, and cytosine)."
    },
    {
      question: "How does DNA replication occur?",
      answer: "DNA replication is semi-conservative, meaning each new DNA molecule consists of one original strand and one newly synthesized strand. The process involves unwinding the double helix, synthesizing new complementary strands, and proofreading for errors."
    },
    {
      question: "What is the central dogma of molecular biology?",
      answer: "The central dogma describes the flow of genetic information: DNA is transcribed into RNA, which is then translated into proteins. This process explains how genetic information is expressed in cells."
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
        <title>Genetics: DNA and Reproduction - Biology | HAM BLOGS</title>
        <meta name="description" content="Understanding heredity, DNA structure, and reproductive mechanisms in living organisms." />
        <link rel="canonical" href="https://ham-blogs.com/blog/genetics-dna-reproduction" />
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Genetics: DNA and Reproduction</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">🧬 Biology</span>
            <span>⏱️ 14 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            Understanding heredity, DNA structure, and the mechanisms of reproduction that ensure genetic continuity
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Introduction to Genetics <button onClick={() => toggleBookmark('intro')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Genetics is the branch of biology that studies genes, genetic variation, and heredity in organisms. It explores how traits are passed from parents to offspring through the transmission of genetic information encoded in DNA. The field has evolved from Gregor Mendel's early experiments with pea plants in the 1860s to today's sophisticated understanding of molecular genetics and genomics.
          </p>
          
          <p>
            Modern genetics encompasses multiple subfields including classical genetics (inheritance patterns), molecular genetics (gene structure and function), population genetics (genetic variation within populations), and evolutionary genetics (changes in gene frequencies over time). These areas collectively explain how genetic information shapes life at all levels, from individual organisms to entire ecosystems.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>DNA: The Blueprint of Life <button onClick={() => toggleBookmark('dna')} className="ml-2 text-yellow-600">★</button></h2>
          <h3>Structure and Composition</h3>
          <p>
            Deoxyribonucleic acid (DNA) serves as the primary carrier of genetic information in all known living organisms and many viruses. The double helix structure, discovered by Watson and Crick in 1953, consists of two antiparallel strands held together by hydrogen bonds between complementary base pairs: adenine with thymine, and guanine with cytosine.
          </p>

          <h3>Organization and Packaging</h3>
          <p>
            DNA is packaged into chromosomes within the nucleus of eukaryotic cells. The linear DNA molecule is wrapped around histone proteins to form nucleosomes, which are further coiled and condensed into chromatin. This packaging allows meters of DNA to fit within the tiny volume of a cell nucleus while still being accessible for gene expression.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Gene Expression and Regulation <button onClick={() => toggleBookmark('expression')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Gene expression involves two main processes: transcription and translation. During transcription, DNA is used as a template to synthesize messenger RNA (mRNA) in the nucleus. The mRNA then travels to ribosomes in the cytoplasm, where translation occurs—the synthesis of proteins based on the genetic code carried by the mRNA.
          </p>

          <p>
            Gene regulation ensures that genes are expressed at the right time, in the right cells, and in appropriate amounts. Regulatory mechanisms include transcription factors, epigenetic modifications, and post-transcriptional controls. These processes allow cells to respond to environmental signals and maintain proper function while conserving energy.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Modes of Reproduction <button onClick={() => toggleBookmark('reproduction')} className="ml-2 text-yellow-600">★</button></h2>
          <h3>Sexual Reproduction</h3>
          <p>
            Sexual reproduction involves the fusion of gametes (sex cells) from two parents, resulting in offspring with genetic variation. Meiosis produces haploid gametes with half the chromosome number of somatic cells. When sperm and egg unite during fertilization, diploid zygotes are formed with a unique combination of genetic material from both parents.
          </p>

          <h3>Asexual Reproduction</h3>
          <p>
            Asexual reproduction produces genetically identical offspring from a single parent. Mechanisms include binary fission in bacteria, budding in yeast, and vegetative propagation in plants. While asexual reproduction is efficient and preserves favorable genetic combinations, it reduces genetic diversity and adaptability to changing environments.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Modern Applications and Ethics <button onClick={() => toggleBookmark('applications')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Advances in genetics have revolutionized medicine, agriculture, and forensics. Genetic testing allows for early diagnosis of inherited diseases, while gene therapy offers potential treatments for genetic disorders. In agriculture, genetic engineering has produced crops with improved yields, pest resistance, and nutritional value.
          </p>

          <p>
            However, genetic technologies raise ethical concerns about privacy, consent, and the potential for genetic discrimination. The ability to edit genes using tools like CRISPR-Cas9 has sparked debates about the ethics of germline editing and "designer babies." Society continues to grapple with balancing the benefits of genetic advances against potential risks and ethical considerations.
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
                <p className="font-medium mb-2">1. What are the complementary base pairs in DNA?</p>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) Adenine-Thymine and Guanine-Cytosine</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) Adenine-Guanine and Thymine-Cytosine</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Adenine-Cytosine and Guanine-Thymine</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) All bases can pair with any other base</span></label>
              </div>

              <div>
                <p className="font-medium mb-2">2. What is the main difference between sexual and asexual reproduction?</p>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) Sexual reproduction involves one parent, asexual involves two</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) Sexual reproduction produces identical offspring, asexual produces varied offspring</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) Sexual reproduction produces varied offspring, asexual produces identical offspring</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) There is no difference between them</span></label>
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
                  <p>Question 1: {quizAnswers.q1 === 'A' ? '✓ Correct' : '✗ Incorrect (Correct: A)'} - DNA base pairing follows specific rules: A-T and G-C.</p>
                  <p>Question 2: {quizAnswers.q2 === 'C' ? '✓ Correct' : '✗ Incorrect (Correct: C)'} - Sexual reproduction creates genetic diversity while asexual reproduction produces clones.</p>
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
              <Link href="/blog/cell-theory-structure-function" className="text-blue-600 hover:underline">
                ← Cell Theory: Structure and Function
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Next Article</h3>
              <Link href="/blog/evolution-natural-selection" className="text-blue-600 hover:underline">
                Evolution: Natural Selection →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}