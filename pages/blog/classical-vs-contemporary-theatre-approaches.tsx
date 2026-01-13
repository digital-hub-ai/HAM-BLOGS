import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ClassicalVsContemporaryTheatreApproaches() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string | null}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What defines classical theatre?",
      answer: "Classical theatre typically refers to works from established traditions, including ancient Greek and Roman drama, Shakespearean plays, and other works from the Western theatrical canon. These works often emphasize formal structure, poetic language, and universal themes."
    },
    {
      question: "What characterizes contemporary theatre?",
      answer: "Contemporary theatre encompasses works from the present era that often challenge traditional conventions, experiment with form, address current social issues, and incorporate modern technology and staging techniques. It prioritizes relevance to current audiences and often explores new narrative structures."
    },
    {
      question: "Can classical and contemporary theatre coexist?",
      answer: "Absolutely. Many theaters successfully balance classical and contemporary works, offering audiences diverse experiences. Contemporary interpretations of classical works are common, and classical techniques continue to inform modern productions."
    },
    {
      question: "Which approach is better for new theatergoers?",
      answer: "Both approaches offer value for new theatergoers. Classical works provide exposure to proven storytelling techniques and cultural heritage, while contemporary works often address familiar themes and current issues. The best approach depends on individual interests and preferences."
    },
    {
      question: "How do production values differ between the two approaches?",
      answer: "Classical productions often emphasize text, language, and character development, while contemporary productions may incorporate more innovative staging, technology, and multimedia elements. However, both can feature high production values appropriate to their artistic goals."
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "What is a key characteristic of classical theatre?",
      options: [
        "Experimental staging techniques",
        "Focus on current social issues",
        "Emphasis on formal structure and poetic language",
        "Use of modern technology"
      ],
      correctAnswer: "Emphasis on formal structure and poetic language"
    },
    {
      question: "How does contemporary theatre typically differ from classical theatre?",
      options: [
        "It avoids current social issues",
        "It emphasizes traditional conventions",
        "It challenges traditional conventions and addresses current issues",
        "It focuses only on ancient themes"
      ],
      correctAnswer: "It challenges traditional conventions and addresses current issues"
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
        <title>Classical vs Contemporary Theatre: Approaches and Audiences | HAM-BLOGS</title>
        <meta name="description" content="Examining the differences between classical and contemporary theatrical approaches and their respective audiences." />
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
              <span className="inline-block px-3 py-1 text-sm font-semibold text-orange-700 bg-orange-100 rounded-full">Theatre</span>
              <span className="inline-block px-3 py-1 ml-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full">Classical vs Contemporary</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Classical vs Contemporary Theatre: Approaches and Audiences</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">January 4, 2026</span>
              <span className="mr-4">•</span>
              <span>10 min read</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                The world of theater encompasses a rich spectrum of approaches, from the time-tested works of classical drama to the innovative and often provocative pieces of contemporary theater. Understanding the distinctions between these approaches, their respective audiences, and their unique contributions to the theatrical landscape provides insight into the diverse ways live performance can engage, challenge, and entertain audiences.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Foundations of Classical Theatre</h2>
              
              <p className="text-gray-700 mb-4">
                Classical theatre draws from centuries of dramatic tradition, featuring works by masters like Sophocles, Shakespeare, Molière, Ibsen, and Chekhov. These works have endured because they explore universal themes—love, death, power, betrayal, redemption—that resonate across cultures and generations. The language in classical works is often poetic and elevated, requiring audiences to engage actively with complex text.
              </p>
              
              <p className="text-gray-700 mb-4">
                The structure of classical plays typically follows established conventions: acts and scenes, clear dramatic arcs, and well-defined character roles. These works emphasize character development, psychological depth, and the power of language to convey meaning. When audiences attend a classical production, they're participating in a cultural tradition that connects them to centuries of theatrical experience.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Production Values in Classical Theatre</h3>
              
              <p className="text-gray-700 mb-4">
                Classical productions often prioritize the text and the actors' ability to bring it to life. Sets, costumes, and lighting support the story without overwhelming the language. The focus is typically on creating an environment that allows the timeless themes to speak clearly to contemporary audiences.
              </p>
              
              <p className="text-gray-700 mb-4">
                However, modern classical productions often incorporate contemporary elements to make these ancient stories relevant. For example, a production of "Hamlet" might be set in a modern corporate environment, or "Antigone" might address current political issues, while maintaining the integrity of the original text.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Innovation of Contemporary Theatre</h2>
              
              <p className="text-gray-700 mb-4">
                Contemporary theatre encompasses works from the present era that often challenge traditional theatrical conventions. These productions may experiment with non-linear narratives, incorporate multimedia elements, or address current social and political issues. Contemporary playwrights like Tony Kushner, Sarah Ruhl, and Lin-Manuel Miranda have redefined what theater can be and how it can speak to modern audiences.
              </p>
              
              <p className="text-gray-700 mb-4">
                Contemporary works often feature more conversational language that reflects how people actually speak today. The themes tend to address current concerns: social justice, identity, technology, environmental issues, and cultural diversity. These productions may blur the lines between performer and audience, incorporate non-traditional spaces, or use technology in innovative ways.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Audience Expectations and Engagement</h3>
              
              <p className="text-gray-700 mb-4">
                Classical theatre audiences often seek the intellectual and emotional satisfaction of experiencing well-crafted language and exploring timeless themes. These patrons may appreciate the challenge of following complex poetic texts and enjoy the cultural significance of participating in established traditions.
              </p>
              
              <p className="text-gray-700 mb-4">
                Contemporary theatre audiences might expect to be challenged or surprised, looking for works that address current issues and reflect their own experiences. These patrons may appreciate innovative staging, modern themes, and the opportunity to engage with theater as a living, evolving art form that speaks to contemporary concerns.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Intersection of Both Approaches</h2>
              
              <p className="text-gray-700 mb-4">
                Many of today's most successful productions blend classical and contemporary approaches. A classical play might be updated to a modern setting while preserving the original text, or contemporary staging techniques might be used to illuminate classical themes. These hybrid approaches can make classical works more accessible to contemporary audiences while maintaining their artistic integrity.
              </p>
              
              <p className="text-gray-700 mb-4">
                For example, the recent Broadway production of "Julius Caesar" set the play in a contemporary context with modern dress, making the political themes immediately relevant to current events while preserving Shakespeare's original language and dramatic structure.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Production Techniques and Technology</h3>
              
              <p className="text-gray-700 mb-4">
                Contemporary productions often incorporate advanced technology, multimedia elements, and innovative staging techniques that weren't available to classical playwrights. Projection mapping, digital sound design, and interactive elements are more common in contemporary works.
              </p>
              
              <p className="text-gray-700 mb-4">
                However, classical productions can also benefit from modern technology when used thoughtfully. Digital projections might enhance a classical set design, or modern lighting techniques might illuminate classical themes in new ways.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Educational and Cultural Value</h2>
              
              <p className="text-gray-700 mb-4">
                Classical theatre provides audiences with access to cultural heritage and literary traditions that have shaped Western drama. These works offer models of excellent writing, complex character development, and sophisticated dramatic structure that continue to influence contemporary playwrights.
              </p>
              
              <p className="text-gray-700 mb-4">
                Contemporary theatre reflects current cultural values, social issues, and artistic innovations. These works often serve as a mirror for society, addressing problems and possibilities that classical works couldn't anticipate. They also demonstrate theater's continued relevance and evolution as an art form.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Accessibility and Inclusivity</h3>
              
              <p className="text-gray-700 mb-4">
                Contemporary theatre has made significant strides in representing diverse voices and experiences. Modern productions often feature more diverse casting, address issues of inclusion, and explore stories from underrepresented communities.
              </p>
              
              <p className="text-gray-700 mb-4">
                Classical works are also being reinterpreted to be more inclusive, with gender-blind casting, diverse productions, and new translations that make these works accessible to broader audiences.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Economic Landscape</h2>
              
              <p className="text-gray-700 mb-4">
                Classical productions often have the advantage of name recognition, which can make marketing easier and attract audiences familiar with the works. However, they may require larger casts and more elaborate period costumes and sets.
              </p>
              
              <p className="text-gray-700 mb-4">
                Contemporary works may be less expensive to produce in terms of sets and costumes but face the challenge of marketing unknown works to audiences. However, they can attract younger demographics and create buzz through social media and cultural relevance.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Critical Reception and Awards</h3>
              
              <p className="text-gray-700 mb-4">
                Classical productions are often evaluated based on the quality of the interpretation and the skill of the performers in bringing well-known texts to life. Critics may compare new productions to previous notable interpretations.
              </p>
              
              <p className="text-gray-700 mb-4">
                Contemporary works are often judged on their innovation, relevance, and contribution to the theatrical landscape. They may receive recognition for pushing boundaries or addressing important contemporary issues.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Looking Forward: The Continuing Evolution</h2>
              
              <p className="text-gray-700 mb-4">
                The relationship between classical and contemporary theatre continues to evolve. New technologies, changing social values, and global cultural exchange are creating new possibilities for both approaches.
              </p>
              
              <p className="text-gray-700 mb-4">
                The most successful theaters today offer a balance of both approaches, providing audiences with opportunities to experience the enduring power of classical works and the innovative spirit of contemporary pieces. This diversity ensures that theater remains a vibrant and relevant art form for all audiences.
              </p>
              
              <p className="text-gray-700 mb-4">
                Whether attending a Shakespeare play or a new contemporary work, audiences are participating in the same fundamental human activity: gathering together to experience stories that illuminate the human condition. Both classical and contemporary approaches contribute essential elements to this shared cultural experience.
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
            <p>© 2026 HAM-BLOGS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}