import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MasteringLightAndCompositionPhotographyBasics() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string | null}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is the rule of thirds in photography?",
      answer: "The rule of thirds divides the frame into nine equal rectangles using two horizontal and two vertical lines. Placing key elements along these lines or at their intersections creates more balanced and interesting compositions than centering subjects."
    },
    {
      question: "What is the golden hour and why is it important?",
      answer: "The golden hour refers to the first hour after sunrise and the last hour before sunset when the light is soft, warm, and directional. This light is ideal for photography because it creates fewer harsh shadows and adds warmth to images."
    },
    {
      question: "What are the three components of the exposure triangle?",
      answer: "The exposure triangle consists of aperture (controls depth of field), shutter speed (controls motion blur), and ISO (controls sensor sensitivity). Adjusting these three elements affects the exposure and creative look of an image."
    },
    {
      question: "How does leading lines improve composition?",
      answer: "Leading lines guide the viewer's eye through the image toward the main subject. They can be roads, fences, shorelines, or any linear element that creates visual flow and adds depth to the photograph."
    },
    {
      question: "What is depth of field and how is it controlled?",
      answer: "Depth of field refers to the range of distance in a photo that appears sharp. It's controlled primarily by aperture (wider apertures create shallower depth of field), focal length, and distance to the subject."
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "What are the three components of the exposure triangle?",
      options: [
        "ISO, shutter speed, and flash",
        "Aperture, shutter speed, and ISO",
        "Focus, zoom, and white balance",
        "Color, contrast, and saturation"
      ],
      correctAnswer: "Aperture, shutter speed, and ISO"
    },
    {
      question: "What is the golden hour?",
      options: [
        "The time when camera batteries perform best",
        "The first hour after sunrise and last hour before sunset",
        "The middle of the day when light is brightest",
        "The time when photographers get paid the most"
      ],
      correctAnswer: "The first hour after sunrise and last hour before sunset"
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
        <title>Mastering Light and Composition: Photography Basics | HAM-BLOGS</title>
        <meta name="description" content="Understanding the fundamental elements of photography including light, composition, and technical settings that create compelling images." />
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
              <span className="inline-block px-3 py-1 ml-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full">Basics</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Mastering Light and Composition: Photography Basics</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">January 8, 2026</span>
              <span className="mr-4">•</span>
              <span>12 min read</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Photography is fundamentally the art of capturing light. Understanding how light behaves and how to compose your shots effectively are the foundational skills that separate amateur snapshots from compelling images. Whether you're using a smartphone or a professional DSLR, mastering these basics will dramatically improve your photographic results. This comprehensive guide explores the essential elements of light and composition that form the backbone of great photography.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Nature of Light in Photography</h2>
              
              <p className="text-gray-700 mb-4">
                Light is the most critical element in photography, often more important than the subject itself. Understanding the qualities of light—its direction, intensity, color temperature, and hardness—will enable you to make informed decisions about when and how to shoot.
              </p>
              
              <p className="text-gray-700 mb-4">
                Hard light, such as direct sunlight at midday, creates sharp, defined shadows and high contrast. While this can be challenging for portraits, it can add drama and texture to architectural or landscape photography. Soft light, like that found on an overcast day or during the golden hour, produces gentle transitions between light and shadow, making it ideal for portraits and reducing the need for additional lighting equipment.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Golden Hour and Blue Hour</h3>
              
              <p className="text-gray-700 mb-4">
                The golden hour—the first hour after sunrise and the last hour before sunset—offers some of the most favorable lighting conditions for photography. The sun is low in the sky, creating warm, directional light that adds dimension and texture to subjects. The long shadows and warm color temperature create a pleasing atmosphere that's difficult to replicate at other times of day.
              </p>
              
              <p className="text-gray-700 mb-4">
                Following the golden hour is the blue hour, when the sun has set but there's still ambient light in the sky. This period provides even, cool-toned illumination that's excellent for cityscapes and architecture, especially when artificial lights begin to illuminate the scene.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Composition Fundamentals</h2>
              
              <p className="text-gray-700 mb-4">
                Composition refers to how elements are arranged within the frame. Good composition guides the viewer's eye to the most important parts of the image and creates visual balance. While there are no absolute rules, certain principles have proven effective across centuries of visual art.
              </p>
              
              <p className="text-gray-700 mb-4">
                The rule of thirds is perhaps the most well-known compositional guideline. By dividing the frame into nine equal sections using two horizontal and two vertical lines, photographers can place important elements along these lines or at their intersections. This creates more dynamic images than centering the subject.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Leading Lines and Framing</h3>
              
              <p className="text-gray-700 mb-4">
                Leading lines guide the viewer's eye through the image, creating visual flow and directing attention to the main subject. These can be roads, rivers, fence lines, architectural elements, or any linear feature that creates a path through the frame. Diagonal lines tend to be more dynamic than horizontal or vertical ones, adding energy to the composition.
              </p>
              
              <p className="text-gray-700 mb-4">
                Framing involves using elements in the foreground to create a frame around the main subject. This can be tree branches, archways, doorways, or any opening that isolates the subject. Effective framing adds depth to the image and helps focus attention on the intended subject.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Exposure Triangle</h2>
              
              <p className="text-gray-700 mb-4">
                Understanding the relationship between aperture, shutter speed, and ISO—the three elements of the exposure triangle—is crucial for controlling both exposure and creative effects. Aperture controls the depth of field and the amount of light entering the camera. Shutter speed determines how motion is captured and affects light exposure. ISO adjusts the camera sensor's sensitivity to light.
              </p>
              
              <p className="text-gray-700 mb-4">
                Aperture is measured in f-stops. Lower f-numbers (like f/1.4 or f/2.8) represent wider apertures that allow more light and create shallower depth of field. Higher f-numbers (like f/8 or f/11) create smaller apertures with greater depth of field, keeping more of the scene in focus.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Shutter Speed and Motion</h3>
              
              <p className="text-gray-700 mb-4">
                Shutter speed controls how long the camera sensor is exposed to light. Fast shutter speeds (like 1/500s or 1/1000s) freeze motion, making them ideal for sports or wildlife photography. Slow shutter speeds (like 1/30s or several seconds) allow motion blur, which can be used creatively to show movement in water, clouds, or traffic trails.
              </p>
              
              <p className="text-gray-700 mb-4">
                When using slow shutter speeds handheld, camera shake becomes an issue. As a general rule, avoid shutter speeds slower than the reciprocal of your focal length (for example, don't handhold at 1/50s when using a 70mm lens). Image stabilization can help extend this threshold.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Color Theory and Temperature</h2>
              
              <p className="text-gray-700 mb-4">
                Color plays a significant role in the emotional impact of photographs. Understanding color relationships can help create harmonious or contrasting effects that enhance your message. Complementary colors (opposites on the color wheel like blue and orange) create vibrant contrasts, while analogous colors (neighbors on the color wheel like blue and green) create harmonious, calming effects.
              </p>
              
              <p className="text-gray-700 mb-4">
                Color temperature, measured in Kelvin, affects the mood of your images. Warm light (lower Kelvin values like 2000-4000K) creates cozy, inviting feelings, while cool light (higher Kelvin values like 7000-10000K) can create feelings of calm or sterility. Understanding white balance helps ensure colors appear natural or intentionally shifted for creative effect.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Perspective and Depth</h3>
              
              <p className="text-gray-700 mb-4">
                Creating a sense of depth in a two-dimensional photograph requires careful attention to perspective and layering. Including foreground, middle ground, and background elements gives viewers a sense of space and dimension.
              </p>
              
              <p className="text-gray-700 mb-4">
                Perspective can be manipulated by your shooting position. Shooting from a low angle can make subjects appear more imposing, while a high vantage point can reveal patterns and relationships not visible at eye level. Wide-angle lenses exaggerate perspective, making nearby objects appear larger and distant objects smaller, while telephoto lenses compress perspective, making distant objects appear closer to foreground elements.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Practical Application Tips</h2>
              
              <p className="text-gray-700 mb-4">
                Start by practicing with one element at a time. Spend a day focusing solely on light, observing how it changes throughout the day and how it affects your subjects. Another day, concentrate on composition, looking for leading lines, frames, and opportunities to apply the rule of thirds.
              </p>
              
              <p className="text-gray-700 mb-4">
                Review your images critically, identifying what works and what doesn't. Understanding why certain images are more compelling than others will accelerate your learning process. Study the work of photographers you admire, analyzing how they use light and composition to create their effects.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Common Mistakes to Avoid</h3>
              
              <p className="text-gray-700 mb-4">
                Beginners often center their subjects in every shot, which can create static, uninteresting images. Experiment with off-center compositions to create more dynamic results. Another common mistake is ignoring the background, which can be distracting or take attention away from the main subject.
              </p>
              
              <p className="text-gray-700 mb-4">
                Pay attention to horizon lines, ensuring they're level unless you're intentionally creating a dynamic tilt. Also, be aware of harsh midday sun, which can create unflattering shadows and blown highlights. If you must shoot in these conditions, look for open shade or use a diffuser to soften the light.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Advanced Techniques</h2>
              
              <p className="text-gray-700 mb-4">
                Once you've mastered the basics, consider exploring advanced techniques like HDR (High Dynamic Range) photography, which combines multiple exposures to capture a wider range of tones. Focus stacking allows for extended depth of field by combining multiple images focused at different distances.
              </p>
              
              <p className="text-gray-700 mb-4">
                Long exposure techniques can create ethereal effects with moving water, clouds, or light trails. Light painting involves using portable light sources to illuminate subjects during long exposures, creating unique and artistic effects.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Equipment Considerations</h3>
              
              <p className="text-gray-700 mb-4">
                While good technique trumps expensive gear, having appropriate equipment can expand your creative possibilities. A sturdy tripod is essential for long exposures and precise composition. Filters like polarizers can reduce reflections and enhance skies, while neutral density filters allow for longer exposures in bright conditions.
              </p>
              
              <p className="text-gray-700 mb-4">
                Different lenses serve different purposes. Wide-angle lenses excel at landscapes and architecture, while telephoto lenses are ideal for wildlife and isolating subjects. Prime lenses often offer superior image quality and wider maximum apertures compared to zoom lenses.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Developing Your Eye</h2>
              
              <p className="text-gray-700 mb-4">
                Photography is as much about seeing as it is about technical skill. Train yourself to notice light, shapes, patterns, and potential compositions in everyday situations. Carry a camera or smartphone with you and practice seeing the world through a photographer's eye.
              </p>
              
              <p className="text-gray-700 mb-4">
                Study art, design, and the work of other photographers. Understanding composition in other visual media will enhance your photographic vision. Pay attention to how light affects your daily environment and how different conditions create different moods and opportunities.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h3>
              
              <p className="text-gray-700 mb-4">
                Mastering light and composition takes time and practice, but understanding these fundamentals provides the foundation for creating compelling photographs regardless of your subject matter or equipment. The most important step is to keep shooting, experimenting, and learning from both successes and failures. As you develop these skills, you'll find yourself naturally looking for light and composition opportunities, transforming ordinary scenes into extraordinary images.
              </p>
              
              <p className="text-gray-700 mb-4">
                Remember that rules in photography are guidelines rather than strict requirements. Understanding the fundamentals allows you to break them intentionally and creatively when it serves your artistic vision.
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