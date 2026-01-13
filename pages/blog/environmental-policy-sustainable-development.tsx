import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function EnvironmentalPolicyBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is the concept of 'polluter pays principle'?",
      answer: "The polluter pays principle is an environmental policy concept that holds that the party responsible for producing pollution should bear the costs of managing it to prevent damage to human health or the environment. This principle aims to internalize environmental costs into production and consumption decisions, making polluters financially responsible for the environmental damage they cause. It encourages pollution prevention and cleaner production methods."
    },
    {
      question: "What are the three pillars of sustainable development?",
      answer: "The three pillars of sustainable development are economic development, social development, and environmental protection. These pillars are interconnected and must be balanced to achieve sustainability. Economic development focuses on growth and prosperity, social development emphasizes equity and human well-being, and environmental protection ensures the conservation of natural resources for future generations. The concept emphasizes that development must meet present needs without compromising the ability of future generations to meet their own needs."
    },
    {
      question: "What is the difference between environmental policy and environmental law?",
      answer: "Environmental policy refers to the broad principles, goals, and strategies that guide environmental protection efforts. It sets the direction for environmental action and can be implemented through various mechanisms. Environmental law refers to the specific legal instruments (statutes, regulations, ordinances) that enforce environmental policy. Laws provide the regulatory framework with specific requirements and penalties. Policy can be more flexible and adaptive, while law provides the binding enforcement mechanism."
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
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-indigo-50 to-blue-100">
      <Head>
        <title>Environmental Policy and Sustainable Development - Environmental Science | HAM BLOGS</title>
        <meta name="description" content="Creating frameworks for sustainable growth and environmental protection." />
        <link rel="canonical" href="https://ham-blogs.com/blog/environmental-policy-sustainable-development" />
      </Head>

      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-purple-600 hover:text-purple-800 font-medium flex items-center"
            >
              ← Back to Environmental Science
            </button>
            <div className="flex space-x-4">
              <button 
                onClick={() => toggleBookmark('main')}
                className={`p-2 rounded-full ${bookmarks.includes('main') ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Environmental Policy and Sustainable Development</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">🏛️ Environmental Science</span>
            <span>⏱️ 15 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            Creating frameworks for sustainable growth and environmental protection
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Introduction to Environmental Policy <button onClick={() => toggleBookmark('intro')} className="ml-2 text-purple-500">★</button></h2>
          <p>
            Environmental policy encompasses the commitment of an organization or government to the laws, regulations, and other policy mechanisms concerning environmental issues. These policies aim to reduce environmental impact, promote sustainable development, and protect natural resources for current and future generations. Effective environmental policy requires balancing economic development with environmental protection and social equity.
          </p>
          
          <p>
            Environmental policy operates at multiple scales, from local ordinances to international agreements. It addresses diverse issues including air and water quality, waste management, biodiversity conservation, climate change, and sustainable resource use. The development of environmental policy involves scientific assessment, stakeholder engagement, economic analysis, and political decision-making.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Key Environmental Policy Instruments <button onClick={() => toggleBookmark('policy_instruments')} className="ml-2 text-purple-500">★</button></h2>
          <h3 className="text-purple-600">Regulatory Approaches</h3>
          <p>
            Command-and-control regulations set specific standards and requirements for environmental protection. These include emission limits, technology requirements, and process standards. While effective in achieving compliance, they can be inflexible and costly. Performance standards allow more flexibility in how environmental goals are achieved, focusing on outcomes rather than specific methods.
          </p>

          <h3 className="text-purple-600">Economic Instruments</h3>
          <p>
            Economic instruments use market mechanisms to achieve environmental goals. These include pollution taxes, cap-and-trade systems, subsidies for clean technologies, and payments for ecosystem services. These instruments can achieve environmental goals at lower cost than regulations and provide incentives for continuous improvement beyond minimum standards.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">International Environmental Agreements <button onClick={() => toggleBookmark('international_agreements')} className="ml-2 text-purple-500">★</button></h2>
          <p>
            Global environmental challenges require international cooperation and agreements. The Paris Climate Agreement aims to limit global warming to well below 2°C above pre-industrial levels. The Convention on Biological Diversity addresses biodiversity loss and sustainable use of biological resources. The Montreal Protocol successfully addressed ozone depletion by phasing out ozone-depleting substances.
          </p>

          <p>
            International agreements establish frameworks for national action while respecting national sovereignty. They often include provisions for financial and technical assistance to developing countries. Implementation and compliance mechanisms vary across agreements, with some having binding enforcement while others rely on peer pressure and transparency.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Sustainable Development Frameworks <button onClick={() => toggleBookmark('sustainable_development')} className="ml-2 text-purple-500">★</button></h2>
          <p>
            Sustainable development integrates economic, social, and environmental considerations in decision-making. The United Nations Sustainable Development Goals (SDGs) provide a comprehensive framework with 17 interconnected goals addressing global challenges. These include ending poverty and hunger, ensuring health and education for all, addressing climate change, and protecting biodiversity.
          </p>

          <p>
            The concept of sustainable development emphasizes intergenerational equity, recognizing that current decisions affect future generations. It promotes economic growth that is socially inclusive and environmentally sustainable. Green economy approaches seek to achieve economic growth while reducing environmental risks and ecological scarcities.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Implementation and Governance <button onClick={() => toggleBookmark('governance')} className="ml-2 text-purple-500">★</button></h2>
          <p>
            Effective implementation of environmental policy requires strong institutions, adequate funding, and stakeholder engagement. Multi-level governance systems coordinate actions across local, regional, national, and international levels. Civil society organizations play important roles in policy advocacy, implementation, and monitoring.
          </p>

          <p>
            Adaptive management approaches recognize the need to adjust policies based on monitoring results and changing conditions. Environmental impact assessment procedures ensure that environmental considerations are integrated into project planning and decision-making. Public participation and access to information are essential for democratic governance and effective implementation.
          </p>
        </section>

        <section className="bg-purple-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-700">Interactive Quiz</h2>
          {!isQuizActive ? (
            <button 
              onClick={() => setIsQuizActive(true)}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Test Your Knowledge
            </button>
          ) : (
            <div className="space-y-6">
              <div>
                <p className="font-medium mb-2 text-gray-700">1. What are the three pillars of sustainable development?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) Energy, water, and food</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) Economic, social, and environmental</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Government, business, and civil society</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) Air, water, and soil</span></label>
              </div>

              <div>
                <p className="font-medium mb-2 text-gray-700">2. What does the 'polluter pays principle' mean?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) The government pays for pollution cleanup</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) Taxpayers pay for pollution control</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) The party responsible for pollution bears the costs of managing it</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) Consumers pay for pollution through higher prices</span></label>
              </div>

              <button 
                onClick={checkQuizAnswers}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4"
              >
                Check Answers
              </button>
              
              {showQuizResults && (
                <div className="mt-4 p-4 bg-white/70 rounded border border-purple-300">
                  <h3 className="font-bold mb-2 text-purple-700">Results:</h3>
                  <p className="text-gray-700">Question 1: {quizAnswers.q1 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - The three pillars are economic, social, and environmental.</p>
                  <p className="text-gray-700">Question 2: {quizAnswers.q2 === 'C' ? '✓ Correct' : '✗ Incorrect (Correct: C)'} - The polluter pays principle means the party responsible for pollution bears the costs of managing it.</p>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="bg-indigo-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-700">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-700">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-indigo-200 pb-4">
                <h3 className="font-semibold text-purple-700">{faq.question}</h3>
                <p className="mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <nav className="border-t border-purple-200 pt-6 mt-8">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Previous Article</h3>
              <Link href="/blog/ecosystem-restoration-techniques" className="text-purple-600 hover:underline">
                ← Ecosystem Restoration Techniques
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Next Article</h3>
              <Link href="/blog" className="text-purple-600 hover:underline">
                Back to All Articles →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}