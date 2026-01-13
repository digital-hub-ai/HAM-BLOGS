import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function EcosystemRestorationBlogPost() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "What is the difference between restoration, rehabilitation, and reclamation?",
      answer: "Restoration aims to return an ecosystem to its original state before degradation, including all its original species and ecological processes. Rehabilitation focuses on re-establishing ecological functions without necessarily returning to the original state. Reclamation involves converting a degraded site to a new use, often not ecological, such as turning a mine site into agricultural land."
    },
    {
      question: "What are pioneer species and why are they important in ecosystem restoration?",
      answer: "Pioneer species are the first species to colonize a disturbed or degraded area. They are typically hardy species that can tolerate harsh conditions and help create more favorable conditions for other species to establish. Pioneer species often improve soil quality, provide shelter, and modify the microclimate, facilitating the establishment of more complex plant communities over time."
    },
    {
      question: "How long does ecosystem restoration typically take?",
      answer: "The time required for ecosystem restoration varies greatly depending on the ecosystem type, degree of degradation, and restoration goals. Simple grassland restoration might take 5-10 years, while forest restoration can take decades to centuries to achieve old-growth characteristics. Wetland restoration might show improvements within a few years, but full ecosystem functionality can take much longer. Success is often measured in stages, with different components of the ecosystem recovering at different rates."
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-green-50 to-lime-100">
      <Head>
        <title>Ecosystem Restoration Techniques - Environmental Science | HAM BLOGS</title>
        <meta name="description" content="Rehabilitating degraded ecosystems and promoting ecological recovery." />
        <link rel="canonical" href="https://ham-blogs.com/blog/ecosystem-restoration-techniques" />
      </Head>

      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="text-emerald-600 hover:text-emerald-800 font-medium flex items-center"
            >
              ← Back to Environmental Science
            </button>
            <div className="flex space-x-4">
              <button 
                onClick={() => toggleBookmark('main')}
                className={`p-2 rounded-full ${bookmarks.includes('main') ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Ecosystem Restoration Techniques</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">🌱 Environmental Science</span>
            <span>⏱️ 16 min read</span>
          </div>
          <p className="text-xl text-gray-700 italic">
            Rehabilitating degraded ecosystems and promoting ecological recovery
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Introduction to Ecosystem Restoration <button onClick={() => toggleBookmark('intro')} className="ml-2 text-emerald-500">★</button></h2>
          <p>
            Ecosystem restoration is the process of assisting the recovery of an ecosystem that has been degraded, damaged, or destroyed by human activities or natural disturbances. It involves returning the ecosystem to its natural state, with the original species composition, structure, and ecological processes. Restoration is essential for biodiversity conservation, climate change mitigation, and the recovery of ecosystem services that are vital for human well-being.
          </p>
          
          <p>
            The science of ecosystem restoration draws on principles from ecology, botany, soil science, hydrology, and other disciplines. Successful restoration requires understanding the historical conditions of the ecosystem, identifying the causes of degradation, and implementing appropriate techniques to address those causes. The goal is not just to establish vegetation but to create self-sustaining ecosystems that can persist and adapt over time.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Forest Restoration Techniques <button onClick={() => toggleBookmark('forest_restoration')} className="ml-2 text-emerald-500">★</button></h2>
          <h3 className="text-emerald-600">Reforestation and Afforestation</h3>
          <p>
            Reforestation involves replanting trees in areas where forests have been cleared, while afforestation establishes forests in areas that were not previously forested. Both approaches can help restore ecosystem services, sequester carbon, and provide habitat for wildlife. Successful forest restoration often involves planting native species that are adapted to local conditions and that can support the full range of native wildlife.
          </p>

          <h3 className="text-emerald-600">Assisted Natural Regeneration</h3>
          <p>
            Assisted natural regeneration (ANR) promotes the recovery of existing forest vegetation rather than planting new trees. This approach involves removing barriers to natural regeneration, such as invasive species or excessive grazing, and protecting existing seedlings and saplings. ANR is often more cost-effective than active planting and can result in more diverse and resilient forests.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Wetland and Aquatic Restoration <button onClick={() => toggleBookmark('wetland_restoration')} className="ml-2 text-emerald-500">★</button></h2>
          <p>
            Wetland restoration involves re-establishing the hydrology, vegetation, and ecological functions of degraded wetlands. This may include removing drainage systems, reconstructing natural water flow patterns, and replanting native wetland vegetation. Restored wetlands provide critical habitat for waterfowl and other wildlife, improve water quality, and offer flood control benefits.
          </p>

          <p>
            River and stream restoration focuses on re-establishing natural flow patterns, improving water quality, and creating habitat for aquatic species. Techniques include removing dams, restoring natural meanders, stabilizing banks with native vegetation, and creating in-stream structures that provide habitat for fish and other aquatic organisms.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Grassland and Prairie Restoration <button onClick={() => toggleBookmark('grassland_restoration')} className="ml-2 text-emerald-500">★</button></h2>
          <p>
            Grassland restoration often involves removing invasive species, reintroducing native plant species through seed mixes, and using prescribed fire to maintain grassland conditions. These ecosystems are particularly important for grassland bird species and other wildlife adapted to open habitats. Fire is a natural part of grassland ecosystems and is often necessary for maintaining native plant communities.
          </p>

          <p>
            Restoring degraded agricultural lands to native grasslands provides multiple benefits including carbon sequestration, soil conservation, and wildlife habitat. These restored grasslands can also provide sustainable grazing opportunities for livestock when managed properly.
          </p>
        </section>

        <section className="prose prose-lg max-w-none mb-8 text-gray-700">
          <h2 className="text-gray-900">Monitoring and Adaptive Management <button onClick={() => toggleBookmark('monitoring')} className="ml-2 text-emerald-500">★</button></h2>
          <p>
            Successful ecosystem restoration requires long-term monitoring to assess progress and adapt management practices as needed. Monitoring includes tracking plant and animal populations, soil health indicators, water quality, and ecosystem functions. Adaptive management involves modifying restoration practices based on monitoring results and changing conditions.
          </p>

          <p>
            Restoration projects must also account for climate change, which may require adjusting species selections and management practices over time. Some restoration projects now incorporate climate adaptation strategies, such as selecting species that are likely to be resilient under future climate conditions or creating habitat corridors that allow species to move as conditions change.
          </p>
        </section>

        <section className="bg-emerald-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-emerald-700">Interactive Quiz</h2>
          {!isQuizActive ? (
            <button 
              onClick={() => setIsQuizActive(true)}
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Test Your Knowledge
            </button>
          ) : (
            <div className="space-y-6">
              <div>
                <p className="font-medium mb-2 text-gray-700">1. What is the difference between reforestation and afforestation?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="A" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>A) There is no difference</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="B" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>B) Reforestation is replanting in previously forested areas, afforestation is establishing forests in non-forested areas</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="C" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>C) Reforestation is for native species only, afforestation is for any species</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q1" value="D" onChange={(e) => handleQuizAnswer('q1', e.target.value)} /> <span>D) Reforestation is government-led, afforestation is private-led</span></label>
              </div>

              <div>
                <p className="font-medium mb-2 text-gray-700">2. What does ANR stand for in forest restoration?</p>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="A" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>A) Active Natural Recovery</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="B" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>B) Assisted Natural Regeneration</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="C" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>C) Advanced Native Restoration</span></label>
                <label className="flex items-center space-x-2 text-gray-700"><input type="radio" name="q2" value="D" onChange={(e) => handleQuizAnswer('q2', e.target.value)} /> <span>D) Alternative Nature Recovery</span></label>
              </div>

              <button 
                onClick={checkQuizAnswers}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4"
              >
                Check Answers
              </button>
              
              {showQuizResults && (
                <div className="mt-4 p-4 bg-white/70 rounded border border-emerald-300">
                  <h3 className="font-bold mb-2 text-emerald-700">Results:</h3>
                  <p className="text-gray-700">Question 1: {quizAnswers.q1 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - Reforestation is replanting in previously forested areas, afforestation is establishing forests in non-forested areas.</p>
                  <p className="text-gray-700">Question 2: {quizAnswers.q2 === 'B' ? '✓ Correct' : '✗ Incorrect (Correct: B)'} - ANR stands for Assisted Natural Regeneration.</p>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="bg-green-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-700">Frequently Asked Questions</h2>
          <div className="space-y-4 text-gray-700">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-green-200 pb-4">
                <h3 className="font-semibold text-emerald-700">{faq.question}</h3>
                <p className="mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <nav className="border-t border-emerald-200 pt-6 mt-8">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Previous Article</h3>
              <Link href="/blog/pollution-control-environmental-protection" className="text-emerald-600 hover:underline">
                ← Pollution Control and Environmental Protection
              </Link>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Next Article</h3>
              <Link href="/blog/environmental-policy-sustainable-development" className="text-emerald-600 hover:underline">
                Environmental Policy and Sustainable Development →
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </div>
  );
}