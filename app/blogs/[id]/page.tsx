import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = await prisma.blog.findUnique({
    where: { id }
  });

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-32 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/blogs" className="text-zinc-400 hover:text-white transition-colors mb-8 inline-block">
          &larr; Back to all blogs
        </Link>
        
        <div className="mb-10 text-center">
          <span className="text-zinc-400 mb-4 block">{new Date(blog.createdAt).toLocaleDateString()}</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">{blog.title}</h1>
        </div>

        {blog.imageUrl && (
          <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-2xl relative border border-zinc-800">
            <img 
              src={blog.imageUrl} 
              alt={blog.title}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        <div className="prose prose-invert prose-lg max-w-none text-zinc-300 leading-relaxed whitespace-pre-wrap">
          {blog.content}
        </div>
      </div>
    </div>
  );
}
