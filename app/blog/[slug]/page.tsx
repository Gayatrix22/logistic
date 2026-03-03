"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<any>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://happy.techstrota.com/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        const foundBlog = data.find((b: any) => b.slug === slug);
        setBlog(foundBlog);

        const related = data
          .filter((b: any) => b.slug !== slug)
          .slice(0, 3);

        setRelatedBlogs(related);
      });
  }, [slug]);

  if (!blog) {
    return <div className="p-20 text-center">Loading...</div>;
  }

  return (
    <>
      {/* HERO */}
      <section className="relative h-[45vh] flex items-center justify-center text-white text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${blog.image})` }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl font-bold">{blog.title}</h1>
        </div>
      </section>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto p-6 md:p-10">
        <img
          src={blog.image}
          className="w-full rounded-xl mb-8"
          alt={blog.title}
        />

        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

        <p className="text-gray-600 leading-relaxed text-lg">
          {blog.description || blog.content}
        </p>
      </div>

      {/* Related Blogs */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold mb-8">Related Blogs</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {relatedBlogs.map((item: any) => (
            <Link
              key={item._id}
              href={`/blog/${item.slug}`}
              className="shadow-lg rounded-xl overflow-hidden bg-white"
            >
              <img
                src={item.image}
                className="h-40 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}