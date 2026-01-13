import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function ClimateChangeBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What are the main greenhouse gases contributing to climate change?",
      answer: "The main greenhouse gases include carbon dioxide (CO2), methane (CH4), nitrous oxide (N2O), and fluorinated gases. Carbon dioxide is the largest contributor, primarily from fossil fuel combustion and deforestation. Methane comes from agriculture, landfills, and fossil fuel extraction. Nitrous oxide originates from agricultural and industrial activities."
    },
    {
      question: "How does climate change affect biodiversity?",
      answer: "Climate change affects biodiversity through habitat loss, altered migration patterns, changes in food availability, and shifts in breeding seasons. Species that cannot adapt quickly enough face extinction. Coral reefs are particularly vulnerable to warming oceans, leading to coral bleaching. Changing precipitation patterns affect plant communities and the animals that depend on them."
    },
    {
      question: "What are climate feedback loops?",
      answer: "Climate feedback loops are processes that amplify or dampen the effects of climate change. Positive feedback loops amplify changes (e.g., melting ice reduces Earth's reflectivity, causing more warming). Negative feedback loops dampen changes (e.g., increased cloud formation reflecting sunlight). Understanding these feedbacks is crucial for predicting future climate scenarios."
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
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100">
      <Head>
        <title>Climate Change: Causes, Effects, and Solutions - Environmental Science | HAM BLOGS</title>
        <meta name="description" content="Understanding the science of climate change and strategies for mitigation and adaptation." />
        <link rel="canonical" href="https://ham-blogs.com/blog/climate-change-causes-effects-solutions" />
      </Head>

      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              ← Back to Environmental Science
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Climate Change: Causes, Effects, and Solutions</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">🌡️ Environmental Science</span>
            <span>⏱️ 16 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            Understanding the science of climate change and strategies for mitigation and adaptation
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Introduction to Climate Change <button onClick={() => toggleBookmark('intro')} className="ml-2 text-blue-500">★</button></h2>
          <p>
            Climate change refers to long-term shifts in global temperatures and weather patterns, primarily driven by human activities that increase concentrations of greenhouse gases in the atmosphere. While climate variations have occurred naturally throughout Earth's history, the current rate of change is unprecedented and largely attributed to human-induced emissions of carbon dioxide, methane, and other greenhouse gases since the Industrial Revolution.
          </p>
          
          <p>
            The scientific consensus, supported by thousands of studies and observations from multiple independent research institutions, confirms that human activities are the dominant cause of observed warming since the mid-20th century. The consequences of climate change are already being felt worldwide, affecting ecosystems, weather patterns, sea levels, and human societies across all continents and ocean regions.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Causes of Climate Change <button onClick={() => toggleBookmark('causes')} className="ml-2 text-blue-500">★</button></h2>
          <h3 className="text-blue-600">Greenhouse Gas Emissions</h3>
          <p>
            The primary driver of contemporary climate change is the emission of greenhouse gases, particularly carbon dioxide, from human activities. Burning fossil fuels for electricity, heat, and transportation accounts for about 75% of global greenhouse gas emissions. Deforestation and land-use changes also contribute significantly by reducing the Earth's capacity to absorb CO2 from the atmosphere.
          </p>

          <h3 className="text-blue-600">Industrial and Agricultural Activities</h3>
          <p>
            Industrial processes release various greenhouse gases, including carbon dioxide from cement production and fluorinated gases from refrigeration and air conditioning. Agriculture contributes through methane emissions from livestock and rice paddies, nitrous oxide from fertilizer use, and land-use changes. These activities have intensified dramatically over the past century, coinciding with the observed rise in global temperatures.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Effects of Climate Change <button onClick={() => toggleBookmark('effects')} className="ml-2 text-blue-500">★</button></h2>
          <p>
            Climate change manifests through rising global temperatures, shifting precipitation patterns, more frequent and intense extreme weather events, and rising sea levels. Arctic sea ice is declining at a rate of 13% per decade, glaciers are retreating worldwide, and ocean acidification is increasing as oceans absorb excess CO2 from the atmosphere.
          </p>

          <p>
            Ecosystems are experiencing disruptions as species migrate to new locations or face extinction when unable to adapt quickly enough. Coral reefs are suffering from bleaching events due to warmer ocean temperatures. Weather patterns are becoming more unpredictable, with some regions experiencing increased flooding while others face prolonged droughts.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Mitigation Strategies <button onClick={() => toggleBookmark('mitigation')} className="ml-2 text-blue-500">★</button></h2>
          <p>
            Mitigation involves reducing greenhouse gas emissions and enhancing carbon sinks to limit future climate change. Key strategies include transitioning to renewable energy sources like solar, wind, and hydroelectric power; improving energy efficiency in buildings, transportation, and industry; and protecting and restoring forests and other natural carbon sinks.
          </p>

          <p>
            Technological innovations such as carbon capture and storage, electric vehicles, and green building designs are becoming more economically viable. Policy measures like carbon pricing, renewable energy standards, and international agreements like the Paris Climate Accord play crucial roles in coordinating global mitigation efforts.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Adaptation Measures <button onClick={() => toggleBookmark('adaptation')} className="ml-2 text-blue-500">★</button></h2>
          <p>
            Adaptation involves adjusting to actual or expected climate change impacts. This includes building resilient infrastructure that can withstand extreme weather events, developing drought-resistant crops, implementing early warning systems for natural disasters, and managing water resources more efficiently. Coastal communities are investing in sea walls, flood barriers, and managed retreat strategies.
          </p>

          <p>
            Ecosystem-based adaptation approaches use natural systems to reduce climate risks. These include restoring wetlands to buffer against floods, protecting mangroves to shield coastlines from storms, and creating wildlife corridors to facilitate species migration. Building adaptive capacity in vulnerable communities is essential for equitable climate resilience.
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
                <p className="font-medium mb-2 text-gray-700">1. What is the primary cause of current climate change?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) Natural climate variations</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) Human activities emitting greenhouse gases</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Solar radiation changes</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) Volcanic activity</span></label>
              </div>

              <div>
                <p className="font-medium mb-2 text-gray-700">2. What does mitigation in climate change refer to?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) Adjusting to climate change impacts</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) Reducing greenhouse gas emissions</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) Monitoring climate changes</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) Studying climate history</span></label>
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
                  <p className="text-gray-700">Question 1: {quizAnswers.q1 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - Human activities emitting greenhouse gases are the primary cause.</p>
                  <p className="text-gray-700">Question 2: {quizAnswers.q2 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - Mitigation refers to reducing greenhouse gas emissions.</p>
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
              <Link href="/blog/biodiversity-conservation-strategies" className="text-blue-600 hover:underline">
                Biodiversity Conservation Strategies →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}