"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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

      <section className="relative w-full h-[35vh] sm:h-[40vh] md:h-[45vh] flex items-center justify-center text-center text-white overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/Global-Logistics.jpg')" }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10">
    <h1 className="text-4xl md:text-5xl font-bold">
      Blog
    </h1>

    <p className="mt-2">
      Home <span className="text-orange-500">»</span> Blog
    </p>
  </div>

</section>

      {/* BLOG GRID */}
      <div className="max-w-7xl mx-auto p-6">
        {loading ? (
          <p>Loading...</p>
        ) : blogs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white shadow rounded overflow-hidden">

                {/* IMAGE */}
                <div className="h-52 bg-gray-200">
                  {blog.main_image ? (
                    <img
                      src={`${BASE_URL}/storage/${blog.main_image}`}
                      alt={blog.title}
                      className="w-full h-full object-cover"
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

                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-red-500 font-semibold"
                  >
                    Read More →
                  </Link>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <p>No blogs found</p>
        )}
      </div>
    </div>
  );
}   