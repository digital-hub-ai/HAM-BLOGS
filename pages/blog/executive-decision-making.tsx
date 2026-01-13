import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

const ExecutiveDecisionMaking = () => {
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
      // Correct answers: 2 for Q1, 1 for Q2, 3 for Q3
      const correctAnswers = [2, 1, 3];
      return answer === correctAnswers[index];
    }).length;
  };

  const faqs = [
    {
      question: "How long should the executive decision-making process take?",
      answer: "The timeframe depends on the complexity and impact of the decision. Strategic decisions may require months of analysis, while operational decisions might need to be made within days. The key is balancing thoroughness with speed to avoid missed opportunities."
    },
    {
      question: "How can executives make better decisions with incomplete information?",
      answer: "Executives should develop frameworks for making decisions with uncertainty, use scenario planning, rely on experienced judgment, seek diverse perspectives, and build in checkpoints to adjust decisions as new information becomes available."
    },
    {
      question: "What is the role of intuition in executive decision-making?",
      answer: "Intuition, based on experience and expertise, can be valuable in executive decision-making, especially in complex situations where analytical data is limited. However, it should be balanced with rigorous analysis and diverse input."
    }
  ];

  const quizQuestions = [
    {
      question: "Which cognitive bias is most commonly observed in executive decision-making?",
      options: [
        "Availability heuristic",
        "Confirmation bias",
        "Anchoring bias",
        "All of the above"
      ],
      correct: 3
    },
    {
      question: "What is the Vroom-Yetton-Jago decision model?",
      options: [
        "A model for team building",
        "A framework for determining the appropriate level of subordinate participation in decision-making",
        "A leadership style classification",
        "A performance evaluation method"
      ],
      correct: 1
    },
    {
      question: "What does the acronym RAPID stand for in decision-making?",
      options: [
        "React, Analyze, Plan, Implement, Decide",
        "Review, Assess, Propose, Influence, Delegate",
        "Recommend, Agree, Perform, Input, Decide",
        "Rapid, Analytical, Participatory, Informed, Decisive"
      ],
      correct: 2
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>Executive Decision-Making: Strategic Choices for Organizational Success | Business Strategy Hub</title>
        <meta name="description" content="Framework for making complex decisions that affect the entire organization." />
        <link rel="canonical" href="https://www.businessstrategyhub.com/blog/executive-decision-making" />
        <meta property="og:title" content="Executive Decision-Making: Strategic Choices for Organizational Success" />
        <meta property="og:description" content="Framework for making complex decisions that affect the entire organization." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.businessstrategyhub.com/blog/executive-decision-making" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Executive Decision-Making: Strategic Choices for Organizational Success" />
        <meta name="twitter:description" content="Framework for making complex decisions that affect the entire organization." />
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
                  Management
                </span>
                <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                  Executive Decision-Making: Strategic Choices for Organizational Success
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
                Management
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.25A2.25 2.25 0 0 0 4.5 4.5v1.388c0 .51.143 1.007.412 1.444L8.042 10.2 11.8 2.744c.39-.78.975-1.442 1.712-1.712zm10.5 0a2.25 2.25 0 0 0-2.25-2.25h-1.388c-.51 0-1.007.143-1.444.412L9.6 5.4 5.838 3.138c-.78-.39-1.442-.975-1.712-1.712V4.5A2.25 2.25 0 0 0 6.75 6.75h1.388c.51 0 1.007.143 1.444.412L12.6 9.6 16.362 7.338c.78-.39 1.442-.975 1.712-1.712V6.75A2.25 2.25 0 0 0 20.25 4.5h-1.388c-.51 0-1.007.143-1.444.412L14.4 7.958 18.162 10.2c.39.78.975 1.442 1.712 1.712V13.5A2.25 2.25 0 0 1 17.622 15.75h-1.388c-.51 0-1.007.143-1.444.412L12 18 9.162 16.162c-.437-.27-1.007-.412-1.444-.412h-1.388c-.51 0-1.007.143-1.444.412L2.25 18.25v-1.388c0-.51.143-1.007.412-1.444L5.4 12.6l-3.762-2.262c-.78-.39-1.442-.975-1.712-1.712V6.75A2.25 2.25 0 0 1 2.25 4.5h1.388c.51 0 1.007-.143 1.444-.412L8.042 2.25 11.8 4.5c.39.78.975 1.442 1.712 1.712L16.362 4.5l3.762 2.262c.78.39 1.442.975 1.712 1.712V4.5A2.25 2.25 0 0 0 20.25 2.25h-1.388c-.51 0-1.007-.143-1.444-.412L14.4 2.25l-3.15 1.888c-.78.39-1.442.975-1.712 1.712Z" />
                </svg>
                Decision Making
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
                Published: January 3, 2026
              </div>
            </div>
          </header>

          <div className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="lead-text">
                Executive decision-making represents one of the most critical capabilities in organizational leadership. The choices made by executives reverberate throughout the organization, affecting everything from strategic direction and competitive positioning to employee morale and financial performance. In today's volatile, uncertain, complex, and ambiguous (VUCA) business environment, executives must navigate unprecedented levels of complexity while making decisions with incomplete information and facing significant consequences for errors in judgment.
              </p>

              <h2>Understanding Executive Decision-Making</h2>
              <p>Executive decision-making differs significantly from routine decision-making in several key ways. First, executive decisions typically involve high stakes with significant financial, strategic, or reputational implications. Second, these decisions often require consideration of multiple, sometimes competing, stakeholder interests. Third, executive decisions frequently involve uncertainty and incomplete information, requiring executives to make judgments under pressure.</p>

              <p>Effective executive decision-making combines analytical rigor with intuitive insight, leveraging both data and experience to navigate complex situations. The most successful executives develop decision-making frameworks that balance speed with accuracy, enabling them to act decisively while minimizing risk.</p>

              <h2>Decision-Making Frameworks for Executives</h2>
              <p>Several proven frameworks can guide executive decision-making:</p>

              <h3>Rational Decision-Making Model</h3>
              <p>This classical approach involves six steps: identifying the problem, gathering information, developing alternatives, evaluating alternatives, making the decision, and implementing and reviewing the decision. While comprehensive, this model assumes complete information and rational actors, which rarely exists in real-world executive decision-making.</p>

              <h3>Bounded Rationality Model</h3>
              <p>Recognizing that executives operate with limited information and cognitive capacity, this model acknowledges that decisions are made based on satisfactory rather than optimal solutions. Executives must accept "good enough" decisions within practical constraints.</p>

              <h3>Intuitive Decision-Making</h3>
              <p>Based on pattern recognition and accumulated experience, intuitive decision-making allows executives to make rapid judgments in complex situations. This approach is particularly valuable when time is limited or when dealing with novel situations that lack precedent.</p>

              <h2>Factors Influencing Executive Decision-Making</h2>
              <p>Several critical factors shape executive decision-making processes:</p>

              <ol>
                <li><strong>Information Quality:</strong> The availability and reliability of data significantly impact decision quality.</li>
                <li><strong>Time Pressure:</strong> Deadlines and market pressures can force decisions with incomplete information.</li>
                <li><strong>Stakeholder Interests:</strong> Balancing the needs of shareholders, employees, customers, and other stakeholders.</li>
                <li><strong>Organizational Culture:</strong> The prevailing attitudes toward risk-taking and decision-making authority.</li>
                <li><strong>Personal Experience:</strong> An executive's background and past experiences shape their decision-making approach.</li>
              </ol>

              <h3>Cognitive Biases in Decision-Making</h3>
              <p>Executives must be aware of common cognitive biases that can impair judgment:</p>

              <ul>
                <li><strong>Confirmation Bias:</strong> Seeking information that confirms pre-existing beliefs.</li>
                <li><strong>Anchoring Bias:</strong> Relying too heavily on the first piece of information encountered.</li>
                <li><strong>Overconfidence Bias:</strong> Overestimating the accuracy of one's predictions.</li>
                <li><strong>Sunk Cost Fallacy:</strong> Continuing investments based on resources already committed.</li>
                <li><strong>Availability Heuristic:</strong> Making judgments based on readily available information.</li>
              </ul>

              <h2>Best Practices for Executive Decision-Making</h2>
              <p>Successful executives follow several best practices to improve their decision-making:</p>

              <h3>Seek Diverse Perspectives</h3>
              <p>Actively soliciting input from individuals with different backgrounds, expertise, and viewpoints helps counteract cognitive biases and identifies potential blind spots in decision-making.</p>

              <h3>Use Data Analytics</h3>
              <p>Leveraging advanced analytics and data science provides insights that inform better decision-making, though executives must be careful not to become paralyzed by data overload.</p>

              <h3>Consider Long-Term Implications</h3>
              <p>Effective executive decisions balance short-term needs with long-term strategic objectives, considering the potential consequences of decisions across multiple time horizons.</p>

              <h3>Build Decision-Making Processes</h3>
              <p>Establishing systematic approaches to decision-making ensures consistency and helps institutionalize best practices across the organization.</p>

              <h2>Implementing Decisions</h2>
              <p>Decision-making doesn't end with choosing an option; successful executives focus on implementation:</p>

              <p><strong>Communication Strategy:</strong> Clearly articulating the rationale behind decisions and the expected outcomes to all stakeholders.</p>

              <p><strong>Resource Allocation:</strong> Ensuring adequate resources are dedicated to implementing decisions effectively.</p>

              <p><strong>Monitoring and Adjustment:</strong> Establishing metrics to track decision outcomes and adjusting course when necessary.</p>

              <p><strong>Accountability:</strong> Assigning clear responsibility for implementing decisions and achieving desired outcomes.</p>

              <h3>Building Decision-Making Teams</h3>
              <p>Executives rarely make important decisions in isolation. Building effective decision-making teams involves selecting individuals with complementary skills, establishing clear decision rights, and creating an environment where dissenting opinions are welcomed.</p>

              <h2>Technology and Decision-Making</h2>
              <p>Modern executives have access to sophisticated tools that can enhance decision-making:</p>

              <p><strong>Business Intelligence Platforms:</strong> Provide comprehensive data visualization and analysis capabilities.</p>

              <p><strong>Scenario Planning Software:</strong> Allows executives to model different outcomes based on various assumptions.</p>

              <p><strong>Artificial Intelligence:</strong> Can identify patterns in large datasets and provide predictive insights.</p>

              <p><strong>Simulation Tools:</strong> Enable testing of decisions in virtual environments before implementation.</p>

              <p><strong>Collaboration Platforms:</strong> Facilitate input gathering and decision-making across geographically dispersed teams.</p>

              <h2>Measuring Decision Effectiveness</h2>
              <p>Organizations should establish metrics to evaluate decision-making effectiveness:</p>

              <ul>
                <li><strong>Outcome Achievement:</strong> The extent to which decisions achieve intended results.</li>
                <li><strong>Decision Speed:</strong> Time from identification of need to implementation.</li>
                <li><strong>Stakeholder Satisfaction:</strong> How well decisions meet stakeholder expectations.</li>
                <li><strong>Learning Capture:</strong> Ability to apply lessons from past decisions to future choices.</li>
                <li><strong>Risk Management:</strong> Effectiveness of decisions in managing potential downsides.</li>
              </ul>

              <h2>Future of Executive Decision-Making</h2>
              <p>Executive decision-making continues to evolve with technological and societal changes:</p>

              <ul>
                <li><strong>Real-Time Data:</strong> Access to live information enabling faster and more accurate decisions.</li>
                <li><strong>Augmented Intelligence:</strong> AI assistance that enhances human decision-making capabilities.</li>
                <li><strong>Stakeholder Complexity:</strong> Growing need to consider environmental and social impacts.</li>
                <li><strong>Global Coordination:</strong> Need to make decisions across multiple cultures and regulatory environments.</li>
                <li><strong>Agility Requirements:</strong> Expectation of rapid decision-making in fast-changing markets.</li>
              </ul>

              <p>As organizations face increasing complexity and uncertainty, the executives who master the art and science of decision-making will be those who can balance analytical rigor with intuitive insight, leverage technology while maintaining human judgment, and make decisions that serve both short-term needs and long-term sustainability.</p>
            </div>

            <div className="mt-12 bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Executive Decision-Making Quiz</h3>
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

export default ExecutiveDecisionMaking;