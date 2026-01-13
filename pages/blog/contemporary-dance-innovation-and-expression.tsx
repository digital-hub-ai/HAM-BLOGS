import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ContemporaryDanceInnovationAndExpression() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string | null}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is contemporary dance?",
      answer: "Contemporary dance is a style that emerged in the mid-20th century, combining elements of modern dance, ballet, and jazz. It emphasizes freedom of movement, emotional expression, and experimentation with form and technique."
    },
    {
      question: "How does contemporary dance differ from classical ballet?",
      answer: "Unlike ballet's codified positions and movements, contemporary dance allows for more freedom in body alignment and movement quality. It often uses floor work, gravity, and improvisation, while ballet emphasizes turnout, pointed feet, and aerial movement."
    },
    {
      question: "Who are some influential contemporary dance choreographers?",
      answer: "Important figures include Martha Graham (pioneer of modern dance), Merce Cunningham (known for chance procedures), Pina Bausch (founder of Tanztheater), and contemporary choreographers like William Forsythe, Alvin Ailey, and Crystal Pite."
    },
    {
      question: "What techniques are used in contemporary dance?",
      answer: "Contemporary dance incorporates techniques from various styles including Graham technique, Cunningham technique, release technique, and Limón technique. Dancers learn to use breath, weight, and momentum to create fluid, dynamic movement."
    },
    {
      question: "What themes do contemporary dance works typically explore?",
      answer: "Contemporary dance often explores personal, social, political, and emotional themes. Choreographers address issues like identity, relationships, human rights, environmental concerns, and abstract concepts through movement and visual design."
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "Which technique is associated with Martha Graham?",
      options: [
        "Release technique",
        "Graham technique",
        "Cunningham technique",
        "Limón technique"
      ],
      correctAnswer: "Graham technique"
    },
    {
      question: "What does contemporary dance emphasize that differs from classical ballet?",
      options: [
        "Strict adherence to codified positions",
        "Freedom of movement and emotional expression",
        "Pointe work and turnout",
        "Formal court dance traditions"
      ],
      correctAnswer: "Freedom of movement and emotional expression"
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
        <title>Contemporary Dance: Innovation and Artistic Expression | HAM-BLOGS</title>
        <meta name="description" content="How contemporary dance pushes boundaries and creates new forms of artistic expression and storytelling." />
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
              <span className="inline-block px-3 py-1 ml-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full">Contemporary</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contemporary Dance: Innovation and Artistic Expression</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">January 7, 2026</span>
              <span className="mr-4">•</span>
              <span>10 min read</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Contemporary dance represents one of the most dynamic and innovative art forms in the world today. Emerging from the rebellion against traditional ballet constraints in the early 20th century, it has evolved into a diverse and expressive medium that continues to push boundaries and challenge audiences. This exploration delves into the innovations that define contemporary dance and its role as a powerful form of artistic expression in the modern world.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Roots of Contemporary Dance</h2>
              
              <p className="text-gray-700 mb-4">
                Contemporary dance emerged from the modern dance movement of the early 1900s, when pioneers like Isadora Duncan, Ruth St. Denis, and Ted Shawn rejected the rigid structure of classical ballet. Duncan danced barefoot in flowing tunics, drawing inspiration from ancient Greek art and natural movement. This revolutionary approach laid the groundwork for what would become contemporary dance.
              </p>
              
              <p className="text-gray-700 mb-4">
                Martha Graham, often called the "mother of modern dance," developed a technique based on the concept of "contraction and release," using the breath and the natural rhythms of the body to generate movement. Her approach emphasized the expression of inner emotional states through physical gesture, establishing a foundation that continues to influence contemporary dance today.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Merce Cunningham and Postmodern Innovation</h3>
              
              <p className="text-gray-700 mb-4">
                Merce Cunningham revolutionized dance further by introducing chance procedures and separating dance from music. He believed that dance and music could exist independently while sharing the same time and space. His work challenged traditional notions of narrative and structure, influencing generations of choreographers to experiment with form and content.
              </p>
              
              <p className="text-gray-700 mb-4">
                Cunningham's collaboration with composer John Cage led to groundbreaking works that redefined the relationship between movement, sound, and space. His approach to choreography through chance operations opened new possibilities for how dance could be created and experienced.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Techniques and Training</h2>
              
              <p className="text-gray-700 mb-4">
                Contemporary dance training draws from multiple techniques, creating a diverse and comprehensive approach to movement education. The Graham technique focuses on the use of breath and the natural rhythms of the body, emphasizing contraction and release. The Cunningham technique emphasizes clarity of form and the use of the spine in movement.
              </p>
              
              <p className="text-gray-700 mb-4">
                The release technique, developed by practitioners like Joan Skinner, emphasizes the use of breath, momentum, and gravity to create efficient and expressive movement. This approach helps dancers find ease and flow in their dancing while maintaining technical precision.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Physical and Emotional Expression</h3>
              
              <p className="text-gray-700 mb-4">
                Contemporary dance places equal emphasis on physical technique and emotional expression. Dancers learn to use their bodies as instruments of communication, conveying complex ideas and feelings through movement. This dual focus requires a different kind of training than classical ballet, incorporating somatic practices, improvisation, and personal movement research.
              </p>
              
              <p className="text-gray-700 mb-4">
                The integration of floor work, contact improvisation, and partnering techniques expands the vocabulary of movement beyond the vertical orientation of classical dance. Contemporary dancers learn to move efficiently in all directions, using the floor as a resource for momentum and expression.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Choreographic Innovation</h2>
              
              <p className="text-gray-700 mb-4">
                Contemporary choreographers continue to push the boundaries of what dance can be and how it can communicate. William Forsythe revolutionized ballet by incorporating contemporary techniques and deconstructing classical movement, creating works that challenge dancers' technical and artistic abilities.
              </p>
              
              <p className="text-gray-700 mb-4">
                Pina Bausch developed Tanztheater (dance theater), blending dance, theater, and visual elements to create emotionally powerful works that address human relationships and social issues. Her approach influenced choreographers worldwide to consider how dance can address complex themes.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Technology and Contemporary Dance</h3>
              
              <p className="text-gray-700 mb-4">
                Contemporary dance has embraced technology in innovative ways, incorporating video projections, interactive lighting, and digital soundscapes into live performances. Choreographers like Wayne McGregor have collaborated with scientists to explore the relationship between movement and cognition, using motion capture technology to understand and develop new movement possibilities.
              </p>
              
              <p className="text-gray-700 mb-4">
                Social media and digital platforms have also changed how contemporary dance is created, shared, and experienced. Choreographers use video to develop and document their work, while audiences can access dance performances from around the world, broadening the reach and impact of the art form.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Cultural and Social Expression</h2>
              
              <p className="text-gray-700 mb-4">
                Contemporary dance has become a powerful vehicle for cultural expression and social commentary. Choreographers from diverse backgrounds bring their unique perspectives and traditions to the art form, enriching it with new movement vocabularies and thematic content.
              </p>
              
              <p className="text-gray-700 mb-4">
                Alvin Ailey's work celebrated African American cultural heritage while addressing universal themes of struggle, faith, and triumph. His company continues to commission new works that reflect the diversity of contemporary experience while maintaining technical excellence.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Global Contemporary Dance</h3>
              
              <p className="text-gray-700 mb-4">
                Contemporary dance has become a global art form, with choreographers and companies worldwide contributing to its evolution. In Europe, companies like Batsheva Dance Company (Israel) and Cullberg Ballet (Sweden) have developed distinctive approaches that blend contemporary technique with cultural specificity.
              </p>
              
              <p className="text-gray-700 mb-4">
                Asian contemporary dance has gained international recognition, with choreographers like Eiko Yamada (Japan) and Wen Hui (China) creating works that blend traditional movement forms with contemporary expression, offering new perspectives on the art form.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Collaboration and Interdisciplinary Work</h2>
              
              <p className="text-gray-700 mb-4">
                Contemporary dance frequently collaborates with other art forms, creating interdisciplinary works that challenge traditional boundaries. Choreographers work with visual artists, musicians, writers, and filmmakers to create multi-layered performances that engage audiences on multiple levels.
              </p>
              
              <p className="text-gray-700 mb-4">
                These collaborations often result in site-specific works that transform non-traditional spaces into performance venues, bringing dance to new audiences and contexts. The flexibility of contemporary dance technique makes it particularly suited to these innovative approaches.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Training and Education</h3>
              
              <p className="text-gray-700 mb-4">
                Contemporary dance education has evolved to include not only technical training but also choreographic development, somatic practices, and critical thinking about dance as an art form. Universities and conservatories now offer comprehensive programs that prepare dancers for diverse career paths in the field.
              </p>
              
              <p className="text-gray-700 mb-4">
                Many programs emphasize the dancer's role as an artist and creator, encouraging students to develop their own voices and perspectives. This approach prepares dancers to contribute to the continued evolution of the art form.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Future of Contemporary Dance</h2>
              
              <p className="text-gray-700 mb-4">
                As contemporary dance continues to evolve, it remains committed to innovation and artistic expression. New technologies, global perspectives, and social issues continue to influence the direction of the art form, ensuring its relevance and impact.
              </p>
              
              <p className="text-gray-700 mb-4">
                The accessibility of contemporary dance training and the diversity of voices contributing to the field promise continued growth and innovation. The art form's emphasis on individual expression and creative freedom ensures that it will continue to reflect the complexity and diversity of human experience.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h3>
              
              <p className="text-gray-700 mb-4">
                Contemporary dance stands as a testament to the power of artistic innovation and expression. By breaking free from traditional constraints while maintaining technical rigor, it has created a space for endless creativity and meaningful communication. As it continues to evolve, contemporary dance remains one of the most vital and relevant art forms of our time, offering audiences new ways to experience and understand the world through movement.
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