import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function PhotographyTechniquesBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is the rule of thirds in photography?",
      answer: "The rule of thirds is a compositional guideline that divides an image into nine equal parts by two equally spaced horizontal lines and two equally spaced vertical lines. The important elements of the image should be placed along these lines or at their intersections to create more balanced and engaging photographs."
    },
    {
      question: "What is the exposure triangle?",
      answer: "The exposure triangle consists of three camera settings that work together to control the amount of light reaching the camera sensor: aperture (controls depth of field and light entry), shutter speed (controls motion blur and light duration), and ISO (controls sensor sensitivity). Balancing these three elements is essential for proper exposure."
    },
    {
      question: "What is the difference between prime and zoom lenses?",
      answer: "Prime lenses have a fixed focal length and typically offer wider maximum apertures, better image quality, and are often lighter and more compact. Zoom lenses have variable focal lengths, allowing photographers to adjust their field of view without changing lenses, offering versatility but often at the cost of maximum aperture and optical quality compared to primes."
    }
  ];

  const toggleBookmark = (section: string) => {
    if (bookmarks.includes(section)) {
      setBookmarks(bookmarks.filter(item => item !== section));
    } else {
      setBookmarks([...bookmarks, section]);
    }
  };

  const handleQuizAnswer = (questionId: string, answer: string) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionId]: answer
    });
  };

  const checkQuizAnswers = () => {
    setShowQuizResults(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50">
      <Head>
        <title>Photography Techniques and Composition - Visual Arts | HAM BLOGS</title>
        <meta name="description" content="Mastering the art of visual storytelling through photography." />
        <link rel="canonical" href="https://ham-blogs.com/blog/photography-techniques-composition" />
      </Head>

      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-gray-600 hover:text-gray-800 font-medium flex items-center"
            >
              ← Back to Visual Arts
            </button>
            <div className="flex space-x-4">
              <button 
                onClick={() => toggleBookmark('main')}
                className={`p-2 rounded-full ${bookmarks.includes('main') ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                aria-label="Bookmark"
              >
                ★
              </button>
            </div>
          </div>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Photography Techniques and Composition</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">📸 Visual Arts</span>
            <span>⏱️ 12 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            Mastering the art of visual storytelling through photography
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Introduction to Photography <button onClick={() => toggleBookmark('intro')} className="ml-2 text-gray-500">★</button></h2>
          <p>
            Photography is both an art form and a technical discipline that combines creative vision with technical knowledge. It involves capturing light to create lasting images that communicate emotions, tell stories, or document moments in time. Modern photography encompasses diverse genres from portrait and landscape to documentary and conceptual photography, each requiring different technical approaches and aesthetic considerations.
          </p>
          
          <p>
            The evolution of photography from film to digital has democratized the medium, making it accessible to millions of people worldwide. Digital cameras and smartphones have enabled instant feedback and experimentation, while post-processing software has expanded the creative possibilities for photographers. Despite these technological advances, fundamental principles of composition, lighting, and visual storytelling remain essential for creating compelling images.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Fundamental Camera Techniques <button onClick={() => toggleBookmark('techniques')} className="ml-2 text-gray-500">★</button></h2>
          <h3 className="text-gray-600">The Exposure Triangle</h3>
          <p>
            Understanding the exposure triangle—aperture, shutter speed, and ISO—is fundamental to photography. Aperture controls the size of the lens opening and affects depth of field. Shutter speed determines how long the sensor is exposed to light, controlling motion blur. ISO adjusts the sensor's sensitivity to light. Balancing these three elements allows photographers to achieve proper exposure while achieving desired creative effects.
          </p>

          <h3 className="text-gray-600">Focus and Depth of Field</h3>
          <p>
            Depth of field refers to the range of distance in an image that appears acceptably sharp. Wide apertures (low f-numbers) create shallow depth of field, isolating subjects from their backgrounds. Narrow apertures (high f-numbers) increase depth of field, keeping more of the scene in focus. Selective focus is a powerful tool for directing viewer attention and creating visual hierarchy in images.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Composition Principles <button onClick={() => toggleBookmark('composition')} className="ml-2 text-gray-500">★</button></h2>
          <p>
            Composition is the arrangement of visual elements within the frame to create a compelling image. The rule of thirds places important elements along imaginary grid lines or at their intersections. Leading lines guide the viewer's eye through the image toward the main subject. Framing uses elements within the scene to create a natural border around the subject, adding depth and context.
          </p>

          <p>
            Symmetry and patterns can create visually pleasing images, while breaking symmetry can add tension and interest. The use of negative space—empty areas around the subject—can emphasize the subject and create a sense of calm or isolation. Understanding how colors interact and using color theory can enhance the emotional impact of photographs.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Lighting and Its Impact <button onClick={() => toggleBookmark('lighting')} className="ml-2 text-gray-500">★</button></h2>
          <p>
            Light is the fundamental element of photography. The quality, direction, and color of light dramatically affect the mood and appearance of photographs. Golden hour—shortly after sunrise or before sunset—provides warm, soft light that is flattering for portraits and landscapes. Blue hour offers cool, even illumination that works well for cityscapes and architectural photography.
          </p>

          <p>
            Hard light, such as direct midday sun, creates strong shadows and high contrast, which can be used creatively for dramatic effects. Soft light, found on overcast days or in shaded areas, produces even illumination with minimal shadows. Understanding how to work with different lighting conditions and how to modify or supplement light with reflectors, diffusers, or artificial sources is essential for consistent results.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Advanced Techniques and Post-Processing <button onClick={() => toggleBookmark('advanced')} className="ml-2 text-gray-500">★</button></h2>
          <p>
            Modern digital photography involves both capture and post-processing. RAW format captures more image data than JPEG, allowing for greater flexibility in post-processing adjustments like exposure, white balance, and color grading. Software like Adobe Lightroom and Photoshop enables photographers to enhance their images, correct imperfections, and realize their creative vision.
          </p>

          <p>
            Advanced techniques include HDR (High Dynamic Range) imaging to capture scenes with extreme contrast, focus stacking for maximum sharpness throughout the image, and panoramic stitching for wide-angle views. Long exposure photography can create ethereal effects with moving water or clouds, or capture light trails from moving vehicles. Understanding when and how to use these techniques expands creative possibilities.
          </p>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">Interactive Quiz</h2>
          {!isQuizActive ? (
            <button 
              onClick={() => setIsQuizActive(true)}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Test Your Knowledge
            </button>
          ) : (
            <div className="space-y-6">
              <div>
                <p className="font-medium mb-2 text-gray-700">1. What are the three elements of the exposure triangle?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) Resolution, contrast, saturation</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) Aperture, shutter speed, ISO</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Focus, zoom, flash</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) Color, brightness, sharpness</span></label>
              </div>

              <div>
                <p className="font-medium mb-2 text-gray-700">2. What does a wide aperture (low f-number) create?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) Deep depth of field</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) Shallow depth of field</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) No effect on depth of field</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) Increased sharpness throughout the image</span></label>
              </div>

              <button 
                onClick={checkQuizAnswers}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4"
              >
                Check Answers
              </button>
              
              {showQuizResults && (
                <div className="mt-4 p-4 bg-white/70 rounded border border-gray-300">
                  <h3 className="font-bold mb-2 text-gray-700">Results:</h3>
                  <p className="text-gray-700">Question 1: {quizAnswers.q1 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - The exposure triangle consists of aperture, shutter speed, and ISO.</p>
                  <p className="text-gray-700">Question 2: {quizAnswers.q2 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - A wide aperture (low f-number) creates shallow depth of field.</p>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="bg-slate-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-700">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-700">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-slate-200 pb-4">
                <h3 className="font-semibold text-gray-700">{faq.question}</h3>
                <p className="mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <nav className="border-t border-gray-200 pt-6 mt-8">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Previous Article</h3>
              <Link href="/blog/contemporary-art-movements-innovations" className="text-gray-600 hover:underline">
                ← Contemporary Art Movements and Innovations
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Next Article</h3>
              <Link href="/blog/sculpture-through-ages-materials" className="text-gray-600 hover:underline">
                Sculpture Through the Ages and Materials →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}