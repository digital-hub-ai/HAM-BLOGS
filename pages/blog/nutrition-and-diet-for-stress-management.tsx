import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function NutritionAndDietForStressManagement() {
  const router = useRouter();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      <Head>
        <title>Nutrition and Diet for Stress Management | Ham Blogs</title>
        <meta name="description" content="How food choices impact stress levels and mood." />
        <link rel="canonical" href="https://ham-blogs.vercel.app/blog/nutrition-and-diet-for-stress-management" />
      </Head>

      <article className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-10">
          <nav className="mb-6">
            <Link href="/" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/blog" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">Blog</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/category/wellness" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">Wellness</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/category/wellness/stress-management" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">Stress Management</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">Nutrition and Diet</span>
          </nav>
          
          <div className="flex justify-between items-start">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Nutrition and Diet for Stress Management</h1>
            
            <button 
              onClick={toggleBookmark}
              className={`p-2 rounded-full ${isBookmarked ? 'text-yellow-500' : 'text-gray-400'} hover:bg-gray-100 transition-colors duration-200`}
              aria-label={isBookmarked ? "Remove bookmark" : "Bookmark this article"}
            >
              {isBookmarked ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg>
              )}
            </button>
          </div>
          
          <div className="flex flex-wrap items-center text-gray-600 mb-6">
            <span className="mr-4">📅 March 5, 2026</span>
            <span className="mr-4">⏱️ 9 min read</span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Wellness</span>
            <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm ml-2">Stress Management</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm ml-2">Nutrition</span>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <img 
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Healthy foods for stress management"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-600 italic">Nourishing your body to better manage stress</p>
        </div>

        <div className="prose prose-lg prose-indigo max-w-none">
          <p className="text-xl text-gray-700 mb-6">
            The connection between nutrition and stress is profound and bidirectional. When we're 
            stressed, our bodies undergo various physiological changes that affect how we process 
            food and nutrients. Conversely, what we eat significantly impacts our ability to handle 
            stress. Understanding how nutrition affects stress levels empowers us to make dietary 
            choices that support our mental and emotional well-being. By selecting the right foods 
            and maintaining stable blood sugar levels, we can better equip our bodies to manage 
            stress and maintain a balanced mood.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How Stress Affects Our Body and Appetite</h2>
          <p className="text-gray-700 mb-6">
            When we experience stress, our bodies release cortisol and other stress hormones that 
            trigger various physiological responses:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Metabolic Changes</h3>
          <p className="text-gray-700 mb-4">
            Stress hormones can increase appetite and cravings for high-calorie, sugary, and fatty 
            foods. This evolutionary response was designed to provide quick energy for physical 
            threats, but in modern times, it often leads to poor food choices that exacerbate stress 
            rather than alleviate it.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Blood Sugar Fluctuations</h3>
          <p className="text-gray-700 mb-4">
            Stress can cause blood sugar levels to spike and crash, leading to mood swings, 
            irritability, and increased cravings. This creates a cycle where stress leads to poor 
            eating choices, which then contribute to more stress.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Digestive Issues</h3>
          <p className="text-gray-700 mb-4">
            Stress can affect digestion, leading to issues like bloating, stomach pain, or changes 
            in bowel movements. When our digestive system is compromised, we're less able to 
            absorb nutrients effectively.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Stress-Fighting Foods and Nutrients</h2>
          <p className="text-gray-700 mb-4">
            Certain foods and nutrients can help your body better manage stress:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Complex Carbohydrates</h3>
          <p className="text-gray-700 mb-4">
            Foods like oats, quinoa, brown rice, and sweet potatoes help stabilize blood sugar 
            levels and increase the production of serotonin, a mood-regulating neurotransmitter. 
            Unlike simple carbohydrates, complex carbs provide sustained energy without causing 
            dramatic spikes and crashes.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Omega-3 Fatty Acids</h3>
          <p className="text-gray-700 mb-4">
            Found in fatty fish (salmon, mackerel, sardines), walnuts, flaxseeds, and chia seeds, 
            omega-3 fatty acids help reduce inflammation and may lower anxiety and depression. 
            Studies suggest that adequate omega-3 intake can help regulate stress hormones and 
            reduce the physiological response to stress.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Magnesium-Rich Foods</h3>
          <p className="text-gray-700 mb-4">
            Magnesium plays a crucial role in nervous system function and stress response. 
            Foods high in magnesium include leafy greens, nuts, seeds, avocados, and dark chocolate. 
            Magnesium deficiency has been linked to increased anxiety and stress sensitivity.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Antioxidant-Rich Foods</h3>
          <p className="text-gray-700 mb-4">
            Berries, dark leafy greens, colorful vegetables, and green tea are rich in antioxidants 
            that help combat oxidative stress in the body. Chronic stress can increase oxidative 
            damage, so consuming antioxidant-rich foods helps protect cells and support overall 
            resilience.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Probiotic Foods</h3>
          <p className="text-gray-700 mb-4">
            The gut-brain axis plays a significant role in stress management. Fermented foods 
            like yogurt, kefir, sauerkraut, and kimchi support gut health, which can influence 
            mood and stress response.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Foods That Increase Stress</h2>
          <p className="text-gray-700 mb-4">
            Some foods can exacerbate stress and should be limited:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Caffeine</h3>
          <p className="text-gray-700 mb-4">
            While moderate caffeine consumption can be beneficial, excessive intake can increase 
            anxiety, disrupt sleep, and elevate stress hormones. Pay attention to how caffeine 
            affects your stress levels and adjust accordingly.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Sugar and Refined Carbohydrates</h3>
          <p className="text-gray-700 mb-4">
            High-sugar foods and refined carbs cause rapid blood sugar spikes and crashes, 
            contributing to mood swings and increased stress. They can also promote inflammation 
            in the body, which can worsen stress responses.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Alcohol</h3>
          <p className="text-gray-700 mb-4">
            While alcohol might temporarily seem to reduce stress, it ultimately disrupts sleep 
            patterns, affects neurotransmitter balance, and can increase anxiety and depression.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Processed Foods</h3>
          <p className="text-gray-700 mb-4">
            Highly processed foods often contain additives, preservatives, and artificial 
            ingredients that can promote inflammation and affect mood and energy levels.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Creating a Stress-Resistant Diet</h2>
          <p className="text-gray-700 mb-4">
            Building eating patterns that support stress management involves several key strategies:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Regular Meal Timing</h3>
          <p className="text-gray-700 mb-4">
            Eating regular, balanced meals helps maintain stable blood sugar levels throughout 
            the day. Skipping meals or going long periods without eating can trigger stress 
            responses in the body.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Balanced Macronutrients</h3>
          <p className="text-gray-700 mb-4">
            Each meal should ideally include a balance of protein, healthy fats, and complex 
            carbohydrates. This combination helps slow digestion, maintains steady energy levels, 
            and supports neurotransmitter production.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Hydration</h3>
          <p className="text-gray-700 mb-4">
            Dehydration can increase cortisol levels and affect cognitive function. Aim for 
            adequate water intake throughout the day, adjusting for activity level and climate.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Practical Stress-Reducing Meal Ideas</h2>
          <p className="text-gray-700 mb-4">
            Here are some meal and snack ideas that support stress management:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Breakfast Options</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li className="text-gray-700">Oatmeal topped with berries and chopped walnuts</li>
            <li className="text-gray-700">Greek yogurt with ground flaxseed and fresh fruit</li>
            <li className="text-gray-700">Avocado toast with scrambled eggs and spinach</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Lunch Options</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li className="text-gray-700">Salmon salad with mixed greens, avocado, and olive oil dressing</li>
            <li className="text-gray-700">Quinoa bowl with roasted vegetables and tahini dressing</li>
            <li className="text-gray-700">Turkey and hummus wrap with plenty of vegetables</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Stress-Relieving Snacks</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700">A small handful of almonds with dried fruit</li>
            <li className="text-gray-700">Dark chocolate (70% or higher cacao)</li>
            <li className="text-gray-700">Banana with almond butter</li>
            <li className="text-gray-700">Herbal tea with a small portion of nuts</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Mindful Eating for Stress Reduction</h2>
          <p className="text-gray-700 mb-4">
            How you eat is as important as what you eat when it comes to stress management:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700"><strong>Eat slowly:</strong> Take time to chew thoroughly and savor flavors, which aids digestion and promotes satisfaction</li>
            <li className="text-gray-700"><strong>Minimize distractions:</strong> Avoid eating while working, watching TV, or scrolling through your phone</li>
            <li className="text-gray-700"><strong>Listen to hunger cues:</strong> Eat when you're hungry and stop when satisfied, not stuffed</li>
            <li className="text-gray-700"><strong>Express gratitude:</strong> Take a moment before eating to appreciate your food</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Supplements That May Support Stress Management</h2>
          <p className="text-gray-700 mb-4">
            While whole foods should be the primary source of nutrients, certain supplements 
            may support stress management:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700"><strong>Vitamin D:</strong> Deficiency has been linked to increased stress and mood disorders</li>
            <li className="text-gray-700"><strong>B-complex vitamins:</strong> Essential for nervous system function and energy metabolism</li>
            <li className="text-gray-700"><strong>Adaptogenic herbs:</strong> Ashwagandha, rhodiola, and holy basil may help the body adapt to stress</li>
            <li className="text-gray-700"><strong>Probiotics:</strong> Support gut health and the gut-brain axis</li>
          </ul>

          <p className="text-gray-700 mt-8">
            Remember that nutrition is just one piece of the stress management puzzle. The most 
            effective approach combines healthy eating with other stress-reduction techniques 
            like regular exercise, adequate sleep, and mindfulness practices. Pay attention to 
            how different foods affect your mood and energy levels, and make adjustments 
            accordingly. Small, consistent changes to your diet can have significant impacts 
            on your ability to manage stress and maintain emotional balance.
          </p>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="mb-4 sm:mb-0">
              <h3 className="font-semibold text-gray-900 mb-2">Categories:</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Wellness</span>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Stress Management</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Nutrition</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Diet</span>
              </div>
            </div>
            <button 
              onClick={() => router.back()}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              Back to Previous Page
            </button>
          </div>
        </footer>
      </article>
    </div>
  );
}