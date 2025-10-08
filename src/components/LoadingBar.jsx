import React from "react";

export default function LoadingBar() {
  return (
    <div className="w-full">
      <div className="h-1 bg-gradient-to-r from-primary to-accent animate-[loading_1.5s_infinite]"></div>
      <style>{`@keyframes loading { 0%{transform:translateX(-100%)} 50%{transform:translateX(0)} 100%{transform:translateX(100%)} }`}</style>
    </div>
  );
}
