import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function TheatreTechnologyInnovationStageDesign() {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string | null}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // FAQ data
  const faqs = [
    {
      question: "How is technology changing modern theater?",
      answer: "Technology is revolutionizing theater through projection mapping, holographic displays, LED screens, motion sensors, and immersive sound systems. These innovations allow for more dynamic staging, seamless scene changes, and interactive experiences that were previously impossible."
    },
    {
      question: "Does technology enhance or detract from theatrical performances?",
      answer: "When used thoughtfully, technology enhances storytelling by creating environments and effects that support the narrative. However, it should never overshadow the human elements of theater. The best uses of technology serve the story rather than drawing attention to themselves."
    },
    {
      question: "What are some examples of innovative stage technologies?",
      answer: "Examples include 360-degree projection mapping, holographic performers, interactive LED floors, motion-activated lighting, spatial audio systems, and virtual set pieces that can change instantly during performances."
    },
    {
      question: "How do theaters integrate technology with traditional stagecraft?",
      answer: "The most successful productions blend technology with traditional stagecraft, using digital elements to enhance practical sets, props, and costumes. This combination allows for both the tactile authenticity of physical elements and the limitless possibilities of digital ones."
    },
    {
      question: "What impact does technology have on theater accessibility?",
      answer: "Technology has improved accessibility through assistive listening devices, captioning systems, audio description services, and virtual reality experiences that allow remote access to performances for those unable to attend in person."
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "What is a primary benefit of integrating technology in theater?",
      options: [
        "To replace human performers",
        "To create dynamic staging and seamless scene changes",
        "To eliminate the need for set design",
        "To increase ticket prices"
      ],
      correctAnswer: "To create dynamic staging and seamless scene changes"
    },
    {
      question: "How should technology ideally function in a theatrical production?",
      options: [
        "To draw attention to itself",
        "To serve the story rather than overshadowing it",
        "To replace traditional storytelling",
        "To make productions cheaper"
      ],
      correctAnswer: "To serve the story rather than overshadowing it"
    }
  ];

  const handleQuizAnswer = (questionIndex: number, answer: string) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionIndex]: answer
    });
  };

  const submitQuiz = () => {
    setQuizSubmitted(true);
  };

  const calculateScore = () => {
    let correct = 0;
    quizQuestions.forEach((q, index) => {
      if (quizAnswers[index] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Head>
        <title>Theatre Technology: Innovation in Stage Design and Effects | HAM-BLOGS</title>
        <meta name="description" content="How modern technology is enhancing stage productions and creating new possibilities for theatrical experiences." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <button 
            onClick={() => router.back()} 
            className="flex items-center text-orange-600 hover:text-orange-800 transition-colors duration-200"
          >
            <span className="mr-2">←</span> Back to Articles
          </button>
          <div>
            <button
              onClick={toggleBookmark}
              className={`p-2 rounded-full ${bookmarked ? 'text-orange-500' : 'text-gray-400'} hover:text-orange-500 transition-colors duration-200`}
              aria-label={bookmarked ? "Remove bookmark" : "Bookmark article"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={bookmarked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <article className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="p-8">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-orange-700 bg-orange-100 rounded-full">Theatre</span>
              <span className="inline-block px-3 py-1 ml-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-full">Technology</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Theatre Technology: Innovation in Stage Design and Effects</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">January 5, 2026</span>
              <span className="mr-4">•</span>
              <span>8 min read</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                The landscape of theatrical production has undergone a dramatic transformation in recent years, with technology playing an increasingly vital role in enhancing storytelling, creating immersive environments, and pushing the boundaries of what's possible on stage. From Broadway to regional theaters, innovative stage technologies are revolutionizing the way audiences experience live performance, creating new possibilities that blend the magic of theater with the marvels of modern technology.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Projection Mapping and Visual Environments</h2>
              
              <p className="text-gray-700 mb-4">
                Projection mapping has emerged as one of the most transformative technologies in contemporary theater. This technique allows designers to project images onto irregular surfaces, transforming static sets into dynamic, ever-changing environments. The recent Broadway revival of "The Lion King" incorporated projection mapping to create breathtaking African landscapes that shifted seamlessly from savanna to jungle, enhancing the magical realism of the production.
              </p>
              
              <p className="text-gray-700 mb-4">
                At the National Theatre in London, their production of "War Horse" used projection mapping to create the devastating battlefields of World War I, with the projections interacting dynamically with the iconic puppetry that defines the show. This combination of traditional craftsmanship and cutting-edge technology created a visceral experience that transported audiences directly into the conflict.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Holographic Performances and Digital Characters</h3>
              
              <p className="text-gray-700 mb-4">
                Perhaps one of the most striking technological innovations in recent theater has been the use of holographic performers. The Broadway production of "Back to the Future: The Musical" featured a holographic representation of Doc Brown in his laboratory, creating the illusion that the character existed in multiple places simultaneously. This technology allowed for impossible staging choices that served the narrative perfectly.
              </p>
              
              <p className="text-gray-700 mb-4">
                Similarly, the touring production of "Ghost the Musical" employed Pepper's Ghost technique combined with modern projection technology to create convincing illusions of Patrick Swayze's character appearing as a spirit, moving through walls and defying physical laws in ways that supported the story's supernatural elements.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Interactive Stage Elements</h2>
              
              <p className="text-gray-700 mb-4">
                Modern theaters are increasingly incorporating interactive elements that respond to performers' movements and actions. The Kennedy Center's production of "The Nutcracker" featured an interactive floor that responded to dancers' movements with cascading light effects, creating the impression that snowflakes were falling and swirling around the performers in real-time.
              </p>
              
              <p className="text-gray-700 mb-4">
                Motion sensors embedded in set pieces allow for lighting and sound effects that activate based on performers' positions, creating a truly responsive environment that adapts to each performance. This technology was used effectively in the off-Broadway production "The Encounter," where the entire soundscape responded to the actor's movements, creating an immersive audio experience.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Advanced Lighting Systems</h3>
              
              <p className="text-gray-700 mb-4">
                LED technology has revolutionized theatrical lighting, offering designers unprecedented control over color, intensity, and movement. Modern LED systems can create subtle atmospheric shifts or dramatic effects instantly, without the heat and energy consumption of traditional lighting.
              </p>
              
              <p className="text-gray-700 mb-4">
                The Broadway production of "Hamilton" utilized advanced LED lighting systems to create rapid scene changes and to highlight the multicultural casting, with lighting that reflected the diverse musical styles incorporated in the score. The lighting design became an integral part of the storytelling, changing color and intensity to reflect the emotional beats of the narrative.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Spatial Audio and Sound Design</h2>
              
              <p className="text-gray-700 mb-4">
                Spatial audio systems allow sound designers to create three-dimensional soundscapes that move around the audience, immersing them completely in the world of the play. The recent production of "The Curious Incident of the Dog in the Night-Time" used spatial audio to simulate the sensory experience of autism, with sounds coming from specific locations to represent the protagonist's unique perception of the world.
              </p>
              
              <p className="text-gray-700 mb-4">
                Advanced sound systems can also create personalized audio experiences for audience members with hearing impairments, providing clearer dialogue and sound effects that enhance rather than distract from the live performance.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Augmented Reality for Audience Engagement</h3>
              
              <p className="text-gray-700 mb-4">
                Some theaters are experimenting with augmented reality applications that allow audience members to access additional content during performances. The Geffen Playhouse in Los Angeles developed an AR app for their production of "The Nether," which provided contextual information about the virtual world depicted in the play without interrupting the performance.
              </p>
              
              <p className="text-gray-700 mb-4">
                These applications can also provide educational content, character backstories, or historical context that enhances the audience's understanding and appreciation of the production.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Virtual and Mixed Reality Experiences</h2>
              
              <p className="text-gray-700 mb-4">
                While still emerging, virtual and mixed reality technologies are beginning to influence theater. Some productions now offer VR experiences as part of the marketing campaign, allowing potential audience members to explore the set design or experience key scenes in immersive environments.
              </p>
              
              <p className="text-gray-700 mb-4">
                The Royal Shakespeare Company has experimented with mixed reality to create pre-show experiences that allow audiences to explore the historical settings of plays like "Julius Caesar" in virtual recreations of ancient Rome, enhancing their understanding and engagement with the material.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Accessibility Innovations</h3>
              
              <p className="text-gray-700 mb-4">
                Technology has dramatically improved accessibility in theater. Real-time captioning systems now provide accurate text display of dialogue and sound effects for deaf and hard-of-hearing patrons. Audio description services use sophisticated systems to provide detailed descriptions of visual elements without interfering with the performance.
              </p>
              
              <p className="text-gray-700 mb-4">
                Some theaters now offer sensory-friendly performances with adjusted lighting and sound levels for patrons with sensory sensitivities, along with specialized technology that helps create a comfortable environment for neurodivergent audience members.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Balancing Innovation with Tradition</h2>
              
              <p className="text-gray-700 mb-4">
                The most successful implementations of technology in theater serve the story rather than overshadowing the human elements that make live performance special. The best productions use technology as a tool to enhance the emotional impact and storytelling, never replacing the essential connection between performer and audience.
              </p>
              
              <p className="text-gray-700 mb-4">
                As technology continues to evolve, the challenge for theater artists remains the same: using these tools to serve the story and deepen the audience's emotional engagement, while preserving the irreplaceable magic of live performance.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Future Possibilities</h2>
              
              <p className="text-gray-700 mb-4">
                The future of theater technology promises even more exciting innovations. Artificial intelligence is being explored for real-time adaptation of performances based on audience reactions, while advances in haptic technology may soon allow audiences to feel elements of the performance.
              </p>
              
              <p className="text-gray-700 mb-4">
                As these technologies become more sophisticated and accessible, theaters worldwide will continue to find new and innovative ways to enhance storytelling while maintaining the essential human connection that makes theater unique among entertainment mediums.
              </p>
            </div>
          </div>
        </article>

        {/* Quiz Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Test Your Knowledge</h2>
          
          <div className="space-y-6">
            {quizQuestions.map((q, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{q.question}</h3>
                <div className="space-y-2">
                  {q.options.map((option, optIndex) => (
                    <div key={optIndex} className="flex items-center">
                      <input
                        type="radio"
                        id={`q${index}_opt${optIndex}`}
                        name={`question${index}`}
                        checked={quizAnswers[index] === option}
                        onChange={() => handleQuizAnswer(index, option)}
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500"
                        disabled={quizSubmitted}
                      />
                      <label 
                        htmlFor={`q${index}_opt${optIndex}`} 
                        className="ml-3 block text-gray-700"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <button
            onClick={submitQuiz}
            disabled={quizSubmitted}
            className={`mt-4 px-6 py-3 rounded-lg font-medium ${
              quizSubmitted 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-200'
            }`}
          >
            {quizSubmitted ? 'Quiz Submitted' : 'Submit Answers'}
          </button>
          
          {quizSubmitted && (
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Results</h3>
              <p className="text-green-700">
                You scored {calculateScore()} out of {quizQuestions.length} correct!
              </p>
            </div>
          )}
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full text-left py-2 focus:outline-none"
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  <svg 
                    className={`h-5 w-5 text-orange-500 transform transition-transform duration-200 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {expandedFaq === index && (
                  <div className="mt-2 text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>© 2026 HAM-BLOGS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}