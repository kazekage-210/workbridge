import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Workbridge",
  description: "Hiring platform MVP for teams and candidates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 text-gray-900 antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Nav />
          <main className="flex-1 py-12 sm:py-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
