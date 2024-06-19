import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  startAt,
  getDocs,
} from "firebase/firestore";
import { MdArrowBackIos } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BlogList = () => {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [indexBuilding, setIndexBuilding] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(6); // Number of posts per page
  const [lastVisible, setLastVisible] = useState([]);
  const [firstVisible, setFirstVisible] = useState([]);

  const fetchPosts = async (page = 0) => {
    setLoading(true);
    try {
      let postsQuery;
      let queryConstraints = [orderBy("createdAt", "desc"), limit(pageSize)];

      if (category && category !== "All") {
        queryConstraints.unshift(where("tag", "==", category));
      }

      if (page > 0 && lastVisible[page - 1]) {
        queryConstraints.push(startAfter(lastVisible[page - 1]));
      }

      postsQuery = query(collection(db, "posts"), ...queryConstraints);

      const postDocs = await getDocs(postsQuery);
      const postsArray = postDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsArray);

      if (postDocs.docs.length > 0) {
        setLastVisible((prev) => {
          const newLastVisible = [...prev];
          newLastVisible[page] = postDocs.docs[postDocs.docs.length - 1];
          return newLastVisible;
        });

        setFirstVisible((prev) => {
          const newFirstVisible = [...prev];
          newFirstVisible[page] = postDocs.docs[0];
          return newFirstVisible;
        });
      }

      // Update the page count based on the fetched data
      if (postsArray.length < pageSize) {
        setPageCount(page + 1); // No more pages to fetch
      } else {
        setPageCount(page + 2); // Assume there is at least one more page
      }
    } catch (error) {
      if (error.message.includes("The query requires an index.")) {
        setIndexBuilding(true);
      } else {
        console.error("Error fetching posts:", error);
      }
    }
    setLoading(false);
  };

  const handlePageClick = async (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);

    if (selectedPage > currentPage) {
      await fetchPosts(selectedPage);
    } else if (selectedPage < currentPage) {
      await fetchPreviousPosts(selectedPage);
    }
  };

  const fetchPreviousPosts = async (page) => {
    setLoading(true);
    try {
      let postsQuery;
      let queryConstraints = [orderBy("createdAt", "desc"), limit(pageSize)];

      if (category && category !== "All") {
        queryConstraints.unshift(where("tag", "==", category));
      }

      if (page >= 0 && firstVisible[page]) {
        queryConstraints.push(startAt(firstVisible[page]));
      }

      postsQuery = query(collection(db, "posts"), ...queryConstraints);

      const postDocs = await getDocs(postsQuery);
      const postsArray = postDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsArray);

      if (postDocs.docs.length > 0) {
        setLastVisible((prev) => {
          const newLastVisible = [...prev];
          newLastVisible[page] = postDocs.docs[postDocs.docs.length - 1];
          return newLastVisible;
        });

        setFirstVisible((prev) => {
          const newFirstVisible = [...prev];
          newFirstVisible[page] = postDocs.docs[0];
          return newFirstVisible;
        });
      }
    } catch (error) {
      console.error("Error fetching previous posts:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [category, currentPage]);

  return (
    <div className="max-w-screen-lg mx-auto p-6 dark:text-white">
      <header className="flex justify-between items-center mb-8 w-full">
        <Link to="/">
          <button className="text-xl">
            <MdArrowBackIos />
          </button>
        </Link>
        <h1 className="text-2xl font-bold">Blog Posts</h1>
        <Link
          to="/create"
          className=" text-gray-500  hover:bg-gray-200 px-4 py-2 font-black rounded-md"
        >
          <SlNote />
        </Link>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          Array(pageSize)
            .fill()
            .map((_, index) => (
              <div key={index} className="shadow-md p-4">
                <Skeleton height={150} />
                <Skeleton height={20} className="mt-4" />
                <Skeleton height={20} className="mt-2" />
                <Skeleton height={20} width={100} className="mt-4" />
                <div className="flex items-center justify-between mt-4">
                  <Skeleton circle={true} height={40} width={40} />
                  <Skeleton height={20} width={50} />
                </div>
              </div>
            ))
        ) : posts.length === 0 ? (
          <div className=" p-5">
            <p className="text-gray-500 ">No post for this category yet!</p>
            <p className="">
              Be the first to{" "}
              <Link
                className="underline text-blue-400 hover:text-green-500"
                to={"/create"}
              >
                create
              </Link>{" "}
            </p>
          </div>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="shadow-md p-4">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="mb-4 w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-500 mb-4 text-sm">
                {post.postContent.substring(0, 100)}...
              </p>
              <div className="flex items-center justify-between">
                <Link
                  to={`/posts/${post.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Read More
                </Link>
                <img
                  src="https://via.placeholder.com/40"
                  alt={`Author of ${post.title}`}
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </div>
          ))
        )}
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default BlogList;
