import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LandscapePhotographyNatureSplendorDocumentation() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string | null}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is the best time of day for landscape photography?",
      answer: "The golden hour (first hour after sunrise and last hour before sunset) provides the most favorable lighting for landscapes. The blue hour, just after sunset or before sunrise, also offers beautiful even lighting."
    },
    {
      question: "What equipment is essential for landscape photography?",
      answer: "A sturdy tripod is crucial for sharp images, especially in low light. Wide-angle lenses are popular for capturing expansive views. Filters like polarizers and neutral density filters help control exposure and reflections."
    },
    {
      question: "What is hyperfocal distance and why is it important?",
      answer: "Hyperfocal distance is the closest distance at which a lens can be focused while keeping objects at infinity acceptably sharp. Using it maximizes depth of field in landscape photography."
    },
    {
      question: "How do you achieve sharp focus throughout a landscape?",
      answer: "Use a small aperture (f/8-f/11), focus at the hyperfocal distance, and consider focus stacking for extreme sharpness throughout the entire scene."
    },
    {
      question: "What is the rule of thirds in landscape photography?",
      answer: "The rule of thirds suggests placing the horizon line either one-third from the top or bottom of the frame, rather than in the center, to create more dynamic compositions."
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "What is the golden hour in landscape photography?",
      options: [
        "The time when photographers get paid the most",
        "The first hour after sunrise and last hour before sunset",
        "Midday when the sun is highest",
        "The time when camera batteries last longest"
      ],
      correctAnswer: "The first hour after sunrise and last hour before sunset"
    },
    {
      question: "Which aperture range typically provides the sharpest results for landscapes?",
      options: [
        "f/1.4 - f/2.8",
        "f/2.8 - f/4",
        "f/5.6 - f/11",
        "f/16 - f/22"
      ],
      correctAnswer: "f/5.6 - f/11"
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
        <title>Landscape Photography: Documenting Nature's Splendor | HAM-BLOGS</title>
        <meta name="description" content="Exploring techniques for capturing the majesty of natural landscapes and preserving the beauty of our environment." />
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
              <span className="inline-block px-3 py-1 ml-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full">Landscapes</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Landscape Photography: Documenting Nature's Splendor</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">January 6, 2026</span>
              <span className="mr-4">•</span>
              <span>13 min read</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Landscape photography is the art of capturing the vast beauty of the natural world, from sweeping mountain vistas to intimate forest scenes. It requires patience, technical skill, and a deep appreciation for the ever-changing canvas that nature provides. This comprehensive guide explores the techniques, equipment, and approaches needed to create compelling landscape images that do justice to nature's splendor.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Planning and Scouting Locations</h2>
              
              <p className="text-gray-700 mb-4">
                Successful landscape photography often begins long before you arrive at a location. Research is crucial—study topographic maps, satellite imagery, and weather forecasts to understand your destination. Apps like PhotoPills and The Photographer's Ephemeris can help predict sun and moon positions, which is essential for timing your visit.
              </p>
              
              <p className="text-gray-700 mb-4">
                Scout locations during the day if possible, before returning for your shoot. This allows you to identify potential compositions, assess accessibility, and note safety considerations. Consider seasonal changes—what looks spectacular in summer might be completely different in winter.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Timing and Weather Conditions</h3>
              
              <p className="text-gray-700 mb-4">
                The golden hour provides the most favorable lighting for landscapes, with warm, directional light that adds depth and texture to terrain. The blue hour, just after sunset or before sunrise, offers even, soft lighting that's particularly effective for cityscapes combined with natural elements.
              </p>
              
              <p className="text-gray-700 mb-4">
                Don't discount overcast days, which provide even lighting and can enhance moody, dramatic scenes. Stormy weather can create dynamic cloud formations and interesting light patterns. Fog and mist can add mystery and depth to forest scenes.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Essential Equipment for Landscape Photography</h2>
              
              <p className="text-gray-700 mb-4">
                A sturdy tripod is the most essential piece of equipment for landscape photography. It enables sharp images at low ISO settings, allows for long exposures, and provides stability in windy conditions. Carbon fiber tripods offer the best combination of strength and portability.
              </p>
              
              <p className="text-gray-700 mb-4">
                Wide-angle lenses (14-35mm) are popular for capturing expansive vistas, though telephoto lenses can isolate distant mountains or compress layers in the landscape. Filters are invaluable tools—a circular polarizer reduces reflections and enhances sky contrast, while graduated neutral density filters balance exposure between bright skies and darker foregrounds.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Camera Settings for Maximum Sharpness</h3>
              
              <p className="text-gray-700 mb-4">
                Achieving front-to-back sharpness in landscapes requires careful attention to depth of field. The optimal aperture for sharpness is typically between f/8 and f/11, where most lenses perform at their peak. Avoid using the smallest apertures (f/16-f/22) due to diffraction, which reduces overall sharpness.
              </p>
              
              <p className="text-gray-700 mb-4">
                Focus at the hyperfocal distance to maximize depth of field. This is the closest distance at which everything from half that distance to infinity will appear acceptably sharp. For many situations, focusing approximately one-third into the scene achieves similar results.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Composition Techniques for Impact</h2>
              
              <p className="text-gray-700 mb-4">
                The rule of thirds suggests placing the horizon line either one-third from the top or bottom of the frame, depending on whether the sky or foreground is more interesting. Leading lines—roads, streams, or ridges—guide the viewer's eye through the image and add depth.
              </p>
              
              <p className="text-gray-700 mb-4">
                Including a strong foreground element adds depth and scale to your image. This could be rocks, flowers, or fallen logs that lead the eye into the scene. The foreground, middle ground, and background should all contribute to a cohesive composition.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Managing Dynamic Range</h3>
              
              <p className="text-gray-700 mb-4">
                Landscapes often present challenges with dynamic range—the difference between the brightest and darkest areas. Graduated neutral density filters can help balance exposure between bright skies and darker foregrounds.
              </p>
              
              <p className="text-gray-700 mb-4">
                Alternatively, bracket your exposures (take multiple shots at different exposures) and blend them in post-processing. This technique, known as HDR (High Dynamic Range), allows you to capture detail in both highlights and shadows.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Long Exposure Techniques</h2>
              
              <p className="text-gray-700 mb-4">
                Long exposures can create ethereal effects with moving water, clouds, and grass. Use a neutral density filter to achieve longer shutter speeds in daylight. A 10-stop ND filter allows for exposures of several minutes even in bright conditions.
              </p>
              
              <p className="text-gray-700 mb-4">
                For silky smooth water effects, try exposures of 1-3 seconds. For completely blurred water, exposures of 30 seconds or more may be needed. Always use a sturdy tripod and consider using a remote release to avoid camera shake.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Focus Stacking for Ultimate Sharpness</h3>
              
              <p className="text-gray-700 mb-4">
                Focus stacking involves taking multiple images focused at different distances and blending them in post-processing. This technique ensures maximum sharpness throughout the entire scene, especially when you need both foreground and background elements to be tack sharp.
              </p>
              
              <p className="text-gray-700 mb-4">
                When focus stacking, ensure consistent exposure settings across all frames. Make sure to overlap focus zones between frames to avoid any unsharp areas in the final composite.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Weather and Atmospheric Effects</h2>
              
              <p className="text-gray-700 mb-4">
                Weather plays a crucial role in landscape photography. Clear skies provide opportunities for dramatic sunset colors, while storm clouds can add tension and drama. Morning mist can create mysterious, otherworldly scenes in forests.
              </p>
              
              <p className="text-gray-700 mb-4">
                Understand how atmospheric conditions affect your images. Humidity can reduce contrast and create haze, while dry air often results in clearer, more vivid images. Pollution and dust can affect color temperature and clarity.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Seasonal Considerations</h3>
              
              <p className="text-gray-700 mb-4">
                Each season offers unique opportunities for landscape photography. Spring brings fresh green growth and blooming wildflowers. Summer provides lush vegetation but can be challenging due to harsh light and bugs. Fall offers spectacular color displays in many regions.
              </p>
              
              <p className="text-gray-700 mb-4">
                Winter landscapes can be starkly beautiful, with snow providing clean, minimalist compositions. However, cold weather requires special care for both equipment and personal safety.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Environmental Ethics and Responsibility</h2>
              
              <p className="text-gray-700 mb-4">
                As landscape photographers, we have a responsibility to protect the environments we photograph. Stay on designated trails, pack out all trash, and follow Leave No Trace principles. Respect wildlife and maintain safe distances.
              </p>
              
              <p className="text-gray-700 mb-4">
                Consider the impact of your presence on fragile ecosystems. Some locations are becoming overwhelmed by photography tourism, leading to damage to plants and erosion. Seek lesser-known locations when possible.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Post-Processing Philosophy</h3>
              
              <p className="text-gray-700 mb-4">
                Post-processing should enhance the scene without misleading viewers about what they would see in person. Adjust exposure, contrast, and color to match your vision while maintaining authenticity. Avoid excessive saturation or contrast that makes images look unrealistic.
              </p>
              
              <p className="text-gray-700 mb-4">
                Use local adjustments to enhance specific areas of your image. Masking allows you to apply adjustments to specific parts of the image, such as brightening shadows in the foreground or enhancing cloud detail in the sky.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Advanced Techniques and Creative Approaches</h2>
              
              <p className="text-gray-700 mb-4">
                Panoramas allow you to capture extremely wide scenes by stitching multiple images together. Plan your panorama carefully, overlapping images by about 30% and keeping the camera level throughout the sequence.
              </p>
              
              <p className="text-gray-700 mb-4">
                Consider abstract approaches to landscape photography—close-up details of rock formations, patterns in sand dunes, or reflections in puddles can create compelling images that challenge viewers' perceptions.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Digital Workflow for Landscape Images</h3>
              
              <p className="text-gray-700 mb-4">
                Develop a consistent workflow for processing landscape images. Raw files provide maximum flexibility for adjusting exposure, white balance, and other parameters. Standardize your processing to develop a consistent style.
              </p>
              
              <p className="text-gray-700 mb-4">
                Organize your images systematically, using keywords and ratings to efficiently find your best work. Consider creating multiple versions of images for different uses (web, print, etc.).
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Safety Considerations</h2>
              
              <p className="text-gray-700 mb-4">
                Landscape photography often involves hiking to remote locations or shooting in challenging conditions. Inform others of your plans, carry emergency supplies, and check weather conditions. Be aware of wildlife and natural hazards.
              </p>
              
              <p className="text-gray-700 mb-4">
                When shooting near water, be cautious of slippery surfaces and changing tides. In high-altitude locations, be aware of altitude sickness symptoms and acclimatize properly.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h3>
              
              <p className="text-gray-700 mb-4">
                Landscape photography is a rewarding pursuit that connects us with the natural world while challenging our technical and creative abilities. Success comes from understanding light, weather, and composition, but also from patience and respect for the environments we document. Whether you're capturing grand vistas or intimate details, the goal is to create images that inspire others to appreciate and protect the natural world.
              </p>
              
              <p className="text-gray-700 mb-4">
                Remember that the best landscape images tell a story about the place and your experience there. Technical perfection is valuable, but emotional impact is what makes images memorable.
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