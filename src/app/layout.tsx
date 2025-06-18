import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const circularMedium = localFont({
  src: "../../public/fonts/Circular Std Medium.ttf",
  variable: "--font-circular-medium",
});

const circularBook = localFont({
  src: "../../public/fonts/Circular Std Book.ttf",
  variable: "--font-circular-book",
});

export const metadata: Metadata = {
  title: "AlgoHive",
  description: "AI-Powered Collective Intelligence for Optimized Trading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${circularMedium.variable} ${circularBook.variable} antialiased bg-[#090112] text-[#efe0ff]`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
