import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

const EffectiveLeadershipPrinciples = () => {
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
      // Correct answers: 2 for Q1, 1 for Q2, 0 for Q3
      const correctAnswers = [2, 1, 0];
      return answer === correctAnswers[index];
    }).length;
  };

  const faqs = [
    {
      question: "What are the most important qualities of an effective leader?",
      answer: "The most important qualities include emotional intelligence, clear communication, integrity, adaptability, and the ability to inspire and motivate others. Effective leaders also demonstrate accountability and a commitment to continuous learning."
    },
    {
      question: "How can leaders build trust with their teams?",
      answer: "Leaders can build trust by being transparent, keeping commitments, admitting mistakes, showing vulnerability appropriately, and consistently acting with integrity. Regular communication and following through on promises are also crucial."
    },
    {
      question: "What is the difference between leadership and management?",
      answer: "Leadership focuses on inspiring and guiding people toward a vision, while management focuses on organizing, planning, and coordinating resources. Both are important, but leadership drives change while management maintains stability."
    }
  ];

  const quizQuestions = [
    {
      question: "Which leadership style is most effective in crisis situations?",
      options: [
        "Democratic",
        "Laissez-faire",
        "Autocratic",
        "Transformational"
      ],
      correct: 2
    },
    {
      question: "What is emotional intelligence in leadership?",
      options: [
        "The ability to show emotions in the workplace",
        "The ability to understand, use, and manage emotions effectively",
        "Having empathy only for team members",
        "Being able to handle stress well"
      ],
      correct: 1
    },
    {
      question: "What is the primary goal of effective leadership?",
      options: [
        "To maintain control over team members",
        "To achieve organizational objectives through people",
        "To gain personal recognition",
        "To minimize costs"
      ],
      correct: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>Effective Leadership Principles: Leading High-Performance Teams | Business Strategy Hub</title>
        <meta name="description" content="Essential leadership principles that enable managers to inspire teams and drive organizational success." />
        <link rel="canonical" href="https://www.businessstrategyhub.com/blog/effective-leadership-principles" />
        <meta property="og:title" content="Effective Leadership Principles: Leading High-Performance Teams" />
        <meta property="og:description" content="Essential leadership principles that enable managers to inspire teams and drive organizational success." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.businessstrategyhub.com/blog/effective-leadership-principles" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Effective Leadership Principles: Leading High-Performance Teams" />
        <meta name="twitter:description" content="Essential leadership principles that enable managers to inspire teams and drive organizational success." />
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
                  Effective Leadership Principles: Leading High-Performance Teams
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
                Leadership
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
                Published: January 8, 2026
              </div>
            </div>
          </header>

          <div className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="lead-text">
                Effective leadership is the cornerstone of organizational success, serving as the catalyst that transforms individual talents into collective achievements. In today's complex and rapidly changing business environment, leadership extends far beyond traditional authority and encompasses the ability to inspire, guide, and empower teams toward shared goals. Great leaders understand that their role is not to control but to create conditions where people can thrive and contribute their best efforts.
              </p>

              <h2>Core Principles of Effective Leadership</h2>
              <p>Leadership excellence rests on several fundamental principles that, when applied consistently, create the foundation for high-performing teams and organizations. These principles transcend industry, company size, and cultural differences, representing universal truths about human motivation and organizational effectiveness.</p>

              <p>First and foremost is the principle of vision casting. Effective leaders create compelling pictures of the future that inspire and guide their teams. This vision must be clear, achievable, and aligned with the organization's core values. It serves as a North Star, helping team members understand not just what they're doing, but why their work matters in the grand scheme of things.</p>

              <h2>The Power of Emotional Intelligence</h2>
              <p>Emotional intelligence has emerged as perhaps the most critical leadership competency in the modern workplace. Leaders with high emotional intelligence can recognize, understand, and manage their own emotions while also perceiving and influencing the emotions of others. This capability enables them to navigate complex interpersonal dynamics, resolve conflicts effectively, and build strong relationships with team members.</p>

              <p>Emotional intelligence manifests in several ways: self-awareness allows leaders to understand their own strengths, weaknesses, and triggers; self-regulation helps them maintain composure under pressure; motivation drives their commitment to goals beyond mere compensation; empathy enables them to understand and relate to others' perspectives; and social skills facilitate effective communication and relationship building.</p>

              <h2>Communication as a Leadership Tool</h2>
              <p>Clear, consistent communication stands as one of the most powerful tools in a leader's arsenal. Effective leaders don't just communicate information; they create understanding and alignment. They adapt their communication style to different audiences, ensuring that messages are received as intended. This involves not only speaking but also listening actively, asking thoughtful questions, and creating feedback loops that encourage open dialogue.</p>

              <p>Transparency in communication builds trust and reduces uncertainty. When leaders share the rationale behind decisions, acknowledge challenges, and provide honest updates about organizational performance, they create an environment where team members feel informed and valued. This transparency extends to admitting mistakes and learning from failures, demonstrating authenticity and growth mindset.</p>

              <h2>Building and Empowering Teams</h2>
              <p>Exceptional leaders understand that their primary role is to build and empower capable teams rather than to be the smartest person in the room. This involves recognizing and leveraging the unique strengths of each team member, providing appropriate challenges that stretch their capabilities, and creating opportunities for growth and development.</p>

              <ol>
                <li><strong>Delegation with Trust:</strong> Effective leaders delegate meaningful responsibilities while providing the necessary support and autonomy for team members to succeed.</li>
                <li><strong>Recognition and Appreciation:</strong> Regular acknowledgment of contributions reinforces positive behaviors and motivates continued excellence.</li>
                <li><strong>Development Focus:</strong> Investing in team members' professional growth creates loyalty and builds organizational capability.</li>
                <li><strong>Psychological Safety:</strong> Creating an environment where team members feel safe to take risks, share ideas, and admit mistakes without fear of retribution.</li>
              </ol>

              <h3>Decision-Making and Accountability</h3>
              <p>Leadership requires making decisions with imperfect information under time constraints, often with significant consequences. Effective leaders develop frameworks for decision-making that balance analysis with action, involve the right people in the process, and maintain accountability for outcomes.</p>

              <p>Accountability flows in multiple directions: leaders hold team members accountable for their commitments while also being accountable to their teams for providing necessary resources, guidance, and support. This mutual accountability creates a culture of ownership and excellence where everyone understands their role in collective success.</p>

              <h2>Adaptability and Continuous Learning</h2>
              <p>In our rapidly evolving business landscape, adaptability has become a core leadership requirement. Effective leaders remain open to new ideas, adjust strategies based on changing circumstances, and model the learning mindset they expect from their teams. They view challenges as opportunities to grow and improve rather than as obstacles to success.</p>

              <p>Continuous learning is both a personal practice and an organizational priority for effective leaders. They stay current with industry trends, seek feedback on their performance, and invest time in developing new skills and capabilities. This learning orientation helps them remain relevant and effective while demonstrating to their teams that growth is a lifelong journey.</p>

              <h2>Leading Through Change</h2>
              <p>Change is inevitable in modern organizations, and leaders must be skilled at guiding their teams through transitions. This involves clear communication about the reasons for change, involvement of team members in the change process, and support during the adjustment period. Effective leaders understand that change happens one person at a time and address individual concerns while maintaining focus on collective objectives.</p>

              <p>Successful change leadership also requires patience and persistence. Leaders must recognize that adaptation takes time and celebrate progress along the way while maintaining momentum toward ultimate goals. They anticipate resistance and develop strategies to address concerns while keeping the organization moving forward.</p>

              <h2>Measuring Leadership Effectiveness</h2>
              <p>Leadership effectiveness can be evaluated through multiple lenses: team performance metrics, employee engagement scores, retention rates, and feedback from direct reports. However, the most telling indicator is often whether team members would choose to follow the same leader again given the opportunity.</p>

              <p>Effective leaders regularly solicit feedback about their leadership approach, conduct stay interviews with team members, and track leading indicators of team health such as psychological safety, clarity of expectations, and sense of purpose. They use this information to continuously refine their approach and improve their impact.</p>

              <h2>Future of Leadership</h2>
              <p>As organizations evolve, so too must leadership approaches. The future of leadership will likely emphasize distributed leadership models, increased focus on employee well-being, and greater integration of technology in team management. Leaders will need to balance human-centered approaches with data-driven decision-making while maintaining focus on purpose and values.</p>

              <p>Remote and hybrid work models require new approaches to building team cohesion and maintaining engagement. Leaders must become adept at virtual communication, trust-building across distances, and creating inclusive environments regardless of physical location. The leaders who thrive in this environment will be those who prioritize relationships and results equally.</p>

              <p>Ultimately, effective leadership is not about having all the answers but about creating the conditions where teams can find solutions together. It requires a delicate balance of confidence and humility, direction and empowerment, and focus on both immediate results and long-term development. The most successful leaders understand that their legacy is not what they accomplished personally, but what they enabled others to achieve.</p>
            </div>

            <div className="mt-12 bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Leadership Principles Quiz</h3>
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

export default EffectiveLeadershipPrinciples;