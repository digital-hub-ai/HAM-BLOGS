import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function ContemporaryArtMovementsBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What distinguishes contemporary art from modern art?",
      answer: "Contemporary art refers to art produced by artists living today, typically from the late 20th century to the present. Modern art refers to the period from the 1860s to the 1970s, characterized by a departure from traditional representation. Contemporary art is distinguished by its engagement with current social, political, and cultural issues, and its use of new media and technologies."
    },
    {
      question: "What is conceptual art?",
      answer: "Conceptual art is an art movement where the idea or concept behind the work takes precedence over traditional aesthetic and material concerns. The concept or idea becomes the artwork itself, often expressed through text, performance, or minimal physical manifestation. The emphasis is on intellectual engagement rather than visual appeal."
    },
    {
      question: "How has technology influenced contemporary art?",
      answer: "Technology has profoundly influenced contemporary art, leading to new mediums such as digital art, video art, virtual reality installations, and interactive pieces. Artists use technology to explore themes of connectivity, digital identity, and the impact of technology on society. Social media has also changed how art is shared, discussed, and consumed."
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <Head>
        <title>Contemporary Art Movements and Innovations - Visual Arts | HAM BLOGS</title>
        <meta name="description" content="Examining modern art movements and their cultural impact on society." />
        <link rel="canonical" href="https://ham-blogs.com/blog/contemporary-art-movements-innovations" />
      </Head>

      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-purple-600 hover:text-purple-800 font-medium flex items-center"
            >
              ← Back to Visual Arts
            </button>
            <div className="flex space-x-4">
              <button 
                onClick={() => toggleBookmark('main')}
                className={`p-2 rounded-full ${bookmarks.includes('main') ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contemporary Art Movements and Innovations</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">🎨 Visual Arts</span>
            <span>⏱️ 13 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            Examining modern art movements and their cultural impact on society
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Introduction to Contemporary Art <button onClick={() => toggleBookmark('intro')} className="ml-2 text-purple-500">★</button></h2>
          <p>
            Contemporary art encompasses the diverse and innovative artistic practices of our time, typically referring to art produced from the late 20th century to the present day. This period is characterized by a departure from the modernist emphasis on medium specificity and formal concerns, embracing instead a pluralistic approach that incorporates various media, interdisciplinary collaboration, and engagement with current social, political, and cultural issues.
          </p>
          
          <p>
            Contemporary artists work across a wide range of mediums, from traditional painting and sculpture to digital art, installation, performance, and conceptual works. The boundaries between different art forms have become increasingly fluid, allowing for innovative hybrid practices that challenge conventional categorizations. This period is also marked by globalization, which has expanded the definition of contemporary art to include voices and perspectives from around the world.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Key Contemporary Art Movements <button onClick={() => toggleBookmark('movements')} className="ml-2 text-purple-500">★</button></h2>
          <h3 className="text-purple-600">Conceptual Art</h3>
          <p>
            Conceptual art emerged in the 1960s and prioritizes ideas over aesthetic or material concerns. The concept or idea becomes the artwork itself, often expressed through text, performance, or minimal physical manifestation. Artists like Sol LeWitt and Joseph Kosuth explored the relationship between language, meaning, and art, challenging traditional notions of what constitutes an artwork.
          </p>

          <h3 className="text-purple-600">Neo-Expressionism</h3>
          <p>
            Neo-Expressionism emerged in the late 1970s and early 1980s as a return to figurative painting with emotional intensity and gestural brushwork. Artists like Jean-Michel Basquiat, Julian Schnabel, and David Salle created works that combined expressive content with references to art history, popular culture, and social commentary. This movement represented a reaction against Minimalism and Conceptual art.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Innovative Mediums and Technologies <button onClick={() => toggleBookmark('mediums')} className="ml-2 text-purple-500">★</button></h2>
          <p>
            Contemporary art has embraced new technologies and mediums that were unimaginable to previous generations. Digital art, video installations, virtual reality experiences, and interactive artworks have expanded the possibilities for artistic expression. Artists like Bill Viola, Pipilotti Rist, and Rafael Lozano-Hemmer have pushed the boundaries of what art can be through the integration of technology.
          </p>

          <p>
            Installation art transforms entire spaces into immersive environments, creating experiences that engage multiple senses. Artists like Anselm Kiefer, Doris Salcedo, and Olafur Eliasson create large-scale installations that address themes ranging from history and memory to environmental concerns and social justice. These works often blur the boundaries between art, architecture, and design.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Social and Political Engagement <button onClick={() => toggleBookmark('engagement')} className="ml-2 text-purple-500">★</button></h2>
          <p>
            Contemporary art is deeply engaged with social and political issues, reflecting the complexities of our globalized world. Artists address topics such as identity, race, gender, sexuality, immigration, environmental destruction, and economic inequality. This engagement is evident in works by artists like Kara Walker, Ai Weiwei, and Theaster Gates, who use their art as a platform for social commentary and activism.
          </p>

          <p>
            The democratization of art through digital platforms has also enabled new forms of participatory and collaborative art. Social practice art involves community engagement and often addresses local issues. Artists work directly with communities to create projects that have social impact, challenging the traditional gallery/museum system and expanding the definition of where and how art can be made and experienced.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Global Perspectives and Cultural Exchange <button onClick={() => toggleBookmark('global')} className="ml-2 text-purple-500">★</button></h2>
          <p>
            Contemporary art reflects the increasing interconnectedness of the global art world. Artists from Africa, Asia, Latin America, and other regions have gained international recognition, challenging the Western-centric view of art history. This has led to a more inclusive and diverse understanding of contemporary art, with biennials and art fairs around the world showcasing voices from different cultural contexts.
          </p>

          <p>
            The influence of non-Western philosophies, aesthetics, and spiritual traditions has enriched contemporary art practices. Artists draw on their cultural heritage while engaging with global contemporary art discourse, creating hybrid forms that transcend traditional geographical and cultural boundaries. This exchange has fostered a more nuanced understanding of contemporary art as a truly global phenomenon.
          </p>
        </section>

        <section className="bg-purple-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-700">Interactive Quiz</h2>
          {!isQuizActive ? (
            <button 
              onClick={() => setIsQuizActive(true)}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Test Your Knowledge
            </button>
          ) : (
            <div className="space-y-6">
              <div>
                <p className="font-medium mb-2 text-gray-700">1. What is the main characteristic of conceptual art?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) Emphasis on beautiful aesthetics</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) The idea or concept takes precedence over traditional aesthetic concerns</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Use of only traditional materials</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) Focus on historical subjects</span></label>
              </div>

              <div>
                <p className="font-medium mb-2 text-gray-700">2. What time period does contemporary art typically refer to?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) 1860s to 1970s</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) Ancient times to Renaissance</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) Late 20th century to present day</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) 1700s to 1800s</span></label>
              </div>

              <button 
                onClick={checkQuizAnswers}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4"
              >
                Check Answers
              </button>
              
              {showQuizResults && (
                <div className="mt-4 p-4 bg-white/70 rounded border border-purple-300">
                  <h3 className="font-bold mb-2 text-purple-700">Results:</h3>
                  <p className="text-gray-700">Question 1: {quizAnswers.q1 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - Conceptual art prioritizes ideas over traditional aesthetic concerns.</p>
                  <p className="text-gray-700">Question 2: {quizAnswers.q2 === 'C' ? '✓ Correct' : '✗ Incorrect (Correct: C)'} - Contemporary art typically refers to late 20th century to present day.</p>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="bg-indigo-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-700">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-700">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-indigo-200 pb-4">
                <h3 className="font-semibold text-purple-700">{faq.question}</h3>
                <p className="mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <nav className="border-t border-purple-200 pt-6 mt-8">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Previous Article</h3>
              <Link href="/blog/renaissance-masterpieces-art-techniques" className="text-purple-600 hover:underline">
                ← Renaissance Masterpieces and Art Techniques
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Next Article</h3>
              <Link href="/blog/photography-techniques-composition" className="text-purple-600 hover:underline">
                Photography Techniques and Composition →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}