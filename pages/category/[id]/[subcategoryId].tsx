import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SEO from "../../../components/Seo/SEO";

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
        { id: "3", slug: "michelin-star-dining-around-world", title: "Michelin Star Dining Around the World", date: "2026-01-06", readTime: "9 min read", excerpt: "Guide to the world's finest dining experiences..." }
      ]
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
        { id: "1", slug: "spring-2026-fashion-week-highlights-trends", title: "Spring 2026 Fashion Week Highlights", date: "2026-01-08", readTime: "6 min read", excerpt: "Key trends from the major fashion weeks around the globe..." },
        { id: "2", slug: "sustainable-luxury-fashion-brands-guide", title: "Sustainable Luxury Fashion Brands", date: "2026-01-07", readTime: "8 min read", excerpt: "Exploring eco-conscious luxury fashion labels making a difference..." },
        { id: "3", slug: "building-capsule-wardrobe-essentials", title: "Building a Capsule Wardrobe", date: "2026-01-06", readTime: "7 min read", excerpt: "How to curate a timeless and versatile wardrobe..." }
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
              <Link href={`/blog/${article.slug}`}>
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