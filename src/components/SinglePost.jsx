import React from 'react'
import logo from '../assets/images/logo.png';
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward, IoIosBookmark } from "react-icons/io";
import { CiBookmark, CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';




function SinglePost() {
    return (
        <div className="bg-gray-50 font-sans leading-normal tracking-normal">


            <nav className="bg-white shadow-md p-4">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <h1 className="text-2xl font-bold">Acme</h1>
                    {/* <div><img src={logo} alt="" className='w-20' /></div> */}
                    <div className=" flex items-center justify-center">
                        <Link to='/'>
                        <a href="#" className="text-zinc-700  px-4 py-2 md:py-0 fons">
                            Home 
                        </a>
                        </Link>
                        
                        <p className='text-2xl'><IoIosArrowForward /></p>
                        <a href="#" className="px-4 py-2 ">
                            Explore
                        </a>
                        <button className='bg-gray-100 hover:bg-gray-300 shadow-md p-2 rounded-xl font-black text-lg'><CiBookmark /></button>

                     
                    </div>
                </div>
            </nav>

            <header className="w-full bg-cover bg-center mt-1" >
                <div className="flex items-center justify-center w-full  bg-zinc-900 bg-opacity-50 cp_image  shadow-2xl">
                    <div className="text-center text-white px-6 md:px-12">
                        <h1 className="md:text-5xl text-2xl font-bold leading-tight md:mb-6 fons">The Ultimate Guide to Abstract Art</h1>
                        <p className="md:text-xl mb-6">Learn about the history of abstract art, its key artists, and where to find it today</p>
                        <div className="flex justify-center items-center gap-0 ">
                            <input type="text" placeholder='Search News . .' className='text-black  outline-none p-2 md:px-4 rounded-sm' />
                            <button className='bg-blue-400 p-2.5 text-xl font-bold hover:bg-blue-500   '><FaArrowRight /></button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-8 md:px-12 px-11 py-8">
                <article>
                    <h2 className="font-bold md:text-3xl text-lg mb-3">A Brief History of Abstract Art</h2>
                    <p className="text-gray-500 font-medium">By Grace Hopper, May 5, 2023</p>
                    <p className="mt-4 text-zinc-800">
                        Abstract art is a genre of visual art that does not represent objects in the natural world. Instead, it uses color, shape, and form to create compositions that may exist with a degree of independence from visual references in the world. The first abstract art is generally believed to have been created by Russian painter Wassily Kandinsky in the early 20th century. Kandinsky was inspired by the idea of creating art that did not necessarily have to represent anything in the natural world, and he began to experiment with forms and colors in a way that was not directly tied to reality. This marked the beginning of abstract art as a distinct genre.
                    </p>
                    {/* <a href="#" className="text-blue-500 hover:text-blue-700 mt-4 inline-block outline p-1">Read more</a> */}
                    <button className='mt-4 bg-gray-200 hover:bg-gray-300 hover:font-bold text-sm  px-2.5 p-2 rounded-2xl font-medium shadow-md'>Read more</button>
                </article>

            </main>
        </div>
    )
}

export default SinglePost


