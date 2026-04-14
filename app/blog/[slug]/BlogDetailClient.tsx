"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const BASE_URL = "http://127.0.0.1:8000";

type Blog = {
  id: number;
  title: string;
  slug: string;
  content: string;
  main_image?: string;
};

export default function BlogDetailClient({ slug }: { slug: string }) {
  const router = useRouter();

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/blogs/${slug}`);
        const data = await res.json();
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
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-10 px-4">

      <div className="max-w-4xl mx-auto">

        {/* BACK BUTTON */}
        <motion.button
          onClick={() => router.push("/blog")}
          whileHover={{ scale: 1.05, x: -3 }}
          whileTap={{ scale: 0.95 }}
          className="mb-8 flex items-center gap-2 px-5 py-2.5 
          bg-orange-500 text-white rounded-full shadow-md 
          hover:bg-orange-600 hover:shadow-lg transition-all duration-300"
        >
          <ArrowLeft size={18} />
          <span className="font-semibold tracking-wide">
            Back to Blogs
          </span>
        </motion.button>

        {/* BLOG CARD */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-100">

          {blog.main_image && (
            <div className="relative">
              <img
                src={`${BASE_URL}/storage/${blog.main_image}`}
                alt={blog.title}
                className="w-full h-72 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent"></div>
            </div>
          )}

          <div className="p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {blog.title}
            </h1>

            <div className="w-16 h-1 bg-orange-500 mb-6 rounded-full"></div>

            <div
              className="text-gray-700 leading-relaxed space-y-4 
              [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-orange-600
              [&_h3]:text-xl [&_h3]:font-semibold
              [&_p]:mb-4
              [&_ul]:list-disc [&_ul]:pl-6
              [&_a]:text-orange-500 [&_a]:underline"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

        </div>

      </div>
    </div>
  );
}