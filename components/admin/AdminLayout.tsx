'use client';

import Link from 'next/link';

export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 flex text-white font-sans">
      <aside className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-zinc-800">
          <h2 className="text-xl font-bold tracking-wider">ADMIN PANEL</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className="block px-4 py-2.5 rounded-lg hover:bg-zinc-800 transition-colors text-zinc-300 hover:text-white">
            Dashboard
          </Link>
          <Link href="/admin/blogs" className="block px-4 py-2.5 rounded-lg hover:bg-zinc-800 transition-colors text-zinc-300 hover:text-white">
            Manage Blogs
          </Link>
          <Link href="/admin/blogs/create" className="block px-4 py-2.5 rounded-lg hover:bg-zinc-800 transition-colors text-zinc-300 hover:text-white">
            Create Blog
          </Link>
        </nav>
        <div className="p-4 border-t border-zinc-800">
          <button onClick={() => {
            document.cookie = 'admin_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
            window.location.href = '/admin/login';
          }} className="w-full text-left px-4 py-2.5 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors">
            Logout
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-auto bg-zinc-950">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
