import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function RenewableEnergyBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What are the main types of renewable energy sources?",
      answer: "The main types of renewable energy sources include solar, wind, hydroelectric, geothermal, and biomass. Solar energy harnesses sunlight using photovoltaic panels or solar thermal systems. Wind energy uses turbines to convert wind motion into electricity. Hydroelectric power generates electricity from flowing water. Geothermal energy taps into heat from beneath the Earth's surface. Biomass energy comes from organic materials like wood, agricultural residues, and waste."
    },
    {
      question: "How does renewable energy contribute to sustainability?",
      answer: "Renewable energy contributes to sustainability by providing clean alternatives to fossil fuels that produce little to no greenhouse gas emissions during operation. It reduces dependence on finite resources, helps combat climate change, and can provide energy security. Renewable energy systems often have lower operational costs once installed and can provide long-term economic benefits to communities."
    },
    {
      question: "What are the challenges facing renewable energy adoption?",
      answer: "Challenges include high upfront costs for installation, intermittency issues with solar and wind (they don't produce energy consistently), energy storage limitations, grid integration complexities, and geographic limitations. Some renewable technologies require large land areas. Policy and regulatory barriers, as well as market structures that favor fossil fuels, can also slow adoption. However, costs are decreasing and technology is improving rapidly."
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
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100">
      <Head>
        <title>Renewable Energy and Sustainability - Environmental Science | HAM BLOGS</title>
        <meta name="description" content="The transition to clean energy and sustainable practices." />
        <link rel="canonical" href="https://ham-blogs.com/blog/renewable-energy-sustainability" />
      </Head>

      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-amber-600 hover:text-amber-800 font-medium flex items-center"
            >
              ← Back to Environmental Science
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Renewable Energy and Sustainability</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">⚡ Environmental Science</span>
            <span>⏱️ 14 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            The transition to clean energy and sustainable practices
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Introduction to Renewable Energy <button onClick={() => toggleBookmark('intro')} className="ml-2 text-amber-500">★</button></h2>
          <p>
            Renewable energy sources are naturally replenished on a human timescale and offer sustainable alternatives to fossil fuels. As the world grapples with climate change and the need to reduce greenhouse gas emissions, renewable energy technologies are becoming increasingly important for meeting global energy demands while preserving the environment. The renewable energy sector has experienced rapid growth, driven by technological advances, falling costs, and supportive policies.
          </p>
          
          <p>
            The transition to renewable energy is not just an environmental imperative but also an economic opportunity. The renewable energy sector employs millions of people worldwide and continues to grow. Countries are increasingly recognizing that investing in renewable energy enhances energy security, creates jobs, and positions them as leaders in the growing clean energy economy.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Solar Energy Technologies <button onClick={() => toggleBookmark('solar')} className="ml-2 text-amber-500">★</button></h2>
          <h3 className="text-amber-600">Photovoltaic Systems</h3>
          <p>
            Solar photovoltaic (PV) systems convert sunlight directly into electricity using semiconductor materials, typically silicon. The cost of solar PV has dropped dramatically over the past decade, making it one of the cheapest sources of electricity in many regions. Solar installations can range from residential rooftop systems to utility-scale solar farms spanning thousands of acres.
          </p>

          <h3 className="text-amber-600">Concentrated Solar Power</h3>
          <p>
            Concentrated Solar Power (CSP) systems use mirrors or lenses to concentrate sunlight to generate heat, which is then used to produce electricity through conventional steam turbines. CSP plants can incorporate thermal energy storage, allowing them to generate electricity even when the sun isn't shining, providing grid stability and dispatchable clean energy.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Wind and Hydroelectric Power <button onClick={() => toggleBookmark('wind_hydro')} className="ml-2 text-amber-500">★</button></h2>
          <p>
            Wind power harnesses the kinetic energy of moving air to generate electricity through wind turbines. Modern wind turbines are highly efficient and can generate substantial amounts of electricity, particularly in areas with consistent wind resources. Offshore wind farms take advantage of stronger and more consistent winds over oceans, though they require more complex engineering and installation.
          </p>

          <p>
            Hydroelectric power generates electricity by harnessing the energy of flowing water. Large-scale hydroelectric dams can provide substantial amounts of clean energy and offer the benefit of energy storage through reservoirs. Small-scale hydroelectric systems and run-of-river projects minimize environmental impacts while still providing renewable energy.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Emerging Technologies and Storage <button onClick={() => toggleBookmark('emerging')} className="ml-2 text-amber-500">★</button></h2>
          <p>
            Emerging renewable technologies include geothermal energy, which taps into heat from beneath the Earth's surface, and biomass energy from organic materials. Ocean energy technologies are being developed to harness tidal and wave energy. These diverse sources can complement solar and wind to provide a more reliable renewable energy mix.
          </p>

          <p>
            Energy storage technologies, particularly batteries, are crucial for addressing the intermittent nature of renewable energy sources. Advances in battery technology, including lithium-ion and emerging chemistries, are making it possible to store renewable energy for use when the sun isn't shining or the wind isn't blowing. Grid-scale storage solutions are essential for a renewable energy future.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Economic and Environmental Benefits <button onClick={() => toggleBookmark('benefits')} className="ml-2 text-amber-500">★</button></h2>
          <p>
            Renewable energy technologies offer significant environmental benefits by producing little to no greenhouse gas emissions during operation. They also reduce air pollution, which has direct health benefits for communities. Economically, renewable energy projects often have low operational costs once installed and can provide long-term price stability.
          </p>

          <p>
            The renewable energy sector is a major job creator, employing people in manufacturing, installation, maintenance, and research and development. As the industry grows, it's creating new career opportunities and revitalizing rural economies where many renewable energy projects are located. The distributed nature of many renewable technologies also enables energy democracy and community ownership models.
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
                <p className="font-medium mb-2 text-gray-700">1. What does CSP stand for in solar energy technology?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) Cold Solar Panels</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) Concentrated Solar Power</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Clean Solar Production</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) Controlled Solar Process</span></label>
              </div>

              <div>
                <p className="font-medium mb-2 text-gray-700">2. Which renewable energy source can incorporate thermal energy storage for electricity generation after sunset?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) Wind power</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) Photovoltaic solar</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) Concentrated Solar Power</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) Hydroelectric</span></label>
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
                  <p className="text-gray-700">Question 1: {quizAnswers.q1 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - CSP stands for Concentrated Solar Power.</p>
                  <p className="text-gray-700">Question 2: {quizAnswers.q2 === 'C' ? '✓ Correct' : '✗ Incorrect (Correct: C)'} - CSP can incorporate thermal energy storage for electricity generation after sunset.</p>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="bg-yellow-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-yellow-700">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-700">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-yellow-200 pb-4">
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
              <Link href="/blog/biodiversity-conservation-strategies" className="text-amber-600 hover:underline">
                ← Biodiversity Conservation Strategies
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Next Article</h3>
              <Link href="/blog/pollution-control-environmental-protection" className="text-amber-600 hover:underline">
                Pollution Control and Environmental Protection →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}