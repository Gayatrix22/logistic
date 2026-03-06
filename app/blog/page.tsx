"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // new states
  const [liked, setLiked] = useState<any>({});
  const [saved, setSaved] = useState<any>({});

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await fetch("https://happy.techstrota.com/api/blogs");
        const data = await res.json();

        // add views automatically
        const blogsWithViews = data.map((blog: any) => ({
          ...blog,
          views: Math.floor(Math.random() * 2000) + 200,
        }));

        setBlogs(blogsWithViews);
      } catch (error) {
        console.error("Blog fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, []);

  const categories = ["All", "Logistics", "Transport", "Technology", "Shipping"];

  const filteredBlogs = blogs.filter((blog) => {
    
    const matchSearch = blog.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || blog.category === category;

    return matchSearch && matchCategory;
  });

  const featuredBlog = blogs[0];

  // like function
  const handleLike = (id: any) => {
    setLiked((prev: any) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // bookmark function
  const handleSave = (id: any) => {
    setSaved((prev: any) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      {/* HERO */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-white text-center px-4">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Global-Logistics.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">Blog</h1>
          <p className="mt-3 text-sm">
            Home <span className="text-orange-400">»</span> Blog
          </p>
        </div>
      </section>

      {/* FEATURED BLOG */}
      {featuredBlog && !loading && (
        <section className="p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid md:grid-cols-2 gap-8 items-center bg-gray-100 rounded-xl p-6"
          >
            <img
              src={featuredBlog.image}
              className="rounded-xl w-full h-72 object-cover"
              alt={featuredBlog.title}
            />

            <div>
              <h2 className="text-3xl font-bold mb-4">
                Featured Blog
              </h2>

              <h3 className="text-xl font-semibold mb-3">
                {featuredBlog.title}
              </h3>

              <p className="text-gray-500 text-sm mb-4">
                {featuredBlog.author || "Admin"} • {featuredBlog.views} view
              </p>

              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={`/blog/${featuredBlog.slug}`}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg inline-block"
                >
                  Read Full Article →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>
      )}

      {/* MAIN */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid lg:grid-cols-4 gap-10">

        {/* BLOG LIST */}
        <div className="lg:col-span-3">

          {/* SEARCH */}
          <div className="flex flex-col md:flex-row justify-between gap-5 mb-10">
            <input
              type="text"
              placeholder="Search blogs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border p-3 rounded-lg w-full md:w-1/3"
            />

            <div className="flex gap-3 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-lg border ${
                    category === cat
                      ? "bg-orange-500 text-white"
                      : "bg-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* LOADING */}
          {loading && (
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="h-64 bg-gray-200 animate-pulse rounded-xl"
                />
              ))}
            </div>
          )}

          {/* BLOG GRID */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog._id || index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="shadow-lg rounded-xl p-5 bg-white group"
              >
                {/* IMAGE */}
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={blog.image}
                    className="h-48 w-full object-cover group-hover:scale-110 transition duration-500"
                    alt={blog.title}
                  />
                </div>

                {/* CATEGORY */}
                <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded mt-3 inline-block">
                  {blog.category || "Logistics"}
                </span>

                {/* TITLE */}
                <h2 className="mt-3 font-semibold text-lg">
                  {blog.title}
                </h2>

                {/* META */}
                <p className="text-sm text-gray-500 mt-1">
                  {blog.author || "Admin"} • 👁 {blog.views}
                </p>

                {/* ACTION BUTTONS */}
                <div className="flex gap-4 mt-3 text-sm">
                  <button onClick={() => handleLike(blog._id)}>
                    {liked[blog._id] ? "❤️ Liked" : "🤍 Like"}
                  </button>

                  <button onClick={() => handleSave(blog._id)}>
                    {saved[blog._id] ? "🔖 Saved" : "📑 Save"}
                  </button>

                  <button
                    onClick={() =>
                      navigator.share
                        ? navigator.share({
                            title: blog.title,
                            url: window.location.href,
                          })
                        : alert("Sharing not supported")
                    }
                  >
                    📤 Share
                  </button>
                </div>

                {/* READ MORE */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="inline-block mt-4"
                >
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-blue-600 active:text-orange-500 font-semibold transition"
                  >
                    Read More →
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {filteredBlogs.length === 0 && !loading && (
            <p className="text-center mt-10 text-gray-500">
              No blogs found
            </p>
          )}
        </div>

        {/* SIDEBAR */}
        <aside>
         <div className="bg-white p-6 rounded-xl shadow-lg">
  <h3 className="text-xl font-bold mb-4 border-b pb-2">
    Recent Posts
  </h3>

  <div className="space-y-4">

    <div className="p-3 rounded-lg border hover:bg-gray-50 transition">
      <p className="font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
        Laravel Framework: Powering Modern Web Applications
      </p>
    </div>

    <div className="p-3 rounded-lg border hover:bg-gray-50 transition">
      <p className="font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
        Empowering Interns at Techstrota: Mastering Modern Web Development
      </p>
    </div>

    <div className="p-3 rounded-lg border hover:bg-gray-50 transition">
      <p className="font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
        Cybersecurity Best Practices for IT Businesses
      </p>
    </div>

    <div className="p-3 rounded-lg border hover:bg-gray-50 transition">
      <p className="font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
        Future of AI in Software Development
      </p>
    </div>

    <div className="p-3 rounded-lg border hover:bg-gray-50 transition">
      <p className="font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
        Cloud Computing Trends: What Businesses Need to Know in 2025
      </p>
    </div>

  </div>
</div>
          {/* NEWSLETTER */}
          <div className="bg-orange-500 text-white rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3">
              Subscribe Newsletter
            </h3>

            <p className="text-sm mb-4">
              Get latest logistics updates.
            </p>

            <input
              type="email"
              placeholder="Enter email"
              className="w-full p-2 rounded text-black mb-3"
            />

            <button className="w-full bg-black py-2 rounded">
              Subscribe
            </button>
          </div>
        </aside>
      </section>
    </>
  );
}