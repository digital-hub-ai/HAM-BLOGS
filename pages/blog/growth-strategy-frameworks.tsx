import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

const GrowthStrategyFrameworks = () => {
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
      // Correct answers: 1 for Q1, 2 for Q2, 3 for Q3
      const correctAnswers = [1, 2, 3];
      return answer === correctAnswers[index];
    }).length;
  };

  const faqs = [
    {
      question: "What is a growth strategy framework?",
      answer: "A growth strategy framework is a structured approach that organizations use to plan and execute their growth initiatives. It provides a systematic methodology for identifying opportunities, setting targets, and implementing growth tactics across different business dimensions."
    },
    {
      question: "How often should growth strategies be reviewed?",
      answer: "Growth strategies should be reviewed quarterly at minimum, with more frequent assessments during periods of market volatility. Annual strategic planning sessions should include comprehensive growth strategy reviews."
    },
    {
      question: "What's the difference between growth strategy and business strategy?",
      answer: "Business strategy encompasses the overall approach to competing in the market, while growth strategy specifically focuses on expanding the business through market penetration, new products, or geographic expansion."
    }
  ];

  const quizQuestions = [
    {
      question: "Which growth framework focuses on market penetration, market development, product development, and diversification?",
      options: [
        "Ansoff Matrix",
        "Growth-Share Matrix",
        "Porter's Generic Strategies",
        "Blue Ocean Strategy"
      ],
      correct: 0
    },
    {
      question: "What is the primary focus of the S-T-P framework in growth strategy?",
      options: [
        "Segmentation, Transformation, Promotion",
        "Segmentation, Targeting, Positioning",
        "Strategy, Tactics, Performance",
        "Sales, Technology, Profitability"
      ],
      correct: 1
    },
    {
      question: "Which of the following is NOT a common growth strategy?",
      options: [
        "Market penetration",
        "Product development",
        "Cost leadership",
        "Geographic expansion"
      ],
      correct: 2
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>Growth Strategy Frameworks: Scaling Organizations Effectively | Business Strategy Hub</title>
        <meta name="description" content="Proven frameworks for sustainable growth in competitive markets." />
        <link rel="canonical" href="https://www.businessstrategyhub.com/blog/growth-strategy-frameworks" />
        <meta property="og:title" content="Growth Strategy Frameworks: Scaling Organizations Effectively" />
        <meta property="og:description" content="Proven frameworks for sustainable growth in competitive markets." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.businessstrategyhub.com/blog/growth-strategy-frameworks" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Growth Strategy Frameworks: Scaling Organizations Effectively" />
        <meta name="twitter:description" content="Proven frameworks for sustainable growth in competitive markets." />
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
                  Growth Strategy Frameworks: Scaling Organizations Effectively
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
                Business Growth
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                10 min read
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
                In today's competitive business environment, sustainable growth requires more than just ambition—it demands a structured approach that aligns organizational capabilities with market opportunities. Growth strategy frameworks provide the methodology and structure necessary to scale organizations effectively while managing risks and optimizing resources.
              </p>

              <h2>Understanding Growth Strategy Frameworks</h2>
              <p>Growth strategy frameworks are systematic approaches that help organizations identify, evaluate, and pursue growth opportunities. These frameworks provide a structured methodology for making strategic decisions about where and how to grow, ensuring that growth initiatives align with organizational capabilities and market realities.</p>

              <p>Effective growth frameworks balance multiple considerations including market conditions, competitive landscape, internal capabilities, resource availability, and risk tolerance. They help organizations avoid the common pitfall of pursuing growth for its own sake, instead focusing on value-creating growth that enhances long-term competitive positioning.</p>

              <h2>Key Growth Strategy Frameworks</h2>
              <p>Several proven frameworks guide organizations in their growth journey:</p>

              <h3>Ansoff Matrix</h3>
              <p>Perhaps the most well-known growth framework, the Ansoff Matrix provides a simple yet powerful framework for growth planning. It categorizes growth opportunities into four quadrants: market penetration (existing products in existing markets), market development (existing products in new markets), product development (new products in existing markets), and diversification (new products in new markets). Each quadrant carries different levels of risk and resource requirements.</p>

              <h3>Blue Ocean Strategy</h3>
              <p>This framework focuses on creating uncontested market spaces rather than competing in existing ones. Organizations using this approach seek to create new demand by offering unique value propositions that make competition irrelevant. This often involves combining elements of different market segments or creating entirely new market categories.</p>

              <h3>Jobs-to-be-Done Framework</h3>
              <p>This approach focuses on understanding the functional, emotional, and social jobs that customers are trying to accomplish. By identifying unmet customer needs, organizations can develop growth strategies that address these gaps with innovative solutions that create new market opportunities.</p>

              <h3>Value Innovation Framework</h://www.strategyzer.com/blog/2016/09/15/value-innovation-the-blue-ocean-strategy-approach>
              <p>Combining value creation with innovation, this framework helps organizations identify ways to simultaneously pursue differentiation and low cost. It involves reconstructing market boundaries, focusing on the big picture, reaching beyond existing demand, and getting the strategic sequence right.</p>

              <h2>Implementing Growth Strategy Frameworks</h2>
              <p>Successfully implementing growth frameworks requires a systematic approach:</p>

              <ol>
                <li><strong>Assessment Phase:</strong> Evaluate current market position, competitive advantages, and organizational capabilities.</li>
                <li><strong>Opportunity Identification:</strong> Use frameworks to identify potential growth opportunities that align with capabilities.</li>
                <li><strong>Feasibility Analysis:</strong> Conduct detailed analysis of market potential, resource requirements, and risk factors.</li>
                <li><strong>Prioritization:</strong> Rank opportunities based on strategic fit, potential returns, and resource requirements.</li>
                <li><strong>Implementation Planning:</strong> Develop detailed plans for executing chosen growth strategies.</li>
                <li><strong>Monitoring and Adjustment:</strong> Continuously track performance and adjust strategies based on results.</li>
              </ol>

              <h3>Resource Allocation and Capability Building</h3>
              <p>Growth strategies require careful resource allocation and capability building. Organizations must assess whether they have the necessary skills, infrastructure, and financial resources to pursue their growth objectives. In many cases, growth strategies require developing new capabilities or acquiring them through partnerships or acquisitions.</p>

              <h2>Measuring Growth Strategy Success</h2>
              <p>Effective growth strategies must be measured using both financial and non-financial metrics:</p>

              <ul>
                <li><strong>Financial Metrics:</strong> Revenue growth, profit margins, return on investment, market share gains</li>
                <li><strong>Operational Metrics:</strong> Customer acquisition rates, retention rates, operational efficiency</li>
                <li><strong>Strategic Metrics:</strong> Market expansion, brand recognition, competitive positioning</li>
                <li><strong>Innovation Metrics:</strong> New product development, R&D effectiveness, intellectual property creation</li>
              </ul>

              <h2>Common Growth Strategy Pitfalls</h2>
              <p>Organizations pursuing growth strategies should be aware of common pitfalls:</p>

              <p><strong>Overexpansion:</strong> Pursuing growth too rapidly can strain organizational resources and lead to operational failures. Sustainable growth requires balancing ambition with organizational capacity.</p>

              <p><strong>Market Misalignment:</strong> Failing to understand market needs or competitive dynamics can result in growth initiatives that don't resonate with customers or face insurmountable competition.</p>

              <p><strong>Capability Gaps:</strong> Pursuing growth opportunities that require capabilities the organization doesn't possess can lead to failure. Organizations must either build these capabilities or partner with others who possess them.</p>

              <p><strong>Resource Misallocation:</strong> Spreading resources too thin across multiple growth initiatives can prevent any single initiative from achieving success. Prioritization and focus are critical for growth strategy success.</p>

              <h2>Future Trends in Growth Strategy</h2>
              <p>Modern growth strategies are increasingly influenced by digital transformation, sustainability considerations, and stakeholder capitalism:</p>

              <ul>
                <li><strong>Platform Strategies:</strong> Building ecosystems that connect multiple value-creating participants</li>
                <li><strong>Sustainable Growth:</strong> Integrating environmental and social considerations into growth planning</li>
                <li><strong>Data-Driven Growth:</strong> Using analytics and AI to identify and pursue growth opportunities</li>
                <li><strong>Agile Growth:</strong> Implementing iterative growth approaches that allow for rapid course correction</li>
                <li><strong>Global-Local Strategies:</strong> Balancing global scale with local market adaptation</li>
              </ul>

              <p>As markets continue to evolve, organizations that develop robust growth strategy capabilities will be better positioned to navigate uncertainty and capitalize on emerging opportunities. The key is to select frameworks that align with organizational strengths and market realities while maintaining the flexibility to adapt as conditions change.</p>
            </div>

            <div className="mt-12 bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Growth Strategy Frameworks Quiz</h3>
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

export default GrowthStrategyFrameworks;