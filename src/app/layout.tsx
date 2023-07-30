"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Heart, Menu, X } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gamezop Assessment",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <html lang="en">
      <body className={`${inter.className} text-gray-300  w-screen`}>
        <Sidebar isNavOpen={isNavOpen} />
        <div className="bg-darkBlue md:pl-[24rem] mx-auto md:w-full h-screen overflow-auto ">
          <div className="w-11/12 mx-auto h-full flex flex-col max-w-screen-2xl">
            <div className="flex-grow shrink-0 basis-auto">
              {/* <nav className="h-24  flex justify-between w-full items-center">
                <Link href="/favorites" className="flex hover:text-white ">
                  <Heart /> <div className="ml-2">My Favorite Games</div>
                </Link>
                <button
                  className=" md:hidden flex items-center text-blue-500 p-3"
                  onClick={toggleNav}
                >
                  {isNavOpen ? <X /> : <Menu />}
                </button>
              </nav> */}
              <main className=" w-11/12 my-12">{children}</main>
            </div>
            <footer className="my-24 text-center shrink-0 ">
              This is the footer
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}