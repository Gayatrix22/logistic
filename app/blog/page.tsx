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

// 🔥 animation variants
const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/blogs`);
        const data = await res.json();

        if (Array.isArray(data)) {
          setBlogs(data);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <motion.div
      className="bg-gray-50 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* HERO */}
      <section className="relative w-full h-[35vh] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Global-Logistics.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          className="relative z-10 text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">Blog</h1>
          <p className="mt-2">
            Home <span className="text-orange-500">»</span> Blog
          </p>
        </motion.div>
      </section>

      {/* BLOG GRID */}
      <div className="max-w-7xl mx-auto p-6">
        {loading ? (
          <p>Loading...</p>
        ) : blogs.length > 0 ? (
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariant}
            initial="hidden"
            animate="show"
          >
            {blogs.map((blog) => (
              <motion.div
                key={blog.id}
                variants={cardVariant}
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow rounded overflow-hidden"
              >
                {/* IMAGE */}
                <div className="h-52 bg-gray-200 overflow-hidden">
                  {blog.main_image ? (
                    <motion.img
                      src={`${BASE_URL}/storage/${blog.main_image}`}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      No Image
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-2">{blog.title}</h2>

                  <p className="text-sm text-gray-600 mb-3">
                    {blog.short_description}
                  </p>

                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="text-red-500 font-semibold"
                    >
                      Read More →
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <p>No blogs found</p>
        )}
      </div>
    </motion.div>
  );
}