import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function RegionalTheatreOutstandingProductionsCountrywide() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string | null}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is regional theatre?",
      answer: "Regional theatre refers to professional theaters located outside of New York City that produce their own shows. These theaters often feature both classical and contemporary works, and many are known for developing new plays and nurturing emerging artists."
    },
    {
      question: "Why is regional theatre important?",
      answer: "Regional theatre serves as a crucial training ground for actors, directors, and other theater professionals. It also brings high-quality theatrical experiences to communities across the country and often serves as the birthplace for new works that later appear on Broadway."
    },
    {
      question: "How does regional theatre differ from Broadway?",
      answer: "Regional theaters have more flexibility in their programming, often taking creative risks with experimental works or lesser-known plays. They also provide more opportunities for emerging artists and typically offer a more intimate experience than Broadway shows."
    },
    {
      question: "Can regional theatre productions transfer to Broadway?",
      answer: "Yes, many successful Broadway shows originated in regional theaters. The process of developing a show regionally before bringing it to Broadway allows for refinement and testing audience reactions."
    },
    {
      question: "How can I find regional theatre in my area?",
      answer: "You can search online for theaters in your region, check local event listings, or visit websites like the Theatre Communications Group, which lists member theaters across the United States."
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "What is the primary difference between regional theatre and Broadway?",
      options: [
        "Regional theatre has higher ticket prices",
        "Regional theatre has more flexibility in programming and takes creative risks",
        "Regional theatre only performs classical works",
        "Regional theatre has larger venues"
      ],
      correctAnswer: "Regional theatre has more flexibility in programming and takes creative risks"
    },
    {
      question: "What is a common role of regional theatre?",
      options: [
        "To only perform established hits",
        "To serve as a training ground for theater professionals and develop new works",
        "To compete directly with movies",
        "To focus exclusively on musicals"
      ],
      correctAnswer: "To serve as a training ground for theater professionals and develop new works"
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
        <title>Regional Theatre: Outstanding Productions Across the Country | HAM-BLOGS</title>
        <meta name="description" content="Showcasing exceptional theatrical productions happening in regional theaters across the United States." />
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
              <span className="inline-block px-3 py-1 ml-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full">Regional</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Regional Theatre: Outstanding Productions Across the Country</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">January 6, 2026</span>
              <span className="mr-4">•</span>
              <span>11 min read</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                While Broadway often captures the national spotlight, regional theaters across the United States continue to serve as vital creative laboratories, nurturing talent, developing new works, and providing exceptional theatrical experiences to communities far from New York. The 2026 season has showcased an impressive array of productions that demonstrate the continued vitality and innovation of America's regional theater scene.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The American Conservatory Theater's Innovation</h2>
              
              <p className="text-gray-700 mb-4">
                San Francisco's American Conservatory Theater (ACT) opened its 2026 season with a groundbreaking production of "The Tempest" that incorporated cutting-edge holographic technology. The spirit Ariel was realized through a stunning holographic projection that interacted seamlessly with live actors, creating an ethereal presence that captivated audiences and pushed the boundaries of classical interpretation.
              </p>
              
              <p className="text-gray-700 mb-4">
                The production also featured a diverse cast that reimagined the colonial themes of Shakespeare's play for contemporary audiences, earning critical acclaim for its thoughtful updating of the classic work while maintaining its emotional power.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Goodman Theatre's New Works</h3>
              
              <p className="text-gray-700 mb-4">
                Chicago's Goodman Theatre premiered "Crossing Lines," a powerful new drama exploring immigration and family separation. Written by emerging playwright Maria Santos, the production featured a minimalist set design that allowed the emotional performances to take center stage. The play's relevance to current social issues sparked important conversations in Chicago's diverse communities.
              </p>
              
              <p className="text-gray-700 mb-4">
                The Goodman's commitment to new works has made it a destination for theatergoers seeking contemporary stories that reflect current social realities, and "Crossing Lines" exemplifies this mission perfectly.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Arena Stage's Cultural Celebration</h2>
              
              <p className="text-gray-700 mb-4">
                Washington, D.C.'s Arena Stage presented "Voices of the Ancestors," a world premiere musical celebrating African American spirituals and their influence on contemporary music. The production featured a 30-piece orchestra incorporating traditional instruments and contemporary arrangements, creating a rich soundscape that honored the musical heritage while making it accessible to modern audiences.
              </p>
              
              <p className="text-gray-700 mb-4">
                The show's innovative staging used the Arena's unique thrust configuration to create intimate moments between performers and audience, making each performance feel like a shared cultural celebration.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Seattle Repertory's Environmental Production</h3>
              
              <p className="text-gray-700 mb-4">
                Seattle Repertory Theatre's production of "Rising Waters" took environmental theater to new heights by staging the climate change drama in a real greenhouse facility. Audience members moved through different sections of the facility as the play progressed, experiencing the changing environments described in the script firsthand.
              </p>
              
              <p className="text-gray-700 mb-4">
                This innovative approach created a visceral connection between the theatrical experience and the environmental themes, demonstrating regional theater's ability to take creative risks impossible in commercial venues.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Old Globe's Shakespearean Excellence</h2>
              
              <p className="text-gray-700 mb-4">
                San Diego's Old Globe Theatre presented a remarkable production of "King Lear" starring veteran actor James Morrison. The production was set in a post-apocalyptic world, with a stark set design that emphasized the play's themes of destruction and renewal. Morrison's portrayal of Lear was praised for its vulnerability and power, bringing new insights to one of Shakespeare's most challenging roles.
              </p>
              
              <p className="text-gray-700 mb-4">
                The production also featured innovative sound design that used the Globe's outdoor space to create an immersive audio experience, with sounds echoing from different directions to enhance the sense of a world in chaos.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Dallas Theater Center's Musical Innovation</h3>
              
              <p className="text-gray-700 mb-4">
                The Dallas Theater Center presented "Urban Rhythms," a new musical exploring the lives of young artists in a gentrifying neighborhood. The production featured an original score that blended hip-hop, jazz, and classical elements, reflecting the diverse musical influences in the story.
              </p>
              
              <p className="text-gray-700 mb-4">
                The staging used the theater's flexible space to create multiple performance areas, allowing the action to flow seamlessly between different locations and time periods, creating a dynamic theatrical experience.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Oregon Shakespeare Festival's Contemporary Relevance</h2>
              
              <p className="text-gray-700 mb-4">
                The Oregon Shakespeare Festival presented "The Constitution," a new play examining the document's ongoing relevance in contemporary America. The production featured actors from the festival's company portraying historical figures while also taking on contemporary roles, creating a dialogue between past and present.
              </p>
              
              <p className="text-gray-700 mb-4">
                The festival's unique approach allowed for multiple interpretations of the same historical figures, with different actors bringing their own perspectives to the roles throughout the season.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Guthrie Theater's Literary Adaptation</h3>
              
              <p className="text-gray-700 mb-4">
                Minneapolis's Guthrie Theater presented "The Seven Husbands of Evelyn Hugo," adapted from the popular novel. The production featured a rotating set that transformed to represent different time periods, following the glamorous Hollywood icon through her life and loves.
              </p>
              
              <p className="text-gray-700 mb-4">
                The adaptation was praised for maintaining the novel's emotional depth while creating a distinctly theatrical experience that showcased the talents of the Guthrie's acting company.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Role of Regional Theatre in the Industry</h2>
              
              <p className="text-gray-700 mb-4">
                Regional theaters serve as crucial training grounds for actors, directors, designers, and other theater professionals. Many performers who start their careers in regional theater go on to achieve success on Broadway and in film and television.
              </p>
              
              <p className="text-gray-700 mb-4">
                Additionally, regional theaters often serve as development venues for new works, allowing playwrights and composers to refine their pieces before they reach larger audiences. This process has led to many successful Broadway transfers, including recent hits like "Dear Evan Hansen" and "Come From Away."
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Economic and Cultural Impact</h3>
              
              <p className="text-gray-700 mb-4">
                Regional theaters contribute significantly to their local economies, generating millions in revenue and supporting numerous jobs. They also serve as cultural anchors for their communities, attracting visitors and contributing to the cultural identity of their regions.
              </p>
              
              <p className="text-gray-700 mb-4">
                Many regional theaters also offer educational programs, outreach initiatives, and community engagement activities that extend their impact beyond the theater itself.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Looking Forward</h2>
              
              <p className="text-gray-700 mb-4">
                The 2026 season has demonstrated the continued vitality and innovation of regional theater across the United States. As these theaters continue to take creative risks and develop new works, they remain essential to the health and evolution of American theater.
              </p>
              
              <p className="text-gray-700 mb-4">
                For theatergoers, regional productions offer unique experiences that often provide more intimate and thought-provoking encounters with the art form. Whether you're near one of these theaters or planning a visit, the exceptional productions happening across the country make regional theater a vital part of the American cultural landscape.
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