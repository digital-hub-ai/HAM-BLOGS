import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ElectromagnetismMaxwellEquations = () => {
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
      question: "What does Faraday's Law of Induction describe?",
      options: ["Electric fields create magnetic fields", "Magnetic fields create electric fields", "Electric charges create electric fields", "Currents create magnetic fields"],
      answer: "Magnetic fields create electric fields"
    },
    {
      question: "Which Maxwell equation describes how electric charges create electric fields?",
      options: ["Gauss's Law", "Gauss's Law for Magnetism", "Faraday's Law", "Ampère-Maxwell Law"],
      answer: "Gauss's Law"
    },
    {
      question: "What did Maxwell's addition to Ampère's Law account for?",
      options: ["Magnetic monopoles", "Displacement current", "Electromagnetic radiation", "Electric field variation"],
      answer: "Displacement current"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>Electromagnetism: Maxwell's Equations | Science Blog</title>
        <meta name="description" content="The unified theory of electric and magnetic phenomena" />
        <link rel="canonical" href="https://www.ham-blogs.com/blog/electromagnetism-maxwell-equations" />
        <meta property="og:title" content="Electromagnetism: Maxwell's Equations" />
        <meta property="og:description" content="The unified theory of electric and magnetic phenomena" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Electromagnetism: Maxwell's Equations" />
        <meta name="twitter:description" content="The unified theory of electric and magnetic phenomena" />
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
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Electromagnetism: Maxwell's Equations</h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <span className="mr-4">January 3, 2026</span>
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
            <p className="lead">James Clerk Maxwell's four equations represent one of the greatest achievements in physics, unifying electricity and magnetism into a single electromagnetic theory. Published in 1865, these equations not only synthesized the work of predecessors like Gauss, Faraday, and Ampère but also predicted the existence of electromagnetic waves, including light itself. Maxwell's equations form the foundation for modern electrical engineering, telecommunications, and optics.</p>
            
            <h2>Gauss's Law: Electric Charges and Fields</h2>
            <p>Gauss's Law, the first of Maxwell's equations, describes how electric charges create electric fields. It states that the electric flux through any closed surface is proportional to the total charge enclosed by that surface. Mathematically, the integral form is ∮E·dA = Q_enclosed/ε₀, where E is the electric field, dA is the differential area vector, Q is the enclosed charge, and ε₀ is the permittivity of free space.</p>
            
            <p>This law explains why electric field lines originate on positive charges and terminate on negative charges. It also provides a powerful method for calculating electric fields in systems with high symmetry, such as spherical, cylindrical, or planar charge distributions. Gauss's Law is fundamental to understanding electrostatics and the behavior of conductors in equilibrium.</p>
            
            <h2>Gauss's Law for Magnetism: The Absence of Magnetic Monopoles</h2>
            <p>The second Maxwell equation, Gauss's Law for Magnetism, states that the magnetic flux through any closed surface is always zero. This means that magnetic field lines are always closed loops—there are no magnetic charges or "magnetic monopoles." Unlike electric charges, which can exist in isolation, magnetic poles always come in pairs (north and south).</p>
            
            <p>This law reflects the fundamental difference between electric and magnetic phenomena. While isolated electric charges exist, isolated magnetic poles have never been observed despite extensive searches. This asymmetry between electricity and magnetism intrigued physicists and led to theoretical investigations into possible magnetic monopoles.</p>
            
            <h2>Faraday's Law: Induction and Changing Fields</h2>
            <p>Faraday's Law, the third equation, describes how changing magnetic fields create electric fields. It states that the electromotive force (EMF) around a closed loop equals the negative rate of change of magnetic flux through the loop: ∮E·dl = -dΦB/dt, where ΦB is the magnetic flux. This principle underlies electrical generators, transformers, and inductors.</p>
            
            <p>Faraday's Law explains electromagnetic induction, which is essential for power generation. When a conductor moves through a magnetic field or when the magnetic field through a stationary conductor changes, an electric field drives current through the conductor. This phenomenon enables the conversion of mechanical energy to electrical energy.</p>
            
            <h2>Ampère-Maxwell Law: Currents and Changing Fields</h2>
            <p>The fourth equation, Ampère's Law with Maxwell's correction, describes how electric currents and changing electric fields create magnetic fields. Maxwell's crucial addition was the displacement current term, which accounts for the magnetic field created by a changing electric field. The complete equation is ∮B·dl = μ₀(I_enclosed + ε₀dΦE/dt), where μ₀ is the permeability of free space.</p>
            
            <p>Maxwell's displacement current term was essential for the mathematical consistency of the theory and predicted the existence of electromagnetic waves. Without this term, the equations would violate charge conservation in time-varying fields. The displacement current enables the propagation of electromagnetic waves through vacuum.</p>
            
            <h2>Electromagnetic Waves: The Prediction That Changed Everything</h2>
            <p>Maxwell's equations predict that changing electric fields create changing magnetic fields, which in turn create changing electric fields, resulting in self-propagating electromagnetic waves. By combining the equations, Maxwell derived the wave equation for electromagnetic fields and calculated the wave speed as c = 1/√(μ₀ε₀).</p>
            
            <p>When Maxwell calculated this speed using known values of μ₀ and ε₀, he found it matched the measured speed of light. This led him to the revolutionary conclusion that light is an electromagnetic wave. This unification of optics with electromagnetism was one of the most profound insights in physics.</p>
            
            <h2>Mathematical Formulation and Symmetry</h2>
            <p>Maxwell's equations can be expressed in both integral and differential forms. The differential forms, using divergence and curl operators, highlight the local relationships between fields and their sources: ∇·E = ρ/ε₀, ∇·B = 0, ∇×E = -∂B/∂t, and ∇×B = μ₀J + μ₀ε₀∂E/∂t.</p>
            
            <p>The equations exhibit beautiful mathematical symmetry. Electric and magnetic fields appear in complementary roles, with electric charges and currents sourcing electric fields, while magnetic fields have no corresponding "charges." The symmetry is broken only by the absence of magnetic monopoles, which would appear in the ∇·B equation.</p>
            
            <h2>Applications in Modern Technology</h2>
            <p>Maxwell's equations underlie virtually all modern electrical and electronic technology. Circuit analysis relies on electromagnetic principles. Antennas operate by accelerating charges to create electromagnetic waves. Fiber optic communication transmits information using electromagnetic waves in the optical spectrum.</p>
            
            <p>Medical imaging technologies like MRI utilize electromagnetic principles. Wireless communication depends on electromagnetic wave propagation. Power generation, transmission, and distribution all rely on electromagnetic induction. Even the operation of computers involves electromagnetic interactions at the microscopic level.</p>
            
            <h2>Special Relativity Connection</h2>
            <p>Maxwell's equations were instrumental in Einstein's development of special relativity. The equations appeared different in different reference frames under Newtonian physics, suggesting a preferred frame of reference. Einstein resolved this by showing that space and time are interrelated, leading to the theory of special relativity.</p>
            
            <p>The invariance of Maxwell's equations under Lorentz transformations, rather than Galilean transformations, revealed that electromagnetic phenomena are fundamentally relativistic. This insight unified space, time, and electromagnetism in a profound way.</p>
            
            <h2>Quantum Electrodynamics Extension</h2>
            <p>Classical electromagnetism, based on Maxwell's equations, was later extended to quantum electrodynamics (QED), which describes electromagnetic interactions at the quantum level. QED treats electromagnetic fields as quantized, with photons as the force carriers.</p>
            
            <p>QED provides the most accurate predictions in all of science, with some calculations agreeing with experiments to more than ten decimal places. It successfully combines quantum mechanics with special relativity and remains a cornerstone of the Standard Model of particle physics.</p>
            
            <h2>Nonlinear and Advanced Effects</h2>
            <p>In extreme conditions, Maxwell's equations may be modified by quantum effects or strong-field phenomena. Nonlinear optics occurs when electromagnetic fields are strong enough to affect the optical properties of materials. These effects enable frequency doubling, optical switching, and other advanced applications.</p>
            
            <p>In the presence of strong gravitational fields, general relativity modifies electromagnetic behavior. The interaction of electromagnetic fields with curved spacetime is essential for understanding phenomena like light bending around massive objects and electromagnetic processes near black holes.</p>
            
            <h2>Numerical Methods and Computational Electromagnetics</h2>
            <p>For complex geometries and materials, Maxwell's equations are solved numerically using methods like the finite element method, finite difference time domain, and method of moments. These computational approaches enable the design of antennas, microwave circuits, optical devices, and metamaterials.</p>
            
            <p>Modern computer simulations based on Maxwell's equations allow engineers to optimize electromagnetic devices before building prototypes, saving time and resources while enabling innovations impossible to achieve through analytical methods alone.</p>
            
            <h2>Future Perspectives</h2>
            <p>Maxwell's equations continue to guide research in emerging technologies. Plasmonics manipulates electromagnetic fields at the nanoscale. Metamaterials engineer unusual electromagnetic properties. Terahertz technology explores the largely untapped region between microwaves and infrared light.</p>
            
            <p>Quantum technologies exploit electromagnetic interactions between light and matter. As we push toward quantum computing and communication, Maxwell's equations remain essential for understanding the electromagnetic environment that controls quantum systems.</p>
          </div>
        </article>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800">Why did Maxwell add the displacement current term?</h3>
              <p className="mt-2 text-gray-600">Maxwell added the displacement current term to ensure the mathematical consistency of his equations. Without it, Ampère's Law violated charge conservation in time-varying fields. The displacement current also enabled the prediction of electromagnetic waves, showing that changing electric fields could create magnetic fields, just as Faraday's Law showed changing magnetic fields create electric fields.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800">How do Maxwell's equations relate to the speed of light?</h3>
              <p className="mt-2 text-gray-600">When Maxwell combined his equations mathematically, he derived the wave equation for electromagnetic fields. The speed of these waves was expressed as c = 1/√(μ₀ε₀), where μ₀ and ε₀ are fundamental constants. When calculated using known values, this speed matched the measured speed of light, leading Maxwell to conclude that light is an electromagnetic wave.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800">What would happen if magnetic monopoles existed?</h3>
              <p className="mt-2 text-gray-600">If magnetic monopoles existed, Gauss's Law for Magnetism would become ∇·B = ρm, where ρm is magnetic charge density. A modified Faraday's Law would include magnetic current density. These changes would restore symmetry between electric and magnetic phenomena. Dirac showed that magnetic monopoles would explain the quantization of electric charge, but none have been definitively observed.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800">How do Maxwell's equations apply to materials?</h3>
              <p className="mt-2 text-gray-600">In materials, Maxwell's equations are modified by introducing auxiliary fields D (electric displacement) and H (magnetic field intensity). The relationships D = εE and B = μH connect the fundamental fields (E, B) to the auxiliary fields (D, H) through material properties: permittivity (ε) and permeability (μ). These relations account for polarization and magnetization effects in materials.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Can Maxwell's equations be derived from quantum mechanics?</h3>
              <p className="mt-2 text-gray-600">Maxwell's equations emerge as the classical limit of quantum electrodynamics (QED). In QED, electromagnetic phenomena result from photon exchange between charged particles. Maxwell's equations describe the collective behavior of large numbers of photons. This derivation shows that classical electromagnetism is the macroscopic manifestation of quantum electromagnetic interactions.</p>
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

export default ElectromagnetismMaxwellEquations;