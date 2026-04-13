"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

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
    <div className="bg-gray-50 min-h-screen">



     

    


      {/* BLOG GRID */}
      <div className="max-w-7xl mx-auto p-6">
        {loading ? (
          <p>Loading...</p>
        ) : blogs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
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

                 <Link href={`/blog/${blog.slug}`}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-blue-500 mt-2"
                    >
                      Read More →
                    </motion.button>
                  </Link>
                </div>

              </motion.div>
            ))}
          </div>
        ) : (
          <p>No blog found</p>
        )}
      </div>
    </div>
  );
}