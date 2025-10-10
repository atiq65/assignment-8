import React from "react";
import app1 from "../assets/demo-app (1).webp";
import app2 from "../assets/demo-app (2).webp";
import app3 from "../assets/demo-app (3).webp";
import iconDownloads from "../assets/icon-downloads.png";
import iconRatings from "../assets/icon-ratings.png";
export default function Installation() {
  const apps = [
    {
      id: 1,
      name: "Forest: Focus For Productivity",
      downloads: "9M",
      rating: 5,
      size: "258 MB",
      image: app1,
    },
    {
      id: 2,
      name: "Forest: Focus For Productivity",
      downloads: "9M",
      rating: 5,
      size: "258 MB",
      image: app2,
    },
    {
      id: 3,
      name: "Forest: Focus For Productivity",
      downloads: "9M",
      rating: 5,
      size: "258 MB",
      image: app3,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      {/* Header Section */}
      <div className="text-center rounded-md py-4 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Your Installed Apps
        </h1>
        <p className="text-gray-500 mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Top Info Row */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <p className="text-gray-700 text-2xl font-semibold">
          {apps.length} Apps Found
        </p>
        <select className="border border-gray-300 text-gray-600 rounded px-3 py-2 text-sm ">
          <option>Sort By Size</option>
          <option>Sort By Name</option>
          <option>Sort By Rating</option>
        </select>
      </div>

      {/* Installed Apps List */}
      <div className="space-y-4">
        {apps.map((app) => (
          <div
            key={app.id}
            className="bg-white rounded-md shadow flex flex-col md:flex-row items-center justify-between p-4 "
          >
            <div className="flex items-center gap-4">
              <img
                src={app.image}
                alt={app.name}
                className="w-12 h-12 rounded-md object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">
                  {app.name}
                </h3>
                <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
                  <span className="flex items-center gap-1 text-[#00D390]">
                    {" "}
                    <img
                      src={iconDownloads}
                      alt="iconDownloads"
                      className="w-[16px] h-[16px]"
                    />
                    {app.downloads}
                  </span>
                  <span className="flex items-center text-[#ff8811] gap-1">
                    {" "}
                    <img
                      src={iconRatings}
                      alt="iconRatings"
                      className="w-[16px] h-[16px]"
                    />
                    {app.rating}
                  </span>
                  <span>{app.size}</span>
                </div>
              </div>
            </div>

            <button className="bg-[#00d390] hover:bg-emerald-600 text-white px-5 py-2 rounded-md mt-3 md:mt-0">
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
