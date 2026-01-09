import Head from "next/head";
import Link from "next/link";
import SEO from "../components/Seo/SEO";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <SEO
        title="Terms and Services - HAM BLOGS"
        description="Read our terms and services for using HAM BLOGS, the world's largest premium blogging platform."
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms and <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-blue-200">
            Legal Agreement for HAM BLOGS Platform
          </p>
          <p className="text-gray-400 mt-2">Last updated: January 9, 2026</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
          <p className="text-gray-200 mb-4">
            By accessing and using HAM BLOGS ("the Platform"), you accept and agree to be bound by the 
            terms and provisions of this agreement. If you do not agree to abide by these terms, 
            you are not authorized to use or access the Platform.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Description of Service</h2>
          <p className="text-gray-200 mb-4">
            HAM BLOGS provides a premium blogging platform that offers access to technology insights, 
            AI research, and expert knowledge across multiple domains. The Platform is constantly evolving 
            to serve our users better.
          </p>
          <p className="text-gray-200">
            We reserve the right to modify or discontinue, temporarily or permanently, the Platform or 
            any part of it with or without notice at any time.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">User Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-2 mb-4">
            <li>You must be 13 years of age or older to use this Platform</li>
            <li>You are responsible for maintaining the security of your account</li>
            <li>You are responsible for all activities that occur under your account</li>
            <li>You must not abuse, harass, threaten, or otherwise violate the rights of others</li>
            <li>You must not use the Platform for any illegal or unauthorized purpose</li>
            <li>You must not transmit any worms or viruses or any code of a destructive nature</li>
          </ul>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
          <p className="text-gray-200 mb-4">
            All content on HAM BLOGS, including but not limited to text, graphics, logos, button icons, 
            images, audio clips, digital downloads, data compilations, and software, is the property 
            of HAM BLOGS or its content creators and is protected by international copyright laws.
          </p>
          <p className="text-gray-200">
            Users may not reproduce, duplicate, copy, sell, resell, or exploit any portion of the 
            Platform without express written permission by HAM BLOGS.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">User-Generated Content</h2>
          <p className="text-gray-200 mb-4">
            When users post content to HAM BLOGS, they retain ownership of their intellectual property. 
            However, by posting content, users grant HAM BLOGS a worldwide, non-exclusive, royalty-free 
            license to use, reproduce, modify, adapt, publish, translate, create derivative works from, 
            distribute, and display such content in connection with the operation of the Platform.
          </p>
          <p className="text-gray-200">
            Users are solely responsible for the content they post and must ensure they have the rights 
            to share such content.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Disclaimer of Warranties</h2>
          <p className="text-gray-200 mb-4">
            HAM BLOGS is provided "as is" and "as available" without any representations or warranties 
            of any kind, express or implied, including but not limited to the implied warranties of 
            merchantability, fitness for a particular purpose, and non-infringement.
          </p>
          <p className="text-gray-200">
            We do not warrant that the Platform will be uninterrupted or error-free, that defects will 
            be corrected, or that the Platform is free of viruses or other harmful components.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
          <p className="text-gray-200 mb-4">
            In no event shall HAM BLOGS, its officers, directors, employees, or agents be liable for any 
            direct, indirect, incidental, special, punitive, or consequential damages, or any loss of 
            profits or revenues, whether incurred directly or indirectly, or any loss of data, use, 
            goodwill, or other intangible losses, resulting from your use of the Platform.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
          <p className="text-gray-200">
            We reserve the right to modify these Terms at any time. We will notify users of any changes 
            by posting the new Terms on the Platform. You are advised to review these Terms periodically 
            for any changes. Changes to these Terms are effective when they are posted on this page.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
          <p className="text-gray-200 mb-4">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="text-gray-200">Email: legal@ham-blogs.vercel.app</p>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all font-medium mr-4">
            Back to Home
          </Link>
          <Link href="/privacy" className="inline-block bg-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all font-medium">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}