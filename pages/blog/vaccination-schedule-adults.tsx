import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function VaccinationScheduleAdults() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Vaccination Schedule for Adults - HAM BLOGS</title>
        <meta name="description" content="Essential vaccines for adults and booster recommendations" />
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
                Vaccination Schedule for Adults
              </h1>
              <div className="flex items-center text-gray-400">
                <span className="mr-6">January 7, 2026</span>
                <span>8 min read</span>
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
              Essential vaccines for adults and booster recommendations. Vaccination doesn't end in childhood - adults need various vaccines to maintain immunity and protect against diseases that become more dangerous with age. The adult vaccination schedule includes routine vaccines that require boosters, vaccines based on risk factors or health conditions, and new vaccines that weren't available during childhood. Staying up to date with vaccinations is a crucial part of preventive healthcare.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Routine Adult Vaccines</h2>
            <p className="text-gray-300 leading-relaxed">
              Adults need regular boosters for vaccines received in childhood. The Tdap vaccine (tetanus, diphtheria, and pertussis) should be given every 10 years, with a single dose replacing the first Td booster. The annual flu vaccine is recommended for all adults, as influenza viruses change each year and immunity wanes over time. The pneumococcal vaccine protects against pneumonia and other pneumococcal diseases, particularly important for adults over 65.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Age-Based Recommendations</h2>
            <p className="text-gray-300 leading-relaxed">
              As we age, our immune systems become less responsive, making us more susceptible to certain diseases. Adults over 50 should receive the shingles vaccine (Shingrix), which is highly effective at preventing this painful condition. Adults over 65 should receive pneumococcal vaccines to protect against pneumonia, meningitis, and bloodstream infections. The timing and sequence of these vaccines matter for optimal protection.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Health Condition-Based Vaccines</h2>
            <p className="text-gray-300 leading-relaxed">
              Certain health conditions increase the risk of vaccine-preventable diseases. Adults with diabetes, heart disease, lung disease, or compromised immune systems may need additional vaccines. Hepatitis B vaccination is recommended for adults with diabetes under 60. Adults with chronic liver disease or kidney disease may need hepatitis A vaccination. Healthcare workers and others with occupational exposure risks need specific vaccines.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Travel-Related Vaccines</h2>
            <p className="text-gray-300 leading-relaxed">
              Travel to certain countries may require or recommend specific vaccines. Yellow fever, typhoid, Japanese encephalitis, and meningococcal vaccines may be needed depending on destination and activities. Some vaccines need to be given well in advance of travel to be effective. Consulting with a travel medicine specialist or healthcare provider 4-6 weeks before travel is recommended.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Vaccine Safety and Side Effects</h2>
            <p className="text-gray-300 leading-relaxed">
              Vaccines undergo rigorous testing for safety and effectiveness. Common side effects are usually mild, such as injection site soreness or low-grade fever. Serious side effects are extremely rare. The benefits of vaccination far outweigh the risks for most people. Healthcare providers can discuss any specific concerns and help determine which vaccines are appropriate based on individual health status and risk factors.
            </p>

            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
              <p className="text-gray-300">
                Adults need various vaccines throughout their lives to maintain immunity and prevent serious diseases. Consult with your healthcare provider to determine which vaccines are appropriate for your age, health status, and risk factors.
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