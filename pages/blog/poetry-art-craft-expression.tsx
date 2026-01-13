import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function PoetryArtBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is the difference between rhythm and meter in poetry?",
      answer: "Rhythm refers to the pattern of stressed and unstressed syllables in spoken poetry, creating a beat or flow. Meter is the structured, regular pattern of rhythm established by poetic feet (like iambs, trochees, etc.). While rhythm can be more natural and variable, meter is a deliberate, measurable pattern that poets use to create specific effects."
    },
    {
      question: "What is free verse poetry?",
      answer: "Free verse is poetry that does not follow regular metrical patterns or rhyme schemes. It allows poets to break traditional conventions and organize their work according to the rhythms of natural speech or other organizing principles. Free verse poets still use other poetic devices like imagery, metaphor, and sound patterns to create meaning."
    },
    {
      question: "What are some common poetic devices?",
      answer: "Common poetic devices include metaphor and simile (comparison techniques), alliteration and assonance (sound repetition), imagery (appealing to the senses), symbolism (representing ideas), personification (giving human qualities to non-human things), and enjambment (continuing a sentence across line breaks). These devices enhance meaning and create emotional effects."
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Head>
        <title>Poetry: Art, Craft, and Expression - Literature | HAM BLOGS</title>
        <meta name="description" content="Understanding the nuances of poetic form, meter, and the power of condensed literary expression." />
        <link rel="canonical" href="https://ham-blogs.com/blog/poetry-art-craft-expression" />
      </Head>

      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-green-600 hover:text-green-800 font-medium flex items-center"
            >
              ← Back to Literature
            </button>
            <div className="flex space-x-4">
              <button 
                onClick={() => toggleBookmark('main')}
                className={`p-2 rounded-full ${bookmarks.includes('main') ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Poetry: Art, Craft, and Expression</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">🎭 Literature</span>
            <span>⏱️ 12 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            Understanding the nuances of poetic form, meter, and the power of condensed literary expression
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Introduction to Poetry <button onClick={() => toggleBookmark('intro')} className="ml-2 text-green-500">★</button></h2>
          <p>
            Poetry represents one of the most concentrated and refined forms of literary expression, using carefully chosen language to evoke emotion, create imagery, and convey meaning in ways that prose often cannot achieve. Unlike other literary forms, poetry emphasizes the sound, rhythm, and visual arrangement of words as integral elements of meaning. The art of poetry lies in its ability to compress profound experiences and insights into compact, powerful expressions that resonate with readers across time and culture.
          </p>
          
          <p>
            Poetry's unique characteristics include its attention to sound patterns, its use of condensed language, and its reliance on imagery and metaphor to create meaning. The form allows poets to explore the full potential of language, experimenting with rhythm, rhyme, and structure to enhance the emotional and intellectual impact of their work. From ancient oral traditions to contemporary spoken word, poetry continues to evolve while maintaining its essential focus on the power of language.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Poetic Forms and Structures <button onClick={() => toggleBookmark('forms')} className="ml-2 text-green-500">★</button></h2>
          <h3 className="text-green-600">Traditional Forms</h3>
          <p>
            Traditional poetic forms include the sonnet, with its fourteen lines and specific rhyme scheme; the villanelle, featuring two refrains and a complex pattern of repetition; and the haiku, a three-line poem traditionally focusing on nature. These forms provide structural constraints that challenge poets to work within established patterns while expressing original ideas. Each form offers unique possibilities for meaning and effect.
          </p>

          <h3 className="text-green-600">Free Verse</h3>
          <p>
            Free verse poetry abandons traditional metrical patterns and rhyme schemes, allowing poets greater freedom in organizing their work. This form emphasizes the rhythms of natural speech and allows for more flexible line breaks and stanza arrangements. Poets like Walt Whitman, T.S. Eliot, and contemporary writers have used free verse to explore themes and emotions that might be constrained by traditional forms.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Sound and Rhythm in Poetry <button onClick={() => toggleBookmark('sound')} className="ml-2 text-green-500">★</button></h2>
          <p>
            Sound patterns play a crucial role in poetry, creating musical qualities that enhance meaning and emotional impact. Rhyme schemes create expectations and connections between words, while alliteration and assonance add sonic textures that reinforce themes and mood. The interplay between stressed and unstressed syllables creates rhythm that can mirror the poem's content or provide contrast to deepen meaning.
          </p>

          <p>
            Meter, the regular pattern of stressed and unstressed syllables, provides structural foundation for many poems. Common meters include iambic pentameter (five pairs of unstressed/stressed syllables), trochaic tetrameter (four pairs of stressed/unstressed syllables), and anapestic trimeter (three pairs of two unstressed syllables followed by a stressed syllable). Understanding meter helps readers appreciate how poets use rhythm to enhance meaning.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Imagery and Symbolism <button onClick={() => toggleBookmark('imagery')} className="ml-2 text-green-500">★</button></h2>
          <p>
            Poetry's condensed format makes imagery particularly powerful, allowing poets to create vivid sensory experiences in just a few words. Metaphor and simile enable poets to draw connections between seemingly unrelated concepts, creating new insights and meanings. Symbolism allows poets to embed multiple layers of meaning within single images, words, or phrases, rewarding careful readers with deeper interpretations.
          </p>

          <p>
            The economy of poetic language means that every word must carry its weight, leading poets to choose words not only for their denotation but also for their connotation, sound, and relationship to other words in the poem. This careful attention to language creates poems that yield new meanings with each reading and demonstrate the full potential of linguistic expression.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Contemporary Poetry and Innovation <button onClick={() => toggleBookmark('contemporary')} className="ml-2 text-green-500">★</button></h2>
          <p>
            Contemporary poetry continues to evolve, incorporating new forms and subjects while maintaining poetry's essential focus on the power of language. Spoken word and slam poetry have brought poetry to new audiences, emphasizing performance and accessibility. Digital platforms have created new venues for poetry publication and community building, while visual poetry experiments with the arrangement of text on the page as an integral part of meaning.
          </p>

          <p>
            Contemporary poets continue to address social justice, identity, technology, and environmental concerns, using poetry's unique capacity for emotional expression and linguistic innovation to engage with current issues. The diversity of voices in contemporary poetry has expanded the range of subjects and styles, proving poetry's continued relevance and adaptability to changing cultural contexts.
          </p>
        </section>

        <section className="bg-green-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-700">Interactive Quiz</h2>
          {!isQuizActive ? (
            <button 
              onClick={() => setIsQuizActive(true)}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Test Your Knowledge
            </button>
          ) : (
            <div className="space-y-6">
              <div>
                <p className="font-medium mb-2 text-gray-700">1. How many lines does a traditional sonnet have?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) 8 lines</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) 10 lines</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) 14 lines</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) 16 lines</span></label>
              </div>

              <div>
                <p className="font-medium mb-2 text-gray-700">2. What does free verse poetry NOT include?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) Imagery</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) Metaphor</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) Regular metrical patterns</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) Emotion</span></label>
              </div>

              <button 
                onClick={checkQuizAnswers}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4"
              >
                Check Answers
              </button>
              
              {showQuizResults && (
                <div className="mt-4 p-4 bg-white/70 rounded border border-green-300">
                  <h3 className="font-bold mb-2 text-green-700">Results:</h3>
                  <p className="text-gray-700">Question 1: {quizAnswers.q1 === 'C' ? '✓ Correct' : '✗ Incorrect (Correct: C)'} - A traditional sonnet has 14 lines.</p>
                  <p className="text-gray-700">Question 2: {quizAnswers.q2 === 'C' ? '✓ Correct' : '✗ Incorrect (Correct: C)'} - Free verse does not include regular metrical patterns.</p>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="bg-emerald-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-emerald-700">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-700">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-emerald-200 pb-4">
                <h3 className="font-semibold text-green-700">{faq.question}</h3>
                <p className="mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <nav className="border-t border-green-200 pt-6 mt-8">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Previous Article</h3>
              <Link href="/blog/contemporary-fiction-trends-innovation" className="text-green-600 hover:underline">
                ← Contemporary Fiction: Trends and Innovation
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Next Article</h3>
              <Link href="/blog/world-literature-cultural-perspectives" className="text-green-600 hover:underline">
                World Literature: Cultural Perspectives →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}