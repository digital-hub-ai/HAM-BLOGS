import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function SculptureThroughAgesBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What are the main sculptural techniques?",
      answer: "The main sculptural techniques include carving (subtracting material from a solid block), modeling (adding and manipulating soft materials like clay), casting (pouring liquid material into molds), and assembling (combining different materials). Each technique offers different possibilities and challenges for sculptors, and many artists combine multiple techniques in their work."
    },
    {
      question: "What is the difference between relief and in-the-round sculpture?",
      answer: "Relief sculpture is carved or modeled to project from a background surface but remains attached to it, creating a three-dimensional effect while maintaining a flat base. Examples include bas-relief and high-relief sculptures. In-the-round (or freestanding) sculpture is fully three-dimensional and can be viewed from all sides, completely detached from any background surface."
    },
    {
      question: "How has contemporary sculpture evolved from traditional approaches?",
      answer: "Contemporary sculpture has expanded beyond traditional materials and techniques to include installation art, performance art, digital sculpture, and mixed media works. Contemporary sculptors often address social, political, and environmental issues, and may use unconventional materials like recycled objects, light, sound, or even living elements. The boundaries between sculpture, architecture, and other art forms have become increasingly fluid."
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
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-yellow-50">
      <Head>
        <title>Sculpture Through the Ages and Materials - Visual Arts | HAM BLOGS</title>
        <meta name="description" content="From ancient stone carvings to modern installations, the evolution of sculptural art." />
        <link rel="canonical" href="https://ham-blogs.com/blog/sculpture-through-ages-materials" />
      </Head>

      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-stone-600 hover:text-stone-800 font-medium flex items-center"
            >
              ← Back to Visual Arts
            </button>
            <div className="flex space-x-4">
              <button 
                onClick={() => toggleBookmark('main')}
                className={`p-2 rounded-full ${bookmarks.includes('main') ? 'bg-stone-500 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sculpture Through the Ages and Materials</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">🗿 Visual Arts</span>
            <span>⏱️ 15 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            From ancient stone carvings to modern installations, the evolution of sculptural art
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Introduction to Sculpture <button onClick={() => toggleBookmark('intro')} className="ml-2 text-stone-500">★</button></h2>
          <p>
            Sculpture is one of the oldest and most enduring forms of artistic expression, representing humanity's desire to create three-dimensional objects that convey meaning, emotion, and aesthetic value. From prehistoric figurines to contemporary installations, sculpture has evolved through countless civilizations, techniques, and materials, reflecting the cultural values, beliefs, and technological capabilities of each era.
          </p>
          
          <p>
            Unlike painting or drawing, sculpture exists in real space, sharing the same dimensional world as the viewer. This physical presence creates a unique relationship between the artwork and the observer, allowing for multiple viewpoints and often inviting tactile engagement. The three-dimensional nature of sculpture also means that artists must consider their work from all angles, creating complex spatial relationships that change with the viewer's position.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Ancient and Classical Traditions <button onClick={() => toggleBookmark('ancient')} className="ml-2 text-stone-500">★</button></h2>
          <h3 className="text-stone-600">Egyptian and Greek Sculpture</h3>
          <p>
            Ancient Egyptian sculpture was characterized by rigid, formal poses and symbolic representation, often serving religious or funerary purposes. Works like the Great Sphinx and the statues of pharaohs demonstrate mastery of stone carving techniques and a highly stylized aesthetic that remained consistent for millennia. Egyptian sculptors worked primarily in stone, creating monumental works that emphasized permanence and divine authority.
          </p>

          <h3 className="text-stone-600">Roman Innovations</h3>
          <p>
            Roman sculpture built upon Greek precedents while developing their own innovations, particularly in portraiture and historical relief. Romans excelled in realistic portraiture that captured individual characteristics and expressions. They also perfected techniques for large-scale architectural sculpture and developed new approaches to depicting narrative scenes in relief, as seen in Trajan's Column and the Arch of Constantine.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Medieval and Renaissance Developments <button onClick={() => toggleBookmark('medieval_renaissance')} className="ml-2 text-stone-500">★</button></h2>
          <p>
            Medieval sculpture was predominantly religious in nature, adorning cathedrals and churches with elaborate stone carvings, tympanums, and capitals. Gothic sculpture became increasingly naturalistic, moving away from the abstract stylization of earlier periods. The Renaissance marked a revolutionary period for sculpture, with artists like Donatello, Michelangelo, and Bernini creating works that combined technical mastery with humanistic themes and unprecedented psychological depth.
          </p>

          <p>
            Renaissance sculptors studied classical antiquity while developing new techniques and approaches. Michelangelo's "David" and "Pietà" demonstrate the period's emphasis on anatomical accuracy, emotional expression, and technical virtuosity. Bronze casting techniques reached new heights during this period, allowing for complex poses and detailed surface work that would have been impossible in stone.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Materials and Techniques Through Time <button onClick={() => toggleBookmark('materials')} className="ml-2 text-stone-500">★</button></h2>
          <p>
            Throughout history, sculptors have worked with materials readily available in their regions and within their technological capabilities. Stone (marble, granite, sandstone) dominated ancient and classical periods due to its durability and availability. Wood carving was common in medieval Europe, while bronze casting allowed for hollow sculptures with complex poses.
          </p>

          <p>
            The modern period introduced new materials and techniques. Artists like Constantin Brancusi experimented with abstract forms in bronze and marble, while the 20th century saw the incorporation of industrial materials like steel, concrete, and plastics. Contemporary sculptors work with an ever-expanding range of materials including found objects, light, sound, and even living materials, pushing the boundaries of traditional sculptural practice.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Contemporary Sculpture and New Directions <button onClick={() => toggleBookmark('contemporary')} className="ml-2 text-stone-500">★</button></h2>
          <p>
            Contemporary sculpture has expanded beyond traditional forms and materials to include installation art, performance art, and conceptual works. Artists like Richard Serra create massive steel installations that transform architectural spaces, while Anish Kapoor explores the relationship between form, color, and perception. Land art or earthworks involve sculpting the landscape itself, creating works that interact with natural environments.
          </p>

          <p>
            Digital technology has introduced new possibilities for sculpture, including computer-aided design, 3D printing, and virtual reality sculptures. These technologies allow for precise planning and complex forms that would be difficult to achieve through traditional methods. Contemporary sculptors also address social, political, and environmental issues, using the physical presence of sculpture to make powerful statements about current events and conditions.
          </p>
        </section>

        <section className="bg-stone-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-stone-700">Interactive Quiz</h2>
          {!isQuizActive ? (
            <button 
              onClick={() => setIsQuizActive(true)}
              className="bg-stone-600 text-white px-6 py-3 rounded-lg hover:bg-stone-700 transition-colors"
            >
              Test Your Knowledge
            </button>
          ) : (
            <div className="space-y-6">
              <div>
                <p className="font-medium mb-2 text-gray-700">1. What is the difference between relief and in-the-round sculpture?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) Relief is painted, in-the-round is carved</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) Relief projects from a background surface, in-the-round is fully three-dimensional</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Relief is abstract, in-the-round is realistic</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) Relief uses stone, in-the-round uses metal</span></label>
              </div>

              <div>
                <p className="font-medium mb-2 text-gray-700">2. Which of these is NOT a traditional sculptural technique?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) Carving</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) Modeling</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) Casting</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) Oil painting</span></label>
              </div>

              <button 
                onClick={checkQuizAnswers}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4"
              >
                Check Answers
              </button>
              
              {showQuizResults && (
                <div className="mt-4 p-4 bg-white/70 rounded border border-stone-300">
                  <h3 className="font-bold mb-2 text-stone-700">Results:</h3>
                  <p className="text-gray-700">Question 1: {quizAnswers.q1 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - Relief projects from a background surface, in-the-round is fully three-dimensional.</p>
                  <p className="text-gray-700">Question 2: {quizAnswers.q2 === 'D' ? '✓ Correct' : '✗ Incorrect (Correct: D)'} - Oil painting is a painting technique, not a sculptural one.</p>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="bg-amber-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-amber-700">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-700">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-amber-200 pb-4">
                <h3 className="font-semibold text-stone-700">{faq.question}</h3>
                <p className="mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <nav className="border-t border-stone-200 pt-6 mt-8">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Previous Article</h3>
              <Link href="/blog/photography-techniques-composition" className="text-stone-600 hover:underline">
                ← Photography Techniques and Composition
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Next Article</h3>
              <Link href="/blog/digital-art-new-frontiers" className="text-stone-600 hover:underline">
                Digital Art: New Frontiers in Creative Expression →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}