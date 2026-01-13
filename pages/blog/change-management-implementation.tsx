import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

const ChangeManagementImplementation = () => {
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
      // Correct answers: 2 for Q1, 0 for Q2, 1 for Q3
      const correctAnswers = [2, 0, 1];
      return answer === correctAnswers[index];
    }).length;
  };

  const faqs = [
    {
      question: "How long does a typical organizational change initiative take?",
      answer: "The duration varies greatly depending on the scope and complexity of the change. Small process changes might take weeks, while major transformations can take years. Successful change initiatives typically involve multiple phases over months or years."
    },
    {
      question: "What are the most common reasons for change failure?",
      answer: "Common reasons include lack of leadership support, poor communication, resistance from employees, inadequate resources, unclear vision, and failure to address cultural factors."
    },
    {
      question: "How can managers overcome resistance to change?",
      answer: "Managers should address resistance early by involving stakeholders in the change process, communicating the rationale clearly, providing training and support, acknowledging concerns, and demonstrating the benefits of change through early wins."
    }
  ];

  const quizQuestions = [
    {
      question: "Which model is most widely used for change management?",
      options: [
        "Kotter's 8-Step Process",
        "ADKAR Model",
        "Both Kotter's 8-Step Process and ADKAR Model",
        "McKinsey 7-S Framework"
      ],
      correct: 2
    },
    {
      question: "What is the first step in Kotter's change model?",
      options: [
        "Create a guiding coalition",
        "Communicate the vision",
        "Establish a sense of urgency",
        "Generate short-term wins"
      ],
      correct: 2
    },
    {
      question: "What does the ADKAR acronym stand for?",
      options: [
        "Action, Development, Knowledge, Action, Results",
        "Awareness, Desire, Knowledge, Ability, Reinforcement",
        "Assessment, Direction, Knowledge, Action, Review",
        "Analysis, Design, Knowledge, Ability, Results"
      ],
      correct: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>Change Management Implementation: Leading Through Transitions | Business Strategy Hub</title>
        <meta name="description" content="Strategies for successfully managing organizational change and helping teams adapt." />
        <link rel="canonical" href="https://www.businessstrategyhub.com/blog/change-management-implementation" />
        <meta property="og:title" content="Change Management Implementation: Leading Through Transitions" />
        <meta property="og:description" content="Strategies for successfully managing organizational change and helping teams adapt." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.businessstrategyhub.com/blog/change-management-implementation" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Change Management Implementation: Leading Through Transitions" />
        <meta name="twitter:description" content="Strategies for successfully managing organizational change and helping teams adapt." />
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
                  Change Management Implementation: Leading Through Transitions
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
                Change Management
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                11 min read
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm.375 0h-.008v.008h.008v-.008Zm0 6h.008v.008H12v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm.375 0h-.008v.008h.008v-.008Z" />
                </svg>
                Published: January 5, 2026
              </div>
            </div>
          </header>

          <div className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="lead-text">
                Change management has become one of the most critical competencies for organizations navigating today's dynamic business environment. With technological disruption, market volatility, and evolving customer expectations, the ability to successfully implement and sustain organizational change determines competitive advantage and long-term viability. Effective change management goes beyond project management to encompass the human element of transformation, ensuring that people embrace and adopt new ways of working.
              </p>

              <h2>Foundations of Change Management</h2>
              <p>Change management is a systematic approach to transitioning individuals, teams, and organizations from a current state to a desired future state. It involves preparing stakeholders for change, managing the transition, and reinforcing the new behaviors and processes to ensure sustainability. The discipline recognizes that organizational change is fundamentally about people and how they adapt to new systems, processes, and ways of working.</p>

              <p>Research consistently shows that most change initiatives fail not due to technical issues but because of inadequate attention to the human aspects of change. Organizations that invest in robust change management practices see significantly higher success rates in their transformation efforts.</p>

              <h2>Key Change Management Models</h2>
              <p>Several proven frameworks guide successful change management implementation:</p>

              <h3>Kotter's 8-Step Change Model</h3>
              <p>Developed by Harvard Business School professor John Kotter, this model provides a comprehensive framework for leading organizational change:</p>

              <ol>
                <li><strong>Establish Urgency:</strong> Create a compelling reason for change by highlighting market realities and identifying potential threats or opportunities.</li>
                <li><strong>Build a Guiding Coalition:</strong> Assemble a group of influential leaders who can guide the change effort.</li>
                <li><strong>Create a Vision:</strong> Develop a clear picture of what the future will look like after the change.</li>
                <li><strong>Communicate the Vision:</strong> Share the vision widely and repeatedly to ensure understanding and buy-in.</li>
                <li><strong>Empower Action:</strong> Remove barriers and provide resources to enable change.</li>
                <li><strong>Create Short-Term Wins:</strong> Achieve and celebrate early successes to build momentum.</li>
                <li><strong>Don't Let Up:</strong> Maintain pressure for change and continue pushing forward.</li>
                <li><strong>Make It Stick:</strong> Anchor the changes in the organization's culture.</li>
              </ol>

              <h3>ADKAR Model</h3>
              <p>The ADKAR model focuses on individual change and provides a sequential framework:</p>

              <ul>
                <li><strong>Awareness:</strong> Understanding the need for change</li>
                <li><strong>Desire:</strong> Wanting to participate and support the change</li>
                <li><strong>Knowledge:</strong> Knowing how to change</li>
                <li><strong>Ability:</strong> Having the skills to implement the change</li>
                <li><strong>Reinforcement:</strong> Sustaining the change over time</li>
              </ul>

              <h2>Essential Elements of Change Management Implementation</h2>
              <p>Successful change management programs incorporate several critical elements:</p>

              <h3>Stakeholder Analysis and Engagement</h3>
              <p>Identifying all stakeholders affected by the change and understanding their concerns, influence, and potential resistance is crucial. Different stakeholders require tailored communication and engagement strategies based on their level of influence and interest in the change.</p>

              <h3>Communication Strategy</h3>
              <p>Effective communication addresses the "what," "why," and "when" of change while acknowledging the emotional aspects of transition. Communication should be frequent, transparent, and two-way, providing opportunities for questions and feedback.</p>

              <h3>Training and Support</h3>
              <p>Providing adequate training and support ensures that individuals have the knowledge and ability to adapt to new processes, systems, or behaviors. This includes not just technical training but also emotional support during the transition.</p>

              <h2>Overcoming Resistance to Change</h2>
              <p>Resistance to change is natural and predictable. Effective change management acknowledges resistance as a signal that more work is needed to build awareness, desire, or knowledge. Strategies for addressing resistance include:</p>

              <p><strong>Early Involvement:</strong> Including key stakeholders in the planning and design of change initiatives increases buy-in and reduces resistance.</p>

              <p><strong>Transparent Communication:</strong> Clearly explaining the rationale for change, including the risks of not changing, helps people understand the necessity of transformation.</p>

              <p><strong>Addressing Concerns:</strong> Listening to concerns and addressing them honestly, even when the answer is that change cannot be avoided.</p>

              <p><strong>Providing Support:</strong> Offering resources, training, and emotional support to help people through the transition.</p>

              <h3>Building Change Champions</h3>
              <p>Identifying and developing change champions—individuals who actively support and advocate for change—amplifies the reach and credibility of change communications. These champions often come from various levels and departments within the organization.</p>

              <h2>Measuring Change Success</h2>
              <p>Change management success should be measured through both leading and lagging indicators:</p>

              <h3>Leading Indicators</h3>
              <ul>
                <li>Stakeholder engagement levels</li>
                <li>Communication reach and comprehension</li>
                <li>Training completion rates</li>
                <li>Early adoption metrics</li>
              </ul>

              <h3>Lagging Indicators</h3>
              <ul>
                <li>Actual adoption of new processes or systems</li>
                <li>Performance improvements attributed to change</li>
                <li>Employee satisfaction with change process</li>
                <li>Retention of key personnel during transition</li>
              </ul>

              <h2>Change Management in Different Contexts</h2>
              <p>Change management approaches must be adapted based on the type and scale of change:</p>

              <p><strong>Process Changes:</strong> Focus on training, procedural documentation, and workflow adjustments.</p>

              <p><strong>Technology Changes:</strong> Emphasize user adoption, technical support, and integration with existing systems.</p>

              <p><strong>Cultural Changes:</strong> Require longer timeframes, leadership modeling, and systematic reinforcement of new values and behaviors.</p>

              <p><strong>Structural Changes:</strong> Involve communication about reporting relationships, role clarity, and organizational design.</p>

              <h2>Best Practices for Sustainable Change</h2>
              <p>Organizations that consistently succeed at change management follow several best practices:</p>

              <ul>
                <li><strong>Leadership Commitment:</strong> Visible and sustained support from senior leadership throughout the change process.</li>
                <li><strong>Integrated Approach:</strong> Aligning change management with project management and business process design.</li>
                <li><strong>Continuous Feedback:</strong> Regular pulse surveys and feedback mechanisms to monitor progress and adjust approach.</li>
                <li><strong>Reinforcement Mechanisms:</strong> Updating policies, procedures, and reward systems to support new ways of working.</li>
                <li><strong>Learning Organization:</strong> Capturing lessons learned and applying them to future change initiatives.</li>
              </ul>

              <h2>Future of Change Management</h2>
              <p>As organizations face increasing velocity of change, change management is evolving:</p>

              <ul>
                <li><strong>Agile Change Management:</strong> More iterative and adaptive approaches to change implementation.</li>
                <li><strong>Digital-First Approaches:</strong> Leveraging digital tools for communication, training, and feedback collection.</li>
                <li><strong>Personalization:</strong> Tailoring change experiences to individual preferences and learning styles.</li>
                <li><strong>Continuous Change:</strong> Moving from episodic change projects to ongoing change readiness.</li>
                <li><strong>Data Analytics:</strong> Using predictive analytics to identify resistance patterns and optimize change strategies.</li>
              </ul>

              <p>Organizations that master change management will be better positioned to thrive in an environment of constant transformation. The ability to successfully guide people through change becomes a core competitive advantage in the modern economy.</p>
            </div>

            <div className="mt-12 bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Change Management Implementation Quiz</h3>
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

export default ChangeManagementImplementation;