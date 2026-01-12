import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function AccessibilityInDesignInclusivePractices() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Accessibility in Design: Inclusive Practices - HAM BLOGS</title>
        <meta name="description" content="Creating designs that are accessible to users with diverse abilities and needs" />
        <meta name="keywords" content="web accessibility, inclusive design, WCAG, ADA compliance, screen readers, keyboard navigation, color contrast, accessible design, universal design" />
        <meta property="og:title" content="Accessibility in Design: Inclusive Practices" />
        <meta property="og:description" content="Creating designs that are accessible to users with diverse abilities and needs" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Accessibility in Design: Inclusive Practices" />
        <meta name="twitter:description" content="Creating designs that are accessible to users with diverse abilities and needs" />
      </Head>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8"
        >
          <span className="mr-2">←</span> Back to UI/UX Design
        </button>

        <article className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm mb-4">
                UI/UX Design
              </span>
              <h1 className="text-4xl font-bold text-white mb-4">
                Accessibility in Design: Inclusive Practices
              </h1>
              <div className="flex items-center text-gray-400">
                <span className="mr-6">January 5, 2026</span>
                <span>7 min read</span>
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
              Creating designs that are accessible to users with diverse abilities and needs. Accessibility in design ensures that digital products can be used by people with a wide range of abilities, including those with visual, auditory, motor, or cognitive impairments. Inclusive design benefits all users, not just those with disabilities. It's both an ethical imperative and often a legal requirement. Implementing accessibility from the beginning of the design process is more effective than retrofitting it later.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Understanding Different Types of Disabilities</h2>
            <p className="text-gray-300 leading-relaxed">
              Disabilities can be permanent, temporary, or situational. Visual impairments include blindness, low vision, and color blindness. Auditory impairments range from partial hearing loss to complete deafness. Motor impairments affect the ability to use a mouse or keyboard. Cognitive impairments include difficulties with memory, attention, or problem-solving. Understanding these variations helps designers create solutions that work for everyone.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">WCAG Guidelines and Standards</h2>
            <p className="text-gray-300 leading-relaxed">
              The Web Content Accessibility Guidelines (WCAG) provide a framework for accessible design. The four principles—Perceivable, Operable, Understandable, and Robust (POUR)—form the foundation of accessible design. WCAG 2.1 AA conformance is the most commonly adopted standard. Meeting these guidelines ensures that content is accessible to the widest possible audience and helps comply with legal requirements like the Americans with Disabilities Act (ADA).
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Color Contrast and Visual Design</h2>
            <p className="text-gray-300 leading-relaxed">
              Proper color contrast ensures that text and interface elements are readable for users with visual impairments or color blindness. The WCAG requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text. Tools like color contrast checkers can help verify compliance. Additionally, color should never be the sole method of conveying information, as this excludes users with color blindness.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Keyboard Navigation and Focus Management</h2>
            <p className="text-gray-300 leading-relaxed">
              Many users navigate websites using keyboards or assistive technologies that rely on keyboard input. All interactive elements must be keyboard accessible, with clear focus indicators. Logical tab order helps users navigate efficiently. Proper focus management is crucial for complex components like modals, menus, and tabs. Users should be able to navigate without getting trapped in elements.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Screen Reader Compatibility</h2>
            <p className="text-gray-300 leading-relaxed">
              Screen readers convert text to speech for users who are blind or have low vision. Semantic HTML provides the structure that screen readers need to understand content. Proper heading hierarchies, descriptive link text, and alternative text for images are essential. ARIA (Accessible Rich Internet Applications) attributes can provide additional context when needed, but should supplement—not replace—semantic HTML.
            </p>

            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
              <p className="text-gray-300">
                Accessibility is a fundamental aspect of inclusive design that benefits all users. By following established guidelines and considering diverse needs from the beginning of the design process, designers can create products that are usable by the widest possible audience.
              </p>
            </div>

            <div className="mt-12 bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="border-b border-gray-700 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-lg font-bold text-yellow-400 mb-2">What is the difference between accessibility and usability?</h3>
                  <p className="text-gray-300">Usability is about how easy and efficient a product is for all users. Accessibility specifically addresses the needs of users with disabilities. While usability aims to make products easy for everyone, accessibility ensures that products are perceivable, operable, understandable, and robust for users with diverse abilities. Accessibility is a subset of usability.</p>
                </div>
                
                <div className="border-b border-gray-700 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-lg font-bold text-yellow-400 mb-2">Do I need to make my website accessible?</h3>
                  <p className="text-gray-300">Yes, in many cases accessibility is legally required. The Americans with Disabilities Act (ADA) covers digital products, and many lawsuits have been filed over inaccessible websites. Beyond legal requirements, accessibility expands your user base and demonstrates corporate social responsibility. It's also good business practice as it improves SEO and user experience for all users.</p>
                </div>
                
                <div className="border-b border-gray-700 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-lg font-bold text-yellow-400 mb-2">What are the most common accessibility mistakes?</h3>
                  <p className="text-gray-300">Common mistakes include insufficient color contrast, missing alternative text for images, non-descriptive link text ("click here"), missing form labels, poor keyboard navigation, and inaccessible PDFs. Another major issue is using images of text instead of actual text, which screen readers cannot interpret.</p>
                </div>
                
                <div className="border-b border-gray-700 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-lg font-bold text-yellow-400 mb-2">How do I test for accessibility?</h3>
                  <p className="text-gray-300">Use automated tools like axe-core or WAVE to catch common issues. Manual testing includes navigating with keyboard only and using screen readers like NVDA or VoiceOver. The most effective approach combines automated tools, manual testing, and user testing with people who have disabilities. Regular audits throughout the development process are more effective than one-time testing.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-indigo-900/30 border border-indigo-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Interactive Quiz: Test Your Accessibility Knowledge</h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <p className="text-white font-medium mb-3">1. What does the 'A' in WCAG stand for?</p>
                  <div className="space-y-2 ml-4">
                    <div className="flex items-center">
                      <input type="radio" id="q1a" name="q1" className="mr-2" />
                      <label htmlFor="q1a" className="text-gray-300">A) Accessibility</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q1b" name="q1" className="mr-2" />
                      <label htmlFor="q1b" className="text-gray-300">B) Agreement</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q1c" name="q1" className="mr-2" />
                      <label htmlFor="q1c" className="text-gray-300">C) Authoring</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q1d" name="q1" className="mr-2" />
                      <label htmlFor="q1d" className="text-gray-300">D) Application</label>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <p className="text-white font-medium mb-3">2. What is the minimum contrast ratio for normal text according to WCAG?</p>
                  <div className="space-y-2 ml-4">
                    <div className="flex items-center">
                      <input type="radio" id="q2a" name="q2" className="mr-2" />
                      <label htmlFor="q2a" className="text-gray-300">A) 3:1</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q2b" name="q2" className="mr-2" />
                      <label htmlFor="q2b" className="text-gray-300">B) 4:1</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q2c" name="q2" className="mr-2" />
                      <label htmlFor="q2c" className="text-gray-300">C) 4.5:1</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q2d" name="q2" className="mr-2" />
                      <label htmlFor="q2d" className="text-gray-300">D) 5:1</label>
                    </div>
                  </div>
                </div>
                
                <button className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium">
                  Submit Answers
                </button>
              </div>
            </div>

            <div className="mt-12 bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-700/50 rounded-lg">
                  <h3 className="text-lg font-bold text-yellow-400 mb-2">Testing Tools</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• WAVE - Web accessibility evaluation tool</li>
                    <li>• axe - Accessibility testing engine</li>
                    <li>• Lighthouse - Built-in browser audit tool</li>
                    <li>• Color Safe - Color contrast checker</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gray-700/50 rounded-lg">
                  <h3 className="text-lg font-bold text-yellow-400 mb-2">Further Reading</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Inclusive Design Patterns by Heydon Pickering</li>
                    <li>• A Web for Everyone by Sarah Horton and Whitney Quesenbery</li>
                    <li>• Don't Make Me Think by Steve Krug</li>
                    <li>• Accessibility for Everyone by Laura Kalbag</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-700/50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
              <p className="text-gray-300 leading-relaxed">
                Accessibility in design is not just about compliance—it's about creating inclusive experiences that work for everyone. By implementing accessibility from the beginning of the design process, teams can create products that serve a broader audience while also improving the experience for all users. The investment in accessible design pays dividends in legal compliance, expanded market reach, and improved user satisfaction. As the digital world continues to expand, accessibility will remain a critical component of responsible design practice, ensuring that everyone has equal access to information and services.
              </p>
            </div>
          </div>
        </article>

        <div className="mt-8 flex justify-between items-center">
          <Link href="/category/design/ui-ux" className="text-yellow-400 hover:text-yellow-300">
            ← More UI/UX Design Articles
          </Link>
        </div>
      </div>
    </div>
  );
}