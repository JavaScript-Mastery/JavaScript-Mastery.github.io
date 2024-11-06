import Link from '@docusaurus/Link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // React Icon for Arrow

const GetStarted: React.FC = () => {
  return (
    <section className="py-20 bg-blue-500 dark:bg-blue-700 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Get Started Today!
        </h2>
        <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
          Take the first step towards mastering JavaScript with our interactive courses and hands-on projects. Join thousands of learners who are already on their journey to becoming JavaScript experts.
        </p>
        <Link
          to="/docs/"
          className="inline-flex items-center justify-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold rounded-lg shadow-md transition-colors duration-300"
        >
          Get Started
          <FaArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
};

export default GetStarted;