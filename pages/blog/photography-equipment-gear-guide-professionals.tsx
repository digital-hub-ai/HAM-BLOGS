import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PhotographyEquipmentGearGuideProfessionals() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string | null}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What's the difference between DSLR and mirrorless cameras?",
      answer: "DSLRs use a mirror mechanism to reflect light to an optical viewfinder, while mirrorless cameras have an electronic viewfinder. Mirrorless cameras are generally more compact and offer advanced video features, while DSLRs often have better battery life and lens selection."
    },
    {
      question: "What is the best camera for beginners?",
      answer: "For beginners, entry-level DSLRs or mirrorless cameras with good automatic modes and guide functions are recommended. Models like the Canon EOS Rebel series, Nikon D3500/D5600, or Sony a6000 series are popular choices."
    },
    {
      question: "What is the difference between prime and zoom lenses?",
      answer: "Prime lenses have a fixed focal length and typically offer wider maximum apertures and sharper images. Zoom lenses offer variable focal lengths for versatility but are often larger, heavier, and have smaller maximum apertures."
    },
    {
      question: "What is the importance of lens aperture?",
      answer: "Aperture controls the amount of light entering the camera and affects depth of field. Wider apertures (lower f-numbers) allow more light and create shallower depth of field, while smaller apertures (higher f-numbers) increase depth of field."
    },
    {
      question: "What accessories are essential for photography?",
      answer: "Essential accessories include extra batteries, memory cards, lens cleaning kit, sturdy tripod, and appropriate camera bag. Filters (polarizer, neutral density) and external flash are also valuable additions."
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "What does DSLR stand for?",
      options: [
        "Digital Single-Lens Reflex",
        "Digital System Lens Reflex",
        "Digital Single-Lens Recorder",
        "Digital Standard Lens Reflex"
      ],
      correctAnswer: "Digital Single-Lens Reflex"
    },
    {
      question: "Which aperture setting provides the shallowest depth of field?",
      options: [
        "f/16",
        "f/8",
        "f/4",
        "f/1.4"
      ],
      correctAnswer: "f/1.4"
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
        <title>Photography Equipment: A Complete Gear Guide for Professionals | HAM-BLOGS</title>
        <meta name="description" content="Understanding cameras, lenses, accessories, and post-processing tools that professional photographers use in their craft." />
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
              <span className="inline-block px-3 py-1 ml-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full">Equipment</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Photography Equipment: A Complete Gear Guide for Professionals</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">January 4, 2026</span>
              <span className="mr-4">•</span>
              <span>14 min read</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Professional photography requires understanding the tools of the trade, from cameras and lenses to accessories and post-processing software. The right equipment can significantly impact image quality, workflow efficiency, and creative possibilities. This comprehensive guide explores the essential equipment used by professional photographers across various genres, helping you make informed decisions about your gear investments.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Camera Systems: DSLR vs. Mirrorless</h2>
              
              <p className="text-gray-700 mb-4">
                The photography industry has seen a significant shift toward mirrorless cameras in recent years, though DSLRs still maintain a strong presence. DSLRs use a mirror mechanism to reflect light to an optical viewfinder, providing a direct optical view of the scene.
              </p>
              
              <p className="text-gray-700 mb-4">
                Mirrorless cameras eliminate the mirror, using an electronic viewfinder or the rear LCD screen to display a digital preview. This design allows for smaller, lighter bodies while offering features like in-body image stabilization and advanced video capabilities. Both systems offer professional-level image quality, so the choice often comes down to personal preference and specific needs.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Sensor Sizes and Their Impact</h3>
              
              <p className="text-gray-700 mb-4">
                Sensor size significantly affects image quality, depth of field, and low-light performance. Full-frame sensors (36mm x 24mm) offer the largest size commonly available, providing excellent low-light performance and shallow depth of field control.
              </p>
              
              <p className="text-gray-700 mb-4">
                APS-C sensors are smaller and more common in entry-level and mid-range cameras, offering a crop factor that effectively increases the focal length of lenses. Micro Four Thirds sensors are even smaller, allowing for very compact camera and lens systems, though with some trade-offs in low-light performance.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Essential Camera Features for Professionals</h2>
              
              <p className="text-gray-700 mb-4">
                Professional cameras typically feature weather sealing for durability in challenging conditions, dual memory card slots for backup and overflow storage, and robust build quality for longevity. High-resolution viewfinders and articulated LCD screens enhance usability.
              </p>
              
              <p className="text-gray-700 mb-4">
                Advanced autofocus systems with numerous focus points and tracking capabilities are crucial for capturing sharp images of moving subjects. Professional cameras also offer excellent high-ISO performance, allowing for quality images in low-light conditions without excessive noise.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Resolution and Dynamic Range Considerations</h3>
              
              <p className="text-gray-700 mb-4">
                Higher resolution provides more detail and flexibility for cropping, but also results in larger file sizes and potentially slower processing. For commercial work requiring large prints, higher resolution (40+ megapixels) may be beneficial.
              </p>
              
              <p className="text-gray-700 mb-4">
                Dynamic range refers to the camera's ability to capture detail in both highlights and shadows. Cameras with high dynamic range provide more flexibility in post-processing and better handling of challenging lighting situations.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Lens Selection and Characteristics</h2>
              
              <p className="text-gray-700 mb-4">
                Lenses are often considered more important than camera bodies, as they directly affect image quality, perspective, and creative possibilities. Prime lenses have fixed focal lengths and typically offer wider maximum apertures and sharper images, while zoom lenses provide versatility at the cost of some optical performance.
              </p>
              
              <p className="text-gray-700 mb-4">
                Professional lenses often feature weather sealing, robust construction, and advanced optical elements to minimize aberrations. The maximum aperture of a lens affects not only light gathering ability but also depth of field control and image stabilization effectiveness.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Focal Length Categories and Uses</h3>
              
              <p className="text-gray-700 mb-4">
                Wide-angle lenses (14-35mm) excel at landscapes, architecture, and interior photography, capturing expansive scenes. Standard lenses (35-85mm) provide natural perspectives similar to human vision, making them versatile for street photography, portraits, and general use.
              </p>
              
              <p className="text-gray-700 mb-4">
                Telephoto lenses (70mm+) are ideal for wildlife, sports, and portrait photography, allowing photographers to isolate subjects and compress perspective. Macro lenses enable detailed close-up photography of small subjects.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Specialized Photography Equipment</h2>
              
              <p className="text-gray-700 mb-4">
                Different photography genres require specialized equipment. Landscape photographers benefit from sturdy tripods, graduated neutral density filters, and wide-angle lenses. Portrait photographers often prefer fast prime lenses with focal lengths of 85mm or 105mm.
              </p>
              
              <p className="text-gray-700 mb-4">
                Sports and wildlife photographers need fast telephoto lenses with image stabilization. Studio photographers invest in lighting equipment, softboxes, and backdrops. Underwater photographers require specialized housings and strobes.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Lighting Equipment and Accessories</h3>
              
              <p className="text-gray-700 mb-4">
                Professional lighting equipment ranges from simple speedlights to complex studio strobes. Speedlights provide portable off-camera flash options, while studio strobes offer more power and control for consistent lighting.
              </p>
              
              <p className="text-gray-700 mb-4">
                Light modifiers like softboxes, umbrellas, and beauty dishes shape and soften light. Reflectors and diffusers are essential for natural light photography, helping to control and redirect available light.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Essential Accessories for Professional Work</h2>
              
              <p className="text-gray-700 mb-4">
                Extra batteries are crucial for professional work, especially during long shoots or in locations without charging access. Memory cards should be high-capacity and fast, with multiple cards providing backup and overflow options.
              </p>
              
              <p className="text-gray-700 mb-4">
                A sturdy tripod is essential for sharp images, long exposures, and precise composition. Carbon fiber tripods offer the best balance of strength and portability, while aluminum options provide durability at a lower cost.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Filters and Their Applications</h3>
              
              <p className="text-gray-700 mb-4">
                Circular polarizing filters reduce reflections and enhance sky contrast, while neutral density filters allow for longer exposures in bright conditions. Graduated neutral density filters balance exposure between bright skies and darker foregrounds in landscapes.
              </p>
              
              <p className="text-gray-700 mb-4">
                UV filters can protect lens elements, though they may introduce slight image degradation. Color filters are primarily used for black and white photography to emphasize or suppress certain tones.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Camera Bags and Transport Solutions</h2>
              
              <p className="text-gray-700 mb-4">
                Professional camera bags must protect expensive equipment while providing easy access and comfort for extended carrying. Backpack-style bags offer the best protection and comfort for hiking to remote locations.
              </p>
              
              <p className="text-gray-700 mb-4">
                Rolling bags are ideal for studio photographers who transport equipment to client locations. Shoulder bags provide quick access but offer less protection. Choose bags with customizable dividers to fit your specific gear configuration.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Post-Processing Tools and Software</h3>
              
              <p className="text-gray-700 mb-4">
                Professional photographers rely on software like Adobe Lightroom and Photoshop for organizing, editing, and enhancing images. Lightroom excels at catalog management and non-destructive editing, while Photoshop provides advanced retouching capabilities.
              </p>
              
              <p className="text-gray-700 mb-4">
                Alternative software options include Capture One, Affinity Photo, and Luminar. Raw processing software is essential for extracting maximum quality from camera raw files, providing greater flexibility than JPEG processing.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Video Equipment for Hybrid Photography</h2>
              
              <p className="text-gray-700 mb-4">
                Many professional photographers now incorporate video into their services. Modern cameras offer high-quality video capabilities, but additional equipment like external microphones, gimbals, and dedicated lighting enhances video production value.
              </p>
              
              <p className="text-gray-700 mb-4">
                Stabilization equipment like gimbals and sliders helps create smooth, professional-looking video footage. External recording devices can provide higher quality video recording than in-camera options.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Maintenance and Care Equipment</h3>
              
              <p className="text-gray-700 mb-4">
                Proper maintenance extends equipment life and maintains image quality. Essential cleaning supplies include lens cleaning cloths, blower bulbs, and sensor cleaning kits.
              </p>
              
              <p className="text-gray-700 mb-4">
                Desiccant containers help prevent moisture damage during storage. Lens pens and microfiber cloths should be high-quality to avoid scratching delicate lens coatings.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Budget Considerations and Investment Strategy</h2>
              
              <p className="text-gray-700 mb-4">
                Building a professional kit requires strategic investment. Start with a quality camera body and essential lenses, then gradually add specialized equipment as your needs and income grow.
              </p>
              
              <p className="text-gray-700 mb-4">
                Consider renting specialized equipment before purchasing to ensure it meets your needs. Used equipment markets offer quality options at reduced prices, though warranty coverage may be limited.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Future-Proofing Your Equipment</h3>
              
              <p className="text-gray-700 mb-4">
                Technology evolves rapidly in photography. Choose equipment from manufacturers with strong roadmaps and lens lineups that are likely to continue developing.
              </p>
              
              <p className="text-gray-700 mb-4">
                Consider the adaptability of your gear—can it be upgraded, or does it have features that will remain relevant for years? Invest in quality over quantity when possible.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Mistakes to Avoid</h2>
              
              <p className="text-gray-700 mb-4">
                Avoid the temptation to buy the most expensive gear immediately. Entry-level and mid-range equipment can produce professional-quality results in the right hands.
              </p>
              
              <p className="text-gray-700 mb-4">
                Don't neglect accessories that support your primary equipment. A poor tripod can negate the benefits of an expensive camera, and inadequate lighting can limit your creative possibilities.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h3>
              
              <p className="text-gray-700 mb-4">
                Professional photography equipment is an investment in your craft and business. Understanding the capabilities and limitations of different gear helps you make informed decisions that support your creative vision and professional needs. Remember that equipment is a tool to express your vision—the most important element is your skill as a photographer.
              </p>
              
              <p className="text-gray-700 mb-4">
                Focus on mastering the equipment you have before upgrading, and always prioritize learning and technique development alongside gear acquisition.
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