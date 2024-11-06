import React from 'react';
import Link from '@docusaurus/Link';

interface Course {
  title: string;
  description: string;
  link: string;
}

const courses: Course[] = [
  {
    title: 'JavaScript Basics',
    description: 'Get started with JavaScript fundamentals and build a strong foundation.',
    link: '#',
  },
  {
    title: 'Advanced JavaScript',
    description: 'Deepen your understanding with advanced topics like closures, prototypes, and async programming.',
    link: '#',
  },
  {
    title: 'JavaScript for Web Development',
    description: 'Learn how to build dynamic web applications with JavaScript, HTML, and CSS.',
    link: '#',
  },
  {
    title: 'Node.js Essentials',
    description: 'Master back-end JavaScript and create powerful server-side applications with Node.js.',
    link: '#',
  },
  {
    title: 'JavaScript Libraries & Frameworks',
    description: 'Explore popular libraries and frameworks like React, Vue, and Angular.',
    link: '#',
  },
  {
    title: 'Full-Stack JavaScript',
    description: 'Combine front-end and back-end skills to become a full-stack JavaScript developer.',
    link: '#',
  },
];

const Courses: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
          Courses & Learning Paths
        </h2>
        <p className="text-lg lg:text-xl text-center mb-12">
          Discover comprehensive courses and learning paths to take you from JavaScript beginner to pro. Start your journey today!
        </p>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {courses.map((course, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col">
              <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
              <p className="flex-grow mb-6">{course.description}</p>
              <Link
                to={course.link}
                className="mt-auto inline-block px-5 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-center transition duration-300"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
