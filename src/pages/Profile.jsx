import React from 'react'
import { MdArrowBackIos, MdEdit } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

function Profile() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: 1.3 }}
        >
            <div className='h-screen'>
                <Link to='/'>
                    <button className='absolute md:m-5 m-8 text-xl text-white md:text-black'><MdArrowBackIos /></button>
                </Link>
                <body className=" dark:bg-zinc-800 font-sans leading-normal tracking-normal">
                    <div className="container mx-auto p-4 md:p-0">
                        <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 shadow rounded-lg p-6">
                            <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-x-8 lg:space-y-0">
                                <img src="https://placehold.co/100x100" alt="Jessica Smith" className="rounded-full w-24 h-24 lg:w-32 lg:h-32" />
                                <div className="flex-1">
                                    <h1 className="text-2xl font-bold text-zinc-800 dark:text-white">Jessica Smith</h1>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Building a new startup. Founder @ycombinator. Prev. Design leadership @Google, avid espresso drinker</p>
                                    <div className="flex space-x-2 mt-3">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Message</button>
                                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Follow</button>
                                        <button className='hover:bg-gray-200 p-2 rounded'><MdEdit className='text-xl  ' /></button>
                                    </div>
                                    <div className="mt-4">
                                        <a href="https://twitter.com/hailunz" className="text-blue-500 hover:underline">twitter.com/hailunz</a>
                                    </div>
                                </div>
                            </div>


                            <div className="mt-8">
                                <h2 className="text-xl font-semibold text-zinc-800 dark:text-white">About</h2>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">Building a new startup. Founder @ycombinator. Prev. Design leadership @Google, avid espresso drinker</p>
                            </div>


                            <h3 className="text-xl font-semibold text-zinc-800 dark:text-white mt-4 mb-4">Articles</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center space-x-3">
                                    <img src="https://placehold.co/40x40" alt="Article Image" className="w-10 h-10 rounded" />
                                    <div className="flex flex-col">
                                        <a href="#" className="text-sm text-blue-500 hover:underline">How to build unique product</a>
                                        <span className="text-xs text-zinc-400">3:03 PM</span>
                                    </div>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <img src="https://placehold.co/40x40" alt="Article Image" className="w-10 h-10 rounded" />
                                    <div className="flex flex-col">
                                        <a href="#" className="text-sm text-blue-500 hover:underline">Trying out Tinker Space</a>
                                        <span className="text-xs text-zinc-400">2:59 PM</span>
                                    </div>
                                </li>

                                <li className="flex items-center space-x-3">
                                    <img src="https://placehold.co/40x40" alt="Article Image" className="w-10 h-10 rounded" />
                                    <div className="flex flex-col">
                                        <a href="#" className="text-sm text-blue-500 hover:underline">Trying out Tinker Space</a>
                                        <span className="text-xs text-zinc-400">2:59 PM</span>
                                    </div>
                                </li>

                                <li className="flex items-center space-x-3">
                                    <img src="https://placehold.co/40x40" alt="Article Image" className="w-10 h-10 rounded" />
                                    <div className="flex flex-col">
                                        <a href="#" className="text-sm text-blue-500 hover:underline">Trying out Tinker Space</a>
                                        <span className="text-xs text-zinc-400">2:59 PM</span>
                                    </div>
                                </li>

                                <li className="flex items-center space-x-3">
                                    <img src="https://placehold.co/40x40" alt="Article Image" className="w-10 h-10 rounded" />
                                    <div className="flex flex-col">
                                        <a href="#" className="text-sm text-blue-500 hover:underline">Trying out Tinker Space</a>
                                        <span className="text-xs text-zinc-400">2:59 PM</span>
                                    </div>
                                </li>

                                <li className="flex items-center space-x-3">
                                    <img src="https://placehold.co/40x40" alt="Article Image" className="w-10 h-10 rounded" />
                                    <div className="flex flex-col">
                                        <a href="#" className="text-sm text-blue-500 hover:underline">Trying out Tinker Space</a>
                                        <span className="text-xs text-zinc-400">2:59 PM</span>
                                    </div>
                                </li>

                                <li className="flex items-center space-x-3">
                                    <img src="https://placehold.co/40x40" alt="Article Image" className="w-10 h-10 rounded" />
                                    <div className="flex flex-col">
                                        <a href="#" className="text-sm text-blue-500 hover:underline">Trying out Tinker Space</a>
                                        <span className="text-xs text-zinc-400">2:59 PM</span>
                                    </div>
                                </li>


                            </ul>
                        </div>
                    </div>
                </body>
            </div>
        </motion.div>
    )
}

export default Profile
