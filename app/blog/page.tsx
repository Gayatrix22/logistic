"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const BASE_URL = "http://127.0.0.1:8000";

type Blog = {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  main_image?: string;
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/blogs`);
        const data = await res.json();
        if (Array.isArray(data)) setBlogs(data);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-white min-h-screen">

      {/* HEADER */}
      <div className="text-center py-14 bg-gradient-to-r from-orange-50 to-white">
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-bold text-gray-800"
        >
          Our <span className="text-orange-500">Blogs</span>
        </motion.h1>

        <p className="text-gray-500 mt-3">
          Explore logistics insights & industry updates
        </p>
      </div>

      {/* BLOG GRID */}
      <div className="max-w-7xl mx-auto px-5 py-12">
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : blogs.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white border rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >

                {/* IMAGE */}
                <div className="h-52 overflow-hidden">
                  {blog.main_image ? (
                    <img
                      src={`${BASE_URL}/storage/${blog.main_image}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      No Image
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h2 className="text-lg font-semibold mb-2">
                    {blog.title}
                  </h2>

                  <p className="text-sm text-gray-500 mb-4">
                    {blog.short_description}
                  </p>

                  <Link href={`/blog/${blog.slug}`}>
                    <button className="text-orange-500 font-medium">
                      Read More →
                    </button>
                  </Link>
                </div>

              </div>
            ))}

          </div>
        ) : (
          <p className="text-center text-gray-500">No blog found</p>
        )}
      </div>
    </div>
  );
}