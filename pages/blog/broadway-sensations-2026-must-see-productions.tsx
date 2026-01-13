import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function BroadwaySensations2026MustSeeProductions() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string | null}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What makes a Broadway show a 'must-see' production?",
      answer: "A must-see Broadway production typically combines exceptional storytelling, outstanding performances, innovative staging, and cultural relevance. These shows often receive critical acclaim, win awards, or break new ground in theatrical presentation."
    },
    {
      question: "How do I choose which Broadway show to see?",
      answer: "Consider your personal interests in terms of genre, music style, and story themes. Read reviews, watch trailers, and check cast lists if specific performers interest you. Also consider your budget and timing, as premium seats for popular shows can be expensive."
    },
    {
      question: "What is the best way to get Broadway tickets?",
      answer: "You can purchase tickets through official websites, authorized ticket sellers, or the box office. For popular shows, booking in advance is advisable. Same-day lottery tickets or rush tickets offer more affordable options for certain shows."
    },
    {
      question: "What should I know about Broadway etiquette?",
      answer: "Arrive early, turn off electronic devices during the performance, avoid talking during the show, and clap when appropriate. Generally, no food or drinks are allowed in the auditorium."
    },
    {
      question: "Are there age restrictions for Broadway shows?",
      answer: "Yes, many shows have recommended age guidelines based on content. Some shows may not be suitable for young children due to mature themes, language, or intense scenes. Check the show's website for specific recommendations."
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "Which factor is most important when determining a 'must-see' Broadway show?",
      options: [
        "Ticket price",
        "Critical acclaim and cultural relevance",
        "Length of the show",
        "Location of the theater"
      ],
      correctAnswer: "Critical acclaim and cultural relevance"
    },
    {
      question: "What is the best way to secure tickets for popular Broadway shows?",
      options: [
        "Waiting at the box office on the day of the show",
        "Booking in advance online or by phone",
        "Buying from unauthorized street vendors",
        "Using unofficial resale platforms"
      ],
      correctAnswer: "Booking in advance online or by phone"
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
        <title>Broadway Sensations of 2026: Must-See Productions | HAM-BLOGS</title>
        <meta name="description" content="A comprehensive guide to the most acclaimed Broadway shows of 2026 that deserve your attention and tickets." />
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
              <span className="inline-block px-3 py-1 ml-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full">Broadway</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Broadway Sensations of 2026: Must-See Productions</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">January 8, 2026</span>
              <span className="mr-4">•</span>
              <span>10 min read</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                The Broadway season of 2026 has been nothing short of spectacular, with a remarkable lineup of productions that have captivated audiences and critics alike. From groundbreaking new works to innovative revivals, this year has set new standards for theatrical excellence. In this comprehensive guide, we'll explore the must-see productions that have defined the Broadway landscape this year.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Groundbreaking New Works</h2>
              
              <p className="text-gray-700 mb-4">
                This season has introduced several groundbreaking new works that have pushed the boundaries of traditional Broadway storytelling. Among the most talked-about premieres is "Echoes of Tomorrow," a sci-fi musical that seamlessly blends cutting-edge projection technology with classical songwriting to create an immersive experience unlike anything seen before on Broadway.
              </p>
              
              <p className="text-gray-700 mb-4">
                Another standout is "Threads of Destiny," a sweeping historical epic that tells the interconnected stories of five generations of women through revolutionary staging techniques. The production features a rotating stage that moves through different eras, allowing audiences to witness history unfold in real-time.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Revolutionary Set Design</h3>
              
              <p className="text-gray-700 mb-4">
                The set design innovations of 2026 have redefined what's possible on the Broadway stage. "Echoes of Tomorrow" utilizes holographic projections that interact with physical set pieces, creating environments that shift and morph throughout the performance. The audience experiences everything from futuristic cities to alien landscapes with unprecedented realism.
              </p>
              
              <p className="text-gray-700 mb-4">
                Meanwhile, "Threads of Destiny" employs a modular approach where the entire set transforms three times during the show, representing different centuries with stunning accuracy and creativity. The attention to historical detail combined with modern theatrical techniques creates a truly immersive experience.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Exceptional Performances</h2>
              
              <p className="text-gray-700 mb-4">
                The acting talent on Broadway in 2026 has reached new heights, with performances that have left audiences breathless. Maria Rodriguez's portrayal of the lead character in "Echoes of Tomorrow" has been universally praised for its emotional depth and vocal prowess. Her ability to convey complex emotions while navigating the show's demanding technical requirements sets a new standard for sci-fi musical leads.
              </p>
              
              <p className="text-gray-700 mb-4">
                In "Threads of Destiny," the ensemble cast delivers a masterclass in storytelling, with each actor seamlessly transitioning between multiple characters across different time periods. The chemistry between the performers creates a cohesive narrative that spans generations.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Musical Excellence</h3>
              
              <p className="text-gray-700 mb-4">
                The musical compositions of 2026's productions have raised the bar for Broadway soundtracks. "Echoes of Tomorrow" features a score that blends orchestral arrangements with electronic elements, creating a soundscape that perfectly complements the futuristic setting. The orchestrations are rich and complex, supporting the narrative without overwhelming the vocals.
              </p>
              
              <p className="text-gray-700 mb-4">
                "Threads of Destiny" showcases a more traditional Broadway sound with modern twists, incorporating folk melodies from different historical periods into a cohesive musical language. The songs serve the story while standing as memorable pieces in their own right.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Innovative Choreography</h2>
              
              <p className="text-gray-700 mb-4">
                The choreographic achievements of 2026 have been equally impressive. "Echoes of Tomorrow" features gravity-defying sequences that seem to float performers in mid-air, thanks to innovative harness work and projection mapping. The dance sequences enhance the sci-fi elements while maintaining the emotional core of the story.
              </p>
              
              <p className="text-gray-700 mb-4">
                "Threads of Destiny" employs period-appropriate dances that evolve with each era, showcasing the changing social dynamics and cultural expressions of each time period. The choreography serves as a historical timeline, adding another layer to the storytelling.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Cultural Impact and Recognition</h2>
              
              <p className="text-gray-700 mb-4">
                These productions have not only entertained but also sparked important conversations about technology, history, and human connection. Both "Echoes of Tomorrow" and "Threads of Destiny" have received numerous Tony nominations and have been recognized for their contributions to advancing the art form of musical theatre.
              </p>
              
              <p className="text-gray-700 mb-4">
                Critics have noted that 2026 marks a turning point for Broadway, where traditional storytelling meets cutting-edge technology and innovative staging techniques. The success of these productions suggests a bright future for the Great White Way.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Practical Information for Theatergoers</h2>
              
              <p className="text-gray-700 mb-4">
                For those planning to experience these productions, booking tickets well in advance is essential. Premium seats for both shows sell out months ahead of time. However, both productions offer same-day lottery tickets and student rush programs for those looking to experience the shows at a more affordable price point.
              </p>
              
              <p className="text-gray-700 mb-4">
                The theaters hosting these productions have also upgraded their facilities to accommodate the technical demands of the shows. Enhanced sound systems and improved sightlines ensure that every seat provides an excellent viewing experience.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Looking Forward</h2>
              
              <p className="text-gray-700 mb-4">
                As we look ahead to the remainder of the 2026 season, the success of these productions sets a high bar for upcoming shows. The innovations introduced this year will likely influence Broadway productions for years to come, as other creators seek to match the artistic and technical achievements of these groundbreaking works.
              </p>
              
              <p className="text-gray-700 mb-4">
                For theater enthusiasts, 2026 represents a golden opportunity to witness Broadway at its most innovative and inspiring. Whether you're a longtime fan or a newcomer to the theater scene, these productions offer unforgettable experiences that showcase the very best of what live performance can achieve.
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