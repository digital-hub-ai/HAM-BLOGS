import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LiteraryAnalysisCriticalInterpretation() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string | null}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is literary analysis?",
      answer: "Literary analysis is the practice of examining and interpreting literary works to understand their meaning, themes, symbols, and other elements. It involves close reading and critical thinking to uncover deeper layers of meaning."
    },
    {
      question: "What are the key elements of literary analysis?",
      answer: "The key elements include theme, character development, plot structure, setting, symbolism, imagery, tone, and point of view. Each element contributes to the overall meaning and impact of the work."
    },
    {
      question: "How do I start analyzing a literary work?",
      answer: "Begin by reading the text carefully, taking notes on important passages, recurring themes, and significant characters. Consider the historical and cultural context, and look for patterns and connections throughout the work."
    },
    {
      question: "What is the difference between plot and theme?",
      answer: "Plot refers to the sequence of events in a story, while theme is the underlying message or meaning that the author conveys. The plot is what happens, while the theme is what it means."
    },
    {
      question: "Why is context important in literary analysis?",
      answer: "Context includes the historical, social, political, and cultural circumstances in which a work was written. Understanding context helps readers appreciate the author's intentions and the work's significance."
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "What is the primary purpose of literary analysis?",
      options: [
        "To summarize the plot",
        "To understand deeper meanings and themes",
        "To memorize character names",
        "To count the number of pages"
      ],
      correctAnswer: "To understand deeper meanings and themes"
    },
    {
      question: "Which element refers to the author's attitude toward the subject?",
      options: [
        "Theme",
        "Tone",
        "Plot",
        "Setting"
      ],
      correctAnswer: "Tone"
    },
    {
      question: "What does 'close reading' involve?",
      options: [
        "Reading quickly to finish faster",
        "Carefully examining the text for details and meaning",
        "Skipping difficult passages",
        "Only reading the ending"
      ],
      correctAnswer: "Carefully examining the text for details and meaning"
    }
  ];

  const handleQuizAnswer = (questionIndex: number, answer: string) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionIndex]: answer
    });
  };

  const submitQuiz = () => {
    setQuizSubmitted(true);
  };

  const calculateScore = () => {
    let correct = 0;
    quizQuestions.forEach((q, index) => {
      if (quizAnswers[index] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Head>
        <title>Literary Analysis: Techniques for Critical Interpretation | HAM-BLOGS</title>
        <meta name="description" content="Master the art of literary analysis and develop skills for deeper critical interpretation of texts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <button 
            onClick={() => router.back()} 
            className="flex items-center text-orange-600 hover:text-orange-800 transition-colors duration-200"
          >
            <span className="mr-2">←</span> Back to Articles
          </button>
          <div>
            <button
              onClick={toggleBookmark}
              className={`p-2 rounded-full ${bookmarked ? 'text-orange-500' : 'text-gray-400'} hover:text-orange-500 transition-colors duration-200`}
              aria-label={bookmarked ? "Remove bookmark" : "Bookmark article"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={bookmarked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <article className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="p-8">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-orange-700 bg-orange-100 rounded-full">Literature</span>
              <span className="inline-block px-3 py-1 ml-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full">Analysis</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Literary Analysis: Techniques for Critical Interpretation</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">July 20, 2024</span>
              <span className="mr-4">•</span>
              <span>13 min read</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Literary analysis is the cornerstone of deeper reading, transforming a casual reader into a critical interpreter of texts. This process involves examining the intricate elements of literature to understand how authors create meaning and convey themes. In this comprehensive guide, we'll explore the essential techniques for developing your analytical skills and engaging with literature on a deeper level.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Understanding the Fundamentals of Literary Analysis</h2>
              
              <p className="text-gray-700 mb-4">
                Literary analysis is more than just summarizing a story's plot. It's an in-depth examination of how various elements work together to create meaning. This includes analyzing the author's use of literary devices, the structure of the narrative, character development, and the cultural and historical context in which the work was created.
              </p>
              
              <p className="text-gray-700 mb-4">
                The goal of literary analysis is to understand not only what happens in a text, but why it happens and what significance it holds. This involves close reading, where you carefully examine the text for details, patterns, and connections that may not be immediately apparent.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Key Elements of Literary Analysis</h3>
              
              <p className="text-gray-700 mb-4">
                To conduct effective literary analysis, you need to consider several key elements that work together to create meaning in a text. These include:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li className="mb-2"><strong>Theme:</strong> The central message or meaning of the work</li>
                <li className="mb-2"><strong>Character:</strong> The individuals who participate in the action of the plot</li>
                <li className="mb-2"><strong>Plot:</strong> The sequence of events that make up the story</li>
                <li className="mb-2"><strong>Setting:</strong> The time and place in which the story occurs</li>
                <li className="mb-2"><strong>Point of View:</strong> The perspective from which the story is told</li>
                <li className="mb-2"><strong>Tone:</strong> The author's attitude toward the subject</li>
                <li className="mb-2"><strong>Symbolism:</strong> Objects, characters, or events that represent deeper meanings</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Close Reading Techniques</h2>
              
              <p className="text-gray-700 mb-4">
                Close reading is the foundation of literary analysis. This involves carefully examining a text for details, language choices, and patterns. When performing close reading, consider:
              </p>
              
              <p className="text-gray-700 mb-4">
                <strong>Word Choice:</strong> Why did the author choose specific words over others? What connotations do these words carry?
              </p>
              
              <p className="text-gray-700 mb-4">
                <strong>Repetition:</strong> What words, phrases, or images are repeated? How does this repetition contribute to meaning?
              </p>
              
              <p className="text-gray-700 mb-4">
                <strong>Metaphors and Similes:</strong> What comparisons does the author make? How do these comparisons enhance understanding?
              </p>
              
              <p className="text-gray-700 mb-4">
                <strong>Syntax and Sentence Structure:</strong> How does the arrangement of words and sentences affect the meaning and rhythm of the text?
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Historical and Cultural Context</h2>
              
              <p className="text-gray-700 mb-4">
                Understanding the historical and cultural context in which a work was written is crucial for literary analysis. This includes knowledge of the time period, social conditions, political climate, and cultural movements that may have influenced the author.
              </p>
              
              <p className="text-gray-700 mb-4">
                For example, analyzing a novel written during the Victorian era requires understanding the social norms, moral values, and technological changes of that time. Similarly, a work written during wartime will reflect the anxieties and experiences of that period.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Theoretical Approaches to Literary Analysis</h2>
              
              <p className="text-gray-700 mb-4">
                Literary critics use various theoretical approaches to analyze texts. Some of the most common approaches include:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li className="mb-2"><strong>Formalism:</strong> Focuses on the form and structure of the text itself, examining literary devices and techniques</li>
                <li className="mb-2"><strong>Historicism:</strong> Emphasizes the historical context in which a work was written</li>
                <li className="mb-2"><strong>Feminism:</strong> Examines gender roles, women's experiences, and power dynamics in literature</li>
                <li className="mb-2"><strong>Marxism:</strong> Analyzes class struggles, economic systems, and power structures in texts</li>
                <li className="mb-2"><strong>Psychoanalysis:</strong> Explores unconscious desires, dreams, and psychological conflicts in literature</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Developing Your Analytical Voice</h2>
              
              <p className="text-gray-700 mb-4">
                As you develop your skills in literary analysis, you'll need to find your own critical voice. This involves forming original interpretations supported by textual evidence. Remember that literary analysis is not about finding the "right" answer, but rather about developing well-reasoned arguments about the meaning and significance of a text.
              </p>
              
              <p className="text-gray-700 mb-4">
                Support your interpretations with specific examples from the text. Quote directly when possible, and always explain how your evidence supports your argument. Be open to multiple interpretations, as great literature often has layers of meaning that can be understood in different ways.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Pitfalls to Avoid</h2>
              
              <p className="text-gray-700 mb-4">
                When beginning literary analysis, there are several common mistakes to avoid:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li className="mb-2">Confusing plot summary with analysis</li>
                <li className="mb-2">Making claims without textual evidence</li>
                <li className="mb-2">Imposing modern values on historical texts</li>
                <li className="mb-2">Overlooking the author's intended meaning</li>
                <li className="mb-2">Failing to consider alternative interpretations</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusion</h2>
              
              <p className="text-gray-700 mb-4">
                Literary analysis is a skill that develops over time with practice and patience. By learning to read closely, consider context, and engage with texts critically, you'll gain a deeper appreciation for literature and the complex ways authors craft meaning.
              </p>
              
              <p className="text-gray-700 mb-4">
                Remember that literary analysis is not about finding hidden secrets in texts, but rather about understanding how literary elements work together to create meaning. With practice, you'll develop the ability to engage with literature in more sophisticated ways and appreciate the artistry involved in literary creation.
              </p>
            </div>
          </div>
        </article>

        {/* Quiz Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Test Your Knowledge</h2>
          
          <div className="space-y-6">
            {quizQuestions.map((q, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{q.question}</h3>
                <div className="space-y-2">
                  {q.options.map((option, optIndex) => (
                    <div key={optIndex} className="flex items-center">
                      <input
                        type="radio"
                        id={`q${index}_opt${optIndex}`}
                        name={`question${index}`}
                        checked={quizAnswers[index] === option}
                        onChange={() => handleQuizAnswer(index, option)}
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500"
                        disabled={quizSubmitted}
                      />
                      <label 
                        htmlFor={`q${index}_opt${optIndex}`} 
                        className="ml-3 block text-gray-700"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <button
            onClick={submitQuiz}
            disabled={quizSubmitted}
            className={`mt-4 px-6 py-3 rounded-lg font-medium ${
              quizSubmitted 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-200'
            }`}
          >
            {quizSubmitted ? 'Quiz Submitted' : 'Submit Answers'}
          </button>
          
          {quizSubmitted && (
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Results</h3>
              <p className="text-green-700">
                You scored {calculateScore()} out of {quizQuestions.length} correct!
              </p>
            </div>
          )}
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full text-left py-2 focus:outline-none"
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  <svg 
                    className={`h-5 w-5 text-orange-500 transform transition-transform duration-200 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {expandedFaq === index && (
                  <div className="mt-2 text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>© 2024 HAM-BLOGS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}