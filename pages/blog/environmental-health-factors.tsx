import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function EnvironmentalHealthFactors() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Environmental Health Factors - HAM BLOGS</title>
        <meta name="description" content="How environment affects health and wellness" />
      </Head>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8"
        >
          <span className="mr-2">←</span> Back to Preventive Care
        </button>

        <article className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm mb-4">
                Preventive Care
              </span>
              <h1 className="text-4xl font-bold text-white mb-4">
                Environmental Health Factors
              </h1>
              <div className="flex items-center text-gray-400">
                <span className="mr-6">January 4, 2026</span>
                <span>9 min read</span>
              </div>
            </div>
            <button
              onClick={toggleBookmark}
              className={`p-2 rounded-full ${bookmarked ? 'text-yellow-400' : 'text-gray-400 hover:text-yellow-400'}`}
            >
              {bookmarked ? '★' : '☆'}
            </button>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              How environment affects health and wellness. Environmental health encompasses all the physical, chemical, and biological factors external to a person that can affect their health. This includes air and water quality, exposure to toxins and pollutants, built environment factors, and climate conditions. Understanding and managing environmental exposures is a critical component of preventive healthcare, as many environmental factors are modifiable risk factors for disease.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Air Quality and Health</h2>
            <p className="text-gray-300 leading-relaxed">
              Air pollution is linked to numerous health problems, including respiratory diseases, cardiovascular disease, and cancer. Particulate matter, ozone, nitrogen dioxide, and other pollutants can cause inflammation and oxidative stress. Indoor air quality is equally important, with pollutants from cleaning products, building materials, and combustion sources affecting health. Using air purifiers, proper ventilation, and reducing exposure to pollutants can improve health outcomes.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Water Quality and Contaminants</h2>
            <p className="text-gray-300 leading-relaxed">
              Access to clean water is fundamental to health. Contaminants in water can include heavy metals, pesticides, industrial chemicals, and microorganisms. These can cause acute illness or chronic health problems. Testing water quality, using appropriate filtration systems, and being aware of local water issues are important preventive measures. Private well owners should regularly test their water for bacteria, nitrates, and other contaminants.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Chemical Exposures</h2>
            <p className="text-gray-300 leading-relaxed">
              We encounter numerous chemicals daily through consumer products, food packaging, and environmental contamination. Endocrine disruptors like BPA and phthalates can interfere with hormone function. Pesticides in food and on surfaces can accumulate in the body over time. Choosing organic foods when possible, using glass or stainless steel containers instead of plastic, and selecting products with fewer synthetic chemicals can reduce exposure.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Built Environment and Health</h2>
            <p className="text-gray-300 leading-relaxed">
              The design of our communities affects health through opportunities for physical activity, access to healthy food, and social connections. Neighborhoods with sidewalks, parks, and bike paths encourage physical activity. Access to grocery stores with fresh produce versus food deserts affects dietary choices. Noise pollution from traffic and industry can contribute to stress and sleep disruption.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Climate and Weather Effects</h2>
            <p className="text-gray-300 leading-relaxed">
              Climate change and extreme weather events affect health in multiple ways. Heat waves increase risk for vulnerable populations. Changes in temperature and precipitation patterns affect vector-borne diseases. Air quality may worsen with increased ozone formation and wildfire smoke. Seasonal changes affect mood and vitamin D levels. Preparing for and adapting to climate-related health risks is increasingly important.
            </p>

            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
              <p className="text-gray-300">
                Environmental factors significantly impact health. Taking steps to reduce exposure to harmful environmental factors and optimize beneficial ones is an important aspect of preventive healthcare.
              </p>
            </div>
          </div>
        </article>

        <div className="mt-8 flex justify-between items-center">
          <Link href="/category/health/preventive" className="text-yellow-400 hover:text-yellow-300">
            ← More Preventive Care Articles
          </Link>
        </div>
      </div>
    </div>
  );
}