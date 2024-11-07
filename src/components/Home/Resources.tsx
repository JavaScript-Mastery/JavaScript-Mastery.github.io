import Link from '@docusaurus/Link';
import React, { useState } from 'react';
import clsx from 'clsx';
import {
  ArrowRightFilled,
  ChevronLeftRegular,
  ChevronRightRegular,
} from '@fluentui/react-icons';

interface Resource {
  url: string;
  type: string;
  title: string;
  description: string;
  image: string;
  duration: string;
}

const ALL_RESOURCES: Resource[] = [
  {
    url: '#',
    type: 'blog',
    title: 'Understanding JavaScript Basics',
    description: 'Dive deep into JavaScript fundamentals and learn how to build strong foundations.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSLhnOqoi6_NSvoi5V2AiKBA9TDu5P1VC7Qg&s',
    duration: '4 min',
  },
  {
    url: '#',
    type: 'blog',
    title: 'Mastering Advanced JavaScript',
    description: 'Explore closures, prototypal inheritance, and more advanced concepts.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkeIopbzkAcHCFKGI3-NgmI58Lc_0TdBKdnA&s',
    duration: '8 min',
  },
  {
    url: '#',
    type: 'video',
    title: 'Building Your First React App',
    description: 'A step-by-step guide to creating a React app from scratch.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyu8qQx0A4YvBCKh3DiXYo4wa1wKiXmWeoFw&s',
    duration: '15 min',
  },
  {
    url: '#',
    type: 'course',
    title: 'JavaScript Complete Guide',
    description: 'A comprehensive course that covers all aspects of JavaScript.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-gKyoKXm7UMudEcMcnkeFLnrfgbp08Bsnw&s',
    duration: '20 hours',
  },
];

function Resource({
  type,
  url,
  image,
  title,
  description,
  duration,
}: Resource) {
  return (
    <Link
      className="fade-in group flex flex-col justify-between"
      key={title}
      href={url}
    >
      <div>
        <div className="mb-3 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="aspect-video h-full w-full object-cover transition-transform group-hover:scale-110"
          />
        </div>
        <h3 className="font-semibold text-black group-hover:text-primary dark:text-white dark:group-hover:text-primary-100 lg:text-xl">
          {title}
        </h3>
        <p className="leading-snug text-gray-400">{description}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-text-400">
          {`${duration} ${type === 'Video' ? 'watch' : 'read'}`}
        </div>
      </div>
    </Link>
  );
}

export default function ResourcesSection() {
  const [page, setPage] = useState(1);
  const [activeType, setActiveType] = useState<'all' | 'blog' | 'video'>('all');

  const resources =
    activeType === 'all'
      ? ALL_RESOURCES
      : ALL_RESOURCES.filter((r) => r.type === activeType);

  const currentResources = resources.slice((page - 1) * 3, page * 3);

  const pages = Math.ceil(resources.length / 3);

  const nextPage = () => {
    if (page < pages) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <section className="no-underline-links my-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <div>
            <span className="dyte-badge">RESOURCES</span>
            <h2 className="mb-6 text-4xl">Want to know more?</h2>
          </div>
          <Link
            to="#"
            className="font-jakarta text-sm font-semibold text-primary"
          >
            All Blogs <ArrowRightFilled className="ml-1" />
          </Link>
        </div>

        <div className="mb-6 inline-flex gap-1 rounded-lg bg-secondary-700 p-2 font-jakarta text-sm font-semibold dark:bg-secondary-700">
          <button
            className={clsx(
              'rounded-lg px-4 py-2 transition-colors',
              activeType === 'all' &&
                'bg-zinc-700 text-white dark:bg-zinc-200 dark:text-black'
            )}
            onClick={() => setActiveType('all')}
          >
            All
          </button>
          <button
            className={clsx(
              'rounded-lg px-4 py-2 transition-colors',
              activeType === 'blog' &&
                'bg-zinc-700 text-white dark:bg-zinc-200 dark:text-black'
            )}
            onClick={() => setActiveType('blog')}
          >
            Blogs
          </button>
          <button
            className={clsx(
              'rounded-lg px-4 py-2 transition-colors',
              activeType === 'video' &&
                'bg-zinc-700 text-white dark:bg-zinc-200 dark:text-black'
            )}
            onClick={() => setActiveType('video')}
          >
            Videos
          </button>
        </div>

        <div className="relative flex flex-col">
          <div className="no-underline-links grid grid-cols-3 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {currentResources.map((resource, idx) => {
              return <Resource {...resource} key={idx} />;
            })}
          </div>

          <div className="my-10 ml-auto flex items-center justify-center md:my-0">
            <button
              onClick={prevPage}
              className="top-1/2 -left-14 rounded-lg bg-transparent p-1 hover:bg-gray-200 md:absolute md:-translate-y-1/2 dark:hover:bg-gray-400 border-none text-black dark:text-white dark:border-white"
            >
              <ChevronLeftRegular className="h-6 w-6" />
            </button>

            <button
              onClick={nextPage}
              className="top-1/2 -right-14 rounded-lg bg-transparent p-1 hover:bg-gray-200 md:absolute md:-translate-y-1/2 dark:hover:bg-gray-400 border-none text-black dark:text-white dark:border-white"
            >
              <ChevronRightRegular className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}