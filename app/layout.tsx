import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Masum Billah",
  description: "A Dedicated WEB Developer - MERN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className="scroll-pt-[3.5rem]">
          <body className={`${inter.className} container mx-auto size-full`}>{children}</body>
      </html>
  );
}
