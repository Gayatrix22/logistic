const BASE_URL = "http://127.0.0.1:8000";

// ✅ REQUIRED for static export
export async function generateStaticParams() {
  try {
    const res = await fetch(`${BASE_URL}/api/blogs`);
    const blogs = await res.json();

    return blogs.map((blog: any) => ({
      slug: blog.slug,
    }));
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

// ✅ SERVER COMPONENT (IMPORTANT FIX: await params)
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return <BlogDetailClient slug={slug} />;
}

// ✅ import AFTER (important)
import BlogDetailClient from "./BlogDetailClient";