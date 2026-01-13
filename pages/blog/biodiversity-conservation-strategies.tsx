import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function BiodiversityConservationBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What are the main drivers of biodiversity loss?",
      answer: "The main drivers of biodiversity loss include habitat destruction and fragmentation, climate change, pollution, invasive species, and overexploitation of natural resources. Habitat destruction, primarily due to agriculture, urbanization, and deforestation, is considered the leading cause. Climate change is increasingly becoming a major threat as species struggle to adapt to rapidly changing conditions."
    },
    {
      question: "What is the difference between in-situ and ex-situ conservation?",
      answer: "In-situ conservation involves protecting species in their natural habitats through measures like establishing protected areas, national parks, and wildlife reserves. Ex-situ conservation involves preserving species outside their natural habitats, such as in zoos, botanical gardens, seed banks, and gene banks. Both approaches are complementary and necessary for comprehensive conservation strategies."
    },
    {
      question: "Why is genetic diversity important for species conservation?",
      answer: "Genetic diversity is crucial for species survival as it provides the raw material for adaptation to changing environmental conditions. Populations with higher genetic diversity are more resilient to diseases, environmental stresses, and climate change. Low genetic diversity can lead to inbreeding depression and reduced fitness, making populations more vulnerable to extinction."
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
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100">
      <Head>
        <title>Biodiversity Conservation Strategies - Environmental Science | HAM BLOGS</title>
        <meta name="description" content="Protecting species and ecosystems for future generations." />
        <link rel="canonical" href="https://ham-blogs.com/blog/biodiversity-conservation-strategies" />
      </Head>

      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-green-600 hover:text-green-800 font-medium flex items-center"
            >
              ← Back to Environmental Science
            </button>
            <div className="flex space-x-4">
              <button 
                onClick={() => toggleBookmark('main')}
                className={`p-2 rounded-full ${bookmarks.includes('main') ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Biodiversity Conservation Strategies</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">🌿 Environmental Science</span>
            <span>⏱️ 15 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            Protecting species and ecosystems for future generations
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Introduction to Biodiversity Conservation <button onClick={() => toggleBookmark('intro')} className="ml-2 text-green-500">★</button></h2>
          <p>
            Biodiversity conservation is the practice of protecting and preserving the variety of life on Earth, including genetic diversity, species diversity, and ecosystem diversity. With the current rate of species extinction estimated to be 100 to 1,000 times higher than natural background rates, conservation efforts are critical to maintaining the ecological services that support human well-being and the health of our planet.
          </p>
          
          <p>
            Biodiversity provides essential ecosystem services including pollination of crops, purification of air and water, decomposition of wastes, and regulation of climate. The loss of biodiversity threatens these services and can have cascading effects on human health, food security, and economic stability. Effective conservation strategies must address both the immediate threats to species and ecosystems and the underlying drivers of biodiversity loss.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Protected Areas and Habitat Conservation <button onClick={() => toggleBookmark('protected_areas')} className="ml-2 text-green-500">★</button></h2>
          <h3 className="text-green-600">National Parks and Wildlife Reserves</h3>
          <p>
            Protected areas serve as sanctuaries for wildlife and represent one of the most effective tools for biodiversity conservation. National parks, wildlife reserves, and marine protected areas provide safe havens where species can thrive without human interference. These areas also serve as benchmarks for understanding natural ecosystems and provide opportunities for research and education.
          </p>

          <h3 className="text-green-600">Corridors and Connectivity</h3>
          <p>
            Habitat fragmentation is a major threat to biodiversity, isolating populations and reducing genetic diversity. Conservation corridors connect fragmented habitats, allowing species to move between areas for feeding, breeding, and genetic exchange. These corridors are essential for maintaining viable populations and enabling species to adapt to changing environmental conditions.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Species-Specific Conservation Programs <button onClick={() => toggleBookmark('species_conservation')} className="ml-2 text-green-500">★</button></h2>
          <p>
            Species-specific conservation programs focus on protecting individual species that are endangered or threatened. These programs may include captive breeding, reintroduction to the wild, habitat restoration, and legal protection. Success stories include the recovery of the bald eagle, gray whale, and black-footed ferret from the brink of extinction through targeted conservation efforts.
          </p>

          <p>
            Conservation breeding programs maintain genetic diversity in captivity while working toward eventual reintroduction to the wild. These programs require careful genetic management to avoid inbreeding and maintain the adaptive potential of populations. Collaboration between zoos, aquariums, and conservation organizations is essential for the success of these programs.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Community-Based Conservation <button onClick={() => toggleBookmark('community_conservation')} className="ml-2 text-green-500">★</button></h2>
          <p>
            Community-based conservation recognizes that local communities are often the best stewards of natural resources. These approaches involve local people in conservation efforts, providing economic incentives for protecting biodiversity while meeting community needs. Successful programs link conservation goals with sustainable livelihoods, education, and improved quality of life for local residents.
          </p>

          <p>
            Indigenous peoples manage or have tenure rights over approximately 25% of the world's land surface and support about 80% of the planet's biodiversity. Recognizing and supporting indigenous land rights and traditional ecological knowledge is crucial for effective conservation. These communities often have sustainable practices that have maintained biodiversity for centuries.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">International Cooperation and Policy <button onClick={() => toggleBookmark('policy')} className="ml-2 text-green-500">★</button></h2>
          <p>
            Biodiversity conservation requires international cooperation and policy frameworks to address transboundary issues and coordinate global efforts. International agreements like the Convention on Biological Diversity (CBD), CITES (Convention on International Trade in Endangered Species), and the Ramsar Convention on Wetlands provide frameworks for conservation action at the global level.
          </p>

          <p>
            Financial mechanisms such as the Global Environment Facility (GEF) and payments for ecosystem services (PES) provide funding for conservation projects. Corporate sustainability initiatives and certification schemes like Forest Stewardship Council (FSC) and Marine Stewardship Council (MSC) encourage sustainable resource use. The private sector is increasingly recognizing the business case for biodiversity conservation.
          </p>
        </section>

        <section className="bg-green-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-700">Interactive Quiz</h2>
          {!isQuizActive ? (
            <button 
              onClick={() => setIsQuizActive(true)}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Test Your Knowledge
            </button>
          ) : (
            <div className="space-y-6">
              <div>
                <p className="font-medium mb-2 text-gray-700">1. What is the primary purpose of conservation corridors?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) To create new habitats</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) To connect fragmented habitats and allow species movement</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) To separate different species</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) To increase hunting opportunities</span></label>
              </div>

              <div>
                <p className="font-medium mb-2 text-gray-700">2. Which approach involves local communities in conservation efforts?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) Species-specific conservation</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) Protected area management</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) Community-based conservation</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) Captive breeding programs</span></label>
              </div>

              <button 
                onClick={checkQuizAnswers}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4"
              >
                Check Answers
              </button>
              
              {showQuizResults && (
                <div className="mt-4 p-4 bg-white/70 rounded border border-green-300">
                  <h3 className="font-bold mb-2 text-green-700">Results:</h3>
                  <p className="text-gray-700">Question 1: {quizAnswers.q1 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - Conservation corridors connect fragmented habitats and allow species movement.</p>
                  <p className="text-gray-700">Question 2: {quizAnswers.q2 === 'C' ? '✓ Correct' : '✗ Incorrect (Correct: C)'} - Community-based conservation involves local communities in conservation efforts.</p>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="bg-emerald-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-emerald-700">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-700">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-emerald-200 pb-4">
                <h3 className="font-semibold text-green-700">{faq.question}</h3>
                <p className="mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <nav className="border-t border-green-200 pt-6 mt-8">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Previous Article</h3>
              <Link href="/blog/climate-change-causes-effects-solutions" className="text-green-600 hover:underline">
                ← Climate Change: Causes, Effects, and Solutions
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Next Article</h3>
              <Link href="/blog/renewable-energy-sustainability" className="text-green-600 hover:underline">
                Renewable Energy and Sustainability →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}