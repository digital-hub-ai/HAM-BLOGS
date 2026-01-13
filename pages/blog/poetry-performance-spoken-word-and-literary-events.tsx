import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PoetryPerformanceSpokenWordAndLiteraryEvents() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string | null}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is spoken word poetry?",
      answer: "Spoken word poetry is poetry specifically crafted for performance, emphasizing rhythm, voice, and audience engagement. It often addresses social issues and uses techniques like repetition, call-and-response, and dramatic pauses."
    },
    {
      question: "How does performance poetry differ from page poetry?",
      answer: "Performance poetry is written with the intention of being heard rather than read silently. It often incorporates elements like volume changes, pauses, gestures, and audience interaction that are integral to the poem's meaning."
    },
    {
      question: "What are poetry slams?",
      answer: "Poetry slams are competitive events where poets perform original work and are judged by randomly selected audience members. They emphasize both the quality of the writing and the effectiveness of the performance."
    },
    {
      question: "How can I prepare for a poetry performance?",
      answer: "Practice reading your poem aloud multiple times, consider the rhythm and sound of the words, plan where to pause or emphasize certain lines, and rehearse with others if possible. Know your poem well enough to connect with the audience."
    },
    {
      question: "What makes an effective poetry performance?",
      answer: "Effective performances combine strong writing with confident delivery, appropriate pacing, clear articulation, genuine emotion, and connection with the audience. The performance should enhance the poem's meaning rather than distract from it."
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "What distinguishes spoken word poetry from traditional page poetry?",
      options: [
        "It must always be about politics",
        "It's specifically crafted for performance and audience engagement",
        "It cannot use metaphors",
        "It must rhyme"
      ],
      correctAnswer: "It's specifically crafted for performance and audience engagement"
    },
    {
      question: "What happens at poetry slam events?",
      options: [
        "Poets read silently to themselves",
        "Poets perform original work and are judged by audience members",
        "Only published poets can participate",
        "Poets critique each other's work"
      ],
      correctAnswer: "Poets perform original work and are judged by audience members"
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
        <title>Poetry Performance: Spoken Word and Literary Events | HAM-BLOGS</title>
        <meta name="description" content="The art of bringing poetry to life through performance, voice, and audience engagement in the spoken word tradition." />
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
              <span className="inline-block px-3 py-1 ml-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full">Performance</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Poetry Performance: Spoken Word and Literary Events</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">January 3, 2026</span>
              <span className="mr-4">•</span>
              <span>13 min read</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Poetry performance brings written words to life through voice, gesture, and direct connection with an audience. This ancient tradition has evolved into a vibrant contemporary art form that encompasses everything from intimate reading series to competitive slam poetry events. Performance poetry emphasizes the sonic and rhythmic qualities of language, creating a unique experience that combines literary merit with theatrical presentation. Understanding the art of poetry performance opens up new dimensions of expression for both poets and audiences.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Origins and Evolution of Performance Poetry</h2>
              
              <p className="text-gray-700 mb-4">
                Poetry predates literacy, originating as an oral tradition where bards and storytellers used rhythm, rhyme, and repetition to memorize and share lengthy narratives. The Epic of Gilgamesh, Homer's Iliad and Odyssey, and various folk traditions demonstrate poetry's deep connection to performance.
              </p>
              
              <p className="text-gray-700 mb-4">
                The modern spoken word movement emerged in the 1980s and 1990s, particularly in urban centers where poets began presenting their work in coffeehouses, community centers, and theaters. This movement emphasized accessibility, social commentary, and the power of live performance to create immediate connections between poet and audience.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Birth of Poetry Slams</h3>
              
              <p className="text-gray-700 mb-4">
                Poetry slams were founded by Marc Kelly Smith in Chicago in 1986 as a way to make poetry more accessible and engaging. These competitive events feature poets performing original work with no props, costumes, or music, while being judged by randomly selected audience members.
              </p>
              
              <p className="text-gray-700 mb-4">
                Slams democratized poetry performance by emphasizing both the quality of the writing and the effectiveness of the performance. They created a supportive yet competitive environment that encouraged risk-taking and innovation in poetic expression.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Elements of Effective Poetry Performance</h2>
              
              <p className="text-gray-700 mb-4">
                Successful poetry performance combines several key elements: vocal delivery, physical presence, audience engagement, and alignment between the poem's content and its presentation. The performer must understand how to use their voice as an instrument, employing changes in pitch, volume, pace, and rhythm to enhance the poem's meaning.
              </p>
              
              <p className="text-gray-700 mb-4">
                Physical presence includes posture, gestures, facial expressions, and movement. These elements should support rather than distract from the poem. The performer must strike a balance between being natural and being engaging.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Voice and Diction in Performance</h3>
              
              <p className="text-gray-700 mb-4">
                Clear articulation is essential for ensuring the audience can understand every word. Practice tongue twisters and vocal exercises to strengthen your voice and improve clarity. Pay special attention to consonants, which often get lost in performance.
              </p>
              
              <p className="text-gray-700 mb-4">
                Vary your pace to maintain audience interest and emphasize important moments in the poem. Use strategic pauses to let key images or concepts sink in. These pauses can be as powerful as the words themselves.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Preparing for Performance</h2>
              
              <p className="text-gray-700 mb-4">
                Preparation begins with thoroughly knowing your poem. Internalize the content so you're not simply reciting words but sharing a meaningful experience. Understand the poem's emotional arc and the purpose of each line and image.
              </p>
              
              <p className="text-gray-700 mb-4">
                Practice reading your poem aloud multiple times, experimenting with different approaches to rhythm, emphasis, and tone. Record yourself to identify areas for improvement and to become more comfortable with your voice.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Rehearsal Techniques</h3>
              
              <p className="text-gray-700 mb-4">
                Rehearse in front of friends, family, or fellow poets to get feedback and practice performing for others. Pay attention to their reactions and adjust your performance accordingly.
              </p>
              
              <p className="text-gray-700 mb-4">
                Practice in different environments to adapt to various performance spaces. Perform in rooms with different acoustics and sight lines to prepare for the variety of venues you might encounter.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Connecting with Your Audience</h2>
              
              <p className="text-gray-700 mb-4">
                Successful performance poetry creates a connection between poet and audience. Make eye contact, acknowledge the audience's presence, and consider their experience as you perform. The audience is not just listening—they're participating in the creation of meaning.
              </p>
              
              <p className="text-gray-700 mb-4">
                Be authentic and vulnerable. Audiences respond to genuine emotion and experience. Share something meaningful rather than trying to impress with technical virtuosity alone.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Managing Performance Anxiety</h3>
              
              <p className="text-gray-700 mb-4">
                Nervousness is normal and can even enhance your performance by adding energy and focus. Channel nervous energy into your performance rather than fighting it.
              </p>
              
              <p className="text-gray-700 mb-4">
                Develop pre-performance rituals that help you center yourself. This might include breathing exercises, vocal warm-ups, or visualization techniques. The more familiar these rituals become, the more they'll help you feel prepared.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Different Types of Poetry Venues and Events</h2>
              
              <p className="text-gray-700 mb-4">
                Poetry readings at bookstores and libraries typically feature one or more poets reading from their published work. These events tend to be more formal and literary in nature.
              </p>
              
              <p className="text-gray-700 mb-4">
                Open mic nights provide opportunities for poets of all levels to share their work in a supportive environment. These events often have diverse audiences and varying quality of performance, making them excellent for both newcomers and experienced performers.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Competitive Poetry Events</h3>
              
              <p className="text-gray-700 mb-4">
                Poetry slams involve competition with scores given by judges selected from the audience. Teams compete in regional and national championships, creating a vibrant competitive circuit.
              </p>
              
              <p className="text-gray-700 mb-4">
                Individual World Poetry Slams (iWPS) and other competitive formats have elevated spoken word to a spectator sport, with poets training like athletes to perfect both their writing and performance skills.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Technical Aspects of Performance</h2>
              
              <p className="text-gray-700 mb-4">
                Understand how to use microphones effectively. Maintain consistent distance, avoid cupping the microphone, and adjust your volume appropriately. Practice with different types of microphones to become adaptable.
              </p>
              
              <p className="text-gray-700 mb-4">
                Learn to work with stage lighting and sight lines. Position yourself where you can see the audience and be seen clearly. Understand how different lighting affects your visibility and the audience's ability to read your expressions.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Collaborative Performance</h3>
              
              <p className="text-gray-700 mb-4">
                Some performance poetry involves collaboration with musicians, dancers, or other poets. These collaborations require additional coordination and rehearsal to ensure all elements work together harmoniously.
              </p>
              
              <p className="text-gray-700 mb-4">
                Group performances and poetry pieces can create powerful collective experiences, but require careful attention to timing, balance, and individual roles within the ensemble.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Social and Political Dimensions</h2>
              
              <p className="text-gray-700 mb-4">
                Performance poetry often addresses social justice, political issues, and personal identity. The immediacy of live performance makes it particularly effective for activism and raising awareness about important issues.
              </p>
              
              <p className="text-gray-700 mb-4">
                Many spoken word artists use their platforms to give voice to marginalized communities and to challenge dominant narratives about race, gender, sexuality, and other aspects of identity.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Contemporary Poetry Performance Scene</h3>
              
              <p className="text-gray-700 mb-4">
                Today's poetry performance scene is diverse and vibrant, encompassing traditional readings, slam poetry, interdisciplinary collaborations, and digital performances. Social media has expanded the reach of performance poetry, with viral videos introducing millions to the art form.
              </p>
              
              <p className="text-gray-700 mb-4">
                Festivals, conferences, and workshops dedicated to performance poetry provide ongoing education and community for practitioners at all levels.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Developing Your Performance Style</h2>
              
              <p className="text-gray-700 mb-4">
                Develop your unique performance style by experimenting with different approaches while staying true to your authentic voice. Watch other performers for inspiration, but avoid copying their style entirely.
              </p>
              
              <p className="text-gray-700 mb-4">
                Consider how your personality, background, and poetic sensibilities can inform your performance approach. The most memorable performers are those who bring something uniquely their own to the art form.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Technology and Performance</h3>
              
              <p className="text-gray-700 mb-4">
                Digital platforms have created new opportunities for poetry performance, from YouTube channels to virtual events. These platforms allow poets to reach global audiences and experiment with multimedia presentations.
              </p>
              
              <p className="text-gray-700 mb-4">
                However, virtual performance presents unique challenges, including technical difficulties, reduced audience feedback, and the need to adapt intimate material for digital consumption.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Mistakes to Avoid</h2>
              
              <p className="text-gray-700 mb-4">
                Avoid reading directly from paper without engaging the audience. Practice your poem until you can look up and connect with listeners. Also, don't rush through your poem—give the audience time to absorb each image and idea.
              </p>
              
              <p className="text-gray-700 mb-4">
                Avoid overacting or using dramatic gestures that don't serve the poem. The poem itself should be compelling enough without excessive theatricality that distracts from the language.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h3>
              
              <p className="text-gray-700 mb-4">
                Poetry performance is a dynamic art form that continues to evolve and reach new audiences. Whether you're drawn to the intimacy of traditional readings, the competitive energy of slams, or the social consciousness of activist poetry, performance offers unique opportunities to share your voice and connect with others. The key to successful performance lies in combining strong writing with thoughtful delivery, always keeping the audience's experience in mind while staying true to your authentic voice.
              </p>
              
              <p className="text-gray-700 mb-4">
                Remember that performance poetry is ultimately about creating meaningful connections between poet and audience, using the power of language to illuminate shared human experiences and expand our understanding of what it means to be alive in the world.
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