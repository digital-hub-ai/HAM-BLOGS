import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ContemporaryPoetryExperimentalFormsAndFreeVerse() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string | null}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is free verse poetry?",
      answer: "Free verse is poetry that does not follow regular meter or rhyme schemes. It relies on natural speech rhythms, line breaks, and other elements to create meaning and musicality rather than traditional formal constraints."
    },
    {
      question: "What are some experimental poetic forms in contemporary poetry?",
      answer: "Contemporary experimental forms include prose poetry, visual/concrete poetry, list poems, centos (poems made from lines of other poems), erasure poetry, and hybrid forms that blend poetry with other genres."
    },
    {
      question: "How does spoken word differ from traditional poetry?",
      answer: "Spoken word poetry is crafted specifically for performance, emphasizing rhythm, voice, and audience engagement. It often addresses social issues and uses techniques like repetition, call-and-response, and dramatic pauses."
    },
    {
      question: "What is confessional poetry?",
      answer: "Confessional poetry explores personal experiences, emotions, and intimate details of the poet's life. It emerged in the 1950s-60s with poets like Sylvia Plath, Anne Sexton, and Robert Lowell."
    },
    {
      question: "How has technology influenced contemporary poetry?",
      answer: "Technology has enabled new forms like digital poetry, interactive poetry, and social media poetry. It has also expanded access to poetry through online publications and platforms, fostering diverse voices and communities."
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "What distinguishes free verse from traditional poetry?",
      options: [
        "It always focuses on nature themes",
        "It does not follow regular meter or rhyme schemes",
        "It is always shorter than traditional poetry",
        "It must be written in first person"
      ],
      correctAnswer: "It does not follow regular meter or rhyme schemes"
    },
    {
      question: "Which poet is most associated with confessional poetry?",
      options: [
        "Emily Dickinson",
        "Sylvia Plath",
        "Christina Rossetti",
        "Elizabeth Barrett Browning"
      ],
      correctAnswer: "Sylvia Plath"
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
        <title>Contemporary Poetry: Experimental Forms and Free Verse | HAM-BLOGS</title>
        <meta name="description" content="How modern poets break traditional conventions and experiment with form, language, and expression to create innovative works." />
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
              <span className="inline-block px-3 py-1 ml-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full">Contemporary</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contemporary Poetry: Experimental Forms and Free Verse</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">January 5, 2026</span>
              <span className="mr-4">•</span>
              <span>9 min read</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Contemporary poetry encompasses a diverse range of styles, themes, and forms that reflect the complexity and multiplicity of modern life. From the confessional verse of the mid-20th century to the experimental digital poetry of today, contemporary poets continue to push boundaries and explore new ways of expressing human experience. This dynamic field embraces both traditional elements and radical innovation, creating a rich tapestry of voices and approaches that speak to our current moment.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Rise of Free Verse</h2>
              
              <p className="text-gray-700 mb-4">
                Free verse has become one of the dominant forms in contemporary poetry, offering poets the freedom to structure their work according to the poem's content and meaning rather than adhering to predetermined metrical patterns. This form allows for greater flexibility in line breaks, rhythm, and syntax, enabling poets to create unique soundscapes that serve their artistic vision.
              </p>
              
              <p className="text-gray-700 mb-4">
                Though free verse lacks regular meter and rhyme, it still employs rhythm, sound devices, and other poetic techniques to create musicality and meaning. The line break becomes a crucial element, determining pace, emphasis, and visual arrangement on the page. Poets like Walt Whitman pioneered this approach, but it has flourished in contemporary times with poets like Allen Ginsberg, Langston Hughes, and Adrienne Rich.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Crafting Effective Free Verse</h3>
              
              <p className="text-gray-700 mb-4">
                Writing successful free verse requires a deep understanding of traditional poetic techniques, even though they're not strictly applied. Poets must be intentional about their choices regarding line breaks, stanzas, rhythm, and sound patterns. The absence of formal constraints doesn't mean abandoning craft; rather, it requires making conscious decisions about every element of the poem.
              </p>
              
              <p className="text-gray-700 mb-4">
                Effective free verse often incorporates organic patterns that emerge from the poem's content and meaning. These might include repeated sounds, similar line lengths, or recurring rhythmic phrases that create cohesion without adhering to traditional forms.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Confessional Poetry and Personal Voice</h2>
              
              <p className="text-gray-700 mb-4">
                Confessional poetry emerged in the 1950s and 1960s, characterized by its focus on intimate, personal experiences and emotions. Poets like Robert Lowell, Sylvia Plath, Anne Sexton, and John Berryman explored subjects previously considered too private or taboo for poetry, including mental illness, sexuality, family dysfunction, and personal trauma.
              </p>
              
              <p className="text-gray-700 mb-4">
                This movement democratized poetry by asserting that personal experience was valid material for serious verse. It broke down the barrier between public and private discourse, showing that intimate revelations could have universal resonance. Contemporary poets continue to explore personal themes while considering issues of privacy, representation, and ethical responsibility.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Identity Poetry and Representation</h3>
              
              <p className="text-gray-700 mb-4">
                Contemporary poetry has witnessed a flourishing of identity-based verse that explores experiences related to race, gender, sexuality, disability, and other aspects of identity. Poets like Audre Lorde, Essex Hemphill, Joy Harjo, and Ocean Vuong have expanded the scope of poetry to include voices that were historically marginalized.
              </p>
              
              <p className="text-gray-700 mb-4">
                Identity poetry often addresses systemic inequalities, celebrates cultural heritage, and challenges dominant narratives. These works demonstrate how personal and political elements intersect in contemporary verse, using poetry as a vehicle for both individual expression and social commentary.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Spoken Word and Performance Poetry</h2>
              
              <p className="text-gray-700 mb-4">
                Spoken word poetry has gained tremendous popularity in recent decades, bringing poetry back to its oral roots. This form is crafted specifically for performance, incorporating elements like rhythm, voice modulation, gesture, and audience interaction to enhance meaning.
              </p>
              
              <p className="text-gray-700 mb-4">
                Slam poetry competitions have created a vibrant community of performers and audiences, making poetry accessible to people who might not typically read poetry. Artists like Saul Williams, Sarah Kay, and Danez Smith have brought spoken word to mainstream attention, demonstrating its power to address social issues and connect with diverse audiences.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Intersection of Page and Stage</h3>
              
              <p className="text-gray-700 mb-4">
                Many contemporary poets work across both page and performance traditions, creating works that function effectively in both contexts. They consider how the visual elements of the poem on the page might translate to performance, and vice versa.
              </p>
              
              <p className="text-gray-700 mb-4">
                This cross-pollination has enriched both traditions, with performance poetry incorporating more complex literary techniques and page poetry becoming more aware of its sonic and rhythmic possibilities.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Experimental and Visual Poetry</h2>
              
              <p className="text-gray-700 mb-4">
                Contemporary poets continue to experiment with form, creating visual poetry where the arrangement of words on the page becomes part of the meaning. Concrete poetry shapes text to mirror the poem's subject, while other visual approaches use spacing, typography, and graphic elements to enhance meaning.
              </p>
              
              <p className="text-gray-700 mb-4">
                Digital poetry has emerged as a new frontier, using multimedia elements, interactivity, and hypertext to create poems that couldn't exist in print. These works explore how technology can expand the possibilities of poetic expression.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Hybrid Forms and Genre Blending</h3>
              
              <p className="text-gray-700 mb-4">
                Contemporary poetry often blurs boundaries between genres, incorporating elements of prose, essay, memoir, and journalism. Prose poetry, in particular, has gained prominence as poets explore the liminal space between poetry and fiction.
              </p>
              
              <p className="text-gray-700 mb-4">
                Lyric essays combine poetic language with analytical or narrative prose, creating works that resist easy categorization. This genre fluidity reflects the contemporary moment's resistance to rigid classification systems.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Global Perspectives and Translation</h2>
              
              <p className="text-gray-700 mb-4">
                Contemporary poetry is increasingly global, with poets drawing from multiple cultural traditions and languages. Translated poetry has become more accessible, enriching English-language verse with diverse forms and approaches.
              </p>
              
              <p className="text-gray-700 mb-4">
                Poets like Octavio Paz, Mahmoud Darwish, and Bei Dao have introduced English-speaking audiences to different poetic traditions, while bilingual poets create works that exist in multiple languages simultaneously.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Technology and Poetry Communities</h3>
              
              <p className="text-gray-700 mb-4">
                The internet has revolutionized poetry publication and community-building. Online journals, social media platforms, and poetry websites have democratized access to poetry and created new venues for emerging voices.
              </p>
              
              <p className="text-gray-700 mb-4">
                Twitter poetry, Instagram verse, and other social media formats have created new constraints and possibilities for poetic expression. These platforms require poets to distill their messages into brief, impactful statements.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Environmental and Ecological Poetry</h2>
              
              <p className="text-gray-700 mb-4">
                As environmental concerns have grown, many contemporary poets have turned their attention to ecological themes. Eco-poetry explores humanity's relationship with the natural world and addresses climate change, extinction, and environmental justice.
              </p>
              
              <p className="text-gray-700 mb-4">
                Poets like Mary Oliver, W.S. Merwin, and Camille Dungy have shown how poetry can foster environmental consciousness and deepen our connection to the natural world.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Social Justice and Activism</h3>
              
              <p className="text-gray-700 mb-4">
                Contemporary poetry often serves activist purposes, addressing issues of inequality, racism, sexism, and other forms of oppression. Poets use their work to bear witness, raise awareness, and inspire action.
              </p>
              
              <p className="text-gray-700 mb-4">
                This tradition builds on earlier politically engaged poetry but takes advantage of new platforms and communities to reach broader audiences and create social change.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Publishing and Accessibility</h2>
              
              <p className="text-gray-700 mb-4">
                Independent publishers and small presses have become crucial in promoting contemporary poetry, often taking risks on innovative work that larger publishers might avoid. This has led to greater diversity in published poetry.
              </p>
              
              <p className="text-gray-700 mb-4">
                Poetry has also become more accessible through readings, festivals, and community programs. Organizations like Cave Canem and Canto Mundo support poets of color and other underrepresented groups.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Looking Forward</h3>
              
              <p className="text-gray-700 mb-4">
                Contemporary poetry continues to evolve, embracing new technologies, voices, and forms while maintaining its essential function of exploring human experience through language. The future promises continued innovation and expansion of poetry's possibilities.
              </p>
              
              <p className="text-gray-700 mb-4">
                Emerging poets are likely to continue pushing boundaries, creating new forms that reflect the complexities of contemporary life while honoring poetry's ancient function of giving voice to human experience.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Elements in Contemporary Poetry</h2>
              
              <p className="text-gray-700 mb-4">
                Despite the diversity of contemporary poetry, certain elements appear frequently: attention to craft within free verse, engagement with social and political issues, exploration of identity and personal experience, and experimentation with form and language.
              </p>
              
              <p className="text-gray-700 mb-4">
                Many contemporary poets also demonstrate awareness of poetry's history, either embracing or reacting against traditional forms and themes. This dialogue with the past enriches contemporary work.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h3>
              
              <p className="text-gray-700 mb-4">
                Contemporary poetry is characterized by its diversity, experimentation, and engagement with current issues. From free verse to spoken word, from identity poetry to digital verse, today's poets continue to expand the definition of what poetry can be and do. The field remains vibrant and dynamic, welcoming new voices and forms while maintaining poetry's essential function of using language to illuminate human experience.
              </p>
              
              <p className="text-gray-700 mb-4">
                As poetry continues to evolve, it remains a vital art form that adapts to each generation's needs and concerns, proving its enduring relevance and power.
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