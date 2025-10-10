import React from "react";
import { useNavigate } from "react-router-dom";
import appsData from "../data/appsData";
import AppCard from "../components/AppCard";
import hero from "../assets/hero.png";
import google from "../assets/google.png";
import store from "../assets/store.jpg";

export default function Home() {
  const navigate = useNavigate();
  const top8 = appsData.slice(0, 8);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Banner */}
      <section className="rounded-lg p-6 md:p-10 mb-8 text-center flex flex-col items-center">
        {/* Title */}
        <h1 className="text-3xl sm:text-7xl md:text-5xl font-bold mb-4">
          We Build <br /> <span className="text-[#632ee3]">Productive</span>{" "}
          Apps
        </h1>

        {/* Description */}
        <p className="max-w-xl sm:max-w-2xl mb-6 text-sm sm:text-base md:text-lg">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          {/* Google Play */}
          <a
            href="https://play.google.com/store/games?hl=en"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 flex items-center gap-2 bg-white text-2xl font-semibold rounded shadow w-full sm:w-auto justify-center hover:opacity-90 transition"
          >
            <img src={google} alt="google" className="w-[32px] h-[32px]" />
            Google Play
          </a>

          {/* App Store */}
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 flex items-center gap-4 rounded text-2xl font-semibold bg-white/30 w-full sm:w-auto justify-center hover:opacity-90 transition"
          >
            <img src={store} alt="store" className="w-[32px] h-[32px]" />
            App Store
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
      <section
        className="p-[80px] w-full mb-[80px] text-center text-white"
        style={{
          background:
            "linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)",
        }}
      >
        <h1 className="text-5xl font-bold">
          Trusted by Millions, Built for You
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-6 rounded-lg">
            <p>Total Downloads</p>
            <h3 className="text-6xl font-extrabold">29.6M</h3>
            <p className="text-sm mt-2">21% more than last month</p>
          </div>
          <div className="p-6 rounded-lg">
            <p>Total Reviews</p>
            <h3 className="text-6xl font-extrabold">906K</h3>
            <p className="text-sm mt-2">46% more than last month</p>
          </div>
          <div className="p-6 rounded-lg">
            <p>Active Apps</p>
            <h3 className="text-6xl font-extrabold">132+</h3>
            <p className="text-sm mt-2">31 more will Launch</p>
          </div>
        </div>
      </section>

      {/* Top Apps */}
      <section className="mb-8 text-center">
        {/* Title + Description */}
        <div className="mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Trending Apps
          </h2>
          <p className="text-gray-600 mt-1 md:mt-2 max-w-2xl mx-auto">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {top8.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        {/* Button below the apps */}
        <div>
          <button
            onClick={() => navigate("/apps")}
            style={{
              background:
                "linear-gradient(125.07deg, rgba(99,46,227,1), rgba(159,98,242,1) 100%)",
            }}
            className="text-primary px-6 py-2 border rounded transition"
          >
            Show All
          </button>
        </div>
      </section>
    </div>
  );
}
