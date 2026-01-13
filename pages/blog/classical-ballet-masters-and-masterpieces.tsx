import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ClassicalBalletMastersAndMasterpieces() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string | null}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What defines classical ballet?",
      answer: "Classical ballet is characterized by precise, formalized steps and positions that originated in the Italian Renaissance courts of the 15th century and later developed into a concert dance form in France and Russia. It emphasizes grace, fluidity, and technical precision."
    },
    {
      question: "Who are some of the most influential classical ballet masters?",
      answer: "Some of the most influential ballet masters include Marius Petipa (known for Swan Lake, The Sleeping Beauty, and The Nutcracker), Michel Fokine (who reformed ballet in the early 1900s), George Balanchine (founder of neoclassical ballet), and Agrippina Vaganova (who developed the Vaganova method)."
    },
    {
      question: "What are the essential classical ballet positions?",
      answer: "There are five fundamental positions of the feet in classical ballet: first position (heels together, toes turned outward), second position (feet turned outward, separated by about one foot), third position (one foot placed in front of the other, heel of front foot touching toe of back foot), fourth position (one foot placed about one foot in front of the other, with space between), and fifth position (one foot placed directly in front of the other, heel of front foot touching toe of back foot)."
    },
    {
      question: "What are the most famous classical ballets?",
      answer: "The most famous classical ballets include Swan Lake, The Nutcracker, and The Sleeping Beauty by Pyotr Ilyich Tchaikovsky, as well as Giselle, Coppélia, La Sylphide, and Don Quixote. These works are regularly performed by major ballet companies worldwide."
    },
    {
      question: "How long does it take to become a professional ballet dancer?",
      answer: "Becoming a professional ballet dancer typically requires many years of intensive training starting at a young age, usually around 8-10 years old. It often takes 8-10 years of serious study to develop the technical skills necessary for a professional career. Professional dancers must maintain rigorous daily training throughout their careers."
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "Who composed the music for Swan Lake, The Nutcracker, and The Sleeping Beauty?",
      options: [
        "Johann Sebastian Bach",
        "Pyotr Ilyich Tchaikovsky",
        "Wolfgang Amadeus Mozart",
        "Ludwig van Beethoven"
      ],
      correctAnswer: "Pyotr Ilyich Tchaikovsky"
    },
    {
      question: "How many fundamental positions of the feet are there in classical ballet?",
      options: [
        "Three",
        "Four",
        "Five",
        "Six"
      ],
      correctAnswer: "Five"
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
        <title>Classical Ballet: Masters and Timeless Masterpieces | HAM-BLOGS</title>
        <meta name="description" content="Exploring the greatest ballets and choreographers who shaped the art form and continue to influence dancers worldwide." />
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
              <span className="inline-block px-3 py-1 text-sm font-semibold text-orange-700 bg-orange-100 rounded-full">Dance</span>
              <span className="inline-block px-3 py-1 ml-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full">Classical Ballet</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Classical Ballet: Masters and Timeless Masterpieces</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">January 8, 2026</span>
              <span className="mr-4">•</span>
              <span>11 min read</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Classical ballet stands as one of the most refined and technically demanding art forms in the world, with a rich history spanning centuries. From its origins in the Italian Renaissance courts to its flourishing in France and Russia, classical ballet has evolved into a sophisticated dance form that continues to captivate audiences worldwide. This exploration delves into the masters who shaped the art form and the timeless masterpieces that define classical ballet today.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Foundational Masters</h2>
              
              <p className="text-gray-700 mb-4">
                The development of classical ballet owes much to pioneering choreographers and teachers who established its fundamental techniques and aesthetics. Marius Petipa (1818-1910) stands as perhaps the most influential figure in classical ballet history. Born in Marseille, France, Petipa spent most of his career in St. Petersburg, Russia, where he created some of the most beloved ballets still performed today.
              </p>
              
              <p className="text-gray-700 mb-4">
                Petipa's collaborations with composer Pyotr Ilyich Tchaikovsky resulted in three of ballet's greatest masterpieces: Swan Lake (1877), The Sleeping Beauty (1890), and The Nutcracker (1892). These works established the template for classical ballet, combining narrative storytelling with spectacular dancing and orchestral music.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Imperial Russian Period</h3>
              
              <p className="text-gray-700 mb-4">
                The late 19th and early 20th centuries marked the golden age of classical ballet in Russia. The Imperial Ballet School (now the Vaganova Academy) trained dancers with an emphasis on technical precision and artistic expression. The Mariinsky Theatre in St. Petersburg became the epicenter of ballet innovation, presenting works that would become the cornerstone of the classical repertoire.
              </p>
              
              <p className="text-gray-700 mb-4">
                Michel Fokine (1880-1942) emerged as a reformer of ballet during this period, rejecting the excessive pantomime and focusing on creating more natural and expressive movement. His ballets, including Les Sylphides and Petrushka, emphasized the unity of music, dance, and visual design.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Timeless Masterpieces</h2>
              
              <p className="text-gray-700 mb-4">
                The classical ballet repertoire includes works that have stood the test of time, continuing to enchant audiences more than a century after their premieres. Tchaikovsky's ballets remain the most performed works in the classical repertoire, each offering unique artistic challenges and emotional depth.
              </p>
              
              <p className="text-gray-700 mb-4">
                Swan Lake, despite its initial lukewarm reception, has become ballet's most recognizable work. Its dual role of Odette (the White Swan) and Odile (the Black Swan) represents one of the greatest challenges for classical ballerinas, requiring both technical perfection and profound emotional expression.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Sleeping Beauty</h3>
              
              <p className="text-gray-700 mb-4">
                Often called the "encyclopedia of classical ballet," The Sleeping Beauty showcases the full range of classical technique. Petipa's choreography for this work demonstrates the pinnacle of classical ballet style, with its grand pas de deux, elaborate divertissements, and intricate ensemble work. The ballet's Rose Adagio is particularly famous for its demanding balances that test the strength and artistry of the ballerina.
              </p>
              
              <p className="text-gray-700 mb-4">
                The Nutcracker, while initially considered less significant than Tchaikovsky's other ballets, has become a beloved holiday tradition worldwide. Its charm lies in its fantasy elements, memorable music, and the opportunity it provides for dancers of all ages to participate in the magic of classical ballet.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The French School and Romantic Era</h2>
              
              <p className="text-gray-700 mb-4">
                Before the Russian dominance, French ballet contributed significantly to the classical tradition. The Romantic era of the 1830s and 1840s produced masterpieces like La Sylphide and Giselle, which emphasized ethereal, otherworldly qualities and technical lightness. These works established the pointe work technique that became synonymous with classical ballet.
              </p>
              
              <p className="text-gray-700 mb-4">
                Giselle, in particular, remains one of the most challenging roles in the classical repertoire, requiring a ballerina to excel in both the innocent joy of Act I and the ethereal spirituality of Act II. The ballet's dramatic demands, combined with its technical requirements, make it a true test of a dancer's abilities.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Spanish and Character Dance</h3>
              
              <p className="text-gray-700 mb-4">
                Classical ballet also incorporates character dance elements that represent various national styles. Spanish, Hungarian, Neapolitan, and other national dances are woven into classical ballets, adding cultural richness and technical variety. These character dances maintain the classical ballet aesthetic while incorporating folk elements and national characteristics.
              </p>
              
              <p className="text-gray-700 mb-4">
                Don Quixote, based on the Petipa choreography with additional work by Alexander Gorsky, showcases the Spanish character dance tradition within classical ballet. The ballet's vibrant energy and technical fireworks have made it a favorite among audiences and dancers alike.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Technical Mastery and Artistic Expression</h2>
              
              <p className="text-gray-700 mb-4">
                Classical ballet technique is built on principles of turnout, port de bras, épaulement, and precise placement that create the distinctive aesthetic of the art form. These principles, codified in the 18th and 19th centuries, continue to form the foundation of classical ballet training worldwide.
              </p>
              
              <p className="text-gray-700 mb-4">
                The five basic positions of the feet, established by Pierre Beauchamp in the 17th century, remain fundamental to all classical ballet training. These positions, along with the associated arm positions and movement principles, create the geometric precision that characterizes classical ballet.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Vaganova Method</h3>
              
              <p className="text-gray-700 mb-4">
                Agrippina Vaganova (1879-1951) revolutionized ballet pedagogy by creating a systematic approach that combined the best elements of the French, Italian, and Russian schools. The Vaganova method emphasizes gradual development, with students building technical skills while maintaining artistic expression.
              </p>
              
              <p className="text-gray-700 mb-4">
                This method has produced generations of exceptional dancers and remains one of the most influential approaches to ballet training worldwide. The Vaganova Academy continues to be a leading institution for classical ballet education.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Modern Interpretations of Classical Works</h2>
              
              <p className="text-gray-700 mb-4">
                Today's ballet companies continue to present classical masterpieces while also exploring new interpretations and stagings. Directors and choreographers find fresh approaches to these timeless works, making them relevant to contemporary audiences while respecting their classical foundations.
              </p>
              
              <p className="text-gray-700 mb-4">
                The Bolshoi Ballet, Mariinsky Ballet, Paris Opera Ballet, Royal Ballet, and New York City Ballet are among the companies that maintain classical ballet traditions while also commissioning new works. These institutions ensure that classical ballet continues to evolve while preserving its essential character.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Continuing Legacy</h3>
              
              <p className="text-gray-700 mb-4">
                Classical ballet continues to inspire new generations of dancers and audiences. The art form's emphasis on discipline, artistry, and technical excellence provides a foundation for all other dance forms. The masters of the past established principles and created works that remain relevant today, proving the timeless nature of classical ballet.
              </p>
              
              <p className="text-gray-700 mb-4">
                As classical ballet enters a new era, it maintains its essential character while adapting to contemporary tastes and cultural contexts. The legacy of the masters continues through the dedication of dancers, teachers, and choreographers who preserve and expand upon the classical tradition.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusion</h2>
              
              <p className="text-gray-700 mb-4">
                Classical ballet represents one of humanity's greatest artistic achievements, combining music, movement, and visual design in service of storytelling and emotional expression. The masters who shaped this art form created works that continue to inspire and move audiences worldwide. Through the dedication of countless dancers, teachers, and choreographers, classical ballet remains a living art form that connects us to centuries of artistic tradition while continuing to evolve and flourish.
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