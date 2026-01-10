import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function BlogPost() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [relatedArticles, setRelatedArticles] = useState<{ id: string; title: string; slug: string; excerpt: string; }[]>([]);

  useEffect(() => {
    // Check if article is bookmarked
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const isBookmarked = bookmarks.some((article: any) => article.slug === router.pathname.split('/').pop());
    setBookmarked(isBookmarked);

    // Generate related articles
    const allArticles = [
      {
        id: '1',
        title: 'Spring 2026 Fashion Week Highlights',
        slug: 'spring-2026-fashion-week-highlights',
        excerpt: 'Key trends from the major fashion weeks around the globe...'
      },
      {
        id: '2',
        title: 'Sustainable Luxury Fashion Brands',
        slug: 'sustainable-luxury-fashion-brands',
        excerpt: 'Exploring eco-conscious luxury fashion labels making a difference...'
      },
      {
        id: '3',
        title: 'Building a Capsule Wardrobe',
        slug: 'building-a-capsule-wardrobe',
        excerpt: 'How to curate a timeless and versatile wardrobe...'
      }
    ];
    
    // Randomly select 2 articles
    const shuffled = [...allArticles].sort(() => 0.5 - Math.random());
    setRelatedArticles(shuffled.slice(0, 2));
  }, [router]);

  const toggleBookmark = () => {
    const articleData = {
      id: Math.random().toString(36).substr(2, 9),
      title: 'Ethical Fashion Certifications: What to Look For',
      slug: router.pathname.split('/').pop(),
      date: '2026-01-01',
      category: 'Fashion & Style'
    };

    let bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const existingIndex = bookmarks.findIndex((article: any) => article.slug === articleData.slug);

    if (existingIndex >= 0) {
      bookmarks.splice(existingIndex, 1);
    } else {
      bookmarks.push(articleData);
    }

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Ethical Fashion Certifications: What to Look For | Premium Blog Platform</title>
        <meta name="description" content="Understanding certifications that guarantee ethical production standards" />
        <link rel="canonical" href="https://www.premiumblogplatform.com/blog/ethical-fashion-certifications-what-to-look-for" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <header className="mb-8 sm:mb-12">
          <nav className="mb-6">
            <Link href="/" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
              <span className="mr-2">←</span> Home
            </Link>
          </nav>
          
          <div className="flex flex-wrap items-center justify-between mb-6">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 sm:mb-0">
              Fashion & Style
            </span>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleBookmark}
                className={`p-2 rounded-full transition-colors ${
                  bookmarked 
                    ? 'text-yellow-400 bg-yellow-400/10' 
                    : 'text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10'
                }`}
                aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark article'}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24"
                  fill={bookmarked ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ethical Fashion Certifications: What to Look For
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-400 text-sm mb-6">
            <span className="mr-4">January 1, 2026</span>
            <span>7 min read</span>
          </div>
        </header>

        <main className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            As consumers become increasingly aware of the social and environmental impacts of their purchasing decisions, ethical fashion certifications have emerged as essential tools for identifying brands that align with their values. These certifications provide third-party validation of claims regarding labor practices, environmental stewardship, and material sourcing, helping consumers navigate the complex landscape of sustainable fashion. Understanding these certifications empowers shoppers to make informed decisions that support ethical production practices and contribute to positive change in the fashion industry.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Introduction to Ethical Fashion Certification</h2>
          
          <p className="mb-6 text-gray-200">
            Ethical fashion certifications serve as independent verification systems that assess and validate brands' claims about their production practices. These certifications evaluate various aspects of the supply chain, including worker welfare, environmental impact, and material sourcing. By obtaining certification from recognized organizations, brands demonstrate their commitment to ethical practices and provide consumers with credible evidence of their standards.
          </p>
          
          <p className="mb-6 text-gray-200">
            The proliferation of greenwashing—making unsubstantiated or misleading claims about environmental benefits—has made credible certifications more important than ever. Third-party certifications provide objective assessments that consumers can trust, distinguishing genuinely ethical brands from those making hollow promises.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Fair Trade Certified</h2>
          
          <p className="mb-6 text-gray-200">
            Fair Trade certification ensures that producers in developing countries receive fair compensation and work in safe conditions. This certification covers the entire supply chain, from raw material production to manufacturing, ensuring that farmers and workers receive premiums for their products and invest in community development projects.
          </p>
          
          <p className="mb-6 text-gray-200">
            Fair Trade standards include requirements for democratic decision-making among producer groups, environmental sustainability practices, and transparency in business operations. Products with Fair Trade certification carry premiums that support education, healthcare, and infrastructure development in producing communities.
          </p>
          
          <p className="mb-6 text-gray-200">
            When looking for Fair Trade certification, consumers should verify that the certification applies to the entire product or specific components. Some brands may only certify certain materials rather than entire product lines, so it's important to understand the scope of certification.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Global Organic Textile Standard (GOTS)</h2>
          
          <p className="mb-6 text-gray-200">
            GOTS is the world's leading processing standard for textiles made from organic fibers. This certification addresses both environmental and social criteria throughout the entire textile supply chain, from harvesting of organic fibers to labeling of the final product.
          </p>
          
          <p className="mb-6 text-gray-200">
            GOTS certification requires that products contain at least 70% organic fibers, with stricter requirements for products labeled as "organic" (containing at least 95% organic fibers). The standard prohibits the use of toxic chemicals, heavy metals, and genetically modified organisms in production processes.
          </p>
          
          <p className="mb-6 text-gray-200">
            Beyond environmental standards, GOTS includes social criteria that align with International Labour Organization (ILO) conventions, covering minimum wage compliance, reasonable working hours, and safe working conditions. This dual focus makes GOTS one of the most comprehensive textile certifications available.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">OEKO-TEX Standards</h2>
          
          <p className="mb-6 text-gray-200">
            OEKO-TEX offers several certification standards focused on textile safety and sustainability. The most well-known, OEKO-TEX Standard 100, certifies that textile products are free from harmful substances that pose risks to human health. This certification tests for legally prohibited or regulated substances, chemicals known to be harmful, and parameters included as precautionary measures.
          </p>
          
          <p className="mb-6 text-gray-200">
            OEKO-TEX also offers MADE IN GREEN certification, which combines product safety testing with social and environmental responsibility criteria. This certification verifies that products are manufactured in facilities meeting socially responsible workplace conditions and environmentally friendly production methods.
          </p>
          
          <p className="mb-6 text-gray-200">
            The LEATHER STANDARD by OEKO-TEX applies similar principles to leather goods, ensuring that leather products are tested for harmful substances and produced in environmentally conscious facilities. This certification addresses the specific chemical processes involved in leather tanning and finishing.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Cradle to Cradle Certified</h2>
          
          <p className="mb-6 text-gray-200">
            Cradle to Cradle certification evaluates products based on five key categories: material health, material reutilization, renewable energy and carbon management, water stewardship, and social fairness. This holistic approach considers the entire lifecycle of products, from initial design through disposal or recycling.
          </p>
          
          <p className="mb-6 text-gray-200">
            Products are assessed on each category and awarded achievement levels: Basic, Bronze, Silver, Gold, or Platinum. This tiered system allows consumers to understand the degree of certification achieved and compare products based on their sustainability priorities.
          </p>
          
          <p className="mb-6 text-gray-200">
            The certification encourages circular design principles, where products are conceived from the outset to be disassembled and their materials reused or recycled. This approach promotes long-term sustainability rather than merely minimizing harm during production.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Bluesign Certification</h2>
          
          <p className="mb-6 text-gray-200">
            Bluesign focuses on the environmental impact of textile production, examining the entire manufacturing process from fiber to finished product. This certification ensures that production methods minimize environmental impact while safeguarding consumer safety and worker health.
          </p>
          
          <p className="mb-6 text-gray-200">
            Bluesign's approach includes input stream management, where all chemicals, auxiliaries, and process accessories are evaluated for their environmental and health impacts. The certification also addresses water and energy consumption, air emissions, and occupational safety.
          </p>
          
          <p className="mb-6 text-gray-200">
            Unlike some certifications that focus on end-product testing, Bluesign emphasizes sustainable production processes, helping manufacturers implement systematic improvements in their operations. This proactive approach prevents environmental and health issues rather than simply detecting them after they occur.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">B-Corp Certification</h2>
          
          <p className="mb-6 text-gray-200">
            While not specific to fashion, B-Corp certification evaluates companies' overall social and environmental performance, accountability, and transparency. This certification assesses how companies balance profit with purpose, considering impacts on workers, customers, community, and environment.
          </p>
          
          <p className="mb-6 text-gray-200">
            B-Corp certification involves a comprehensive assessment called the B Impact Assessment, which evaluates governance, workers, community, environment, and customers. Companies must achieve a minimum score and meet legal requirements to become B-Corps.
          </p>
          
          <p className="mb-6 text-gray-200">
            For fashion brands, B-Corp certification demonstrates commitment to ethical practices across all business operations, not just product manufacturing. This certification appeals to consumers who want to support companies with comprehensive ethical commitments.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">How to Verify Certifications</h2>
          
          <p className="mb-6 text-gray-200">
            Consumers should verify certifications by checking official databases maintained by certification bodies. Many certifications offer online tools where consumers can enter certificate numbers to confirm validity and scope. This verification helps distinguish genuine certifications from fraudulent claims.
          </p>
          
          <p className="mb-6 text-gray-200">
            It's important to understand what each certification covers and its limitations. Some certifications focus primarily on environmental factors while others emphasize social criteria. Consumers should consider which aspects of ethical production matter most to them when evaluating certifications.
          </p>
          
          <p className="mb-6 text-gray-200">
            Certifications should be viewed as part of a broader evaluation of brands' ethical commitments rather than the sole factor in purchasing decisions. Consumers should also consider brands' transparency, advocacy efforts, and continuous improvement initiatives when assessing ethical alignment.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusion</h2>
          
          <p className="mb-6 text-gray-200">
            Ethical fashion certifications provide valuable tools for consumers seeking to align their purchasing decisions with their values. These certifications offer independent verification of brands' ethical claims and help distinguish genuinely responsible companies from those engaging in greenwashing.
          </p>
          
          <p className="mb-6 text-gray-200">
            Understanding the scope and focus of different certifications enables consumers to make informed decisions based on their specific priorities, whether environmental protection, worker welfare, or material safety. As the fashion industry continues evolving toward greater transparency and accountability, these certifications will remain essential tools for promoting ethical practices.
          </p>
          
          <p className="mb-6 text-gray-200">
            The future of ethical fashion lies in continued development of comprehensive certification standards that address the complex challenges facing the industry. As consumers become more educated about these certifications, demand for ethically certified products will drive positive change throughout the fashion supply chain.
          </p>
        </main>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((article: any) => (
              <Link 
                href={`/blog/${article.slug}`} 
                key={article.id}
                className="block bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 hover:bg-white/20 transition-all"
              >
                <h4 className="font-bold text-white mb-2 hover:text-yellow-400 transition-colors">
                  {article.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {article.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/blog" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
            Explore More Articles
          </Link>
        </div>
      </div>
    </div>
  );
}