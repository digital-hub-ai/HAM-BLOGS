import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function ArtRestorationBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What are the main goals of art restoration?",
      answer: "The main goals of art restoration are to preserve artworks for future generations, stabilize deteriorating materials, and, when appropriate, return artworks to their original appearance. Conservators aim to maintain the artist's intent while ensuring the physical survival of the piece. Documentation of the restoration process is also crucial for historical and scientific purposes."
    },
    {
      question: "What is the difference between restoration and conservation?",
      answer: "Restoration refers to the process of returning an artwork to its original state, often involving repairs and aesthetic improvements. Conservation is a broader term that encompasses preventive care, stabilization, and restoration. Conservation prioritizes the long-term preservation of cultural heritage and may involve minimal intervention to maintain the artwork's current state."
    },
    {
      question: "What tools and technologies are used in modern art restoration?",
      answer: "Modern art restoration uses a range of tools from traditional brushes and solvents to advanced technologies like lasers, x-ray machines, infrared reflectography, and microscopes. Digital imaging, 3D scanning, and computer modeling help conservators plan treatments and document conditions. Specialized tools include microspatulas, sable brushes, and suction tables for paper restoration."
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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <Head>
        <title>Art Restoration and Preservation Techniques - Visual Arts | HAM BLOGS</title>
        <meta name="description" content="The science and art behind preserving cultural treasures for future generations." />
        <link rel="canonical" href="https://ham-blogs.com/blog/art-restoration-preservation-techniques" />
      </Head>

      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-rose-600 hover:text-rose-800 font-medium flex items-center"
            >
              ← Back to Visual Arts
            </button>
            <div className="flex space-x-4">
              <button 
                onClick={() => toggleBookmark('main')}
                className={`p-2 rounded-full ${bookmarks.includes('main') ? 'bg-rose-500 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Art Restoration and Preservation Techniques</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">🖼️ Visual Arts</span>
            <span>⏱️ 16 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            The science and art behind preserving cultural treasures for future generations
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Introduction to Art Restoration <button onClick={() => toggleBookmark('intro')} className="ml-2 text-rose-500">★</button></h2>
          <p>
            Art restoration and conservation represent the marriage of scientific knowledge, artistic sensitivity, and historical scholarship. These disciplines are dedicated to preserving cultural heritage for future generations while respecting the integrity and authenticity of original artworks. Professional conservators combine expertise in chemistry, materials science, art history, and studio art to address the complex challenges of preserving diverse artworks across different media and time periods.
          </p>
          
          <p>
            The field of art conservation has evolved significantly over the centuries, from traditional craft-based approaches to today's rigorous scientific methodology. Modern conservators use advanced diagnostic tools and techniques to analyze artworks, understand their condition, and develop appropriate treatment strategies. This scientific approach ensures that restoration efforts are based on thorough understanding rather than guesswork, minimizing risks to precious cultural artifacts.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Conservation Ethics and Philosophy <button onClick={() => toggleBookmark('ethics')} className="ml-2 text-rose-500">★</button></h2>
          <h3 className="text-rose-600">Minimal Intervention Principle</h3>
          <p>
            Contemporary conservation philosophy emphasizes minimal intervention, prioritizing the preservation of original materials and artistic intent. Conservators follow the principle of reversibility, ensuring that any additions or modifications can be safely removed in the future without damaging the original artwork. Documentation of all treatments is meticulous, creating permanent records for future conservators and scholars.
          </p>

          <h3 className="text-rose-600">Authenticity and Integrity</h3>
          <p>
            Determining the appropriate level of restoration requires careful consideration of an artwork's historical context and intended appearance. Conservators must distinguish between original elements and later additions or alterations. The goal is to preserve the artist's original vision while acknowledging the passage of time and the artwork's history of changes, wear, and restoration attempts.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Diagnostic Techniques and Analysis <button onClick={() => toggleBookmark('diagnostic')} className="ml-2 text-rose-500">★</button></h2>
          <p>
            Modern art conservation relies heavily on scientific analysis to understand an artwork's materials, construction, and condition. X-radiography reveals underlying compositions and structural elements invisible to the naked eye. Infrared reflectography penetrates paint layers to expose underdrawings and changes made by the artist during the creative process. UV fluorescence examination highlights areas of previous restoration and reveals the condition of varnish layers.
          </p>

          <p>
            Microscopic analysis allows conservators to examine paint cross-sections, identifying original pigments and understanding the stratigraphy of an artwork. Advanced techniques like X-ray fluorescence spectroscopy and Raman spectroscopy can identify specific pigments and materials without requiring samples. These non-invasive methods provide crucial information for developing appropriate treatment plans while minimizing risk to the artwork.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Treatment Techniques by Medium <button onClick={() => toggleBookmark('treatment')} className="ml-2 text-rose-500">★</button></h2>
          <p>
            Different art forms require specialized conservation approaches. Canvas paintings may need structural support, cleaning, inpainting, and varnish renewal. Paper-based works like drawings and prints require careful attention to paper condition, foxing removal, and proper mounting techniques. Sculptures in stone, metal, or wood present unique challenges related to structural stability, corrosion, and environmental factors.
          </p>

          <p>
            Textile conservation addresses the fragility of fabric artworks, requiring specialized cleaning techniques and support systems. Photographs present unique challenges due to the instability of photographic materials and the rapid obsolescence of photographic processes. Digital art conservation is an emerging field addressing the challenges of preserving artworks created with rapidly evolving technologies.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Preventive Conservation and Environmental Control <button onClick={() => toggleBookmark('preventive')} className="ml-2 text-rose-500">★</button></h2>
          <p>
            Preventive conservation focuses on slowing deterioration through environmental controls and proper handling procedures. Temperature and humidity stability are critical for preserving most art forms, as fluctuations cause expansion and contraction that can lead to cracking, flaking, and structural damage. Light exposure, particularly ultraviolet radiation, can cause fading and chemical degradation of sensitive materials.
          </p>

          <p>
            Proper storage, handling, and transport protocols are essential components of preventive conservation. Custom mounts and housings protect artworks from physical damage, while appropriate display conditions ensure longevity. Integrated Pest Management (IPM) protects collections from insects and rodents that can cause irreparable damage to organic materials.
          </p>
        </section>

        <section className="bg-rose-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-rose-700">Interactive Quiz</h2>
          {!isQuizActive ? (
            <button 
              onClick={() => setIsQuizActive(true)}
              className="bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors"
            >
              Test Your Knowledge
            </button>
          ) : (
            <div className="space-y-6">
              <div>
                <p className="font-medium mb-2 text-gray-700">1. What is the principle of reversibility in art conservation?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) All artworks should be reversible</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) Any additions or modifications should be removable without damaging the original</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Artworks should be able to be flipped</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) Colors should be reversible</span></label>
              </div>

              <div>
                <p className="font-medium mb-2 text-gray-700">2. Which of these is NOT a diagnostic technique used in art conservation?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) X-radiography</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) Infrared reflectography</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) UV fluorescence examination</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) Oil painting</span></label>
              </div>

              <button 
                onClick={checkQuizAnswers}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4"
              >
                Check Answers
              </button>
              
              {showQuizResults && (
                <div className="mt-4 p-4 bg-white/70 rounded border border-rose-300">
                  <h3 className="font-bold mb-2 text-rose-700">Results:</h3>
                  <p className="text-gray-700">Question 1: {quizAnswers.q1 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - Reversibility means additions/modifications should be removable without damaging the original.</p>
                  <p className="text-gray-700">Question 2: {quizAnswers.q2 === 'D' ? '✓ Correct' : '✗ Incorrect (Correct: D)'} - Oil painting is an artistic technique, not a diagnostic tool.</p>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="bg-pink-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-pink-700">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-700">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-pink-200 pb-4">
                <h3 className="font-semibold text-rose-700">{faq.question}</h3>
                <p className="mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <nav className="border-t border-rose-200 pt-6 mt-8">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Previous Article</h3>
              <Link href="/blog/digital-art-new-frontiers" className="text-rose-600 hover:underline">
                ← Digital Art: New Frontiers in Creative Expression
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Next Article</h3>
              <Link href="/blog" className="text-rose-600 hover:underline">
                Back to All Articles →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}