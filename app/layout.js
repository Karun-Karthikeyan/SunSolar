import "./globals.css";
import Navbar from "./components/navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";

export const metadata = {
  title: "SunSolar",
  description: "Find top solar companies, compare installers, and get solar insights for your home or business in India. Empowering India with clean, renewable energy.",
  openGraph: {
    title: "SunSolar",
    description: "Find top solar companies, compare installers, and get solar insights for your home or business in India. Empowering India with clean, renewable energy.",
    url: "https://yourdomain.com/",
    images: [
      { url: "https://yourdomain.com/assets/banner.jpg" }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SunSolar",
    description: "Find top solar companies, compare installers, and get solar insights for your home or business in India. Empowering India with clean, renewable energy.",
    images: ["https://yourdomain.com/assets/banner.jpg"]
  },
  alternates: {
    canonical: "https://yourdomain.com/"
  },
  icons: {
    icon: "/assets/letter-s.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <section>
          <nav>
            <Navbar />
          </nav>
          {children}
          <ScrollToTopButton />
        </section>
      </body>
    </html>
  );
}
