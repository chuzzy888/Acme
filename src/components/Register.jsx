import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Account created successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error creating account:', error);
      toast.error('Failed to create account. Please try again.');
    }
  };

  return (
    <div>
      <Link to='/Account'>
        <button className='absolute m-5  text-xl text-white'><MdArrowBackIos /></button>
      </Link>
      <div className="min-h-screen bg-zinc-800 dark:bg-zinc-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-zinc-800 dark:text-white mb-6">Create An Account</h2>
          <p className='text-center mb-5 text-white md:text-black font-light text-sm'>Sign up to start publishing your blog posts.</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-zinc-700 dark:text-zinc-400">Username</label>
              <input type="text" id="username" className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm placeholder-zinc-400 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-600 dark:text-white" placeholder="john.doe" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-400">Email</label>
              <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm placeholder-zinc-400 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-600 dark:text-white" placeholder="john@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-400">Password</label>
              <input type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm placeholder-zinc-400 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-600 dark:text-white" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none shadow-lg transform transition-all duration-150 ease-in-out">Create Account</button>
          </form>
          <p className="mt-6 text-sm text-center text-zinc-600 dark:text-zinc-400">
            Already have an account? <Link to='/login' className="text-indigo-600 hover:text-indigo-500 dark:hover:text-indigo-400">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
