"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogPage() {

  const [blogs, setBlogs] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const getBlogs = async () => {
      try {

        const res = await fetch("https://happy.techstrota.com/api/blogs");
        const data = await res.json();

        const blogsWithViews = data.map((blog: any) => ({
          ...blog,
          views: Math.floor(Math.random() * 2000) + 200,
        }));

        setBlogs(blogsWithViews);

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getBlogs();

  }, []);

  const filteredBlogs = blogs.filter((blog) => {
    return blog.title?.toLowerCase().includes(search.toLowerCase());
  });

  const featuredBlog = blogs[0];

  return (
    <>

{/* HERO SECTION */}
<section className="relative h-[35vh] sm:h-[40vh] md:h-[45vh] flex items-center justify-center text-white text-center overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/Global-Logistics.jpg')" }}
  ></div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div 
    className="relative z-10 px-4"
    data-aos="fade-up"
  >
    <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
      Blog
    </h1>

    <p className="mt-2 text-xs sm:text-sm md:text-base">
      Home <span className="text-red-500">»</span> Blog
    </p>
  </div>

</section>

{/* FEATURED BLOG */}

{featuredBlog && !loading && (

<section className="p-10">

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.6}}
className="grid md:grid-cols-2 gap-8 bg-gray-100 p-6 rounded-xl"
>

<img
src={featuredBlog.image}
className="rounded-xl h-72 w-full object-cover"
/>

<div>

<h2 className="text-3xl font-bold mb-4">
Featured Blog
</h2>

<h3 className="text-xl font-semibold mb-3">
{featuredBlog.title}
</h3>

<p className="text-gray-500 text-sm mb-4">
{featuredBlog.author || "Admin"} • 👁 {featuredBlog.views}
</p>

<motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}}>

<Link
href={`/blog/${featuredBlog.slug}`}
className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg"
>
Read Full Article →
</Link>

</motion.div>

</div>

</motion.div>

</section>

)}



{/* MAIN SECTION */}

<section className="max-w-7xl mx-auto px-6 pb-20 grid lg:grid-cols-4 gap-10">

{/* BLOG LIST */}

<div className="lg:col-span-3">

{/* SEARCH */}

<div className="mb-10">

<input
type="text"
placeholder="Search blogs..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="border p-3 rounded-lg w-full md:w-1/3"
/>

</div>


{/* LOADING */}

{loading && (

<div className="grid md:grid-cols-2 gap-8">

{[1,2,3,4].map((item)=>(
<div
key={item}
className="h-64 bg-gray-200 animate-pulse rounded-xl"
/>
))}

</div>

)}


{/* BLOG GRID */}

<div className="grid md:grid-cols-2 gap-8">

{filteredBlogs.map((blog,index)=>(

<motion.div
key={blog._id || index}
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
whileHover={{y:-10}}
transition={{duration:0.4}}
className="group rounded-xl overflow-hidden shadow-lg bg-white"
>

{/* IMAGE */}

<div className="relative overflow-hidden">

<img
src={blog.image}
className="h-48 w-full object-cover transition duration-700 group-hover:scale-110"
/>

{/* OVERLAY */}

<div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 flex items-center justify-center transition duration-500">

<Link
href={`/blog/${blog.slug}`}
className="opacity-0 group-hover:opacity-100 bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold transition duration-500"
>
Read Article →
</Link>

</div>

</div>

{/* CONTENT */}

<div className="p-5">

<span className="text-xs bg-orange-500 text-white px-2 py-1 rounded inline-block">
{blog.category || "Logistics"}
</span>

<h2 className="mt-3 font-semibold text-lg group-hover:text-orange-500 transition">
{blog.title}
</h2>

<p className="text-sm text-gray-500 mt-1">
{blog.author || "Admin"} • 👁 {blog.views}
</p>

<motion.div
whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
className="inline-block mt-4"
>

<Link
href={`/blog/${blog.slug}`}
className="text-blue-600 font-semibold"
>
Read More →
</Link>

</motion.div>

</div>

</motion.div>

))}

</div>

</div>


{/* SIDEBAR */}

<aside className="space-y-8">

{/* RECENT POSTS */}

<motion.div
initial={{opacity:0,x:40}}
animate={{opacity:1,x:0}}
transition={{duration:0.6}}
className="bg-white p-6 rounded-xl shadow-lg"
>

<h3 className="text-xl font-bold mb-4 border-b pb-2">
Recent Posts
</h3>

<div className="space-y-4">

{blogs.slice(0,5).map((post,index)=>(

<motion.div
key={index}
whileHover={{scale:1.05}}
className="flex gap-3 items-center border p-2 rounded-lg hover:bg-gray-50"
>

<img
src={post.image}
className="w-16 h-16 object-cover rounded-md"
/>

<Link
href={`/blog/${post.slug}`}
className="text-sm font-semibold text-gray-800 hover:text-blue-600"
>
{post.title}
</Link>

</motion.div>

))}

</div>

</motion.div>


{/* NEWSLETTER */}

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.6,delay:0.2}}
className="bg-orange-500 text-white rounded-xl p-6"
>

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

<motion.button
whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
className="w-full bg-black py-2 rounded"
>

Subscribe

</motion.button>

</motion.div>

</aside>

</section>

</>

  );
}