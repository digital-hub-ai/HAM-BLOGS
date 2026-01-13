import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function ClassicLiteratureBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What defines a work as 'classic' literature?",
      answer: "Classic literature typically refers to works that have stood the test of time, continue to be read and studied, and have had significant influence on literature and society. These works often explore universal themes, demonstrate exceptional artistic merit, and provide insight into the human condition. They tend to be recognized by critics and scholars as having enduring value and relevance."
    },
    {
      question: "Why is reading classic literature still relevant today?",
      answer: "Classic literature remains relevant because it explores timeless themes such as love, power, justice, morality, and the human condition. These works provide historical context for understanding our current world, offer different perspectives on universal challenges, and showcase masterful storytelling techniques. They also serve as cultural touchstones that help us understand references in modern literature and media."
    },
    {
      question: "What are some characteristics of classic literature?",
      answer: "Classic literature often features complex characters, rich symbolism, sophisticated themes, and high-quality prose. These works tend to offer multiple layers of meaning that reward repeated readings. They frequently address fundamental questions about human existence, society, and morality. Many classics also demonstrate innovation in narrative technique or contribute to the development of literary genres."
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Head>
        <title>Classic Literature: Timeless Masterpieces - Literature | HAM BLOGS</title>
        <meta name="description" content="Exploring the enduring themes and literary techniques of classic works that continue to influence readers today." />
        <link rel="canonical" href="https://ham-blogs.com/blog/classic-literature-timeless-masterpieces" />
      </Head>

      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-amber-600 hover:text-amber-800 font-medium flex items-center"
            >
              ← Back to Literature
            </button>
            <div className="flex space-x-4">
              <button 
                onClick={() => toggleBookmark('main')}
                className={`p-2 rounded-full ${bookmarks.includes('main') ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Classic Literature: Timeless Masterpieces</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">📚 Literature</span>
            <span>⏱️ 14 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            Exploring the enduring themes and literary techniques of classic works that continue to influence readers today
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Introduction to Classic Literature <button onClick={() => toggleBookmark('intro')} className="ml-2 text-amber-500">★</button></h2>
          <p>
            Classic literature represents the pinnacle of literary achievement, comprising works that have transcended their original context to speak to successive generations of readers. These texts often exhibit exceptional artistic merit, explore universal themes, and demonstrate innovative techniques that have influenced countless subsequent works. The designation of "classic" is not merely temporal—it implies enduring relevance and artistic significance that resonates across cultural and temporal boundaries.
          </p>
          
          <p>
            Classic literature serves as a cultural repository, preserving the thoughts, values, and experiences of different eras while offering insights that remain relevant to contemporary readers. These works often grapple with fundamental questions about human nature, society, morality, and existence, presenting complex characters and situations that illuminate the human condition in all its complexity.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Characteristics of Classic Works <button onClick={() => toggleBookmark('characteristics')} className="ml-2 text-amber-500">★</button></h2>
          <h3 className="text-amber-600">Universal Themes</h3>
          <p>
            Classic literature explores themes that transcend specific historical or cultural contexts. Love, death, power, justice, redemption, and the search for meaning appear in countless classic works, demonstrating their fundamental importance to human experience. These themes resonate with readers across different times and cultures, contributing to the enduring appeal of classic literature.
          </p>

          <h3 className="text-amber-600">Literary Innovation</h3>
          <p>
            Many classic works broke new ground in terms of narrative technique, characterization, or thematic exploration. James Joyce's stream-of-consciousness technique in "Ulysses," Shakespeare's development of complex psychological characters, and the structural innovations of ancient epics all contributed to the evolution of literary art. These innovations continue to influence contemporary writers and provide models for literary expression.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Influential Literary Periods <button onClick={() => toggleBookmark('periods')} className="ml-2 text-amber-500">★</button></h2>
          <p>
            Classic literature spans numerous historical periods, each contributing distinctive voices and innovations. The epic poems of Homer established foundational narrative techniques. Renaissance literature, exemplified by Shakespeare, developed complex psychological characterization. The Romantic period emphasized emotion and individual experience, while Victorian literature often examined social conditions and moral questions. Modernist works revolutionized narrative structure and perspective.
          </p>

          <p>
            Each period responded to its particular historical and cultural context while producing works that achieved universal significance. The diversity of these periods demonstrates the richness and variety of classic literature, which encompasses different genres, styles, and approaches to storytelling while maintaining high artistic standards and thematic depth.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Notable Authors and Works <button onClick={() => toggleBookmark('authors')} className="ml-2 text-amber-500">★</button></h2>
          <p>
            Classic literature includes works by authors whose names have become synonymous with literary excellence. William Shakespeare's plays continue to be performed worldwide, demonstrating their enduring relevance. Charles Dickens' social critiques remain pertinent to discussions of inequality and social reform. Jane Austen's exploration of social dynamics and personal relationships continues to influence contemporary fiction.
          </p>

          <p>
            International classics such as Cervantes' "Don Quixote," Tolstoy's "War and Peace," and Murasaki Shikibu's "The Tale of Genji" represent the universality of great literature. These works, originating in different cultures and time periods, all demonstrate the power of literature to illuminate the human experience and provide insight into different societies and historical moments.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Relevance in Contemporary Times <button onClick={() => toggleBookmark('relevance')} className="ml-2 text-amber-500">★</button></h2>
          <p>
            Despite their historical origins, classic works continue to speak to contemporary readers. The themes explored in classic literature—power, corruption, love, betrayal, social justice, and personal growth—remain relevant to modern life. These works provide historical perspective that helps readers understand the development of contemporary society and the persistence of certain human challenges and aspirations.
          </p>

          <p>
            Classic literature also serves as a foundation for understanding contemporary works, which often reference or build upon classical texts. Many modern adaptations, retellings, and reinterpretations of classic works demonstrate their continued vitality and relevance. The techniques and themes pioneered by classic authors continue to influence contemporary writers, proving the enduring value of these foundational texts.
          </p>
        </section>

        <section className="bg-amber-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-amber-700">Interactive Quiz</h2>
          {!isQuizActive ? (
            <button 
              onClick={() => setIsQuizActive(true)}
              className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Test Your Knowledge
            </button>
          ) : (
            <div className="space-y-6">
              <div>
                <p className="font-medium mb-2 text-gray-700">1. Which of the following is NOT typically a characteristic of classic literature?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) Universal themes</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) High artistic merit</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Temporary popularity</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) Enduring relevance</span></label>
              </div>

              <div>
                <p className="font-medium mb-2 text-gray-700">2. What does the term 'classic literature' primarily refer to?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) Any old book</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) Works with enduring value and significance</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) Books published before 1900</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) Only works taught in schools</span></label>
              </div>

              <button 
                onClick={checkQuizAnswers}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4"
              >
                Check Answers
              </button>
              
              {showQuizResults && (
                <div className="mt-4 p-4 bg-white/70 rounded border border-amber-300">
                  <h3 className="font-bold mb-2 text-amber-700">Results:</h3>
                  <p className="text-gray-700">Question 1: {quizAnswers.q1 === 'C' ? '✓ Correct' : '✗ Incorrect (Correct: C)'} - Classic literature is defined by enduring relevance, not temporary popularity.</p>
                  <p className="text-gray-700">Question 2: {quizAnswers.q2 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - Classic literature refers to works with enduring value and significance.</p>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="bg-orange-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-orange-700">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-700">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-orange-200 pb-4">
                <h3 className="font-semibold text-amber-700">{faq.question}</h3>
                <p className="mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <nav className="border-t border-amber-200 pt-6 mt-8">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Previous Article</h3>
              <Link href="/blog" className="text-amber-600 hover:underline">
                ← Back to Blog
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Next Article</h3>
              <Link href="/blog/contemporary-fiction-trends-innovation" className="text-amber-600 hover:underline">
                Contemporary Fiction: Trends and Innovation →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}