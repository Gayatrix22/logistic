import { notFound } from 'next/navigation';

export const dynamic = 'force-static';
export const dynamicParams = false;
export const revalidate = false;

type Post = {
  id: number;
  title: string;
  slug: string;
  content: string;
  image?: string | null;
};

export async function generateStaticParams() {
  const res = await fetch(
    'https://happy.techstrota.com/api/blogs',
    { cache: 'force-cache' }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch blog slugs');
  }

  const posts = await res.json();

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

async function getPost(slug: string): Promise<Post | null> {
  const res = await fetch(
    `https://happy.techstrota.com/api/blogs/${slug}`,
    { cache: 'force-cache' }
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded mb-6"
        />
      )}

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
