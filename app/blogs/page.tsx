import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import Image from 'next/image';

export default async function BlogsPage() {
  const blogs = await prisma.blog.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-32 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-center tracking-tight">Latest from the Blog</h1>
        
        {blogs.length === 0 ? (
          <p className="text-center text-zinc-500 py-20">No blogs published yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link href={`/blogs/${blog.id}`} key={blog.id} className="group flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-600 transition-all hover:shadow-2xl hover:-translate-y-1">
                {blog.imageUrl ? (
                  <div className="relative h-64 w-full overflow-hidden">
                    <img 
                      src={blog.imageUrl} 
                      alt={blog.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="h-64 w-full bg-zinc-800 flex items-center justify-center">
                    <span className="text-zinc-600">No Image</span>
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-sm text-zinc-400 mb-3">{new Date(blog.createdAt).toLocaleDateString()}</span>
                  <h2 className="text-2xl font-bold mb-4 line-clamp-2 group-hover:text-blue-400 transition-colors">{blog.title}</h2>
                  <p className="text-zinc-400 line-clamp-3 mt-auto">{blog.content}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
