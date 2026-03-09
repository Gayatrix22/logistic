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

    return blog.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

  });

  const featuredBlog = blogs[0];

  return (
    <>

{/* HERO */}

<section className="h-[30vh] flex items-center justify-center text-center bg-gray-100">

<div>

<h1 className="text-4xl md:text-5xl font-bold text-gray-800">
Blog
</h1>

<p className="mt-2 text-gray-600">
Home <span className="text-orange-500">»</span> Blog
</p>

</div>

</section>


{/* MAIN SECTION */}

<section className="max-w-7xl mx-auto px-6 pb-20 grid lg:grid-cols-4 gap-10">

{/* BLOG LIST */}

<div className="lg:col-span-3">

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
whileHover={{y:-8}}
transition={{duration:0.4}}
className="shadow-lg rounded-xl p-5 bg-white"
>

<div className="overflow-hidden rounded-lg">

<img
src={blog.image}
className="h-48 w-full object-cover hover:scale-110 transition duration-500"
/>

</div>

<span className="text-xs bg-orange-500 text-white px-2 py-1 rounded mt-3 inline-block">
{blog.category || "Logistics"}
</span>

<h2 className="mt-3 font-semibold text-lg">
{blog.title}
</h2>

<p className="text-sm text-gray-500 mt-1">
{blog.author || "Admin"} • 👁 {blog.views}
</p>

<motion.div
whileHover={{scale:1.1}}
whileTap={{scale:0.9}}
className="inline-block mt-4"
>

<Link
href={`/blog/${blog.slug}`}
className="text-blue-600 font-semibold"
>
Read More →
</Link>

</motion.div>

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




</aside>

</section>

</>

  );
}