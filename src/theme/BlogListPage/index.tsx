import React, { useState, useMemo } from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import { ArrowRightFilled } from "@fluentui/react-icons";
import Layout from "@theme/Layout";
import { Search } from "react-feather";

interface BlogPost {
  url: string;
  type: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  duration: string;
  author: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    url: "#",
    type: "blog",
    title: "Understanding JavaScript Basics",
    description:
      "Dive deep into JavaScript fundamentals and learn how to build strong foundations.",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*LyZcwuLWv2FArOumCxobpA.png",
    tags: ["JavaScript", "Basics"],
    duration: "4 min",
    author: "ajay-dhangar",
  },
  {
    url: "#",
    type: "blog",
    title: "Mastering Advanced JavaScript",
    description:
      "Explore closures, prototypal inheritance, and more advanced concepts.",
    image:
      "https://www.classcentral.com/report/wp-content/uploads/2017/10/js-and-frameworks-banner.png",
    tags: ["JavaScript", "Advanced"],
    duration: "8 min",
    author: "ajay-dhangar",
  },
  {
    url: "#",
    type: "video",
    title: "Building Your First React App",
    description: "A step-by-step guide to creating a React app from scratch.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxJ081bn2RHuzj2cCVAfic6YVdPZ7NjyeZfw&s",
    tags: ["React", "Tutorial"],
    duration: "15 min",
    author: "ajay-dhangar",
  },
  {
    url: "#",
    type: "course",
    title: "JavaScript Complete Guide",
    description:
      "A comprehensive course that covers all aspects of JavaScript.",
    image: "https://i.ytimg.com/vi/zNAm4QCZsBs/maxresdefault.jpg",
    tags: ["JavaScript", "Course"],
    duration: "20 hours",
    author: "ajay-dhangar",
  },
];

const Author = ({ username }: { username: string }) => {
  return (
    <div className="flex items-center gap-2">
      <img
        src={`https://github.com/${username}.png?size=60`}
        alt={`User ${username}`}
        loading="lazy"
        className="h-6 w-6 rounded-full border-2 border-solid border-white lg:h-12 lg:w-12"
      />
      <span>{username}</span>
    </div>
  );
};

const BlogListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    BLOG_POSTS.forEach((post) => {
      post.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
      const matchesSearch = post.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }, [selectedTag, searchTerm]);

  return (
    <Layout
      title="Blog"
      description="Read the latest blog posts on JavaScript, React, and more."
    >
      <section className="noise-bg px-6 py-24">
        <div className="mx-auto flex max-w-7xl flex-col place-items-center justify-center">
          <h1 className="text-4xl font-bold text-center mb-4">Our Blogs</h1>
          <p className="text-lg text-center text-gray-600 dark:text-gray-400">
            Read the latest blog posts on JavaScript, React, and more.
          </p>
          <div className="relative flex w-full max-w-md items-center">
            <Search className="z-10 h-5 dark:text-gray-800 w-5 translate-x-1.5" />
            <input
              type="text"
              className="-ml-5 h-10 flex-1 rounded-md border border-solid border-gray-800 bg-white px-3 pl-8 text-sm text-gray-700 dark:border-gray-200 dark:bg-secondary-1000 dark:text-gray-800"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>
      <main className="p-4">
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            className={clsx("px-4 py-2 rounded-lg", {
              "bg-blue-500 text-white": !selectedTag,
            })}
            onClick={() => setSelectedTag(null)}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={clsx("px-4 py-2 rounded-lg", {
                "bg-blue-500 text-white": selectedTag === tag,
                "bg-gray-200": selectedTag !== tag,
              })}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2">
            {BLOG_POSTS[0] && (
              <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 dark:bg-gray-800">
                <img
                  src={BLOG_POSTS[0].image}
                  alt={BLOG_POSTS[0].title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-bold">{BLOG_POSTS[0].title}</h2>
                  <p className="mt-2">{BLOG_POSTS[0].description}</p>
                  <div className="flex items-center justify-between mt-4 pr-2">
                    <Author username={BLOG_POSTS[0].author} />
                    <Link to={BLOG_POSTS[0].url} className="text-blue-500">
                      Read More <ArrowRightFilled />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="col-span-1 flex flex-col gap-6">
            {BLOG_POSTS.slice(1, 3).map((post) => (
              <div
                key={post.title}
                className="bg-white shadow-lg rounded-lg overflow-hidden dark:bg-gray-800"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                  <p className="mt-1">{post.description}</p>
                  <div className="flex items-center justify-between mt-4 pr-2">
                    <Author username={BLOG_POSTS[0].author} />
                    <Link to={BLOG_POSTS[0].url} className="text-blue-500">
                      Read More <ArrowRightFilled />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.title}
              className="bg-white shadow-lg rounded-lg overflow-hidden dark:bg-gray-800"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-sm mt-1">{post.description}</p>
                <p className="text-gray-500 text-xs mt-1">{post.duration}</p>
                <div className="flex items-center justify-between mt-4 pr-2">
                    <Author username={BLOG_POSTS[0].author} />
                    <Link to={BLOG_POSTS[0].url} className="text-blue-500">
                      Read More <ArrowRightFilled />
                    </Link>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default BlogListPage;
