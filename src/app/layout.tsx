import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Karla } from "next/font/google";
import Script from "next/script";
import { ScrollToTop } from "../components/scroll-to-top";
import "./globals.css";
// import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Gabriel A.",
  description: "Gabriel A. personal website",
};

const karla = Karla({
  subsets: ["latin"],
  weight: "400",
});

// https://www.reddit.com/r/nextjs/comments/1bhfikg/comment/kxwj9ou/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button
const Header = dynamic(() => import("./Header"), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={`${karla.className} min-h-full px-6`}>
        {/*<Analytics />*/}
        <Script id="theme-toggle" strategy="afterInteractive">
          {`document.documentElement.classList.toggle("dark", localStorage.theme ===
        "dark" || (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches))`}
        </Script>
        <Header />
        <main className="mx-auto max-w-prose pb-4">
          {children}
          <ScrollToTop />
        </main>
        <footer className="mx-auto flex max-w-prose flex-col max-sm:items-start items-center gap-2 py-6 text-sm text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-4">
            <a
              className="decoration-zinc-500 underline-offset-4 transition-all sm:hover:underline dark:decoration-zinc-400"
              href="https://github.com/korefs/blog"
              target="_blank"
            >
              Code
            </a>
            {/* <Link
              className="decoration-zinc-500 underline-offset-4 transition-all sm:hover:underline dark:decoration-zinc-400"
              target="_blank"
              href="/rss.xml"
            >
              RSS Feed
            </Link> */}
            {/* <a
              className="decoration-zinc-500 underline-offset-4 transition-all sm:hover:underline dark:decoration-zinc-400"
              href="https://x.com/okorekk"
              target="_blank"
            >
              @okorekk
            </a> */}
          </div>
          <blockquote className="text-zinc-800 dark:text-zinc-300">
            Smile, you&apos;re alive :)
          </blockquote>
        </footer>
      </body>
    </html>
  );
}
