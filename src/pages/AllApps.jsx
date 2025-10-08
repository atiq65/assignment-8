import React, { useEffect, useMemo, useState } from "react";
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
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-semibold">All Apps</h1>
          <p className="text-sm text-gray-500">
            {appsData.length} apps available
          </p>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border rounded px-3 py-1"
          >
            <option value="">Sort (default)</option>
            <option value="high-low">Downloads: High → Low</option>
            <option value="low-high">Downloads: Low → High</option>
          </select>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search apps..."
            className="border rounded px-3 py-1"
          />
          {loadingSearch && <div className="spinner text-gray-700"></div>}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-600">No App Found</div>
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
