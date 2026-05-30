import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Durga Praveen Lotu | Flutter Developer & AI Enthusiast",
  description: "Portfolio of Durga Praveen Lotu - Computer Science Undergraduate student specializing in Flutter, Firebase, Artificial Intelligence, and Cloud Computing. Detail-oriented developer building beautiful mobile and AI applications.",
  keywords: ["Durga Praveen Lotu", "Praveen Lotu", "Flutter Developer", "Firebase", "AI Enthusiast", "Mobile Developer", "GIET Engineering College", "Nuzvid Polytechnic", "Portfolio"],
  authors: [{ name: "Durga Praveen Lotu" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased text-white bg-[#030d36]">
        {children}
      </body>
    </html>
  );
}
