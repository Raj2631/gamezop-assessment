"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const SearchInput = () => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  return (
    <div className="relative flex-grow max-w-sm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (searchText.length) {
            router.push(`/search/${searchText.replaceAll(" ", "-")}`);
          }
        }}
        className=" flex items-center bg-darkPurple rounded-full "
      >
        <Search size={20} className="ml-2 " />
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value.toLowerCase().trim())}
          type="text"
          placeholder="Search"
          className="p-2 border-none outline-none bg-transparent  flex-grow"
        />
      </form>
    </div>
  );
};

export default SearchInput;
