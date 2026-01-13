import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function DigitalArtFrontiersBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is the difference between digital art and computer art?",
      answer: "Digital art is a broad term encompassing all art created using digital technology. Computer art specifically refers to art created using computers, including generative art, algorithmic art, and computer graphics. Digital art also includes works created with tablets, smartphones, and other digital devices. Both terms overlap significantly, but digital art is the more inclusive term."
    },
    {
      question: "What is NFT art and how does it work?",
      answer: "NFT (Non-Fungible Token) art represents ownership of a unique digital asset on a blockchain. Each NFT contains identifying information that makes it distinct from other tokens. NFTs use blockchain technology to create a certificate of authenticity and ownership for digital artworks, allowing them to be bought, sold, and traded like physical art pieces. However, the technology and market for NFTs are still evolving."
    },
    {
      question: "How has digital art changed the art world?",
      answer: "Digital art has democratized art creation by making tools more accessible and affordable. It has enabled new forms of artistic expression, including interactive installations, virtual reality experiences, and generative art. Digital platforms have created new venues for exhibiting and selling art. The reproducibility of digital art has also challenged traditional concepts of originality and scarcity in the art market."
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <Head>
        <title>Digital Art: New Frontiers in Creative Expression - Visual Arts | HAM BLOGS</title>
        <meta name="description" content="How technology is transforming the landscape of artistic creation and expression." />
        <link rel="canonical" href="https://ham-blogs.com/blog/digital-art-new-frontiers" />
      </Head>

      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              ← Back to Visual Arts
            </button>
            <div className="flex space-x-4">
              <button 
                onClick={() => toggleBookmark('main')}
                className={`p-2 rounded-full ${bookmarks.includes('main') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Digital Art: New Frontiers in Creative Expression</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">💻 Visual Arts</span>
            <span>⏱️ 11 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            How technology is transforming the landscape of artistic creation and expression
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Introduction to Digital Art <button onClick={() => toggleBookmark('intro')} className="ml-2 text-blue-500">★</button></h2>
          <p>
            Digital art represents a revolutionary expansion of artistic expression, leveraging technology to create works that were previously impossible. From early experiments with computer graphics to today's sophisticated virtual reality installations, digital art has evolved rapidly alongside technological advancement. This medium encompasses everything from digital painting and 3D modeling to interactive installations, generative art, and virtual reality experiences.
          </p>
          
          <p>
            The accessibility of digital tools has democratized art creation, allowing artists to experiment without the expense of traditional materials. Digital art also enables new forms of collaboration between artists and technologists, pushing the boundaries of what art can be. The reproducibility of digital works has also sparked discussions about originality, authenticity, and value in the art world.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Digital Art Forms and Techniques <button onClick={() => toggleBookmark('forms')} className="ml-2 text-blue-500">★</button></h2>
          <h3 className="text-blue-600">Digital Painting and Illustration</h3>
          <p>
            Digital painting utilizes software like Adobe Photoshop, Procreate, or Corel Painter to create images that mimic traditional media or explore entirely new aesthetic possibilities. Artists use graphics tablets to create works with the feel of oil painting, watercolor, or pencil sketches, while taking advantage of digital tools like layers, unlimited colors, and non-destructive editing.
          </p>

          <h3 className="text-blue-600">3D Modeling and Animation</h3>
          <p>
            Three-dimensional digital art involves creating virtual objects and environments using software like Blender, Maya, or ZBrush. Artists can sculpt, texture, and animate digital models with a level of detail and complexity that rivals traditional sculpture and filmmaking. This form of digital art is widely used in film, video games, architecture, and virtual experiences.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Generative and Algorithmic Art <button onClick={() => toggleBookmark('generative')} className="ml-2 text-blue-500">★</button></h2>
          <p>
            Generative art uses algorithms, systems, or autonomous processes to create artwork. Artists write code or set parameters that allow the computer to generate visual elements, often with an element of randomness or emergence. This approach challenges traditional notions of authorship and control, as the artist creates the system but not necessarily the final outcome. Notable artists like Vera Molnar and Harold Cohen pioneered this field.
          </p>

          <p>
            Contemporary artists use machine learning and artificial intelligence to create generative works. Neural networks can be trained on artistic styles to create new images, or used to generate music, poetry, and other forms of creative expression. These technologies raise philosophical questions about creativity, authorship, and the role of human intention in art.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Interactive and Immersive Experiences <button onClick={() => toggleBookmark('interactive')} className="ml-2 text-blue-500">★</button></h2>
          <p>
            Digital technology enables interactive art that responds to viewers' movements, gestures, or inputs. Artists like Rafael Lozano-Hemmer create installations that use sensors, cameras, and custom software to generate unique experiences for each visitor. These works often blur the line between artist, artwork, and audience, creating participatory experiences that change with each encounter.
          </p>

          <p>
            Virtual and augmented reality technologies offer new frontiers for digital artists. VR allows viewers to enter and navigate completely virtual environments, while AR overlays digital elements onto the real world. These technologies create unprecedented possibilities for immersive storytelling and experiential art, allowing artists to construct worlds that would be impossible in physical reality.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Challenges and Opportunities <button onClick={() => toggleBookmark('challenges')} className="ml-2 text-blue-500">★</button></h2>
          <p>
            Digital art faces unique challenges regarding preservation and authenticity. Digital files can become obsolete as software and hardware evolve, requiring ongoing migration and emulation strategies. The reproducibility of digital works also challenges traditional art market concepts of scarcity and value. However, blockchain technology and NFTs (Non-Fungible Tokens) have emerged as potential solutions for establishing ownership and authenticity.
          </p>

          <p>
            The rapid pace of technological change presents both challenges and opportunities for digital artists. Staying current with new tools and platforms requires continuous learning, but also provides endless possibilities for innovation. The global reach of digital platforms allows artists to share their work with worldwide audiences instantly, creating new opportunities for recognition and monetization.
          </p>
        </section>

        <section className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Interactive Quiz</h2>
          {!isQuizActive ? (
            <button 
              onClick={() => setIsQuizActive(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Test Your Knowledge
            </button>
          ) : (
            <div className="space-y-6">
              <div>
                <p className="font-medium mb-2 text-gray-700">1. What is generative art?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) Art created with traditional materials</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) Art that uses algorithms or systems to create the work</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Art displayed in galleries</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) Art inspired by nature</span></label>
              </div>

              <div>
                <p className="font-medium mb-2 text-gray-700">2. What does NFT stand for in the context of digital art?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) New File Type</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) Network File Transfer</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) Non-Fungible Token</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) Numeric Format Transfer</span></label>
              </div>

              <button 
                onClick={checkQuizAnswers}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4"
              >
                Check Answers
              </button>
              
              {showQuizResults && (
                <div className="mt-4 p-4 bg-white/70 rounded border border-blue-300">
                  <h3 className="font-bold mb-2 text-blue-700">Results:</h3>
                  <p className="text-gray-700">Question 1: {quizAnswers.q1 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - Generative art uses algorithms or systems to create the work.</p>
                  <p className="text-gray-700">Question 2: {quizAnswers.q2 === 'C' ? '✓ Correct' : '✗ Incorrect (Correct: C)'} - NFT stands for Non-Fungible Token.</p>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="bg-cyan-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-cyan-700">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-700">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-cyan-200 pb-4">
                <h3 className="font-semibold text-blue-700">{faq.question}</h3>
                <p className="mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <nav className="border-t border-blue-200 pt-6 mt-8">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Previous Article</h3>
              <Link href="/blog/sculpture-through-ages-materials" className="text-blue-600 hover:underline">
                ← Sculpture Through the Ages and Materials
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Next Article</h3>
              <Link href="/blog/art-restoration-preservation-techniques" className="text-blue-600 hover:underline">
                Art Restoration and Preservation Techniques →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}