"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://happy.techstrota.com/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-10 text-center">Blogs</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog._id} className="shadow-lg rounded-xl p-5">
            <img
              src={blog.image}
              className="h-48 w-full object-cover rounded-lg"
            />

            <h2 className="mt-4 font-semibold text-lg">
              {blog.title}
            </h2>

            <Link
              href={`/blog/${blog.slug}`}
              className="text-blue-600 mt-3 inline-block"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}