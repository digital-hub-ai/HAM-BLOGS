import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PortraitPhotographyCapturingPersonalityAndEmotion() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string | null}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is the most important element in portrait photography?",
      answer: "The most important element is connecting with your subject to capture their personality and emotions authentically. Technical skills are important, but without genuine expression, a portrait lacks impact."
    },
    {
      question: "What are the best lenses for portrait photography?",
      answer: "Prime lenses with focal lengths of 85mm, 105mm, or 135mm are popular for portraits as they provide flattering perspective and natural compression. However, the choice depends on the style and space available."
    },
    {
      question: "How do you pose someone naturally?",
      answer: "Encourage natural movement and conversation rather than rigid poses. Give subjects simple directions that help them feel comfortable and guide them toward flattering angles."
    },
    {
      question: "What lighting is best for portraits?",
      answer: "Soft, diffused lighting is generally most flattering for portraits. This can be achieved with overcast skies, large softboxes, or window light filtered through a sheer curtain."
    },
    {
      question: "How do you make shy subjects feel comfortable?",
      answer: "Build rapport before shooting, provide positive feedback, give clear directions, and start with simple poses. Making conversation helps subjects relax and reveal their personality."
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "What is the most important element in portrait photography?",
      options: [
        "Expensive equipment",
        "Perfect lighting",
        "Connecting with your subject to capture their personality",
        "Complex backgrounds"
      ],
      correctAnswer: "Connecting with your subject to capture their personality"
    },
    {
      question: "Which lens focal length is most commonly recommended for flattering portraits?",
      options: [
        "24mm",
        "50mm",
        "85mm",
        "200mm"
      ],
      correctAnswer: "85mm"
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
        <title>Portrait Photography: Capturing Personality and Emotion | HAM-BLOGS</title>
        <meta name="description" content="Techniques and approaches for creating portraits that reveal the subject's personality and evoke genuine emotions." />
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
              <span className="inline-block px-3 py-1 text-sm font-semibold text-orange-700 bg-orange-100 rounded-full">Photography</span>
              <span className="inline-block px-3 py-1 ml-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full">Portraits</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Portrait Photography: Capturing Personality and Emotion</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">January 7, 2026</span>
              <span className="mr-4">•</span>
              <span>11 min read</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Portrait photography is more than just taking pictures of people—it's about revealing their essence, telling their story, and capturing fleeting moments of genuine emotion. A successful portrait goes beyond technical perfection to create a connection between the subject and viewer. This comprehensive guide explores the techniques, approaches, and mindset needed to create portraits that resonate with personality and emotion.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Foundation of Connection</h2>
              
              <p className="text-gray-700 mb-4">
                The most crucial aspect of portrait photography is establishing a genuine connection with your subject. This begins before you even pick up your camera. Take time to talk with your subject, learn about their interests, and make them feel comfortable. The more relaxed and connected they feel, the more authentic their expressions will be.
              </p>
              
              <p className="text-gray-700 mb-4">
                Building rapport helps break down barriers and allows natural expressions to emerge. Share a bit about yourself, ask questions about their life, and find common ground. This connection translates into more natural and compelling portraits.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Creating a Comfortable Environment</h3>
              
              <p className="text-gray-700 mb-4">
                The environment you create for your subject significantly impacts the quality of your portraits. Whether in a studio or on location, ensure the space feels welcoming and safe. Remove distractions and create an atmosphere where your subject can focus on being themselves.
              </p>
              
              <p className="text-gray-700 mb-4">
                For studio sessions, consider the temperature, seating comfort, and availability of refreshments. On location, scout the area beforehand and choose spots that complement your subject rather than compete with them for attention.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Technical Considerations for Flattering Portraits</h2>
              
              <p className="text-gray-700 mb-4">
                While connection is paramount, technical skills support your artistic vision. Understanding how different focal lengths affect facial features is crucial. Wide-angle lenses can distort features unflatteringly, while longer focal lengths (85mm and above) provide natural perspective and pleasing compression.
              </p>
              
              <p className="text-gray-700 mb-4">
                Depth of field is another important consideration. Shallow depth of field (wide aperture) can isolate your subject from distracting backgrounds, but be careful not to lose focus on the eyes, which should almost always be sharp in portraits.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Lighting for Emotional Impact</h3>
              
              <p className="text-gray-700 mb-4">
                Light is the primary tool for creating mood and highlighting facial features. Soft, diffused light generally flatters most subjects, while harder light can create dramatic effects when used intentionally. The direction of light also matters—front lighting tends to flatten features, while side lighting adds dimension and reveals texture.
              </p>
              
              <p className="text-gray-700 mb-4">
                Consider the quality of natural light when shooting outdoors. The golden hour provides warm, directional light that flatters skin tones, while overcast conditions offer even, diffused illumination that minimizes harsh shadows.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Posing and Direction</h2>
              
              <p className="text-gray-700 mb-4">
                Effective posing is about guiding your subject to look and feel their best, not forcing rigid positions. Start with simple, comfortable positions and build from there. Teach your subject how to turn their shoulders slightly toward the camera to create a more flattering angle.
              </p>
              
              <p className="text-gray-700 mb-4">
                Encourage movement and natural gestures rather than static poses. Have your subject interact with their environment—touch their hair, adjust their collar, or rest their chin on their hand. These actions create natural, candid moments.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Capturing Authentic Expressions</h3>
              
              <p className="text-gray-700 mb-4">
                The most powerful portraits capture authentic emotions rather than forced smiles. Engage your subject in conversation, tell jokes, or discuss meaningful topics to elicit genuine reactions. The key is to be ready to capture those unguarded moments.
              </p>
              
              <p className="text-gray-700 mb-4">
                Don't be afraid of untraditional expressions. Thoughtful looks, gentle smiles, or even contemplative expressions can be more compelling than standard posed smiles. Watch for micro-expressions that reveal personality.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Background and Context</h2>
              
              <p className="text-gray-700 mb-4">
                The background should support, not compete with, your subject. Simple backgrounds keep focus on the person, while meaningful environments can add context to their story. Consider the colors, textures, and patterns in your background carefully.
              </p>
              
              <p className="text-gray-700 mb-4">
                Use depth of field strategically to separate your subject from busy backgrounds. Sometimes a slightly blurred background (bokeh) can create a dreamy, intimate feeling that draws attention to the subject's face.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Working with Different Personalities</h3>
              
              <p className="text-gray-700 mb-4">
                Every subject is unique, and your approach should adapt accordingly. Outgoing personalities might thrive with playful, energetic directions, while more introverted subjects might prefer a calmer, more intimate approach.
              </p>
              
              <p className="text-gray-700 mb-4">
                Children require patience and playfulness, often working best when they're not directly focused on the camera. Elderly subjects might appreciate more time and gentler handling, with attention to lighting that flatters their features.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Storytelling Through Portraiture</h2>
              
              <p className="text-gray-700 mb-4">
                The best portraits tell a story about the subject. Consider what you want to convey about their personality, profession, or life. Props, clothing, and location can all contribute to the narrative.
              </p>
              
              <p className="text-gray-700 mb-4">
                Environmental portraits, which show the subject in their natural habitat, can reveal aspects of their character that formal studio portraits might miss. A chef photographed in their kitchen, a musician with their instrument, or a teacher in their classroom all tell stories beyond just physical appearance.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Post-Processing for Emotional Enhancement</h3>
              
              <p className="text-gray-700 mb-4">
                Post-processing should enhance the emotional impact of your portraits without looking artificial. Subtle adjustments to contrast, color, and sharpness can bring out the best in your images.
              </p>
              
              <p className="text-gray-700 mb-4">
                Skin retouching should be done carefully, preserving texture and character while removing temporary blemishes. Over-retouching can make subjects look unnatural and remove the authenticity you worked to capture.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Technical Equipment Choices</h2>
              
              <p className="text-gray-700 mb-4">
                While personality and connection are most important, equipment choices do affect the final image. Prime lenses often provide sharper images and wider apertures than zooms, allowing for better background separation and low-light performance.
              </p>
              
              <p className="text-gray-700 mb-4">
                Consider the practical aspects of your equipment as well. Heavy setups can make subjects uncomfortable, while portable equipment allows for more flexibility in location choices.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Working with Light Modifiers</h3>
              
              <p className="text-gray-700 mb-4">
                In studio settings, different light modifiers create various effects. Large softboxes create even, flattering light. Umbrellas provide quick, versatile lighting. Beauty dishes offer slightly more contrast while maintaining softness.
              </p>
              
              <p className="text-gray-700 mb-4">
                Reflectors and fill lights help balance exposure and reduce shadows. The key is to use these tools to enhance the subject's features, not mask them.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Building Trust and Confidence</h2>
              
              <p className="text-gray-700 mb-4">
                Building trust with your subject is essential for capturing vulnerable, authentic moments. Show them images during the session to build confidence and guide the session's direction.
              </p>
              
              <p className="text-gray-700 mb-4">
                Provide positive feedback and be honest about what's working. When subjects trust you, they're more likely to take creative risks and allow their true personality to shine through.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Handling Different Types of Portrait Sessions</h3>
              
              <p className="text-gray-700 mb-4">
                Different portrait types require different approaches. Corporate headshots focus on professionalism and clear identification. Family portraits emphasize connection and natural interactions. Editorial portraits often aim to tell a specific story or convey a particular mood.
              </p>
              
              <p className="text-gray-700 mb-4">
                Wedding portraits require sensitivity to cultural and personal expectations. Event portraits might need to be more candid and documentary in style.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Mistakes to Avoid</h2>
              
              <p className="text-gray-700 mb-4">
                Avoid placing the horizon line through the middle of your subject's head, which creates an awkward division. Be mindful of distracting elements in the background that might pull attention from your subject.
              </p>
              
              <p className="text-gray-700 mb-4">
                Don't rush the session. Allow time for subjects to warm up and for natural expressions to emerge. Avoid overly aggressive posing directions that make subjects feel uncomfortable.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h3>
              
              <p className="text-gray-700 mb-4">
                Portrait photography is ultimately about human connection and storytelling. The technical skills provide the foundation, but the emotional resonance comes from understanding your subject and creating an environment where their true personality can emerge. Practice building rapport, experimenting with different lighting conditions, and refining your ability to see and capture those fleeting moments of genuine expression.
              </p>
              
              <p className="text-gray-700 mb-4">
                Remember that each portrait session is unique, and the best results come from adapting your approach to each individual subject while maintaining your artistic vision.
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