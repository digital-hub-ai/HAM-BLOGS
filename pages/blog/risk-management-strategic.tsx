import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

const StrategicRiskManagement = () => {
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
      // Correct answers: 0 for Q1, 1 for Q2, 2 for Q3
      const correctAnswers = [0, 1, 2];
      return answer === correctAnswers[index];
    }).length;
  };

  const faqs = [
    {
      question: "What is strategic risk management?",
      answer: "Strategic risk management is the process of identifying, assessing, and managing risks that could impact an organization's ability to achieve its strategic objectives. It focuses on risks that arise from business decisions and strategic initiatives rather than operational risks."
    },
    {
      question: "How does strategic risk management differ from operational risk management?",
      answer: "Strategic risk management addresses risks related to business strategy and long-term objectives, while operational risk management focuses on day-to-day operational processes and procedures. Strategic risks have longer-term implications and broader impact."
    },
    {
      question: "What are the key components of a strategic risk management framework?",
      answer: "Key components include risk identification, risk assessment, risk prioritization, risk mitigation strategies, monitoring mechanisms, and governance structures that integrate risk management into strategic planning processes."
    }
  ];

  const quizQuestions = [
    {
      question: "Which of the following is an example of strategic risk?",
      options: [
        "Loss of key personnel",
        "Shift in consumer preferences affecting business model",
        "Equipment breakdown",
        "Fraudulent transactions"
      ],
      correct: 1
    },
    {
      question: "What is the primary goal of integrating risk management into strategic planning?",
      options: [
        "To eliminate all risks",
        "To make informed decisions about risk appetite and mitigation",
        "To reduce operational costs",
        "To comply with regulatory requirements"
      ],
      correct: 1
    },
    {
      question: "Which framework is commonly used for strategic risk assessment?",
      options: [
        "Balanced Scorecard",
        "PESTEL Analysis",
        "Risk-Return Matrix",
        "All of the above"
      ],
      correct: 3
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>Strategic Risk Management: Mitigating Business Threats | Business Strategy Hub</title>
        <meta name="description" content="Integrating risk management into strategic planning for organizational resilience." />
        <link rel="canonical" href="https://www.businessstrategyhub.com/blog/risk-management-strategic" />
        <meta property="og:title" content="Strategic Risk Management: Mitigating Business Threats" />
        <meta property="og:description" content="Integrating risk management into strategic planning for organizational resilience." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.businessstrategyhub.com/blog/risk-management-strategic" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Strategic Risk Management: Mitigating Business Threats" />
        <meta name="twitter:description" content="Integrating risk management into strategic planning for organizational resilience." />
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
                  Strategy
                </span>
                <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                  Strategic Risk Management: Mitigating Business Threats
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
                Strategy
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.25A2.25 2.25 0 0 0 4.5 4.5v1.388c0 .51.143 1.007.412 1.444L8.042 10.2 11.8 2.744c.39-.78.975-1.442 1.712-1.712zm10.5 0a2.25 2.25 0 0 0-2.25-2.25h-1.388c-.51 0-1.007.143-1.444.412L9.6 5.4 5.838 3.138c-.78-.39-1.442-.975-1.712-1.712V4.5A2.25 2.25 0 0 0 6.75 6.75h1.388c.51 0 1.007.143 1.444.412L12.6 9.6 16.362 7.338c.78-.39 1.442-.975 1.712-1.712V6.75A2.25 2.25 0 0 0 20.25 4.5h-1.388c-.51 0-1.007.143-1.444.412L14.4 7.958 18.162 10.2c.39.78.975 1.442 1.712 1.712V13.5A2.25 2.25 0 0 1 17.622 15.75h-1.388c-.51 0-1.007.143-1.444.412L12 18 9.162 16.162c-.437-.27-1.007-.412-1.444-.412h-1.388c-.51 0-1.007.143-1.444.412L2.25 18.25v-1.388c0-.51.143-1.007.412-1.444L5.4 12.6l-3.762-2.262c-.78-.39-1.442-.975-1.712-1.712V6.75A2.25 2.25 0 0 1 2.25 4.5h1.388c.51 0 1.007-.143 1.444-.412L8.042 2.25 11.8 4.5c.39.78.975 1.442 1.712 1.712L16.362 4.5l3.762 2.262c.78.39 1.442.975 1.712 1.712V4.5A2.25 2.25 0 0 0 20.25 2.25h-1.388c-.51 0-1.007-.143-1.444-.412L14.4 2.25l-3.15 1.888c-.78.39-1.442.975-1.712 1.712Z" />
                </svg>
                Risk Management
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
                Published: January 3, 2026
              </div>
            </div>
          </header>

          <div className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="lead-text">
                In today's volatile business environment, strategic risk management has evolved from a compliance function to a core strategic capability. Organizations that effectively integrate risk management into their strategic planning processes are better positioned to anticipate challenges, seize opportunities, and maintain resilience during periods of uncertainty.
              </p>

              <h2>The Evolution of Strategic Risk Management</h2>
              <p>Traditional risk management focused primarily on protecting against known threats and ensuring compliance with regulations. Modern strategic risk management takes a more proactive approach, viewing risk as an integral part of strategic decision-making. This evolution recognizes that risk and opportunity are often two sides of the same coin, requiring sophisticated approaches to balance both.</p>

              <p>Strategic risk management addresses uncertainties that could impact an organization's ability to achieve its long-term objectives. These include market risks, competitive threats, regulatory changes, technological disruptions, and geopolitical shifts. Unlike operational risks that affect daily operations, strategic risks have broader implications for business models, competitive positioning, and long-term sustainability.</p>

              <h2>Components of Strategic Risk Management</h2>
              <p>Effective strategic risk management comprises several key components:</p>

              <h3>Risk Identification and Assessment</h3>
              <p>The first step involves identifying potential risks that could affect strategic objectives. This includes both internal risks (organizational capabilities, resource constraints, culture) and external risks (market dynamics, competitive landscape, regulatory environment). Sophisticated organizations use scenario planning, horizon scanning, and stakeholder analysis to identify emerging risks.</p>

              <h3>Risk Appetite and Tolerance Setting</h3>
              <p>Organizations must define their risk appetite—the amount and type of risk they're willing to accept in pursuit of value creation. This involves establishing risk tolerances for different types of strategic risks and ensuring alignment with overall business strategy and stakeholder expectations.</p>

              <h3>Risk Response Strategies</h3>
              <p>For each identified risk, organizations must develop appropriate response strategies: risk avoidance, risk reduction, risk sharing, or risk acceptance. The choice depends on the potential impact, likelihood, and the organization's risk appetite.</p>

              <h3>Monitoring and Reporting</h3>
              <p>Continuous monitoring of risk indicators ensures that organizations can respond quickly to changing conditions. This includes establishing key risk indicators (KRIs), regular reporting mechanisms, and escalation procedures for significant risks.</p>

              <h2>Integrating Risk Management with Strategic Planning</h2>
              <p>Strategic risk management should be embedded throughout the strategic planning process:</p>

              <ol>
                <li><strong>Strategy Formulation:</strong> Incorporate risk considerations into strategy development to ensure realistic objectives and feasible plans.</li>
                <li><strong>Decision Making:</strong> Evaluate strategic alternatives through the lens of associated risks and potential impacts.</li>
                <li><strong>Implementation:</strong> Build risk mitigation measures into strategic initiatives and monitor execution risks.</li>
                <li><strong>Review and Adjustment:</strong> Regularly assess how changing risk profiles affect strategic plans and make adjustments as needed.</li>
              </ol>

              <h3>Creating Risk-Aware Culture</h3>
              <p>Organizations must foster a culture where risk management is viewed as everyone's responsibility, not just a function of compliance or audit teams. This involves training employees to recognize risks, encouraging open communication about potential issues, and rewarding proactive risk management behaviors.</p>

              <h2>Advanced Risk Management Techniques</h2>
              <p>Modern organizations employ sophisticated techniques for strategic risk management:</p>

              <ul>
                <li><strong>Scenario Planning:</strong> Developing multiple plausible futures to test strategy robustness.</li>
                <li><strong>War Gaming:</strong> Simulating competitive interactions to identify potential risks and responses.</li>
                <li><strong>Monte Carlo Simulation:</strong> Modeling uncertainty to understand potential outcomes and probabilities.</li>
                <li><strong>Real Options Analysis:</strong> Valuing flexibility in strategic decisions to manage uncertainty.</li>
                <li><strong>Network Analysis:</strong> Mapping interdependencies to understand systemic risks.</li>
              </ul>

              <h2>Technology's Role in Strategic Risk Management</h2>
              <p>Technology plays an increasingly important role in strategic risk management:</p>

              <p><strong>Artificial Intelligence and Machine Learning:</strong> These technologies can analyze vast amounts of data to identify patterns and predict potential risks. They can process news, social media, and market data to detect early warning signals of emerging risks.</p>

              <p><strong>Big Data Analytics:</strong> Organizations can leverage diverse data sources to gain insights into customer behavior, market trends, and competitive activities that might signal strategic risks.</p>

              <p><strong>Real-time Monitoring:</strong> Dashboards and automated alerts enable organizations to monitor key risk indicators continuously and respond quickly to changing conditions.</p>

              <p><strong>Collaborative Platforms:</strong> Risk management systems that facilitate collaboration across departments and with external partners improve risk identification and response coordination.</p>

              <h2>Measuring Risk Management Effectiveness</h2>
              <p>Organizations should measure the effectiveness of their strategic risk management efforts:</p>

              <p><strong>Leading Indicators:</strong> Metrics that predict future risk events, such as employee turnover in key positions, customer satisfaction trends, or competitive intensity indicators.</p>

              <p><strong>Lagging Indicators:</strong> Metrics that show the impact of realized risks, such as revenue volatility, reputation damage, or strategic initiative delays.</p>

              <p><strong>Process Metrics:</strong> Measures of risk management process effectiveness, such as the percentage of strategic decisions that include risk assessment or the time to escalate critical risks.</p>

              <h2>Future Trends in Strategic Risk Management</h2>
              <p>Several trends are shaping the future of strategic risk management:</p>

              <ul>
                <li><strong>Integrated Thinking:</strong> Greater integration between risk management, strategy, and sustainability considerations.</li>
                <li><strong>Stakeholder Capitalism:</strong> Expanding risk considerations to include broader stakeholder impacts.</li>
                <li><strong>Climate Risk:</strong> Growing focus on environmental and climate-related strategic risks.</li>
                <li><strong>Cyber Resilience:</strong> Increased emphasis on digital risk management and cyber resilience.</li>
                <li><strong>Geopolitical Risk:</strong> Enhanced focus on political and regulatory risks in global markets.</li>
              </ul>

              <p>As business environments become increasingly complex and interconnected, strategic risk management will continue to evolve from a defensive function to a strategic enabler. Organizations that master this discipline will be better positioned to navigate uncertainty and create sustainable value for stakeholders.</p>
            </div>

            <div className="mt-12 bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategic Risk Management Quiz</h3>
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

export default StrategicRiskManagement;