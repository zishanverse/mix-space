"use client";

import { useEffect, useState } from "react";
import { SectionLabels } from "@/components/about-us/SectionLabels";
import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  content: string;
  imageUrl: string | null;
  createdAt: string;
}

export function ResearchSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blogs");
        if (res.ok) {
          const data = await res.json();
          setBlogs(data.slice(0, 3)); // Only show top 3 on homepage
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  if (!loading && blogs.length === 0) {
    return null; // Don't show the section if there are no blogs
  }

  return (
    <section className="bg-black py-32 border-t border-white/5 px-4 sm:px-6 lg:px-8">
      {/* Header Label [05] */}
      <SectionLabels
        index="[05]"
        title="RESEARCH & WRITINGS"
        indexColor="#555"
        titleColor="#555"
      />

      <div className="pt-20 mx-auto max-w-7xl">
        {loading ? (
          <div className="text-center text-[#555] py-20">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link href={`/blogs/${blog.id}`} key={blog.id} className="group cursor-pointer flex flex-col gap-6">
                {/* Image Container with hover scale */}
                <div 
                  className="w-full aspect-4/5 rounded-2xl overflow-hidden relative bg-[#111]"
                >
                  {blog.imageUrl ? (
                    <img 
                      src={blog.imageUrl} 
                      alt={blog.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105 border border-white/5 flex items-center justify-center">
                      <span className="text-white/10 font-mono text-sm tracking-widest uppercase">Media</span>
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-3">
                  <span className="text-[#666] text-sm font-medium tracking-wide">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                  <h3 className="text-white text-2xl font-medium tracking-tight line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-[#555] text-sm line-clamp-2">
                    {blog.content}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ResearchSection;
