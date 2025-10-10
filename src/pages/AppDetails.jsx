import React from "react";
import { useParams, Link } from "react-router-dom";
import appsData from "../data/appsData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { Download, Star, MessageSquare } from "lucide-react";
import toast from "react-hot-toast";
import iconDownload from "../assets/icon-downloads.png";
import iconRating from "../assets/icon-ratings.png";
import iconReview from "../assets/review.png";

export default function AppDetails() {
  const { id } = useParams();
  const app = appsData.find((a) => a.id === parseInt(id));

  if (!app) {
    return (
      <div className="text-center py-20 text-gray-600 text-lg">
        App not found
      </div>
    );
  }

  const handleInstall = () => {
    toast.success(`${app.title} Installed Successfully!`);
  };

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md p-6">
        <img
          src={app.image}
          alt={app.title}
          className="w-32 h-32 object-cover rounded-2xl shadow"
        />

        <div className="md:ml-6 flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-1">{app.title}</h1>
          <p className="text-sm text-blue-600 font-medium mb-4">
            Developed by {app.developer}
          </p>

          {/* Stats Section */}
          <div className="flex flex-wrap gap-8 mb-4">
            <div className="flex flex-col ">
              <img
                src={iconDownload}
                alt="iconDownload"
                className="w-[16px] h-[16px]"
              />
              <span className="text-gray-500 text-sm">Downloads</span>
              <span className="text-xl font-bold">{app.downloads}</span>
            </div>

            <div className="flex flex-col">
              <img
                src={iconRating}
                alt="iconRating"
                className="w-[16px] h-[16px]"
              />
              <span className="text-gray-500 text-sm">Avg Rating</span>
              <span className="text-xl font-bold">{app.rating}</span>
            </div>

            <div className="flex flex-col">
              <img
                src={iconReview}
                alt="iconReview"
                className="w-[16px] h-[16px]"
              />

              <span className="text-gray-500 text-sm">Total Reviews</span>
              <span className="text-xl font-bold">{app.reviews}</span>
            </div>
          </div>

          {/* Install Button */}
          <button
            onClick={handleInstall}
            className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition"
          >
            Install Now ({app.size})
          </button>
        </div>
      </div>

      {/*  Rating Chart Section */}
      <div className="mt-10 bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Rating Distribution
        </h2>

        <ResponsiveContainer width="100%" height={280}>
          <BarChart
            layout="vertical"
            data={app.ratings}
            margin={{ top: 5, right: 50, left: 40, bottom: 5 }}
          >
            <XAxis type="number" hide />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fontSize: 14, fontWeight: 600 }}
            />
            <Tooltip
              cursor={{ fill: "rgba(0,0,0,0.05)" }}
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            />
            <Bar
              dataKey="count"
              fill="#00E0A1"
              radius={[0, 8, 8, 0]}
              barSize={25}
            >
              <LabelList
                dataKey="count"
                position="right"
                fill="#333"
                fontSize={14}
                fontWeight={600}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/*  Description Section */}
      <div className="mt-10 bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Description</h2>
        <p className="text-gray-600 leading-relaxed">{app.description}</p>
      </div>

      {/* Back Button */}
      <div className="text-center mt-6">
        <Link
          to="/"
          className="text-blue-500 hover:underline font-medium text-sm"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
