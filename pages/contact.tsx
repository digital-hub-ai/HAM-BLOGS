import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [activeTab, setActiveTab] = useState('contact'); // 'contact' or 'faq'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // In a real implementation, you would send this data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // FAQ data
  const faqs = [
    {
      question: "How can I list my AI tool on your directory?",
      answer: "To list your AI tool, please visit our 'Submit a Tool' page and fill out the submission form. Our team will review your submission and get back to you within 3-5 business days."
    },
    {
      question: "How do I update my tool's information?",
      answer: "Please contact our support team with the updated information about your tool. Include your tool's name and the specific details that need to be updated."
    },
    {
      question: "What are the requirements for listing a tool?",
      answer: "We accept AI tools that are fully functional, have a public website, and provide clear information about features and pricing. Tools must comply with our content guidelines."
    },
    {
      question: "How can I advertise on your platform?",
      answer: "For advertising opportunities, please contact our advertising team at ads@aitoolsdirectory.com with details about your campaign and target audience."
    },
    {
      question: "Do you offer API access to your tool data?",
      answer: "Yes, we offer API access to our tool database for qualified partners. Please contact us at api@aitoolsdirectory.com for more information about our API plans and pricing."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Head>
        <title>Contact Us - AI Tools Directory</title>
        <meta name="description" content="Get in touch with the AI Tools Directory team for support, partnerships, or any inquiries" />
        <meta name="keywords" content="contact AI tools, support, help, feedback, partnership, advertise, list AI tool" />
        <link rel="canonical" href={`https://aitoolsdirectory.com${router.pathname}`} />
      </Head>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-white/10">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-6 py-4 font-medium text-sm md:text-base transition-colors ${
                  activeTab === 'contact'
                    ? 'text-blue-400 border-b-2 border-blue-500'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Contact Us
              </button>
              <button
                onClick={() => setActiveTab('faq')}
                className={`px-6 py-4 font-medium text-sm md:text-base transition-colors ${
                  activeTab === 'faq'
                    ? 'text-blue-400 border-b-2 border-blue-500'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                FAQ
              </button>
            </nav>
          </div>
          
          {/* Tab Content */}
          <div className="p-6 md:p-8">
            {activeTab === 'contact' ? (
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Get in Touch
                  </h1>
                  <p className="text-gray-300 mb-8">
                    Have questions or feedback? We'd love to hear from you! Fill out the form and our team will get back to you as soon as possible.
                  </p>
                  
                  {submitSuccess ? (
                    <div className="bg-green-900/30 border border-green-500 text-green-200 p-6 rounded-lg mb-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-lg font-medium text-white">Message Sent Successfully!</h3>
                          <p className="mt-2 text-green-100">Thank you for contacting us. We'll get back to you within 24-48 hours.</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {submitError && (
                        <div className="bg-red-900/30 border border-red-500 text-red-200 p-4 rounded-lg">
                          <div className="flex">
                            <svg className="h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <div>{submitError}</div>
                          </div>
                        </div>
                      )}
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                            Full Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                            placeholder="John Doe"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                            Email Address <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                          Subject <span className="text-red-400">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        >
                          <option value="" disabled>Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Support">Support</option>
                          <option value="Partnership">Partnership</option>
                          <option value="Advertising">Advertising</option>
                          <option value="Submit a Tool">Submit a Tool</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                          Your Message <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                          placeholder="Please provide details about your inquiry..."
                        />
                      </div>
                      
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center ${
                            isSubmitting
                              ? 'bg-blue-700 cursor-not-allowed'
                              : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                          } text-white`}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            'Send Message'
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
                
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-xl border border-white/10">
                    <h2 className="text-2xl font-bold mb-4 text-white">Contact Information</h2>
                    <p className="text-gray-300 mb-6">
                      We're here to help and answer any questions you might have. Reach out to us through any of these channels:
                    </p>
                    
                    <div className="space-y-5">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-blue-900/50 p-2.5 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-white">Email Us</h3>
                          <a href="mailto:support@aitoolsdirectory.com" className="text-blue-400 hover:underline">support@aitoolsdirectory.com</a>
                          <p className="text-sm text-gray-400 mt-1">For general inquiries and support</p>
                          
                          <div className="mt-3 space-y-1">
                            <p className="text-sm text-gray-300"><span className="font-medium">Business:</span> <a href="mailto:biz@aitoolsdirectory.com" className="text-blue-400 hover:underline">biz@aitoolsdirectory.com</a></p>
                            <p className="text-sm text-gray-300"><span className="font-medium">Press:</span> <a href="mailto:press@aitoolsdirectory.com" className="text-blue-400 hover:underline">press@aitoolsdirectory.com</a></p>
                            <p className="text-sm text-gray-300"><span className="font-medium">Careers:</span> <a href="mailto:careers@aitoolsdirectory.com" className="text-blue-400 hover:underline">careers@aitoolsdirectory.com</a></p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start pt-4 border-t border-white/10">
                        <div className="flex-shrink-0 bg-blue-900/50 p-2.5 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-white">Our Office</h3>
                          <address className="not-italic text-gray-300">
                            AI Tools Directory LLC<br />
                            123 AI Innovation Drive, Suite 100<br />
                            San Francisco, CA 94107<br />
                            United States
                          </address>
                          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:underline mt-2 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            View on map
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start pt-4 border-t border-white/10">
                        <div className="flex-shrink-0 bg-blue-900/50 p-2.5 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-white">Call Us</h3>
                          <p className="text-gray-300">+1 (555) 123-4567</p>
                          <p className="text-sm text-gray-400 mt-1">Monday - Friday, 9am - 5pm PST</p>
                          <p className="text-sm text-gray-400">Excluding US holidays</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/20 p-6 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
                    <p className="text-gray-300 mb-4">
                      Follow us on social media to stay updated with the latest AI tools, news, and updates.
                    </p>
                    <div className="flex space-x-4">
                      <a 
                        href="https://twitter.com/aitoolsdirectory" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-blue-400 transition-colors p-2 bg-black/30 rounded-lg hover:bg-blue-900/20"
                        aria-label="Twitter"
                      >
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a 
                        href="https://github.com/aitoolsdirectory" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-gray-200 transition-colors p-2 bg-black/30 rounded-lg hover:bg-gray-900/20"
                        aria-label="GitHub"
                      >
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a 
                        href="https://linkedin.com/company/aitoolsdirectory" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-blue-500 transition-colors p-2 bg-black/30 rounded-lg hover:bg-blue-900/20"
                        aria-label="LinkedIn"
                      >
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a 
                        href="https://discord.gg/aitoolsdirectory" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-indigo-400 transition-colors p-2 bg-black/30 rounded-lg hover:bg-indigo-900/20"
                        aria-label="Discord"
                      >
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.319 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.128 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.84 19.84 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.158-2.419 1.21 0 2.175 1.096 2.157 2.42 0 1.333-.956 2.418-2.158 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.158 2.42 0 1.333-.957 2.418-2.158 2.418z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </h1>
                <p className="text-gray-300 mb-8">
                  Find quick answers to common questions about AI Tools Directory. Can't find what you're looking for? <button onClick={() => setActiveTab('contact')} className="text-blue-400 hover:underline">Contact us</button> for more help.
                </p>
                
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-black/20 rounded-xl overflow-hidden border border-white/10">
                      <button
                        className={`w-full px-6 py-4 text-left focus:outline-none flex justify-between items-center ${
                          activeTab === `faq-${index}` ? 'bg-blue-900/20' : 'hover:bg-white/5'
                        }`}
                        onClick={() => setActiveTab(activeTab === `faq-${index}` ? 'faq' : `faq-${index}`)}
                      >
                        <span className="text-lg font-medium text-white">{faq.question}</span>
                        <svg
                          className={`h-5 w-5 text-gray-400 transform transition-transform ${
                            activeTab === `faq-${index}` ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeTab === `faq-${index}` && (
                        <div className="px-6 pb-4 text-gray-300">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 bg-blue-900/20 border border-blue-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Still have questions?</h3>
                  <p className="text-gray-300 mb-4">
                    Can't find the answer you're looking for? Our support team is here to help.
                  </p>
                  <button
                    onClick={() => setActiveTab('contact')}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    Contact Support
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}