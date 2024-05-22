import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import kp from '../assets/images/kp.jpg';
import sp from '../assets/images/sp.jpg';
import lp from '../assets/images/ip.jpg';
import hp from '../assets/images/hp.jpg';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { motion } from "framer-motion";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // You can adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ opacity: 1.3 }}
    >
      <div className="bg-gray-100">
        <Navbar />

        <header className="bg-cover bg-center h-80 fdi">
          <div className="text-white p-10">
            <h2 className="md:text-3xl text-2xl font-black mb-2 ">
              {loading ? <Skeleton width={300} /> : 'The future of learning is here'}
            </h2>
            <p className="mb-4">
              {loading ? <Skeleton count={2} /> : 'From the basics of programming to advanced undefined science, we offer a range of courses designed to help you learn and grow'}
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              {loading ? <Skeleton width={100} /> : <Link to='/categories'>Explore News</Link>}
            </button>
          </div>
        </header>

        <section className="container mx-auto p-4">
          <hr className="border-t-2 border-gray-400 " />
          <h2 className="text-lg font-bold py-2 ml-3 ">
            {loading ? <Skeleton width={200} /> : 'Featured Post'}
          </h2>
          <hr className="border-t-2 border-gray-400 " />
          <p className='ml-3'>
            {loading ? <Skeleton width={300} /> : 'No matter your goals, we have the resources to help you succeed'}
          </p>

          <div className="grid md:grid-cols-4 gap-4">
            {loading ? (
              Array(4).fill().map((_, index) => (
                <div key={index} className="p-4">
                  <Skeleton height={200} className="mb-4" />
                  <Skeleton width={`60%`} className="mb-2" />
                  <Skeleton width={`80%`} />
                </div>
              ))
            ) : (
              <>
                <div className="p-4">
                  <Link to='/singlepost' className="relative block">
                    <img src={kp} alt="testimonial" className="w-full rounded-xl" />
                    <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-white bg-green-500 px-2 py-1 rounded-2xl'>Technology</span>
                  </Link>
                  <p className="italic ">"I learned so much from my instructor..."</p>
                  <p className="font-bold ">Student, Computer Science</p>
                </div>
                <div className="p-4">
                  <Link to='/singlepost' className="relative block">
                    <img src={sp} alt="testimonial" className="w-full rounded-xl " />
                    <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-white bg-green-500 px-2 py-1 rounded-2xl'>Business</span>
                  </Link>
                  <p className="italic ">"This course was exactly what I needed..."</p>
                  <p className="font-bold ">Student, Graphic Design</p>
                </div>
                <div className="p-4">
                  <Link to='/singlepost' className="relative block">
                    <img src={lp} alt="testimonial" className="w-full rounded-xl" />
                    <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-white bg-green-500 px-2 py-1 rounded-2xl'>Sport</span>
                  </Link>
                  <p className="italic ">"I've taken other classes, but this was the best by far..."</p>
                  <p className="font-bold ">Student, Business Analytics</p>
                </div>
                <div className="p-4">
                  <Link to='/singlepost' className="relative block">
                    <img src={hp} alt="testimonial" className="w-full rounded-xl" />
                    <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-white bg-green-500 px-2 py-1 rounded-2xl'>Science</span>
                  </Link>
                  <p className="italic ">"I've taken other classes, but this was the best by far..."</p>
                  <p className="font-bold ">Student, Business Analytics</p>
                </div>
              </>
            )}
          </div>
        </section>

        <div className='flex items-center flex-wrap gap-5 md:m- mx-14 xs:m-10 mt-3 '>
          {loading ? (
            Array(6).fill().map((_, index) => (
              <Skeleton key={index} width={100} height={30} className='rounded-3xl' />
            ))
          ) : (
            <>
              <span className='bg-gray-200 p-2 rounded-3xl flex justify-center items-center font-medium text-sm shadow-md'>Technology</span>
              <span className='bg-gray-200 p-2 rounded-3xl flex justify-center items-center font-medium text-sm shadow-md'>Science</span>
              <span className='bg-gray-200 p-2 rounded-3xl flex justify-center items-center font-medium text-sm shadow-md'>Business</span>
              <span className='bg-gray-200 p-2 rounded-3xl flex justify-center items-center font-medium text-sm shadow-md'>Culture</span>
              <span className='bg-gray-200 p-2 rounded-3xl flex justify-center items-center font-medium text-sm shadow-md'>Politics</span>
              <span className='bg-gray-200 p-2 rounded-3xl flex justify-center items-center font-medium text-sm shadow-md'>Health</span>
            </>
          )}
        </div>
        <hr className='m-8' />
        <Footer />
      </div>
    </motion.div>
  );
}

export default Home;
