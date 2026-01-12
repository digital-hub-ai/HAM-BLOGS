import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function WorkplaceHealthSafety() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Workplace Health and Safety - HAM BLOGS</title>
        <meta name="description" content="Maintaining health in occupational environments" />
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
                Workplace Health and Safety
              </h1>
              <div className="flex items-center text-gray-400">
                <span className="mr-6">January 3, 2026</span>
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
              Maintaining health in occupational environments. Workplace health and safety encompasses the protection of employees from job-related injuries and illnesses. Different occupations present different health risks, from physical hazards in construction and manufacturing to ergonomic risks in office settings. Understanding and mitigating workplace health risks is crucial for maintaining long-term health and productivity. Employers and employees share responsibility for creating safe and healthy work environments.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Physical Hazards</h2>
            <p className="text-gray-300 leading-relaxed">
              Physical hazards in the workplace include noise, vibration, extreme temperatures, radiation, and unsafe machinery. These can cause immediate injuries or long-term health problems. Construction workers face risks from falls, heavy equipment, and structural collapse. Manufacturing workers may be exposed to loud noise, chemicals, or repetitive motion injuries. Proper safety equipment, training, and protocols are essential for protection.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Ergonomic Risks</h2>
            <p className="text-gray-300 leading-relaxed">
              Office workers face ergonomic risks from prolonged sitting, poor posture, and repetitive motions. Computer vision syndrome, carpal tunnel syndrome, and back pain are common issues. Ergonomic interventions include proper workstation setup, frequent breaks, and movement throughout the day. Adjustable chairs, monitor stands, and keyboard trays can reduce strain. Standing desks and sit-stand transitions can help break up prolonged sitting.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Chemical Exposures</h2>
            <p className="text-gray-300 leading-relaxed">
              Many workplaces involve exposure to chemicals that can cause acute or chronic health effects. Cleaning products, solvents, adhesives, and industrial chemicals pose risks. Proper handling, storage, and use of personal protective equipment are crucial. Material Safety Data Sheets (SDS) provide information about chemical hazards and safe handling procedures. Ventilation and proper disposal also reduce exposure risks.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Psychosocial Factors</h2>
            <p className="text-gray-300 leading-relaxed">
              Workplace stress, long hours, lack of control, and poor social support can negatively impact health. Job strain is associated with increased risk of cardiovascular disease, mental health issues, and other health problems. Organizational factors like job security, career development opportunities, and work-life balance also affect health. Creating supportive work environments benefits both employee health and organizational productivity.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Prevention Strategies</h2>
            <p className="text-gray-300 leading-relaxed">
              Effective workplace health programs include hazard identification, risk assessment, and implementation of controls. Personal protective equipment should be used when engineering controls aren't sufficient. Regular safety training and health screenings can identify issues early. Promoting healthy behaviors like proper nutrition, physical activity, and stress management also supports worker health. Creating a culture of safety where reporting concerns is encouraged helps identify and address risks.
            </p>

            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
              <p className="text-gray-300">
                Workplace health and safety requires ongoing attention to physical, chemical, and psychosocial risks. Both employers and employees play important roles in maintaining healthy work environments.
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