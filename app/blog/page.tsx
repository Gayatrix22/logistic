"use client";

import { useEffect, useState } from "react";

type Blog = {
  _id?: string;
  id?: number;
  title: string;
  description?: string;
  image?: string;
  slug?: string;
  createdAt?: string;
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://happy.techstrota.com/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-[60vh] text-lg font-semibold">
        Loading blogs...
      </div>
    );

  return (
    <div className="bg-gray-50 min-h-screen py-14 px-6 md:px-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Latest Blogs
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={blog.image || "/blog-default.jpg"}
              alt={blog.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                {blog.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {blog.description?.slice(0, 120)}...
              </p>

              <a
                href={`/blog/${blog.slug || blog.id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}