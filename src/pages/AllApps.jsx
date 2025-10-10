import React, { useEffect, useMemo, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai"; // react-icons
import appsData from "../data/appsData";
import AppCard from "../components/AppCard";

export default function AllApps() {
  const [query, setQuery] = useState("");
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [sort, setSort] = useState(""); // "high-low" or "low-high"

  useEffect(() => {
    if (query.trim().length > 0) {
      setLoadingSearch(true);
      const t = setTimeout(() => setLoadingSearch(false), 350);
      return () => clearTimeout(t);
    } else {
      setLoadingSearch(false);
    }
  }, [query]);

  const filtered = useMemo(() => {
    const base = appsData.filter((a) =>
      a.title.toLowerCase().includes(query.toLowerCase())
    );
    if (sort === "high-low") {
      return [...base].sort((a, b) => b.downloads - a.downloads); // high -> low
    }
    if (sort === "low-high") {
      return [...base].sort((a, b) => a.downloads - b.downloads); // low -> high
    }
    return base;
  }, [query, sort]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 🔹 Title & Description Section */}
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold text-gray-800 mb-2">
          Our All Applications
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* 🔹 Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <p className="text-2xl font-semibold">({appsData.length})</p>
          <h1 className="text-2xl font-semibold">Apps Found</h1>
        </div>

        <div className="relative w-full max-w-xs flex items-center">
          <AiOutlineSearch className="absolute w-[20px] h-[20px] left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search apps"
            className="border rounded px-10 py-2 w-full focus:outline-none"
          />
          {loadingSearch && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 spinner text-gray-700"></div>
          )}
        </div>
      </div>

      {/* 🔹 App Cards Section */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-4xl text-gray-600">
          No App Found
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
}
