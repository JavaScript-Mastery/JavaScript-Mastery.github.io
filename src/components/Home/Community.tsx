import React from 'react';
import Link from '@docusaurus/Link';
import { FaComments, FaUsers, FaChalkboardTeacher, FaHeadset } from 'react-icons/fa'; // React Icons

interface Feature {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>; // This type remains the same
  link: string;
}

const features: Feature[] = [
  {
    title: 'Community Forums',
    description:
      'Engage with fellow learners and experienced developers. Share knowledge, ask questions, and collaborate on projects.',
    icon: FaComments, // Replacing ChatAlt2Icon with FaComments
    link: '#', // /community/forums
  },
  {
    title: 'Live Chat Groups',
    description:
      'Join real-time discussions in our chat groups. Stay updated with the latest trends and get instant help when you need it.',
    icon: FaUsers, // Replacing UsersIcon with FaUsers
    link: '#', // /community/chat
  },
  {
    title: 'Expert Mentorship',
    description:
      'Receive guidance from industry experts. Our mentors are here to help you navigate your learning journey and achieve your goals.',
    icon: FaChalkboardTeacher, // Replacing AcademicCapIcon with FaChalkboardTeacher
    link: '#',
  },
  {
    title: '24/7 Support',
    description:
      'Access our support team anytime. Whether you have technical issues or need assistance with your learning path, we’re here to help.',
    icon: FaHeadset, // Replacing SupportIcon with FaHeadset
    link: '#',
  },
];

const Community: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <div className="container px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
          Community & Support
        </h2>
        <p className="text-lg lg:text-xl text-center mb-12">
          Join our vibrant community and take advantage of comprehensive support to enhance your learning experience. Connect, collaborate, and grow with JavaScript Mastery.
        </p>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <feature.icon className="h-12 w-12 text-blue-500 dark:text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="flex-grow mb-4">{feature.description}</p>
              <Link
                to={feature.link}
                className="mt-auto inline-block px-4 py-2 bg-blue-500 dark:bg-yellow-400 text-white dark:text-gray-800 font-semibold rounded-lg shadow-md hover:bg-blue-600 dark:hover:bg-yellow-500 transition-colors duration-300"
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

export default Community;
