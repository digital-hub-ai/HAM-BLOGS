import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function PrivacyPolicy() {
  const [lastUpdated] = useState('December 9, 2025');
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('privacy');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Head>
        <title>Privacy Policy - AI Tools Directory</title>
        <meta name="description" content="Comprehensive Privacy Policy for AI Tools Directory" />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-gray-300">Last Updated: {lastUpdated}</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
              <p className="mb-4 text-gray-300">
                Welcome to AI Tools Directory. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">2. Information We Collect</h2>
              <p className="mb-2 text-gray-300">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
                <li>Personal information (name, email, etc.) when you create an account</li>
                <li>Usage data and analytics about how you interact with our site</li>
                <li>Information from cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">3. How We Use Your Information</h2>
              <p className="mb-2 text-gray-300">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
                <li>Provide and maintain our services</li>
                <li>Improve user experience</li>
                <li>Communicate with you</li>
                <li>Analyze usage patterns</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">4. Data Security</h2>
              <p className="mb-4 text-gray-300">
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">5. Your Rights</h2>
              <p className="mb-4 text-gray-300">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
                <li>Right to access your data</li>
                <li>Right to correct inaccuracies</li>
                <li>Right to request deletion</li>
                <li>Right to object to processing</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">6. Cookies</h2>
              <p className="mb-4 text-gray-300">
                We use cookies to enhance your experience. You can manage your cookie preferences through your browser settings.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">7. Contact Us</h2>
              <p className="mb-2 text-gray-300">If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="text-blue-400">privacy@aitoolsdirectory.com</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}