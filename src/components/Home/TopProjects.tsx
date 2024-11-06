import React from 'react';
import Link from '@docusaurus/Link';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: 'Interactive Quiz App',
    description: 'A fun and engaging quiz app to test your knowledge on various topics.',
    techStack: ['JavaScript', 'React', 'CSS'],
    link: '#', // /projects/quiz-app
  },
  {
    title: 'Weather Dashboard',
    description: 'A real-time weather dashboard using APIs to fetch data for any location.',
    techStack: ['JavaScript', 'Node.js', 'Tailwind CSS'],
    link: '#', // /projects/weather-dashboard
  },
  {
    title: 'E-commerce Store',
    description: 'A fully functional e-commerce store with a shopping cart, product pages, and checkout.',
    techStack: ['JavaScript', 'React', 'Express'],
    link: '#', // /projects/ecommerce-store
  },
  {
    title: 'To-Do List App',
    description: 'A simple to-do app that helps users keep track of tasks and stay organized.',
    techStack: ['JavaScript', 'Vue.js', 'CSS'],
    link: '#', // /projects/todo-list
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase projects, skills, and experience.',
    techStack: ['JavaScript', 'Next.js', 'Tailwind CSS'],
    link: '#', // /projects/portfolio-website
  },
  {
    title: 'Chat Application',
    description: 'A real-time chat application with user authentication and private messaging.',
    techStack: ['JavaScript', 'React', 'Socket.io'],
    link: '#', // /projects/chat-app
  },
];

const TopProjects: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
          Top Projects
        </h2>
        <p className="text-lg lg:text-xl text-center mb-12 max-w-2xl mx-auto">
          Explore our collection of hands-on JavaScript projects designed to help you learn and apply new skills in real-world scenarios.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium dark:bg-indigo-900 dark:text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                to={project.link}
                className="mt-auto inline-block px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 rounded-lg text-center transition duration-300"
              >
                View Project
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProjects;