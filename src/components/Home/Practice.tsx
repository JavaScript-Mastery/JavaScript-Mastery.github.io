import React from 'react';
import Link from '@docusaurus/Link';

interface Challenge {
  title: string;
  description: string;
  link: string;
}

const challenges: Challenge[] = [
  {
    title: 'Beginner Challenges',
    description: 'Perfect for those starting out. Practice basic JavaScript concepts with hands-on exercises.',
    link: '#', // /challenges/beginner
  },
  {
    title: 'Intermediate Challenges',
    description: 'Level up your skills with more complex exercises covering functions, arrays, and objects.',
    link: '#', // /challenges/intermediate
  },
  {
    title: 'Advanced Challenges',
    description: 'Push your limits with advanced coding problems, focusing on algorithms and performance.',
    link: '#', // /challenges/advanced
  },
  {
    title: 'JavaScript Quiz',
    description: 'Test your knowledge and identify areas for improvement with our interactive JavaScript quiz.',
    link: '#', // /challenges/quiz
  },
  {
    title: 'Code Wars',
    description: 'Compete with others in real-time coding challenges and climb the leaderboard!',
    link: '#', // /challenges/code-wars
  },
  {
    title: 'Daily Code Challenge',
    description: 'Stay sharp with a new coding challenge every day. Perfect for daily practice.',
    link: '#', // /challenges/daily
  },
];

const Practice: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-500 via-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-8 tracking-tight">
          Interactive Practice & Code Challenges
        </h2>
        <p className="text-lg lg:text-xl text-center mb-12 max-w-3xl mx-auto">
          Strengthen your JavaScript skills with interactive practice challenges designed to make learning fun and engaging.
          Tackle real-world problems, test your knowledge, and grow as a developer.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-3">{challenge.title}</h3>
              <p className="flex-grow mb-6">{challenge.description}</p>
              <Link
                to={challenge.link}
                className="mt-auto inline-block px-5 py-3 text-white bg-gradient-to-r from-blue-500 to-teal-400 hover:from-teal-400 hover:to-blue-500 rounded-lg text-center transition-transform duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Start Challenge
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Practice;
