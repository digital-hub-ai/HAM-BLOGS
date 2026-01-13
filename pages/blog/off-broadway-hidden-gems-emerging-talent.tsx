import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function OffBroadwayHiddenGemsEmergingTalent() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string | null}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is the difference between Broadway and Off-Broadway?",
      answer: "Broadway theaters have 500 or more seats and are located in the Times Square area, while Off-Broadway theaters have 100-499 seats and offer more experimental and intimate productions. Off-Broadway shows often feature emerging talent and innovative staging."
    },
    {
      question: "Why should I consider Off-Broadway shows?",
      answer: "Off-Broadway offers more intimate experiences, experimental productions, and often features emerging talent. These shows tend to take creative risks that larger Broadway productions cannot, leading to unique and memorable experiences."
    },
    {
      question: "Are Off-Broadway tickets cheaper than Broadway?",
      answer: "Generally, Off-Broadway tickets are more affordable than Broadway shows, though prices vary widely depending on the production, venue, and demand."
    },
    {
      question: "How do I discover Off-Broadway shows?",
      answer: "Check theater district publications, online reviews, and theater company websites. Many Off-Broadway theaters have subscription series that offer discounts and early access to shows."
    },
    {
      question: "What types of productions are typical of Off-Broadway?",
      answer: "Off-Broadway shows often include experimental works, intimate character studies, avant-garde productions, and new plays that take creative risks not possible in larger commercial venues."
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "How many seats does an Off-Broadway theater typically have?",
      options: [
        "Less than 100",
        "100-499",
        "500 or more",
        "Exactly 250"
      ],
      correctAnswer: "100-499"
    },
    {
      question: "What is a key advantage of Off-Broadway productions?",
      options: [
        "Larger audiences",
        "More commercial success",
        "Creative freedom and experimental staging",
        "Higher ticket prices"
      ],
      correctAnswer: "Creative freedom and experimental staging"
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
        <title>Off-Broadway Hidden Gems: Emerging Talent and Innovative Staging | HAM-BLOGS</title>
        <meta name="description" content="Exploring the creative freedom and experimental productions that make Off-Broadway a vital part of the theatrical scene." />
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
              <span className="inline-block px-3 py-1 ml-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full">Off-Broadway</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Off-Broadway Hidden Gems: Emerging Talent and Innovative Staging</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">January 7, 2026</span>
              <span className="mr-4">•</span>
              <span>9 min read</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                While Broadway captures headlines with its large-scale productions and star power, Off-Broadway continues to be the beating heart of theatrical innovation and artistic risk-taking. This season has produced a remarkable collection of productions that showcase emerging talent and push the boundaries of traditional staging. In this exploration of Off-Broadway's 2026 highlights, we'll discover the hidden gems that demonstrate why this sector of theater remains so vital to the art form.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Freedom of Intimate Venues</h2>
              
              <p className="text-gray-700 mb-4">
                Off-Broadway theaters, with their capacity of 100-499 seats, offer a level of intimacy impossible to achieve in larger venues. This closeness between performer and audience creates an immediacy that can be profoundly moving. This year's production of "Whispers in the Dark" at the 200-seat Black Box Theatre exemplifies this perfectly, with actors sometimes performing mere feet from audience members, creating an intensely personal theatrical experience.
              </p>
              
              <p className="text-gray-700 mb-4">
                The smaller scale also allows for more experimental staging concepts. "Fractured Mirror," presented at the Connelly Theater, utilized the entire space—including the aisles and balconies—creating a 360-degree theatrical environment that immersed the audience in the fractured psyche of the protagonist.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Emerging Talent Takes Center Stage</h3>
              
              <p className="text-gray-700 mb-4">
                Off-Broadway serves as a launching pad for many talented artists who would later find success on Broadway and in film. The 2026 season has been particularly notable for showcasing exceptional emerging talent. Sarah Chen's performance in "Quiet Storms" at the Atlantic Theater Company has garnered critical acclaim for her nuanced portrayal of a woman grappling with loss.
              </p>
              
              <p className="text-gray-700 mb-4">
                Similarly, director Marcus Williams has gained recognition for his innovative interpretation of "Urban Myths" at the Public Theater, where he seamlessly blended live performance with projected imagery to create a multi-layered narrative that challenged traditional theatrical conventions.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Experimental Production Values</h2>
              
              <p className="text-gray-700 mb-4">
                Without the pressure of recouping massive investments, Off-Broadway producers can take creative risks that lead to groundbreaking innovations. The production of "Digital Dreams" at the Signature Theatre incorporated virtual reality elements, allowing audience members to experience portions of the story from the character's perspective.
              </p>
              
              <p className="text-gray-700 mb-4">
                Another notable example is "The Last Page" at the Minetta Lane Theatre, where the entire production was performed in reverse chronological order, challenging audiences to reconsider narrative structure and character development in entirely new ways.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Supporting New Voices</h3>
              
              <p className="text-gray-700 mb-4">
                Off-Broadway has become increasingly important as a platform for underrepresented voices in theater. The 2026 season featured several productions by playwrights from diverse backgrounds, including "Crossroads" by indigenous playwright Jennifer Crow Feather, which explored themes of cultural identity and displacement with remarkable sensitivity and depth.
              </p>
              
              <p className="text-gray-700 mb-4">
                The Flea Theater's season included "Voices Unheard," a collaborative piece created by formerly incarcerated individuals, providing a platform for stories rarely told on stage and demonstrating theater's power to amplify marginalized voices.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Innovative Musical Approaches</h2>
              
              <p className="text-gray-700 mb-4">
                Off-Broadway musicals often experiment with unconventional scoring and performance styles. "Acoustic Hearts" at the York Theatre Company featured a cast of five who doubled as musicians, creating an intimate concert-like atmosphere that enhanced the personal nature of the story.
              </p>
              
              <p className="text-gray-700 mb-4">
                "The Underground Railroad" at the Pershing Square Signature Center incorporated traditional spirituals with contemporary compositions, creating a powerful musical language that honored historical authenticity while speaking to modern audiences.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Economic Reality</h2>
              
              <p className="text-gray-700 mb-4">
                While Off-Broadway shows operate with smaller budgets than their Broadway counterparts, this constraint often leads to more creative solutions. The set design for "Tiny Rooms" at the Barrow Street Theatre was constructed entirely from recycled materials, creating a visually striking environment that supported the environmental themes of the play.
              </p>
              
              <p className="text-gray-700 mb-4">
                These economic realities also mean that Off-Broadway tickets are often more accessible, allowing broader audiences to experience high-quality theatrical productions without the premium prices associated with Broadway hits.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Cross-Pollination with Broadway</h2>
              
              <p className="text-gray-700 mb-4">
                The relationship between Off-Broadway and Broadway is symbiotic, with successful Off-Broadway productions sometimes transferring to larger venues. The 2026 hit "Small Town Stories" began at the Roundabout Underground and, after critical acclaim, moved to Broadway's Circle in the Square Theatre.
              </p>
              
              <p className="text-gray-700 mb-4">
                This pipeline ensures that the experimental, risk-taking spirit of Off-Broadway influences mainstream theater, keeping the art form dynamic and relevant.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Looking Forward</h2>
              
              <p className="text-gray-700 mb-4">
                The 2026 Off-Broadway season demonstrates the continued vitality of this theatrical sector. As audiences seek more intimate and innovative experiences, Off-Broadway theaters are well-positioned to meet this demand with productions that take creative risks impossible in larger commercial venues.
              </p>
              
              <p className="text-gray-700 mb-4">
                For theatergoers interested in discovering the next wave of theatrical talent and innovation, Off-Broadway remains an essential destination. The hidden gems found in these smaller venues often provide the most memorable and transformative theatrical experiences.
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