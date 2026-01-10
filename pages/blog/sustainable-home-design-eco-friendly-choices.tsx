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
        title: 'Maximizing Small Spaces: Apartment Living Tips',
        slug: 'maximizing-small-spaces-apartment-living-tips',
        excerpt: 'Creative solutions for making the most of compact living spaces...'
      },
      {
        id: '2',
        title: 'Minimalist Interior Design Principles',
        slug: 'minimalist-interior-design-principles',
        excerpt: 'Embracing simplicity and functionality in home design...'
      },
      {
        id: '3',
        title: 'Indoor Plants and Air Quality Benefits',
        slug: 'indoor-plants-air-quality-benefits',
        excerpt: 'Choosing the right plants to improve your home environment...'
      }
    ];
    
    // Randomly select 2 articles
    const shuffled = [...allArticles].sort(() => 0.5 - Math.random());
    setRelatedArticles(shuffled.slice(0, 2));
  }, [router]);

  const toggleBookmark = () => {
    const articleData = {
      id: Math.random().toString(36).substr(2, 9),
      title: 'Sustainable Home Design: Eco-Friendly Choices',
      slug: router.pathname.split('/').pop(),
      date: '2026-01-07',
      category: 'Home & Interior'
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
        <title>Sustainable Home Design: Eco-Friendly Choices | Premium Blog Platform</title>
        <meta name="description" content="How to create an environmentally conscious living space" />
        <link rel="canonical" href="https://www.premiumblogplatform.com/blog/sustainable-home-design-eco-friendly-choices" />
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
              Home & Interior
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
            Sustainable Home Design: Eco-Friendly Choices
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-400 text-sm mb-6">
            <span className="mr-4">January 7, 2026</span>
            <span>8 min read</span>
          </div>
        </header>

        <main className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Sustainable home design represents a fundamental shift toward creating living spaces that minimize environmental impact while maximizing comfort and functionality. This approach considers the entire lifecycle of materials, energy consumption patterns, and the long-term effects of design choices on both occupants and the planet. As environmental awareness grows and climate change concerns intensify, homeowners and designers are increasingly seeking ways to integrate eco-friendly practices into their living spaces. Sustainable design isn't just about using recycled materials; it encompasses energy efficiency, water conservation, indoor air quality, and the selection of renewable resources that will stand the test of time.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Sustainable Materials and Finishes</h2>
          
          <p className="mb-6 text-gray-200">
            Choosing sustainable materials begins with understanding the environmental impact of extraction, manufacturing, transportation, and disposal of various options. Reclaimed wood preserves forests while adding character and history to spaces. Bamboo flooring offers rapid renewability with comparable durability to traditional hardwoods. Cork provides excellent insulation and sound dampening while regenerating without replanting.
          </p>
          
          <p className="mb-6 text-gray-200">
            Low-VOC (volatile organic compound) paints and finishes improve indoor air quality while reducing harmful emissions. Natural clay plasters regulate humidity and provide thermal mass without synthetic additives. Recycled glass tiles and countertops give new life to waste materials while creating stunning visual effects. Stone and brick, when sourced locally, minimize transportation emissions while providing lasting durability.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Energy Efficiency and Conservation</h2>
          
          <p className="mb-6 text-gray-200">
            Energy-efficient design begins with proper insulation and air sealing to minimize heating and cooling demands. High-performance windows with triple glazing and insulated frames significantly reduce energy loss while improving comfort. LED lighting consumes up to 75% less energy than traditional incandescent bulbs while lasting much longer.
          </p>
          
          <p className="mb-6 text-gray-200">
            Smart thermostats optimize heating and cooling schedules based on occupancy patterns and weather forecasts. Programmable systems can reduce energy consumption by 10-15% compared to conventional thermostats. Energy-efficient appliances certified by ENERGY STAR standards consume less electricity and water while providing equivalent performance to conventional models.
          </p>
          
          <p className="mb-6 text-gray-200">
            Passive solar design principles orient buildings to maximize winter heat gain and minimize summer overheating. Properly sized overhangs, thermal mass, and strategic window placement work together to reduce mechanical system loads. Natural ventilation strategies promote air circulation and reduce reliance on air conditioning systems.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Water Conservation Strategies</h2>
          
          <p className="mb-6 text-gray-200">
            Water conservation in home design encompasses both fixture efficiency and rainwater management. Low-flow showerheads and faucets reduce consumption without sacrificing performance. Dual-flush toilets offer options for liquid and solid waste, significantly reducing water usage per flush. Greywater systems divert water from sinks and showers to irrigation systems.
          </p>
          
          <p className="mb-6 text-gray-200">
            Rain gardens and permeable paving materials manage stormwater runoff while reducing strain on municipal systems. Rain barrels collect precipitation for irrigation use. Native plant landscaping requires minimal supplemental watering once established, reducing overall water consumption while supporting local ecosystems.
          </p>
          
          <p className="mb-6 text-gray-200">
            Smart irrigation controllers use weather data and soil moisture sensors to optimize watering schedules. Drip irrigation systems deliver water directly to plant roots, minimizing evaporation and runoff. These technologies can reduce landscape water use by 20-50% compared to conventional sprinkler systems.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Indoor Air Quality and Health</h2>
          
          <p className="mb-6 text-gray-200">
            Indoor air quality significantly impacts occupant health and well-being. Proper ventilation systems remove pollutants while introducing fresh air. Heat recovery ventilators (HRVs) or energy recovery ventilators (ERVs) maintain energy efficiency while ensuring adequate air exchange.
          </p>
          
          <p className="mb-6 text-gray-200">
            Natural materials emit fewer volatile organic compounds than synthetic alternatives. Hardwood floors avoid the ongoing emissions that carpeting can produce. Natural fiber rugs and upholstery provide comfort without synthetic chemical treatments. Houseplants naturally filter air while adding aesthetic value and improving psychological well-being.
          </p>
          
          <p className="mb-6 text-gray-200">
            Non-toxic cleaning products maintain the environmental benefits of sustainable design. Steam cleaning and microfiber cloths can achieve excellent results without harsh chemicals. Proper maintenance of HVAC systems ensures efficient operation and prevents mold growth that can compromise air quality.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Durability and Timeless Design</h2>
          
          <p className="mb-6 text-gray-200">
            Sustainable design emphasizes durability to reduce replacement frequency and associated environmental impacts. Quality craftsmanship and materials ensure longevity. Classic design principles create timelessness that transcends trends, preventing premature renovation due to dated aesthetics.
          </p>
          
          <p className="mb-6 text-gray-200">
            Modular and adaptable designs accommodate changing needs without major renovations. Built-in storage solutions maximize space efficiency while maintaining clean aesthetics. Flexible room layouts using moveable partitions or furniture arrangements can adapt to evolving lifestyle requirements.
          </p>
          
          <p className="mb-6 text-gray-200">
            Selecting durable finishes and fixtures reduces maintenance requirements and replacement costs. Porcelain tiles resist stains and scratching while requiring minimal upkeep. Stainless steel appliances offer longevity and recyclability. These choices support both environmental goals and economic practicality.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Renewable Energy Integration</h2>
          
          <p className="mb-6 text-gray-200">
            Solar panels represent the most common renewable energy integration for residential buildings. Modern photovoltaic systems have become increasingly affordable while providing decades of clean energy production. Solar hot water systems specifically address domestic hot water needs with high efficiency.
          </p>
          
          <p className="mb-6 text-gray-200">
            Geothermal heat pumps utilize stable ground temperatures for efficient heating and cooling. These systems can achieve 30-60% energy savings compared to conventional HVAC systems. Wind turbines may be appropriate for rural properties with suitable wind resources.
          </p>
          
          <p className="mb-6 text-gray-200">
            Battery storage systems paired with renewable generation allow homeowners to store excess energy for use during peak demand or grid outages. These systems increase energy independence while supporting grid stability. Smart home systems can optimize energy use based on renewable generation patterns.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Economic Considerations</h2>
          
          <p className="mb-6 text-gray-200">
            Initial investment in sustainable features often pays long-term dividends through reduced operating costs. Energy-efficient homes command premium prices in real estate markets. Lower utility bills provide ongoing savings that offset initial investments over time.
          </p>
          
          <p className="mb-6 text-gray-200">
            Tax incentives and rebates for renewable energy systems and energy-efficient upgrades can significantly reduce net costs. Green building certifications may qualify homeowners for reduced insurance premiums or favorable financing terms. Maintenance costs for sustainable systems are often lower due to reduced wear and longer lifespans.
          </p>
          
          <p className="mb-6 text-gray-200">
            The value proposition of sustainable design extends beyond financial metrics to include improved health outcomes, enhanced comfort, and contribution to environmental stewardship. These qualitative benefits increasingly influence homeowner decision-making and property desirability.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusion</h2>
          
          <p className="mb-6 text-gray-200">
            Sustainable home design represents an integrated approach that considers environmental, economic, and social factors throughout the design process. Success requires balancing immediate needs with long-term consequences, considering both operational efficiency and embodied energy in materials. As technology advances and sustainable options become more accessible, homeowners have unprecedented opportunities to create beautiful, functional spaces that contribute positively to environmental health.
          </p>
          
          <p className="mb-6 text-gray-200">
            The principles of sustainable design continue evolving as new materials, technologies, and understanding of environmental impacts emerge. The commitment to sustainability in home design reflects broader societal recognition of the interconnectedness between human habitation and planetary health. By implementing these strategies, homeowners can create spaces that serve their needs while contributing to a more sustainable future.
          </p>
          
          <p className="mb-6 text-gray-200">
            The future of home design inevitably includes sustainable practices as environmental challenges intensify and resource scarcity becomes more pronounced. Early adoption of sustainable design principles positions homeowners advantageously for regulatory changes and market shifts while providing immediate benefits in comfort, health, and operating efficiency.
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