
import React from 'react';
import { MdArrowBackIos } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import lg from '../assets/images/gnp.png';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

function Account() {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success('Logged In Successfully')
      navigate('/');
    } catch (error) {
      console.error('Error with Google sign-in:', error);
      toast.error('Failed to log in. Please check your credentials and try again.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ opacity: 1.3 }}
    >
      <div>

        <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-100 px-4 ">
          <div className="max-w-md w-full space-y-6">
            <h1 className="text-3xl font-bold mb-4 text-center">Welcome to Acme Blog</h1>
            <p className="mb-8 text-zinc-600 text-center">
              The simplest way to start a blog and share your stories.
            </p>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition duration-150 ease-in-out">
              <Link to='/signup'>
                Sign up with email
              </Link>
            </button>
            <div className="text-center mb-4 text-zinc-500">or</div>
            <button
              onClick={handleGoogleSignIn}
              className="w-full bg-zinc-300 hover:bg-zinc-400 text-black py-3 rounded-lg mb-6 flex justify-center items-center transition duration-150 ease-in-out shadow-md"
            >
              <span className="bg-white p-1 mr-2 rounded-full">
                <img src={lg} alt="Google Logo" className="h-5 w-5" />
              </span>
              Continue with Google
            </button>
            <div className="text-center text-zinc-600">
              Already have an account? <Link to='/login' className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition duration-150 ease-in-out">Log in</Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Account;
