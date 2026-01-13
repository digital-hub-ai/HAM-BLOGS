import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function ContemporaryFictionBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What distinguishes contemporary fiction from modern fiction?",
      answer: "Contemporary fiction refers to works written recently (typically from the 1970s/80s to present) that reflect current social, cultural, and technological realities. Modern fiction generally refers to works from the early-to-mid 20th century (roughly 1900-1960s) that broke with traditional narrative forms. Contemporary fiction often deals with current issues like technology, globalization, and evolving social norms."
    },
    {
      question: "What are some current trends in contemporary fiction?",
      answer: "Current trends include diverse voices and perspectives, blending of genres, exploration of identity and belonging, focus on social justice themes, use of digital communication in narratives, and experimental narrative structures. Many contemporary authors also engage with environmental concerns, technology's impact on society, and the effects of globalization on individual lives."
    },
    {
      question: "How has technology influenced contemporary fiction?",
      answer: "Technology has influenced contemporary fiction in multiple ways: authors incorporate digital communication (texts, emails, social media) into narratives, explore themes about artificial intelligence and virtual reality, examine privacy and surveillance concerns, and address how technology affects human relationships. Some authors also experiment with digital formats and interactive storytelling methods."
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
        <title>Contemporary Fiction: Trends and Innovation - Literature | HAM BLOGS</title>
        <meta name="description" content="Examining modern literary trends and innovative storytelling techniques in today's fiction." />
        <link rel="canonical" href="https://ham-blogs.com/blog/contemporary-fiction-trends-innovation" />
      </Head>

      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-purple-600 hover:text-purple-800 font-medium flex items-center"
            >
              ← Back to Literature
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contemporary Fiction: Trends and Innovation</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">📖 Literature</span>
            <span>⏱️ 13 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            Examining modern literary trends and innovative storytelling techniques in today's fiction
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Introduction to Contemporary Fiction <button onClick={() => toggleBookmark('intro')} className="ml-2 text-purple-500">★</button></h2>
          <p>
            Contemporary fiction encompasses works created in the recent past and present, reflecting the current social, cultural, and technological landscape. Unlike modernist literature, which emerged in the early 20th century as a response to industrialization and world wars, contemporary fiction grapples with the complexities of the digital age, globalization, identity politics, and environmental concerns. These works often experiment with form and narrative structure while addressing pressing contemporary issues.
          </p>
          
          <p>
            Contemporary authors draw from an unprecedented diversity of voices and experiences, challenging traditional Western literary canons and incorporating perspectives from previously marginalized communities. This inclusivity has enriched the landscape of contemporary fiction, introducing readers to varied cultural contexts, languages, and storytelling traditions that expand the possibilities of what fiction can accomplish.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Major Trends in Contemporary Fiction <button onClick={() => toggleBookmark('trends')} className="ml-2 text-purple-500">★</button></h2>
          <h3 className="text-purple-600">Genre Blending</h3>
          <p>
            Contemporary fiction increasingly defies traditional genre boundaries, with authors mixing elements of literary fiction, science fiction, fantasy, mystery, and romance. Works like Kazuo Ishiguro's "Never Let Me Go" blend dystopian science fiction with literary realism, while authors like Carmen Maria Machado incorporate horror and magical realism into feminist narratives. This genre fluidity allows for innovative storytelling approaches and broader thematic exploration.
          </p>

          <h3 className="text-purple-600">Narrative Experimentation</h3>
          <p>
            Contemporary authors continue to push the boundaries of traditional narrative structure. Experimental works incorporate elements like second-person narration, non-linear timelines, multiple perspectives, and unconventional formatting. Authors like Jennifer Egan, David Mitchell, and Ali Smith have created novels that challenge reader expectations while maintaining emotional depth and thematic coherence.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Diverse Voices and Perspectives <button onClick={() => toggleBookmark('voices')} className="ml-2 text-purple-500">★</button></h2>
          <p>
            The contemporary literary landscape has seen an unprecedented expansion of diverse voices, with authors from various ethnic, cultural, and social backgrounds contributing to the canon. Writers like Chimamanda Ngozi Adichie, Mohsin Hamid, and Yaa Gyasi bring global perspectives to English-language fiction, while authors like Ocean Vuong and Tommy Orange explore identity and belonging from unique cultural vantage points.
          </p>

          <p>
            This diversification has led to richer explorations of identity, immigration, cultural conflict, and the complexity of modern life. These voices challenge traditional Western narrative assumptions and introduce readers to different storytelling traditions, mythologies, and worldviews that expand the possibilities of contemporary fiction.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Technology and Digital Age Themes <button onClick={() => toggleBookmark('technology')} className="ml-2 text-purple-500">★</button></h2>
          <p>
            Contemporary fiction frequently engages with technology's impact on human relationships, identity, and society. Authors like Dave Eggers, Jennifer Egan, and Ted Chiang explore themes of digital privacy, artificial intelligence, social media's effects on human connection, and the nature of consciousness in an increasingly digital world. These works examine how technology reshapes fundamental human experiences and relationships.
          </p>

          <p>
            Some contemporary authors incorporate digital communication directly into their narratives, including emails, text messages, and social media posts as integral parts of the story. This technique reflects how technology has become inseparable from modern life and demonstrates fiction's ability to adapt to changing communication methods.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Social Justice and Activism <button onClick={() => toggleBookmark('justice')} className="ml-2 text-purple-500">★</button></h2>
          <p>
            Contemporary fiction increasingly addresses social justice themes, including racial inequality, gender identity, economic disparity, and environmental concerns. Works like "The Hate U Give" by Angie Thomas, "The Handmaid's Tale" by Margaret Atwood, and "Parable of the Sower" by Octavia Butler use speculative and realistic fiction to examine systemic inequalities and imagine alternative futures.
          </p>

          <p>
            This trend reflects fiction's traditional role as a mirror for society while demonstrating its capacity to envision change and inspire action. Contemporary authors use their platforms to raise awareness about social issues and encourage readers to consider their role in creating a more just society.
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
                <p className="font-medium mb-2 text-gray-700">1. What is a notable trend in contemporary fiction?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) Strict adherence to traditional genres</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) Genre blending and narrative experimentation</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Focus only on historical settings</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) Avoidance of technology themes</span></label>
              </div>

              <div>
                <p className="font-medium mb-2 text-gray-700">2. How has contemporary fiction changed regarding diverse voices?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) It has become more homogeneous</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) It has expanded to include more diverse voices and perspectives</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) It has eliminated diverse voices</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) It has remained unchanged</span></label>
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
                  <p className="text-gray-700">Question 1: {quizAnswers.q1 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - Contemporary fiction is known for genre blending and narrative experimentation.</p>
                  <p className="text-gray-700">Question 2: {quizAnswers.q2 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - Contemporary fiction has expanded to include more diverse voices and perspectives.</p>
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
              <Link href="/blog/classic-literature-timeless-masterpieces" className="text-purple-600 hover:underline">
                ← Classic Literature: Timeless Masterpieces
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Next Article</h3>
              <Link href="/blog/poetry-art-craft-expression" className="text-purple-600 hover:underline">
                Poetry: Art, Craft, and Expression →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}