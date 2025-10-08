// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function AppCard({ app }) {
//   const navigate = useNavigate();
//   return (
//     <div
//       onClick={() => navigate(`/app/${app.id}`)}
//       className=" cursor-pointer border bg-white rounded-lg p-4 card-shadow"
//     >
//       <div className="flex items-center gap-4">
//         <img
//           src={app.image}
//           alt={app.title}
//           className="w-16 h-16 rounded-md object-cover"
//         />
//         <div className="flex-1">
//           <h3 className="font-semibold">{app.title}</h3>
//           <p className="text-xs text-gray-500">{app.companyName}</p>
//           <div className="text-sm text-gray-700 mt-2 flex items-center gap-3">
//             <span>⭐ {app.ratingAvg}</span>
//             <span className="text-gray-500">·</span>
//             <span className="text-gray-500">{app.reviews} reviews</span>
//           </div>
//         </div>
//       </div>
//       <div className="mt-3 text-sm text-gray-500">
//         Downloads: {app.downloads.toLocaleString()}
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";

export default function AppCard({ app }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/app/${app.id}`)}
      className="cursor-pointer border bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition flex flex-col items-center"
    >
      {/* App Image */}
      <img
        src={app.image}
        alt={app.title}
        className="w-full h-[316px] rounded-lg object-cover mb-3"
      />

      {/* App Title */}
      <h3 className="font-semibold text-lg">{app.title}</h3>

      <div className="flex justify-between">
        {/* Downloads */}
        <p className="text-sm  text-gray-500 mt-1">
          Downloads: {app.downloads.toLocaleString()}
        </p>

        {/* Average Rating */}
        <p className="text-sm  text-yellow-400 mt-1">
          ⭐ {app.ratingAvg.toFixed(1)}
        </p>
      </div>
    </div>
  );
}
