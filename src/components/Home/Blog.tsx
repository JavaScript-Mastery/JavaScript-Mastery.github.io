import React from "react";
import { FaBookOpen, FaNewspaper, FaImages } from "react-icons/fa";

import Link from "@docusaurus/Link";

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "Getting Started with JavaScript",
      description:
        "Learn the fundamentals of JavaScript and how to set up your development environment.",
      icon: (
        <FaBookOpen className="h-12 w-12 text-blue-500 dark:text-yellow-400 mb-4" />
      ),
      link: "#", // /blog/getting-started-with-js
    },
    {
      title: "Advanced JavaScript Techniques",
      description:
        "Explore advanced topics in JavaScript, such as closures, async programming, and more.",
      icon: (
        <FaNewspaper className="h-12 w-12 text-blue-500 dark:text-yellow-400 mb-4" />
      ),
      link: "#", // /blog/advanced-js-techniques
    },
    {
      title: "JavaScript Tools & Libraries",
      description:
        "Discover powerful tools and libraries to streamline your JavaScript development process.",
      icon: (
        <FaImages className="h-12 w-12 text-blue-500 dark:text-yellow-400 mb-4" />
      ),
      link: "#", // /blog/js-tools-and-libraries
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12">
          Blog & Resources
        </h2>
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
          Stay updated with the latest JavaScript trends, tutorials, and tips
          from our expert team.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              to={post.link}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transform hover:scale-105 transition duration-300"
            >
              {post.icon}
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-12">
          <a
            href="/blog"
            className="text-blue-600 dark:text-yellow-400 font-semibold text-lg underline hover:text-blue-700 dark:hover:text-yellow-500"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
