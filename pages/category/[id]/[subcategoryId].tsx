import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SEO from "../../../components/Seo/SEO";

// Map category IDs to their respective blog paths
const getCategoryPath = (categoryId: string): string => {
  const categoryPaths: Record<string, string> = {
    fashion: 'blog/fashion-style',
    ai: 'blog',
    quantum: 'blog',
    blockchain: 'blog',
    luxury: 'blog',
    cloud: 'blog',
    cybersecurity: 'blog',
    iot: 'blog',
    adventure: 'blog',
    culture: 'blog',
    destinations: 'blog',
    culinary: 'blog',
    beach: 'blog',
    'city-breaks': 'blog',
    home: 'blog',
    wellness: 'blog',
    mindfulness: 'blog',
    productivity: 'blog'
  };
  
  return categoryPaths[categoryId] || 'blog';
};

export default function SubcategoryPage() {
  const router = useRouter();
  const { id, subcategoryId } = router.query;
  const [loadedArticles, setLoadedArticles] = useState<number[]>([]);

  // Simulated subcategory data
  const subcategoryData: Record<string, any> = {
    ai: {
      name: "Artificial Intelligence",
      description: "Exploring the latest developments in AI, machine learning, and neural networks",
      articles: [
        { id: "1", slug: "the-future-of-generative-ai-in-creative-industries", title: "The Future of Generative AI in Creative Industries", date: "2026-01-08", readTime: "8 min read", excerpt: "How generative AI is transforming creative workflows across industries..." },
        { id: "2", slug: "understanding-transformer-architecture", title: "Understanding Transformer Architecture", date: "2026-01-07", readTime: "12 min read", excerpt: "Deep dive into the transformer architecture that powers modern LLMs..." },
        { id: "3", slug: "ethical-considerations-in-ai-development", title: "Ethical Considerations in AI Development", date: "2026-01-06", readTime: "10 min read", excerpt: "Examining the moral implications of AI deployment in society..." },
        { id: "4", slug: "ai-in-healthcare-revolutionizing-diagnostics", title: "AI in Healthcare: Revolutionizing Diagnostics", date: "2026-01-05", readTime: "9 min read", excerpt: "How AI is transforming medical diagnosis and patient care..." },
        { id: "5", slug: "the-rise-of-multimodal-ai-systems", title: "The Rise of Multimodal AI Systems", date: "2026-01-04", readTime: "11 min read", excerpt: "Exploring AI systems that can process multiple types of data simultaneously..." }
      ]
    },
    quantum: {
      name: "Quantum Computing",
      description: "Delving into quantum mechanics, qubits, and the future of computation",
      articles: [
        { id: "1", slug: "quantum-supremacy-achievements-and-challenges", title: "Quantum Supremacy: Achievements and Challenges", date: "2026-01-08", readTime: "10 min read", excerpt: "Reviewing the milestones achieved in quantum supremacy and remaining challenges..." },
        { id: "2", slug: "quantum-algorithms-explained-deep-dive", title: "Quantum Algorithms Explained", date: "2026-01-07", readTime: "9 min read", excerpt: "Understanding how quantum algorithms differ from classical counterparts..." },
        { id: "3", slug: "building-stable-qubits-engineering-challenges", title: "Building Stable Qubits", date: "2026-01-06", readTime: "12 min read", excerpt: "The engineering challenges in creating reliable quantum bits..." },
        { id: "4", slug: "quantum-error-correction-methods", title: "Quantum Error Correction Methods", date: "2026-01-05", readTime: "11 min read", excerpt: "Advanced techniques for correcting errors in quantum computing systems..." },
        { id: "5", slug: "quantum-computing-applications-finance", title: "Quantum Computing Applications in Finance", date: "2026-01-04", readTime: "10 min read", excerpt: "How quantum computing is transforming financial modeling and trading..." },
        { id: "6", slug: "quantum-machine-learning-potential", title: "Quantum Machine Learning: The Potential Revolution", date: "2026-01-03", readTime: "12 min read", excerpt: "Exploring the intersection of quantum computing and machine learning..." },
        { id: "7", slug: "quantum-cryptography-security", title: "Quantum Cryptography and Security", date: "2026-01-02", readTime: "10 min read", excerpt: "Understanding quantum-safe encryption and quantum key distribution..." },
        { id: "8", slug: "quantum-simulation-chemistry", title: "Quantum Simulation in Chemistry", date: "2026-01-01", readTime: "11 min read", excerpt: "How quantum computers are revolutionizing molecular modeling..." }
      ]
    },
    blockchain: {
      name: "Blockchain",
      description: "Exploring distributed ledgers, cryptocurrencies, and decentralized systems",
      articles: [
        { id: "1", slug: "beyond-bitcoin-emerging-blockchain-use-cases", title: "Beyond Bitcoin: Emerging Blockchain Use Cases", date: "2026-01-08", readTime: "8 min read", excerpt: "How blockchain technology is being applied beyond cryptocurrency..." },
        { id: "2", slug: "smart-contracts-security-best-practices", title: "Smart Contracts: Security Best Practices", date: "2026-01-07", readTime: "10 min read", excerpt: "Essential security considerations for developing smart contracts..." },
        { id: "3", slug: "decentralized-finance-defi-trends-analysis", title: "Decentralized Finance (DeFi) Trends", date: "2026-01-06", readTime: "9 min read", excerpt: "Analyzing the latest developments in the DeFi ecosystem..." },
        { id: "4", slug: "blockchain-scalability-solutions", title: "Blockchain Scalability Solutions", date: "2026-01-05", readTime: "10 min read", excerpt: "Examining Layer 2 solutions and consensus mechanisms for scaling blockchain networks..." },
        { id: "5", slug: "non-fungible-tokens-market-evolution", title: "Non-Fungible Tokens: Market Evolution", date: "2026-01-04", readTime: "9 min read", excerpt: "Understanding the growth and impact of NFTs across various industries..." },
        { id: "6", slug: "enterprise-blockchain-adoption", title: "Enterprise Blockchain Adoption", date: "2026-01-03", readTime: "11 min read", excerpt: "How businesses are integrating blockchain technology into their operations..." },
        { id: "7", slug: "regulatory-landscape-cryptocurrency", title: "Regulatory Landscape for Cryptocurrency", date: "2026-01-02", readTime: "10 min read", excerpt: "Global perspectives on cryptocurrency regulation and compliance..." },
        { id: "8", slug: "interoperability-cross-chain-protocols", title: "Interoperability: Cross-Chain Protocols", date: "2026-01-01", readTime: "12 min read", excerpt: "Connecting different blockchain networks for seamless asset transfer..." }
      ]
    },
    luxury: {
      name: "Luxury Travel",
      description: "Premium destinations, exclusive experiences, and high-end travel tips",
      articles: [
        { id: "1", slug: "top-luxury-resorts-maldives-2026-guide", title: "Top Luxury Resorts in the Maldives 2026", date: "2026-01-08", readTime: "7 min read", excerpt: "Curated list of the most exclusive resorts in paradise islands..." },
        { id: "2", slug: "private-jet-charter-guide-ultimate", title: "Private Jet Charter Guide", date: "2026-01-07", readTime: "8 min read", excerpt: "Everything you need to know about chartering private jets..." },
        { id: "3", slug: "michelin-star-dining-around-world", title: "Michelin Star Dining Around the World", date: "2026-01-06", readTime: "9 min read", excerpt: "Guide to the world's finest dining experiences..." },
        { id: "4", slug: "safari-lodges-africa-most-exclusive-experiences", title: "Safari Lodges: Africa's Most Exclusive Experiences", date: "2026-01-05", readTime: "10 min read", excerpt: "Discover the most luxurious safari lodges offering unparalleled wildlife experiences..." },
        { id: "5", slug: "swiss-alps-luxury-ski-resorts-comparison", title: "Swiss Alps: Luxury Ski Resorts Comparison", date: "2026-01-04", readTime: "8 min read", excerpt: "A comprehensive guide to the most prestigious ski resorts in the Swiss Alps..." },
        { id: "6", slug: "private-villa-rentals-caribbean-paradise", title: "Private Villa Rentals: Caribbean Paradise", date: "2026-01-03", readTime: "9 min read", excerpt: "Exclusive private villas offering ultimate luxury and privacy in the Caribbean..." },
        { id: "7", slug: "wine-country-getaways-napa-valley-luxury", title: "Wine Country Getaways: Napa Valley Luxury", date: "2026-01-02", readTime: "7 min read", excerpt: "Indulgent wine country experiences in Napa Valley's most prestigious estates..." },
        { id: "8", slug: "yacht-charters-mediterranean-2026-guide", title: "Yacht Charters: Mediterranean 2026 Guide", date: "2026-01-01", readTime: "11 min read", excerpt: "Ultimate luxury yacht charters exploring the Mediterranean's most stunning coastlines..." }
      ],
    },
    cloud: {
      name: "Cloud Computing",
      description: "Exploring cloud infrastructure, services, and deployment strategies",
      articles: [
        { id: "1", slug: "aws-azure-google-cloud-platform-comparison", title: "AWS vs Azure vs Google Cloud Platform: A Comprehensive Comparison", date: "2026-01-08", readTime: "12 min read", excerpt: "Detailed analysis of the three major cloud platforms and their offerings..." },
        { id: "2", slug: "serverless-architecture-benefits-challenges", title: "Serverless Architecture: Benefits and Challenges", date: "2026-01-07", readTime: "10 min read", excerpt: "Understanding the advantages and limitations of serverless computing..." },
        { id: "3", slug: "containerization-docker-kubernetes-deployment", title: "Containerization with Docker and Kubernetes Deployment", date: "2026-01-06", readTime: "11 min read", excerpt: "Best practices for containerizing applications and orchestrating with Kubernetes..." },
        { id: "4", slug: "multi-cloud-strategy-enterprise-adoption", title: "Multi-Cloud Strategy for Enterprise Adoption", date: "2026-01-05", readTime: "10 min read", excerpt: "How enterprises are leveraging multiple cloud providers for resilience and flexibility..." },
        { id: "5", slug: "edge-computing-cloud-integration", title: "Edge Computing and Cloud Integration", date: "2026-01-04", readTime: "9 min read", excerpt: "Bridging edge computing with cloud infrastructure for optimal performance..." },
        { id: "6", slug: "cloud-security-best-practices", title: "Cloud Security Best Practices", date: "2026-01-03", readTime: "11 min read", excerpt: "Essential security considerations for cloud deployments..." },
        { id: "7", slug: "cloud-cost-optimization-strategies", title: "Cloud Cost Optimization Strategies", date: "2026-01-02", readTime: "10 min read", excerpt: "Techniques to optimize cloud spending while maintaining performance..." },
        { id: "8", slug: "cloud-native-application-development", title: "Cloud-Native Application Development", date: "2026-01-01", readTime: "12 min read", excerpt: "Building applications specifically designed for cloud environments..." }
      ]
    },
    fashion: {
      name: "Fashion & Style",
      description: "Trend reports, designer profiles, and style guides",
      articles: [
        { id: "1", slug: "spring-2026-fashion-week-highlights", title: "Spring 2026 Fashion Week Highlights", date: "2026-01-08", readTime: "6 min read", excerpt: "Key trends from the major fashion weeks around the globe..." },
        { id: "2", slug: "sustainable-luxury-fashion-brands", title: "Sustainable Luxury Fashion Brands", date: "2026-01-07", readTime: "8 min read", excerpt: "Exploring eco-conscious luxury fashion labels making a difference..." },
        { id: "3", slug: "building-a-capsule-wardrobe", title: "Building a Capsule Wardrobe", date: "2026-01-06", readTime: "7 min read", excerpt: "How to curate a timeless and versatile wardrobe..." },
        { id: "4", slug: "minimalist-fashion-less-is-more-philosophy", title: "Minimalist Fashion: Less is More Philosophy", date: "2026-01-05", readTime: "8 min read", excerpt: "Embracing simplicity and quality over quantity in fashion choices..." },
        { id: "5", slug: "street-style-evolution-sidewalks-runways", title: "Street Style Evolution: From Sidewalks to Runways", date: "2026-01-04", readTime: "7 min read", excerpt: "How urban fashion influences high-end design and runway trends..." },
        { id: "6", slug: "psychology-of-color-in-fashion", title: "The Psychology of Color in Fashion", date: "2026-01-03", readTime: "6 min read", excerpt: "How colors influence mood, perception, and personal expression..." },
        { id: "7", slug: "rise-circular-fashion-renting-reselling", title: "The Rise of Circular Fashion: Renting and Reselling", date: "2026-01-02", readTime: "8 min read", excerpt: "Exploring the growing trend of sustainable fashion consumption..." },
        { id: "8", slug: "ethical-fashion-certifications-what-to-look-for", title: "Ethical Fashion Certifications: What to Look For", date: "2026-01-01", readTime: "7 min read", excerpt: "Understanding certifications that guarantee ethical production standards..." }
      ],
    },
    cybersecurity: {
      name: "Cybersecurity",
      description: "Protecting systems, networks, and data from digital attacks and threats",
      articles: [
        { id: "1", slug: "zero-trust-architecture-implementation-guide", title: "Zero Trust Architecture: Implementation Guide", date: "2026-01-08", readTime: "12 min read", excerpt: "Comprehensive approach to implementing zero trust security models..." },
        { id: "2", slug: "artificial-intelligence-in-cybersecurity-defense", title: "Artificial Intelligence in Cybersecurity Defense", date: "2026-01-07", readTime: "10 min read", excerpt: "How AI is transforming threat detection and response capabilities..." },
        { id: "3", slug: "ransomware-protection-best-practices", title: "Ransomware Protection: Best Practices", date: "2026-01-06", readTime: "11 min read", excerpt: "Strategies to prevent, detect, and recover from ransomware attacks..." },
        { id: "4", slug: "identity-access-management-enterprise-strategies", title: "Identity and Access Management: Enterprise Strategies", date: "2026-01-05", readTime: "10 min read", excerpt: "Modern approaches to managing user identities and access controls..." },
        { id: "5", slug: "endpoint-security-modern-threats", title: "Endpoint Security: Modern Threats", date: "2026-01-04", readTime: "9 min read", excerpt: "Protecting endpoints in the era of remote work and mobile devices..." },
        { id: "6", slug: "network-security-firewall-technologies", title: "Network Security: Firewall Technologies", date: "2026-01-03", readTime: "11 min read", excerpt: "Evolution of firewall technologies and next-generation security..." },
        { id: "7", slug: "data-privacy-regulations-compliance", title: "Data Privacy Regulations and Compliance", date: "2026-01-02", readTime: "10 min read", excerpt: "Navigating GDPR, CCPA, and other privacy regulations..." },
        { id: "8", slug: "incident-response-playbooks-automation", title: "Incident Response Playbooks and Automation", date: "2026-01-01", readTime: "12 min read", excerpt: "Building effective incident response capabilities with automation..." }
      ]
    },
    iot: {
      name: "Internet of Things",
      description: "Connecting physical devices to the internet for smart automation and data collection",
      articles: [
        { id: "1", slug: "iot-security-standards-and-protocols", title: "IoT Security Standards and Protocols", date: "2026-01-08", readTime: "11 min read", excerpt: "Essential security standards and protocols for protecting IoT ecosystems..." },
        { id: "2", slug: "edge-computing-iot-device-processing", title: "Edge Computing and IoT Device Processing", date: "2026-01-07", readTime: "10 min read", excerpt: "Processing data closer to the source for improved IoT performance..." },
        { id: "3", slug: "smart-home-automation-systems-integration", title: "Smart Home Automation Systems Integration", date: "2026-01-06", readTime: "9 min read", excerpt: "Integrating IoT devices for comprehensive home automation solutions..." },
        { id: "4", slug: "industrial-iot-iiot-sensors-monitoring", title: "Industrial IoT (IIoT) Sensors and Monitoring", date: "2026-01-05", readTime: "12 min read", excerpt: "Transforming manufacturing with IIoT sensors and monitoring systems..." },
        { id: "5", slug: "iot-data-analytics-big-data-processing", title: "IoT Data Analytics and Big Data Processing", date: "2026-01-04", readTime: "10 min read", excerpt: "Processing and analyzing massive volumes of IoT-generated data..." },
        { id: "6", slug: "wireless-protocols-bluetooth-wifi-zigbee", title: "Wireless Protocols: Bluetooth, WiFi, Zigbee", date: "2026-01-03", readTime: "9 min read", excerpt: "Comparing wireless protocols for different IoT applications..." },
        { id: "7", slug: "iot-device-management-scaling-solutions", title: "IoT Device Management and Scaling Solutions", date: "2026-01-02", readTime: "11 min read", excerpt: "Managing and scaling IoT deployments across multiple devices..." },
        { id: "8", slug: "ai-machine-learning-iot-applications", title: "AI and Machine Learning in IoT Applications", date: "2026-01-01", readTime: "10 min read", excerpt: "Implementing AI and ML algorithms in IoT systems for smarter decisions..." }
      ]
    },
    adventure: {
      name: "Adventure",
      description: "Thrilling outdoor experiences, extreme sports, and exotic destinations for adrenaline seekers",
      articles: [
        { id: "1", slug: "best-extreme-sports-destinations-2026", title: "Best Extreme Sports Destinations 2026", date: "2026-01-08", readTime: "8 min read", excerpt: "Top locations worldwide for skydiving, bungee jumping, and other adrenaline-pumping activities..." },
        { id: "2", slug: "hiking-trails-most-breathtaking-views", title: "Hiking Trails with the Most Breathtaking Views", date: "2026-01-07", readTime: "9 min read", excerpt: "Unforgettable trekking experiences through the world's most spectacular landscapes..." },
        { id: "3", slug: "mountain-climbing-essential-gear-guide", title: "Mountain Climbing Essential Gear Guide", date: "2026-01-06", readTime: "10 min read", excerpt: "Complete equipment checklist for safe and successful mountain expeditions..." },
        { id: "4", slug: "scuba-diving-most-incredible-underwater-sites", title: "Scuba Diving: Most Incredible Underwater Sites", date: "2026-01-05", readTime: "8 min read", excerpt: "Discover the world's most spectacular dive sites teeming with marine life..." },
        { id: "5", slug: "safari-adventures-beyond-african-territory", title: "Safari Adventures Beyond African Territory", date: "2026-01-04", readTime: "9 min read", excerpt: "Wildlife adventures in Asia, South America, and other exotic locations..." },
        { id: "6", slug: "backpacking-through-remote-destinations", title: "Backpacking Through Remote Destinations", date: "2026-01-03", readTime: "11 min read", excerpt: "Guide to exploring the world's most isolated and untouched places..." },
        { id: "7", slug: "adventure-travel-safety-tips-experts", title: "Adventure Travel Safety Tips from Experts", date: "2026-01-02", readTime: "10 min read", excerpt: "Essential safety measures for extreme adventures and wilderness exploration..." },
        { id: "8", slug: "multi-sport-adventure-races-around-world", title: "Multi-Sport Adventure Races Around the World", date: "2026-01-01", readTime: "9 min read", excerpt: "Challenging competitions combining multiple outdoor disciplines in stunning locations..." }
      ],
    },
    culture: {
      name: "Culture & Heritage",
      description: "Exploring traditions, customs, and historical treasures from around the world",
      articles: [
        { id: "1", slug: "ancient-temples-hidden-archaeological-wonders", title: "Ancient Temples: Hidden Archaeological Wonders", date: "2026-01-08", readTime: "10 min read", excerpt: "Discovering lesser-known temples and archaeological sites that hold fascinating historical secrets..." },
        { id: "2", slug: "traditional-festivals-around-world-cultural-celebrations", title: "Traditional Festivals Around the World: Cultural Celebrations", date: "2026-01-07", readTime: "9 min read", excerpt: "Immersing in vibrant festivals that showcase unique cultural traditions and customs..." },
        { id: "3", slug: "world-heritage-sites-preserving-human-history", title: "World Heritage Sites: Preserving Human History", date: "2026-01-06", readTime: "11 min read", excerpt: "Exploring UNESCO World Heritage sites and their significance in preserving our shared history..." },
        { id: "4", slug: "ancient-trade-routes-cultural-exchange-pathways", title: "Ancient Trade Routes: Cultural Exchange Pathways", date: "2026-01-05", readTime: "10 min read", excerpt: "Following historic trade routes that facilitated cultural exchange between civilizations..." },
        { id: "5", slug: "traditional-crafts-endangered-art-forms", title: "Traditional Crafts: Endangered Art Forms", date: "2026-01-04", readTime: "8 min read", excerpt: "Preserving ancient craftsmanship techniques passed down through generations..." },
        { id: "6", slug: "oral-traditions-stories-passed-down-through-generations", title: "Oral Traditions: Stories Passed Down Through Generations", date: "2026-01-03", readTime: "9 min read", excerpt: "The importance of storytelling and oral histories in preserving cultural identity..." },
        { id: "7", slug: "cultural-etiquette-travel-guidelines-respectful-tourism", title: "Cultural Etiquette: Travel Guidelines for Respectful Tourism", date: "2026-01-02", readTime: "8 min read", excerpt: "Understanding cultural norms and practicing respectful tourism in diverse societies..." },
        { id: "8", slug: "intangible-heritage-unesco-list-cultural-practices", title: "Intangible Heritage: UNESCO List of Cultural Practices", date: "2026-01-01", readTime: "10 min read", excerpt: "Celebrating performing arts, rituals, and social practices that define cultures..." }
      ],
    },
    destinations: {
      name: "Destinations",
      description: "Exploring the world's most fascinating and diverse travel destinations",
      articles: [
        { id: "1", slug: "hidden-gems-off-the-beaten-path-destinations", title: "Hidden Gems: Off the Beaten Path Destinations", date: "2026-01-08", readTime: "8 min read", excerpt: "Discover extraordinary destinations that remain untouched by mass tourism, offering authentic experiences and pristine beauty..." },
        { id: "2", slug: "luxury-travel-destinations-2026-ultra-premium", title: "Luxury Travel Destinations 2026: Ultra Premium Experiences", date: "2026-01-07", readTime: "9 min read", excerpt: "Explore the most exclusive and luxurious destinations offering unparalleled experiences for discerning travelers in 2026..." },
        { id: "3", slug: "adventure-travel-destinations-2026-thrill-seekers", title: "Adventure Travel Destinations 2026: For Thrill Seekers", date: "2026-01-06", readTime: "8 min read", excerpt: "Discover the most exhilarating adventure destinations that will challenge your limits and provide unforgettable experiences in 2026..." },
        { id: "4", slug: "romantic-getaways-destinations-couples", title: "Romantic Getaways: Perfect Destinations for Couples", date: "2026-01-05", readTime: "8 min read", excerpt: "Discover the most romantic destinations around the world that will strengthen your bond and create unforgettable memories for couples..." },
        { id: "5", slug: "family-travel-destinations-kids-friendly", title: "Family Travel Destinations: Kid-Friendly Adventures", date: "2026-01-04", readTime: "8 min read", excerpt: "Explore the best destinations that offer fun, educational, and safe experiences for families traveling with children of all ages..." },
        { id: "6", slug: "budget-travel-destinations-affordable-options", title: "Budget Travel Destinations: Affordable Options Worldwide", date: "2026-01-03", readTime: "8 min read", excerpt: "Discover amazing destinations that offer incredible experiences without breaking the bank, proving that great travel doesn't have to cost a fortune..." },
        { id: "7", slug: "solo-travel-destinations-safe-solo", title: "Solo Travel Destinations: Safe and Welcoming Places", date: "2026-01-02", readTime: "8 min read", excerpt: "Discover the safest and most welcoming destinations for solo travelers, offering opportunities for personal growth and adventure..." },
        { id: "8", slug: "eco-tourism-destinations-sustainable-travel", title: "Eco-Tourism Destinations: Sustainable Travel Experiences", date: "2026-01-01", readTime: "8 min read", excerpt: "Explore destinations that prioritize environmental conservation and sustainable tourism practices while offering incredible natural experiences..." }
      ],
    },
    culinary: {
      name: "Culinary Tourism",
      description: "Exploring the world's food cultures, culinary traditions, and gastronomic experiences",
      articles: [
        { id: "1", slug: "culinary-journeys-around-world", title: "Culinary Journeys: Exploring Food Cultures Around the World", date: "2026-01-08", readTime: "8 min read", excerpt: "Embark on a global culinary adventure exploring diverse food cultures, traditions, and flavors from every corner of the world..." },
        { id: "2", slug: "street-food-adventures-global", title: "Street Food Adventures: Global Street Food Experiences", date: "2026-01-07", readTime: "8 min read", excerpt: "Discover the world's best street food scenes and authentic local flavors from bustling markets to roadside vendors..." },
        { id: "3", slug: "wine-regions-tourism-guide", title: "Wine Region Tourism: A Complete Guide to Viticultural Destinations", date: "2026-01-06", readTime: "8 min read", excerpt: "Explore the world's premier wine regions offering exceptional tasting experiences, vineyard tours, and culinary pairings..." },
        { id: "4", slug: "cooking-classes-cultural-immersion", title: "Cooking Classes: Cultural Immersion Through Culinary Education", date: "2026-01-05", readTime: "8 min read", excerpt: "Discover how cooking classes around the world offer deep cultural immersion and authentic culinary experiences..." },
        { id: "5", slug: "food-festivals-cultural-celebrations", title: "Food Festivals: Cultural Celebrations and Culinary Events", date: "2026-01-04", readTime: "8 min read", excerpt: "Explore the world's most exciting food festivals that celebrate culinary traditions and bring communities together..." },
        { id: "6", slug: "farm-to-table-experiences", title: "Farm-to-Table Experiences: Connecting with Agricultural Origins", date: "2026-01-03", readTime: "8 min read", excerpt: "Discover farm-to-table experiences that connect travelers with agricultural origins and sustainable food practices..." },
        { id: "7", slug: "food-markets-cultural-hubs", title: "Food Markets: Cultural Hubs of Culinary Traditions", date: "2026-01-02", readTime: "8 min read", excerpt: "Explore the world's most vibrant food markets that serve as cultural hubs of culinary traditions and local life..." },
        { id: "8", slug: "fine-dining-cultural-experiences", title: "Fine Dining Cultural Experiences: Gastronomic Excellence and Cultural Expression", date: "2026-01-01", readTime: "8 min read", excerpt: "Discover how fine dining establishments serve as cultural expressions of regional identity and culinary artistry..." }
      ],
    },
    beach: {
      name: "Beach Destinations",
      description: "Discover the world's most beautiful beaches, coastal resorts, and seaside experiences",
      articles: [
        { id: "1", slug: "tropical-paradise-beaches-2026", title: "Tropical Paradise Beaches: Ultimate Island Getaways 2026", date: "2026-01-08", readTime: "8 min read", excerpt: "Explore the most stunning tropical beaches offering crystal-clear waters, pristine sands, and luxury resort experiences..." },
        { id: "2", slug: "secluded-beaches-hidden-coastal-gems", title: "Secluded Beaches: Hidden Coastal Gems Off the Beaten Path", date: "2026-01-07", readTime: "8 min read", excerpt: "Discover exclusive beach destinations that remain untouched by mass tourism, offering pristine beauty and tranquility..." },
        { id: "3", slug: "luxury-beach-resorts-ultimate-experiences", title: "Luxury Beach Resorts: Ultimate Coastal Experiences", date: "2026-01-06", readTime: "8 min read", excerpt: "Experience the world's most exclusive beachfront properties offering unparalleled luxury and personalized services..." },
        { id: "4", slug: "surfing-destinations-best-waves-world", title: "Surfing Destinations: Best Waves Around the World", date: "2026-01-05", readTime: "8 min read", excerpt: "Find the perfect waves at the world's top surfing destinations catering to all skill levels..." },
        { id: "5", slug: "family-friendly-beaches-kids-safe", title: "Family-Friendly Beaches: Safe Coastal Adventures for Kids", date: "2026-01-04", readTime: "8 min read", excerpt: "Discover beaches that offer safe swimming, kid-friendly activities, and family-oriented amenities..." },
        { id: "6", slug: "romantic-beach-getaways-couples", title: "Romantic Beach Getaways: Perfect Coastal Escapes for Couples", date: "2026-01-03", readTime: "8 min read", excerpt: "Explore intimate beach destinations ideal for honeymoons, anniversaries, and romantic retreats..." },
        { id: "7", slug: "adventure-beaches-water-sports-activities", title: "Adventure Beaches: Water Sports and Coastal Activities", date: "2026-01-02", readTime: "8 min read", excerpt: "Experience beaches offering thrilling water sports, diving, snorkeling, and other aquatic adventures..." },
        { id: "8", slug: "eco-beaches-sustainable-coastal-tourism", title: "Eco Beaches: Sustainable Coastal Tourism Experiences", date: "2026-01-01", readTime: "8 min read", excerpt: "Visit environmentally conscious beaches committed to conservation and sustainable tourism practices..." }
      ],
    },
    "city-breaks": {
      name: "City Breaks",
      description: "Short urban escapes, metropolitan adventures, and cultural city experiences",
      articles: [
        { id: "1", slug: "luxury-city-breaks-ultra-premium", title: "Luxury City Breaks: Ultra Premium Urban Experiences", date: "2026-01-08", readTime: "8 min read", excerpt: "Indulge in the most exclusive city experiences with premium accommodations, fine dining, and VIP access..." },
        { id: "2", slug: "family-friendly-city-breaks", title: "Family-Friendly City Breaks: Urban Adventures for All Ages", date: "2026-01-07", readTime: "7 min read", excerpt: "Discover cities that offer engaging activities, attractions, and amenities perfect for family vacations..." },
        { id: "3", slug: "adventure-city-breaks-active-urban", title: "Adventure City Breaks: Active Urban Exploration", date: "2026-01-06", readTime: "8 min read", excerpt: "Experience cities through an adventurous lens with urban hiking, cycling, and active exploration..." },
        { id: "4", slug: "cultural-city-breaks-arts-culture", title: "Cultural City Breaks: Arts, Museums, and Cultural Immersion", date: "2026-01-05", readTime: "9 min read", excerpt: "Immerse yourself in the rich cultural offerings of world-class cities with museums, galleries, and performances..." },
        { id: "5", slug: "foodie-city-breaks-culinary-destinations", title: "Foodie City Breaks: Culinary Destinations and Gastronomy", date: "2026-01-04", readTime: "8 min read", excerpt: "Savor the flavors of cosmopolitan cities through food tours, local cuisine, and culinary experiences..." },
        { id: "6", slug: "romantic-city-breaks-love-connections", title: "Romantic City Breaks: Love and Connection in Urban Settings", date: "2026-01-03", readTime: "7 min read", excerpt: "Find romance in the heart of cities with intimate restaurants, scenic views, and couple-friendly activities..." },
        { id: "7", slug: "budget-city-breaks-affordable-urban", title: "Budget City Breaks: Affordable Urban Getaways", date: "2026-01-02", readTime: "7 min read", excerpt: "Explore cities on a budget with free attractions, affordable accommodations, and value experiences..." },
        { id: "8", slug: "solo-city-breaks-independent-travel", title: "Solo City Breaks: Independent Urban Travel Experiences", date: "2026-01-01", readTime: "8 min read", excerpt: "Navigate cities as a solo traveler with safety tips, social opportunities, and enriching experiences..." }
      ],
    },
    home: {
      name: "Home & Interior",
      description: "Design inspiration, interior decorating tips, and home improvement ideas",
      articles: [
        { id: "1", slug: "maximizing-small-spaces-apartment-living-tips", title: "Maximizing Small Spaces: Apartment Living Tips", date: "2026-01-08", readTime: "7 min read", excerpt: "Creative solutions for making the most of compact living spaces..." },
        { id: "2", slug: "sustainable-home-design-eco-friendly-choices", title: "Sustainable Home Design: Eco-Friendly Choices", date: "2026-01-07", readTime: "8 min read", excerpt: "How to create an environmentally conscious living space..." },
        { id: "3", slug: "minimalist-interior-design-principles", title: "Minimalist Interior Design Principles", date: "2026-01-06", readTime: "6 min read", excerpt: "Embracing simplicity and functionality in home design..." },
        { id: "4", slug: "smart-home-automation-integration-guide", title: "Smart Home Automation: Integration Guide", date: "2026-01-05", readTime: "9 min read", excerpt: "Complete guide to integrating technology into your living space..." },
        { id: "5", slug: "color-psychology-in-home-decor", title: "Color Psychology in Home Decor", date: "2026-01-04", readTime: "7 min read", excerpt: "How colors affect mood and behavior in different rooms..." },
        { id: "6", slug: "seasonal-decor-tips-transitional-design", title: "Seasonal Decor Tips: Transitional Design", date: "2026-01-03", readTime: "6 min read", excerpt: "Easy ways to update your home decor with the changing seasons..." },
        { id: "7", slug: "budget-home-makeover-ideas", title: "Budget Home Makeover Ideas", date: "2026-01-02", readTime: "8 min read", excerpt: "Transform your space without breaking the bank..." },
        { id: "8", slug: "indoor-plants-air-quality-benefits", title: "Indoor Plants and Air Quality Benefits", date: "2026-01-01", readTime: "7 min read", excerpt: "Choosing the right plants to improve your home environment..." }
      ],
    },
    wellness: {
      name: "Wellness",
      description: "Holistic health, mental well-being, and life balance strategies",
      articles: [
        { id: "1", slug: "morning-routines-setting-positive-tone", title: "Morning Routines: Setting a Positive Tone", date: "2026-01-08", readTime: "6 min read", excerpt: "Start your day with practices that promote mental clarity and focus..." },
        { id: "2", slug: "mindfulness-meditation-beginners-guide", title: "Mindfulness Meditation: Beginner's Guide", date: "2026-01-07", readTime: "7 min read", excerpt: "Essential techniques for developing a sustainable meditation practice..." },
        { id: "3", slug: "sleep-hygiene-improving-rest-quality", title: "Sleep Hygiene: Improving Rest Quality", date: "2026-01-06", readTime: "8 min read", excerpt: "Strategies for achieving deeper, more restorative sleep..." },
        { id: "4", slug: "nutritional-wellness-balanced-eating-habits", title: "Nutritional Wellness: Balanced Eating Habits", date: "2026-01-05", readTime: "9 min read", excerpt: "Developing sustainable approaches to healthy eating..." },
        { id: "5", slug: "physical-fitness-integrating-into-daily-life", title: "Physical Fitness: Integrating Into Daily Life", date: "2026-01-04", readTime: "7 min read", excerpt: "Simple exercises and movement practices for busy schedules..." },
        { id: "6", slug: "stress-management-techniques-modern-life", title: "Stress Management Techniques for Modern Life", date: "2026-01-03", readTime: "8 min read", excerpt: "Effective strategies for managing stress in our fast-paced world..." },
        { id: "7", slug: "digital-detox-benefits-and-strategies", title: "Digital Detox: Benefits and Strategies", date: "2026-01-02", readTime: "7 min read", excerpt: "Reclaiming mental space by reducing digital overload..." },
        { id: "8", slug: "building-resilience-personal-growth", title: "Building Resilience Through Personal Growth", date: "2026-01-01", readTime: "9 min read", excerpt: "Developing emotional strength and adaptability for life challenges..." }
      ],
    },
    mindfulness: {
      name: "Mindfulness",
      description: "Practical guidance on meditation, awareness, and mindful living practices",
      articles: [
        { id: "1", slug: "introduction-to-mindfulness-meditation", title: "Introduction to Mindfulness Meditation", date: "2026-01-08", readTime: "6 min read", excerpt: "Learn the fundamentals of mindfulness meditation and its transformative benefits..." },
        { id: "2", slug: "breathing-techniques-for-stress-relief", title: "Breathing Techniques for Stress Relief", date: "2026-01-07", readTime: "7 min read", excerpt: "Essential breathing exercises to calm your mind and reduce anxiety..." },
        { id: "3", slug: "mindful-eating-practices", title: "Mindful Eating Practices", date: "2026-01-06", readTime: "8 min read", excerpt: "How to cultivate awareness and appreciation during meals..." },
        { id: "4", slug: "body-scan-meditation-guide", title: "Body Scan Meditation: A Complete Guide", date: "2026-01-05", readTime: "9 min read", excerpt: "Step-by-step instructions for this powerful awareness technique..." },
        { id: "5", slug: "mindfulness-in-daily-activities", title: "Mindfulness in Daily Activities", date: "2026-01-04", readTime: "7 min read", excerpt: "Integrate mindfulness into routine tasks like walking, cleaning, and working..." },
        { id: "6", slug: "loving-kindness-meditation-practice", title: "Loving-Kindness Meditation Practice", date: "2026-01-03", readTime: "8 min read", excerpt: "Cultivate compassion for yourself and others through this practice..." },
        { id: "7", slug: "mindfulness-for-better-sleep", title: "Mindfulness for Better Sleep", date: "2026-01-02", readTime: "7 min read", excerpt: "Techniques to quiet your mind and prepare for restful sleep..." },
        { id: "8", slug: "developing-regular-mindfulness-habit", title: "Developing a Regular Mindfulness Habit", date: "2026-01-01", readTime: "9 min read", excerpt: "Strategies to maintain a consistent mindfulness practice in daily life..." }
      ],
    },
    productivity: {
      name: "Productivity",
      description: "Strategies and techniques for optimizing performance, time management, and goal achievement",
      articles: [
        { id: "1", slug: "time-blocking-mastery-maximizing-focus", title: "Time Blocking Mastery: Maximizing Focus and Output", date: "2026-01-08", readTime: "8 min read", excerpt: "Learn how to structure your day for peak performance using time-blocking techniques..." },
        { id: "2", slug: "pomodoro-technique-optimized-work-sessions", title: "Pomodoro Technique: Optimized Work Sessions", date: "2026-01-07", readTime: "7 min read", excerpt: "Master the art of focused work intervals with strategic breaks..." },
        { id: "3", slug: "priority-frameworks-eisenhower-matrix", title: "Priority Frameworks: Eisenhower Matrix and Beyond", date: "2026-01-06", readTime: "9 min read", excerpt: "Discover proven systems for distinguishing urgent from important tasks..." },
        { id: "4", slug: "habit-stacking-building-productive-routines", title: "Habit Stacking: Building Productive Routines", date: "2026-01-05", readTime: "8 min read", excerpt: "Learn how to chain positive behaviors for compound productivity gains..." },
        { id: "5", slug: "digital-minimalism-eliminating-distractions", title: "Digital Minimalism: Eliminating Distractions", date: "2026-01-04", readTime: "10 min read", excerpt: "Strategies for reducing digital noise and increasing focused work time..." },
        { id: "6", slug: "energy-management-not-time-management", title: "Energy Management, Not Time Management", date: "2026-01-03", readTime: "9 min read", excerpt: "Optimize your work schedule according to your natural energy rhythms..." },
        { id: "7", slug: "goal-setting-smart-objectives-achievement", title: "Goal Setting: SMART Objectives Achievement", date: "2026-01-02", readTime: "8 min read", excerpt: "Framework for setting and accomplishing meaningful goals efficiently..." },
        { id: "8", slug: "workflow-optimization-streamlining-tasks", title: "Workflow Optimization: Streamlining Daily Tasks", date: "2026-01-01", readTime: "10 min read", excerpt: "Methods for eliminating inefficiencies and automating routine processes..." }
      ],
    }
    // Add more subcategories as needed...
  }
  
  // Staggered article loading effect
  useEffect(() => {
    if (!subcategoryId) return;
    
    const timer = setTimeout(() => {
      setLoadedArticles([0, 1]);
    }, 100);

    const timer2 = setTimeout(() => {
      setLoadedArticles([0, 1, 2]);
    }, 200);

    const timer3 = setTimeout(() => {
      setLoadedArticles([0, 1, 2, 3, 4]);
    }, 400);
    
    const timer4 = setTimeout(() => {
      setLoadedArticles([0, 1, 2, 3, 4, 5]);
    }, 600);
    
    const timer5 = setTimeout(() => {
      setLoadedArticles([0, 1, 2, 3, 4, 5, 6]);
    }, 800);
    
    const timer6 = setTimeout(() => {
      setLoadedArticles([0, 1, 2, 3, 4, 5, 6, 7]);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, [subcategoryId]);

  if (!id || !subcategoryId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto"></div>
          <p className="text-white mt-4">Loading subcategory...</p>
        </div>
      </div>
    );
  }

  const subcategory = subcategoryData[subcategoryId as string];

  if (!subcategory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Subcategory Not Found</h1>
          <Link href={`/category/${id}`} className="text-yellow-400 hover:text-yellow-300">
            Browse Other Subcategories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <SEO
        title={`${subcategory.name} - ${id} - HAM BLOGS`}
        description={subcategory.description}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <Link href={`/category/${id}`} className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6">
            <span className="mr-2">←</span> Back to {id}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {subcategory.name}
          </h1>
          <p className="text-xl text-gray-300">
            {subcategory.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {subcategory.articles.map((article: any, index: number) => (
            <div
              key={article.id}
              className={`transform transition-all duration-500 ease-out ${
                loadedArticles.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <Link href={`/${getCategoryPath(id as string)}/${article.slug}`}>
                <div className="group bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {article.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">
                      {new Date(article.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="text-sm text-yellow-400">
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href={`/category/${id}`} className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium">
            Browse Other Subcategories in {id}
          </Link>
        </div>
      </div>
    </div>
  );
}