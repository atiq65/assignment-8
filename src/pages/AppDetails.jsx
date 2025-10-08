import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import appsData from "../data/appsData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import toast from "react-hot-toast";

export default function AppDetails() {
  const { id } = useParams();
  const appId = Number(id);
  const app = appsData.find((a) => a.id === appId);

  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const installedList = JSON.parse(
      localStorage.getItem("installedApps") || "[]"
    );
    setInstalled(installedList.includes(appId));
    window.scrollTo(0, 0);
  }, [appId]);

  if (!app) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-xl font-semibold">App not found</h2>
        <p className="text-gray-600 mt-2">
          The app you are looking for does not exist.
        </p>
        <Link to="/apps" className="mt-4 inline-block text-blue-600">
          Back to apps
        </Link>
      </div>
    );
  }

  const chartData = [
    { name: "1", value: app.ratings[0].count },
    { name: "2", value: app.ratings[1].count },
    { name: "3", value: app.ratings[2].count },
    { name: "4", value: app.ratings[3].count },
    { name: "5", value: app.ratings[4].count },
  ];

  function handleInstall() {
    const prev = JSON.parse(localStorage.getItem("installedApps") || "[]");
    if (!prev.includes(appId)) {
      const next = [...prev, appId];
      localStorage.setItem("installedApps", JSON.stringify(next));
      setInstalled(true);
      toast.success(`${app.title} installed`);
    } else {
      toast("Already installed");
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-72 object-cover rounded"
          />
        </div>

        <div className="md:col-span-2">
          <h1 className="text-2xl font-semibold">{app.title}</h1>
          <p className="text-sm text-gray-500">{app.companyName}</p>
          <div className="mt-4 flex items-center gap-4">
            <div className="text-lg font-medium">⭐ {app.ratingAvg}</div>
            <div className="text-sm text-gray-600">{app.reviews} reviews</div>
            <div className="text-sm text-gray-600">
              Downloads: {app.downloads.toLocaleString()}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={handleInstall}
              disabled={installed}
              className={`px-4 py-2 rounded text-white ${
                installed
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {installed ? "Installed" : "Install"}
            </button>

            <Link to="/my-installations" className="text-blue-600">
              My Installations
            </Link>
          </div>

          <div className="mt-8 bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">App Reviews</h3>
            <div style={{ width: "100%", height: 240 }}>
              <ResponsiveContainer>
                <BarChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#2563eb" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="mt-6 bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-gray-700">{app.description}</p>
            <div className="text-sm text-gray-500 mt-3">
              Size: {app.size} MB
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
