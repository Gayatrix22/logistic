"use client";

import { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Smart Logistics Technology",
    category: "Logistics",
    image: "/Smart Lgistic 1.jpg",
    desc: "AI and automation are transforming logistics operations.",
    link: "https://happy.techstrota.com/api/blogs",
  },
  {
    id: 2,
    title: "Warehouse Automation",
    category: "Warehouse",
    image: "/Warehouse Automation.jpg",
    desc: "Modern warehouses use robots and smart systems.",
    link: "https://happy.techstrota.com/blog",
  },
  {
    id: 3,
    title: "Future of Transport",
    category: "Transport",
    image: "/Future Transportaion.jpg",
    desc: "Electric trucks and digital tracking are the future.",
    link: "https://happy.techstrota.com/blog",
  },
  {
    id: 4,
    title: "Global Shipping Guide",
    category: "Shipping",
    image: "/shipping-internationally.jpg",
    desc: "Learn how international cargo shipping works.",
    link: "https://happy.techstrota.com/blog",
  },
  {
    id: 5,
    title: "Fleet Tracking System",
    category: "Transport",
    image: "/Fleet Management.jpg",
    desc: "Track trucks and deliveries in real time.",
    link: "https://happy.techstrota.com/blog",
  },
  {
    id: 6,
    title: "Supply Chain Optimization",
    category: "Logistics",
    image: "/Supply Chain.jpg",
    desc: "Improve delivery efficiency and reduce delays.",
    link: "https://happy.techstrota.com/blog",
  },
];
export default function BlogPage() {
  const [category, setCategory] = useState("All");

  const filtered =
    category === "All"
      ? blogs
      : blogs.filter((b) => b.category === category);

  return (
    <>
      <main className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen fade-in">

        {/* HERO SECTION */}
        <section className="text-center py-16 px-6">
          <h1 className="text-5xl font-bold text-gray-900 blog-title slide-down">
            Logistics Insights & Blog
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Stay updated with the latest logistics trends, transport innovations,
            and supply chain strategies.
          </p>
        </section>

        {/* CATEGORY FILTER */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap filter-buttons">
          {["All", "Logistics", "Warehouse", "Transport", "Shipping"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2 rounded-full border transition-all duration-300 hover:scale-105
                ${
                  category === cat
                    ? "bg-blue-600 text-white scale-105"
                    : "bg-white hover:bg-blue-100"
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>

        {/* FEATURED BLOG */}
        <div className="max-w-6xl mx-auto px-6 mb-14">
          <div className="grid md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden featured-blog hover:shadow-2xl transition duration-500">
            <img
              src="/AI Revolution in Logistics.jpg"
              className="w-full h-[350px] object-cover featured-img hover:scale-110 transition duration-700"
            />

            <div className="p-10 flex flex-col justify-center">
              <span className="text-blue-600 font-semibold mb-2">
                Featured Blog
              </span>
              <h2 className="text-3xl font-bold mb-3">
                AI Revolution in Logistics
              </h2>
              <p className="text-gray-600 mb-5">
                Artificial intelligence is improving delivery routes,
                warehouse management and logistics planning.
              </p>

              <a
                href="https://example.com/ai-logistics"
                target="_blank"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-fit hover:scale-105 transition"
              >
                Read Article
              </a>
            </div>
          </div>
        </div>

        {/* BLOG GRID */}
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 pb-16 blog-grid">
          {filtered.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 card-animate"
            >
              <img
                src={blog.image}
                className="w-full h-[200px] object-cover rounded-t-2xl hover:scale-110 transition duration-500"
              />

              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">
                  {blog.category}
                </span>

                <h3 className="text-xl font-semibold mt-2">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  {blog.desc}
                </p>

                <a
                  href={blog.link}
                  target="_blank"
                  className="mt-4 inline-block text-blue-600 font-semibold hover:underline hover:translate-x-1 transition"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

      </main>

      {/* Animations + Responsive */}
      <style jsx>{`
        .fade-in {
          animation: fadeIn 1s ease;
        }

        .slide-down {
          animation: slideDown 0.8s ease;
        }

        .card-animate {
          animation: fadeUp 0.8s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1024px) {
          .blog-title {
            font-size: 36px;
          }

          .featured-blog {
            grid-template-columns: 1fr;
          }

          .featured-img {
            height: 280px;
          }
        }

        @media (max-width: 768px) {
          .blog-title {
            font-size: 30px;
          }

          .filter-buttons {
            gap: 10px;
          }

          .blog-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 500px) {
          .blog-title {
            font-size: 24px;
          }

          .blog-grid {
            grid-template-columns: 1fr;
          }

          .featured-img {
            height: 220px;
          }
        }
      `}</style>
    </>
  );
}