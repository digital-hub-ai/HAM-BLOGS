import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function ResponsiveWebDesignMobileFirstApproach() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Responsive Web Design: Mobile-First Approach - HAM BLOGS</title>
        <meta name="description" content="Strategies for designing websites that work seamlessly across all devices" />
        <meta name="keywords" content="responsive web design, mobile-first, breakpoints, CSS Grid, Flexbox, adaptive design, mobile optimization, web design, RWD, viewport" />
        <meta property="og:title" content="Responsive Web Design: Mobile-First Approach" />
        <meta property="og:description" content="Strategies for designing websites that work seamlessly across all devices" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Responsive Web Design: Mobile-First Approach" />
        <meta name="twitter:description" content="Strategies for designing websites that work seamlessly across all devices" />
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
                Responsive Web Design: Mobile-First Approach
              </h1>
              <div className="flex items-center text-gray-400">
                <span className="mr-6">January 6, 2026</span>
                <span>10 min read</span>
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
              Strategies for designing websites that work seamlessly across all devices. Responsive web design (RWD) is a design approach that ensures websites adapt to different screen sizes and orientations. The mobile-first approach starts with designing for the smallest screens and progressively enhances the experience for larger screens. This methodology prioritizes core content and functionality, ensuring optimal performance on devices with limited bandwidth and processing power.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Understanding Breakpoints</h2>
            <p className="text-gray-300 leading-relaxed">
              Breakpoints are specific screen widths where the website's layout changes to accommodate different devices. Common breakpoints include 320px (mobile), 768px (tablet), and 1024px (desktop). Rather than using device-specific breakpoints, it's better to use content-driven breakpoints that respond to the content's natural breaking points. This approach ensures the design remains flexible across the wide variety of devices available today.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">CSS Grid and Flexbox</h2>
            <p className="text-gray-300 leading-relaxed">
              CSS Grid and Flexbox are powerful layout tools that make responsive design more manageable. CSS Grid excels at two-dimensional layouts, allowing for complex designs with rows and columns. Flexbox is ideal for one-dimensional layouts, making it perfect for navigation bars, cards, and other components that need to adapt to available space. Together, these tools provide the foundation for modern responsive layouts.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Mobile-First Strategy</h2>
            <p className="text-gray-300 leading-relaxed">
              The mobile-first strategy begins with the assumption that the design will work on mobile devices and then scales up to larger screens. This approach ensures that performance and core functionality are prioritized. It also prevents the common mistake of trying to shrink desktop layouts for mobile, which often results in poor mobile experiences. Mobile-first design leads to cleaner, more focused interfaces.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Performance Considerations</h2>
            <p className="text-gray-300 leading-relaxed">
              Responsive design must consider performance across all devices. Images should be optimized and served in multiple sizes using the srcset attribute. CSS and JavaScript should be minimized and loaded efficiently. Critical resources should be prioritized to ensure fast loading times on slower mobile connections. Performance directly impacts user engagement and search engine rankings.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Testing Across Devices</h2>
            <p className="text-gray-300 leading-relaxed">
              Thorough testing is essential for responsive design. Use browser developer tools to simulate different screen sizes, but also test on actual devices when possible. Pay attention to touch targets, readability, and navigation patterns on each device type. Automated testing tools can help identify layout issues, but manual testing remains crucial for verifying the user experience.
            </p>

            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
              <p className="text-gray-300">
                Responsive web design with a mobile-first approach ensures optimal user experiences across all devices. Success requires understanding CSS layout tools, setting appropriate breakpoints, and prioritizing performance and usability at every screen size.
              </p>
            </div>

            <div className="mt-12 bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="border-b border-gray-700 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-lg font-bold text-yellow-400 mb-2">What is the difference between responsive and adaptive design?</h3>
                  <p className="text-gray-300">Responsive design uses fluid grids and flexible layouts that adapt continuously to screen sizes. Adaptive design uses fixed layouts for specific screen sizes. Responsive design is more flexible and requires less maintenance, while adaptive design can provide more tailored experiences for specific devices.</p>
                </div>
                
                <div className="border-b border-gray-700 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-lg font-bold text-yellow-400 mb-2">Should I still use a desktop-first approach?</h3>
                  <p className="text-gray-300">While desktop-first design is still viable, mobile-first is generally recommended. Mobile-first ensures performance and core functionality are prioritized. It also reflects the reality that most users access websites from mobile devices. Desktop-first can lead to bloated designs that don't work well on smaller screens.</p>
                </div>
                
                <div className="border-b border-gray-700 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-lg font-bold text-yellow-400 mb-2">How do I optimize images for responsive design?</h3>
                  <p className="text-gray-300">Use the srcset attribute to provide multiple image sizes. Implement lazy loading for images below the fold. Compress images using modern formats like WebP. Consider using CSS background-size properties for decorative images. Always specify image dimensions to prevent layout shifts during loading.</p>
                </div>
                
                <div className="border-b border-gray-700 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-lg font-bold text-yellow-400 mb-2">What are the most important CSS properties for responsive design?</h3>
                  <p className="text-gray-300">Key CSS properties include: flexbox properties (display: flex, flex-direction, justify-content), grid properties (display: grid, grid-template-columns), media queries (@media), viewport units (vw, vh), and max-width/min-width for controlling element sizing. Understanding these properties is essential for creating responsive layouts.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-indigo-900/30 border border-indigo-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Interactive Quiz: Test Your Responsive Design Knowledge</h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <p className="text-white font-medium mb-3">1. Which CSS property is used to create a flexible container?</p>
                  <div className="space-y-2 ml-4">
                    <div className="flex items-center">
                      <input type="radio" id="q1a" name="q1" className="mr-2" />
                      <label htmlFor="q1a" className="text-gray-300">A) display: block</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q1b" name="q1" className="mr-2" />
                      <label htmlFor="q1b" className="text-gray-300">B) display: flex</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q1c" name="q1" className="mr-2" />
                      <label htmlFor="q1c" className="text-gray-300">C) position: absolute</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q1d" name="q1" className="mr-2" />
                      <label htmlFor="q1d" className="text-gray-300">D) float: left</label>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <p className="text-white font-medium mb-3">2. What does the viewport meta tag do?</p>
                  <div className="space-y-2 ml-4">
                    <div className="flex items-center">
                      <input type="radio" id="q2a" name="q2" className="mr-2" />
                      <label htmlFor="q2a" className="text-gray-300">A) Sets the background color</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q2b" name="q2" className="mr-2" />
                      <label htmlFor="q2b" className="text-gray-300">B) Controls the initial zoom level and viewport width</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q2c" name="q2" className="mr-2" />
                      <label htmlFor="q2c" className="text-gray-300">C) Defines the document title</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q2d" name="q2" className="mr-2" />
                      <label htmlFor="q2d" className="text-gray-300">D) Links to external CSS files</label>
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
                  <h3 className="text-lg font-bold text-yellow-400 mb-2">Development Tools</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Browser DevTools - Device simulation</li>
                    <li>• Responsinator - Multi-device testing</li>
                    <li>• Am I Responsive - Mockup generator</li>
                    <li>• Chrome DevTools - Layout inspector</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gray-700/50 rounded-lg">
                  <h3 className="text-lg font-bold text-yellow-400 mb-2">Further Reading</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Responsive Web Design by Ethan Marcotte</li>
                    <li>• Mobile-First by Luke Wroblewski</li>
                    <li>• CSS Secrets by Lea Verou</li>
                    <li>• High Performance Responsive Design by Tom Barker</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-700/50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
              <p className="text-gray-300 leading-relaxed">
                Responsive web design with a mobile-first approach is essential in today's multi-device landscape. By leveraging modern CSS techniques like Grid and Flexbox, implementing thoughtful breakpoints, and prioritizing performance, developers can create websites that provide excellent experiences across all devices. The key is to focus on the user experience at every screen size, ensuring that functionality and content remain accessible and usable regardless of the device being used. As new devices continue to enter the market, responsive design principles will remain fundamental to creating successful web experiences.
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