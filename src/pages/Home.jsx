import React from "react";
import { useNavigate } from "react-router-dom";
import appsData from "../data/appsData";
import AppCard from "../components/AppCard";

export default function Home() {
  const navigate = useNavigate();
  const top8 = appsData.slice(0, 8);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Banner */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-lg text-white p-10 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover apps you’ll love
        </h1>
        <p className="max-w-2xl">
          Curated apps for productivity, creativity and daily life — fast and
          secure.
        </p>
        <div className="mt-6 flex gap-4">
          <button
            onClick={() => navigate("/apps")}
            className="px-5 py-2 bg-white text-blue-600 rounded shadow"
          >
            App Store
          </button>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 border rounded bg-white/10"
          >
            Play Store
          </a>
        </div>
      </section>

      {/* States */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div
          className="p-6 rounded-lg"
          style={{ background: "linear-gradient(90deg,#ecfeff,#cffafe)" }}
        >
          <h3 className="font-semibold">Installed</h3>
          <p className="text-sm mt-2">Apps you installed</p>
        </div>
        <div
          className="p-6 rounded-lg"
          style={{ background: "linear-gradient(90deg,#fff7ed,#ffedd5)" }}
        >
          <h3 className="font-semibold">New</h3>
          <p className="text-sm mt-2">Just released</p>
        </div>
        <div
          className="p-6 rounded-lg"
          style={{ background: "linear-gradient(90deg,#f5f3ff,#ede9fe)" }}
        >
          <h3 className="font-semibold">Top Rated</h3>
          <p className="text-sm mt-2">Highest rated this month</p>
        </div>
      </section>

      {/* Top Apps */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Top Apps</h2>
          <button onClick={() => navigate("/apps")} className="text-primary">
            Show All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {top8.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>
    </div>
  );
}
