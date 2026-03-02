"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    fetch("https://happy.techstrota.com/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        const foundBlog = data.find(
          (item: any) => item.slug === slug
        );
        setBlog(foundBlog);
      });
  }, [slug]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-10">
      <img
        src={blog.image}
        className="w-full h-96 object-cover rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-6">
        {blog.title}
      </h1>

      <p className="mt-4 text-gray-600">
        {blog.description}
      </p>
    </div>
  );
}