import React from "react";
import { useNavigate } from "react-router-dom";
import iconDownloads from "../assets/icon-downloads.png";
import iconsRatings from "../assets/icon-ratings.png";

export default function AppCard({ app }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/app/${app.id}`)}
      className="cursor-pointer bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition flex flex-col items-center"
    >
      {/* App Image */}
      <img
        src={app.image}
        alt={app.title}
        className="w-full h-[316px] rounded-lg object-cover mb-3"
      />

      {/* App Title */}
      <h3 className="font-semibold text-lg mb-2 ">{app.title}</h3>

      {/* Downloads & Rating (Two sides) */}
      <div className="flex items-center justify-between w-full px-1">
        {/* Downloads */}
        <p className="text-sm flex gap-2 text-[#00D390]">
          <img
            src={iconDownloads}
            alt="iconDownloads"
            className="w-[16px] h-[16px]"
          />
          {app.downloads.toLocaleString()}
        </p>

        {/* Average Rating */}
        <p className="text-sm text-yellow-500 flex items-center gap-1">
          <img
            src={iconsRatings}
            alt="iconsRatings"
            className="w-[16px] h-[16px]"
          />{" "}
          {app.ratingAvg.toFixed(1)}
        </p>
      </div>
    </div>
  );
}
