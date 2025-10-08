import React, { useEffect, useMemo, useState } from "react";
import appsData from "../data/appsData";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function MyInstallations() {
  const [installedIds, setInstalledIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("installedApps") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("installedApps", JSON.stringify(installedIds));
  }, [installedIds]);

  const installedApps = useMemo(
    () => appsData.filter((a) => installedIds.includes(a.id)),
    [installedIds]
  );

  function handleUninstall(id) {
    setInstalledIds((prev) => prev.filter((x) => x !== id));
    toast.success("App uninstalled");
  }

  if (installedApps.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-semibold">No installed apps yet</h2>
        <p className="text-gray-600 mt-2">Install apps from the Apps page.</p>
        <Link to="/apps" className="mt-4 inline-block text-blue-600">
          Browse Apps
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">My Installations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {installedApps.map((app) => (
          <div key={app.id} className="bg-white p-4 rounded shadow">
            <div className="flex items-center gap-3">
              <img
                src={app.image}
                alt={app.title}
                className="w-14 h-14 rounded object-cover"
              />
              <div>
                <h3 className="font-semibold">{app.title}</h3>
                <p className="text-sm text-gray-500">
                  Downloads: {app.downloads.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <Link
                to={`/app/${app.id}`}
                className="text-sm px-3 py-1 border rounded"
              >
                Details
              </Link>
              <button
                onClick={() => handleUninstall(app.id)}
                className="text-sm px-3 py-1 bg-red-500 text-white rounded"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
