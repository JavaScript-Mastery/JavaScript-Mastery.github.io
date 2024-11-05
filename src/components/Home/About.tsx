import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
          About JavaScript Mastery
        </h2>
        <p className="text-lg lg:text-xl text-center mb-6">
          At JavaScript Mastery, we believe in empowering learners to become proficient in JavaScript through engaging and interactive learning experiences.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-start">
          <div className="max-w-sm lg:max-w-md mx-auto mb-6 lg:mb-0 lg:mr-6 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Interactive Learning</h3>
            <p>
              Dive into hands-on projects that help solidify your understanding of JavaScript concepts and techniques.
            </p>
          </div>
          <div className="max-w-sm lg:max-w-md mx-auto mb-6 lg:mb-0 lg:mr-6 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Community Support</h3>
            <p>
              Join a vibrant community of learners and experienced developers who are eager to share knowledge and support each other.
            </p>
          </div>
          <div className="max-w-sm lg:max-w-md mx-auto mb-6 lg:mb-0 lg:mr-6 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Flexible Learning Path</h3>
            <p>
              Choose your own learning journey, whether you're starting from scratch or looking to deepen your existing skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
