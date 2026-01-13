import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function ChemicalBondingBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What are the main types of chemical bonds?",
      answer: "The main types of chemical bonds are ionic bonds (formed by electron transfer between metals and nonmetals), covalent bonds (formed by sharing electrons between nonmetals), and metallic bonds (formed by the sea of electrons in metals). There are also weaker intermolecular forces like hydrogen bonds and van der Waals forces."
    },
    {
      question: "What is VSEPR theory?",
      answer: "VSEPR (Valence Shell Electron Pair Repulsion) theory states that electron pairs around a central atom arrange themselves to minimize repulsion between them. This theory helps predict molecular geometry based on the number of bonding and nonbonding electron pairs around the central atom."
    },
    {
      question: "How does molecular shape affect properties?",
      answer: "Molecular shape greatly influences chemical properties such as polarity, boiling point, melting point, and biological activity. For example, the bent shape of water makes it polar, leading to its unique properties like high surface tension and solvent capabilities."
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <Head>
        <title>Chemical Bonding and Molecular Geometry - Chemistry | HAM BLOGS</title>
        <meta name="description" content="Exploring how atoms bond and form molecules with different shapes and properties." />
        <link rel="canonical" href="https://ham-blogs.com/blog/chemical-bonding-molecular-geometry" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              ← Back to Chemistry
            </button>
            <div className="flex space-x-4">
              <button 
                onClick={() => toggleBookmark('main')}
                className={`p-2 rounded-full ${bookmarks.includes('main') ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Chemical Bonding and Molecular Geometry</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">⚛️ Chemistry</span>
            <span>⏱️ 13 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            Exploring how atoms bond and form molecules with different shapes and properties
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Introduction to Chemical Bonding <button onClick={() => toggleBookmark('intro')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Chemical bonding is the attractive force that holds atoms together in compounds. Understanding how and why atoms bond is fundamental to chemistry, as it explains the formation of everything from simple diatomic molecules to complex biological macromolecules. Chemical bonds form to achieve greater stability, typically by allowing atoms to attain a full outer electron shell.
          </p>
          
          <p>
            Atoms bond to achieve noble gas electron configurations, which are particularly stable. This can occur through the transfer of electrons (ionic bonding), sharing of electrons (covalent bonding), or other mechanisms. The type of bond formed depends on the electronegativity difference between the bonding atoms and their positions in the periodic table.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Types of Chemical Bonds <button onClick={() => toggleBookmark('types')} className="ml-2 text-yellow-600">★</button></h2>
          <h3>Ionic Bonding</h3>
          <p>
            Ionic bonds form when electrons are transferred from one atom to another, typically between metals and nonmetals. The metal loses electrons to become a positively charged cation, while the nonmetal gains electrons to become a negatively charged anion. The electrostatic attraction between oppositely charged ions creates the ionic bond. Ionic compounds form crystalline lattice structures and typically have high melting and boiling points.
          </p>

          <h3>Covalent Bonding</h3>
          <p>
            Covalent bonds form when atoms share electrons, typically between nonmetals. The shared electrons are attracted to the nuclei of both atoms, holding them together. Covalent bonds can be single (sharing one pair of electrons), double (sharing two pairs), or triple (sharing three pairs). The strength of covalent bonds varies depending on the atoms involved and the number of shared electrons.
          </p>

          <h3>Metallic Bonding</h3>
          <p>
            Metallic bonds occur in metals, where valence electrons are delocalized and form a "sea of electrons" that moves freely throughout the metal structure. This electron sea model explains the characteristic properties of metals, including electrical conductivity, malleability, ductility, and luster.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Molecular Geometry and VSEPR Theory <button onClick={() => toggleBookmark('geometry')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Molecular geometry refers to the three-dimensional arrangement of atoms in a molecule. The Valence Shell Electron Pair Repulsion (VSEPR) theory explains molecular shapes based on the principle that electron pairs around a central atom arrange themselves to minimize repulsion. Both bonding and nonbonding (lone) electron pairs contribute to this repulsion.
          </p>

          <p>
            According to VSEPR theory, electron pairs position themselves as far apart as possible. The molecular geometry is determined by the number of bonding domains and lone pairs around the central atom. Common geometries include linear (2 bonding domains), trigonal planar (3 bonding domains), tetrahedral (4 bonding domains), trigonal bipyramidal (5 bonding domains), and octahedral (6 bonding domains).
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Polarity and Intermolecular Forces <button onClick={() => toggleBookmark('polarity')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            The shape of molecules and the distribution of electrons determine whether they are polar or nonpolar. Polar molecules have an uneven distribution of electron density, creating partial positive and negative charges. Nonpolar molecules have symmetrical charge distributions. The polarity of molecules affects their intermolecular forces and bulk properties.
          </p>

          <p>
            Intermolecular forces include dipole-dipole interactions (between polar molecules), hydrogen bonding (strong dipole interactions involving H bonded to F, O, or N), and London dispersion forces (temporary dipoles in all molecules). These forces, though weaker than intramolecular bonds, significantly influence boiling points, solubility, and other physical properties.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Applications and Significance <button onClick={() => toggleBookmark('applications')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Understanding chemical bonding and molecular geometry is crucial in many fields. In biology, the shape of molecules determines their function in biological systems. In materials science, bonding properties predict the characteristics of new materials. Pharmaceutical chemistry relies on molecular shape and bonding to design drugs that interact with specific biological targets.
          </p>

          <p>
            The principles of bonding and geometry also explain phenomena like the greenhouse effect, atmospheric chemistry, and the behavior of catalysts. Knowledge of molecular structure allows chemists to predict reactivity patterns and design synthetic pathways for complex molecules.
          </p>
        </section>

        <section className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Interactive Quiz</h2>
          {!isQuizActive ? (
            <button 
              onClick={() => setIsQuizActive(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Test Your Knowledge
            </button>
          ) : (
            <div className="space-y-6">
              <div>
                <p className="font-medium mb-2">1. What type of bond forms between sodium and chlorine in NaCl?</p>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) Covalent bond</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) Ionic bond</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Metallic bond</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) Hydrogen bond</span></label>
              </div>

              <div>
                <p className="font-medium mb-2">2. What molecular geometry would a molecule with 4 bonding domains and no lone pairs have?</p>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) Linear</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) Trigonal planar</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) Tetrahedral</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) Octahedral</span></label>
              </div>

              <button 
                onClick={checkQuizAnswers}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4"
              >
                Check Answers
              </button>
              
              {showQuizResults && (
                <div className="mt-4 p-4 bg-white rounded border">
                  <h3 className="font-bold mb-2">Results:</h3>
                  <p>Question 1: {quizAnswers.q1 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - Sodium (metal) transfers an electron to chlorine (nonmetal), forming an ionic bond.</p>
                  <p>Question 2: {quizAnswers.q2 === 'C' ? '✓ Correct' : '✗ Incorrect (Correct: C)'} - Four bonding domains with no lone pairs result in tetrahedral geometry.</p>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="bg-yellow-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-yellow-800">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="font-semibold">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <nav className="border-t pt-6 mt-8">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold mb-2">Previous Article</h3>
              <Link href="/blog/atomic-structure-periodic-table" className="text-blue-600 hover:underline">
                ← Atomic Structure and the Periodic Table
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Next Article</h3>
              <Link href="/blog/thermodynamics-chemical-reactions" className="text-blue-600 hover:underline">
                Thermodynamics and Chemical Reactions →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}