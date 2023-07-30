"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Heart, Menu, X } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Search from "@/components/SearchInput";
import SearchInput from "@/components/SearchInput";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gamezop Assessment",
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
        <Sidebar isNavOpen={isNavOpen} toggleNav={toggleNav} />
        <div className="bg-darkBlue md:pl-[24rem] mx-auto md:w-full h-screen overflow-auto ">
          <div className="w-11/12 mx-auto h-full flex flex-col max-w-screen-xl">
            <div className="flex-grow shrink-0 basis-auto">
              <nav className="h-24 block gap-4 flex justify-between w-full items-center">
                <Link
                  href="/search/hey"
                  className="flex hover:text-white items-center"
                >
                  <Heart />{" "}
                  <span className="ml-2 hidden md:block text-lg">
                    My Favorites
                  </span>
                </Link>
                <SearchInput />
                <button
                  className=" md:hidden flex items-center text-blue-500"
                  onClick={toggleNav}
                >
                  {isNavOpen ? <X /> : <Menu />}
                </button>
              </nav>
              <main className=" w-11/12 mx-auto md:mx-0 my-6">{children}</main>
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
