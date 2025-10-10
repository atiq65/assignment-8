import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <img src={logo} alt="logo" className="w-10 h-10 object-cover" />
            <h3 className="text-xl font-bold">Hero IO</h3>
          </div>
          <p className="text-sm text-gray-300">
            Discover, install and manage curated apps.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
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

        {/* Contact & Social */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm mb-2">sheikhatiqhasan@gmail.com</p>

          {/* Social Icons */}
          <div className="flex gap-3 text-xl">
            <a
              href="https://github.com/atiq65"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/your-twitter"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/share/1UJ9hDvLfW/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm bg-gray-900 py-3">
        © {new Date().getFullYear()} Hero IO — All rights reserved.
      </div>
    </footer>
  );
}
