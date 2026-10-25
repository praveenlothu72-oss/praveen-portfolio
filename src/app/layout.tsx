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
  title: "Durga Praveen Lotu | AI Engineer & Backend Developer",
  description: "Portfolio of Durga Praveen Lotu - Computer Science student specializing in AI Agents Building, Claude MCPs, Custom RAG Systems, Prompt Engineering, and FastAPI Backend Architecture.",
  keywords: ["Durga Praveen Lotu", "Praveen Lotu", "AI Engineer", "AI Agents", "Claude MCP", "FastAPI", "RAG", "Prompt Engineering", "Portfolio"],
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
