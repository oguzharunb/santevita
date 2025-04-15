import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Head } from 'next/document';
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Santevita",
  description: "Santevita Fizyoterapi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
	  <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
		<Navbar/>
        {children}
		<Footer/>
      </body>
    </html>
  );
}
