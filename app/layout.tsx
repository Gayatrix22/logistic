import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore
import "./globals.css";

// @ts-ignore
import "aos/dist/aos.css";

// COMPONENTS
import Header from "./component/header";
import Footer from "./component/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Era Marya",
  description: "Logistics Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white overflow-x-hidden`}
      >
        <div className="flex flex-col min-h-screen w-full">

          {/* HEADER */}
          <Header />

          {/* CONTENT */}
          <main className="flex-1 w-full">
            {children}
          </main>

          {/* FOOTER */}
          <Footer />

        </div>
      </body>
    </html>
  );
}