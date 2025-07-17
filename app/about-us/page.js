export const metadata = {
  title: "About Us | SunSolar",
  description: "Learn more about SunSolar, our mission, and our team.",
  openGraph: {
    title: "About Us | SunSolar",
    description: "Learn more about SunSolar, our mission, and our team.",
    url: "https://yourdomain.com/about-us",
    images: [
      { url: "https://yourdomain.com/assets/banner.jpg" }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | SunSolar",
    description: "Learn more about SunSolar, our mission, and our team.",
    images: ["https://yourdomain.com/assets/banner.jpg"]
  },
  alternates: {
    canonical: "https://yourdomain.com/about-us"
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen text-gray-200 pb-20 mt-10" aria-label="About SunSolar">
      <section className="relative py-20 px-4 flex flex-col items-center mt-15">
        <div className="max-w-3xl text-center mb-12">
          <h1 className="text-5xl font-extrabold text-blue-200 mb-4 drop-shadow-xl tracking-tight">About SunSolar</h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">Empowering a brighter, cleaner future through solar innovation and customer-first service.</p>
        </div>
        <div className="max-w-3xl w-full mx-auto bg-gray-900/80 rounded-3xl shadow-2xl border border-blue-900 p-10 md:p-16 backdrop-blur-md">
          <h2 className="text-3xl font-bold text-violet-300 mb-6">Our Mission</h2>
          <p className="mb-8 text-lg text-gray-200 leading-relaxed">To make clean, renewable energy accessible and affordable for everyone, while delivering exceptional customer service and driving the transition to a sustainable future.</p>
          <h2 className="text-3xl font-bold text-violet-300 mb-6">Our Values</h2>
          <ul className="list-disc pl-8 mb-8 text-lg text-gray-200 space-y-3">
            <li><span className="font-semibold text-blue-200">Integrity:</span> We act with honesty and transparency in all we do.</li>
            <li><span className="font-semibold text-blue-200">Innovation:</span> We embrace new ideas and technologies to deliver the best solutions.</li>
            <li><span className="font-semibold text-blue-200">Customer Focus:</span> We put our customers at the heart of every decision.</li>
            <li><span className="font-semibold text-blue-200">Sustainability:</span> We are committed to protecting the planet for future generations.</li>
          </ul>
          <h2 className="text-3xl font-bold text-violet-300 mb-6">Our Team</h2>
          {/* Add team images with descriptive alt text if any */}
        </div>
      </section>
    </main>
  );
} 