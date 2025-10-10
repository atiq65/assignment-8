import React from "react";
import logo from "../assets/logo.png";

export default function LoadingBar() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="flex flex-col items-center gap-3">
        <img src={logo} alt="Logo" className="w-16 h-16 animate-spin-slow" />
      </div>
      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 2s linear infinite;
        }
      `}</style>
    </div>
  );
}
