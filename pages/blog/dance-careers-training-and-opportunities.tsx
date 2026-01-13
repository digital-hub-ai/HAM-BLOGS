import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function DanceCareersTrainingAndOpportunities() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string | null}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What are the main career paths in dance?",
      answer: "Dance offers diverse career opportunities including performing (with companies or as freelance artists), teaching (in studios, schools, or universities), choreographing, dance therapy, arts administration, dance criticism, and related fields like costume design or stage management. Each path requires specific training and skills."
    },
    {
      question: "How do dancers typically fund their careers?",
      answer: "Many dancers combine multiple income streams, including company contracts, freelance work, teaching, substitute teaching, and sometimes unrelated part-time jobs. Some receive grants or scholarships, and dancers in larger cities may have more opportunities for commercial work."
    },
    {
      question: "What kind of training is needed for a professional dance career?",
      answer: "Professional dancers typically begin training at a young age and continue with intensive training throughout their careers. Many pursue formal education through dance academies, university programs, or conservatories. Continuous training is essential to maintain technique and learn new styles."
    },
    {
      question: "What are the physical demands of a dance career?",
      answer: "Dance careers are physically demanding, requiring exceptional strength, flexibility, endurance, and coordination. Dancers must maintain peak physical condition and often deal with injuries. Career longevity often depends on injury prevention, proper conditioning, and knowing when to retire from performing."
    },
    {
      question: "How competitive is the dance profession?",
      answer: "The dance profession is extremely competitive, with many talented dancers vying for limited positions. Success often requires exceptional talent, dedication, persistence, networking skills, and sometimes luck. Dancers must be prepared for rejection and the need to constantly audition and market themselves."
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "What is a common way dancers fund their careers?",
      options: [
        "Only through company contracts",
        "Combining multiple income streams",
        "Through government subsidies",
        "With inheritance money"
      ],
      correctAnswer: "Combining multiple income streams"
    },
    {
      question: "How competitive is the dance profession?",
      options: [
        "Somewhat competitive",
        "Not competitive at all",
        "Extremely competitive",
        "Only competitive in ballet"
      ],
      correctAnswer: "Extremely competitive"
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
        <title>Dance Careers: Training and Professional Opportunities | HAM-BLOGS</title>
        <meta name="description" content="Understanding the path to a professional dance career and the diverse opportunities in the dance industry." />
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
              <span className="inline-block px-3 py-1 ml-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full">Careers</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Dance Careers: Training and Professional Opportunities</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">January 3, 2026</span>
              <span className="mr-4">•</span>
              <span>13 min read</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Pursuing a career in dance requires dedication, resilience, and a clear understanding of the industry's realities and opportunities. While the path to a professional dance career is challenging, it offers the opportunity to engage in one of humanity's most expressive and powerful art forms. This exploration examines the various career paths available in dance, the training required to succeed, and the professional opportunities that await dedicated dancers.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Performance Careers</h2>
              
              <p className="text-gray-700 mb-4">
                Performing remains the most visible aspect of professional dance. Dancers can join ballet companies, modern dance companies, musical theater productions, or work as freelance artists. Major companies like the New York City Ballet, American Ballet Theatre, Alvin Ailey American Dance Theater, and Hubbard Street Dance Chicago offer prestigious positions with stable contracts.
              </p>
              
              <p className="text-gray-700 mb-4">
                However, company positions are limited and highly competitive. Many professional dancers work freelance, moving from project to project. This path offers more variety and creative opportunities but less financial stability. Freelance dancers often work in music videos, commercials, live concerts, and smaller dance companies.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Training for Performance</h3>
              
              <p className="text-gray-700 mb-4">
                Professional dance training typically begins at a young age, with students attending ballet schools or dance academies. Many dancers pursue formal education at universities or conservatories that offer Bachelor of Fine Arts degrees in dance. These programs combine intensive studio training with academic coursework in dance history, kinesiology, and choreography.
              </p>
              
              <p className="text-gray-700 mb-4">
                Summer intensives at major companies provide additional training and networking opportunities. Many dancers continue taking classes throughout their careers to maintain technique and learn new styles. The training is physically and mentally demanding, requiring discipline and dedication.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Choreography and Creation</h2>
              
              <p className="text-gray-700 mb-4">
                Choreography offers another pathway for dance professionals to contribute to the art form. Many dancers begin creating small pieces while still performing, gradually building portfolios that can lead to commissions from companies or their own choreographic fellowships.
              </p>
              
              <p className="text-gray-700 mb-4">
                Successful choreographers often have backgrounds as performers but may also come from other dance-related fields. They must understand not only movement but also music, staging, lighting, and the business aspects of presenting work.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Teaching and Education</h3>
              
              <p className="text-gray-700 mb-4">
                Teaching represents one of the most stable career paths in dance. Dance educators work in studios, recreational centers, K-12 schools, colleges, and universities. Studio teachers may work part-time or full-time, depending on the size of the studio and class load.
              </p>
              
              <p className="text-gray-700 mb-4">
                University professors typically need advanced degrees in addition to professional experience. They combine teaching with research, service to the institution, and often continued performance or choreographic work. The academic route provides more job security but requires significant additional education.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Alternative Dance Careers</h2>
              
              <p className="text-gray-700 mb-4">
                The dance industry offers numerous alternative career paths for those with dance training. Dance therapists use movement to help clients achieve therapeutic goals, requiring specialized training in psychology and counseling. Dance critics and journalists write about dance performances and trends for publications or online platforms.
              </p>
              
              <p className="text-gray-700 mb-4">
                Arts administrators work for dance companies, venues, or funding organizations, handling everything from fundraising to marketing to programming. Some dancers transition into related fields like costume design, lighting design, or stage management.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Commercial Dance Opportunities</h3>
              
              <p className="text-gray-700 mb-4">
                Commercial dance includes work in music videos, television, film, live concerts, and corporate events. This sector often pays better than concert dance and may have less demanding training schedules, but it requires versatility in multiple dance styles.
              </p>
              
              <p className="text-gray-700 mb-4">
                Commercial dancers must often learn choreography quickly and adapt to different directors' visions. The work can be inconsistent, but successful commercial dancers can build lucrative careers with diverse opportunities.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Physical and Mental Demands</h2>
              
              <p className="text-gray-700 mb-4">
                Dance careers are physically demanding, with dancers facing constant pressure to maintain peak physical condition. The risk of injury is high, and dancers must learn to manage physical stress, recovery, and career longevity. Many dancers supplement their training with cross-training, physical therapy, and alternative healing modalities.
              </p>
              
              <p className="text-gray-700 mb-4">
                The mental demands are equally significant. Dancers must handle constant evaluation, rejection, and the pressure to perform consistently at a high level. Mental resilience and emotional intelligence are crucial for career sustainability.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Financial Realities</h3>
              
              <p className="text-gray-700 mb-4">
                Financial stability can be challenging in dance careers. Company dancers in major cities may earn livable wages, but many dancers supplement their income with teaching, other jobs, or spousal support. Freelance dancers often experience feast-or-famine cycles with inconsistent income.
              </p>
              
              <p className="text-gray-700 mb-4">
                Many dancers rely on grants, scholarships, and residencies to support their work. Financial planning is essential, with many dancers learning to budget carefully and save during peak earning periods.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Networking and Professional Development</h2>
              
              <p className="text-gray-700 mb-4">
                Success in dance careers often depends on networking and building professional relationships. Dancers attend classes taught by company members, participate in festivals, and maintain connections with former colleagues and teachers. Social media has become an important tool for dancers to showcase their work and connect with potential employers.
              </p>
              
              <p className="text-gray-700 mb-4">
                Professional development includes not only technical training but also building a professional brand, creating quality videos and photos, and developing business skills. Many dancers work with agents or managers as their careers advance.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Career Transitions</h3>
              
              <p className="text-gray-700 mb-4">
                Most performing dancers transition to other dance-related careers as they age or face injury. Some become teachers, choreographers, or arts administrators. Others transition to related fields like physical therapy, yoga instruction, or corporate fitness.
              </p>
              
              <p className="text-gray-700 mb-4">
                Planning for career transitions is important, with many dancers beginning to develop secondary skills while still performing. The discipline and creativity developed in dance training transfer well to many other fields.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Global Opportunities</h2>
              
              <p className="text-gray-700 mb-4">
                Dance careers can be international, with opportunities to work with companies in Europe, Asia, Australia, and other regions. International companies often offer different working conditions, pay scales, and artistic environments.
              </p>
              
              <p className="text-gray-700 mb-4">
                Cultural exchange programs, international festivals, and global dance networks provide opportunities for dancers to work abroad and broaden their artistic perspectives. However, international work requires flexibility with visa requirements and cultural adaptation.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Technology and Dance Careers</h3>
              
              <p className="text-gray-700 mb-4">
                Technology has created new opportunities for dance professionals. Online teaching platforms allow dancers to reach students worldwide. Social media platforms like Instagram and TikTok have launched careers for dancers who can create engaging content.
              </p>
              
              <p className="text-gray-700 mb-4">
                Virtual performances and motion capture technology are creating new artistic opportunities. Dancers with technical skills may find opportunities in video game animation, virtual reality, or digital performance.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Building a Sustainable Career</h2>
              
              <p className="text-gray-700 mb-4">
                Sustainability in dance careers requires diversification of skills and income streams. Successful dance professionals often combine performance, teaching, choreography, and other activities to create a viable career.
              </p>
              
              <p className="text-gray-700 mb-4">
                Maintaining physical and mental health, building a supportive network, and continuously developing skills are essential for longevity in dance careers. Many dancers find fulfillment not only in the artistic aspects of their work but also in the community and relationships they build.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Advice for Aspiring Dance Professionals</h3>
              
              <p className="text-gray-700 mb-4">
                Aspiring dance professionals should start training early but also maintain academic studies as backup options. Developing multiple skills, including teaching and choreography, increases career opportunities.
              </p>
              
              <p className="text-gray-700 mb-4">
                Building resilience, maintaining perspective, and understanding that success in dance requires time and persistence are important for long-term satisfaction. Working with mentors and seeking guidance from established professionals can provide valuable insights into the industry.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusion</h2>
              
              <p className="text-gray-700 mb-4">
                Dance careers offer the opportunity to engage in a powerful art form that connects people across cultures and generations. While the path is challenging and financially uncertain, many dancers find deep fulfillment in their work. Success in dance requires not only artistic talent but also business acumen, resilience, and adaptability. For those passionate about dance, the rewards of contributing to this ancient and evolving art form can be immeasurable.
              </p>
              
              <p className="text-gray-700 mb-4">
                Whether pursuing performance, teaching, choreography, or related fields, dance professionals play an essential role in preserving and evolving this vital art form for future generations.
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