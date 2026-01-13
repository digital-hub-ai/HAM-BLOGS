import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

const DisruptiveInnovationStrategies = () => {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<(number | null)[]>([null, null, null]);
  const [showResults, setShowResults] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
    alert(`Article ${!bookmarked ? 'bookmarked' : 'removed from bookmarks'} successfully!`);
  };

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const handleQuizChange = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = answerIndex;
    setQuizAnswers(newAnswers);
  };

  const calculateScore = () => {
    setShowResults(true);
    return quizAnswers.filter((answer, index) => {
      // Correct answers: 1 for Q1, 0 for Q2, 2 for Q3
      const correctAnswers = [1, 0, 2];
      return answer === correctAnswers[index];
    }).length;
  };

  const faqs = [
    {
      question: "What is the difference between disruptive and sustaining innovation?",
      answer: "Disruptive innovation creates new markets and value networks, eventually disrupting existing markets. Sustaining innovation improves existing products for existing customers in established markets."
    },
    {
      question: "How long does it typically take for disruptive innovations to mature?",
      answer: "Disruptive innovations often take 10-15 years to fully mature and displace established solutions, though this varies significantly by industry and innovation type."
    },
    {
      question: "Can established companies successfully pursue disruptive innovation?",
      answer: "Yes, though it requires creating autonomous teams with different cost structures and value propositions, separate from existing business units to avoid resource allocation conflicts."
    }
  ];

  const quizQuestions = [
    {
      question: "Who popularized the concept of disruptive innovation?",
      options: [
        "Peter Drucker",
        "Clayton Christensen",
        "Michael Porter",
        "Gary Hamel"
      ],
      correct: 1
    },
    {
      question: "Disruptive innovations typically start by:",
      options: [
        "Targeting high-end customers with premium solutions",
        "Serving overlooked or underserved market segments",
        "Directly competing with market leaders",
        "Focusing on existing customer needs"
      ],
      correct: 1
    },
    {
      question: "Which of the following is a characteristic of disruptive innovations?",
      options: [
        "They are always technologically superior",
        "They initially underperform established solutions",
        "They require large capital investments upfront",
        "They focus on existing market leaders"
      ],
      correct: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>Disruptive Innovation: Strategies for Market Leadership | Business Strategy Hub</title>
        <meta name="description" content="Approaches to creating disruptive innovations that reshape industries and create new markets." />
        <link rel="canonical" href="https://www.businessstrategyhub.com/blog/disruptive-innovation-strategies" />
        <meta property="og:title" content="Disruptive Innovation: Strategies for Market Leadership" />
        <meta property="og:description" content="Approaches to creating disruptive innovations that reshape industries and create new markets." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.businessstrategyhub.com/blog/disruptive-innovation-strategies" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Disruptive Innovation: Strategies for Market Leadership" />
        <meta name="twitter:description" content="Approaches to creating disruptive innovations that reshape industries and create new markets." />
      </Head>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <button 
          onClick={() => router.back()} 
          className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6 transition-colors duration-200"
        >
          <span className="mr-2">←</span> Back to Articles
        </button>

        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          <header className="border-b border-gray-200 p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
                  Innovation
                </span>
                <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                  Disruptive Innovation: Strategies for Market Leadership
                </h1>
              </div>
              <button
                onClick={toggleBookmark}
                className={`p-3 rounded-full ${
                  bookmarked ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-600'
                } hover:bg-indigo-100 transition-colors duration-200 mt-4 sm:mt-0`}
                aria-label={bookmarked ? "Remove bookmark" : "Bookmark this article"}
              >
                {bookmarked ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c-1.491.159-2.984.374-4.479.374-1.518 0-3.012-.214-4.506-.374a49.26 49.26 0 0 1-2.385 0Zm-2.7 1.34a50.136 50.136 0 0 1 5.603-.307c.39-.04.783-.066 1.177-.066 1.518 0 3.012.215 4.506.374a49.161 49.161 0 0 1 4.506-.374c.394 0 .787.026 1.177.066a50.134 50.134 0 0 1 5.603.307c.435-.171.855-.375 1.258-.61a48.7 48.7 0 0 0-6.89-3.107 48.7 48.7 0 0 0-6.889 3.107c.403.235.823.439 1.258.61ZM20 4.5a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0 0 1 .5.5 0 0 1 .5.5v2.95a48.47 48.47 0 0 0 10 0V5a.5.5 0 0 1 .5-.5.5.5 0 0 0 0-1 .5.5 0 0 0-.5-.5Zm-2 4.5a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm-12 0a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm2 0a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm6 0a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm-6 4a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm2 0a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm2 0a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm2 0a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm2 0a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm-12 4a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm2 0a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm2 0a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm2 0a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm2 0a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm2 0a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm-12 4a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm2 0a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm2 0a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm2 0a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm2 0a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm2 0a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                  </svg>
                )}
              </button>
            </div>
            
            <div className="flex flex-wrap gap-4 text-gray-600">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 17.25v-1.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75ZM6.75 12v-1.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75V12a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75ZM6.75 6.75v-1.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75V6.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75ZM15.75 6.75v-1.5a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75V6.75a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 0 .75-.75ZM15.75 12v-1.5a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75V12a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 0 .75-.75ZM15.75 17.25v-1.5a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 0 .75-.75Z" />
                </svg>
                Innovation
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.25A2.25 2.25 0 0 0 4.5 4.5v1.388c0 .51.143 1.007.412 1.444L8.042 10.2 11.8 2.744c.39-.78.975-1.442 1.712-1.712zm10.5 0a2.25 2.25 0 0 0-2.25-2.25h-1.388c-.51 0-1.007.143-1.444.412L9.6 5.4 5.838 3.138c-.78-.39-1.442-.975-1.712-1.712V4.5A2.25 2.25 0 0 0 6.75 6.75h1.388c.51 0 1.007.143 1.444.412L12.6 9.6 16.362 7.338c.78-.39 1.442-.975 1.712-1.712V6.75A2.25 2.25 0 0 0 20.25 4.5h-1.388c-.51 0-1.007.143-1.444.412L14.4 7.958 18.162 10.2c.39.78.975 1.442 1.712 1.712V13.5A2.25 2.25 0 0 1 17.622 15.75h-1.388c-.51 0-1.007.143-1.444.412L12 18 9.162 16.162c-.437-.27-1.007-.412-1.444-.412h-1.388c-.51 0-1.007.143-1.444.412L2.25 18.25v-1.388c0-.51.143-1.007.412-1.444L5.4 12.6l-3.762-2.262c-.78-.39-1.442-.975-1.712-1.712V6.75A2.25 2.25 0 0 1 2.25 4.5h1.388c.51 0 1.007-.143 1.444-.412L8.042 2.25 11.8 4.5c.39.78.975 1.442 1.712 1.712L16.362 4.5l3.762 2.262c.78.39 1.442.975 1.712 1.712V4.5A2.25 2.25 0 0 0 20.25 2.25h-1.388c-.51 0-1.007-.143-1.444-.412L14.4 2.25l-3.15 1.888c-.78.39-1.442.975-1.712 1.712Z" />
                </svg>
                Disruption
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                9 min read
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm.375 0h-.008v.008h.008v-.008Zm0 6h.008v.008H12v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm.375 0h-.008v.008h.008v-.008Z" />
                </svg>
                Published: January 4, 2026
              </div>
            </div>
          </header>

          <div className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="lead-text">
                Disruptive innovation represents one of the most powerful forces for market transformation, reshaping entire industries and creating new value networks. Understanding how to identify, develop, and implement disruptive strategies has become essential for organizations seeking to maintain competitive advantage in rapidly evolving markets.
              </p>

              <h2>Understanding Disruptive Innovation</h2>
              <p>Disruptive innovation, a concept popularized by Harvard Business School professor Clayton Christensen, describes a process where new products or services initially serve overlooked market segments with simpler, more affordable solutions. Over time, these innovations improve and eventually displace established market leaders, fundamentally changing the competitive landscape.</p>

              <p>Contrary to popular belief, disruptive innovations don't typically start by directly competing with market leaders. Instead, they serve customers who have been ignored by existing solutions—either because they can't afford current offerings or because their needs are simpler than what existing products provide. As these innovations improve, they gradually move upmarket, eventually capturing mainstream customers.</p>

              <h2>Characteristics of Disruptive Innovations</h2>
              <p>Disruptive innovations share several distinctive characteristics:</p>

              <h3>Initial Underperformance</h3>
              <p>Disruptive innovations typically underperform established solutions along traditional performance metrics when they first enter the market. However, they offer other benefits—such as lower cost, simplicity, or convenience—that appeal to specific customer segments.</p>

              <h3>Asymmetric Motivation</h3>
              <p>Incumbent companies often ignore disruptive threats because they initially serve low-end markets with lower profit margins. By the time the disruptor moves upmarket, it's too late for established players to respond effectively.</p>

              <h3>Business Model Innovation</h3>
              <p>Disruptive innovations often involve new business models that make previously expensive or complex products accessible to broader markets. This might include new distribution channels, pricing models, or service delivery mechanisms.</p>

              <h3>Technology Enabling</h3>
              <p>Many disruptive innovations leverage new technologies that enable fundamentally different approaches to solving customer problems, often making traditional approaches obsolete.</p>

              <h2>Strategies for Creating Disruptive Innovation</h2>
              <p>Organizations seeking to create disruptive innovations should consider these strategic approaches:</p>

              <ol>
                <li><strong>Target Overshot Customers:</strong> Identify segments whose needs exceed what current products offer, allowing simpler, cheaper solutions to compete effectively.</li>
                <li><strong>Focus on Non-Consumption:</strong> Target customers who aren't served by current solutions due to complexity, cost, or accessibility barriers.</li>
                <li><strong>Develop New Value Networks:</strong> Create alternative distribution channels and partnerships that don't rely on existing industry structures.</li>
                <li><strong>Leverage Enabling Technologies:</strong> Utilize emerging technologies to create fundamentally different solutions to existing problems.</li>
                <li><strong>Build Modular Solutions:</strong> Create flexible, customizable solutions that can adapt as customer needs evolve.</li>
              </ol>

              <h3>Organizational Capabilities for Disruption</h3>
              <p>Successfully pursuing disruptive innovation requires specific organizational capabilities:</p>

              <ul>
                <li><strong>Autonomous Teams:</strong> Create independent units with different cost structures and value propositions.</li>
                <li><strong>Resource Allocation Processes:</strong> Implement systems that protect disruptive projects from existing business priorities.</li>
                <li><strong>Market Sensing:</strong> Develop capabilities to identify emerging customer needs and market gaps.</li>
                <li><strong>Experimentation Culture:</strong> Foster an environment that embraces failure as learning.</li>
                <li><strong>Strategic Patience:</strong> Maintain long-term commitment despite short-term performance pressure.</li>
              </ul>

              <h2>Case Studies in Disruptive Innovation</h2>
              <p>Several notable examples illustrate the power of disruptive innovation:</p>

              <p><strong>Netflix vs. Blockbuster:</strong> Netflix initially served customers who wanted convenience and avoided late fees, targeting those who couldn't or wouldn't visit physical stores. As their service improved, they eventually disrupted the entire video rental industry.</p>

              <p><strong>Personal Computers:</strong> Initially inferior to mainframes and minicomputers, personal computers targeted individual users and small businesses who were underserved by existing solutions. They eventually transformed computing from a corporate utility to a personal tool.</p>

              <p><strong>Digital Cameras:</strong> Early digital cameras had lower quality than film cameras but offered immediate feedback and no processing costs. They eventually displaced the entire film photography industry.</p>

              <h2>Challenges in Pursuing Disruption</h2>
              <p>Organizations face several challenges when pursuing disruptive innovation:</p>

              <p><strong>Resource Allocation Conflicts:</strong> Disruptive projects often compete for resources with existing profitable businesses, creating internal resistance.</p>

              <p><strong>Market Timing:</strong> Entering too early may result in insufficient market readiness, while entering too late may miss the opportunity window.</p>

              <p><strong>Organizational Inertia:</strong> Established companies often struggle to change their business models and value networks to accommodate disruptive approaches.</p>

              <p><strong>Performance Metrics:</strong> Traditional metrics may not be appropriate for evaluating disruptive innovations in their early stages.</p>

              <h2>Future Trends in Disruptive Innovation</h2>
              <p>Several trends are shaping the future of disruptive innovation:</p>

              <ul>
                <li><strong>Platform Business Models:</strong> Digital platforms enabling new forms of value creation and exchange.</li>
                <li><strong>AI and Automation:</strong> Artificial intelligence enabling new approaches to previously human-intensive tasks.</li>
                <li><strong>Sustainability Focus:</strong> Disruption driven by environmental and social considerations.</li>
                <li><strong>Global Market Access:</strong> Digital technologies enabling disruption of global rather than local markets.</li>
                <li><strong>Regulatory Innovation:</strong> New regulatory frameworks enabling previously impossible business models.</li>
              </ul>

              <p>As markets continue to evolve at an accelerated pace, organizations that master the art of disruptive innovation will be better positioned to shape the future rather than merely respond to it. The key lies in understanding that disruption is not just about technology, but about creating new value networks that serve customers in fundamentally different ways.</p>
            </div>

            <div className="mt-12 bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Disruptive Innovation Quiz</h3>
              <div className="space-y-4">
                {quizQuestions.map((question, qIndex) => (
                  <div key={qIndex} className="mb-6">
                    <p className="font-medium text-gray-800 mb-3">{qIndex + 1}. {question.question}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {question.options.map((option, oIndex) => (
                        <button
                          key={oIndex}
                          onClick={() => handleQuizChange(qIndex, oIndex)}
                          className={`p-3 text-left rounded-lg border transition-colors duration-200 ${
                            quizAnswers[qIndex] === oIndex
                              ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                              : 'border-gray-200 hover:border-indigo-300'
                          }`}
                        >
                          <span className="font-medium mr-2">{String.fromCharCode(65 + oIndex)}.</span> {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                
                <button
                  onClick={calculateScore}
                  className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
                >
                  Check Your Answers
                </button>
                
                {showResults && (
                  <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
                    <p className="font-medium">
                      Quiz Results: {calculateScore()}/{quizQuestions.length} correct
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 font-medium flex justify-between items-center"
                    >
                      <span>{faq.question}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`w-5 h-5 transition-transform duration-200 ${
                          activeFAQ === index ? 'rotate-180' : ''
                        }`}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    {activeFAQ === index && (
                      <div className="p-4 bg-white">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default DisruptiveInnovationStrategies;