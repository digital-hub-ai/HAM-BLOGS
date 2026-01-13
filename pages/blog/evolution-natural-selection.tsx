import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function EvolutionBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is natural selection?",
      answer: "Natural selection is the process by which organisms with traits that are better suited to their environment tend to survive and reproduce more successfully than those without these traits. Over time, this leads to evolutionary change in populations."
    },
    {
      question: "What evidence supports the theory of evolution?",
      answer: "Evidence for evolution comes from multiple sources: fossil records showing transitional forms, comparative anatomy revealing homologous structures, embryological similarities, biogeographical patterns, and molecular evidence from DNA and protein sequences."
    },
    {
      question: "How does genetic variation contribute to evolution?",
      answer: "Genetic variation provides the raw material for evolution. Mutations, genetic recombination during sexual reproduction, and gene flow create variation within populations. Natural selection acts on this variation, favoring traits that increase survival and reproduction."
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
        <title>Evolution: Natural Selection - Biology | HAM BLOGS</title>
        <meta name="description" content="Exploring Darwin's theory of evolution and modern evolutionary concepts." />
        <link rel="canonical" href="https://ham-blogs.com/blog/evolution-natural-selection" />
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Evolution: Natural Selection</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">🔍 Biology</span>
            <span>⏱️ 13 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            Darwin's revolutionary theory and modern evolutionary concepts explaining the diversity of life on Earth
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Introduction to Evolution <button onClick={() => toggleBookmark('intro')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Evolution is the fundamental concept that explains the diversity of life on Earth and the changes that have occurred in living organisms over millions of years. The theory of evolution by natural selection, proposed independently by Charles Darwin and Alfred Russel Wallace in the mid-19th century, provides a unifying framework for understanding how species change over time and how new species arise.
          </p>
          
          <p>
            Before Darwin, the prevailing view was that species were fixed and unchanging. The publication of "On the Origin of Species" in 1859 revolutionized biological science by proposing a natural mechanism for evolutionary change. Today, evolution is supported by overwhelming evidence from multiple scientific disciplines and is considered the cornerstone of modern biology.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Darwin's Theory of Natural Selection <button onClick={() => toggleBookmark('darwin')} className="ml-2 text-yellow-600">★</button></h2>
          <h3>Key Observations</h3>
          <p>
            Darwin based his theory on several key observations: 1) Individuals within a population vary in their traits, 2) Many of these traits are heritable, 3) Populations produce more offspring than the environment can support, and 4) Not all individuals survive to reproduce. From these observations, he concluded that individuals with traits better suited to their environment are more likely to survive and reproduce, passing their advantageous traits to their offspring.
          </p>

          <h3>Process and Outcomes</h3>
          <p>
            Natural selection operates on phenotypic variations in populations. Over many generations, favorable traits become more common while unfavorable traits decrease in frequency. This gradual process leads to adaptation, where populations become better suited to their environments. In some cases, this can lead to speciation—the formation of new species.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Evidence for Evolution <button onClick={() => toggleBookmark('evidence')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            The evidence supporting evolution is overwhelming and comes from multiple scientific disciplines. The fossil record provides a chronological sequence of life forms, showing transitional forms and gradual changes over geological time. Comparative anatomy reveals homologous structures—similar features derived from common ancestors—and vestigial organs that have lost their function through evolution.
          </p>

          <p>
            Embryological development shows similar patterns among related organisms, supporting common ancestry. Biogeography demonstrates how geographic distribution affects evolutionary patterns. Perhaps most compellingly, molecular evidence from DNA and protein sequences provides detailed information about evolutionary relationships, with closely related species having more similar genetic sequences.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Modern Synthesis and Contemporary Evolutionary Theory <button onClick={() => toggleBookmark('modern')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            The modern synthesis of the 1930s and 1940s integrated Darwin's theory with Mendelian genetics, explaining the mechanisms of inheritance that Darwin couldn't understand. Population genetics emerged as a field that quantifies evolutionary change using mathematical models. The synthesis showed how genetic mutations, natural selection, genetic drift, and gene flow contribute to evolutionary change.
          </p>

          <p>
            Contemporary evolutionary biology incorporates additional discoveries, including neutral evolution (changes that don't affect fitness), punctuated equilibrium (long periods of stasis punctuated by rapid change), and epigenetic inheritance. Evolutionary developmental biology (evo-devo) examines how developmental processes evolve and how small genetic changes can lead to significant morphological differences.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Applications and Implications <button onClick={() => toggleBookmark('applications')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Evolutionary theory has profound implications across many fields. In medicine, understanding evolution helps explain antibiotic resistance, vaccine development, and the origins of infectious diseases. Agricultural applications include breeding programs and understanding pest resistance to pesticides. Conservation biology uses evolutionary principles to preserve genetic diversity and maintain viable populations.
          </p>

          <p>
            Evolution also provides insights into human behavior, psychology, and social structures through evolutionary psychology and sociobiology. However, evolutionary theory has sometimes been misused to justify social inequalities or political ideologies—a misuse known as social Darwinism that does not reflect the actual scientific principles of biological evolution.
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
                <p className="font-medium mb-2">1. Which of the following is NOT one of Darwin's key observations?</p>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) Individuals within populations vary in their traits</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) Traits are not heritable</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Populations produce more offspring than the environment can support</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) Not all individuals survive to reproduce</span></label>
              </div>

              <div>
                <p className="font-medium mb-2">2. What is the primary mechanism of evolution according to Darwin?</p>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) Mutation</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) Natural selection</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) Genetic drift</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) Gene flow</span></label>
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
                  <p>Question 1: {quizAnswers.q1 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - Darwin observed that traits ARE heritable, which was crucial to his theory.</p>
                  <p>Question 2: {quizAnswers.q2 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - Natural selection is the primary mechanism Darwin proposed for evolutionary change.</p>
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
              <Link href="/blog/genetics-dna-reproduction" className="text-blue-600 hover:underline">
                ← Genetics: DNA and Reproduction
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Next Article</h3>
              <Link href="/blog/ecosystems-biodiversity-conservation" className="text-blue-600 hover:underline">
                Ecosystems: Biodiversity and Conservation →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}