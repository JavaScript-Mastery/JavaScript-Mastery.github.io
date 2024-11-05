import React from 'react';

const WhyLearnJavaScript: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
          Why Learn JavaScript?
        </h2>
        <p className="text-lg lg:text-xl text-center mb-12">
          JavaScript is one of the most popular and versatile programming languages today. Here’s why you should start learning JavaScript:
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {/* Feature 1 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3">High Demand in the Job Market</h3>
            <p>
              JavaScript skills are highly valued, opening doors to careers in web development, mobile app development, and even backend programming.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3">Versatility Across Platforms</h3>
            <p>
              JavaScript powers both frontend and backend development, enabling you to create dynamic websites, server applications, and mobile apps.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3">Thriving Community and Resources</h3>
            <p>
              JavaScript has a vast community and extensive resources, providing endless support for both beginners and experienced developers.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3">Constantly Evolving Language</h3>
            <p>
              JavaScript continues to grow and adapt with new frameworks and tools, keeping it relevant and exciting in the tech industry.
            </p>
          </div>
          
          {/* Feature 5 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3">Foundation for Frontend Frameworks</h3>
            <p>
              Mastering JavaScript provides a strong foundation for popular frameworks like React, Vue, and Angular, used widely in modern web development.
            </p>
          </div>
          
          {/* Feature 6 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3">Enhanced Problem-Solving Skills</h3>
            <p>
              Learning JavaScript enhances your problem-solving abilities as you build interactive applications and tackle real-world challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLearnJavaScript;