import { AdminLayout } from '@/components/admin/AdminLayout';
import { requireAuth } from '@/lib/server-auth';
import { prisma } from '@/lib/prisma';

export default async function AdminDashboard() {
  const user = await requireAuth();
  const blogCount = await prisma.blog.count();

  return (
    <AdminLayout>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
            <h3 className="text-zinc-400 font-medium mb-2">Total Blogs</h3>
            <p className="text-4xl font-bold">{blogCount}</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
            <h3 className="text-zinc-400 font-medium mb-2">Logged in as</h3>
            <p className="text-xl font-bold mt-2">@{user.username}</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
