import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function UnderstandingPoeticMeterRhythmAndForm() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string | null}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is poetic meter?",
      answer: "Poetic meter refers to the rhythmic structure of verses in poetry, determined by the pattern of stressed and unstressed syllables in each line. Common meters include iambic pentameter, trochaic tetrameter, and anapestic trimeter."
    },
    {
      question: "What is iambic pentameter?",
      answer: "Iambic pentameter is a metrical pattern consisting of five iambs per line, where an iamb is an unstressed syllable followed by a stressed syllable (da-DUM da-DUM da-DUM da-DUM da-DUM). Shakespeare frequently used this meter."
    },
    {
      question: "What are the different types of poetic forms?",
      answer: "Common poetic forms include sonnets (14 lines), haikus (three lines with 5-7-5 syllable pattern), villanelles (19 lines with specific repetition), free verse (no fixed meter or rhyme), and blank verse (unrhymed iambic pentameter)."
    },
    {
      question: "How does rhythm differ from meter?",
      answer: "Meter is the structured pattern of stressed and unstressed syllables, while rhythm is the actual sound and flow of the poem when read aloud. Rhythm can vary from the strict meter for artistic effect."
    },
    {
      question: "What is a foot in poetry?",
      answer: "A foot is the basic unit of meter in poetry, consisting of a combination of stressed and unstressed syllables. Common feet include the iamb (unstressed-stressed), trochee (stressed-unstressed), anapest (unstressed-unstressed-stressed), and dactyl (stressed-unstressed-unstressed)."
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "How many syllables does an iamb consist of?",
      options: [
        "One",
        "Two",
        "Three",
        "Four"
      ],
      correctAnswer: "Two"
    },
    {
      question: "What is the syllable pattern of an iamb?",
      options: [
        "Stressed-unstressed",
        "Unstressed-stressed",
        "Unstressed-unstressed-stressed",
        "Stressed-unstressed-unstressed"
      ],
      correctAnswer: "Unstressed-stressed"
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
        <title>Understanding Poetic Meter, Rhythm, and Form | HAM-BLOGS</title>
        <meta name="description" content="Exploring the foundational elements of poetry including meter, rhythm, rhyme schemes, and various poetic forms that create musical and structural beauty." />
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
              <span className="inline-block px-3 py-1 ml-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full">Fundamentals</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Understanding Poetic Meter, Rhythm, and Form</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">January 8, 2026</span>
              <span className="mr-4">•</span>
              <span>11 min read</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Poetry is an art form that relies heavily on the musical and structural elements of language. Understanding poetic meter, rhythm, and form is essential for appreciating the craft of poetry and for those who wish to write verse themselves. These elements work together to create the distinctive sound and feel that distinguishes poetry from prose, giving it its unique power to move, inspire, and resonate with readers.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Building Blocks of Meter</h2>
              
              <p className="text-gray-700 mb-4">
                Meter in poetry refers to the rhythmic structure of verses, determined by the pattern of stressed and unstressed syllables in each line. Think of it as the heartbeat of the poem, providing a predictable pulse that gives the verse its musical quality. The basic unit of meter is called a "foot," which consists of a combination of stressed and unstressed syllables.
              </p>
              
              <p className="text-gray-700 mb-4">
                The most common types of feet include the iamb (unstressed-stressed, as in "today"), the trochee (stressed-unstressed, as in "poetry"), the anapest (unstressed-unstressed-stressed, as in "understand"), and the dactyl (stressed-unstressed-unstressed, as in "poetic"). By combining these feet in various numbers and arrangements, poets create different meters that suit their subject matter and desired effect.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Common Meter Patterns</h3>
              
              <p className="text-gray-700 mb-4">
                Iambic pentameter is perhaps the most famous meter in English poetry, consisting of five iambs per line (ten syllables total). This meter closely approximates the natural rhythm of English speech and was used extensively by William Shakespeare in his plays and sonnets. An example of iambic pentameter is: "To be or not to be, that is the question."
              </p>
              
              <p className="text-gray-700 mb-4">
                Trochaic tetrameter consists of four trochees per line (eight syllables total) and often creates a more driving, emphatic rhythm. An example is: "Tyger Tyger, burning bright" from William Blake's "The Tyger." Anapestic trimeter, with three anapests per line (nine syllables total), creates a galloping rhythm often used in comic verse, as in Clement Clarke Moore's "A Visit from St. Nicholas."
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Rhythm: The Living Pulse of Poetry</h2>
              
              <p className="text-gray-700 mb-4">
                While meter provides the theoretical framework, rhythm is the actual sound and flow of the poem when read aloud. A skilled poet will vary the strict meter for artistic effect, creating subtle or dramatic shifts that enhance meaning and emotional impact. This variation keeps the poem from sounding monotonous while still maintaining the underlying pattern.
              </p>
              
              <p className="text-gray-700 mb-4">
                Poets might substitute a trochee for an iamb, add extra syllables, or pause mid-line (caesura) to create emphasis or change the rhythm. These variations must be intentional and serve the poem's meaning. When reading poetry aloud, pay attention to how the actual rhythm differs from the theoretical meter and consider why the poet made those choices.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Rhyme Schemes and Sound Patterns</h3>
              
              <p className="text-gray-700 mb-4">
                Rhyme occurs when words at the end of lines share similar sounds. The pattern of rhymes in a poem is described using letters, with each new rhyme assigned the next letter in sequence. For example, an ABAB rhyme scheme means the first and third lines rhyme with each other, and the second and fourth lines rhyme with each other.
              </p>
              
              <p className="text-gray-700 mb-4">
                Internal rhyme occurs when words within the same line rhyme, while slant rhyme (or near rhyme) involves words with similar but not identical sounds. Assonance (repetition of vowel sounds) and consonance (repetition of consonant sounds) are other sound devices that contribute to the musical quality of poetry without requiring full rhyme.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Traditional Poetic Forms</h2>
              
              <p className="text-gray-700 mb-4">
                Sonnets are 14-line poems with specific rhyme schemes and thematic structures. The Shakespearean (English) sonnet follows an ABABCDCDEFEFGG pattern and is divided into three quatrains and a final couplet. The Petrarchan (Italian) sonnet is divided into an octave (eight lines) and a sestet (six lines), often with a shift in tone or argument at the break.
              </p>
              
              <p className="text-gray-700 mb-4">
                Haikus are three-line poems traditionally following a 5-7-5 syllable pattern, though modern English haikus often focus more on capturing a moment in nature with brevity and insight rather than strict adherence to syllable counts. Villanelles are 19-line poems with two refrains that alternate as the final lines of each tercet and conclude the final quatrain.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Free Verse and Modern Innovations</h3>
              
              <p className="text-gray-700 mb-4">
                Free verse poetry does not adhere to regular meter or rhyme schemes, allowing poets greater flexibility in expressing their ideas. However, free verse is not without structure—it often relies on natural speech rhythms, line breaks, and other elements to create meaning and musicality.
              </p>
              
              <p className="text-gray-700 mb-4">
                Blank verse is unrhymed poetry written in regular meter, most commonly iambic pentameter. This form allows for the musical quality of meter without the constraints of rhyme, making it popular for dramatic works and longer narrative poems.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Line Breaks and Stanza Structure</h2>
              
              <p className="text-gray-700 mb-4">
                The way a poet breaks lines contributes significantly to the poem's rhythm and meaning. End-stopped lines conclude with punctuation, creating a pause, while enjambment carries the thought across the line break without punctuation, creating flow and momentum.
              </p>
              
              <p className="text-gray-700 mb-4">
                Stanzas are groups of lines that function as units within a poem, similar to paragraphs in prose. Common stanza forms include couplets (two lines), tercets (three lines), quatrains (four lines), and sestets (six lines). The choice of stanza form affects pacing and can reinforce the poem's meaning.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Scansion: Analyzing Meter</h3>
              
              <p className="text-gray-700 mb-4">
                Scansion is the process of analyzing the metrical pattern of a poem by marking stressed and unstressed syllables. While this analysis might seem academic, it helps readers understand how the rhythm supports the meaning and emotional content of the poem.
              </p>
              
              <p className="text-gray-700 mb-4">
                To scan a poem, read it aloud naturally first, then go back to identify the stressed and unstressed syllables. Mark stressed syllables with a slash (/) and unstressed syllables with a breve (˘). This process reveals the underlying metrical pattern and any variations the poet has made.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Interplay Between Form and Content</h2>
              
              <p className="text-gray-700 mb-4">
                The most effective poetry demonstrates a perfect marriage between form and content, where the meter, rhyme, and structure enhance the meaning rather than competing with it. A poem about chaos might employ irregular meter, while a poem about peace might use regular, soothing rhythms.
              </p>
              
              <p className="text-gray-700 mb-4">
                Consider how the form influences your interpretation of the content. Why did the poet choose a particular meter? How do the line breaks affect your reading? How does the rhyme scheme contribute to the poem's meaning? These questions help deepen your appreciation of the craft.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Writing with Meter and Form</h3>
              
              <p className="text-gray-700 mb-4">
                When writing metered poetry, start by choosing a meter that suits your subject matter and desired effect. Practice writing in that meter until it becomes natural, then allow yourself to vary it when the meaning requires it.
              </p>
              
              <p className="text-gray-700 mb-4">
                Don't force the meaning to fit the meter; instead, let the meter serve the meaning. If a particular line needs an extra syllable or different stress pattern to convey the idea effectively, make that change. The best metered poetry balances technical skill with artistic freedom.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Contemporary Approaches to Traditional Forms</h2>
              
              <p className="text-gray-700 mb-4">
                Modern poets often engage with traditional forms while updating them for contemporary sensibilities. A poet might write a sonnet about a modern subject or use traditional meter while incorporating colloquial language.
              </p>
              
              <p className="text-gray-700 mb-4">
                Understanding traditional forms helps poets make informed choices about when to follow convention and when to break it. Even poets who primarily write free verse benefit from understanding meter and form, as this knowledge informs their decisions about line breaks and rhythm.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Reading Metered Poetry Aloud</h3>
              
              <p className="text-gray-700 mb-4">
                To fully appreciate metered poetry, read it aloud slowly and deliberately. Pay attention to how the rhythm affects your understanding of the meaning and your emotional response to the poem.
              </p>
              
              <p className="text-gray-700 mb-4">
                Try reading the same poem multiple times, emphasizing the meter differently each time. Notice how your interpretation might change based on where you place emphasis. This exercise develops your ear for poetic rhythm and deepens your appreciation of the craft.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Mistakes and Misconceptions</h2>
              
              <p className="text-gray-700 mb-4">
                Beginning readers of poetry often focus too much on identifying the meter and miss the meaning of the poem. Remember that meter serves the meaning, not the other way around. If you're struggling to understand what a poem is saying, focus on the content first, then return to examine the form.
              </p>
              
              <p className="text-gray-700 mb-4">
                Another common mistake is assuming that all poetry must rhyme or follow a regular meter. Much excellent poetry is written in free verse, and even metered poetry often varies from the strict pattern for artistic effect.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h3>
              
              <p className="text-gray-700 mb-4">
                Understanding poetic meter, rhythm, and form enriches your appreciation of poetry and provides tools for analyzing and discussing poems. These elements work together to create the musical and structural beauty that distinguishes poetry from other forms of literature. Whether you're reading or writing poetry, attention to these elements will deepen your engagement with the art form.
              </p>
              
              <p className="text-gray-700 mb-4">
                Remember that the rules of meter and form are guidelines rather than rigid constraints. The greatest poetry demonstrates both technical mastery and artistic innovation, using traditional elements in fresh and surprising ways.
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