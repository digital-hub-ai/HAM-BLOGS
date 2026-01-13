import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ThermodynamicsLawsApplications = () => {
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
      question: "What does the Second Law of Thermodynamics state?",
      options: ["Energy cannot be created or destroyed", "Entropy of an isolated system never decreases", "Temperature differences drive heat flow", "Pressure and volume are inversely related"],
      answer: "Entropy of an isolated system never decreases"
    },
    {
      question: "Which law of thermodynamics defines temperature?",
      options: ["Zeroth Law", "First Law", "Second Law", "Third Law"],
      answer: "Zeroth Law"
    },
    {
      question: "What happens to entropy at absolute zero according to the Third Law?",
      options: ["It becomes infinite", "It equals Boltzmann's constant", "It reaches a constant minimum", "It becomes negative"],
      answer: "It reaches a constant minimum"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>Thermodynamics: Laws and Applications | Science Blog</title>
        <meta name="description" content="From heat engines to entropy, the laws that govern energy" />
        <link rel="canonical" href="https://www.ham-blogs.com/blog/thermodynamics-laws-applications" />
        <meta property="og:title" content="Thermodynamics: Laws and Applications" />
        <meta property="og:description" content="From heat engines to entropy, the laws that govern energy" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Thermodynamics: Laws and Applications" />
        <meta name="twitter:description" content="From heat engines to entropy, the laws that govern energy" />
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
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Thermodynamics: Laws and Applications</h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <span className="mr-4">January 4, 2026</span>
            <span>•</span>
            <span className="ml-4">10 min read</span>
            <button 
              onClick={() => toggleBookmark(0)}
              className={`ml-auto text-xl ${bookmarks.includes(0) ? 'text-red-500' : 'text-gray-300'}`}
            >
              {bookmarks.includes(0) ? '❤️' : '🤍'}
            </button>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead">Thermodynamics stands as one of the most fundamental and far-reaching branches of physics, governing everything from the efficiency of engines to the direction of time itself. The four laws of thermodynamics establish universal principles that apply to all physical systems, from the microscopic world of molecules to the cosmic scale of black holes. These laws, refined over centuries of scientific investigation, provide the theoretical foundation for understanding energy, heat, and entropy.</p>
            
            <h2>The Zeroth Law: Defining Temperature</h2>
            <p>Though named after the others, the Zeroth Law of Thermodynamics establishes the fundamental concept of temperature. It states that if two systems are each in thermal equilibrium with a third system, they are also in thermal equilibrium with each other. This law allows us to define temperature as a measurable property and enables the construction of thermometers.</p>
            
            <p>The Zeroth Law essentially defines what we mean by temperature and provides the basis for temperature measurement. When systems reach thermal equilibrium, their temperatures equalize, and no net heat flows between them. This principle underlies all temperature measurements and thermal contact applications.</p>
            
            <h2>The First Law: Conservation of Energy</h2>
            <p>The First Law of Thermodynamics embodies the principle of conservation of energy, stating that energy cannot be created or destroyed, only transformed from one form to another. For a thermodynamic system, the change in internal energy equals the heat added to the system minus the work done by the system.</p>
            
            <p>This law revolutionized physics by establishing that heat is a form of energy, not a substance as previously thought. It explains why perpetual motion machines of the first kind are impossible—they would violate energy conservation. The First Law applies universally, from steam engines to biological metabolism.</p>
            
            <h2>The Second Law: Entropy and Direction of Time</h2>
            <p>The Second Law of Thermodynamics introduces entropy—a measure of disorder or randomness—and states that the entropy of an isolated system never decreases over time. This law explains why heat flows spontaneously from hot to cold objects, why gases expand to fill containers, and why perpetual motion machines of the second kind are impossible.</p>
            
            <p>Entropy provides the arrow of time, distinguishing past from future. The Second Law implies that natural processes are irreversible and tend toward maximum entropy. It sets fundamental limits on the efficiency of heat engines and refrigerators, explaining why no engine can be 100% efficient.</p>
            
            <h2>The Third Law: Absolute Zero</h2>
            <p>The Third Law of Thermodynamics states that the entropy of a perfect crystal at absolute zero temperature (0 K or -273.15°C) is exactly zero. This law provides an absolute reference point for entropy calculations and implies that absolute zero is impossible to reach through finite cooling steps.</p>
            
            <p>The Third Law has profound implications for low-temperature physics and quantum mechanics. It establishes that at absolute zero, all molecular motion ceases, and systems reach their lowest possible energy state. This law enables the calculation of absolute entropies from calorimetric measurements.</p>
            
            <h2>Heat Engines and Carnot Efficiency</h2>
            <p>Thermodynamics found its first major application in understanding heat engines, which convert thermal energy into mechanical work. Sadi Carnot analyzed the ideal heat engine and showed that maximum efficiency depends only on the temperatures of the hot and cold reservoirs, not on the working substance.</p>
            
            <p>The Carnot efficiency formula reveals that no engine can exceed the efficiency of a reversible Carnot engine operating between the same temperatures. Real engines fall short due to irreversibilities like friction and heat losses. This principle guided the Industrial Revolution and remains crucial for modern power generation.</p>
            
            <h2>Refrigeration and Heat Pumps</h2>
            <p>Thermodynamic principles also govern refrigerators and heat pumps, which move heat from colder to hotter bodies using work input. The coefficient of performance measures their efficiency, showing that these devices can deliver more thermal energy than the electrical energy they consume.</p>
            
            <p>Modern refrigeration technology relies on thermodynamic cycles like the vapor compression cycle. These systems enable food preservation, air conditioning, and cryogenic applications. Heat pumps provide efficient heating by extracting thermal energy from outdoor air or ground.</p>
            
            <h2>Statistical Interpretation</h2>
            <p>Boltzmann's statistical interpretation connected thermodynamics to microscopic behavior, showing that entropy relates to the number of microscopic states corresponding to a macroscopic state. The famous equation S = k log W connects entropy (S) to the number of microstates (W) through Boltzmann's constant (k).</p>
            
            <p>This statistical approach explains thermodynamic irreversibility as the overwhelming probability of systems evolving toward more probable, higher-entropy states. It bridges the microscopic world of atoms and molecules with macroscopic thermodynamic properties.</p>
            
            <h2>Applications in Engineering</h2>
            <p>Thermodynamic principles guide the design of countless engineering systems. Power plants use Rankine cycles to convert thermal energy to electricity. Aircraft engines employ Brayton cycles for propulsion. Internal combustion engines follow Otto or Diesel cycles depending on their design.</p>
            
            <p>Chemical engineers use thermodynamics to predict reaction equilibria and optimize processes. Materials science applies thermodynamic principles to understand phase transitions and alloy behavior. Even renewable energy systems like solar panels and fuel cells are analyzed using thermodynamic principles.</p>
            
            <h2>Biological Thermodynamics</h2>
            <p>Living organisms are thermodynamic systems that maintain order by exporting entropy to their environment. Metabolic processes convert food energy into useful work while generating heat. Photosynthesis converts solar energy into chemical energy, supporting nearly all life on Earth.</p>
            
            <p>Biological systems operate far from thermodynamic equilibrium, requiring continuous energy input to maintain structure and function. The efficiency of biological processes, though often low by engineering standards, suffices for survival and reproduction.</p>
            
            <h2>Quantum Thermodynamics</h2>
            <p>At the quantum scale, thermodynamic principles still apply but manifest differently. Quantum systems can exhibit phenomena like entanglement entropy and quantum coherence that have no classical analogs. Quantum thermodynamics explores how thermodynamic laws apply to few-particle systems and quantum information processing.</p>
            
            <p>These investigations reveal new possibilities for quantum heat engines, quantum refrigerators, and quantum batteries. Quantum effects may enable more efficient energy conversion in nanoscale devices.</p>
            
            <h2>Environmental and Cosmological Implications</h2>
            <p>Thermodynamics illuminates environmental challenges like climate change. The greenhouse effect results from atmospheric gases trapping thermal radiation, affecting Earth's energy balance. Renewable energy systems harness energy flows driven by thermodynamic gradients.</p>
            
            <p>Cosmologically, thermodynamics addresses the universe's ultimate fate. The heat death hypothesis suggests that the universe will eventually reach maximum entropy, with no available energy for work. Black hole thermodynamics connects gravity, quantum mechanics, and thermodynamics.</p>
            
            <h2>Modern Developments</h2>
            <p>Contemporary thermodynamics explores non-equilibrium systems, nanoscale thermodynamics, and information thermodynamics. Maxwell's demon and Szilard engines demonstrate connections between information and thermodynamic entropy.</p>
            
            <p>Stochastic thermodynamics analyzes fluctuations in small systems, while finite-time thermodynamics optimizes processes subject to time constraints. These developments extend classical thermodynamics to new domains while preserving its fundamental principles.</p>
          </div>
        </article>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800">What is the difference between heat and temperature?</h3>
              <p className="mt-2 text-gray-600">Temperature measures the average kinetic energy of particles in a substance, while heat is the transfer of thermal energy between systems due to temperature differences. Temperature is intensive (independent of amount), while heat is extensive (depends on quantity). You can have a large volume of water at low temperature containing more thermal energy than a small volume at high temperature.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800">Why can't we reach absolute zero?</h3>
              <p className="mt-2 text-gray-600">The Third Law of Thermodynamics implies that reaching absolute zero would require infinite steps of cooling, making it physically impossible. As temperature approaches absolute zero, the work required to remove additional heat approaches infinity. Quantum mechanics also ensures that particles retain zero-point energy even at absolute zero.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800">What is entropy really?</h3>
              <p className="mt-2 text-gray-600">Entropy is a measure of disorder or randomness in a system, but more fundamentally, it represents the number of microscopic arrangements corresponding to a given macroscopic state. Higher entropy means more possible microscopic configurations. Entropy also measures energy dispersion and our inability to extract useful work from thermal energy.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800">How does thermodynamics relate to information?</h3>
              <p className="mt-2 text-gray-600">Information and thermodynamic entropy are deeply connected. Landauer's principle states that erasing information requires energy dissipation. Maxwell's demon demonstrates that information can seemingly violate the Second Law. Modern research explores how information processing has thermodynamic costs and how thermodynamics constrains computation.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Can entropy ever decrease?</h3>
              <p className="mt-2 text-gray-600">Entropy can decrease locally in open systems that export entropy to their surroundings. Living organisms maintain low internal entropy by generating entropy in their environment. However, the total entropy of an isolated system never decreases. Local entropy reductions always require energy input and increase entropy elsewhere.</p>
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

export default ThermodynamicsLawsApplications;