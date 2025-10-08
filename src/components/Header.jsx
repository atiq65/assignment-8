import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Github } from "lucide-react";
import logo from "../assets/logo.png";

export default function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="relative container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: Logo + Title */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="Hero IO"
            className="w-[40px] h-[40px] object-cover"
          />
          <span className="font-bold text-lg uppercase text-[#632ee3]">
            Hero IO
          </span>
        </div>

        {/* Center: Menu */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 items-center uppercase">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "text-[#632ee3] font-semibold" : "text-gray-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/apps"
            className={({ isActive }) =>
              isActive ? "text-[#632ee3] font-semibold" : "text-gray-600"
            }
          >
            Apps
          </NavLink>

          <NavLink
            to="/installation"
            className={({ isActive }) =>
              isActive ? "text-[#632ee3] font-semibold" : "text-gray-600"
            }
          >
            Installation
          </NavLink>
        </nav>

        {/* Right: GitHub Button with Icon */}
        <div className="hidden md:block">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noreferrer"
            style={{
              background:
                "linear-gradient(125.07deg, rgba(99,46,227,1), rgba(159,98,242,1) 100%)",
            }}
            className="flex items-center gap-2 text-white px-4 py-3 rounded-md text-sm uppercase"
          >
            <Github className="w-4 h-4" />
            Contribution
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 border rounded text-lg"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 flex flex-col gap-2 uppercase">
            <NavLink
              to="/"
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-[#632ee3] font-semibold" : "text-gray-700"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/apps"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-[#632ee3] font-semibold" : "text-gray-700"
              }
            >
              Apps
            </NavLink>

            <NavLink
              to="/installation"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-[#632ee3] font-semibold" : "text-gray-700"
              }
            >
              Installation
            </NavLink>

            {/* GitHub Button with Icon for Mobile */}
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noreferrer"
              style={{
                background:
                  "linear-gradient(125.07deg, rgba(99,46,227,1), rgba(159,98,242,1) 100%)",
              }}
              className="flex items-center gap-2 mt-2  text-white px-3 py-1 rounded-md text-sm w-max uppercase"
            >
              <Github className="w-4 h-4" />
              Contribution
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
