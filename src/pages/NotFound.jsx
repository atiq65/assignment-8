import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../assets/error-404.png";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <img src={errorImage} alt="errorImage" className="ml-[400px]" />
      <h1 className="text-5xl font-bold mb-4">Oops, page not found!</h1>
      <p className="text-gray-600 mb-6">
        The page you are looking for is not available.
      </p>
      <Link
        to="/"
        style={{
          background:
            "linear-gradient(125.07deg, rgba(99,46,227,1), rgba(159,98,242,1) 100%)",
        }}
        className="px-4 py-3 bg-blue-600 text-white rounded"
      >
        Go Back!
      </Link>
    </div>
  );
}
