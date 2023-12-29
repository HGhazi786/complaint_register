"use client";
import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";
import { redirect, useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";

const SearchComponent = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  

  const handleInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: any) => {
    event.preventDefault();
    setIsSearchOpen(false);
    // Perform search logic with the searchQuery value
    console.log("Search query:", searchQuery);
  };
let path
  if(searchQuery==null){
    path='#'
  }
  else{
    path=searchQuery
  }
  return (
    <div className="absolute top-10 right-8 flex">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="px-4 py-1 border border-gray-300 rounded-l-full shadow-md focus:outline-none focus:ring-none text-black"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleInputChange}
          />
        </form>
        <Link href={`/search/${searchQuery}`} className="text-lg bg-black text-white py-1 px-2 rounded-r-full">
          <FaSearch />
        </Link>
    </div>
  );
};

export default SearchComponent;
