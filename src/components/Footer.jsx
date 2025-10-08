import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-xl font-bold">⚡ Hero IO</h3>
          <p className="mt-2 text-sm text-gray-300">
            Discover, install and manage curated apps.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/apps" className="hover:underline">
                Apps
              </Link>
            </li>
            <li>
              <Link to="/installation" className="hover:underline">
                Installation
              </Link>
            </li>
            <li>
              <Link to="/my-installations" className="hover:underline">
                My Installation
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-2 text-sm">support@heroio.example</p>
          <div className="mt-3 flex gap-2">
            <a className="px-2 py-1 bg-gray-700 rounded text-sm">Privacy</a>
            <a className="px-2 py-1 bg-gray-700 rounded text-sm">Terms</a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm bg-gray-900 py-3">
        © {new Date().getFullYear()} Hero IO — All rights reserved.
      </div>
    </footer>
  );
}
