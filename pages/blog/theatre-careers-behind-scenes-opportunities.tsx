import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function TheatreCareersBehindScenesOpportunities() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string | null}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What are the main career paths in theatre?",
      answer: "Theatre offers diverse career opportunities including acting, directing, stage management, set design, costume design, lighting design, sound design, technical direction, marketing, development, education, and administration. Each path requires specific skills and training."
    },
    {
      question: "Do I need a degree to work in theatre?",
      answer: "While a degree is not always required, many theatre professionals have formal training from universities, conservatories, or specialized programs. However, practical experience, portfolio development, and networking are equally important in the theatre industry."
    },
    {
      question: "How much do theatre professionals earn?",
      answer: "Salaries vary widely depending on the role, location, and level of experience. Many theatre professionals work freelance or part-time, with income fluctuating based on available projects. Equity actors in major markets earn minimums set by union agreements, but many supplement their income with other work."
    },
    {
      question: "What skills are important for theatre careers?",
      answer: "Essential skills include creativity, communication, collaboration, problem-solving, time management, and adaptability. Technical roles require specific skills like CAD software for set designers or programming for lighting designers. Business skills are also valuable for marketing and administrative roles."
    },
    {
      question: "How do I get started in a theatre career?",
      answer: "Start by gaining experience through community theater, school productions, internships, or volunteer work. Build a network of contacts in the industry, develop a portfolio or reel if applicable, and consider formal training to enhance your skills. Be prepared for a competitive field that requires persistence and flexibility."
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "Which of these is NOT a typical theatre career path?",
      options: [
        "Acting",
        "Set design",
        "Software engineering",
        "Stage management"
      ],
      correctAnswer: "Software engineering"
    },
    {
      question: "What is an important skill for most theatre careers?",
      options: [
        "Mathematical calculation",
        "Creativity and collaboration",
        "Investment management",
        "Legal knowledge"
      ],
      correctAnswer: "Creativity and collaboration"
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
        <title>Theatre Careers: Opportunities Behind the Scenes | HAM-BLOGS</title>
        <meta name="description" content="Exploring the diverse career opportunities in theatre beyond acting, from directing to production design." />
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
              <span className="inline-block px-3 py-1 ml-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full">Careers</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Theatre Careers: Opportunities Behind the Scenes</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">January 3, 2026</span>
              <span className="mr-4">•</span>
              <span>12 min read</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                While the spotlight often shines on performers, the world of theatre is supported by a vast network of talented professionals working behind the scenes to bring productions to life. From conception to curtain call, numerous specialists collaborate to create the magic of live theater. For those passionate about the arts but not necessarily drawn to performing, the theatre industry offers diverse and rewarding career opportunities that combine creativity with technical expertise.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Directing: The Visionary Leader</h2>
              
              <p className="text-gray-700 mb-4">
                Directors serve as the creative visionaries who guide the artistic interpretation of a play. They work closely with actors to develop characters, collaborate with designers to create the visual and auditory world of the production, and ensure that all elements align to serve the story. Directors must possess strong communication skills, deep knowledge of dramatic literature, and the ability to inspire and guide a diverse team.
              </p>
              
              <p className="text-gray-700 mb-4">
                Many directors start as actors or assistant directors, gradually building their portfolio and reputation. Some pursue formal training through university programs or directing internships at theaters. The role requires extensive preparation, including script analysis, casting decisions, and rehearsal planning.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Stage Management: The Production's Organizer</h3>
              
              <p className="text-gray-700 mb-4">
                Stage managers are the essential coordinators who ensure smooth operations throughout the production process. They maintain the rehearsal schedule, document blocking and technical cues, and serve as the primary communication link between the director, designers, and cast during both rehearsals and performances.
              </p>
              
              <p className="text-gray-700 mb-4">
                During performances, the stage manager runs the show from the stage manager's booth, calling all technical cues and managing any issues that arise. This role requires exceptional organizational skills, attention to detail, and the ability to remain calm under pressure.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Design Careers: Creating the Visual World</h2>
              
              <p className="text-gray-700 mb-4">
                Theatre designers include set designers, costume designers, lighting designers, and sound designers, each responsible for creating the visual and auditory environment of a production. These professionals work closely with directors to interpret the script and create designs that support the storytelling.
              </p>
              
              <p className="text-gray-700 mb-4">
                Set designers create the physical environment of the play, from detailed renderings to full-scale construction drawings. Costume designers research period details, create character-appropriate clothing, and ensure that costumes support the actors' movement and the production's aesthetic. Lighting designers craft the lighting plot that enhances mood, visibility, and dramatic moments. Sound designers create the audio landscape, including sound effects, musical underscoring, and microphone placement.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Technical Roles: The Mechanics of Magic</h3>
              
              <p className="text-gray-700 mb-4">
                Technical directors oversee the construction and implementation of the set design, managing the technical crew and ensuring that all elements are built safely and on schedule. They work with various materials and construction techniques to bring the designer's vision to life.
              </p>
              
              <p className="text-gray-700 mb-4">
                Carpenters, painters, electricians, and sound technicians form the backbone of the technical team. Each role requires specialized skills and knowledge of safety protocols. These professionals often work in scene shops or at theaters, creating the physical elements that make productions possible.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Production Management: The Business of Art</h2>
              
              <p className="text-gray-700 mb-4">
                Production managers handle the financial and logistical aspects of theatrical productions. They create budgets, schedule rehearsals and performances, coordinate with various departments, and ensure that productions stay on time and within budget. This role requires strong organizational skills, financial knowledge, and the ability to solve problems quickly.
              </p>
              
              <p className="text-gray-700 mb-4">
                General managers oversee the overall operations of a theater company, handling everything from season planning to fundraising to audience development. These positions combine artistic knowledge with business acumen.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Marketing and Development: Connecting Art with Audiences</h3>
              
              <p className="text-gray-700 mb-4">
                Marketing professionals in theater develop strategies to attract audiences, create promotional materials, manage social media, and coordinate advertising efforts. They work to build relationships with community members, subscribers, and potential new audience members.
              </p>
              
              <p className="text-gray-700 mb-4">
                Development professionals focus on fundraising, grant writing, and donor relations. They secure the financial resources necessary to produce shows and maintain theater operations. This role requires strong communication skills and knowledge of nonprofit management.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Education and Outreach: Expanding the Audience</h2>
              
              <p className="text-gray-700 mb-4">
                Many theaters employ education directors and teaching artists who develop programs to engage young people and community members with theater. These professionals create curriculum, lead workshops, and design educational programs that connect productions to classroom learning or community interests.
              </p>
              
              <p className="text-gray-700 mb-4">
                Teaching artists often work as freelancers, bringing theater skills and techniques to schools, community centers, and other venues. They may specialize in areas like drama therapy, youth theater, or accessibility programming.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Specialized Technical Roles</h3>
              
              <p className="text-gray-700 mb-4">
                As theater technology becomes more sophisticated, specialized roles have emerged. Projection designers and technicians work with digital media, creating video content and managing complex projection systems. Audio engineers ensure clear sound reinforcement and create immersive audio experiences.
              </p>
              
              <p className="text-gray-700 mb-4">
                Fight choreographers design and teach safe and effective stage combat. Intimacy coordinators ensure that romantic and physical scenes are performed safely and consensually. These specialized roles require additional training and certification.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Training and Education Pathways</h2>
              
              <p className="text-gray-700 mb-4">
                Many theatre professionals pursue formal education through university theater programs, conservatories, or specialized schools. These programs offer training in specific disciplines, networking opportunities, and practical experience. However, many successful theater professionals are self-taught or learn through apprenticeships and on-the-job training.
              </p>
              
              <p className="text-gray-700 mb-4">
                Internships and apprenticeships at theaters provide invaluable hands-on experience and connections in the industry. Many theaters offer programs specifically designed to train emerging professionals in various disciplines.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Professional Organizations and Networking</h3>
              
              <p className="text-gray-700 mb-4">
                Professional organizations like United States Institute for Theatre Technology (USITT), Stage Directors and Choreographers Society (SDC), and various design guilds offer resources, networking opportunities, and professional development for theatre professionals.
              </p>
              
              <p className="text-gray-700 mb-4">
                Networking is crucial in the theater industry, where many opportunities come through professional relationships and word-of-mouth recommendations. Attending industry events, workshops, and conferences can lead to job opportunities and professional growth.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Freelance Reality</h2>
              
              <p className="text-gray-700 mb-4">
                Many theater professionals work as freelancers, moving from project to project. This offers flexibility and variety but requires strong business skills, including marketing oneself, managing finances during downtime, and maintaining health insurance.
              </p>
              
              <p className="text-gray-700 mb-4">
                Building a diverse skill set can provide more opportunities and financial stability. Many professionals combine theater work with related fields like film, television, corporate events, or teaching.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Union Considerations</h3>
              
              <p className="text-gray-700 mb-4">
                Several unions represent theater professionals, including Actors' Equity Association (AEA), the stage managers' union (SDC), and various design guilds. Union membership provides benefits like minimum wage guarantees, health insurance, and pension plans, but also comes with rules and requirements.
              </p>
              
              <p className="text-gray-700 mb-4">
                Understanding union rules and eligibility requirements is important for career planning in professional theater.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Looking Forward: The Future of Theatre Careers</h2>
              
              <p className="text-gray-700 mb-4">
                As theater continues to evolve, new career opportunities emerge. Digital technology creates roles in virtual production, streaming, and interactive media. Environmental consciousness leads to sustainable production practices and new approaches to design and construction.
              </p>
              
              <p className="text-gray-700 mb-4">
                The theater industry also continues to focus on diversity, equity, and inclusion, creating opportunities for professionals from underrepresented backgrounds and new approaches to storytelling and audience engagement.
              </p>
              
              <p className="text-gray-700 mb-4">
                For those passionate about the collaborative art of theater, careers behind the scenes offer the opportunity to contribute to the creation of live performance while utilizing diverse skills and talents. Whether working with traditional techniques or cutting-edge technology, theater professionals play essential roles in bringing stories to life for audiences.
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