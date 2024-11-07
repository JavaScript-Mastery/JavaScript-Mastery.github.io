import React from 'react';
import Link from '@docusaurus/Link';

const Hero: React.FC = () => {
  return (
    <section className="noise-bg grid grid-cols-1 lg:grid-cols-2 min-h-screen gap-8 items-center px-6">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
          Master JavaScript with <span className="text-yellow-300 dark:text-yellow-400">Confidence</span>
        </h1>
        <p className="text-lg lg:text-xl opacity-90 mb-8">
          Join thousands of learners in mastering JavaScript from basics to advanced topics. Start your journey to becoming a JavaScript pro today!
        </p>
        <Link to="/docs/">
          <button className="px-8 py-3 bg-yellow-300 dark:bg-yellow-500 text-blue-700 dark:text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-400 dark:hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:-translate-y-1 border-none">
            Get Started
          </button>
        </Link>
      </div>
      
      <div className="mt-8 lg:mt-0 mx-auto">
        <img src="/img/js.svg" alt="JavaScript Learning" className="w-64 lg:w-80" />
      </div>
    </section>
  );
};

export default Hero;
