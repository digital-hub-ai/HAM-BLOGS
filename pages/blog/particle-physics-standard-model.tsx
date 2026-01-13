import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ParticlePhysicsStandardModel = () => {
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
      question: "How many generations of fermions are there in the Standard Model?",
      options: ["Two", "Three", "Four", "Six"],
      answer: "Three"
    },
    {
      question: "Which particle mediates the weak nuclear force?",
      options: ["Photon", "Gluon", "W and Z bosons", "Higgs boson"],
      answer: "W and Z bosons"
    },
    {
      question: "What fundamental force is NOT included in the Standard Model?",
      options: ["Strong force", "Weak force", "Gravity", "Electromagnetic force"],
      answer: "Gravity"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>Particle Physics: Standard Model | Science Blog</title>
        <meta name="description" content="The fundamental particles and forces that make up our universe" />
        <link rel="canonical" href="https://www.ham-blogs.com/blog/particle-physics-standard-model" />
        <meta property="og:title" content="Particle Physics: Standard Model" />
        <meta property="og:description" content="The fundamental particles and forces that make up our universe" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Particle Physics: Standard Model" />
        <meta name="twitter:description" content="The fundamental particles and forces that make up our universe" />
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
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Particle Physics: Standard Model</h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <span className="mr-4">January 6, 2026</span>
            <span>•</span>
            <span className="ml-4">12 min read</span>
            <button 
              onClick={() => toggleBookmark(0)}
              className={`ml-auto text-xl ${bookmarks.includes(0) ? 'text-red-500' : 'text-gray-300'}`}
            >
              {bookmarks.includes(0) ? '❤️' : '🤍'}
            </button>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead">The Standard Model of particle physics represents one of the most successful and comprehensive theories in the history of science. It describes the fundamental particles that constitute matter and the forces that govern their interactions. Developed over decades through collaborative efforts of thousands of physicists worldwide, this elegant framework explains phenomena ranging from the behavior of subatomic particles to the early moments of the universe.</p>
            
            <h2>Fundamental Particles: The Building Blocks of Reality</h2>
            <p>The Standard Model organizes matter into two main categories: fermions and bosons. Fermions, which include quarks and leptons, are the particles that constitute matter. Bosons mediate the fundamental forces. The model recognizes six quarks (up, down, charm, strange, top, bottom) and six leptons (electron, muon, tau, and their corresponding neutrinos), grouped into three generations of increasing mass.</p>
            
            <p>Quarks combine to form composite particles called hadrons, including protons and neutrons that make up atomic nuclei. Quarks carry fractional electric charges (+2/3 or -1/3) and participate in the strong nuclear force through color charge. Leptons, in contrast, are elementary particles that do not experience the strong force. The electron is stable and familiar from chemistry, while heavier leptons decay rapidly into lighter ones.</p>
            
            <h2>The Four Fundamental Forces</h2>
            <p>The Standard Model describes three of the four fundamental forces: electromagnetic, weak nuclear, and strong nuclear forces. The electromagnetic force, mediated by photons, governs interactions between charged particles and underlies chemistry, optics, and electronics. The weak nuclear force, mediated by W and Z bosons, is responsible for radioactive decay and plays a crucial role in stellar fusion processes.</p>
            
            <p>The strong nuclear force, mediated by gluons, binds quarks together to form protons and neutrons and holds atomic nuclei together despite electrostatic repulsion between protons. This force exhibits unique properties: it strengthens with distance (unlike other forces) and confines quarks so they never exist in isolation—a phenomenon called quark confinement.</p>
            
            <h2>Electroweak Unification</h2>
            <p>One of the Standard Model's triumphs is the unification of electromagnetic and weak forces into a single electroweak force at high energies. At ordinary energies, these forces appear distinct, but at energies comparable to the early universe, they merge. The W and Z bosons acquire mass through interaction with the Higgs field, while the photon remains massless, explaining their different ranges and strengths.</p>
            
            <p>This unification was confirmed through precision measurements at particle colliders and earned Sheldon Glashow, Abdus Salam, and Steven Weinberg the Nobel Prize in Physics in 1979. The prediction and subsequent discovery of the W and Z bosons in 1983 at CERN provided crucial evidence for electroweak theory.</p>
            
            <h2>The Higgs Mechanism and Discovery</h2>
            <p>The Higgs mechanism explains how fundamental particles acquire mass through interaction with the Higgs field permeating all space. Peter Higgs and others predicted the existence of a scalar boson associated with this field in 1964. The search for this elusive particle, often called the "God particle," culminated in its discovery at the Large Hadron Collider in 2012.</p>
            
            <p>The Higgs boson's discovery completed the Standard Model's particle inventory and validated the theoretical framework. Its measured properties matched Standard Model predictions remarkably well, though some subtle discrepancies hint at possible new physics beyond the Standard Model.</p>
            
            <h2>Quantum Chromodynamics: The Strong Force</h2>
            <p>Quantum chromodynamics (QCD) describes the strong nuclear force that binds quarks into hadrons. Unlike other forces, the strong force increases with distance, preventing quarks from existing in isolation. This property, called confinement, explains why we observe only color-neutral combinations of quarks.</p>
            
            <p>QCD also exhibits asymptotic freedom—quarks behave almost as free particles at very high energies or short distances. This property enabled the development of perturbative QCD calculations and earned David Gross, Frank Wilczek, and David Politzer the Nobel Prize in 2004. The strong force is responsible for most of the mass of ordinary matter through binding energy.</p>
            
            <h2>Accomplishments and Predictive Power</h2>
            <p>The Standard Model has achieved extraordinary predictive success. It predicted the existence and properties of the W and Z bosons before their discovery, the charm and bottom quarks, and the top quark with remarkable precision. The model's predictions have been tested to incredible accuracy—some measurements agree with theory to 12 decimal places.</p>
            
            <p>Technologies developed for particle physics research have transformed society: the World Wide Web originated at CERN, PET scans use antimatter annihilation, and particle detector technologies contribute to medical imaging and security screening. The Standard Model's success demonstrates the power of theoretical physics to predict and explain natural phenomena.</p>
            
            <h2>Limitations and Open Questions</h2>
            <p>Despite its successes, the Standard Model leaves crucial questions unanswered. It doesn't incorporate gravity, which requires general relativity. The model doesn't explain dark matter or dark energy, which comprise most of the universe's content. It doesn't account for the matter-antimatter asymmetry observed in the universe.</p>
            
            <p>The Standard Model also contains numerous arbitrary parameters whose values must be determined experimentally rather than predicted theoretically. The hierarchy problem questions why the Higgs boson's mass remains stable against quantum corrections. Neutrino oscillations, while accommodated by the model, weren't originally predicted.</p>
            
            <h2>Frontiers Beyond the Standard Model</h2>
            <p>Current research explores physics beyond the Standard Model through multiple approaches. Supersymmetry proposes that every known particle has a heavier superpartner, potentially solving the hierarchy problem and providing dark matter candidates. Extra-dimensional theories suggest our universe has additional spatial dimensions.</p>
            
            <p>Grand Unified Theories attempt to merge the electromagnetic, weak, and strong forces into a single force at extremely high energies. String theory proposes that fundamental particles are tiny vibrating strings, potentially incorporating gravity. Dark matter experiments search for particles beyond the Standard Model.</p>
            
            <h2>Experimental Verification and Future Prospects</h2>
            <p>Particle accelerators continue testing the Standard Model's predictions with increasing precision. The Large Hadron Collider's upgraded performance will probe rare processes and potential new particles. Future colliders, including proposed circular and linear designs, aim to reach higher energies and luminosities.</p>
            
            <p>Complementary approaches include precision measurements of the electron's magnetic moment, searches for electric dipole moments, and investigations of CP violation. Astrophysical observations of dark matter and dark energy provide additional constraints on theoretical models.</p>
            
            <h2>Impact on Our Understanding of the Universe</h2>
            <p>The Standard Model provides our deepest understanding of matter and energy. It explains how the universe evolved from the Big Bang, how stars produce energy, and how atomic nuclei form. The model connects the smallest scales of particle physics with the largest scales of cosmology.</p>
            
            <p>As we continue exploring the frontiers of particle physics, the Standard Model serves both as a foundation for our current understanding and as a guidepost indicating where new discoveries await. The quest to complete our understanding of fundamental physics continues to drive human curiosity and technological innovation.</p>
          </div>
        </article>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800">Why don't we observe quarks freely in nature?</h3>
              <p className="mt-2 text-gray-600">Quarks are confined by the strong nuclear force, which strengthens with distance. As you try to separate quarks, the energy in the color field between them increases until it becomes energetically favorable to create new quark-antiquark pairs rather than separate the original quarks. This property, called color confinement, ensures that only color-neutral combinations of quarks (hadrons) exist as free particles.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800">What is antimatter and why does it exist?</h3>
              <p className="mt-2 text-gray-600">Antimatter consists of antiparticles with opposite quantum numbers to their particle counterparts (opposite charge, etc.). Every particle has an antiparticle partner. Antimatter arises naturally from quantum field theory, which requires both positive and negative energy solutions. When matter and antimatter meet, they annihilate, releasing energy according to E=mc².</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800">How do particle detectors work?</h3>
              <p className="mt-2 text-gray-600">Particle detectors use various techniques to track and measure particle properties. Tracking chambers trace particle paths through magnetic fields to determine momentum. Calorimeters absorb particles to measure energy. Cherenkov detectors identify particles by light emission when they exceed light speed in a medium. Modern detectors combine multiple techniques to reconstruct particle events.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800">What is the significance of the Higgs field's vacuum expectation value?</h3>
              <p className="mt-2 text-gray-600">The Higgs field has a non-zero vacuum expectation value throughout space, breaking the electroweak symmetry and giving mass to fundamental particles. Without this property, all particles would be massless. The vacuum expectation value determines the masses of the W and Z bosons and provides the origin of mass for fermions through Yukawa couplings.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Could there be additional fundamental forces?</h3>
              <p className="mt-2 text-gray-600">While the Standard Model includes three fundamental forces, some theories predict additional forces. Dark matter could interact through new forces that couple only weakly to ordinary matter. Grand unified theories sometimes predict additional gauge bosons. Experimental searches continue for hypothetical forces like the fifth force, though none have been definitively confirmed.</p>
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

export default ParticlePhysicsStandardModel;