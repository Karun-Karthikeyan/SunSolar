import Image from 'next/image';
import { supabase } from '@/lib/supabaseClient';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const slug = decodeURIComponent(params?.slug);
  const { data: blog } = await supabase
    .from('blog_data')
    .select('title, description, slug')
    .eq('slug', slug)
    .single();

  const title = blog?.title || 'Blog Post';
  const description = blog?.description || 'Read full article on solar insights from SunSolar.';
  const url = `https://yourdomain.com/blog/${slug}`;
  const image = 'https://yourdomain.com/assets/banner.jpg'; // Or use a blog-specific image if available

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const slug = params.slug;

  const { data: blog, error } = await supabase
    .from('blog_data')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!blog || error) {
    notFound(); // Returns a 404 page
  }

  const images = [
    '/assets/1.jpg',
    '/assets/2.jpg',
    '/assets/4.jpg',
    '/assets/5.jpg',
  ];
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <main className="bg-gray-950 min-h-screen py-10 px-4 text-gray-200">
      <article className="max-w-6xl mx-auto rounded-xl border bg-gray-900 border-gray-800 shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* IMAGE SECTION */}
        <div className="md:w-1/2 relative h-64 md:h-auto">
          <Image
            src={randomImage}
            alt={`Cover image for ${blog.title}`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          />
        </div>

        {/* CONTENT SECTION */}
        <div className="md:w-1/2 p-6 sm:p-8 lg:p-10">
          <h1 className="text-3xl font-bold text-blue-200 mb-4">{blog.title}</h1>

          <div className="flex flex-wrap text-sm text-gray-400 mb-4">
            <span className="mr-4">By {blog.author || 'Unknown'}</span>
            <span>{blog.posted_on || 'Date not available'}</span>
          </div>

          {/* Tags */}
          {Array.isArray(blog.tags) && blog.tags.length > 0 && (
            <section className="mb-4">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block text-xs font-medium bg-blue-900 border border-blue-700 text-blue-200 px-2 py-1 mr-2 rounded"
                >
                  #{tag}
                </span>
              ))}
            </section>
          )}

          <section
            className="prose prose-invert prose-gray max-w-none prose-headings:text-blue-300 prose-a:text-blue-400 prose-img:rounded prose-pre:bg-gray-800"
            dangerouslySetInnerHTML={{ __html: blog.content || '<p>No content available.</p>' }}
          />
        </div>
      </article>
    </main>
  );
}
