"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const BASE_URL = "http://192.168.1.11:8000";

type Blog = {
  id: number;
  title: string;
  slug: string;
  content: string;
  main_image?: string;
};

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/blogs/${slug}`);
        const data = await res.json();

        console.log("BLOG DATA:", data);
        setBlog(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchBlog();
  }, [slug]);

  if (loading) return <p className="p-6">Loading...</p>;

  if (!blog) return <p className="p-6">Blog not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      
      {/* IMAGE */}
      {blog.main_image && (
        <img
          src={`${BASE_URL}/storage/${blog.main_image}`}
          alt={blog.title}
          className="w-full h-80 object-cover mb-6 rounded"
        />
      )}

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

     <div
  className="text-black-700 leading-relaxed"
  dangerouslySetInnerHTML={{ __html: blog.content }}
/>

    </div>
  );
}