import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coders Express — Global Branding & Design Studio",
  description:
    "We are a global branding & design studio, working with founders to create brands, products & digital experiences for the new internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full antialiased">
        <Navbar />
        <main id="top">{children}</main>
        
        {/* Global visual elements injected by the configuration */}
        <div id="scroll-progress"></div>

        {/* Inline Global JavaScript Effects */}
        <Script id="noir-global-effects" strategy="afterInteractive">
          {`
            // Scroll progress bar
            const progressBar = document.getElementById('scroll-progress');
            window.addEventListener('scroll', () => {
              const scrollable = document.documentElement.scrollHeight - window.innerHeight;
              const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
              if (progressBar) progressBar.style.width = pct + '%';
            }, { passive: true });



            // Scroll reveal (IntersectionObserver — no GSAP required)
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(el => {
                if (el.isIntersecting) {
                  el.target.classList.add('is-visible');
                  observer.unobserve(el.target);
                }
              });
            }, { threshold: 0.12 });
            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
          `}
        </Script>
      </body>
    </html>
  );
}
