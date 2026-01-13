import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

const CosmologyDarkMatterEnergy = () => {
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
      question: "What percentage of the universe is composed of dark matter and dark energy?",
      options: ["About 5%", "About 25%", "About 50%", "About 95%"],
      answer: "About 95%"
    },
    {
      question: "How was dark matter first inferred?",
      options: ["Through gravitational lensing", "By observing galaxy rotation curves", "From cosmic microwave background measurements", "By detecting dark matter particles"],
      answer: "By observing galaxy rotation curves"
    },
    {
      question: "What evidence suggests the existence of dark energy?",
      options: ["Accelerating expansion of the universe", "Galaxy rotation curves", "Gravitational lensing", "Stellar formation rates"],
      answer: "Accelerating expansion of the universe"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>Cosmology: Dark Matter and Energy | Science Blog</title>
        <meta name="description" content="Understanding the mysterious components of our universe" />
        <link rel="canonical" href="https://www.ham-blogs.com/blog/cosmology-dark-matter-energy" />
        <meta property="og:title" content="Cosmology: Dark Matter and Energy" />
        <meta property="og:description" content="Understanding the mysterious components of our universe" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cosmology: Dark Matter and Energy" />
        <meta name="twitter:description" content="Understanding the mysterious components of our universe" />
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
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cosmology: Dark Matter and Energy</h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <span className="mr-4">January 5, 2026</span>
            <span>•</span>
            <span className="ml-4">11 min read</span>
            <button 
              onClick={() => toggleBookmark(0)}
              className={`ml-auto text-xl ${bookmarks.includes(0) ? 'text-red-500' : 'text-gray-300'}`}
            >
              {bookmarks.includes(0) ? '❤️' : '🤍'}
            </button>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead">Our universe harbors profound mysteries that challenge our understanding of fundamental physics. Despite decades of research, ordinary matter—atoms that make up stars, planets, and ourselves—comprises only about 5% of the universe's total content. The remaining 95% consists of two enigmatic components: dark matter (~27%) and dark energy (~68%). These invisible entities shape the cosmos on the largest scales and determine its ultimate fate.</p>
            
            <h2>Dark Matter: The Invisible Architect</h2>
            <p>Dark matter was first inferred in the 1930s by Swiss astronomer Fritz Zwicky, who noticed that galaxies in clusters moved too quickly to be held together by visible matter's gravity alone. Decades later, Vera Rubin's pioneering work on galaxy rotation curves confirmed that spiral galaxies rotate as if embedded in massive halos of invisible matter.</p>
            
            <p>Dark matter doesn't emit, absorb, or reflect electromagnetic radiation, making it invisible to telescopes. Yet it interacts gravitationally with ordinary matter and light, leaving distinctive signatures. Galaxy rotation curves remain flat at large distances, indicating substantial mass beyond visible stars. Gravitational lensing—where massive objects bend light from distant galaxies—reveals dark matter's presence and distribution.</p>
            
            <h2>Evidence for Dark Matter</h2>
            <p>Multiple lines of evidence support dark matter's existence. The Bullet Cluster provides direct evidence through the separation of ordinary matter (visible in X-rays) and dark matter (traced by gravitational lensing). Cosmic Microwave Background (CMB) measurements show that dark matter was essential for forming the first structures in the universe.</p>
            
            <p>Large-scale structure formation also requires dark matter. Computer simulations reproduce the observed cosmic web of galaxies only when dark matter is included. Without it, ordinary matter alone cannot clump fast enough to form the structures we observe.</p>
            
            <h2>Properties and Candidates</h2>
            <p>Dark matter must be cold (moving slowly relative to light speed) to allow structure formation. It's non-baryonic (not made of protons and neutrons) and interacts weakly with ordinary matter. Leading candidates include Weakly Interacting Massive Particles (WIMPs), axions, sterile neutrinos, and primordial black holes.</p>
            
            <p>Direct detection experiments search for rare collisions between dark matter particles and ordinary nuclei in underground detectors. Indirect searches look for dark matter annihilation products. Collider experiments attempt to create dark matter particles. Despite decades of effort, no definitive detection has been confirmed.</p>
            
            <h2>Dark Energy: The Accelerating Universe</h2>
            <p>In 1998, two teams studying distant Type Ia supernovae made a startling discovery: the universe's expansion is accelerating. This implied the existence of a repulsive force counteracting gravity on cosmic scales—dark energy. This discovery earned Saul Perlmutter, Brian Schmidt, and Adam Riess the 2011 Nobel Prize in Physics.</p>
            
            <p>Dark energy behaves like a cosmological constant—a uniform energy density filling space homogeneously. Unlike matter, whose density decreases as the universe expands, dark energy maintains constant density. As the universe grows, more space—and thus more dark energy—appears, driving ever-faster expansion.</p>
            
            <h2>Observational Evidence for Dark Energy</h2>
            <p>Beyond supernova observations, multiple datasets confirm cosmic acceleration. CMB measurements provide precise measurements of the universe's geometry and composition. Baryon acoustic oscillations—sound waves from the early universe—serve as a "standard ruler" for cosmic distances.</p>
            
            <p>Large-scale structure surveys map the cosmic web's evolution over time. Combined with other data, these observations constrain dark energy's equation of state parameter w, which describes its pressure-density relationship. Current measurements suggest w ≈ -1, consistent with Einstein's cosmological constant.</p>
            
            <h2>Theoretical Models of Dark Energy</h2>
            <p>Several theoretical frameworks attempt to explain dark energy. The cosmological constant represents Einstein's original idea of a constant energy density throughout space. Quintessence proposes a dynamic scalar field evolving over cosmic time. Modified gravity theories suggest general relativity breaks down on cosmic scales.</p>
            
            <p>However, the cosmological constant presents the "cosmological constant problem"—quantum field theory predicts vacuum energy density 120 orders of magnitude larger than observed. This discrepancy remains one of physics' greatest puzzles.</p>
            
            <h2>Cosmic Consequences</h2>
            <p>Dark matter and energy fundamentally shape cosmic history. Dark matter dominated early structure formation, creating gravitational wells where ordinary matter could accumulate. Dark energy now dominates, causing the universe's expansion to accelerate. This affects galaxy formation, cluster evolution, and the observable universe's size.</p>
            
            <p>In the far future, if dark energy continues dominating, galaxies beyond our local group will recede beyond our observable horizon. The universe would become increasingly isolated and cold, a scenario called the "Big Freeze" or "Heat Death."</p>
            
            <h2>Current and Future Research</h2>
            <p>Major observational projects advance our understanding. The Euclid space telescope, launched in 2023, maps billions of galaxies to study dark energy and dark matter. The Vera Rubin Observatory will conduct the Legacy Survey of Space and Time, mapping billions of galaxies over ten years.</p>
            
            <p>Ground-based telescopes like the Giant Magellan Telescope and Extremely Large Telescope will provide unprecedented sensitivity for dark matter studies. The upcoming Nancy Grace Roman Space Telescope will conduct wide-area surveys to probe dark energy properties.</p>
            
            <h2>Connections to Fundamental Physics</h2>
            <p>Dark matter and energy connect cosmology to particle physics and quantum field theory. Dark matter could consist of new particles predicted by supersymmetry or other extensions to the Standard Model. Dark energy might reveal new physics beyond general relativity.</p>
            
            <p>These connections motivate searches for physics beyond the Standard Model. Dark matter and energy might be related phenomena, perhaps manifestations of a single underlying theory. Some theories propose that dark matter and dark energy are linked through coupling mechanisms.</p>
            
            <h2>Philosophical Implications</h2>
            <p>Dark matter and energy challenge our conception of reality. They reveal that the universe is predominantly composed of substances we cannot directly observe or understand. This humbling realization echoes historical discoveries that expanded our cosmic perspective.</p>
            
            <p>These mysteries highlight the frontier between known and unknown physics. They demonstrate that our understanding of the cosmos remains incomplete and motivate continued scientific inquiry. The search for dark matter and energy exemplifies humanity's drive to comprehend the universe's deepest secrets.</p>
            
            <h2>Future Prospects</h2>
            <p>Next-generation experiments promise breakthrough discoveries. Direct detection experiments will reach unprecedented sensitivity. Cosmic surveys will map the universe with greater precision. Laboratory experiments will test alternative theories.</p>
            
            <p>Whether dark matter and energy represent new fundamental physics or require modifications to general relativity, their resolution will transform our understanding of the cosmos. These investigations continue the long human tradition of pushing back the frontiers of knowledge.</p>
          </div>
        </article>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800">Could dark matter be made of ordinary matter we haven't seen?</h3>
              <p className="mt-2 text-gray-600">Extensive searches for ordinary matter candidates like planets, brown dwarfs, and black holes (collectively called MACHOs) have shown they cannot account for dark matter's abundance. Big Bang nucleosynthesis calculations also constrain the amount of ordinary matter in the universe. The evidence strongly indicates dark matter consists of new, non-baryonic particles.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800">How do we know dark energy is uniform throughout space?</h3>
              <p className="mt-2 text-gray-600">Observations of the Cosmic Microwave Background show the universe is remarkably homogeneous and isotropic on large scales. Supernova surveys across different directions show consistent acceleration. This uniformity is quantified by the cosmological principle, which assumes the universe appears similar from any location and direction on large scales.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800">Could dark matter and dark energy be the same thing?</h3>
              <p className="mt-2 text-gray-600">While both are mysterious, dark matter and dark energy have opposite effects. Dark matter attracts through gravity, promoting structure formation. Dark energy repels, accelerating cosmic expansion. However, some theories propose unified models where a single field manifests differently at different cosmic epochs.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800">What would happen if dark energy changed over time?</h3>
              <p className="mt-2 text-gray-600">If dark energy's equation of state parameter w becomes less than -1 (phantom dark energy), the universe could experience a "Big Rip" where expansion tears apart galaxies, stars, and eventually atoms. If w increases toward zero, cosmic acceleration might slow, potentially allowing structure formation to resume.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Could our understanding of gravity be wrong instead of dark matter/energy?</h3>
              <p className="mt-2 text-gray-600">Modified Newtonian Dynamics (MOND) and other theories attempt to explain observations without dark matter by modifying gravity. However, these struggle to explain phenomena like the CMB power spectrum and galaxy cluster observations. Dark energy alternatives include f(R) gravity and other extended gravity theories, though they face challenges reproducing all observations.</p>
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

export default CosmologyDarkMatterEnergy;