import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function HumanAnatomyBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What are the main organ systems in the human body?",
      answer: "The human body has 11 major organ systems: circulatory, respiratory, digestive, nervous, endocrine, immune, skeletal, muscular, integumentary (skin), urinary, and reproductive systems. These systems work together to maintain homeostasis and support life."
    },
    {
      question: "How does the nervous system communicate?",
      answer: "The nervous system communicates through electrical and chemical signals. Neurons transmit electrical impulses along their axons and release neurotransmitters at synapses to communicate with other neurons or target cells."
    },
    {
      question: "What is homeostasis?",
      answer: "Homeostasis is the process by which the body maintains a stable internal environment despite external changes. It involves feedback mechanisms that regulate variables like temperature, pH, and blood glucose levels."
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      <Head>
        <title>Human Anatomy and Physiology - Biology | HAM BLOGS</title>
        <meta name="description" content="Understanding the structure and function of the human body." />
        <link rel="canonical" href="https://ham-blogs.com/blog/human-anatomy-physiology" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-green-600 hover:text-green-800 font-medium flex items-center"
            >
              ← Back to Biology
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Human Anatomy and Physiology</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">🧍 Biology</span>
            <span>⏱️ 15 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            Structure and function of the human body: understanding how our organ systems work together
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Introduction to Human Anatomy and Physiology <button onClick={() => toggleBookmark('intro')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Human anatomy and physiology represent the study of the structure and function of the human body, respectively. Anatomy focuses on the physical organization of body parts, while physiology examines how these parts function and interact. Together, they provide insight into how the human body maintains life and responds to its environment. Understanding these subjects is fundamental to medicine, health sciences, and our comprehension of human biology.
          </p>
          
          <p>
            The human body is organized into hierarchical levels, from atoms and molecules forming cells, to cells forming tissues, tissues forming organs, organs forming organ systems, and finally, organ systems functioning together as an organism. Each level builds upon the previous one, with emergent properties appearing at each stage of organization. This structural organization allows for complex functions while maintaining the efficiency of specialized components.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Major Organ Systems <button onClick={() => toggleBookmark('systems')} className="ml-2 text-yellow-600">★</button></h2>
          <h3>Cardiovascular System</h3>
          <p>
            The cardiovascular system consists of the heart, blood vessels, and blood. The heart pumps oxygenated blood through arteries to tissues and returns deoxygenated blood through veins to the lungs for reoxygenation. This closed circulatory system delivers nutrients, oxygen, and hormones to cells while removing waste products. The system also plays roles in temperature regulation, pH balance, and immune function.
          </p>

          <h3>Nervous System</h3>
          <p>
            The nervous system coordinates body functions through electrical and chemical signals. It includes the central nervous system (brain and spinal cord) and the peripheral nervous system (nerves extending throughout the body). Neurons transmit information via electrical impulses and chemical neurotransmitters. The system controls voluntary and involuntary activities, processes sensory information, and enables cognitive functions like memory and learning.
          </p>

          <h3>Other Systems</h3>
          <p>
            The respiratory system exchanges gases (oxygen and carbon dioxide) between the body and environment. The digestive system breaks down food into absorbable nutrients. The skeletal system provides structure, protection, and mineral storage. The muscular system enables movement. The endocrine system regulates body functions through hormones. The immune system defends against pathogens and abnormal cells.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Integration and Homeostasis <button onClick={() => toggleBookmark('homeostasis')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Homeostasis is the maintenance of a stable internal environment despite external changes. This dynamic equilibrium is achieved through negative feedback mechanisms that respond to deviations from set points. For example, when body temperature rises, sensors trigger responses like sweating and vasodilation to cool the body. When blood glucose levels increase, insulin is released to lower them.
          </p>

          <p>
            The integration of organ systems is essential for homeostasis. The nervous system provides rapid communication and coordination, while the endocrine system offers slower but longer-lasting regulation through hormones. The circulatory system transports signals and substances throughout the body. The kidney adjusts water and electrolyte balance, while the lungs regulate pH through CO2 elimination.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Cellular Basis of Function <button onClick={() => toggleBookmark('cellular')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            All physiological processes ultimately occur at the cellular level. Different cell types have specialized structures and functions that enable tissue and organ activities. Muscle cells contract through actin and myosin filaments. Nerve cells transmit electrical signals using ion channels. Epithelial cells form barriers and facilitate transport. Connective tissue cells produce extracellular matrix components.
          </p>

          <p>
            Cellular metabolism involves thousands of coordinated chemical reactions that provide energy and building blocks for cellular activities. The breakdown of nutrients through glycolysis, the citric acid cycle, and oxidative phosphorylation generates ATP, the cellular energy currency. Proteins perform enzymatic, structural, transport, and signaling functions. DNA and RNA facilitate the flow of genetic information.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8">
          <h2>Development and Aging <button onClick={() => toggleBookmark('development')} className="ml-2 text-yellow-600">★</button></h2>
          <p>
            Human development begins with fertilization and continues through childhood, adolescence, and adulthood. During embryonic and fetal development, cells differentiate into specialized types and organize into tissues and organs. Growth and maturation continue throughout childhood, with critical periods for developing various systems and functions.
          </p>

          <p>
            Aging involves gradual declines in organ system functions due to accumulated cellular damage, reduced repair mechanisms, and genetic factors. The cardiovascular, nervous, and musculoskeletal systems show particularly noticeable changes with age. However, lifestyle factors like exercise, nutrition, and stress management can significantly influence the rate of aging and age-related disease susceptibility.
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
                <p className="font-medium mb-2">1. How many major organ systems does the human body have?</p>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) 8</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) 10</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) 11</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) 12</span></label>
              </div>

              <div>
                <p className="font-medium mb-2">2. What is the primary function of homeostasis?</p>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) To eliminate waste products</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) To maintain a stable internal environment</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) To fight off infections</span></label>
                <label className="flex items-center space-x-2"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) To produce energy</span></label>
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
                  <p>Question 1: {quizAnswers.q1 === 'C' ? '✓ Correct' : '✗ Incorrect (Correct: C)'} - Humans have 11 major organ systems.</p>
                  <p>Question 2: {quizAnswers.q2 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - Homeostasis maintains stable internal conditions.</p>
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
              <Link href="/blog/ecosystems-biodiversity-conservation" className="text-blue-600 hover:underline">
                ← Ecosystems: Biodiversity and Conservation
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Next Article</h3>
              <Link href="/blog/biotechnology-applications-innovations" className="text-blue-600 hover:underline">
                Biotechnology: Applications and Innovations →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}