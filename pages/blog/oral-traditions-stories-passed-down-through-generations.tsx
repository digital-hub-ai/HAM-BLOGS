import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function BlogPost() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    // Check if article is bookmarked
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const isBookmarked = bookmarks.some((article: any) => article.slug === router.pathname.split('/').pop());
    setBookmarked(isBookmarked);

    // Generate related articles
    const allArticles = [
      {
        id: '1',
        title: 'Ancient Temples: Hidden Archaeological Wonders',
        slug: 'ancient-temples-hidden-archaeological-wonders',
        excerpt: 'Discovering lesser-known temples and archaeological sites that hold fascinating historical secrets...'
      },
      {
        id: '2',
        title: 'World Heritage Sites: Preserving Human History',
        slug: 'world-heritage-sites-preserving-human-history',
        excerpt: 'Exploring UNESCO World Heritage sites and their significance in preserving our shared history...'
      },
      {
        id: '3',
        title: 'Ancient Trade Routes: Cultural Exchange Pathways',
        slug: 'ancient-trade-routes-cultural-exchange-pathways',
        excerpt: 'Following historic trade routes that facilitated cultural exchange between civilizations...'
      }
    ];
    
    // Randomly select 2 articles
    const shuffled = [...allArticles].sort(() => 0.5 - Math.random());
    setRelatedArticles(shuffled.slice(0, 2));
  }, [router]);

  const toggleBookmark = () => {
    const articleData = {
      id: Math.random().toString(36).substr(2, 9),
      title: 'Oral Traditions: Stories Passed Down Through Generations',
      slug: router.pathname.split('/').pop(),
      date: '2026-01-03',
      category: 'Culture & Heritage'
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
        <title>Oral Traditions: Stories Passed Down Through Generations | Premium Blog Platform</title>
        <meta name="description" content="The importance of storytelling and oral histories in preserving cultural identity" />
        <link rel="canonical" href="https://www.premiumblogplatform.com/blog/oral-traditions-stories-passed-down-through-generations" />
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
              Culture & Heritage
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
            Oral Traditions: Stories Passed Down Through Generations
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-400 text-sm mb-6">
            <span className="mr-4">January 3, 2026</span>
            <span>9 min read</span>
          </div>
        </header>

        <main className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Oral traditions represent humanity's earliest forms of knowledge preservation and cultural transmission. These living narratives, passed from generation to generation through spoken word, encompass myths, legends, historical accounts, moral teachings, and cultural values. In many societies, oral traditions serve as the primary repository of collective memory, preserving wisdom, experiences, and identity when written records were unavailable or inaccessible.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Power of Spoken Word</h2>
          
          <p className="mb-6 text-gray-200">
            Before the widespread adoption of writing systems, oral traditions served as humanity's library, preserving essential knowledge about survival, morality, history, and cultural values. Master storytellers, known as griots in West Africa, shamans in various indigenous cultures, or bards in Celtic traditions, memorized vast amounts of information and transmitted it with remarkable accuracy across centuries.
          </p>
          
          <p className="mb-6 text-gray-200">
            The spoken word carries emotional resonance that written text cannot fully capture. Tone, rhythm, gesture, and audience interaction all contribute to the storytelling experience, making each telling potentially unique while maintaining core elements. This dynamic quality allows oral traditions to adapt to contemporary contexts while preserving essential truths and values.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Indigenous Wisdom and Storytelling</h2>
          
          <p className="mb-6 text-gray-200">
            Indigenous cultures worldwide have preserved sophisticated knowledge systems through oral traditions. Australian Aboriginal dreamtime stories encode detailed geographical information, ecological knowledge, and survival techniques within mythological narratives. Native American tribes use oral traditions to transmit knowledge about medicinal plants, seasonal changes, and spiritual beliefs.
          </p>
          
          <p className="mb-6 text-gray-200">
            African oral traditions, particularly those preserved by griots, maintain genealogies, historical accounts, and cultural values across generations. These storytellers serve as living libraries, preserving the history of kingdoms, lineages, and cultural practices that might otherwise disappear.
          </p>
          
          <p className="mb-6 text-gray-200">
            Similarly, Maori traditions in New Zealand use oral narratives, songs, and chants to preserve historical events, genealogies, and cultural practices. These traditions are considered sacred and are transmitted through specific protocols and ceremonial contexts.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Myths and Legends as Cultural Frameworks</h2>
          
          <p className="mb-6 text-gray-200">
            Myths and legends embedded in oral traditions provide cultural frameworks that explain natural phenomena, establish moral guidelines, and reinforce social structures. Norse sagas, Greek myths, and Hindu epics like the Ramayana and Mahabharata were originally transmitted orally before being written down, serving as foundational narratives that shaped entire civilizations.
          </p>
          
          <p className="mb-6 text-gray-200">
            These stories often contain practical wisdom disguised as entertainment. Tales of heroes overcoming obstacles teach resilience and moral courage, while cautionary tales warn against specific behaviors or dangers. The metaphorical nature of many myths allows complex ideas to be transmitted in memorable and accessible forms.
          </p>
          
          <p className="mb-6 text-gray-200">
            Religious and spiritual traditions also relied heavily on oral transmission before codification. Buddhist Jataka tales, Islamic hadith literature, and Christian apocryphal stories were all preserved through oral traditions before being written down, demonstrating the crucial role of spoken word in preserving spiritual wisdom.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Contemporary Preservation Efforts</h2>
          
          <p className="mb-6 text-gray-200">
            Modern preservation efforts recognize the urgency of documenting oral traditions before elderly storytellers pass away. Linguistic anthropologists, folklorists, and cultural preservationists work with elder community members to record stories, songs, and traditional knowledge before they disappear forever.
          </p>
          
          <p className="mb-6 text-gray-200">
            Digital archives and multimedia projects attempt to capture not just the words but the performance aspects of oral traditions. Video recordings preserve gestures, facial expressions, and audience interactions that are integral to the storytelling experience and meaning transmission.
          </p>
          
          <p className="mb-6 text-gray-200">
            Educational initiatives integrate oral traditions into formal education systems, recognizing their value for cultural preservation and identity formation. These programs often involve elder community members as teachers and knowledge keepers, bridging generational gaps.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Challenges and Threats</h2>
          
          <p className="mb-6 text-gray-200">
            Globalization, urbanization, and technological change pose significant threats to oral traditions. Young people migrating to cities often lose connection to traditional storytellers, while electronic media provides alternative forms of entertainment that compete with traditional narratives.
          </p>
          
          <p className="mb-6 text-gray-200">
            Language extinction directly threatens oral traditions, as many stories are embedded in specific linguistic structures and cultural contexts that are difficult to translate. When languages disappear, entire knowledge systems vanish with them.
          </p>
          
          <p className="mb-6 text-gray-200">
            Political and social upheavals can disrupt traditional transmission patterns, separating storytellers from potential learners or destroying the social structures that supported knowledge transfer.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Revitalization and Renewal</h2>
          
          <p className="mb-6 text-gray-200">
            Cultural revitalization movements work to restore oral traditions through community-based programs, festivals, and educational initiatives. These efforts often involve training new storytellers and creating contexts where traditional narratives can be shared and appreciated.
          </p>
          
          <p className="mb-6 text-gray-200">
            Technology, while sometimes seen as a threat, also provides new opportunities for preservation and transmission. Podcasts, online archives, and social media platforms can reach younger audiences and preserve stories for future generations.
          </p>
          
          <p className="mb-6 text-gray-200">
            Intergenerational dialogue programs connect elder knowledge keepers with young people interested in learning traditional narratives, ensuring continuity of cultural transmission despite social changes.
          </p>

          <blockquote className="border-l-4 border-yellow-500 pl-6 py-2 my-8 text-gray-200 italic">
            Oral traditions represent humanity's living memory, preserving wisdom, values, and identity through the power of spoken word and shared narrative experiences.
          </blockquote>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Future of Oral Traditions</h2>
          
          <p className="mb-6 text-gray-200">
            The future of oral traditions depends on communities' ability to adapt these ancient practices to contemporary contexts while maintaining their essential functions. Successful preservation requires balancing respect for traditional forms with innovation that attracts younger generations.
          </p>
          
          <p className="mb-6 text-gray-200">
            Educational institutions increasingly recognize the value of oral traditions for cultural preservation and holistic learning. Integrating traditional narratives into curricula helps young people connect with their heritage while learning essential life skills and values.
          </p>
          
          <p className="mb-6 text-gray-200">
            International recognition of oral traditions as intangible cultural heritage provides frameworks and resources for preservation efforts. UNESCO's recognition of various oral traditions highlights their global significance and encourages protective measures.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusion</h2>
          
          <p className="mb-6 text-gray-200">
            Oral traditions represent invaluable repositories of human knowledge, wisdom, and cultural identity that deserve preservation and celebration. These living narratives connect us to our ancestors while providing guidance for contemporary challenges. The stories, songs, and teachings passed down through generations contain insights about human nature, survival, ethics, and meaning-making that remain relevant today.
          </p>
          
          <p className="mb-6 text-gray-200">
            As we face rapid social and technological change, preserving oral traditions becomes increasingly urgent. These traditions offer stability and identity in turbulent times while providing alternative ways of understanding the world and our place in it. Supporting oral tradition preservation contributes to human cultural diversity and ensures that future generations inherit the wisdom accumulated over millennia.
          </p>
          
          <p className="mb-6 text-gray-200">
            The continuation of oral traditions requires active participation from community members, institutional support, and recognition of their value for human flourishing. By honoring and preserving these traditions, we maintain vital connections to our collective human heritage while enriching contemporary cultural life.
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