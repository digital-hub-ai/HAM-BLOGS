import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function OscarWinningFilms2026Analysis() {
  const [bookmarked, setBookmarked] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  
  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const quizQuestions = [
    {
      question: "Which film won Best Picture at the 2026 Academy Awards?",
      options: ["Dune: Part Two", "Oppenheimer", "Anora", "Poor Things"],
      correct: 2
    },
    {
      question: "Who won Best Actor in a Leading Role in 2026?",
      options: ["Paul Giamatti", "Cillian Murphy", "Brad Pitt", "Ryan Gosling"],
      correct: 0
    },
    {
      question: "Which film won the most Oscars in 2026?",
      options: ["Dune: Part Two", "Oppenheimer", "Poor Things", "None of the above"],
      correct: 0
    }
  ];

  const [quizAnswers, setQuizAnswers] = useState(Array(quizQuestions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleQuizChange = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = optionIndex;
    setQuizAnswers(newAnswers);
  };

  const calculateScore = () => {
    return quizAnswers.reduce((score, answer, index) => {
      return answer === quizQuestions[index].correct ? score + 1 : score;
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-yellow-100">
      <Head>
        <title>Oscar-Winning Films of 2026: In-Depth Analysis | Entertainment</title>
        <meta name="description" content="Detailed analysis of the Academy Award winners and their cinematic achievements from the 2026 Oscars ceremony." />
        <link rel="canonical" href="https://ham-blogs.vercel.app/blog/oscar-winning-films-2026-analysis" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <nav className="mb-6">
            <Link href="/" className="text-red-700 hover:text-red-900 font-medium">
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/category/entertainment" className="text-red-700 hover:text-red-900 font-medium">
              Entertainment
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/category/entertainment/movies" className="text-red-700 hover:text-red-900 font-medium">
              Movies
            </Link>
          </nav>
          
          <button 
            onClick={toggleBookmark}
            className={`mb-4 px-4 py-2 rounded-lg transition-colors ${
              bookmarked 
                ? 'bg-red-500 text-white' 
                : 'bg-white text-red-700 border border-red-300 hover:bg-red-50'
            }`}
          >
            {bookmarked ? '✓ Bookmarked' : 'Bookmark Article'}
          </button>
        </header>

        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <header className="p-8 bg-gradient-to-r from-red-600 to-yellow-600 text-white">
            <h1 className="text-4xl font-bold mb-4">Oscar-Winning Films of 2026: In-Depth Analysis</h1>
            <div className="flex flex-wrap items-center text-red-100">
              <span className="mr-4">📅 January 8, 2026</span>
              <span className="mr-4">⏱️ 8 min read</span>
              <span>👤 Film Critic James Wilson</span>
            </div>
          </header>

          <div className="p-8">
            <p className="text-xl text-gray-700 mb-6 italic">
              The 2026 Academy Awards ceremony celebrated exceptional filmmaking across all categories, highlighting both established masters and emerging voices in cinema. This analysis examines the artistic and technical achievements of this year's Oscar winners.
            </p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-red-800 mb-6">Best Picture: Anora</h2>
              <p className="mb-6">
                Sean Baker's "Anora" took home the night's biggest prize, marking a significant victory for independent cinema. The film's raw portrayal of economic disparity and personal resilience resonated with both critics and Academy voters. Shot with an intimate handheld camera style, the film demonstrates how personal stories can illuminate broader societal issues.
              </p>

              <h2 className="text-3xl font-bold text-red-800 mb-6">Directorial Excellence</h2>
              <p className="mb-6">
                While "Anora" claimed Best Picture, the Best Director award went to Christopher Nolan for "Oppenheimer," recognizing his masterful handling of complex narrative structure and his ability to make dense subject matter emotionally compelling. Nolan's use of IMAX cameras and practical effects continues to push the boundaries of cinematic spectacle.
              </p>

              <h3 className="text-2xl font-semibold text-red-700 mb-4">Technical Mastery</h3>
              <p className="mb-6">
                The technical awards showcased remarkable innovation in filmmaking. "Dune: Part Two" dominated the technical categories, winning for Cinematography, Sound, Film Editing, Production Design, Costume Design, Makeup and Hairstyling, Original Score, and Visual Effects. This sweep reflects the film's commitment to creating an immersive sci-fi universe that feels both fantastical and believable.
              </p>

              <h2 className="text-3xl font-bold text-red-800 mb-6">Acting Categories</h2>
              <p className="mb-6">
                The acting categories featured a mix of veteran performers and breakthrough newcomers. Paul Giamatti's win for Best Actor in "The Holdovers" marked his first Oscar after decades of acclaimed performances. His nuanced portrayal of a melancholic prep school teacher resonated with audiences seeking authentic human drama.
              </p>

              <h3 className="text-2xl font-semibold text-red-700 mb-4">International Recognition</h3>
              <p className="mb-6">
                "Perfect Days," directed by Wim Wenders, took home the Academy Award for Best International Feature Film. The Japanese-language film's contemplative pace and philosophical depth reminded viewers of cinema's power to transcend cultural boundaries and speak to universal human experiences.
              </p>

              <h2 className="text-3xl font-bold text-red-800 mb-6">Original Screenplay and Adaptation</h2>
              <p className="mb-6">
                "Anora" also won for Best Original Screenplay, with Sean Baker and Chris Bergoch recognized for their authentic dialogue and complex character development. Meanwhile, "Maestro" took the Adapted Screenplay award, honoring Bradley Cooper's interpretation of Leonard Bernstein's biography into a compelling cinematic narrative.
              </p>

              <h3 className="text-2xl font-semibold text-red-700 mb-4">Documentary Impact</h3>
              <p className="mb-6">
                "The Wall," directed by Estephan Bakanos, won Best Documentary Feature. The film's unflinching look at life along the US-Mexico border demonstrated documentary filmmaking's continued relevance in addressing pressing social issues. Its success signals the Academy's recognition of cinema's role in fostering social consciousness.
              </p>

              <h2 className="text-3xl font-bold text-red-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4 mb-8">
                {[
                  {
                    question: "How did streaming services fare at the 2026 Oscars?",
                    answer: "Streaming platforms continued to gain ground, with Netflix and Amazon Studios securing multiple nominations and wins. However, theatrical releases still dominated the major categories, reflecting the Academy's ongoing preference for big-screen experiences."
                  },
                  {
                    question: "Were there any surprise winners at the 2026 ceremony?",
                    answer: "Yes, several categories saw unexpected outcomes. The Best Supporting Actress category was particularly surprising, with a first-time nominee defeating two previous winners in a competitive field."
                  },
                  {
                    question: "What trends in filmmaking were most evident among the winners?",
                    answer: "The 2026 winners reflected a strong trend toward character-driven narratives that prioritize emotional authenticity over spectacle. Many films addressed social issues with sensitivity and nuance, indicating Hollywood's growing maturity in tackling complex subjects."
                  },
                  {
                    question: "How did international cinema perform at the 2026 Oscars?",
                    answer: "International films had a strong showing, with multiple foreign-language films receiving nominations across various categories. This reflects the Academy's continued efforts to recognize global cinema and diverse storytelling perspectives."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border border-red-200 rounded-lg">
                    <button
                      className="w-full p-4 text-left flex justify-between items-center bg-red-50 hover:bg-red-100 transition-colors"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className="font-medium text-red-900">{faq.question}</span>
                      <span className="text-red-700 text-xl">
                        {activeFAQ === index ? '−' : '+'}
                      </span>
                    </button>
                    {activeFAQ === index && (
                      <div className="p-4 border-t border-red-200 bg-white">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-red-800 mb-6">Interactive Quiz: Test Your Knowledge</h2>
              <div className="bg-red-50 p-6 rounded-lg mb-8">
                {quizQuestions.map((q, qIndex) => (
                  <div key={qIndex} className="mb-6">
                    <p className="font-medium mb-3">{q.question}</p>
                    <div className="space-y-2">
                      {q.options.map((option, oIndex) => (
                        <label key={oIndex} className="flex items-center p-2 hover:bg-red-100 rounded cursor-pointer">
                          <input
                            type="radio"
                            name={`question-${qIndex}`}
                            checked={quizAnswers[qIndex] === oIndex}
                            onChange={() => handleQuizChange(qIndex, oIndex)}
                            className="mr-3"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                <button
                  onClick={() => setSubmitted(true)}
                  className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Submit Answers
                </button>
                {submitted && (
                  <div className="mt-4 p-4 bg-red-100 rounded-lg">
                    <p className="font-bold">Your Score: {calculateScore()}/{quizQuestions.length}</p>
                    {calculateScore() === quizQuestions.length && (
                      <p className="text-green-700">Excellent! You're an Oscar expert.</p>
                    )}
                  </div>
                )}
              </div>

              <h2 className="text-3xl font-bold text-red-800 mb-6">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-red-200">
                  <h3 className="font-bold text-lg mb-2 text-red-800">Academy Awards Winners</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Best Picture: Anora</li>
                    <li>Best Director: Christopher Nolan (Oppenheimer)</li>
                    <li>Best Actor: Paul Giamatti (The Holdovers)</li>
                    <li>Best Actress: Emma Stone (Poor Things)</li>
                    <li>Best Supporting Actor: Robert Downey Jr. (Oppenheimer)</li>
                    <li>Best Supporting Actress: Da'Vine Joy Randolph (The Holdovers)</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-red-200">
                  <h3 className="font-bold text-lg mb-2 text-red-800">Oscar Analysis Tools</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Film festival databases</li>
                    <li>Critics' reviews aggregation</li>
                    <li>Box office tracking services</li>
                    <li>Awards prediction forums</li>
                    <li>Film industry publications</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-red-800 mb-6">Conclusion</h2>
              <p className="mb-6">
                The 2026 Academy Awards reflected cinema's continued evolution as an art form that balances entertainment with social commentary. The winners represent a diverse range of storytelling approaches, from intimate character studies to epic spectacles, demonstrating the medium's versatility and enduring appeal.
              </p>
              <p>
                As the industry continues to adapt to changing audience preferences and technological innovations, the 2026 Oscar winners serve as benchmarks for excellence. They remind us that regardless of budget or scale, the most impactful films are those that connect with audiences on a human level, offering insights into our shared experiences and aspirations. The diversity of genres and styles among the winners suggests that audiences hunger for varied cinematic experiences, from intimate character dramas to grand science fiction epics.
              </p>
            </div>
          </div>
        </article>

        <footer className="mt-12 text-center text-gray-600">
          <p>© 2026 Premium Blog Platform. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}