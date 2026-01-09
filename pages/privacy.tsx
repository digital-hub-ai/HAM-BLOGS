import Head from "next/head";
import Link from "next/link";
import SEO from "../components/Seo/SEO";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <SEO
        title="Privacy Policy - HAM BLOGS"
        description="Read our privacy policy for HAM BLOGS, the world's largest premium blogging platform."
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-xl text-blue-200">
            Your Privacy Rights and Data Protection
          </p>
          <p className="text-gray-400 mt-2">Last updated: January 9, 2026</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
          <p className="text-gray-200 mb-4">
            We collect information you provide directly to us, such as when you create an account, 
            subscribe to our newsletter, or contact us for support. This may include your name, 
            email address, and other information you choose to provide.
          </p>
          <p className="text-gray-200">
            We also automatically collect certain information about your interaction with our Platform, 
            including your IP address, browser type, operating system, referring URLs, and other 
            technical information.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
          <p className="text-gray-200 mb-4">
            We use the information we collect to provide, maintain, and improve our Platform, to 
            communicate with you, and to personalize your experience on HAM BLOGS.
          </p>
          <p className="text-gray-200">
            We may also use your information to send you newsletters and other communications that 
            may be of interest to you, with your consent.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Data Protection</h2>
          <p className="text-gray-200 mb-4">
            We implement appropriate technical and organizational measures to protect your personal 
            information against unauthorized access, alteration, disclosure, or destruction.
          </p>
          <p className="text-gray-200">
            We follow industry-standard security practices to ensure the security of your personal 
            information, including encryption and access controls.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking Technologies</h2>
          <p className="text-gray-200 mb-4">
            We use cookies and similar tracking technologies to enhance your experience on our Platform. 
            Cookies are small data files stored on your device that help us analyze Platform traffic 
            and improve your experience.
          </p>
          <p className="text-gray-200">
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being 
            sent. However, if you do not accept cookies, you may not be able to use some portions 
            of our Platform.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
          <p className="text-gray-200 mb-4">
            We may use third-party services such as Google Analytics to analyze Platform usage. 
            These services may collect information about your use of our Platform and may combine 
            this information with other data they have collected.
          </p>
          <p className="text-gray-200">
            We also use advertising services that may place cookies on your device to help us 
            serve relevant advertisements.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
          <p className="text-gray-200 mb-4">
            We retain your personal information for as long as necessary to provide our services 
            and to comply with our legal obligations. If you wish to request deletion of your 
            personal information, please contact us using the information below.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
          <p className="text-gray-200 mb-4">
            Depending on your location, you may have certain rights regarding your personal 
            information, including:
          </p>
          <ul className="list-disc list-inside text-gray-200 space-y-2 mb-4">
            <li>The right to access the personal information we hold about you</li>
            <li>The right to rectify inaccurate personal information</li>
            <li>The right to request deletion of your personal information</li>
            <li>The right to restrict processing of your personal information</li>
            <li>The right to data portability</li>
            <li>The right to object to processing</li>
          </ul>
          <p className="text-gray-200">
            To exercise any of these rights, please contact us using the information provided below.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
          <p className="text-gray-200">
            Our Platform does not address anyone under the age of 13. We do not knowingly collect 
            personally identifiable information from children under 13. If you are a parent or 
            guardian and you are aware that your child has provided us with personal information, 
            please contact us so that we can take necessary steps.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-200 mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes 
            by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
          <p className="text-gray-200">
            You are advised to review this Privacy Policy periodically for any changes. Changes to 
            this Privacy Policy are effective when they are posted on this page.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-200 mb-4">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <p className="text-gray-200">Email: privacy@ham-blogs.vercel.app</p>
          <p className="text-gray-200">Address: Digital Universe</p>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all font-medium mr-4">
            Back to Home
          </Link>
          <Link href="/terms" className="inline-block bg-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all font-medium">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
}