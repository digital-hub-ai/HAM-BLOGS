import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

const RelativityTheoryEinsteinContributions = () => {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [activeQuiz, setActiveQuiz] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string}>({});

  const toggleBookmark = (index: number) => {
    if (bookmarks.includes(index)) {
      setBookmarks(bookmarks.filter(b => b !== index));
    } else {
      setBookmarks([...bookmarks, index]);
    }
  };

  const handleQuizAnswer = (questionIndex: number, answer: string) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionIndex]: answer
    });
  };

  const quizQuestions = [
    {
      question: "What is the fundamental principle of special relativity?",
      options: ["Equivalence of mass and energy", "Constancy of the speed of light", "Gravitational time dilation", "Curved spacetime"],
      answer: "Constancy of the speed of light"
    },
    {
      question: "Which famous equation represents mass-energy equivalence?",
      options: ["F=ma", "E=mc²", "PV=nRT", "λν=c"],
      answer: "E=mc²"
    },
    {
      question: "What does general relativity describe gravity as?",
      options: ["A force", "A field", "Curvature of spacetime", "An exchange of particles"],
      answer: "Curvature of spacetime"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>Relativity Theory: Einstein's Contributions | Science Blog</title>
        <meta name="description" content="Exploring special and general relativity's impact on modern physics" />
        <link rel="canonical" href="https://www.ham-blogs.com/blog/relativity-theory-einstein-contributions" />
        <meta property="og:title" content="Relativity Theory: Einstein's Contributions" />
        <meta property="og:description" content="Exploring special and general relativity's impact on modern physics" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Relativity Theory: Einstein's Contributions" />
        <meta name="twitter:description" content="Exploring special and general relativity's impact on modern physics" />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-indigo-800">HAM Blogs</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-gray-600 hover:text-indigo-600">Home</Link></li>
              <li><Link href="/categories" className="text-gray-600 hover:text-indigo-600">Categories</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-indigo-600">About</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-indigo-600">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="mb-6">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Science</span>
            <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded ml-2">Physics</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Relativity Theory: Einstein's Contributions</h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <span className="mr-4">January 7, 2026</span>
            <span>•</span>
            <span className="ml-4">9 min read</span>
            <button 
              onClick={() => toggleBookmark(0)}
              className={`ml-auto text-xl ${bookmarks.includes(0) ? 'text-red-500' : 'text-gray-300'}`}
            >
              {bookmarks.includes(0) ? '❤️' : '🤍'}
            </button>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead">Albert Einstein's theories of relativity revolutionized our understanding of space, time, matter, and energy. His groundbreaking work in the early 20th century transformed physics from a classical framework rooted in Newtonian mechanics to a modern understanding that encompasses the cosmos at both the largest and smallest scales. The twin pillars of special and general relativity not only explained puzzling observations but also predicted new phenomena that have been confirmed with extraordinary precision.</p>
            
            <h2>Special Relativity: Redefining Space and Time</h2>
            <p>Published in 1905, Einstein's special theory of relativity emerged from his contemplation of Maxwell's equations for electromagnetism and the puzzling results of the Michelson-Morley experiment, which failed to detect the Earth's motion through the supposed "luminiferous aether." Einstein proposed two fundamental postulates: the laws of physics are the same in all inertial reference frames, and the speed of light in vacuum is constant for all observers.</p>
            
            <p>These simple postulates led to revolutionary consequences. Time dilation occurs when clocks moving relative to an observer tick more slowly than stationary clocks. Length contraction causes objects to appear shorter along their direction of motion at relativistic speeds. Perhaps most famously, mass and energy became recognized as equivalent through the equation E=mc², showing that a small amount of mass corresponds to enormous energy.</p>
            
            <p>Special relativity also established the cosmic speed limit: nothing with mass can reach or exceed the speed of light. As objects approach light speed, their energy and momentum increase without bound, making light-speed travel impossible for massive objects. This principle has profound implications for causality and the structure of the universe.</p>
            
            <h2>General Relativity: Gravity as Geometry</h2>
            <p>Ten years later, Einstein published his general theory of relativity, extending his insights to accelerated reference frames and providing a new understanding of gravity. Rather than viewing gravity as a force, Einstein described it as the curvature of spacetime caused by mass and energy. Massive objects like stars and planets create "dents" in the fabric of spacetime, and other objects follow geodesics (the straightest possible paths) in this curved geometry.</p>
            
            <p>This geometric interpretation elegantly explained phenomena that Newtonian gravity couldn't account for, such as Mercury's orbital precession. It also predicted novel effects like gravitational time dilation, where time runs slower in stronger gravitational fields, and gravitational lensing, where massive objects bend light from distant sources.</p>
            
            <h2>Experimental Confirmations and Predictions</h2>
            <p>Einstein's theories made testable predictions that have been verified with remarkable precision. The 1919 solar eclipse expedition confirmed that starlight bends around the Sun as general relativity predicted, making Einstein internationally famous. More recent confirmations include GPS satellites, which must account for both special and general relativistic effects to maintain accuracy.</p>
            
            <p>The detection of gravitational waves in 2015 by LIGO provided the most dramatic confirmation of general relativity's predictions. These ripples in spacetime, produced by colliding black holes and neutron stars, were exactly as Einstein's equations predicted a century earlier. The precision of these observations has confirmed general relativity to extraordinary accuracy.</p>
            
            <h2>Impact on Cosmology and Astrophysics</h2>
            <p>Relativity forms the foundation of modern cosmology. Einstein's field equations led to solutions describing an expanding universe, later confirmed by Edwin Hubble's observations. The Big Bang theory, cosmic inflation, and dark energy all rely on relativistic physics.</p>
            
            <p>Black holes, once considered theoretical curiosities, are now observed throughout the universe. The Event Horizon Telescope's first images of black holes directly confirm the predictions of general relativity in the most extreme gravitational environments. Neutron stars, with their intense gravitational fields, also provide laboratories for testing relativistic physics.</p>
            
            <h2>Technological Applications</h2>
            <p>Relativity has practical applications beyond academic interest. GPS technology requires corrections for both special and general relativistic effects. Satellites orbiting Earth experience weaker gravity (general relativity) and move relative to Earth's surface (special relativity), causing their onboard clocks to run differently than ground-based clocks.</p>
            
            <p>Gravitational lensing, predicted by general relativity, has become a powerful astronomical tool. It allows scientists to study distant galaxies, measure dark matter distributions, and discover exoplanets. Gravitational wave astronomy has opened an entirely new window on the universe, complementing traditional electromagnetic observations.</p>
            
            <h2>Einstein's Methodology and Scientific Philosophy</h2>
            <p>Einstein's approach to physics emphasized the importance of fundamental principles and mathematical elegance. He believed that nature's deepest laws should be expressible in beautiful mathematical forms. His thought experiments, or "gedankenexperiments," helped him visualize physical situations and derive consequences of his theories before formal mathematical treatment.</p>
            
            <p>Einstein also demonstrated the importance of questioning established assumptions. By abandoning the concept of absolute time and space, he opened new vistas in physics. His insistence that physical laws should be universal and independent of arbitrary coordinate systems influenced generations of physicists.</p>
            
            <h2>Challenges and Frontiers</h2>
            <p>Despite its success, general relativity faces challenges at the extremes of scale. At quantum scales, gravity remains difficult to reconcile with quantum mechanics. The quest for quantum gravity and a theory of everything continues to drive research in theoretical physics.</p>
            
            <p>Dark matter and dark energy, comprising most of the universe's content, remain mysterious. While general relativity accurately describes their gravitational effects, their physical nature remains unknown. These puzzles may require new insights beyond Einstein's original framework.</p>
            
            <h2>Legacy and Continuing Influence</h2>
            <p>Einstein's relativity theories continue to influence modern physics profoundly. They provide the framework for understanding the universe's large-scale structure, evolution, and ultimate fate. The precision of relativistic tests continues to improve, with no deviations from Einstein's predictions detected to date.</p>
            
            <p>Einstein's work also demonstrates the power of theoretical physics to predict phenomena before their experimental discovery. His legacy inspires physicists to seek elegant, fundamental principles that can explain diverse phenomena and predict new discoveries.</p>
          </div>
        </article>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800">What is the twin paradox?</h3>
              <p className="mt-2 text-gray-600">The twin paradox involves one twin traveling at high speed to a distant star and returning, while the other remains on Earth. Upon reunion, the traveling twin is younger than the stay-at-home twin due to time dilation. The apparent paradox resolves because the traveling twin experiences acceleration, breaking the symmetry between reference frames. Experiments with atomic clocks confirm this prediction.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800">How does relativity affect everyday technology?</h3>
              <p className="mt-2 text-gray-600">GPS satellites must account for both special and general relativistic effects. Their clocks run faster due to weaker gravity (general relativity) but slower due to their motion (special relativity). The net effect is about 38 microseconds per day, which would cause GPS errors of several miles if uncorrected. Many other technologies, from particle accelerators to satellite communications, rely on relativistic physics.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800">What is the significance of the speed of light in relativity?</h3>
              <p className="mt-2 text-gray-600">The speed of light in vacuum (c ≈ 3×10⁸ m/s) serves as the cosmic speed limit and a fundamental constant connecting space and time. It represents the maximum speed at which information or causality can propagate. The constancy of light speed for all observers leads to time dilation, length contraction, and the equivalence of mass and energy (E=mc²).</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800">How does general relativity explain planetary orbits?</h3>
              <p className="mt-2 text-gray-600">In general relativity, planets follow geodesics (straightest possible paths) in the curved spacetime around the Sun. The Sun's mass curves spacetime, and planets move along these curved paths, which appear as elliptical orbits. This explanation naturally accounts for Mercury's orbital precession, which Newtonian gravity couldn't fully explain.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Could faster-than-light travel be possible?</h3>
              <p className="mt-2 text-gray-600">According to special relativity, objects with mass cannot reach or exceed light speed. However, theoretical concepts like wormholes or warp drives propose ways to bypass this restriction by manipulating spacetime geometry rather than moving through space faster than light. These ideas remain speculative and face significant theoretical and practical challenges.</p>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Test Your Knowledge</h2>
          
          <div className="space-y-8">
            {quizQuestions.map((q, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{q.question}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {q.options.map((option, optIndex) => (
                    <button
                      key={optIndex}
                      onClick={() => handleQuizAnswer(index, option)}
                      className={`p-3 rounded-lg text-left transition-colors ${
                        quizAnswers[index] === option 
                          ? option === q.answer 
                            ? 'bg-green-100 border-green-500' 
                            : 'bg-red-100 border-red-500'
                          : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                      } border`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                
                {quizAnswers[index] && (
                  <div className={`mt-3 p-3 rounded-lg ${
                    quizAnswers[index] === q.answer ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                  }`}>
                    {quizAnswers[index] === q.answer ? 'Correct!' : `Incorrect. The right answer is ${q.answer}.`}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">HAM Blogs</h3>
              <p className="text-gray-400">Providing insightful content across multiple categories since 2026.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/category/entertainment" className="hover:text-white">Entertainment</Link></li>
                <li><Link href="/category/technology" className="hover:text-white">Technology</Link></li>
                <li><Link href="/category/health" className="hover:text-white">Health</Link></li>
                <li><Link href="/category/travel" className="hover:text-white">Travel</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 HAM Blogs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RelativityTheoryEinsteinContributions;