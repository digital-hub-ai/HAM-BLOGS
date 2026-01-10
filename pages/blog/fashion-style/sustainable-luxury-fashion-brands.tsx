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
        title: 'Building a Capsule Wardrobe',
        slug: 'building-a-capsule-wardrobe',
        excerpt: 'How to curate a timeless and versatile wardrobe...'
      },
      {
        id: '3',
        title: 'The Rise of Circular Fashion: Renting and Reselling',
        slug: 'rise-circular-fashion-renting-reselling',
        excerpt: 'Exploring the growing trend of sustainable fashion consumption...'
      }
    ];
    
    // Randomly select 2 articles
    const shuffled = [...allArticles].sort(() => 0.5 - Math.random());
    setRelatedArticles(shuffled.slice(0, 2));
  }, [router]);

  const toggleBookmark = () => {
    const articleData = {
      id: Math.random().toString(36).substr(2, 9),
      title: 'Sustainable Luxury Fashion Brands',
      slug: router.pathname.split('/').pop(),
      date: '2026-01-07',
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
        <title>Sustainable Luxury Fashion Brands | Premium Blog Platform</title>
        <meta name="description" content="Exploring eco-conscious luxury fashion labels making a difference" />
        <link rel="canonical" href="https://www.premiumblogplatform.com/blog/sustainable-luxury-fashion-brands" />
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
            Sustainable Luxury Fashion Brands
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-400 text-sm mb-6">
            <span className="mr-4">January 7, 2026</span>
            <span>8 min read</span>
          </div>
        </header>

        <main className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            The luxury fashion industry is experiencing a revolutionary transformation as prestigious brands embrace sustainability without compromising on elegance, craftsmanship, or exclusivity. Today's conscious consumers demand transparency and environmental responsibility from their favorite luxury labels, prompting established houses and emerging designers to innovate with eco-friendly materials, ethical production methods, and circular business models.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Evolution of Sustainable Luxury</h2>
          
          <p className="mb-6 text-gray-200">
            The concept of sustainable luxury fashion has evolved from a niche market to a mainstream movement, driven by increasing awareness of the fashion industry's environmental impact. Luxury brands are recognizing that true luxury lies not just in the final product but in the values and processes behind its creation. This shift represents a fundamental change in how luxury is defined and valued by discerning consumers.
          </p>
          
          <p className="mb-6 text-gray-200">
            Early sustainable fashion efforts often sacrificed aesthetics for environmental considerations, resulting in products that looked or felt less luxurious. However, today's sustainable luxury brands have mastered the art of combining environmental responsibility with exceptional design, creating pieces that are both beautiful and ethically produced.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Innovative Materials Leading Change</h2>
          
          <p className="mb-6 text-gray-200">
            Pioneering luxury brands are investing heavily in research and development of innovative sustainable materials. Lab-grown leather alternatives, such as those created by Modern Meadow using biofabrication techniques, offer the quality and durability of traditional leather without animal farming or harmful tanning processes. These materials are increasingly indistinguishable from animal leather in appearance and performance.
          </p>
          
          <p className="mb-6 text-gray-200">
            Recycled and upcycled materials have become central to sustainable luxury design. Brands like Stella McCartney have mastered the art of creating luxurious pieces from recycled cashmere, regenerated nylon, and other innovative recycled materials. These materials maintain the premium feel and appearance that luxury consumers expect while significantly reducing environmental impact.
          </p>
          
          <p className="mb-6 text-gray-200">
            Organic and regenerative farming practices are providing sustainable alternatives to conventional materials. Brands are sourcing organic cotton, hemp, and linen from farms that prioritize soil health, biodiversity, and carbon sequestration. These materials often possess superior quality and longevity compared to conventionally produced alternatives.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Leading Sustainable Luxury Brands</h2>
          
          <p className="mb-6 text-gray-200">
            Stella McCartney continues to lead the sustainable luxury movement with her eponymous brand, which has never used leather, fur, or other animal products. The brand consistently innovates with new sustainable materials while maintaining high fashion standards. Their commitment to sustainability extends to packaging, retail spaces, and supply chain transparency.
          </p>
          
          <p className="mb-6 text-gray-200">
            Gabriela Hearst has built a reputation for combining traditional craftsmanship with sustainable practices. The brand uses deadstock fabrics, implements carbon-neutral shipping, and supports artisan communities worldwide. Their designs blend timeless elegance with contemporary sustainability.
          </p>
          
          <p className="mb-6 text-gray-200">
            Reformation has successfully positioned itself as a luxury brand with sustainability at its core. Their approach combines vintage-inspired silhouettes with eco-friendly materials and transparent reporting on environmental impact. The brand's RefScale provides customers with detailed information about the environmental impact of each garment.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Production and Supply Chain Innovation</h2>
          
          <p className="mb-6 text-gray-200">
            Sustainable luxury brands are revolutionizing production processes to minimize environmental impact while maintaining quality. Waterless dyeing technologies, renewable energy use in manufacturing, and closed-loop water systems are becoming standard practices among forward-thinking brands.
          </p>
          
          <p className="mb-6 text-gray-200">
            Supply chain transparency has become a competitive advantage, with brands using blockchain technology to provide customers with detailed information about material origins, manufacturing locations, and labor conditions. This transparency builds trust and allows consumers to make informed decisions aligned with their values.
          </p>
          
          <p className="mb-6 text-gray-200">
            Local production and regional sourcing are reducing transportation emissions while supporting local economies. Many sustainable luxury brands have adopted this approach, creating pieces that reflect their regional heritage and craftsmanship traditions.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Circular Fashion Models</h2>
          
          <p className="mb-6 text-gray-200">
            Circular fashion models are gaining traction among luxury brands, with initiatives such as garment take-back programs, repair services, and resale platforms. These models extend the lifecycle of luxury pieces while maintaining their value and desirability.
          </p>
          
          <p className="mb-6 text-gray-200">
            Rental and subscription services are becoming increasingly sophisticated, with luxury brands offering high-end pieces for special occasions or seasonal wear. These services democratize access to luxury fashion while reducing overall consumption and environmental impact.
          </p>
          
          <p className="mb-6 text-gray-200">
            Customization and personalization services are creating emotional connections between consumers and garments, increasing the likelihood that pieces will be treasured and maintained for longer periods. This approach aligns with the luxury principle of creating pieces with lasting value.
          </p>

          <blockquote className="border-l-4 border-yellow-500 pl-6 py-2 my-8 text-gray-200 italic">
            Sustainable luxury fashion represents the future of the industry, where environmental consciousness and aesthetic excellence converge to create pieces that honor both the wearer and the planet.
          </blockquote>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Consumer Considerations</h2>
          
          <p className="mb-6 text-gray-200">
            When selecting sustainable luxury fashion, consumers should consider factors such as material sourcing, production methods, labor conditions, and brand transparency. Certifications like GOTS (Global Organic Textile Standard) and Fair Trade can provide guidance, though the most innovative sustainable materials may not yet have established certifications.
          </p>
          
          <p className="mb-6 text-gray-200">
            Investment value remains important in sustainable luxury fashion, with well-made, timeless pieces offering better long-term value than fast fashion alternatives. Quality construction and classic design ensure that sustainable luxury pieces remain relevant and wearable for years.
          </p>
          
          <p className="mb-6 text-gray-200">
            The total cost of ownership for sustainable luxury pieces often justifies higher upfront prices when considering longevity, versatility, and environmental impact. These factors contribute to a more responsible and satisfying fashion experience.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Future Trends and Innovations</h2>
          
          <p className="mb-6 text-gray-200">
            The future of sustainable luxury fashion promises even more innovative materials, including bioengineered textiles that can self-repair or adapt to environmental conditions. These materials will maintain the luxury aesthetic while offering unprecedented functionality and sustainability.
          </p>
          
          <p className="mb-6 text-gray-200">
            Digital fashion and virtual clothing experiences are emerging as sustainable alternatives that allow for creative expression without physical production. These innovations will complement physical sustainable luxury pieces while reducing overall environmental impact.
          </p>
          
          <p className="mb-6 text-gray-200">
            Collaboration between fashion brands, technology companies, and environmental scientists will accelerate the development of new sustainable materials and processes, making sustainable luxury fashion more accessible and diverse.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusion</h2>
          
          <p className="mb-6 text-gray-200">
            Sustainable luxury fashion represents a mature and sophisticated approach to conscious consumption, proving that environmental responsibility and aesthetic excellence are not mutually exclusive. As consumer awareness grows and technology advances, sustainable luxury brands will continue to lead the industry toward a more responsible and beautiful future.
          </p>
          
          <p className="mb-6 text-gray-200">
            The brands pioneering sustainable luxury today are not just creating beautiful garments; they are reshaping the industry's values and setting new standards for what constitutes true luxury. This transformation benefits consumers, the environment, and the long-term viability of the fashion industry.
          </p>
          
          <p className="mb-6 text-gray-200">
            As sustainable luxury fashion continues to evolve, consumers have more opportunities than ever to align their fashion choices with their values, creating wardrobes that reflect both personal style and environmental consciousness.
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