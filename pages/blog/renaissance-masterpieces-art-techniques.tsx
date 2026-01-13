import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function RenaissanceMasterpiecesBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is linear perspective and why was it important during the Renaissance?",
      answer: "Linear perspective is a technique that creates the illusion of depth on a flat surface by making parallel lines converge at a vanishing point on the horizon. Developed during the Renaissance, it allowed artists to create more realistic and three-dimensional representations, revolutionizing the way space and depth were depicted in art."
    },
    {
      question: "Who were some of the most influential Renaissance artists?",
      answer: "The Renaissance produced many influential artists including Leonardo da Vinci, Michelangelo, Raphael, Donatello, Botticelli, and Titian. These artists made significant contributions to art through their innovations in technique, composition, and subject matter, creating works that remain influential today."
    },
    {
      question: "What characterized Renaissance art compared to Medieval art?",
      answer: "Renaissance art was characterized by a renewed interest in classical antiquity, humanism, realistic human figures, linear perspective, and naturalistic landscapes. Unlike Medieval art, which was primarily religious and symbolic, Renaissance art combined religious themes with a focus on human experience, individualism, and scientific observation."
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
        <title>Renaissance Masterpieces and Art Techniques - Visual Arts | HAM BLOGS</title>
        <meta name="description" content="Exploring the artistic innovations and masterpieces of the Renaissance period." />
        <link rel="canonical" href="https://ham-blogs.com/blog/renaissance-masterpieces-art-techniques" />
      </Head>

      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-amber-600 hover:text-amber-800 font-medium flex items-center"
            >
              ← Back to Visual Arts
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Renaissance Masterpieces and Art Techniques</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">🎨 Visual Arts</span>
            <span>⏱️ 14 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            Exploring the artistic innovations and masterpieces of the Renaissance period
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Introduction to Renaissance Art <button onClick={() => toggleBookmark('intro')} className="ml-2 text-amber-500">★</button></h2>
          <p>
            The Renaissance, spanning roughly from the 14th to the 17th century, marked a revolutionary period in European art. This era witnessed an unprecedented flourishing of artistic innovation, characterized by a renewed interest in classical antiquity, humanism, and scientific observation. Renaissance artists developed new techniques that would fundamentally change the course of Western art, creating masterpieces that continue to inspire and awe viewers centuries later.
          </p>
          
          <p>
            The Renaissance period saw the emergence of artistic techniques that emphasized realism, perspective, and the accurate representation of the human form. Artists began to study anatomy, light, and shadow with scientific precision, creating works that demonstrated a profound understanding of the natural world. This period produced some of the most celebrated masterpieces in the history of art, many of which remain cultural touchstones today.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Revolutionary Techniques and Innovations <button onClick={() => toggleBookmark('techniques')} className="ml-2 text-amber-500">★</button></h2>
          <h3 className="text-amber-600">Linear Perspective</h3>
          <p>
            One of the most significant innovations of the Renaissance was the development of linear perspective, pioneered by Filippo Brunelleschi and later formalized by Leon Battista Alberti. This technique created the illusion of depth on a flat surface by making parallel lines converge at a vanishing point on the horizon. Linear perspective allowed artists to create more realistic and three-dimensional representations, revolutionizing the way space and depth were depicted in art.
          </p>

          <h3 className="text-amber-600">Chiaroscuro and Sfumato</h3>
          <p>
            Renaissance artists perfected the use of light and shadow to create volume and depth in their works. Chiaroscuro, the dramatic contrast between light and dark, was masterfully employed by artists like Caravaggio. Leonardo da Vinci developed sfumato, a technique of subtle gradation and soft transitions that created atmospheric effects and lifelike skin tones. These techniques added unprecedented realism to Renaissance paintings.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Iconic Masterpieces <button onClick={() => toggleBookmark('masterpieces')} className="ml-2 text-amber-500">★</button></h2>
          <p>
            The Renaissance produced numerous masterpieces that continue to define artistic excellence. Leonardo da Vinci's "Mona Lisa" and "The Last Supper" showcase the period's innovations in portraiture and narrative painting. Michelangelo's Sistine Chapel ceiling and "David" demonstrate the era's mastery of the human form and dramatic composition. Raphael's "School of Athens" exemplifies the Renaissance ideals of harmony, proportion, and classical learning.
          </p>

          <p>
            These works not only demonstrated technical mastery but also embodied the humanist values of the Renaissance. Artists began to explore themes beyond purely religious subjects, incorporating classical mythology, portraiture, and scenes of daily life. The individual artist also gained recognition as a creative genius, moving away from the anonymous craftsmanship of the Medieval period.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Regional Variations and Schools <button onClick={() => toggleBookmark('regional')} className="ml-2 text-amber-500">★</button></h2>
          <p>
            Renaissance art developed distinct regional characteristics. The Italian Renaissance, centered in Florence, Rome, and Venice, emphasized humanism, classical antiquity, and technical innovation. Flemish artists like Jan van Eyck perfected oil painting techniques, creating luminous and detailed works. German artists like Albrecht Dürer combined Northern European attention to detail with Italian Renaissance innovations in perspective and proportion.
          </p>

          <p>
            Each regional school contributed unique elements to the broader Renaissance movement. Venetian painters like Titian and Giorgione emphasized color and atmosphere, while Florentine artists like Michelangelo and Leonardo focused on drawing and the human form. These regional variations enriched the Renaissance tradition and influenced artistic development for centuries to come.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Legacy and Influence <button onClick={() => toggleBookmark('legacy')} className="ml-2 text-amber-500">★</button></h2>
          <p>
            The innovations of Renaissance art established foundational principles that continue to influence artists today. The period's emphasis on observation, perspective, and anatomical accuracy became standard elements of artistic training. Renaissance techniques and approaches to composition, light, and narrative continue to inform contemporary art education and practice.
          </p>

          <p>
            The Renaissance also established the concept of the artist as an intellectual and creative individual, rather than merely a skilled craftsman. This shift in perception elevated the status of artists and established art as a form of personal expression and cultural commentary. The period's synthesis of technical skill, intellectual content, and aesthetic beauty remains a benchmark for artistic achievement.
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
                <p className="font-medium mb-2 text-gray-700">1. What technique did Leonardo da Vinci develop for creating soft transitions?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) Chiaroscuro</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) Sfumato</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Fresco</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) Perspective</span></label>
              </div>

              <div>
                <p className="font-medium mb-2 text-gray-700">2. Which of these is NOT a Renaissance innovation?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) Linear perspective</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) Chiaroscuro</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) Oil painting</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) Abstract expressionism</span></label>
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
                  <p className="text-gray-700">Question 1: {quizAnswers.q1 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - Leonardo developed sfumato for soft transitions.</p>
                  <p className="text-gray-700">Question 2: {quizAnswers.q2 === 'D' ? '✓ Correct' : '✗ Incorrect (Correct: D)'} - Abstract expressionism is a 20th-century movement, not Renaissance.</p>
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
              <Link href="/blog/contemporary-art-movements-innovations" className="text-amber-600 hover:underline">
                Contemporary Art Movements and Innovations →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}