import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-gray-600 mb-6">Page not found.</p>
      <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded">
        Back to Home
      </Link>
    </div>
  );
}
