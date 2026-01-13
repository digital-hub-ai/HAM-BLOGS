import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function WritingPoetryTipsForBeginnersAndSeasonedWriters() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string | null}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "How do I start writing poetry as a beginner?",
      answer: "Start by reading widely, keeping a journal, writing regularly, and experimenting with different forms and techniques. Don't worry about creating perfect poems initially; focus on expressing your thoughts and feelings."
    },
    {
      question: "What are some common mistakes beginners make?",
      answer: "Common mistakes include forcing rhyme schemes, using clichéd imagery, writing too abstractly without concrete details, and not revising drafts. Beginners often try to write like their favorite poets instead of finding their own voice."
    },
    {
      question: "How important is revision in poetry?",
      answer: "Revision is crucial in poetry. Most poems go through multiple drafts, with poets refining language, imagery, and structure. Revision allows poets to discover what the poem is really about and improve its impact."
    },
    {
      question: "How can I overcome writer's block in poetry?",
      answer: "Try writing exercises, reading other poets, changing your environment, writing badly on purpose, or working with prompts. Sometimes stepping away from poetry temporarily can refresh your perspective."
    },
    {
      question: "What is the difference between writing poetry for oneself versus for others?",
      answer: "Writing for oneself prioritizes personal expression and exploration, while writing for others considers audience reception and communication. Both approaches have value, and many poets blend them by writing authentically while considering reader engagement."
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "What is an important step in the poetry writing process?",
      options: [
        "Writing the poem in one sitting without stopping",
        "Skipping revision to maintain spontaneity",
        "Reading widely and writing regularly",
        "Only focusing on rhyming poems"
      ],
      correctAnswer: "Reading widely and writing regularly"
    },
    {
      question: "What should beginners focus on when starting to write poetry?",
      options: [
        "Perfecting rhyme schemes immediately",
        "Expressing thoughts and feelings without worrying about perfection",
        "Copying their favorite poets exactly",
        "Only writing about nature"
      ],
      correctAnswer: "Expressing thoughts and feelings without worrying about perfection"
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
        <title>Writing Poetry: Tips for Beginners and Seasoned Writers | HAM-BLOGS</title>
        <meta name="description" content="Practical advice for crafting meaningful poems, from choosing subjects to revising and refining your work." />
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
              <span className="inline-block px-3 py-1 ml-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full">Writing Tips</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Writing Poetry: Tips for Beginners and Seasoned Writers</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">January 4, 2026</span>
              <span className="mr-4">•</span>
              <span>10 min read</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Writing poetry is both an art and a craft that requires dedication, practice, and patience. Whether you're a beginner taking your first steps into verse or an experienced poet looking to refine your skills, developing a strong foundation in poetic technique and understanding the writing process can help you create more meaningful and impactful poems. This guide offers practical advice for poets at all levels, covering everything from initial inspiration to final revision.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Getting Started: Tips for Beginners</h2>
              
              <p className="text-gray-700 mb-4">
                The most important step for beginning poets is to start writing without expecting perfection. Focus on expressing your thoughts, feelings, and observations rather than creating polished pieces. Write regularly, even if it's just a few lines each day, to develop your voice and confidence.
              </p>
              
              <p className="text-gray-700 mb-4">
                Reading widely is equally important. Expose yourself to different poets, styles, and forms to understand the range of possibilities in poetry. Don't limit yourself to one era or type of poetry; explore classical and contemporary works, formal and free verse, different cultural traditions, and various themes.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Keeping a Writer's Journal</h3>
              
              <p className="text-gray-700 mb-4">
                Maintain a notebook or digital journal for observations, overheard conversations, interesting images, emotions, and ideas. This collection of raw material will provide inspiration for future poems. Don't worry about creating complete thoughts—fragments and sketches are perfectly acceptable.
              </p>
              
              <p className="text-gray-700 mb-4">
                Record sensory details from your daily experiences: the sound of rain on the roof, the smell of coffee shops, the feeling of autumn air. These concrete details will enrich your poetry and help readers connect with your work.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Developing Your Voice and Style</h2>
              
              <p className="text-gray-700 mb-4">
                Your poetic voice is your unique way of seeing and expressing the world. It emerges through your choice of subjects, images, language, and perspective. Don't try to imitate other poets too closely—while learning from their techniques is valuable, your goal should be to find what's distinctly yours.
              </p>
              
              <p className="text-gray-700 mb-4">
                Experiment with different approaches and forms to discover what feels most natural and effective for your vision. Some poets gravitate toward narrative verse, others toward lyrical fragments. Some prefer formal structures, others favor free verse. Explore different possibilities without limiting yourself prematurely.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Choosing Subjects and Themes</h3>
              
              <p className="text-gray-700 mb-4">
                Write about what matters to you personally, whether that's nature, relationships, social issues, or abstract concepts. The most compelling poetry often emerges from genuine concern or curiosity about a subject.
              </p>
              
              <p className="text-gray-700 mb-4">
                Don't dismiss everyday experiences as unworthy of poetry. A walk in the park, a conversation with a stranger, or a childhood memory can provide rich material for poems. The poet's job is to make the familiar fresh and the abstract concrete.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Crafting Effective Lines and Stanzas</h2>
              
              <p className="text-gray-700 mb-4">
                Consider the line break carefully in each poem. Lines can end with completion or create suspense, emphasize certain words, or control the poem's rhythm. The line break is one of poetry's unique tools and deserves thoughtful attention.
              </p>
              
              <p className="text-gray-700 mb-4">
                Similarly, consider how stanzas function in your poem. They can create units of thought, provide visual structure, or mark shifts in tone or subject. Like line breaks, stanza breaks should serve the poem's meaning and effect.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Using Concrete Imagery</h3>
              
              <p className="text-gray-700 mb-4">
                Ground abstract ideas in concrete, sensory details. Instead of saying "sadness," describe the physical manifestations of sadness: tears, a tight throat, or slumped shoulders. Concrete imagery makes poems more vivid and relatable.
              </p>
              
              <p className="text-gray-700 mb-4">
                Choose images that serve multiple purposes: advancing the poem's meaning, contributing to its mood, and appealing to the senses. The best images resonate on several levels simultaneously.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Techniques for More Experienced Writers</h2>
              
              <p className="text-gray-700 mb-4">
                Seasoned writers should continue to challenge themselves with new forms, subjects, and techniques. Revisit poets you read earlier in your career—you may discover new insights and influences that weren't apparent before.
              </p>
              
              <p className="text-gray-700 mb-4">
                Experiment with constraints and prompts to break out of comfortable patterns. Oulipo techniques, formal challenges, and collaborative projects can revitalize your approach to poetry.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Revision Strategies</h3>
              
              <p className="text-gray-700 mb-4">
                Allow time between writing and revising. Fresh eyes will help you see the poem more objectively. Print out drafts and read them aloud to catch awkward rhythms or unclear passages.
              </p>
              
              <p className="text-gray-700 mb-4">
                Ask specific questions about each draft: Does the poem achieve its intended effect? Is the language precise and engaging? Are there unnecessary words or redundant images? Does the ending satisfy and surprise?
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Overcoming Challenges and Obstacles</h2>
              
              <p className="text-gray-700 mb-4">
                Writer's block affects all poets at various points in their careers. Combat it by reading, taking walks, trying different writing exercises, or working on other creative projects. Sometimes the best remedy for writer's block is to write badly on purpose.
              </p>
              
              <p className="text-gray-700 mb-4">
                Don't be discouraged by rejection or lack of publication opportunities; persistence and continuous improvement are key to developing your craft. Share your work with trusted readers for feedback, but ultimately trust your own artistic vision.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h3>
              
              <p className="text-gray-700 mb-4">
                Writing poetry is a journey of continuous learning and growth. Whether you're just beginning or have years of experience, the most important element is maintaining your curiosity about language and the world around you. Remember that every published poet was once a beginner, and every experienced poet continues to learn and evolve. The key to success in poetry lies not just in technical proficiency but in authenticity, persistence, and the willingness to take creative risks.
              </p>
              
              <p className="text-gray-700 mb-4">
                Focus on developing your unique voice while learning from the rich tradition of poetry. Read widely, write regularly, revise thoughtfully, and don't be afraid to experiment with different forms and approaches. Most importantly, remember that poetry is ultimately about connecting with readers through the power of language and shared human experience.
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
