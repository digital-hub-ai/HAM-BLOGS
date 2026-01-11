import Head from 'next/head';
import Link from 'next/link';
import SEO from "../../../components/Seo/SEO";

// Define all crypto blog posts with their metadata
const cryptoPosts = [
  {
    slug: 'bitcoin-halving-implications-market-dynamics',
    title: 'Bitcoin Halving: Implications for Market Dynamics',
    description: 'Understanding the impact of Bitcoin\'s programmed supply reduction on price and market behavior...',
    date: 'January 8, 2026',
    readTime: '10 min read'
  },
  {
    slug: 'central-bank-digital-currencies-cbdcs-impact',
    title: 'Central Bank Digital Currencies: Impact and Implications',
    description: 'How government-backed digital currencies are reshaping the financial landscape...',
    date: 'January 7, 2026',
    readTime: '9 min read'
  },
  {
    slug: 'decentralized-finance-defi-opportunities-risks',
    title: 'Decentralized Finance: Opportunities and Risks',
    description: 'Exploring the potential and challenges of DeFi protocols and platforms...',
    date: 'January 6, 2026',
    readTime: '8 min read'
  },
  {
    slug: 'ethereum-roadmap-transition-proof-stake',
    title: 'Ethereum Roadmap: Transition to Proof of Stake',
    description: 'Understanding Ethereum\'s shift from proof of work to proof of stake and its implications...',
    date: 'January 5, 2026',
    readTime: '11 min read'
  },
  {
    slug: 'nft-marketplace-evolution-digital-ownership',
    title: 'NFT Marketplace Evolution: Digital Ownership',
    description: 'How NFTs are changing the concept of digital asset ownership and value transfer...',
    date: 'January 4, 2026',
    readTime: '9 min read'
  },
  {
    slug: 'regulatory-landscape-crypto-compliance',
    title: 'Regulatory Landscape: Crypto Compliance',
    description: 'Understanding the evolving regulatory environment for cryptocurrencies worldwide...',
    date: 'January 3, 2026',
    readTime: '10 min read'
  },
  {
    slug: 'stablecoins-role-digital-economy',
    title: 'Stablecoins: Role in the Digital Economy',
    description: 'Examining the function and importance of stablecoins in the cryptocurrency ecosystem...',
    date: 'January 2, 2026',
    readTime: '12 min read'
  },
  {
    slug: 'web3-technology-empowering-user-ownership',
    title: 'Web3 Technology: Empowering User Ownership',
    description: 'How decentralized web technologies are shifting power from corporations to users...',
    date: 'January 1, 2026',
    readTime: '11 min read'
  }
];

export default function CryptoCategory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <SEO
        title="Cryptocurrency - Finance - HAM BLOGS"
        description="Digital assets, blockchain technology, and crypto investment strategies"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-blue-300 hover:text-white transition-colors mb-6">
            ← Back to blog
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">Cryptocurrency</h1>
          <p className="text-xl text-gray-300 mb-6">Digital assets, blockchain technology, and crypto investment strategies</p>
        </div>

        <div className="grid gap-8">
          {cryptoPosts.map((post) => (
            <article 
              key={post.slug} 
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300"
            >
              <Link href={`/blog/crypto/${post.slug}`}>
                <h2 className="text-2xl font-bold text-white mb-3 hover:text-blue-300 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-300 mb-4">
                {post.description}
              </p>
              <div className="flex items-center text-gray-400 text-sm">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-4">Browse Other Subcategories in finance</h3>
          <div className="flex flex-wrap gap-3">
            <Link 
              href="/blog/finance/budgeting"
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-700 text-gray-200 hover:bg-gray-600"
            >
              Budgeting
            </Link>
            <Link 
              href="/blog/finance/retirement"
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-700 text-gray-200 hover:bg-gray-600"
            >
              Retirement
            </Link>
            <Link 
              href="/blog/finance/stocks"
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-700 text-gray-200 hover:bg-gray-600"
            >
              Stocks
            </Link>
            <Link 
              href="/blog/finance/real-estate"
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-700 text-gray-200 hover:bg-gray-600"
            >
              Real Estate
            </Link>
            <Link 
              href="/blog/finance/crypto"
              className="px-4 py-2 rounded-full text-sm font-medium bg-blue-600 text-white"
            >
              Cryptocurrency
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}