import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ClassicPoeticMovementsFromRomanticismToModernism() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string | null}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What characterized the Romantic movement in poetry?",
      answer: "Romanticism emphasized emotion, nature, individualism, and the sublime. Poets focused on personal experience, imagination, and the beauty of the natural world, often rebelling against industrialization and rationalism."
    },
    {
      question: "Who were major poets of the Victorian era?",
      answer: "Major Victorian poets included Alfred Lord Tennyson, Robert Browning, Elizabeth Barrett Browning, and Christina Rossetti. They explored themes of faith, doubt, social reform, and moral complexity."
    },
    {
      question: "What defines Modernist poetry?",
      answer: "Modernist poetry features experimental forms, fragmented narratives, stream of consciousness, and a break from traditional conventions. It often reflects disillusionment with traditional values and seeks new ways to express modern experience."
    },
    {
      question: "What was the Pre-Raphaelite movement?",
      answer: "The Pre-Raphaelites were a group of artists and poets who rejected industrialized, mechanized approaches to art. They emphasized detailed observation of nature, medieval themes, and elaborate symbolism."
    },
    {
      question: "How did World War I influence poetry?",
      answer: "WWI profoundly changed poetry, introducing themes of disillusionment, horror of war, and loss of innocence. Poets like Wilfred Owen and Siegfried Sassoon wrote realistically about war's brutality, contrasting with earlier romanticized depictions."
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "Which poet is most associated with the Romantic movement?",
      options: [
        "T.S. Eliot",
        "William Wordsworth",
        "W.H. Auden",
        "Philip Larkin"
      ],
      correctAnswer: "William Wordsworth"
    },
    {
      question: "What was a central theme of Romantic poetry?",
      options: [
        "Industrial progress",
        "Emotion and nature",
        "Scientific rationalism",
        "Urban life"
      ],
      correctAnswer: "Emotion and nature"
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
        <title>Classic Poetic Movements: From Romanticism to Modernism | HAM-BLOGS</title>
        <meta name="description" content="Examining influential poetic movements that shaped literature and exploring the characteristics that define each era." />
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
              <span className="inline-block px-3 py-1 text-sm font-semibold text-orange-700 bg-orange-100 rounded-full">Poetry</span>
              <span className="inline-block px-3 py-1 ml-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full">History</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Classic Poetic Movements: From Romanticism to Modernism</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">January 6, 2026</span>
              <span className="mr-4">•</span>
              <span>12 min read</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                The history of poetry is marked by distinct movements that reflect the changing social, political, and philosophical currents of their times. From the emotional intensity of Romanticism to the fragmented innovation of Modernism, each movement brought new perspectives, techniques, and themes that continue to influence poetry today. Understanding these movements provides insight into the evolution of poetic expression and helps readers appreciate the context in which great works were created.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Romantic Revolution (Late 18th - Early 19th Century)</h2>
              
              <p className="text-gray-700 mb-4">
                Romanticism emerged as a reaction against the Industrial Revolution and the Age of Enlightenment's emphasis on reason and scientific rationalism. This movement placed enormous value on emotion, individualism, and the sublime power of nature. Romantic poets sought to express personal feelings and experiences, often drawing inspiration from the natural world and the supernatural.
              </p>
              
              <p className="text-gray-700 mb-4">
                William Wordsworth and Samuel Taylor Coleridge launched the Romantic movement with their collaborative work "Lyrical Ballads" (1798), which emphasized the use of everyday language to express profound emotions. Wordsworth famously defined poetry as "the spontaneous overflow of powerful feelings," emphasizing the importance of emotion over reason.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Key Romantic Poets and Works</h3>
              
              <p className="text-gray-700 mb-4">
                William Wordsworth celebrated the beauty and spiritual power of nature in works like "Tintern Abbey" and "I Wandered Lonely as a Cloud." Samuel Taylor Coleridge explored the supernatural and mystical in poems like "The Rime of the Ancient Mariner." Lord Byron, Percy Bysshe Shelley, and John Keats formed the second generation of Romantics, pushing boundaries with their radical politics and innovative verse forms.
              </p>
              
              <p className="text-gray-700 mb-4">
                The Romantic movement established the concept of the poet as a visionary figure, someone with special insight into the mysteries of existence. This period saw the rise of the artist as a tortured genius, struggling against conventional society to express profound truths.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Victorian Poetry (1837-1901)</h2>
              
              <p className="text-gray-700 mb-4">
                The Victorian era was characterized by rapid industrialization, scientific advancement, and social change. Victorian poets grappled with questions of faith, morality, and social responsibility in an increasingly complex world. The period produced some of the most technically accomplished poetry in the English language, often featuring elaborate imagery and sophisticated formal techniques.
              </p>
              
              <p className="text-gray-700 mb-4">
                Alfred Lord Tennyson, the Poet Laureate for much of Queen Victoria's reign, reflected the era's tensions between religious faith and scientific discovery. His "In Memoriam" dealt with grief and the search for meaning, while "The Charge of the Light Brigade" demonstrated his ability to capture national sentiment.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Social and Religious Themes</h3>
              
              <p className="text-gray-700 mb-4">
                Victorian poets addressed social issues like poverty, industrial conditions, and women's rights. Elizabeth Barrett Browning's "The Cry of the Children" highlighted the plight of child laborers, while Robert Browning explored psychological complexity in dramatic monologues.
              </p>
              
              <p className="text-gray-700 mb-4">
                The era was marked by religious questioning, particularly after Darwin's "Origin of Species" challenged traditional beliefs. Poets like Tennyson and Matthew Arnold expressed doubt and uncertainty while still seeking spiritual meaning.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Pre-Raphaelite Movement</h2>
              
              <p className="text-gray-700 mb-4">
                The Pre-Raphaelite Brotherhood, founded in 1848, included poets and artists who rejected industrialized, mechanized approaches to art. Dante Gabriel Rossetti, Christina Rossetti, and Algernon Charles Swinburne created works characterized by detailed observation of nature, medieval themes, and elaborate symbolism.
              </p>
              
              <p className="text-gray-700 mb-4">
                Pre-Raphaelite poetry featured intense emotional expression, sensuous imagery, and often explored themes of love, death, and spiritual longing. Their work influenced later movements like Aestheticism and Symbolism.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Aestheticism and Decadence</h3>
              
              <p className="text-gray-700 mb-4">
                Toward the end of the Victorian era, Aesthetic poets like Walter Pater and Oscar Wilde promoted "art for art's sake," emphasizing beauty and form over moral instruction. This movement influenced poetry with its emphasis on sensuous language and artistic refinement.
              </p>
              
              <p className="text-gray-700 mb-4">
                Decadent poets, particularly in France but also in England, explored themes of corruption, decay, and artificiality as reactions against bourgeois values. Their influence can be seen in the symbolist movement that followed.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Transition to Modernism</h2>
              
              <p className="text-gray-700 mb-4">
                The late 19th and early 20th centuries saw the emergence of movements that would culminate in Modernism. The Imagists, led by Ezra Pound and H.D. (Hilda Doolittle), emphasized clarity, precision, and economy of language. They rejected ornate Victorian diction in favor of direct treatment of subjects.
              </p>
              
              <p className="text-gray-700 mb-4">
                Symbolism, originating in France with poets like Charles Baudelaire, Paul Verlaine, and Arthur Rimbaud, influenced English poetry through poets like W.B. Yeats. Symbolist poetry used symbols and metaphors to evoke moods and suggest meanings rather than making direct statements.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Impact of World War I</h3>
              
              <p className="text-gray-700 mb-4">
                World War I shattered many of the assumptions that had characterized earlier poetry. Poets like Wilfred Owen, Siegfried Sassoon, and Rupert Brooke brought a new realism to poetry, depicting the horror and futility of war. This marked a decisive break with the idealistic, romantic notions of heroism and glory.
              </p>
              
              <p className="text-gray-700 mb-4">
                The war's impact was profound, creating a sense of disillusionment that would characterize much of Modernist poetry. Traditional forms and themes seemed inadequate to express the trauma of modern experience.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Early Modernist Experiments</h2>
              
              <p className="text-gray-700 mb-4">
                Modernist poetry emerged in the early 20th century as poets sought new forms and techniques to express the complexity of modern life. T.S. Eliot and Ezra Pound were central figures, advocating for innovations in form, language, and subject matter.
              </p>
              
              <p className="text-gray-700 mb-4">
                Modernist poetry featured fragmentation, multiple voices, and complex allusions. Works like Eliot's "The Waste Land" combined different cultural references and languages to create a collage-like effect that reflected the fractured nature of modern experience.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Characteristics of Modernist Poetry</h3>
              
              <p className="text-gray-700 mb-4">
                Modernist poetry abandoned traditional narrative structures in favor of stream of consciousness and free verse. It embraced difficulty and complexity, often requiring readers to work actively to understand the meaning.
              </p>
              
              <p className="text-gray-700 mb-4">
                The movement questioned traditional values and authorities, reflecting the uncertainties of a world transformed by industrialization, urbanization, and global warfare. Poets experimented with perspective, chronology, and form to capture the multifaceted nature of modern consciousness.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Regional Variations and Influences</h2>
              
              <p className="text-gray-700 mb-4">
                Poetic movements varied across different countries and cultures. American poets like Walt Whitman and Emily Dickinson developed unique voices that influenced later movements. Whitman's free verse and celebration of democracy contrasted sharply with the formal constraints of British poetry.
              </p>
              
              <p className="text-gray-700 mb-4">
                Irish poetry maintained its distinct character, with W.B. Yeats drawing on Celtic mythology and folklore while also engaging with Modernist techniques. Scottish poetry, represented by Robert Burns and later Hugh MacDiarmid, preserved regional identity and dialect.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Women Poets and Marginal Voices</h3>
              
              <p className="text-gray-700 mb-4">
                Women poets faced significant challenges in gaining recognition, but figures like Christina Rossetti, Elizabeth Barrett Browning, and later, Amy Lowell and H.D., made important contributions to each movement.
              </p>
              
              <p className="text-gray-700 mb-4">
                Poets from colonized nations began to assert their voices, adapting European forms to express indigenous experiences and perspectives. This trend would become more pronounced in the post-colonial period.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Legacy and Influence</h2>
              
              <p className="text-gray-700 mb-4">
                Each poetic movement left lasting influences on subsequent generations. Romanticism's emphasis on individual expression and nature continues to resonate in contemporary poetry. Victorian technical accomplishment set standards for craftsmanship that persist today.
              </p>
              
              <p className="text-gray-700 mb-4">
                Modernism's experimental spirit opened up new possibilities for poetic expression, influencing everything from free verse to performance poetry. The movement's willingness to break conventions continues to inspire contemporary poets.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Reevaluating the Canon</h3>
              
              <p className="text-gray-700 mb-4">
                Recent scholarship has expanded the traditional canon to include previously marginalized voices, including women poets, poets of color, and writers from different cultural backgrounds. This broader perspective reveals the richness and diversity of each movement.
              </p>
              
              <p className="text-gray-700 mb-4">
                Understanding these movements in their historical context helps appreciate both their innovations and limitations, providing a foundation for understanding contemporary poetry.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Reading and Appreciating Different Movements</h2>
              
              <p className="text-gray-700 mb-4">
                To appreciate poetry from different movements, consider the historical context, the poet's intentions, and the formal innovations of the period. Understanding the prevailing attitudes and challenges of each era illuminates the poetry's meaning and significance.
              </p>
              
              <p className="text-gray-700 mb-4">
                Pay attention to how poets responded to their predecessors and contemporaries. The dialogue between poets across movements creates a rich tapestry of literary development that continues to evolve.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h3>
              
              <p className="text-gray-700 mb-4">
                The progression from Romanticism to Modernism represents a fundamental transformation in poetic expression, reflecting broader changes in society, philosophy, and culture. Each movement contributed essential elements to the development of poetry as an art form, establishing techniques and themes that continue to influence poets today. Understanding these movements provides the context necessary to appreciate the richness and complexity of poetic tradition.
              </p>
              
              <p className="text-gray-700 mb-4">
                The legacy of these movements reminds us that poetry is not merely an aesthetic pursuit but a vital response to the human experience, constantly evolving to meet the expressive needs of each generation.
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