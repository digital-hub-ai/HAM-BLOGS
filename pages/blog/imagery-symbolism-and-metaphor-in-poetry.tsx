import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ImagerySymbolismAndMetaphorInPoetry() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string | null}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is imagery in poetry?",
      answer: "Imagery refers to the use of vivid and descriptive language that appeals to the five senses (sight, sound, smell, taste, touch) to create mental pictures and sensory experiences for the reader."
    },
    {
      question: "What is the difference between metaphor and simile?",
      answer: "A metaphor directly states that one thing is another (e.g., 'Life is a journey'), while a simile compares two things using 'like' or 'as' (e.g., 'Life is like a river')."
    },
    {
      question: "What is symbolism in poetry?",
      answer: "Symbolism is the use of objects, characters, figures, or colors to represent abstract ideas or concepts beyond their literal meaning. Symbols add layers of meaning to poetry."
    },
    {
      question: "What are some common symbols in poetry?",
      answer: "Common symbols include light (hope, knowledge, purity), darkness (ignorance, evil, death), birds (freedom, transcendence), seasons (life cycles, change), and water (life, purification, renewal)."
    },
    {
      question: "How do poets create effective imagery?",
      answer: "Effective imagery uses specific, concrete details rather than abstract concepts, appeals to multiple senses, and selects details that support the poem's theme and mood."
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "What does imagery primarily appeal to?",
      options: [
        "Thoughts and ideas",
        "The five senses",
        "Emotions only",
        "Visual perception only"
      ],
      correctAnswer: "The five senses"
    },
    {
      question: "Which of the following is a metaphor?",
      options: [
        "Her smile was like sunshine",
        "Time is a thief",
        "As brave as a lion",
        "He runs like the wind"
      ],
      correctAnswer: "Time is a thief"
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
        <title>Imagery, Symbolism, and Metaphor in Poetry | HAM-BLOGS</title>
        <meta name="description" content="How poets use sensory details, symbols, and metaphors to create vivid mental images and convey deeper meanings." />
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
              <span className="inline-block px-3 py-1 text-sm font-semibold text-orange-700 bg-orange-100 rounded-full">Poetry</span>
              <span className="inline-block px-3 py-1 ml-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full">Literary Devices</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Imagery, Symbolism, and Metaphor in Poetry</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">January 7, 2026</span>
              <span className="mr-4">•</span>
              <span>10 min read</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Poetry is an art form that transforms language into vivid experiences, allowing readers to see, hear, feel, taste, and smell the world through the poet's imagination. The masterful use of imagery, symbolism, and metaphor creates layers of meaning that resonate deeply with readers, turning simple words into powerful emotional and intellectual experiences. These literary devices are the tools that allow poets to communicate complex ideas and feelings in ways that prose cannot achieve.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Power of Sensory Imagery</h2>
              
              <p className="text-gray-700 mb-4">
                Imagery in poetry refers to the use of vivid and descriptive language that appeals to the five senses, creating mental pictures and sensory experiences for the reader. Rather than simply stating facts, poets use imagery to immerse readers in the scene or emotion they are describing. Effective imagery goes beyond visual descriptions to encompass all the senses, creating a multi-layered experience that engages the reader's entire being.
              </p>
              
              <p className="text-gray-700 mb-4">
                Visual imagery is the most common form, describing colors, shapes, sizes, and movements. But the most evocative poetry also incorporates auditory imagery (sounds and silence), olfactory imagery (smells), gustatory imagery (tastes), and tactile imagery (textures and physical sensations). By engaging multiple senses, poets create a more complete and immersive experience.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Creating Effective Sensory Details</h3>
              
              <p className="text-gray-700 mb-4">
                The key to effective imagery lies in specificity. Instead of saying "the flower smelled nice," a poet might write "the jasmine released its honeyed perfume into the humid night air." Specific details create more vivid mental pictures and emotional responses than general descriptions.
              </p>
              
              <p className="text-gray-700 mb-4">
                Consider which senses are most relevant to your subject matter. A poem about a thunderstorm might focus on the sound of rain, the smell of petrichor, the sight of lightning, and the feel of electricity in the air. The choice of sensory details should support the poem's overall theme and mood.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Art of Metaphor and Simile</h2>
              
              <p className="text-gray-700 mb-4">
                Metaphors and similes are comparison tools that help readers understand one thing by relating it to another. A simile explicitly compares two things using "like" or "as," while a metaphor directly states that one thing is another. Both devices help clarify abstract concepts by relating them to concrete, familiar experiences.
              </p>
              
              <p className="text-gray-700 mb-4">
                Extended metaphors, also known as conceits, develop the comparison throughout an entire poem or section. These sustained comparisons can reveal deeper truths about the subject being described. The effectiveness of a metaphor depends on finding meaningful connections between seemingly disparate elements.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Types of Metaphors and Their Uses</h3>
              
              <p className="text-gray-700 mb-4">
                Dead metaphors are expressions that have become so common that their figurative nature is no longer recognized, such as "time flies." Fresh metaphors are original comparisons that surprise and illuminate. Mixed metaphors combine incompatible comparisons, often unintentionally creating humor or confusion.
              </p>
              
              <p className="text-gray-700 mb-4">
                Controlling metaphors dominate an entire poem, shaping how readers understand all other elements. Understanding these relationships helps readers appreciate how poets layer meaning and create unified artistic visions.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Symbolism: Layers of Meaning</h2>
              
              <p className="text-gray-700 mb-4">
                Symbolism in poetry involves using objects, characters, figures, or colors to represent abstract ideas or concepts beyond their literal meaning. Symbols add layers of meaning to poetry, allowing poets to communicate complex themes and emotions indirectly. Unlike metaphors, which make immediate comparisons, symbols accumulate meaning throughout a poem or across multiple works.
              </p>
              
              <p className="text-gray-700 mb-4">
                Universal symbols appear across cultures and time periods, such as light representing hope or knowledge, and darkness representing ignorance or evil. Cultural symbols are specific to particular societies or historical periods, while personal symbols are unique to individual poets and their body of work.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Common Symbolic Motifs</h3>
              
              <p className="text-gray-700 mb-4">
                Water often symbolizes life, purification, renewal, or the unconscious mind. Birds frequently represent freedom, transcendence, or the soul. Seasons symbolize life cycles, change, or stages of life. Colors carry symbolic weight: red for passion or danger, white for purity or death, black for mystery or evil.
              </p>
              
              <p className="text-gray-700 mb-4">
                Natural elements like trees, rivers, mountains, and storms often carry symbolic meaning related to growth, persistence, stability, or transformation. The key is understanding how the symbol functions within the specific context of the poem.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Interpreting Complex Symbolic Systems</h2>
              
              <p className="text-gray-700 mb-4">
                Some poems contain intricate symbolic systems where multiple symbols interact to create meaning. Understanding these systems requires close reading and attention to how symbols develop throughout the poem. Consider how the poet introduces, develops, and transforms symbols.
              </p>
              
              <p className="text-gray-700 mb-4">
                Symbols can have multiple meanings simultaneously, adding richness and complexity to the poem. A dove might represent peace, the Holy Spirit, and a messenger, all at once, depending on the context.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Relationship Between Literal and Figurative Meaning</h3>
              
              <p className="text-gray-700 mb-4">
                Effective poetry balances literal and figurative meaning. The surface level should make sense as a coherent experience, while deeper layers of meaning reward careful reading. The best poems work on multiple levels simultaneously.
              </p>
              
              <p className="text-gray-700 mb-4">
                Pay attention to how poets signal shifts between literal and figurative language. Context, tone, and other poetic elements often indicate when language should be interpreted figuratively.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Using Literary Devices to Enhance Theme</h2>
              
              <p className="text-gray-700 mb-4">
                The most effective poetry uses imagery, symbolism, and metaphor to enhance and reinforce its themes. The choice of specific images, symbols, and metaphors should support the poem's central message or emotional content.
              </p>
              
              <p className="text-gray-700 mb-4">
                Consider how the literary devices interact with other elements of the poem, such as meter, rhyme, and form. A poem about chaos might use irregular imagery and mixed metaphors, while a poem about peace might employ harmonious, consistent imagery.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Creating Original Imagery and Symbols</h3>
              
              <p className="text-gray-700 mb-4">
                When writing poetry, strive to create fresh, original imagery rather than relying on clichés. Draw from your own experiences and observations to find unique comparisons and sensory details.
              </p>
              
              <p className="text-gray-700 mb-4">
                Develop personal symbols that reflect your unique perspective and experiences. These personal symbols can become signature elements in your poetry, creating coherence across your body of work.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Analyzing Poetic Devices in Practice</h2>
              
              <p className="text-gray-700 mb-4">
                When reading poetry, identify the specific images, metaphors, and symbols the poet uses. Consider why the poet chose these particular elements and how they contribute to the overall meaning and effect of the poem.
              </p>
              
              <p className="text-gray-700 mb-4">
                Look for patterns and connections between different elements. How do the images work together to create a unified impression? How do the metaphors develop throughout the poem? How do symbols gain meaning through repetition or transformation?
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Role of Cultural Context</h3>
              
              <p className="text-gray-700 mb-4">
                Understanding the cultural and historical context of a poem can illuminate the meaning of symbols and metaphors that might otherwise be obscure. A symbol that was common in one era might be unfamiliar to modern readers.
              </p>
              
              <p className="text-gray-700 mb-4">
                Contemporary poets often subvert traditional symbols or create new meanings for familiar images, challenging readers' expectations and creating fresh insights.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Avoiding Common Pitfalls</h2>
              
              <p className="text-gray-700 mb-4">
                Avoid overusing literary devices to the point where they overwhelm the poem's meaning. The devices should serve the poem, not the other way around.
              </p>
              
              <p className="text-gray-700 mb-4">
                Be careful not to force symbols or metaphors where they don't belong naturally. Readers can sense when imagery feels contrived or artificial rather than organic to the poem.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Developing Your Sensitivity to Poetic Devices</h3>
              
              <p className="text-gray-700 mb-4">
                Read widely and pay attention to how different poets use imagery, symbolism, and metaphor. Notice which techniques are most effective and consider why they work.
              </p>
              
              <p className="text-gray-700 mb-4">
                Practice writing exercises that focus specifically on each device. Write a poem using only visual imagery, then try one rich in metaphor, then one that builds a symbolic system.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Emotional Impact of Literary Devices</h2>
              
              <p className="text-gray-700 mb-4">
                The most powerful poetry uses literary devices to create emotional responses in readers. Well-chosen images can evoke nostalgia, fear, joy, or melancholy. Effective metaphors can make abstract emotions concrete and understandable.
              </p>
              
              <p className="text-gray-700 mb-4">
                Consider how the sensory details in a poem make you feel. How do the metaphors shape your emotional response? How do symbols add depth to your understanding of the poem's themes?
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h3>
              
              <p className="text-gray-700 mb-4">
                Imagery, symbolism, and metaphor are essential tools in the poet's arsenal, allowing for the creation of rich, multi-layered works that engage readers on both intellectual and emotional levels. Understanding how these devices function enhances both the reading and writing of poetry, opening up new possibilities for expression and interpretation. Whether you're analyzing poetry or crafting your own verses, attention to these elements will deepen your engagement with this powerful art form.
              </p>
              
              <p className="text-gray-700 mb-4">
                Remember that the goal is not to simply use literary devices, but to use them effectively to serve the poem's meaning and emotional impact. The best poetry seamlessly integrates these elements to create unified artistic experiences.
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