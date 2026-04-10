"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // ✅ router add
import { ArrowLeft } from "lucide-react";
const BASE_URL = "http://127.0.0.1:8000";
import { motion } from "framer-motion";

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
  const router = useRouter(); // ✅ router

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

      
     <motion.button
  onClick={() => router.push("/blog")}
  whileHover={{ scale: 1.05, x: -3 }}
  whileTap={{ scale: 0.95 }}
  className="mb-6 flex items-center gap-2 px-5 py-2.5 
  bg-white/10 backdrop-blur-md border border-white/20 
  text-gray-800 rounded-full shadow-lg 
  hover:bg-white/20 hover:shadow-xl 
  transition-all duration-300"
>
  <motion.span
    initial={{ x: 0 }}
    whileHover={{ x: -4 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <ArrowLeft size={18} />
  </motion.span>

  <span className="font-semibold tracking-wide">
  Back to Blogs
</span>
</motion.button>

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