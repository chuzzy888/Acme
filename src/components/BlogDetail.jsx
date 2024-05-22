// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { db } from '../firebase'; // Adjust the import path as needed
// import { doc, getDoc } from "firebase/firestore";
// import { IoShareSocialSharp } from "react-icons/io5";
// import { MdArrowBackIos, MdOutlineSaveAlt } from "react-icons/md";
// import { FaTags } from "react-icons/fa";
// import { format } from 'date-fns'; // Importing date-fns for date formatting

// const BlogDetail = () => {
//     const { id } = useParams();
//     const [post, setPost] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const fetchPost = async () => {
//         setLoading(true);
//         try {
//             const docRef = doc(db, 'posts', id);
//             const docSnap = await getDoc(docRef);
//             if (docSnap.exists()) {
//                 setPost(docSnap.data());
//             } else {
//                 console.error("No such document!");
//             }
//         } catch (error) {
//             console.error('Error fetching post:', error);
//         }
//         setLoading(false);
//     };

//     useEffect(() => {
//         fetchPost();
//     }, [id]);

//     if (loading) {
//         return <div className="text-center mt-4">Loading...</div>;
//     }

//     if (!post) {
//         return <div className="text-center mt-4">Post not found</div>;
//     }

//     const formattedDate = post.createdAt ? format(post.createdAt.toDate(), 'MMMM d, yyyy h:mm a') : 'Date not available';

//     return (
//         <div>
//             <Link to='/'>
//                 <button className='absolute m-5 text-xl text-gray-500'><MdArrowBackIos /></button>
//             </Link>
//             <div className="mx-auto max-w-4xl p-4">
//                 <h1 className="md:text-2xl font-bold text-zinc-900 dark:text-white"> {post.title} </h1>
//                 {post.imageUrl && (
//                     <img src={post.imageUrl} alt={post.title} className="mt-4 w-full h-60 rounded-lg object-cover" />
//                 )}

//                 <div className="flex justify-between items-center my-2 text-zinc-700 dark:text-zinc-300">
//                     <span className='flex items-center justify-center gap-3'>  <FaTags className='text-sm mt-1' /> {post.tag}</span>
//                     <span>{formattedDate}</span>
//                 </div>

//                 <div className="mb-4 text-sm flex items-center space-x-2">
//                     <img src="https://placehold.co/50x50" alt="Author's Profile Picture" className="w-10 h-10 rounded-full" />
//                     <span>
//                         <span className="font-semibold"></span>Grace Hopper
//                     </span>
//                 </div>

//                 <article className="text-zinc-900 dark:text-zinc-200 leading-relaxed">
//                     {post.postContent}
//                 </article>

//                 <div className="flex mt-6 space-x-4">
//                     <button aria-label="Share this post" className="p-2 text-slate-900 text-xl rounded-lg">
//                         <IoShareSocialSharp />
//                     </button>
//                     <button aria-label="Save this post" className="px-2 text-green-700 text-2xl rounded-lg">
//                         <MdOutlineSaveAlt />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BlogDetail;











import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { db } from '../firebase'; // Adjust the import path as needed
import { doc, getDoc } from "firebase/firestore";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdArrowBackIos, MdOutlineSaveAlt } from "react-icons/md";
import { FaTags } from "react-icons/fa";
import { format } from 'date-fns'; // Importing date-fns for date formatting
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const BlogDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchPost = async () => {
        setLoading(true);
        try {
            const docRef = doc(db, 'posts', id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setPost(docSnap.data());
            } else {
                console.error("No such document!");
            }
        } catch (error) {
            console.error('Error fetching post:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchPost();
    }, [id]);

    if (loading) {
        return (
            <div className="mx-auto max-w-4xl p-4">
                <Skeleton height={40} width={300} />
                <Skeleton height={250} className="mt-4 w-full" />
                <Skeleton height={20} width={150} className="my-4" />
                <Skeleton circle={true} height={50} width={50} />
                <Skeleton height={100} className="mt-4" count={3} />
            </div>
        );
    }

    if (!post) {
        return <div className="text-center mt-4">Post not found</div>;
    }

    const formattedDate = post.createdAt ? format(post.createdAt.toDate(), 'MMMM d, yyyy h:mm a') : 'Date not available';

    return (
        <div>
            <Link to='/'>
                <button className='absolute m-5 text-xl text-gray-500'><MdArrowBackIos /></button>
            </Link>
            <div className="mx-auto max-w-4xl p-4">
                <h1 className="md:text-2xl font-bold text-zinc-900 dark:text-white"> {post.title} </h1>
                {post.imageUrl && (
                    <img src={post.imageUrl} alt={post.title} className="mt-4 w-full h-60 rounded-lg object-cover" />
                )}

                <div className="flex justify-between items-center my-2 text-zinc-700 dark:text-zinc-300">
                    <span className='flex items-center justify-center gap-3'>  <FaTags className='text-sm mt-1' /> {post.tag}</span>
                    <span>{formattedDate}</span>
                </div>

                <div className="mb-4 text-sm flex items-center space-x-2">
                    <img src="https://placehold.co/50x50" alt="Author's Profile Picture" className="w-10 h-10 rounded-full" />
                    <span>
                        <span className="font-semibold"></span>Grace Hopper
                    </span>
                </div>

                <article className="text-zinc-900 dark:text-zinc-200 leading-relaxed">
                    {post.postContent}
                </article>

                <div className="flex mt-6 space-x-4">
                    <button aria-label="Share this post" className="p-2 text-slate-900 text-xl rounded-lg">
                        <IoShareSocialSharp />
                    </button>
                    <button aria-label="Save this post" className="px-2 text-green-700 text-2xl rounded-lg">
                        <MdOutlineSaveAlt />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
















