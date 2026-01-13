import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function HipHopDanceEvolutionAndCulturalImpact() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string | null}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "Where did hip-hop dance originate?",
      answer: "Hip-hop dance originated in the Bronx, New York City, during the early 1970s. It emerged alongside hip-hop music and culture in African American and Latino communities, particularly in the South Bronx where block parties and DJ events fostered the development of breakdancing, popping, locking, and other foundational styles."
    },
    {
      question: "What are the main elements of hip-hop dance?",
      answer: "The main elements include breaking (breakdancing), popping, locking, krumping, tutting, and freestyle. Each style has its own techniques, rhythms, and cultural significance, but all emphasize improvisation, personal expression, and connection to the music."
    },
    {
      question: "How has hip-hop dance influenced mainstream culture?",
      answer: "Hip-hop dance has profoundly influenced mainstream culture through music videos, commercials, movies, and television. It has become a global phenomenon taught in studios worldwide, featured in professional dance companies, and recognized as a legitimate art form in academic institutions."
    },
    {
      question: "What is the relationship between hip-hop dance and music?",
      answer: "Hip-hop dance and music are inseparably linked. Dancers respond to the beat, rhythm, and lyrics of hip-hop music, with movements often mimicking the sounds or expressing the message of the songs. The dance style evolved specifically to complement the musical style."
    },
    {
      question: "How has hip-hop dance evolved since its inception?",
      answer: "Since the 1970s, hip-hop dance has evolved from street corners to professional stages, incorporating influences from other dance forms while maintaining its core principles of improvisation and personal expression. New styles continue to emerge, and the art form has gained international recognition and respect."
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "In which decade did hip-hop dance originate?",
      options: [
        "1960s",
        "1970s",
        "1980s",
        "1990s"
      ],
      correctAnswer: "1970s"
    },
    {
      question: "Which area of New York City is credited as the birthplace of hip-hop dance?",
      options: [
        "Manhattan",
        "Brooklyn",
        "Queens",
        "The Bronx"
      ],
      correctAnswer: "The Bronx"
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
        <title>Hip-Hop Dance: Evolution and Cultural Impact | HAM-BLOGS</title>
        <meta name="description" content="Tracing the evolution of hip-hop dance from street culture to global phenomenon and its cultural significance." />
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
              <span className="inline-block px-3 py-1 ml-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full">Hip-Hop</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Hip-Hop Dance: Evolution and Cultural Impact</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">January 5, 2026</span>
              <span className="mr-4">•</span>
              <span>9 min read</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Hip-hop dance emerged from the streets of New York City in the early 1970s as an integral part of hip-hop culture, alongside rap music, DJing, and graffiti art. What began as a grassroots movement in the South Bronx has evolved into a global phenomenon that has profoundly impacted not only dance but also fashion, language, and popular culture worldwide. This exploration traces the evolution of hip-hop dance and examines its significant cultural impact.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Birth of Hip-Hop Dance</h2>
              
              <p className="text-gray-700 mb-4">
                Hip-hop dance was born in the economically disadvantaged South Bronx during the early 1970s, where African American and Latino youth created a vibrant culture as an alternative to gang violence and social neglect. DJ Kool Herc, Clive Campbell, is credited with hosting the party at 1520 Sedgwick Avenue in 1973 that is often cited as the birth of hip-hop culture, where he extended the instrumental breaks of funk records to give dancers more time to showcase their moves.
              </p>
              
              <p className="text-gray-700 mb-4">
                These early dancers, known as b-boys and b-girls (break-boys and break-girls), developed a style called breaking or breakdancing that featured athletic moves, spins, freezes, and improvisation. The dance style was directly connected to the music, with dancers responding to the breakbeats and instrumental sections that DJs extended.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Early Styles and Influences</h3>
              
              <p className="text-gray-700 mb-4">
                Breaking was not the only style to emerge from hip-hop's early days. Popping, developed on the West Coast by Boogaloo Sam and the Electric Boogaloos, involved contracting and relaxing muscles to create a jerking effect synchronized to the music. Locking, created by Don Campbell, featured sudden pauses and locked positions in the middle of fluid movements.
              </p>
              
              <p className="text-gray-700 mb-4">
                These early styles drew from various sources including African dance traditions, martial arts, and the social dances of the time. The emphasis on improvisation and personal style allowed dancers to develop their own signature moves while staying within the framework of the established techniques.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Golden Age of Hip-Hop Dance</h2>
              
              <p className="text-gray-700 mb-4">
                The 1980s marked the golden age of hip-hop dance, with the culture spreading beyond New York City to other parts of the United States and eventually to the world. Movies like "Flashdance" (1983) and "Breakin'" (1984) brought breaking to mainstream audiences, though they also began to change and commercialize the culture.
              </p>
              
              <p className="text-gray-700 mb-4">
                During this period, hip-hop dance crews formed and competed against each other in battles, fostering innovation and pushing dancers to develop new moves and combinations. Crews like Rock Steady Crew, New York City Breakers, and Double Dutch became legendary in the hip-hop community.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Commercialization and Mainstream Success</h3>
              
              <p className="text-gray-700 mb-4">
                As hip-hop music gained commercial success in the 1980s and 1990s, hip-hop dance followed. Music videos became an important platform for dancers to showcase their skills to wider audiences. Choreographers like Fatima Robinson, Laurieann Gibson, and Dave Scott brought hip-hop dance to the mainstream through their work with pop stars like Michael Jackson, Janet Jackson, Missy Elliott, and Beyoncé.
              </p>
              
              <p className="text-gray-700 mb-4">
                This commercialization brought hip-hop dance to global audiences but also raised concerns about cultural appropriation and the loss of the art form's original context and meaning. The tension between commercial success and cultural authenticity remains a significant discussion within the hip-hop community.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">New Styles and Evolution</h2>
              
              <p className="text-gray-700 mb-4">
                Hip-hop dance continued to evolve in the 2000s and beyond, with new styles emerging from different regions and communities. Krumping, which developed in South Central Los Angeles, featured explosive, athletic movements and served as an outlet for frustration and anger. Tutting, inspired by Egyptian hieroglyphs, involved creating geometric patterns with the arms and hands.
              </p>
              
              <p className="text-gray-700 mb-4">
                Social media platforms like YouTube, Instagram, and TikTok have accelerated the evolution of hip-hop dance, allowing new moves to spread rapidly around the world. Dancers can share their innovations instantly, leading to faster evolution and fusion of styles.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Global Impact and International Influence</h3>
              
              <p className="text-gray-700 mb-4">
                Hip-hop dance has become a truly global phenomenon, with vibrant communities in countries around the world. Each region has added its own flavor and cultural elements to the art form, creating unique variations while maintaining the core principles of hip-hop dance.
              </p>
              
              <p className="text-gray-700 mb-4">
                In South Korea, hip-hop dance has become a major part of the K-pop industry, with groups like BTS and BLACKPINK showcasing complex choreography that blends hip-hop with other dance styles. In France, the art form has deep roots dating back to the 1980s, with the country producing world-class breakers and choreographers.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Competitions and Professional Development</h2>
              
              <p className="text-gray-700 mb-4">
                Competitions have played a crucial role in the development and recognition of hip-hop dance. Events like the Battle of the Year, Juste Debout, and Red Bull BC One have elevated hip-hop dance to professional levels, offering substantial prize money and international recognition to top dancers.
              </p>
              
              <p className="text-gray-700 mb-4">
                The inclusion of breakdancing in the 2024 Paris Olympics as a demonstration sport and its official inclusion in the 2028 Los Angeles Olympics represents the ultimate validation of hip-hop dance as a legitimate sport and art form.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Hip-Hop Dance in Academic Settings</h3>
              
              <p className="text-gray-700 mb-4">
                Universities and colleges now offer courses in hip-hop dance, recognizing it as a legitimate art form worthy of academic study. Programs explore the cultural, historical, and technical aspects of hip-hop dance, ensuring that its roots and significance are preserved and understood.
              </p>
              
              <p className="text-gray-700 mb-4">
                These academic programs also provide pathways for dancers to earn degrees and credentials, legitimizing hip-hop dance as a career option and elevating the art form's status in the broader dance community.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Cultural Impact and Social Commentary</h2>
              
              <p className="text-gray-700 mb-4">
                Hip-hop dance has served as a powerful form of social commentary and resistance. Dancers use movement to address issues like racism, poverty, police brutality, and social inequality. The art form provides a voice for marginalized communities and a means of expressing experiences that might otherwise go unheard.
              </p>
              
              <p className="text-gray-700 mb-4">
                Many hip-hop dancers and choreographers create works that address social and political issues, using the art form's accessibility and popularity to spread important messages and promote change.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Influence on Fashion and Lifestyle</h3>
              
              <p className="text-gray-700 mb-4">
                Hip-hop dance has significantly influenced fashion and lifestyle choices. The baggy clothes, sneakers, caps, and jewelry worn by hip-hop dancers became mainstream fashion trends. The style of movement itself influenced fashion, with clothing designed to facilitate the dynamic movements of hip-hop dance.
              </p>
              
              <p className="text-gray-700 mb-4">
                The confidence and attitude expressed through hip-hop dance also influenced broader cultural attitudes, promoting self-expression, creativity, and individuality.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Challenges and Controversies</h2>
              
              <p className="text-gray-700 mb-4">
                Despite its global success, hip-hop dance faces ongoing challenges related to cultural appropriation, commercialization, and the preservation of its original meaning and context. Debates continue about who has the right to perform and teach hip-hop dance, and how to maintain respect for its origins.
              </p>
              
              <p className="text-gray-700 mb-4">
                The art form also struggles with the tension between innovation and tradition, as newer dancers may not understand or appreciate the cultural significance of the movements they perform.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Future of Hip-Hop Dance</h3>
              
              <p className="text-gray-700 mb-4">
                As hip-hop dance continues to evolve, it faces the challenge of balancing innovation with respect for its roots. The upcoming Olympic inclusion will undoubtedly bring new attention and possibly new pressures to standardize and formalize the art form.
              </p>
              
              <p className="text-gray-700 mb-4">
                The future of hip-hop dance lies in the hands of the current generation of dancers who must navigate the tension between commercial success and cultural authenticity while continuing to innovate and evolve the art form.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusion</h2>
              
              <p className="text-gray-700 mb-4">
                Hip-hop dance has come a long way from its humble beginnings in the South Bronx to become a global cultural force. Its evolution reflects broader changes in society, technology, and culture while maintaining its core principles of improvisation, personal expression, and connection to music. As it continues to grow and evolve, hip-hop dance remains a powerful form of artistic expression and cultural communication that connects people across racial, ethnic, and geographical boundaries.
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