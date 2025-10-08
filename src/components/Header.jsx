import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="text-2xl">⚡</div>
          <div className="font-bold text-lg">Hero IO</div>
        </div>

        <nav className="hidden md:flex gap-8 items-center">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "text-gray-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/apps"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "text-gray-600"
            }
          >
            Apps
          </NavLink>
          <NavLink
            to="/installation"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "text-gray-600"
            }
          >
            Installation
          </NavLink>
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noreferrer"
            className="ml-4 bg-black text-white px-3 py-1 rounded-md text-sm"
          >
            Contribution
          </a>
        </nav>

        {/* mobile */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="p-2 border rounded">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden border-t">
          <div className="px-4 py-3 flex flex-col gap-2">
            <NavLink
              to="/"
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : "text-gray-700"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/apps"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : "text-gray-700"
              }
            >
              Apps
            </NavLink>
            <NavLink
              to="/installation"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : "text-gray-700"
              }
            >
              Installation
            </NavLink>
            <a
              href="https://github.com/your-github-username"
              className="mt-2 bg-black text-white px-3 py-1 rounded-md text-sm inline-block w-max"
            >
              Contribution
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
