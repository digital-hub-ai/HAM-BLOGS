import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

const OrganizationalCommunication = () => {
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
      // Correct answers: 3 for Q1, 2 for Q2, 1 for Q3
      const correctAnswers = [3, 2, 1];
      return answer === correctAnswers[index];
    }).length;
  };

  const faqs = [
    {
      question: "What are the most effective communication channels in organizations?",
      answer: "The most effective approach uses multiple channels tailored to the message type: email for documentation, instant messaging for quick questions, video calls for complex discussions, and face-to-face meetings for sensitive topics. The key is matching the channel to the message and audience."
    },
    {
      question: "How can organizations improve internal communication?",
      answer: "Organizations can improve internal communication by establishing clear communication protocols, providing communication skills training, creating feedback channels, ensuring information flows both up and down the organization, and using appropriate technology tools."
    },
    {
      question: "What role does leadership play in organizational communication?",
      answer: "Leadership sets the tone for organizational communication through modeling, establishing expectations, creating communication channels, and ensuring that important information flows throughout the organization. Leaders must be visible communicators who engage with all levels of the organization."
    }
  ];

  const quizQuestions = [
    {
      question: "Which of the following is NOT a key element of effective organizational communication?",
      options: [
        "Clarity of message",
        "Appropriate timing",
        "Two-way dialogue",
        "Top-down hierarchy only"
      ],
      correct: 3
    },
    {
      question: "What percentage of communication is estimated to be non-verbal?",
      options: [
        "20%",
        "35%",
        "55%",
        "70%"
      ],
      correct: 2
    },
    {
      question: "What does the term 'communication climate' refer to?",
      options: [
        "Weather in the office",
        "Physical environment for communication",
        "The overall atmosphere that affects how people communicate",
        "Seasonal communication patterns"
      ],
      correct: 2
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>Organizational Communication: Enhancing Information Flow | Business Strategy Hub</title>
        <meta name="description" content="Best practices for creating effective communication channels within organizations." />
        <link rel="canonical" href="https://www.businessstrategyhub.com/blog/organizational-communication" />
        <meta property="og:title" content="Organizational Communication: Enhancing Information Flow" />
        <meta property="og:description" content="Best practices for creating effective communication channels within organizations." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.businessstrategyhub.com/blog/organizational-communication" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Organizational Communication: Enhancing Information Flow" />
        <meta name="twitter:description" content="Best practices for creating effective communication channels within organizations." />
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
                  Organizational Communication: Enhancing Information Flow
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
                Communication
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
                Effective organizational communication is the lifeblood of successful businesses, enabling coordination, collaboration, and alignment across all levels of the enterprise. In today's complex and fast-paced business environment, organizations that excel at communication enjoy significant advantages in employee engagement, operational efficiency, and strategic execution. Communication isn't just about sharing information—it's about creating understanding, building trust, and fostering the collaborative environment necessary for organizational success.
              </p>

              <h2>The Importance of Organizational Communication</h2>
              <p>Organizational communication encompasses all the ways that information flows within and outside an organization. It includes formal communication through official channels, informal networks that naturally develop among employees, and the countless interactions that occur daily between team members, departments, and leadership levels.</p>

              <p>Research consistently demonstrates the correlation between effective communication and organizational performance. Companies with strong communication practices report higher employee engagement, lower turnover, and better financial performance compared to those with poor communication.</p>

              <h2>Types of Organizational Communication</h2>
              <p>Understanding the different types of organizational communication helps managers design more effective communication strategies:</p>

              <h3>Vertical Communication</h3>
              <p>This flows up and down the organizational hierarchy. Downward communication includes directives, policies, and information from leadership to employees. Upward communication encompasses feedback, reports, and concerns from employees to management. Effective vertical communication ensures that information flows in both directions, creating a dialogue rather than a monologue.</p>

              <h3>Horizontal Communication</h3>
              <p>Also known as lateral communication, this occurs between peers and departments at the same organizational level. Horizontal communication is crucial for coordination, collaboration, and breaking down silos that can impede organizational effectiveness.</p>

              <h3>Diagonal Communication</h3>
              <p>This crosses both hierarchical and departmental boundaries, such as when a mid-level manager in marketing communicates with a senior executive in finance. Diagonal communication can improve efficiency but requires careful navigation of organizational politics.</p>

              <h3>External Communication</h3>
              <p>This involves communication with customers, suppliers, partners, investors, and the broader community. External communication shapes organizational reputation and stakeholder relationships.</p>

              <h2>Barriers to Effective Communication</h2>
              <p>Organizations face several common barriers that impede effective communication:</p>

              <ol>
                <li><strong>Information Overload:</strong> Too much information can be as problematic as too little, causing important messages to be overlooked.</li>
                <li><strong>Filtering:</strong> Information gets distorted as it passes through multiple layers of management.</li>
                <li><strong>Emotional Barriers:</strong> Personal feelings and biases can interfere with message reception.</li>
                <li><strong>Cultural Differences:</strong> Diverse workplaces require sensitivity to different communication styles and cultural norms.</li>
                <li><strong>Physical Barriers:</strong> Remote work, separate locations, and noise can impede communication.</li>
              </ol>

              <h3>Overcoming Communication Barriers</h3>
              <p>Successful organizations actively work to eliminate communication barriers through various strategies:</p>

              <ul>
                <li><strong>Clear Communication Protocols:</strong> Establishing clear expectations for when and how to use different communication channels.</li>
                <li><strong>Active Listening Training:</strong> Teaching employees and managers how to listen effectively and confirm understanding.</li>
                <li><strong>Feedback Mechanisms:</strong> Creating systems for two-way communication and encouraging feedback.</li>
                <li><strong>Technology Solutions:</strong> Implementing tools that facilitate communication and collaboration.</li>
                <li><strong>Regular Check-ins:</strong> Scheduling consistent communication touchpoints to maintain alignment.</li>
              </ul>

              <h2>Best Practices for Organizational Communication</h2>
              <p>Leading organizations implement several best practices to optimize their communication effectiveness:</p>

              <h3>Clarity and Consistency</h3>
              <p>Messages should be clear, concise, and consistent across all channels and spokespersons. Mixed messages create confusion and erode trust in organizational communication.</p>

              <h3>Multiple Channels</h3>
              <p>Using multiple communication channels ensures that messages reach all employees, who may have different preferences for receiving information. This might include email, intranet, video messages, town halls, and face-to-face meetings.</p>

              <h3>Timeliness</h3>
              <p>Communication should occur at appropriate times, neither too early nor too late. Critical information should be shared as soon as possible while ensuring accuracy.</p>

              <h3>Two-Way Dialogue</h3>
              <p>Effective communication involves listening as much as speaking. Organizations should create opportunities for feedback and discussion, not just one-way information sharing.</p>

              <h2>Technology and Communication Tools</h2>
              <p>Modern organizations leverage various technologies to enhance communication:</p>

              <p><strong>Collaboration Platforms:</strong> Tools like Microsoft Teams, Slack, or Google Workspace facilitate real-time communication and document sharing.</p>

              <p><strong>Video Conferencing:</strong> Essential for remote work and connecting geographically dispersed teams.</p>

              <p><strong>Internal Social Networks:</strong> Platforms that allow for informal communication and knowledge sharing.</p>

              <p><strong>Newsletters and Intranets:</strong> Centralized platforms for sharing organizational news and resources.</p>

              <p><strong>Mobile Apps:</strong> Ensuring communication reaches employees wherever they are.</p>

              <h3>Choosing the Right Channel</h3>
              <p>Effective communicators match their message to the appropriate channel:</p>

              <ul>
                <li><strong>Email:</strong> For documentation and formal communication</li>
                <li><strong>Instant Messaging:</strong> For quick questions and informal updates</li>
                <li><strong>Video Calls:</strong> For complex discussions requiring visual cues</li>
                <li><strong>Face-to-Face Meetings:</strong> For sensitive topics and relationship building</li>
                <li><strong>Written Reports:</strong> For detailed information and analysis</li>
              </ul>

              <h2>Creating a Communication Strategy</h2>
              <p>Organizations benefit from developing a comprehensive communication strategy that addresses:</p>

              <p><strong>Objectives:</strong> What the organization hopes to achieve through communication efforts.</p>

              <p><strong>Audiences:</strong> Identifying different stakeholder groups and their specific information needs.</p>

              <p><strong>Key Messages:</strong> Core messages that should be consistently communicated.</p>

              <p><strong>Channels:</strong> Determining which communication channels are most effective for different messages.</p>

              <p><strong>Responsibilities:</strong> Clarifying who is responsible for different aspects of organizational communication.</p>

              <p><strong>Measurement:</strong> Establishing metrics to evaluate communication effectiveness.</p>

              <h2>Measuring Communication Effectiveness</h2>
              <p>Organizations should regularly assess their communication effectiveness through:</p>

              <ul>
                <li><strong>Employee Surveys:</strong> Gauging employee understanding and satisfaction with communication.</li>
                <li><strong>Engagement Metrics:</strong> Tracking participation in communication activities.</li>
                <li><strong>Feedback Quality:</strong> Assessing the quality and quantity of feedback received.</li>
                <li><strong>Performance Indicators:</strong> Monitoring whether communication correlates with improved business outcomes.</li>
                <li><strong>Retention Rates:</strong> Examining whether good communication contributes to employee retention.</li>
              </ul>

              <h2>Future of Organizational Communication</h2>
              <p>Organizational communication continues to evolve with technological advances and changing workplace dynamics:</p>

              <ul>
                <li><strong>Artificial Intelligence:</strong> AI-powered tools for translation, summarization, and personalization of communication.</li>
                <li><strong>Virtual Reality:</strong> Immersive communication experiences for remote collaboration.</li>
                <li><strong>Personalization:</strong> Tailoring communication to individual preferences and roles.</li>
                <li><strong>Real-time Analytics:</strong> Immediate feedback on communication effectiveness.</li>
                <li><strong>Hybrid Models:</strong> Balancing in-person and virtual communication for mixed workforces.</li>
              </ul>

              <p>Organizations that prioritize and invest in effective communication will be better positioned to navigate challenges, capitalize on opportunities, and build the trust and alignment necessary for sustained success.</p>
            </div>

            <div className="mt-12 bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Organizational Communication Quiz</h3>
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

export default OrganizationalCommunication;