import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import lnk from "../assets/images/lnk.png";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const PopularPost = [
    {
      id: 1,
      title: "10 Tips for Optimizing Your Website's Performance",
      post: "Discover the best practices for improving your website's speed...",
      image:
        "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "The Rise of Headless CMS: What You Need to Know",
      post: " Learn about headless CMS and how it's changing web development...",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ opacity: 1.3 }}
    >
      <div className="bg-gray-100">
        <Navbar />
        <div className="container mx-auto p-4 mt-8">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/3 px-4 mb-8 lg:mb-0 md:h-96 md:overflow-y-scroll">
              <div className="bg-zinc-200 dark:bg-zinc-800 rounded-md overflow-hidden">
                {loading ? (
                  <Skeleton height={256} />
                ) : (
                  <img
                    className="w-full h-64 object-cover"
                    src="https://images.pexels.com/photos/5076517/pexels-photo-5076517.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Post Image Placeholder"
                  />
                )}
              </div>
              <h1 className="text-2xl font-bold mt-4">
                {loading ? (
                  <Skeleton width={300} />
                ) : (
                  "The Future of Web Development: Trends and Insights"
                )}
              </h1>
              <div className="text-zinc-600 dark:text-zinc-400 flex items-center space-x-2 mt-2">
                {loading ? (
                  <Skeleton width={100} />
                ) : (
                  <>
                    <span>John Doe</span>
                    <span className="text-sm">May 15, 2023</span>
                  </>
                )}
              </div>
              <p className="mt-2 text-zinc-700 dark:text-zinc-300">
                {loading ? (
                  <Skeleton count={3} />
                ) : (
                  "In this blog post, we explore the latest trends and insights shaping the future of web development. From the rise of headless CMS to the growing importance of accessibility, discover the key developments that will impact the way we build and experience the web."
                )}
              </p>
              <div className="mt-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                  {loading ? (
                    Array(3)
                      .fill()
                      .map((_, index) => (
                        <div
                          key={index}
                          className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-sm flex flex-col items-center"
                        >
                          <Skeleton circle width={40} height={40} />
                          <div className="text-center">
                            <Skeleton width={100} />
                            <Skeleton width={80} />
                          </div>
                        </div>
                      ))
                  ) : (
                    <>
                      <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-sm flex flex-col justify-center items-center">
                        <img
                          src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600"
                          className="w-10 h-10 rounded-full mb-2"
                          alt="Abstract Art"
                        />
                        <div className="text-center">
                          <h2 className="text-lg font-semibold">Technology</h2>
                        </div>
                      </div>
                      <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-sm flex flex-col justify-center items-center">
                        <img
                          src="https://images.pexels.com/photos/8445454/pexels-photo-8445454.jpeg?auto=compress&cs=tinysrgb&w=600"
                          className="w-10 h-10 rounded-full mb-2"
                          alt="Abstract Art"
                        />
                        <div className="text-center">
                          <h2 className="text-lg font-semibold">Politics</h2>
                        </div>
                      </div>
                      <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-sm flex flex-col justify-center items-center">
                        <img
                          src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600"
                          className="w-10 h-10 rounded-full mb-2"
                          alt="Abstract Art"
                        />
                        <div className="text-center">
                          <h2 className="text-lg font-semibold">
                            Entertainment
                          </h2>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="space-y-8">
                  {loading ? (
                    Array(3)
                      .fill()
                      .map((_, index) => (
                        <div key={index}>
                          <Skeleton width={200} />
                          <Skeleton width={300} height={30} />
                          <Skeleton count={3} />
                        </div>
                      ))
                  ) : (
                    <>
                      <div>
                        <h3 className="text-zinc-700 dark:text-zinc-300 font-semibold">
                          The Aarthi and Sriram Show
                        </h3>
                        <h2 className="font-bold md:text-lg">
                          EP 53: Steve Stoute of United Masters on Pharrell,
                          Jay-Z, leadership and hustle and more
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400">
                          Listen: Apple | Spotify Watch: YouTube Steve Stoute
                          has lead multiple lives: from getting fired at a young
                          age to re-inventing himself managing some of the most
                          famous celebrities in the world.
                        </p>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div>
                          <h3 className="text-zinc-700 dark:text-zinc-300 font-semibold">
                            Lenny's Newsletter
                          </h3>
                          <h2 className="font-bold md:text-lg">
                            LinkedIn’s product evolution and the art of building
                            complex systems | Hari Srinivasan (LinkedIn)
                          </h2>
                          <p className="text-zinc-600 dark:text-zinc-400">
                            Listen now (65 min) | Brought to you by Miro—a
                            collaborative visual platform where your best work
                            comes to life
                          </p>
                        </div>
                        <img
                          src={lnk}
                          className="w-24 h-24 object-cover rounded-lg"
                          alt="LinkedIn Article"
                        />
                      </div>
                      <div>
                        <h3 className="text-zinc-700 dark:text-zinc-300 font-semibold">
                          Sriram Krishnan
                        </h3>
                        <h2 className="font-bold md:text-lg">
                          Op-ed: Social Media and Chaos
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400">
                          I wrote an op-ed in the NYT today exploring the
                          incidents of the last few weeks and what it means for
                          decentralization and credibly neutral mechanisms.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 px-4 space-y-8">
              <div className="bg-white dark:bg-zinc-900 rounded-md p-4 shadow">
                <h2 className="text-xl font-bold mb-2">
                  {loading ? <Skeleton width={100} /> : "Search"}
                </h2>
                <div className="relative">
                  {loading ? (
                    <Skeleton height={36} />
                  ) : (
                    <>
                      <input
                        type="text"
                        className="w-full p-2 border rounded dark:bg-zinc-700 dark:border-zinc-600"
                        placeholder="Search blog posts..."
                      />
                      <button className="absolute right-2 top-2">
                        <svg
                          className="w-5 h-5 text-zinc-600 dark:text-zinc-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-900 rounded-md p-4 shadow">
                <h2 className="text-xl font-bold mb-2">
                  {loading ? <Skeleton width={120} /> : "Categories"}
                </h2>
                <ul className="space-y-2">
                  {loading ? (
                    Array(4)
                      .fill()
                      .map((_, index) => (
                        <li key={index}>
                          <Skeleton width={150} />
                        </li>
                      ))
                  ) : (
                    <>
                      <li>
                        <a
                          href="#"
                          className="text-blue-500 dark:text-blue-400"
                        >
                          Web Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-blue-500 dark:text-blue-400"
                        >
                          Design
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-blue-500 dark:text-blue-400"
                        >
                          Technology
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-blue-500 dark:text-blue-400"
                        >
                          Entrepreneurship
                        </a>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              <div className="bg-white dark:bg-zinc-900 rounded-md p-4 shadow">
                <h2 className="text-xl font-bold mb-2">
                  {loading ? <Skeleton width={150} /> : "Popular Posts"}
                </h2>
                <ul className="space-y-4">
                  {loading ? (
                    Array(2)
                      .fill()
                      .map((_, index) => (
                        <li key={index} className="flex items-center space-x-4">
                          <Skeleton width={64} height={64} />
                          <div>
                            <Skeleton width={200} />
                            <Skeleton width={150} />
                          </div>
                        </li>
                      ))
                  ) : (
                    <>
                      {PopularPost.map((post) => (
                        <li
                          className="flex items-center space-x-4"
                          key={post.id}
                        >
                          <img
                            className="w-16 h-16 object-cover rounded-md"
                            src={post.image}
                            alt="Popular Post 1 Image Placeholder"
                          />
                          <div>
                            <h3 className="text-md font-semibold">
                              {post.title}
                            </h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                              {post.post}
                            </p>
                          </div>
                        </li>
                      ))}
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="m-5" />
        <Footer />
      </div>
    </motion.div>
  );
}

export default Home;
