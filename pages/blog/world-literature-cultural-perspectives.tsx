import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function WorldLiteratureBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is world literature?",
      answer: "World literature refers to literary works from all around the globe, not limited to any single national tradition or language. It encompasses works from different cultures, languages, and historical periods, highlighting the diversity of human experience and expression. The term also refers to works that have transcended their original cultural context to speak to universal human experiences."
    },
    {
      question: "Why is reading world literature important?",
      answer: "Reading world literature broadens perspectives, introduces readers to different cultural contexts and worldviews, and fosters empathy by exposing readers to diverse human experiences. It helps readers understand global connections, historical contexts, and the shared aspects of human experience across cultures. World literature also showcases different narrative techniques and literary traditions."
    },
    {
      question: "How has translation impacted world literature?",
      answer: "Translation has been crucial to world literature, making works accessible to readers across language barriers. However, translation inevitably involves interpretation and cultural adaptation, as translators must make decisions about preserving cultural context versus making works accessible to new audiences. Translation has facilitated cultural exchange and the spread of literary influence across borders."
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
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      <Head>
        <title>World Literature: Cultural Perspectives - Literature | HAM BLOGS</title>
        <meta name="description" content="Exploring diverse voices and narratives from global literary traditions." />
        <link rel="canonical" href="https://ham-blogs.com/blog/world-literature-cultural-perspectives" />
      </Head>

      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-cyan-600 hover:text-cyan-800 font-medium flex items-center"
            >
              ← Back to Literature
            </button>
            <div className="flex space-x-4">
              <button 
                onClick={() => toggleBookmark('main')}
                className={`p-2 rounded-full ${bookmarks.includes('main') ? 'bg-cyan-500 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">World Literature: Cultural Perspectives</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">🌍 Literature</span>
            <span>⏱️ 15 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            Exploring diverse voices and narratives from global literary traditions
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Introduction to World Literature <button onClick={() => toggleBookmark('intro')} className="ml-2 text-cyan-500">★</button></h2>
          <p>
            World literature encompasses the vast collection of literary works from all cultures, languages, and historical periods across the globe. It transcends national and linguistic boundaries, offering readers a panoramic view of human experience, imagination, and artistic expression. This diverse body of work includes ancient epics, classical masterpieces, contemporary fiction, poetry, and drama from every corner of the world, providing insights into different cultural values, historical contexts, and universal human experiences.
          </p>
          
          <p>
            The concept of world literature has evolved significantly over time, moving from a Western-centric view to a more inclusive understanding that recognizes the value of literary traditions from all cultures. This shift acknowledges that literary excellence and innovation have emerged from every continent and culture, enriching the global literary landscape with diverse voices, narrative techniques, and perspectives on the human condition.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Classical World Literature <button onClick={() => toggleBookmark('classical')} className="ml-2 text-cyan-500">★</button></h2>
          <h3 className="text-cyan-600">Ancient Epics and Myths</h3>
          <p>
            Classical world literature includes foundational texts that have shaped human thought and culture for millennia. The Epic of Gilgamesh from ancient Mesopotamia, Homer's "Iliad" and "Odyssey" from ancient Greece, and Vyasa's "Mahabharata" from ancient India represent some of humanity's earliest literary achievements. These works explore fundamental themes such as heroism, mortality, friendship, and the relationship between humans and the divine, establishing narrative patterns that continue to influence literature today.
          </p>

          <h3 className="text-cyan-600">Medieval and Renaissance Works</h3>
          <p>
            Medieval literature includes works like "The Tale of Genji" by Murasaki Shikibu, often considered the world's first novel, and "The Divine Comedy" by Dante Alighieri. These works demonstrate the rich literary traditions that developed independently in different cultures, each addressing universal themes through culturally specific lenses. The diversity of these works illustrates how different societies approached fundamental questions about existence, morality, and the human condition.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Regional Literary Traditions <button onClick={() => toggleBookmark('regional')} className="ml-2 text-cyan-500">★</button></h2>
          <p>
            Each region of the world has developed distinctive literary traditions that reflect its unique cultural values, historical experiences, and aesthetic principles. African literature encompasses oral traditions, colonial and postcolonial narratives, and contemporary voices that address both local and global concerns. Latin American literature includes magical realism, exemplified by Gabriel García Márquez, alongside political testimonies and indigenous narratives that reflect the continent's complex history.
          </p>

          <p>
            Asian literature encompasses diverse traditions from China, Japan, India, the Middle East, and other regions, each with its own aesthetic principles, narrative forms, and philosophical foundations. From the haiku tradition in Japan to the epic poetry of Persia, from Chinese classical novels to the spiritual poetry of the Sufi tradition, these works demonstrate the breadth and depth of global literary achievement.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Contemporary Global Voices <button onClick={() => toggleBookmark('contemporary')} className="ml-2 text-cyan-500">★</button></h2>
          <p>
            Contemporary world literature continues to expand with voices from previously underrepresented regions and communities. Authors like Chinua Achebe, Toni Morrison, Salman Rushdie, Haruki Murakami, and Elena Ferrante have brought global perspectives to international audiences, exploring themes of identity, migration, cultural conflict, and globalization. These works often blend local cultural elements with universal themes, creating literature that speaks to both specific communities and global audiences.
          </p>

          <p>
            The contemporary period has also seen increased attention to translation, making works from dozens of languages accessible to international readers. Literary prizes and publishing initiatives have helped elevate voices from every continent, demonstrating that literary innovation and excellence continue to emerge from all cultural contexts. The internet and digital platforms have further facilitated the global exchange of literary works and ideas.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Impact and Significance <button onClick={() => toggleBookmark('impact')} className="ml-2 text-cyan-500">★</button></h2>
          <p>
            World literature serves as a bridge between cultures, fostering understanding and empathy by exposing readers to different ways of experiencing and interpreting the world. It demonstrates the universality of human concerns—love, loss, ambition, fear, hope—while celebrating the diversity of cultural expressions and solutions to common human challenges. This literature also preserves cultural knowledge and perspectives that might otherwise be lost to globalization.
          </p>

          <p>
            The study and appreciation of world literature also challenges readers to reconsider their assumptions and broaden their perspectives. By encountering different narrative traditions, philosophical frameworks, and aesthetic principles, readers develop a more nuanced understanding of human experience and cultural diversity. This exposure is increasingly valuable in our interconnected world.
          </p>
        </section>

        <section className="bg-cyan-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-cyan-700">Interactive Quiz</h2>
          {!isQuizActive ? (
            <button 
              onClick={() => setIsQuizActive(true)}
              className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors"
            >
              Test Your Knowledge
            </button>
          ) : (
            <div className="space-y-6">
              <div>
                <p className="font-medium mb-2 text-gray-700">1. What is a characteristic of world literature?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) Limited to Western traditions</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) Encompasses works from all cultures and languages</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Only includes ancient texts</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) Written exclusively in English</span></label>
              </div>

              <div>
                <p className="font-medium mb-2 text-gray-700">2. Which of these is an example of classical world literature?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) The Epic of Gilgamesh</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) A recent bestseller</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) A contemporary novel</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) A local newspaper</span></label>
              </div>

              <button 
                onClick={checkQuizAnswers}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4"
              >
                Check Answers
              </button>
              
              {showQuizResults && (
                <div className="mt-4 p-4 bg-white/70 rounded border border-cyan-300">
                  <h3 className="font-bold mb-2 text-cyan-700">Results:</h3>
                  <p className="text-gray-700">Question 1: {quizAnswers.q1 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - World literature encompasses works from all cultures and languages.</p>
                  <p className="text-gray-700">Question 2: {quizAnswers.q2 === 'A' ? '✓ Correct' : '✗ Incorrect (Correct: A)'} - The Epic of Gilgamesh is a classical work of world literature.</p>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-700">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-blue-200 pb-4">
                <h3 className="font-semibold text-cyan-700">{faq.question}</h3>
                <p className="mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <nav className="border-t border-cyan-200 pt-6 mt-8">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Previous Article</h3>
              <Link href="/blog/poetry-art-craft-expression" className="text-cyan-600 hover:underline">
                ← Poetry: Art, Craft, and Expression
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Next Article</h3>
              <Link href="/blog/genre-fiction-mystery-science-fiction-fantasy" className="text-cyan-600 hover:underline">
                Genre Fiction: Mystery, Science Fiction, and Fantasy →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}