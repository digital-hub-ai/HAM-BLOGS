import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function BallroomDancingTechniqueAndCompetition() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string | null}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What are the main categories of ballroom dancing?",
      answer: "Ballroom dancing is divided into two main categories: International Standard (which includes Waltz, Tango, Viennese Waltz, Foxtrot, and Quickstep) and International Latin (which includes Cha-Cha, Samba, Rumba, Paso Doble, and Jive). There's also American Style, which has slightly different characteristics."
    },
    {
      question: "What is the difference between International and American Style ballroom?",
      answer: "International Style emphasizes closed position dancing with a focus on frame and connection between partners. American Style allows for more open position work, spins, and variations. International Style is danced in a counter-clockwise direction around the floor, while American Style has more freedom of movement."
    },
    {
      question: "How are ballroom competitions judged?",
      answer: "Competitions are judged on technique, musicality, choreography, presentation, and overall performance. Judges evaluate how well the couple executes the required elements of each dance, their connection, timing, and artistic interpretation of the music."
    },
    {
      question: "What are the essential elements of good ballroom technique?",
      answer: "Essential elements include proper posture, frame, connection between partners, lead and follow skills, musicality, footwork, and the ability to move smoothly around the dance floor. Good technique also involves understanding the specific characteristics of each dance."
    },
    {
      question: "How long does it take to become proficient in ballroom dancing?",
      answer: "The time varies greatly depending on natural ability, practice frequency, and instruction quality. Basic social dancing can be learned in a few months, but competitive-level dancing typically requires years of dedicated training. Professional-level proficiency often takes 5-10 years of intensive study."
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "Which of the following is NOT part of the International Latin dances?",
      options: [
        "Cha-Cha",
        "Samba",
        "Waltz",
        "Rumba"
      ],
      correctAnswer: "Waltz"
    },
    {
      question: "What is the main difference between International and American Style ballroom dancing?",
      options: [
        "International Style has more spins",
        "American Style allows for more open position work",
        "International Style is slower",
        "American Style uses different music"
      ],
      correctAnswer: "American Style allows for more open position work"
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
        <title>Ballroom Dancing: Technique and Competition Insights | HAM-BLOGS</title>
        <meta name="description" content="Exploring the art and technique of ballroom dancing and the world of competitive dance sport." />
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
              <span className="inline-block px-3 py-1 ml-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full">Ballroom</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Ballroom Dancing: Technique and Competition Insights</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">January 4, 2026</span>
              <span className="mr-4">•</span>
              <span>10 min read</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Ballroom dancing represents one of the most elegant and technically demanding forms of partnered dance, combining athletic skill with artistic expression. From its origins in European social dance traditions to its evolution into a competitive sport, ballroom dancing has captivated audiences worldwide with its grace, precision, and romantic appeal. This exploration delves into the essential techniques that define ballroom dancing and provides insights into the competitive world of dance sport.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Foundation of Ballroom Technique</h2>
              
              <p className="text-gray-700 mb-4">
                Ballroom dancing requires a solid foundation of fundamental techniques that enable couples to move together gracefully and in harmony. The core elements include proper posture, frame, and connection between partners. Dancers must maintain an upright stance with engaged core muscles, allowing for both stability and freedom of movement.
              </p>
              
              <p className="text-gray-700 mb-4">
                The frame, created through the arms and upper body, provides the connection between leader and follower. In International Style, this frame remains relatively constant, while American Style allows for more variation. The quality of the frame affects every aspect of the dance, from basic steps to complex figures.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Posture and Body Alignment</h3>
              
              <p className="text-gray-700 mb-4">
                Proper posture in ballroom dancing involves lifting through the crown of the head while maintaining a neutral spine. The shoulders should be relaxed and slightly back, with the chest lifted but not rigid. This posture allows for optimal breathing and creates the elegant line that is characteristic of ballroom dancing.
              </p>
              
              <p className="text-gray-700 mb-4">
                The lower body alignment is equally important, with weight properly distributed and the knees slightly softened. This allows for smooth weight transfers and controlled movement across the dance floor.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Two Main Ballroom Categories</h2>
              
              <p className="text-gray-700 mb-4">
                Ballroom dancing is primarily divided into two categories: International Standard and International Latin. The Standard dances (Waltz, Tango, Viennese Waltz, Foxtrot, and Quickstep) are characterized by smooth, flowing movements and a more formal presentation. These dances emphasize rise and fall, sway, and elegant traveling movements across the floor.
              </p>
              
              <p className="text-gray-700 mb-4">
                Latin dances (Cha-Cha, Samba, Rumba, Paso Doble, and Jive) feature more rhythmic, percussive movements with hip action and distinctive Cuban motion. These dances often have a more playful or dramatic character compared to the Standard dances.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Individual Dance Characteristics</h3>
              
              <p className="text-gray-700 mb-4">
                Each ballroom dance has its own unique characteristics and technical requirements. The Waltz, with its 3/4 time signature, emphasizes smooth rise and fall with a distinctive long-short-short rhythm. The Tango is characterized by its staccato nature, dramatic poses, and distinctive walking steps.
              </p>
              
              <p className="text-gray-700 mb-4">
                The Viennese Waltz, danced at a much faster tempo, requires strong technique to maintain the continuous turning movements. The Foxtrot flows smoothly with its characteristic slow-quick-quick rhythm, while the Quickstep adds playful hops and skips to the foxtrot base.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Lead and Follow Skills</h2>
              
              <p className="text-gray-700 mb-4">
                The connection between leader and follower is the essence of ballroom dancing. Leaders must clearly communicate their intentions through their body and frame, while followers must be receptive and responsive to these signals. This communication happens through subtle changes in pressure, body position, and timing.
              </p>
              
              <p className="text-gray-700 mb-4">
                Effective leading involves not just indicating the next step, but also conveying the character, timing, and emotion of the dance. Followers must maintain their own balance and frame while responding to the leader's suggestions.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Footwork and Floor Craft</h3>
              
              <p className="text-gray-700 mb-4">
                Precise footwork is essential in ballroom dancing, with specific techniques for different parts of the foot (ball, heel, flat) and different actions (rise, fall, swivel). Each dance has specific footwork requirements that contribute to its character and technical demands.
              </p>
              
              <p className="text-gray-700 mb-4">
                Floor craft refers to the ability to navigate the dance floor safely and courteously. Dancers must move in a counter-clockwise direction while maintaining spacing and avoiding collisions. Good floor craft is essential for both social and competitive dancing.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Competition Structure and Categories</h2>
              
              <p className="text-gray-700 mb-4">
                Competitive ballroom dancing is organized into various categories based on skill level, age, and type of competition. Syllabus competitions require dancers to perform only the figures approved for their level, while open competitions allow for any choreographed routine within the dance style.
              </p>
              
              <p className="text-gray-700 mb-4">
                Levels typically progress from Bronze to Silver to Gold, with each level introducing more complex figures and techniques. Championship levels are reserved for the most advanced dancers who have mastered the fundamentals and can demonstrate superior artistry and technique.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Judging Criteria and Scoring</h3>
              
              <p className="text-gray-700 mb-4">
                Ballroom competitions are judged using the "majority judging" system, where judges vote on each couple's placement in each round. The couple with the lowest total points wins the round. Judges evaluate technique, choreography, musicality, presentation, and overall performance.
              </p>
              
              <p className="text-gray-700 mb-4">
                Technique includes proper frame, posture, footwork, and execution of figures. Musicality refers to how well the dancers interpret and respond to the music. Presentation encompasses the dancers' appearance, expression, and performance quality.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Training and Preparation</h2>
              
              <p className="text-gray-700 mb-4">
                Successful ballroom dancers typically train with qualified instructors and practice regularly. Private lessons focus on technique and choreography, while group classes provide opportunities to practice with different partners and learn competition strategies.
              </p>
              
              <p className="text-gray-700 mb-4">
                Physical conditioning is important for ballroom dancers, as the sport requires strength, flexibility, endurance, and coordination. Many competitive dancers supplement their dance training with fitness routines, Pilates, or yoga.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Competitive Experience</h3>
              
              <p className="text-gray-700 mb-4">
                Competition weekends typically involve multiple rounds of dancing, with couples advancing based on their placements. Dancers often compete in multiple categories and dances, requiring stamina and versatility.
              </p>
              
              <p className="text-gray-700 mb-4">
                The competitive environment provides motivation for improvement and opportunities to test skills against other dancers. However, it also requires emotional resilience, as competition results can be subjective and unpredictable.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Professional vs. Amateur Competition</h2>
              
              <p className="text-gray-700 mb-4">
                Amateur competitions are for dancers who do not earn their primary income from teaching dance. Professional competitions are for instructors and performers who make their living in the dance industry. Professional dancers often perform more complex choreography and have greater freedom in their presentations.
              </p>
              
              <p className="text-gray-700 mb-4">
                World championships exist for both amateur and professional categories, with dancers qualifying through regional and national competitions.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Costumes and Presentation</h3>
              
              <p className="text-gray-700 mb-4">
                Costumes play an important role in ballroom competitions, with specific requirements for each level and category. In Standard dances, ladies wear flowing dresses that move with the dance, while men wear tailcoats or dinner jackets. Latin costumes are more form-fitting and colorful, allowing for freedom of movement while highlighting the dancers' physique.
              </p>
              
              <p className="text-gray-700 mb-4">
                Hair, makeup, and styling are also important aspects of competition presentation, with many dancers working with professionals to achieve the polished look expected in competition.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Benefits Beyond Competition</h2>
              
              <p className="text-gray-700 mb-4">
                Even dancers who do not compete enjoy numerous benefits from ballroom dancing, including improved physical fitness, enhanced coordination, increased confidence, and opportunities for social interaction. The skills learned in ballroom dancing transfer to many other areas of life.
              </p>
              
              <p className="text-gray-700 mb-4">
                The discipline required for ballroom dancing also develops qualities like perseverance, attention to detail, and the ability to work collaboratively with others.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Global Ballroom Community</h3>
              
              <p className="text-gray-700 mb-4">
                Ballroom dancing has a strong international community, with competitions and workshops held worldwide. The World Dance Council (WDC) and World DanceSport Federation (WDSF) govern international competition, organizing world championships and setting standards for the sport.
              </p>
              
              <p className="text-gray-700 mb-4">
                This global community provides opportunities for cultural exchange and friendship, as dancers from different countries come together to share their passion for the art form.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusion</h2>
              
              <p className="text-gray-700 mb-4">
                Ballroom dancing represents a unique combination of athletic skill, artistic expression, and social interaction. Whether pursued for competition, social enjoyment, or personal enrichment, it offers a lifetime of learning and growth. The technical mastery required for excellence in ballroom dancing reflects the dedication and artistry that make it one of the most respected and admired dance forms in the world.
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