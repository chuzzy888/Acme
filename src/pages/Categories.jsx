import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();

  const categories = [
    "All",
    "Technology",
    "Design",
    "Business",
    "Marketing",
    "Product",
    "Politics",
    "Science",
    "Sport",
    "Career",
  ];

  const handleCategoryClick = (category) => {
    navigate(`/blogs/${category === "All" ? "" : category}`);
  };

  return (
    <div className="flex relative bg-gray-50 h-screen">
      <Link to="/">
        <button className="absolute m-5">
          <MdArrowBackIos />
        </button>
      </Link>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Categories</h1>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className="bg-zinc-200 hover:bg-zinc-300 text-zinc-800 font-semibold py-2 px-4 rounded-2xl shadow"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
