import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { db, storage } from '../firebase'; // Adjust the import path as needed
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function CreateBlog() {
    const [title, setTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState('');
    const [selectedTag, setSelectedTag] = useState('');
    const [loading, setLoading] = useState(false); // Loading state
    const tagOptions = ['Technology', 'Science', 'Sport', 'Design']; // Add your tag options here

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageUpload = async () => {
        if (image) {
            const imageRef = ref(storage, `images/${image.name}`);
            await uploadBytes(imageRef, image);
            const imageUrl = await getDownloadURL(imageRef);
            return imageUrl;
        }
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation for empty fields
        if (!title.trim() || !postContent.trim() || !selectedTag) {
            alert("Please provide all details (title, content, and tag) for the post.");
            return;
        }

        setLoading(true); // Set loading state to true
        try {
            const imageUrl = await handleImageUpload();
            await addDoc(collection(db, "posts"), {
                title,
                postContent,
                imageUrl, // Can be null if no image is uploaded
                tag: selectedTag,
                createdAt: new Date(),
            });
            alert("Post created successfully!");
            // Reset all fields
            setTitle('');
            setPostContent('');
            setImage(null);
            setImagePreviewUrl('');
            setSelectedTag('');
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Error creating post. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='dark:bg-gray-100'>
            <div className="max-w-screen-lg mx-auto p-6 overflow-hidden">
                <header className="flex md:justify-between justify-around items-center shadow-md p-5 mb-8 rounded">
                    {/* <h1 className="md:text-2xl text-xl font-bold mb-1">Acme</h1> */}
                    <button className="bg-green-500 text-white px-2 md:px-4 hover:bg-green-400 rounded-md">Draft</button>
                    <nav className="md:space-x-4 space-x-3">
                        <Link to='/blogs'>
                            <a href="#" className="text-blue-500  hover:underline">Blog</a>
                        </Link>
                        <a href="#" className="text-blue-500  hover:underline">Help</a>
                        <Link to='/'>

                            <button className="bg-blue-500 text-white px-2 md:px-4  rounded-md">Back</button>
                        </Link>

                    </nav>
                </header>
                <main className='md:bg-white p-10 rounded-xl'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="title" className="text-zinc-700 font-bold">Title</label>
                            <input
                                type="text"
                                id="title"
                                className="mt-1 w-full p-3 border rounded-md"
                                placeholder="How to build a great product"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="post" className="text-zinc-700 font-bold">Write your post</label>
                            <textarea
                                id="post"
                                rows="3"
                                className="w-full p-3 border rounded-md"
                                placeholder="Write your post"
                                value={postContent}
                                onChange={(e) => setPostContent(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="file-upload" className="text-zinc-700 font-bold mb-2 block">Featured image</label>
                            <p className="text-sm mb-4">If you choose not to upload an image, we'll automatically generate a cover image based on your content. Recommended size is 1200x600.</p>
                            {imagePreviewUrl && (
                                <img src={imagePreviewUrl} alt="Preview" className="mb-5 w-24 h-14 object-cover rounded" />
                            )}
                            <input
                                type="file"
                                id="file-upload"
                                onChange={handleImageChange}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="tag" className="text-zinc-700 font-bold mb-2 block">Tags</label>
                            <select
                                id="tag"
                                value={selectedTag}
                                onChange={(e) => setSelectedTag(e.target.value)}
                                className="w-full p-3 border rounded-md"
                            >
                                <option value="" disabled selected hidden>Select a tag</option>
                                {tagOptions.map(tag => (
                                    <option key={tag} value={tag}>{tag}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex justify-end space-x-4">
                            {/* <button type="button" className="bg-zinc-300 hover:bg-zinc-400 text-black px-6 py-0 rounded-md">Draft</button>
                            <button type="button" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">Preview</button> */}
                            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">{loading ? 'Creating post...' : 'Submit'}</button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
}

export default CreateBlog;
