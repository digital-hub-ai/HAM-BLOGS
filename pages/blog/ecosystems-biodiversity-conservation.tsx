import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function EcosystemsBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is an ecosystem?",
      answer: "An ecosystem is a community of living organisms (biotic factors) interacting with each other and their physical environment (abiotic factors) in a specific area. Examples include forests, deserts, oceans, and wetlands."
    },
    {
      question: "What are the main components of biodiversity?",
      answer: "Biodiversity has three main components: genetic diversity (variation within species), species diversity (variety of different species), and ecosystem diversity (variety of ecosystems within a region)."
    },
    {
      question: "Why is biodiversity important?",
      answer: "Biodiversity provides ecosystem services like pollination, water purification, climate regulation, and soil fertility. It also contributes to medicine, food security, and economic stability, while enhancing ecosystem resilience."
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
        <title>Ecosystems: Biodiversity and Conservation - Biology | HAM BLOGS</title>
        <meta name="description" content="Understanding interactions between organisms and their environment, and the importance of biodiversity conservation." />
        <link rel="canonical" href="https://ham-blogs.com/blog/ecosystems-biodiversity-conservation" />
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Ecosystems: Biodiversity and Conservation</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">🌍 Biology</span>
            <span>⏱️ 11 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            Interactions between organisms and their environment, and the critical importance of biodiversity conservation
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Introduction to Ecosystems <button onClick={() => toggleBookmark('intro')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            An ecosystem is a complex network of living organisms (biotic factors) interacting with their physical environment (abiotic factors) in a specific area. These interactions form the foundation of life on Earth, creating dynamic systems that regulate climate, purify air and water, and provide resources essential for survival. Ecosystems range from small ponds to vast forests, each with unique characteristics and interdependent relationships.
          </p>
          
          <p>
            Ecosystems function through the flow of energy and the cycling of nutrients. Energy flows through food chains and webs, starting with producers (usually plants) that capture solar energy through photosynthesis, followed by consumers that feed on other organisms, and decomposers that break down dead material. Nutrients cycle through the ecosystem, being absorbed by plants, transferred through food webs, and eventually returned to the environment.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Biodiversity: The Web of Life <button onClick={() => toggleBookmark('biodiversity')} className="ml-2 text-yellow-600">★</button></h2>
          <h3>Types of Biodiversity</h3>
          <p>
            Biodiversity encompasses three interconnected levels: genetic diversity within species, species diversity within ecosystems, and ecosystem diversity across landscapes. Genetic diversity refers to the variety of genes within populations, providing the raw material for evolution and adaptation. Species diversity measures the number and abundance of different species in an area. Ecosystem diversity reflects the variety of habitats and ecological processes.
          </p>

          <h3>Importance of Biodiversity</h3>
          <p>
            Biodiversity provides essential ecosystem services that support human well-being and planetary health. These services include provisioning services (food, water, timber), regulating services (climate regulation, pollination, water purification), supporting services (soil formation, nutrient cycling), and cultural services (recreation, spiritual values). Greater biodiversity often increases ecosystem stability and resilience to disturbances.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Conservation Challenges and Strategies <button onClick={() => toggleBookmark('conservation')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Biodiversity faces unprecedented threats from human activities, including habitat destruction, pollution, climate change, invasive species, and overexploitation of resources. Scientists estimate that current extinction rates are 100 to 1,000 times higher than natural background rates, leading many to characterize the current situation as the sixth mass extinction event.
          </p>

          <p>
            Conservation strategies include protected areas like national parks and wildlife reserves, restoration of degraded ecosystems, sustainable resource management, and legislation protecting endangered species. Captive breeding programs, seed banks, and genetic repositories preserve genetic material for future restoration efforts. International cooperation through treaties like CITES and the Convention on Biological Diversity addresses global conservation challenges.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Ecosystem Services and Human Well-being <button onClick={() => toggleBookmark('services')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Ecosystem services are the benefits that humans derive from functioning ecosystems. Pollination services provided by bees and other insects are essential for food production, worth billions of dollars annually. Forests regulate water flow, preventing floods and droughts while filtering water. Wetlands act as natural filters, removing pollutants from water. These services often go unrecognized in economic calculations, leading to undervaluation of natural systems.
          </p>

          <p>
            Climate regulation is another critical service provided by ecosystems. Forests sequester carbon dioxide, helping mitigate climate change. Oceans absorb heat and CO2, moderating global temperatures. Changes in ecosystem structure due to biodiversity loss can disrupt these services, affecting human health and economic stability. Recognizing the economic value of ecosystem services is increasingly important for conservation efforts.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Future Directions in Conservation <button onClick={() => toggleBookmark('future')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Modern conservation approaches incorporate new technologies and interdisciplinary collaboration. Remote sensing and satellite imagery monitor ecosystem changes in real-time. DNA barcoding and environmental DNA (eDNA) sampling help assess biodiversity more accurately. Citizen science projects engage the public in data collection and conservation awareness.
          </p>

          <p>
            Ecosystem-based adaptation strategies use biodiversity and ecosystem services to help people adapt to climate change. Payments for ecosystem services (PES) programs compensate landowners for maintaining natural systems. Landscape-scale conservation approaches recognize that ecosystems are interconnected and require large-scale protection strategies. The integration of traditional ecological knowledge with modern science offers promising approaches to sustainable resource management.
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
                <p className="font-medium mb-2">1. Which of the following is NOT a type of ecosystem service?</p>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) Provisioning services</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) Regulating services</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Supporting services</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) Economic services</span></label>
              </div>

              <div>
                <p className="font-medium mb-2">2. What are the three levels of biodiversity?</p>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) Genetic, species, ecosystem</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) Individual, population, community</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) Producer, consumer, decomposer</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) Land, water, air</span></label>
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
                  <p>Question 1: {quizAnswers.q1 === 'D' ? '✓ Correct' : '✗ Incorrect (Correct: D)'} - Economic services is not one of the recognized categories of ecosystem services.</p>
                  <p>Question 2: {quizAnswers.q2 === 'A' ? '✓ Correct' : '✗ Incorrect (Correct: A)'} - The three levels of biodiversity are genetic, species, and ecosystem diversity.</p>
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
              <Link href="/blog/evolution-natural-selection" className="text-blue-600 hover:underline">
                ← Evolution: Natural Selection
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Next Article</h3>
              <Link href="/blog/human-anatomy-physiology" className="text-blue-600 hover:underline">
                Human Anatomy and Physiology →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}