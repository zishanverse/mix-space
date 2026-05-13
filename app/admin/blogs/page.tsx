import { AdminLayout } from '@/components/admin/AdminLayout';
import { requireAuth } from '@/lib/server-auth';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function AdminBlogsPage() {
  await requireAuth();
  
  const blogs = await prisma.blog.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <AdminLayout>
      <div className="max-w-5xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Manage Blogs</h1>
          <Link href="/admin/blogs/create" className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-zinc-200 transition-colors">
            Create New Blog
          </Link>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="px-6 py-4 text-zinc-400 font-medium">Title</th>
                <th className="px-6 py-4 text-zinc-400 font-medium">Date</th>
                <th className="px-6 py-4 text-zinc-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.length === 0 ? (
                <tr>
                  <td colSpan={3} className="px-6 py-8 text-center text-zinc-500">
                    No blogs found. Create one!
                  </td>
                </tr>
              ) : (
                blogs.map((blog) => (
                  <tr key={blog.id} className="border-b border-zinc-800/50 hover:bg-zinc-800/20">
                    <td className="px-6 py-4 font-medium">{blog.title}</td>
                    <td className="px-6 py-4 text-zinc-400">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      {/* Placeholder for future delete/edit */}
                      <span className="text-sm text-zinc-500">View in app</span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
