import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function StreetPhotographyCandidMomentsUrbanLife() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string | null}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is the key to successful street photography?",
      answer: "The key is to observe and anticipate decisive moments while remaining unobtrusive. Patience, awareness of your surroundings, and the ability to react quickly are essential skills."
    },
    {
      question: "What equipment is best for street photography?",
      answer: "Compact, discrete cameras work best. Many street photographers prefer mirrorless cameras or even smartphones. A 35mm or 50mm prime lens is ideal for capturing natural perspectives."
    },
    {
      question: "How do I handle legal concerns in street photography?",
      answer: "In public spaces, you generally have the right to photograph. However, be aware of local laws, respect privacy, and avoid photographing in sensitive areas like military installations."
    },
    {
      question: "How do I approach people for portraits on the street?",
      answer: "Be respectful, explain your intentions, and ask for permission. Approach with a smile, be genuine, and respect if they decline. Building rapport is key."
    },
    {
      question: "What is the 'decisive moment' in street photography?",
      answer: "Coined by Henri Cartier-Bresson, the decisive moment is the instant when all elements in the frame align perfectly to create a compelling image that tells a story."
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "Who coined the term 'decisive moment' in photography?",
      options: [
        "Ansel Adams",
        "Henri Cartier-Bresson",
        "Diane Arbus",
        "Robert Capa"
      ],
      correctAnswer: "Henri Cartier-Bresson"
    },
    {
      question: "What focal length is most commonly recommended for street photography?",
      options: [
        "24mm",
        "35mm or 50mm",
        "85mm",
        "200mm"
      ],
      correctAnswer: "35mm or 50mm"
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
        <title>Street Photography: Capturing Candid Moments of Urban Life | HAM-BLOGS</title>
        <meta name="description" content="The art of documenting everyday life and spontaneous moments in urban environments with sensitivity and skill." />
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
              <span className="inline-block px-3 py-1 ml-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full">Street Photography</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Street Photography: Capturing Candid Moments of Urban Life</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">January 5, 2026</span>
              <span className="mr-4">•</span>
              <span>10 min read</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Street photography is the art of capturing unposed, spontaneous moments of everyday life in public spaces. It documents the human condition, social interactions, and the rhythm of urban life. From bustling markets to quiet corners, street photographers create visual narratives that reflect society as it truly is. This comprehensive guide explores the techniques, ethics, and approaches needed to excel in this compelling genre.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Understanding the Art of Observation</h2>
              
              <p className="text-gray-700 mb-4">
                Street photography begins with developing keen observation skills. Learn to anticipate moments before they happen by watching body language, facial expressions, and environmental cues. The best street photographers become adept at predicting where interesting interactions might occur.
              </p>
              
              <p className="text-gray-700 mb-4">
                Practice scanning your environment constantly, looking for patterns, contrasts, and juxtapositions. Notice how light and shadow interact with architecture, how people move through spaces, and how unexpected elements come together to create compelling compositions.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Decisive Moment Concept</h3>
              
              <p className="text-gray-700 mb-4">
                Henri Cartier-Bresson coined the term "decisive moment" to describe the instant when all visual elements align perfectly to create a meaningful photograph. This concept remains central to street photography today.
              </p>
              
              <p className="text-gray-700 mb-4">
                The decisive moment isn't just about technical precision—it's about capturing the peak of an action or interaction that tells a story. It requires patience, anticipation, and the ability to react instantly when the moment arrives.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Choosing the Right Equipment</h2>
              
              <p className="text-gray-700 mb-4">
                Discretion is crucial in street photography. Bulky equipment can draw unwanted attention and make subjects self-conscious. Compact mirrorless cameras or even high-quality smartphones are often preferable to large DSLRs.
              </p>
              
              <p className="text-gray-700 mb-4">
                Prime lenses in the 35mm or 50mm range provide natural perspectives that match human vision. These focal lengths allow you to get close to your subjects while maintaining context, essential for storytelling in street photography.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Camera Settings for Spontaneous Shooting</h3>
              
              <p className="text-gray-700 mb-4">
                Street photography requires quick reflexes, so manual or semi-automatic modes are preferable. Aperture priority (A/Av mode) allows you to control depth of field while the camera adjusts shutter speed automatically.
              </p>
              
              <p className="text-gray-700 mb-4">
                Set your camera to continuous autofocus (AI Servo/AF-C) to track moving subjects. Pre-focus on areas where you anticipate activity, and use zone or group area AF modes for better tracking of subjects moving through the frame.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Ethics and Legal Considerations</h2>
              
              <p className="text-gray-700 mb-4">
                Understanding your legal rights is crucial for street photography. In most public places, you have the right to photograph people and property. However, be aware of local laws and restrictions in sensitive areas.
              </p>
              
              <p className="text-gray-700 mb-4">
                Ethical considerations go beyond legal requirements. Respect people's privacy and dignity. If someone asks you not to photograph them, comply respectfully. Remember that you're documenting lives, not exploiting them.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Approaching People for Portraits</h3>
              
              <p className="text-gray-700 mb-4">
                Some of the most powerful street photographs result from interactions with subjects. When approaching someone for a portrait, be respectful, explain your intentions, and ask for permission.
              </p>
              
              <p className="text-gray-700 mb-4">
                Approach with a smile, speak confidently but not aggressively, and respect their decision if they decline. Often, people are flattered by the interest and willing to participate if approached with genuine respect.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Compositional Techniques for Urban Environments</h2>
              
              <p className="text-gray-700 mb-4">
                Urban environments provide numerous compositional opportunities. Look for geometric patterns in architecture, use leading lines created by streets and buildings, and incorporate reflections in windows or puddles.
              </p>
              
              <p className="text-gray-700 mb-4">
                Contrast between light and shadow, color contrasts, and the interplay between people and their environment can create compelling visual stories. Frame your subjects within architectural elements when appropriate.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Timing and Light in Urban Settings</h3>
              
              <p className="text-gray-700 mb-4">
                Golden hour light creates beautiful street photographs, but urban environments offer interesting lighting opportunities throughout the day. Neon signs, streetlights, and shop windows create colorful, dynamic lighting situations.
              </p>
              
              <p className="text-gray-700 mb-4">
                Overcast days provide even lighting that works well for street portraits. Harsh midday sun creates dramatic shadows that can add visual interest to architectural elements and silhouettes.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Developing Your Visual Language</h2>
              
              <p className="text-gray-700 mb-4">
                Cultivate your unique perspective by studying the work of renowned street photographers like Henri Cartier-Bresson, Vivian Maier, Robert Frank, and Garry Winogrand. Analyze what makes their images compelling and how they tell stories.
              </p>
              
              <p className="text-gray-700 mb-4">
                Develop themes or series that explore specific aspects of urban life. This could be focusing on transportation, market scenes, or the interaction between people and technology. Consistency in your approach helps develop a recognizable style.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Building Confidence and Overcoming Fear</h3>
              
              <p className="text-gray-700 mb-4">
                Many aspiring street photographers struggle with anxiety about photographing strangers. Start in familiar neighborhoods or busy public events where people expect to be photographed.
              </p>
              
              <p className="text-gray-700 mb-4">
                Practice shooting from a distance before moving closer to subjects. Use the "spray and pray" method initially, taking multiple shots to increase your chances of capturing the decisive moment.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Technical Skills for Spontaneous Situations</h2>
              
              <p className="text-gray-700 mb-4">
                Street photography demands quick reflexes and technical proficiency. Master manual focusing techniques, especially zone focusing, which allows you to pre-set focus for specific distances.
              </p>
              
              <p className="text-gray-700 mb-4">
                Learn to shoot from the hip or at waist level to remain unobtrusive. Practice with your specific camera to know button placements and settings without taking your eye away from the viewfinder.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Post-Processing Philosophy</h3>
              
              <p className="text-gray-700 mb-4">
                Post-processing should enhance the story without altering reality. Black and white conversion is popular in street photography as it removes distractions and emphasizes form, contrast, and emotion.
              </p>
              
              <p className="text-gray-700 mb-4">
                Keep adjustments subtle—slight contrast enhancement, selective sharpening, and minor exposure adjustments are usually sufficient. The authenticity of the moment should remain paramount.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Safety and Awareness</h2>
              
              <p className="text-gray-700 mb-4">
                Street photography sometimes takes you to unfamiliar areas. Stay aware of your surroundings, keep valuables secure, and avoid areas that feel unsafe. Let someone know your planned route when exploring new neighborhoods.
              </p>
              
              <p className="text-gray-700 mb-4">
                Be respectful of private property and avoid confrontations. If challenged about your photography, remain calm, polite, and knowledgeable about your rights.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Finding Your Voice</h3>
              
              <p className="text-gray-700 mb-4">
                Develop your unique perspective by exploring different neighborhoods, attending cultural events, and observing how different communities express themselves.
              </p>
              
              <p className="text-gray-700 mb-4">
                Consider the stories you want to tell through your street photography. Are you interested in documenting social issues, celebrating cultural diversity, or capturing the humor of everyday life?
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Challenges and Solutions</h2>
              
              <p className="text-gray-700 mb-4">
                Blurry images are common in street photography due to fast-moving subjects. Practice panning techniques and use appropriate shutter speeds (typically 1/125s or faster) to freeze motion.
              </p>
              
              <p className="text-gray-700 mb-4">
                Low-light situations require higher ISO settings. Modern cameras handle noise well at moderate ISO levels, so don't be afraid to increase ISO when necessary for sharp images.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Building a Body of Work</h3>
              
              <p className="text-gray-700 mb-4">
                Focus on creating cohesive bodies of work rather than random snapshots. This might mean spending time in specific neighborhoods, following particular themes, or documenting ongoing events.
              </p>
              
              <p className="text-gray-700 mb-4">
                Edit ruthlessly, selecting only your strongest images. Street photography often requires taking many shots to capture a few exceptional moments.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusion</h2>
              
              <p className="text-gray-700 mb-4">
                Street photography is a rewarding genre that challenges photographers to be observant, technically proficient, and socially aware. It captures the essence of humanity in public spaces and preserves moments that might otherwise be lost to time. Success in street photography comes from patience, practice, and respect for both your subjects and the communities you document.
              </p>
              
              <p className="text-gray-700 mb-4">
                Remember that street photography is ultimately about storytelling. Every image should contribute to a larger narrative about the human experience in urban environments.
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