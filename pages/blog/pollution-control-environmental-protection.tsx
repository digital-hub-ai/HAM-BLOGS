import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function PollutionControlBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What are the main types of pollution?",
      answer: "The main types of pollution include air pollution (from vehicles, industries, and burning of fossil fuels), water pollution (from industrial discharge, agricultural runoff, and sewage), soil pollution (from pesticides, industrial waste, and improper disposal of chemicals), noise pollution (from traffic, construction, and industrial activities), and light pollution (from excessive artificial lighting). Each type has different sources and effects on human health and the environment."
    },
    {
      question: "How does air pollution affect human health?",
      answer: "Air pollution affects human health in multiple ways. Short-term exposure can cause irritation of the eyes, nose, and throat, coughing, and breathing difficulties. Long-term exposure is linked to serious health conditions including asthma, lung cancer, heart disease, stroke, and premature death. Fine particulate matter (PM2.5) can penetrate deep into the lungs and enter the bloodstream, causing systemic health effects."
    },
    {
      question: "What is the circular economy and how does it help reduce pollution?",
      answer: "The circular economy is an economic model that aims to eliminate waste and promote the continuous use of resources. It involves designing products for durability, reuse, remanufacturing, and recycling. This approach reduces pollution by minimizing the extraction of raw materials, reducing waste generation, and decreasing the amount of materials that end up in landfills or incinerators. It keeps materials in use for as long as possible, extracting maximum value before recovery and regeneration."
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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-slate-50 to-zinc-100">
      <Head>
        <title>Pollution Control and Environmental Protection - Environmental Science | HAM BLOGS</title>
        <meta name="description" content="Addressing air, water, and soil pollution challenges." />
        <link rel="canonical" href="https://ham-blogs.com/blog/pollution-control-environmental-protection" />
      </Head>

      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-gray-600 hover:text-gray-800 font-medium flex items-center"
            >
              ← Back to Environmental Science
            </button>
            <div className="flex space-x-4">
              <button 
                onClick={() => toggleBookmark('main')}
                className={`p-2 rounded-full ${bookmarks.includes('main') ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pollution Control and Environmental Protection</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">🏭 Environmental Science</span>
            <span>⏱️ 17 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            Addressing air, water, and soil pollution challenges
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Introduction to Pollution Control <button onClick={() => toggleBookmark('intro')} className="ml-2 text-gray-500">★</button></h2>
          <p>
            Pollution control refers to the processes, systems, and practices used to reduce or eliminate the release of pollutants into the environment. It encompasses air, water, and soil pollution control, addressing contaminants from industrial, agricultural, and domestic sources. Effective pollution control is essential for protecting human health, preserving ecosystems, and maintaining environmental quality for future generations.
          </p>
          
          <p>
            The need for pollution control has grown significantly with industrialization and urbanization. Modern pollution control strategies include regulatory frameworks, technological innovations, and behavioral changes aimed at minimizing the environmental impact of human activities. The goal is to achieve a balance between economic development and environmental protection.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Air Pollution Control <button onClick={() => toggleBookmark('air_pollution')} className="ml-2 text-gray-500">★</button></h2>
          <h3 className="text-gray-600">Industrial Emission Controls</h3>
          <p>
            Industrial facilities employ various technologies to control air pollutant emissions. These include electrostatic precipitators that remove particulate matter, scrubbers that neutralize acidic gases, and catalytic converters that reduce nitrogen oxides and volatile organic compounds. Selective catalytic reduction systems are used to specifically target nitrogen oxides from power plants and industrial boilers.
          </p>

          <h3 className="text-gray-600">Transportation and Urban Air Quality</h3>
          <p>
            Transportation is a major source of urban air pollution. Control measures include vehicle emission standards, promotion of electric vehicles, improvement of public transportation, and urban planning that reduces the need for private vehicle use. Low emission zones in cities restrict access for high-polluting vehicles, while congestion pricing discourages unnecessary driving.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Water Pollution Management <button onClick={() => toggleBookmark('water_pollution')} className="ml-2 text-gray-500">★</button></h2>
          <p>
            Water pollution control involves preventing contamination of water bodies and treating polluted water to acceptable quality standards. Wastewater treatment plants use physical, chemical, and biological processes to remove contaminants before discharge. Advanced treatment technologies can remove pharmaceuticals, endocrine disruptors, and other emerging contaminants from wastewater.
          </p>

          <p>
            Agricultural runoff control includes buffer strips, constructed wetlands, and precision farming techniques that minimize fertilizer and pesticide use. Stormwater management systems capture and treat runoff from urban areas before it enters water bodies. Industrial facilities implement water recycling and reuse systems to reduce both intake and discharge volumes.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Soil Contamination and Remediation <button onClick={() => toggleBookmark('soil_contamination')} className="ml-2 text-gray-500">★</button></h2>
          <p>
            Soil contamination often results from industrial activities, improper waste disposal, and agricultural chemical use. Remediation techniques include soil washing, bioremediation using microorganisms to break down contaminants, phytoremediation using plants to extract pollutants, and soil vapor extraction for volatile compounds. The choice of remediation method depends on the type and extent of contamination.
          </p>

          <p>
            Prevention of soil contamination is more cost-effective than remediation. Best management practices include proper storage and handling of chemicals, secondary containment systems, and regular monitoring of soil and groundwater at industrial sites. Sustainable agricultural practices reduce the introduction of harmful chemicals into soil ecosystems.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Regulatory Frameworks and Policies <button onClick={() => toggleBookmark('regulations')} className="ml-2 text-gray-500">★</button></h2>
          <p>
            Environmental regulations provide the legal framework for pollution control. The Clean Air Act, Clean Water Act, and Resource Conservation and Recovery Act in the United States set standards and enforcement mechanisms. Similar legislation exists in other countries, often with international coordination through treaties and agreements.
          </p>

          <p>
            Economic instruments such as pollution taxes, cap-and-trade systems, and environmental subsidies incentivize pollution reduction. Corporate environmental management systems and voluntary programs complement regulatory approaches. International cooperation is essential for addressing transboundary pollution issues and setting global environmental standards.
          </p>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">Interactive Quiz</h2>
          {!isQuizActive ? (
            <button 
              onClick={() => setIsQuizActive(true)}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Test Your Knowledge
            </button>
          ) : (
            <div className="space-y-6">
              <div>
                <p className="font-medium mb-2 text-gray-700">1. What does PM2.5 refer to in air quality measurements?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) Particles larger than 2.5 inches</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) Particles smaller than 2.5 micrometers</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Pollution measured at 2.5 meters height</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) Particles that exist for 2.5 hours</span></label>
              </div>

              <div>
                <p className="font-medium mb-2 text-gray-700">2. Which technology is commonly used to remove particulate matter from industrial emissions?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) Electrostatic precipitator</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) Ultrasonic cleaner</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) Thermal oxidizer</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) Membrane filter</span></label>
              </div>

              <button 
                onClick={checkQuizAnswers}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4"
              >
                Check Answers
              </button>
              
              {showQuizResults && (
                <div className="mt-4 p-4 bg-white/70 rounded border border-gray-300">
                  <h3 className="font-bold mb-2 text-gray-700">Results:</h3>
                  <p className="text-gray-700">Question 1: {quizAnswers.q1 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - PM2.5 refers to particles smaller than 2.5 micrometers.</p>
                  <p className="text-gray-700">Question 2: {quizAnswers.q2 === 'A' ? '✓ Correct' : '✗ Incorrect (Correct: A)'} - Electrostatic precipitator is used to remove particulate matter.</p>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="bg-slate-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-slate-700">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-700">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-slate-200 pb-4">
                <h3 className="font-semibold text-gray-700">{faq.question}</h3>
                <p className="mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <nav className="border-t border-gray-200 pt-6 mt-8">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Previous Article</h3>
              <Link href="/blog/renewable-energy-sustainability" className="text-gray-600 hover:underline">
                ← Renewable Energy and Sustainability
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Next Article</h3>
              <Link href="/blog/ecosystem-restoration-techniques" className="text-gray-600 hover:underline">
                Ecosystem Restoration Techniques →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}