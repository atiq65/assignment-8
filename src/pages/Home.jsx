import React from "react";
import { useNavigate } from "react-router-dom";
import appsData from "../data/appsData";
import AppCard from "../components/AppCard";
import hero from "../assets/hero.png";

export default function Home() {
  const navigate = useNavigate();
  const top8 = appsData.slice(0, 8);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Banner */}
      <section className="rounded-lg p-6 md:p-10 mb-8 text-center flex flex-col items-center">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          We Build <br /> Productive Apps
        </h1>

        {/* Description */}
        <p className="max-w-xl sm:max-w-2xl mb-6 text-sm sm:text-base md:text-lg">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => navigate("/apps")}
            className="px-5 py-2 bg-white text-blue-600 rounded shadow w-full sm:w-auto"
          >
            App Store
          </button>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 border rounded bg-white/30 w-full sm:w-auto"
          >
            Play Store
          </a>
        </div>

        {/* Image */}
        <div className="mt-6 w-full max-w-md">
          <img
            src={hero}
            alt="hero"
            className="mx-auto w-full h-auto rounded-lg"
          />
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
