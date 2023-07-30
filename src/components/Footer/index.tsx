import { FOOTER_BUTTONS, LANGUAGES } from "@/commons/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-4  sm:p-6  my-24">
      <div className="grid grid-cols-1  gap-8 lg:grid-cols-3">
        <div>
          <h1 className="text-hotPink  text-left w-full text-3xl font-semibold">
            <Link href="/">
              Game<span className="text-gray-300">zop</span>
            </Link>
          </h1>
          <p className="max-w-xs mt-4 text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            accusantium.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 ">
          <div>
            <p className="font-medium">Company</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-400">
              {FOOTER_BUTTONS.map((title) => (
                <div className="hover:opacity-75" key={title}>
                  {title}
                </div>
              ))}
            </nav>
          </div>
          <div>
            <p className="font-medium">Languages</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-400">
              {LANGUAGES.map((lang) => (
                <div className="hover:opacity-75" key={lang}>
                  {lang}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
