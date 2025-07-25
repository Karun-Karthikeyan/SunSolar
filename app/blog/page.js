'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function BlogPage() {
  const router = useRouter();
  const [blogPosts, setBlogPosts] = useState([]);
  const [error, setError] = useState(null);

  const images = [
    '/assets/1.jpg',
    '/assets/2.jpg',
    '/assets/4.jpg',
    '/assets/5.jpg',
  ];

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase
        .from('blog_data')
        .select('*');
      if (error) {
        setError(error.message);
      } else {
        setBlogPosts(data);
      }
    };
    fetchBlogs();
  }, []);

  if (error) {
    return <div className="text-white p-10">Error loading blogs: {error}</div>;
  }

  return (
    <main className="bg-gray-900 min-h-screen text-gray-200 pb-20 pt-24 px-4">
      <div className="max-w-3xl text-center mx-auto mb-12">
        <h1 className="text-5xl font-bold text-blue-300 mb-4">Our Blog</h1>
        <p className="text-lg text-gray-300">
          Insights, tips, and news from the world of solar energy.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, idx) => (
          <div
            key={post.slug}
            onClick={() => router.push(`/blog/${post.slug}`)}
            className="cursor-pointer bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-2xl shadow-lg border border-gray-700 overflow-hidden transition-transform duration-200 hover:scale-105"
          >
            <div className="h-48 w-full relative">
              <Image
                src={images[idx % images.length]}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                priority={idx === 0}
              />
            </div>
            <div className="p-6 flex flex-col h-full">
              <h2 className="text-xl font-bold text-violet-300 mb-2">{post.title}</h2>
              <p className="text-gray-300 text-sm flex-1 line-clamp-3">{post.content}</p>
              <div className="flex justify-between text-xs text-gray-400 mt-4">
                <span>{post.date}</span>
                <span>By {post.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
