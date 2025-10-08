import React from "react";

export default function Installation() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-4">Installation Guide</h1>
      <p className="text-gray-600">
        Follow these steps to install apps from Hero IO.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded shadow p-6">
          <h3 className="font-semibold">Step 1</h3>
          <p className="text-sm text-gray-600 mt-2">
            Open the app details page.
          </p>
        </div>
        <div className="bg-white rounded shadow p-6">
          <h3 className="font-semibold">Step 2</h3>
          <p className="text-sm text-gray-600 mt-2">
            Click the Install button.
          </p>
        </div>
        <div className="bg-white rounded shadow p-6">
          <h3 className="font-semibold">Step 3</h3>
          <p className="text-sm text-gray-600 mt-2">
            Manage installed apps on My Installation page.
          </p>
        </div>
      </div>
    </div>
  );
}
