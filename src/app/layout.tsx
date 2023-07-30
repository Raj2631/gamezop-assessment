import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SidebarLayout from "@/components/SidebarLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gamezop Assessment",
  description: "PWA app in Nextjs for Gamezop Assessment",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-gray-300  w-screen`}>
        <SidebarLayout>{children}</SidebarLayout>
      </body>
    </html>
  );
}
