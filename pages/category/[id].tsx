import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SEO from "../../components/Seo/SEO";

export default function CategoryPage() {
  const router = useRouter();
  const { id } = router.query;
  const [loadedItems, setLoadedItems] = useState<number[]>([]);

  // Simulated category data
  const categoryData: Record<string, any> = {
    tech: {
      title: "Technology",
      description: "Cutting-edge insights into AI, quantum computing, and digital innovation",
      icon: "💻",
      subcategories: [
        { id: "ai", name: "Artificial Intelligence", count: 45 },
        { id: "quantum", name: "Quantum Computing", count: 23 },
        { id: "blockchain", name: "Blockchain", count: 32 },
        { id: "cloud", name: "Cloud Computing", count: 38 },
        { id: "cybersecurity", name: "Cybersecurity", count: 29 },
        { id: "iot", name: "Internet of Things", count: 27 }
      ]
    },
    travel: {
      title: "Travel",
      description: "Exquisite destinations and luxury travel experiences worldwide",
      icon: "✈️",
      subcategories: [
        { id: "luxury", name: "Luxury Travel", count: 34 },
        { id: "adventure", name: "Adventure", count: 28 },
        { id: "culture", name: "Culture & Heritage", count: 31 },
        { id: "beach", name: "Beach Destinations", count: 25 },
        { id: "city-breaks", name: "City Breaks", count: 22 },
        { id: "culinary", name: "Culinary Tourism", count: 19 }
      ]
    },
    lifestyle: {
      title: "Lifestyle",
      description: "Sophisticated living, wellness, and premium lifestyle choices",
      icon: "✨",
      subcategories: [
        { id: "fashion", name: "Fashion & Style", count: 42 },
        { id: "home", name: "Home & Interior", count: 35 },
        { id: "luxury", name: "Luxury Goods", count: 28 },
        { id: "wellness", name: "Wellness", count: 37 },
        { id: "mindfulness", name: "Mindfulness", count: 24 },
        { id: "productivity", name: "Productivity", count: 21 }
      ]
    },
    finance: {
      title: "Finance",
      description: "Investment strategies and financial wisdom for wealth building",
      icon: "💰",
      subcategories: [
        { id: "investing", name: "Investing", count: 39 },
        { id: "crypto", name: "Cryptocurrency", count: 33 },
        { id: "real-estate", name: "Real Estate", count: 26 },
        { id: "stocks", name: "Stock Market", count: 31 },
        { id: "retirement", name: "Retirement Planning", count: 23 },
        { id: "budgeting", name: "Budgeting", count: 27 }
      ]
    },
    health: {
      title: "Health",
      description: "Wellness, fitness, and longevity for optimal living",
      icon: "🌿",
      subcategories: [
        { id: "fitness", name: "Fitness", count: 41 },
        { id: "nutrition", name: "Nutrition", count: 38 },
        { id: "mental", name: "Mental Health", count: 34 },
        { id: "longevity", name: "Longevity", count: 25 },
        { id: "preventive", name: "Preventive Care", count: 29 },
        { id: "alternative", name: "Alternative Medicine", count: 22 }
      ]
    },
    design: {
      title: "Design",
      description: "Creative inspiration and design trends from the masters",
      icon: "🎨",
      subcategories: [
        { id: "ui-ux", name: "UI/UX Design", count: 43 },
        { id: "graphic", name: "Graphic Design", count: 36 },
        { id: "architecture", name: "Architecture", count: 28 },
        { id: "fashion", name: "Fashion Design", count: 32 },
        { id: "interior", name: "Interior Design", count: 27 },
        { id: "industrial", name: "Industrial Design", count: 21 }
      ]
    },
    food: {
      title: "Food",
      description: "Gourmet cuisine and culinary arts from around the world",
      icon: "🍽️",
      subcategories: [
        { id: "recipes", name: "Recipes", count: 47 },
        { id: "restaurants", name: "Restaurant Reviews", count: 33 },
        { id: "cooking", name: "Cooking Techniques", count: 39 },
        { id: "ingredients", name: "Ingredients", count: 28 },
        { id: "cuisines", name: "World Cuisines", count: 41 },
        { id: "wine", name: "Wine & Spirits", count: 24 }
      ]
    },
    entertainment: {
      title: "Entertainment",
      description: "Movies, music, and cultural experiences worth your time",
      icon: "🎬",
      subcategories: [
        { id: "movies", name: "Movies", count: 44 },
        { id: "music", name: "Music", count: 38 },
        { id: "tv", name: "TV Shows", count: 32 },
        { id: "gaming", name: "Gaming", count: 35 },
        { id: "books", name: "Books", count: 29 },
        { id: "events", name: "Live Events", count: 26 }
      ]
    },
    business: {
      title: "Business",
      description: "Leadership insights and entrepreneurial success stories",
      icon: "💼",
      subcategories: [
        { id: "entrepreneurship", name: "Entrepreneurship", count: 46 },
        { id: "leadership", name: "Leadership", count: 37 },
        { id: "marketing", name: "Marketing", count: 42 },
        { id: "strategy", name: "Strategy", count: 31 },
        { id: "innovation", name: "Innovation", count: 34 },
        { id: "management", name: "Management", count: 28 }
      ]
    },
    science: {
      title: "Science",
      description: "Breakthrough discoveries and scientific advancements",
      icon: "🔬",
      subcategories: [
        { id: "physics", name: "Physics", count: 38 },
        { id: "biology", name: "Biology", count: 35 },
        { id: "chemistry", name: "Chemistry", count: 29 },
        { id: "astronomy", name: "Astronomy", count: 32 },
        { id: "medicine", name: "Medicine", count: 36 },
        { id: "environment", name: "Environmental Science", count: 31 }
      ]
    },
    arts: {
      title: "Arts",
      description: "Visual arts, literature, and creative expression",
      icon: "🎭",
      subcategories: [
        { id: "visual", name: "Visual Arts", count: 41 },
        { id: "literature", name: "Literature", count: 34 },
        { id: "theater", name: "Theater", count: 28 },
        { id: "dance", name: "Dance", count: 23 },
        { id: "photography", name: "Photography", count: 37 },
        { id: "poetry", name: "Poetry", count: 26 }
      ]
    },
    wellness: {
      title: "Wellness",
      description: "Mindfulness, mental health, and holistic wellbeing",
      icon: "🧘",
      subcategories: [
        { id: "meditation", name: "Meditation", count: 39 },
        { id: "yoga", name: "Yoga", count: 33 },
        { id: "stress", name: "Stress Management", count: 27 },
        { id: "sleep", name: "Sleep Health", count: 31 },
        { id: "relationships", name: "Relationships", count: 35 },
        { id: "spirituality", name: "Spirituality", count: 29 }
      ]
    }
  };

  // Staggered item loading effect
  useEffect(() => {
    if (!id) return;
    
    const timer = setTimeout(() => {
      setLoadedItems([0, 1, 2]);
    }, 100);

    const timer2 = setTimeout(() => {
      setLoadedItems([0, 1, 2, 3, 4, 5]);
    }, 300);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, [id]);

  if (!id) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto"></div>
          <p className="text-white mt-4">Loading category...</p>
        </div>
      </div>
    );
  }

  const category = categoryData[id as string];

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Category Not Found</h1>
          <Link href="/categories" className="text-yellow-400 hover:text-yellow-300">
            Browse All Categories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <SEO
        title={`${category.title} - HAM BLOGS`}
        description={category.description}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">{category.icon}</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {category.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {category.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.subcategories.map((subcategory: any, index: number) => (
            <div
              key={subcategory.id}
              className={`transform transition-all duration-700 ease-out ${
                loadedItems.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <Link href={`/category/${id}/${subcategory.id}`}>
                <div className="group bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 h-64 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                        {subcategory.name}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {subcategory.count} articles
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-yellow-400 text-sm font-medium">
                        Explore
                      </span>
                      <div className="w-8 h-8 border-2 border-yellow-400 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-45">
                        <span className="text-yellow-400 text-xs">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/categories" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium">
            Browse All Categories
          </Link>
        </div>
      </div>
    </div>
  );
}