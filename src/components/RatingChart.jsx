import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function RatingChart({ data }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-extrabold text-gray-800 mb-4">Ratings</h2>
      <div className="w-full bg-white rounded-xl shadow-sm p-4">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 10, right: 40, left: 60, bottom: 10 }}
          >
            {/* Horizontal Axis (value) */}
            <XAxis
              type="number"
              tick={{ fontSize: 12, fill: "#555" }}
              axisLine={false}
              tickLine={false}
            />
            {/* Vertical Axis (1 star, 2 star, etc.) */}
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fontSize: 14, fontWeight: "600", fill: "#333" }}
              axisLine={false}
              tickLine={false}
            />
            {/* Tooltip */}
            <Tooltip
              cursor={{ fill: "rgba(0,0,0,0.05)" }}
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
              }}
              labelStyle={{ fontWeight: "bold", color: "#333" }}
            />
            {/* Bars */}
            <Bar
              dataKey="count"
              fill="#00E0A1"
              barSize={25}
              radius={[0, 8, 8, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
