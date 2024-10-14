"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import { Bell, Search , Menu, Moon, LogOut, Sun, CircleUser } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  
  // Local state for search input
  const [searchTerm, setSearchTerm] = useState("");
  const [headings, setHeadings] = useState<string[]>([]);
  const [filteredHeadings, setFilteredHeadings] = useState<string[]>([]);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  // Function to filter headings based on search term
  const filterHeadings = (term: string) => {
    if (term) {
      const filtered = headings.filter((heading) =>
        heading.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredHeadings(filtered);
    } else {
      setFilteredHeadings([]);
    }
  };

  useEffect(() => {
    const allHeadings = Array.from(document.querySelectorAll("h1, h2, h3")).map(
      (heading) => heading.innerText
    );
    setHeadings(allHeadings);
  }, []);

  useEffect(() => {
    filterHeadings(searchTerm);
  }, [searchTerm, headings]);

  return (
    <div className="flex justify-between items-center w-full mb-7">
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>

        <div className="relative">
          <input
            type="search"
            placeholder="Start typing to search groups & products"
            className="pl-10 pr-4 py-2 w-50 md:w-60 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search  className="text-gray-500" size={20} />
          </div>

          {filteredHeadings.length > 0 && (
            <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded-md mt-1 z-10">
              {filteredHeadings.map((heading, index) => (
                <li key={index} className="px-4 py-2 hover:bg-gray-100">
                  {heading}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
          <div>
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (
                <Sun className="cursor-pointer text-gray-500" size={24} />
              ) : (
                <Moon className="cursor-pointer text-gray-500" size={24} />
              )}
            </button>
          </div>
          <div className="relative">
            <Bell className="cursor-pointer text-gray-500" size={24} />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
              3
            </span>
          </div>
          <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
          <div className="flex items-center gap-3 cursor-pointer">
            <CircleUser className="cursor-pointer text-gray-500" size={24} />
            <span className="font-semibold">Qasim Nalawala</span>
          </div>
        </div>
        <Link href="/settings">
          <LogOut className="cursor-pointer text-gray-500" size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
