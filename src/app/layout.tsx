import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Furqan Mehdi - Software Quality Assurance Engineer",
  description: "Portfolio of Furqan Mehdi, a Software Quality Assurance Engineer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter">
        <Navbar />
        <main className="flex-1 pt-[76px]">{children}</main>
      </body>
    </html>
  );
}
