import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import SEO from '../../components/Seo/SEO';

export default function BlogPost() {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <SEO
        title="Containerization with Docker and Kubernetes Deployment - HAM BLOGS"
        description="Best practices for containerizing applications and orchestrating with Kubernetes"
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/category/tech/cloud" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-4">
            <span className="mr-2">←</span> Back to Cloud Computing Subcategory
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
            <span>January 6, 2026</span>
            <span>•</span>
            <span>11 min read</span>
            <span>•</span>
            <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">
              Cloud Computing
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Containerization with Docker and Kubernetes Deployment
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Best practices for containerizing applications and orchestrating with Kubernetes
          </p>
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                CC
              </div>
              <div>
                <p className="text-white font-medium">HAM BLOGS Editorial Team</p>
                <p className="text-gray-400 text-sm">Cloud Infrastructure Experts</p>
              </div>
            </div>
            
            <button
              onClick={toggleBookmark}
              className={`p-3 rounded-full border transition-all duration-200 ${
                bookmarked 
                  ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400' 
                  : 'border-gray-600 bg-gray-800/50 text-gray-400 hover:border-yellow-500 hover:text-yellow-500'
              }`}
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

        <div className="prose prose-invert max-w-none">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-8">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=400&fit=crop" 
              alt="Docker and Kubernetes" 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Containerization has transformed how applications are developed, deployed, and managed in cloud environments. Docker and Kubernetes have emerged as the dominant technologies for packaging applications and orchestrating containerized workloads. This approach provides consistency across environments, improved resource utilization, and enhanced scalability compared to traditional virtualization methods.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Understanding Containerization</h2>
            <p className="text-gray-300 mb-6">
              Containers package an application and its dependencies into a lightweight, portable unit that can run consistently across different environments. Unlike virtual machines that include an entire operating system, containers share the host OS kernel, making them more efficient in terms of resource usage and startup time. Docker popularized containerization by providing a simple interface for building, packaging, and running containerized applications.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Docker Best Practices</h2>
            <p className="text-gray-300 mb-6">
              When creating Docker images, it's important to follow best practices for security and efficiency. Use multi-stage builds to reduce image size, run containers as non-root users, and implement proper layer caching. Choose minimal base images like Alpine Linux to reduce the attack surface. Regularly update base images to incorporate security patches and optimize for the smallest possible image size.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Kubernetes Architecture</h2>
            <p className="text-gray-300 mb-6">
              Kubernetes is a container orchestration platform that automates deployment, scaling, and management of containerized applications. It abstracts underlying infrastructure and provides services like service discovery, load balancing, storage orchestration, and self-healing. Kubernetes clusters consist of master nodes that manage the cluster and worker nodes that run containerized applications.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Deployment Strategies</h2>
            <p className="text-gray-300 mb-6">
              Kubernetes offers various deployment strategies to minimize downtime and risk during application updates. Rolling updates gradually replace old pods with new ones, blue-green deployments maintain two identical environments, and canary deployments route a small percentage of traffic to new versions. Each strategy has trade-offs in terms of complexity, risk, and downtime.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Service Mesh and Networking</h2>
            <p className="text-gray-300 mb-6">
              As applications become more distributed, managing communication between services becomes complex. Service meshes like Istio and Linkerd provide traffic management, security, and observability features for microservices architectures. They handle service-to-service communication, implement security policies, and provide detailed metrics and tracing.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Security Considerations</h2>
            <p className="text-gray-300 mb-6">
              Containerized environments introduce new security challenges that must be addressed. Implement image scanning to detect vulnerabilities, use secrets management for sensitive data, and apply network policies to control traffic between pods. Regular security audits and compliance checks are essential for maintaining a secure containerized infrastructure.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Monitoring and Observability</h2>
            <p className="text-gray-300 mb-6">
              Containerized applications require specialized monitoring tools to track performance, resource usage, and application health. Solutions like Prometheus, Grafana, and ELK stack provide comprehensive monitoring capabilities. Distributed tracing tools like Jaeger help understand request flows across microservices, while logging solutions aggregate logs from multiple containers for analysis.
            </p>
            
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-white mb-3">Implementation Best Practices</h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Implement proper resource limits and requests
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Use health checks and liveness probes
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Apply the principle of least privilege for containers
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Implement proper backup and disaster recovery
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Use configuration management for environment-specific settings
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-700">
          <Link href="/category/tech/cloud" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium">
            Browse More Cloud Computing Articles
          </Link>
          <Link href="/blog" className="bg-white/10 text-white px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-all">
            View All Blog Posts
          </Link>
        </div>
      </div>
    </div>
  );
}