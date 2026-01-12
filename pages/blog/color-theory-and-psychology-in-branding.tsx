import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function ColorTheoryAndPsychologyInBranding() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Color Theory and Psychology in Branding - HAM BLOGS</title>
        <meta name="description" content="How colors influence perception and decision-making in brand identity" />
        <meta name="keywords" content="color theory, branding psychology, color psychology, brand identity, visual marketing, brand strategy, design psychology" />
        <meta property="og:title" content="Color Theory and Psychology in Branding" />
        <meta property="og:description" content="How colors influence perception and decision-making in brand identity" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Color Theory and Psychology in Branding" />
        <meta name="twitter:description" content="How colors influence perception and decision-making in brand identity" />
      </Head>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8"
        >
          <span className="mr-2">←</span> Back to Graphic Design
        </button>

        <article className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm mb-4">
                Graphic Design
              </span>
              <h1 className="text-4xl font-bold text-white mb-4">
                Color Theory and Psychology in Branding
              </h1>
              <div className="flex items-center text-gray-400">
                <span className="mr-6">January 8, 2026</span>
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
              How colors influence perception and decision-making in brand identity. Color is one of the most powerful tools in a designer's arsenal, capable of evoking emotions, conveying messages, and influencing consumer behavior. Understanding the psychological impact of colors is crucial for creating effective brand identities that resonate with target audiences. The strategic use of color can differentiate a brand from competitors, communicate values, and create lasting impressions in consumers' minds.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Fundamentals of Color Theory</h2>
            <p className="text-gray-300 leading-relaxed">
              Color theory is a framework that explains how colors interact, blend, and create visual harmony. The color wheel, developed by Sir Isaac Newton, serves as the foundation for understanding relationships between colors. Primary colors (red, blue, yellow) cannot be created by mixing other colors, while secondary colors (green, orange, purple) result from combining primary colors. Tertiary colors are formed by mixing primary and secondary colors. Understanding these relationships enables designers to create cohesive color palettes that enhance brand messaging.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Psychological Impact of Colors</h2>
            <p className="text-gray-300 leading-relaxed">
              Different colors evoke distinct emotional responses and associations. Red conveys energy, passion, and urgency, making it popular among food and retail brands. Blue suggests trust, reliability, and professionalism, commonly used by banks and technology companies. Green represents nature, growth, and health, frequently chosen by environmental and wellness brands. Yellow evokes optimism and creativity but can also signal caution. Purple is associated with luxury, creativity, and spirituality. Cultural variations in color perception must be considered when developing global brands.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Color in Brand Recognition</h2>
            <p className="text-gray-300 leading-relaxed">
              Studies show that color increases brand recognition by up to 80%. Consumers make subconscious judgments about products within 90 seconds, with color accounting for 62-90% of that assessment. McDonald's golden arches against red background create appetite and excitement. Coca-Cola's distinctive red evokes happiness and energy. Tiffany & Co.'s signature blue box represents luxury and exclusivity. These examples demonstrate how consistent color usage strengthens brand recall and builds emotional connections with consumers.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Cultural Considerations in Color Selection</h2>
            <p className="text-gray-300 leading-relaxed">
              Color meanings vary significantly across cultures, making cultural sensitivity crucial for international brands. White symbolizes purity in Western cultures but represents mourning in many Eastern countries. Red signifies luck and prosperity in China but danger in Western contexts. Understanding these cultural nuances prevents unintended negative associations and ensures brand messages resonate appropriately across diverse markets. Global brands often adapt their color schemes regionally to optimize cultural relevance.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Practical Application in Branding</h2>
            <p className="text-gray-300 leading-relaxed">
              Successful color application involves considering the target audience, industry, and brand personality. Financial institutions typically choose blues and greens to convey stability and trust. Tech companies often use vibrant colors to suggest innovation and energy. Luxury brands favor neutral tones or rich jewel tones to communicate sophistication. Testing color effectiveness through A/B testing and user feedback helps refine brand color strategies for optimal impact.
            </p>

            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
              <p className="text-gray-300">
                Color selection in branding should be strategic, considering psychological impact, cultural context, and target audience preferences. The right color palette reinforces brand personality, communicates values, and creates lasting emotional connections with consumers. Thoughtful color choices enhance brand recognition and contribute significantly to overall brand success.
              </p>
            </div>

            <div className="mt-12 bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="border-b border-gray-700 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-lg font-bold text-yellow-400 mb-2">How many colors should a brand use in its palette?</h3>
                  <p className="text-gray-300">Most experts recommend limiting brand palettes to 3-5 colors. This includes a primary color, secondary colors for accents, and neutral tones. Too many colors can appear chaotic and dilute brand identity, while too few may limit creative flexibility.</p>
                </div>
                
                <div className="border-b border-gray-700 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-lg font-bold text-yellow-400 mb-2">Can colors affect purchasing decisions?</h3>
                  <p className="text-gray-300">Yes, research shows that up to 85% of consumers cite color as a primary reason for purchasing decisions. Colors influence mood, perception of value, and emotional connection to products. Strategic color use can increase conversion rates and customer loyalty.</p>
                </div>
                
                <div className="border-b border-gray-700 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-lg font-bold text-yellow-400 mb-2">How do I test my brand's color effectiveness?</h3>
                  <p className="text-gray-300">Conduct A/B tests comparing different color schemes, survey your target audience, and analyze competitor color strategies. Monitor brand recognition metrics and customer feedback to assess color impact on brand perception.</p>
                </div>
                
                <div className="border-b border-gray-700 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-lg font-bold text-yellow-400 mb-2">Should brand colors be the same across all media?</h3>
                  <p className="text-gray-300">Consistency is key for brand recognition, but slight adjustments may be necessary for different media (print vs. digital). Maintain the same hue and saturation when possible, adjusting only for technical limitations like printing processes or screen displays.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-indigo-900/30 border border-indigo-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Interactive Quiz: Test Your Color Psychology Knowledge</h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <p className="text-white font-medium mb-3">1. Which color is most associated with trust and reliability?</p>
                  <div className="space-y-2 ml-4">
                    <div className="flex items-center">
                      <input type="radio" id="q1a" name="q1" className="mr-2" />
                      <label htmlFor="q1a" className="text-gray-300">A) Red</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q1b" name="q1" className="mr-2" />
                      <label htmlFor="q1b" className="text-gray-300">B) Blue</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q1c" name="q1" className="mr-2" />
                      <label htmlFor="q1c" className="text-gray-300">C) Green</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q1d" name="q1" className="mr-2" />
                      <label htmlFor="q1d" className="text-gray-300">D) Orange</label>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <p className="text-white font-medium mb-3">2. What percentage of brand recognition is attributed to color?</p>
                  <div className="space-y-2 ml-4">
                    <div className="flex items-center">
                      <input type="radio" id="q2a" name="q2" className="mr-2" />
                      <label htmlFor="q2a" className="text-gray-300">A) 40-50%</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q2b" name="q2" className="mr-2" />
                      <label htmlFor="q2b" className="text-gray-300">B) 62-90%</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q2c" name="q2" className="mr-2" />
                      <label htmlFor="q2c" className="text-gray-300">C) 20-30%</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q2d" name="q2" className="mr-2" />
                      <label htmlFor="q2d" className="text-gray-300">D) 95-99%</label>
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
                  <h3 className="text-lg font-bold text-yellow-400 mb-2">Color Tools</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Adobe Color - Color palette generator</li>
                    <li>• Coolors - Fast color palette creator</li>
                    <li>• Color Hunt - Curated color palettes</li>
                    <li>• Paletton - Color scheme designer</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gray-700/50 rounded-lg">
                  <h3 className="text-lg font-bold text-yellow-400 mb-2">Further Reading</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• The Elements of Color by Johannes Itten</li>
                    <li>• Interaction of Color by Josef Albers</li>
                    <li>• Color Theory: An Essential Guide to Color Fundamentals</li>
                    <li>• Pantone View Color Forecast</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-700/50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
              <p className="text-gray-300 leading-relaxed">
                Color psychology plays a vital role in branding, influencing consumer perceptions and behaviors in profound ways. By understanding the emotional and cultural associations of different colors, brands can strategically select hues that reinforce their messaging and connect with their target audience. The key is to balance psychological impact with cultural sensitivity and practical application, ensuring that color choices support overall brand strategy while resonating with intended consumers. As visual creatures, humans are naturally drawn to color, making it one of the most powerful tools in a brand's visual arsenal.
              </p>
            </div>
          </div>
        </article>

        <div className="mt-8 flex justify-between items-center">
          <Link href="/category/design/graphic" className="text-yellow-400 hover:text-yellow-300">
            ← More Graphic Design Articles
          </Link>
        </div>
      </div>
    </div>
  );
}