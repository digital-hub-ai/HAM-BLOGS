import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const DesignThinkingProcessInnovationFramework = () => {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [activeQuiz, setActiveQuiz] = useState<number | null>(null);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
    // Here you could save to localStorage or send to backend
    alert(`Blog ${!bookmarked ? 'added to' : 'removed from'} bookmarks`);
  };

  const quizQuestions = [
    {
      question: "What is the first stage of the Design Thinking process?",
      options: [
        "Ideation",
        "Empathize",
        "Prototype",
        "Test"
      ],
      answer: "Empathize"
    },
    {
      question: "Which of the following is a key principle of Design Thinking?",
      options: [
        "Focus on technology first",
        "Rapid prototyping and iteration",
        "Avoid user feedback",
        "Linear process approach"
      ],
      answer: "Rapid prototyping and iteration"
    },
    {
      question: "What does the 'Define' phase in Design Thinking involve?",
      options: [
        "Creating final products",
        "Identifying and framing the problem",
        "Testing prototypes",
        "Gathering user feedback"
      ],
      answer: "Identifying and framing the problem"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>Design Thinking Process & Innovation Framework | Industrial Design Blog</title>
        <meta name="description" content="Explore the design thinking process and innovation frameworks that drive successful product development and creative problem-solving." />
        <meta name="keywords" content="design thinking, innovation framework, product development, creative problem-solving, ideation, empathy mapping, prototyping, user-centered design" />
        <link rel="canonical" href="https://ham-blogs.vercel.app/blog/design-thinking-process-innovation-framework" />
        <meta property="og:title" content="Design Thinking Process & Innovation Framework | Industrial Design Blog" />
        <meta property="og:description" content="Explore the design thinking process and innovation frameworks that drive successful product development and creative problem-solving." />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Design Thinking Process & Innovation Framework | Industrial Design Blog" />
        <meta name="twitter:description" content="Explore the design thinking process and innovation frameworks that drive successful product development and creative problem-solving." />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">Design Thinking Process & Innovation Framework</h1>
          <div className="flex items-center mt-2 text-gray-600">
            <span>Published: January 10, 2026</span>
            <span className="mx-2">•</span>
            <span>10 min read</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-start">
            <button 
              onClick={toggleBookmark}
              className={`px-4 py-2 rounded-lg transition-colors ${
                bookmarked 
                  ? 'bg-red-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {bookmarked ? 'Remove Bookmark' : 'Add Bookmark'}
            </button>
            
            <button 
              onClick={() => router.back()}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Back to Category
            </button>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction to Design Thinking</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Design thinking is a human-centered approach to innovation that draws from the designer's toolkit to integrate the needs of people, the possibilities of technology, and the requirements for business success. It's a methodology that helps organizations tackle complex problems by understanding user needs, challenging assumptions, and redefining problems to identify alternative strategies and solutions.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              In the context of industrial design, design thinking serves as a foundational framework for creating products that truly resonate with users. It emphasizes empathy, experimentation, and iteration as key drivers of innovation. This approach has become increasingly valuable as companies recognize the importance of user experience in product success.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Five Stages of Design Thinking</h2>
            <h3 className="text-xl font-medium text-gray-700 mb-3">1. Empathize</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The first stage involves gaining an empathetic understanding of the problem you're trying to solve. This involves consulting experts and engaging with users to observe, engage, and immerse yourself in their experiences. The goal is to understand the user's perspective and their emotional journey.
            </p>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">2. Define</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              In this stage, you analyze your observations and synthesize them to define the core problems identified during the empathy stage. You'll create a problem statement that frames the right questions and focuses your efforts on the most critical issues.
            </p>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">3. Ideate</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              This is where you start generating ideas. Brainstorming sessions encourage wild ideas and defer judgment. The goal is to look for alternative ways to view the problem and identify innovative solutions that might not be instantly obvious.
            </p>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">4. Prototype</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Creating scaled-down versions of the product or specific features found within the product allows designers to investigate the problem solutions generated in the previous stage. Prototypes might consist of paper, cardboard, digital mockups, or even 3D printed models.
            </p>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">5. Test</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Rigorously testing the complete product using the best solutions identified in the previous stage. Although this is the final stage, it's often iterative, meaning you'll return to previous stages to make adjustments and refinements based on user feedback.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Innovation Frameworks in Product Development</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While design thinking provides the human-centered foundation, innovation frameworks offer structured approaches to bring ideas to market. These frameworks complement design thinking by providing systematic methods for evaluating feasibility, desirability, and viability of innovations.
            </p>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">Lean Startup Methodology</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              This framework emphasizes rapid experimentation and learning through the Build-Measure-Learn cycle. It encourages creating minimum viable products (MVPs) to test assumptions quickly and pivot when necessary.
            </p>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">Stage-Gate Process</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              A structured approach that divides the innovation process into distinct phases separated by decision points (gates). Each gate evaluates whether the project meets predetermined criteria before advancing to the next stage.
            </p>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">Blue Ocean Strategy</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              This framework focuses on creating uncontested market spaces rather than competing in existing markets. It emphasizes value innovation that simultaneously pursues differentiation and low cost.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Implementing Design Thinking in Organizations</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Successful implementation of design thinking requires cultural change and organizational commitment. Companies need to foster an environment that embraces failure as learning, encourages collaboration across departments, and prioritizes user needs in decision-making.
            </p>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">Building a Design Culture</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Organizations must cultivate a culture that values design thinking principles. This includes training employees, creating cross-functional teams, and establishing processes that integrate design thinking into business strategy.
            </p>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">Measuring Success</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Success metrics for design thinking initiatives should include both quantitative measures (user satisfaction scores, conversion rates, time to market) and qualitative measures (empathy levels, collaboration quality, innovation capacity).
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Case Studies in Design Thinking</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many successful companies have leveraged design thinking to create breakthrough products and services. From Apple's intuitive user interfaces to Airbnb's transformation of travel experiences, design thinking has proven its value across industries.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              IBM has invested heavily in design thinking, training thousands of employees and integrating the methodology into their software development process. Their approach emphasizes bringing together multidisciplinary teams early in the process to ensure user needs are addressed from the beginning.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tools and Techniques for Design Thinking</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Several tools and techniques support the design thinking process, from empathy maps and user personas to journey mapping and rapid prototyping tools. Digital platforms like Figma, Sketch, and InVision facilitate collaborative design and remote team work.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Physical prototyping tools like 3D printers, laser cutters, and traditional model-making materials remain essential for industrial design applications where tactile experience is crucial to the design process.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-500 pl-4 py-2">
                <h3 className="font-medium text-gray-800">How does design thinking differ from traditional problem-solving?</h3>
                <p className="text-gray-700 mt-1">Traditional problem-solving often starts with defining the problem and then finding solutions. Design thinking begins with understanding users and their needs, often revealing problems that weren't initially apparent. It's more iterative and experimental.</p>
              </div>
              
              <div className="border-l-4 border-indigo-500 pl-4 py-2">
                <h3 className="font-medium text-gray-800">Can design thinking be applied to non-design fields?</h3>
                <p className="text-gray-700 mt-1">Absolutely. Design thinking has been successfully applied in business, education, healthcare, government, and social innovation. Its human-centered approach is valuable wherever people interact with systems, processes, or services.</p>
              </div>
              
              <div className="border-l-4 border-indigo-500 pl-4 py-2">
                <h3 className="font-medium text-gray-800">How long does a typical design thinking project take?</h3>
                <p className="text-gray-700 mt-1">The timeline varies greatly depending on the complexity of the problem and the scope of the project. Simple projects might take a few weeks, while complex organizational transformations can take months or even years. The key is to iterate quickly in cycles.</p>
              </div>
              
              <div className="border-l-4 border-indigo-500 pl-4 py-2">
                <h3 className="font-medium text-gray-800">What skills are needed to practice design thinking?</h3>
                <p className="text-gray-700 mt-1">Essential skills include empathy, creativity, collaboration, and analytical thinking. Practitioners should be comfortable with ambiguity, willing to experiment, and skilled at synthesizing information from diverse sources.</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Interactive Quiz: Test Your Knowledge</h2>
            <p className="text-gray-700 mb-4">Test your understanding of design thinking and innovation frameworks:</p>
            
            {quizQuestions.map((questionObj, index) => (
              <div key={index} className="mb-6 bg-gray-50 p-4 rounded-lg">
                <p className="font-medium text-gray-800">{index + 1}. {questionObj.question}</p>
                <div className="mt-2 space-y-2">
                  {questionObj.options.map((option, optionIndex) => (
                    <div key={optionIndex}>
                      <input 
                        type="radio" 
                        id={`q${index}-o${optionIndex}`} 
                        name={`question${index}`} 
                        className="mr-2"
                        onChange={() => {}}
                      />
                      <label htmlFor={`q${index}-o${optionIndex}`} className="text-gray-700">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
                <button 
                  className="mt-2 px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700"
                  onClick={() => setActiveQuiz(prev => prev === index ? null : index)}
                >
                  {activeQuiz === index ? 'Hide Answer' : 'Show Answer'}
                </button>
                {activeQuiz === index && (
                  <div className="mt-2 p-2 bg-green-100 text-green-800 rounded">
                    Correct answer: {questionObj.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Resources</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><a href="#" className="text-indigo-600 hover:underline">Stanford d.school Design Thinking Bootleg</a></li>
              <li><a href="#" className="text-indigo-600 hover:underline">IDEO's Design Thinking Resources</a></li>
              <li><a href="#" className="text-indigo-600 hover:underline">"Change by Design" by Tim Brown</a></li>
              <li><a href="#" className="text-indigo-600 hover:underline">Design Thinking Case Studies Database</a></li>
              <li><a href="#" className="text-indigo-600 hover:underline">Human-Centered Design Toolkit</a></li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Design thinking and innovation frameworks provide structured approaches to tackle complex challenges and create meaningful solutions. By combining empathy with creativity and rationality, these methodologies enable designers and organizations to develop products and services that truly meet human needs.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              As industrial design continues to evolve, the integration of design thinking with emerging technologies and methodologies will shape the future of product development. The key to success lies in maintaining a human-centered focus while embracing iterative experimentation and continuous learning.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 Industrial Design Blog. All rights reserved.</p>
          <p className="mt-2 text-gray-400">Exploring the intersection of design, innovation, and user experience.</p>
        </div>
      </footer>
    </div>
  );
};

export default DesignThinkingProcessInnovationFramework;