import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function WorldDanceTraditionsAndCulturalSignificance() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string | null}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What role does dance play in different cultures?",
      answer: "Dance serves multiple functions across cultures: religious and spiritual expression, storytelling, community bonding, rites of passage, celebration, and cultural preservation. It often reflects a society's values, beliefs, and history."
    },
    {
      question: "How does traditional dance differ from folk dance?",
      answer: "Traditional dance often has religious, ceremonial, or historical significance and may be performed on specific occasions. Folk dance typically refers to dances of the common people, often performed at social gatherings and celebrations."
    },
    {
      question: "Why is it important to preserve traditional dances?",
      answer: "Preserving traditional dances maintains cultural identity, passes down historical knowledge, strengthens community bonds, and ensures that future generations can connect with their heritage. These dances often contain important cultural values and stories."
    },
    {
      question: "How do traditional dances reflect the geography of their regions?",
      answer: "Traditional dances often incorporate movements that reflect local activities like farming, fishing, or hunting. The rhythms may mirror natural sounds like rain, wind, or animal calls, and costumes often use locally available materials and colors significant to the culture."
    },
    {
      question: "How has globalization affected traditional dances?",
      answer: "Globalization has led to both the spread and potential dilution of traditional dances. While some dances have gained international recognition, others face the risk of being forgotten. However, many communities are actively working to preserve and adapt their dance traditions for contemporary contexts."
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "What is a primary function of traditional dance in many cultures?",
      options: [
        "To compete with other art forms",
        "To serve religious, ceremonial, and storytelling purposes",
        "To replace spoken language",
        "To entertain tourists exclusively"
      ],
      correctAnswer: "To serve religious, ceremonial, and storytelling purposes"
    },
    {
      question: "How do traditional dances often reflect their geographic regions?",
      options: [
        "Through the use of modern technology",
        "By incorporating movements related to local activities and natural elements",
        "By using only international music",
        "Through complex mathematical patterns"
      ],
      correctAnswer: "By incorporating movements related to local activities and natural elements"
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
        <title>World Dance: Cultural Traditions and Their Significance | HAM-BLOGS</title>
        <meta name="description" content="Discovering the rich diversity of dance traditions from around the world and their cultural importance." />
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
              <span className="inline-block px-3 py-1 ml-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full">World Cultures</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">World Dance: Cultural Traditions and Their Significance</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">January 6, 2026</span>
              <span className="mr-4">•</span>
              <span>12 min read</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Dance is a universal language that transcends borders and connects humanity through movement, rhythm, and expression. Across the globe, diverse cultures have developed unique dance traditions that serve as repositories of history, spirituality, and identity. From the ceremonial dances of indigenous peoples to the classical forms of ancient civilizations, world dance traditions offer profound insights into the human experience and the rich tapestry of cultural expression.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">African Dance Traditions</h2>
              
              <p className="text-gray-700 mb-4">
                African dance traditions form the foundation of many dance styles worldwide, emphasizing the connection between movement, music, and community. These dances often serve multiple purposes: storytelling, spiritual communication, celebration of life events, and the preservation of oral histories. The polyrhythmic structure of African dance, with its complex interplay of different rhythms, reflects the continent's diverse musical heritage.
              </p>
              
              <p className="text-gray-700 mb-4">
                In West Africa, traditional dances like the Djembe from Mali and the Adowa from Ghana incorporate intricate footwork, expressive gestures, and communal participation. These dances often involve the entire community, reinforcing social bonds and cultural values. The movements frequently imitate animals, natural phenomena, or daily activities, connecting dancers to their environment and heritage.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Asian Classical Dance Forms</h3>
              
              <p className="text-gray-700 mb-4">
                Asia boasts some of the world's most sophisticated and codified dance traditions, many of which have been preserved for centuries. Indian classical dance forms like Bharatanatyam, Kathak, and Odissi combine precise movements with complex narratives drawn from Hindu mythology. Each form has its own distinct technique, costume, and musical accompaniment, serving as a living repository of cultural and spiritual knowledge.
              </p>
              
              <p className="text-gray-700 mb-4">
                In East Asia, traditional dances like Chinese classical dance, Japanese Noh and Kabuki, and Korean folk dances emphasize different aspects of expression. Chinese classical dance integrates elements from martial arts, creating fluid yet powerful movements. Japanese Noh theater combines dance with dramatic storytelling, using masks and stylized movements to convey deep emotional states.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">European Folk and Traditional Dances</h2>
              
              <p className="text-gray-700 mb-4">
                European traditional dances reflect the continent's diverse cultural heritage and historical development. From the energetic Irish step dances to the romantic waltzes of Austria, these forms often originated in rural communities and were passed down through generations. Many European folk dances are closely associated with specific regions, festivals, or seasonal celebrations.
              </p>
              
              <p className="text-gray-700 mb-4">
                The Flamenco of Spain represents a unique fusion of Andalusian, Gypsy, and Moorish influences, characterized by passionate expression, intricate footwork, and guitar accompaniment. This dance form emerged from marginalized communities and evolved into one of the world's most recognized dance styles, embodying Spanish cultural identity.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Indigenous and Aboriginal Dance Traditions</h3>
              
              <p className="text-gray-700 mb-4">
                Indigenous and Aboriginal dance traditions worldwide serve as vital links to ancestral knowledge and spiritual beliefs. Native American powwow dances, Aboriginal corroborees in Australia, and Maori haka in New Zealand all carry deep cultural significance that extends far beyond entertainment.
              </p>
              
              <p className="text-gray-700 mb-4">
                The Maori haka, traditionally performed by warriors before battle, now serves multiple purposes including ceremonial functions, sports events, and cultural celebrations. Its powerful movements, rhythmic chanting, and fierce expressions communicate strength, unity, and cultural pride. Similarly, Native American dances often connect participants to the natural world and ancestral spirits.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Latin American Dance Heritage</h2>
              
              <p className="text-gray-700 mb-4">
                Latin American dance traditions represent a vibrant fusion of indigenous, European, and African influences. The Samba of Brazil, Tango of Argentina, and Salsa of the Caribbean all emerged from the cultural mixing that occurred during and after colonization. These dances reflect the complex social histories of their regions while providing outlets for cultural expression and identity.
              </p>
              
              <p className="text-gray-700 mb-4">
                The Samba, deeply connected to Brazilian Carnival celebrations, incorporates African rhythmic patterns with Portuguese influences, creating a dance that embodies the spirit of Brazilian culture. Similarly, the Tango, born in the working-class neighborhoods of Buenos Aires, evolved from a fusion of African, indigenous, and European elements into a sophisticated dance form recognized worldwide.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Preservation and Modern Adaptation</h3>
              
              <p className="text-gray-700 mb-4">
                The preservation of traditional dances faces challenges in our rapidly globalizing world. Many communities are actively working to document, teach, and adapt their dance traditions for contemporary contexts. Cultural institutions, universities, and dedicated practitioners play crucial roles in maintaining these art forms for future generations.
              </p>
              
              <p className="text-gray-700 mb-4">
                Modern adaptations of traditional dances often incorporate contemporary elements while maintaining core cultural meanings. This evolution ensures the continued relevance and vitality of these traditions, allowing them to speak to new generations while preserving their essential character.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Dance as Cultural Identity</h2>
              
              <p className="text-gray-700 mb-4">
                Traditional dances serve as powerful markers of cultural identity, providing communities with a sense of continuity and belonging. They often play crucial roles in rites of passage, seasonal celebrations, and community gatherings. Through dance, cultural values, stories, and social structures are transmitted from one generation to the next.
              </p>
              
              <p className="text-gray-700 mb-4">
                The movements, costumes, music, and contexts of traditional dances all carry symbolic meaning that reinforces cultural identity. For many communities, the preservation of dance traditions is inseparable from the preservation of language, customs, and spiritual beliefs.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Spiritual and Religious Significance</h3>
              
              <p className="text-gray-700 mb-4">
                Many traditional dances serve spiritual or religious functions, facilitating communication with the divine, honoring ancestors, or marking sacred times and spaces. The Whirling Dervishes of Turkey, the ritual dances of various Native American tribes, and the temple dances of India all exemplify the sacred dimensions of dance.
              </p>
              
              <p className="text-gray-700 mb-4">
                These sacred dances often require years of training and spiritual preparation. They are not merely performances but rather forms of worship, meditation, or spiritual practice that connect participants to transcendent realities.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Social and Community Functions</h2>
              
              <p className="text-gray-700 mb-4">
                Traditional dances often serve important social functions, reinforcing community bonds and social hierarchies. They provide opportunities for courtship, celebrate community achievements, and mark important transitions in individuals' lives. Many traditional dances are participatory, requiring the involvement of the entire community rather than performance by specialists.
              </p>
              
              <p className="text-gray-700 mb-4">
                The social nature of many traditional dances reflects the communal values of the cultures that created them. Dancing together strengthens social cohesion and provides shared experiences that bind communities together.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Economic and Tourism Impact</h3>
              
              <p className="text-gray-700 mb-4">
                Traditional dances have become important economic resources for many communities, particularly in the tourism industry. Cultural performances attract visitors interested in authentic experiences and contribute to local economies. However, this commercialization can sometimes lead to the simplification or misrepresentation of complex cultural traditions.
              </p>
              
              <p className="text-gray-700 mb-4">
                Communities must balance the economic benefits of sharing their dance traditions with the need to maintain their cultural integrity and significance. This challenge requires thoughtful approaches that respect the original purposes and meanings of traditional dances.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Contemporary Revitalization Efforts</h2>
              
              <p className="text-gray-700 mb-4">
                Around the world, cultural organizations, governments, and communities are implementing programs to revitalize and preserve traditional dance forms. These efforts include documentation projects, formal training programs, cultural festivals, and the integration of traditional dances into educational curricula.
              </p>
              
              <p className="text-gray-700 mb-4">
                International recognition, such as UNESCO's designation of certain dance traditions as Intangible Cultural Heritage, has also contributed to preservation efforts. These designations help raise awareness about the importance of traditional dances and provide resources for their continued practice.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h3>
              
              <p className="text-gray-700 mb-4">
                World dance traditions represent humanity's creative response to the fundamental need for expression, community, and connection. Each tradition carries within it the accumulated wisdom, values, and experiences of generations. As we move forward in an increasingly connected world, these dance traditions continue to evolve while maintaining their essential cultural significance, serving as bridges between past and future, local and global, sacred and secular.
              </p>
              
              <p className="text-gray-700 mb-4">
                Understanding and respecting the cultural significance of traditional dances enriches our appreciation of human diversity and the many ways in which communities express their identity, values, and aspirations through the universal language of movement.
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