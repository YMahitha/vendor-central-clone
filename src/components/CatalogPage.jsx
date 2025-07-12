// src/components/CatalogPage.jsx
import React from "react";
import TabBar from "./TabBar";

export default function CatalogPage() {
  return (
    <div className="bg-white p-8 rounded-xl shadow w-full max-w-7xl mx-auto mt-8">
      {/* Header and subheader */}
      <TabBar />
      <div className="mb-1">
        <h1 className="text-4xl font-bold inline-block align-middle">Catalog</h1>
        <span className="ml-4 text-teal-700 font-medium cursor-pointer">Help</span>
        <span className="ml-2 text-teal-700 font-medium cursor-pointer">| View Training</span>
      </div>
      <div className="mb-4 text-gray-700 text-base">
        Monitor catalog quality by instantly accessing the latest catalog details
      </div>

      {/* Distributor View + Apply + Download */}
      <div className="flex flex-wrap gap-3 items-end mb-2">
        <div>
          <span className="font-medium text-sm block mb-1">Distributor View</span>
          <select className="border rounded px-3 py-2 text-sm min-w-[130px]">
            <option>Sourcing</option>
          </select>
        </div>
        <button className="px-6 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded text-sm font-semibold ml-2">
          Apply
        </button>
        <div className="ml-auto flex items-center space-x-2">
          <span className="text-sm text-gray-600 font-medium">Download</span>
          <button className="border rounded px-4 py-1 text-sm bg-gray-100">CSV</button>
          <button className="border rounded px-4 py-1 text-sm bg-gray-100">Excel</button>
        </div>
      </div>

      {/* Hide Additional Filters */}
      <div className="mb-2">
        <span className="text-teal-700 font-medium cursor-pointer">
          <span className="mr-1">▼</span> Hide Additional Filters
        </span>
      </div>

      {/* Search and Filters Row */}
      <div className="flex flex-wrap gap-3 mb-3 items-center">
        <div className="flex">
          <select className="border rounded-l px-3 py-2 text-sm bg-white">
            <option>ASIN</option>
            <option>UPC</option>
            <option>EAN</option>
            <option>ISBN</option>
            <option>Parent ASIN</option>
          </select>
          <input
            type="text"
            placeholder="Search up to 100 ASINs"
            className="border rounded-r px-3 py-2 text-sm min-w-[180px]"
          />
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span className="text-sm">Prior Period</span>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span className="text-sm">Year over Year</span>
        </div>
        <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded text-sm font-semibold">
          Refine Results
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-2 border">ASIN</th>
              <th className="p-2 border">Product Title</th>
              <th className="p-2 border">Parent ASIN</th>
              <th className="p-2 border">UPC</th>
              <th className="p-2 border">EAN</th>
              <th className="p-2 border">ISBN</th>
              <th className="p-2 border">Model Number</th>
              <th className="p-2 border">Brand</th>
              <th className="p-2 border">Brand Code</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Subcategory</th>
            </tr>
          </thead>
          <tbody>
            {/* Add a skeleton/empty row for the “make your selections” state */}
            <tr>
              <td colSpan={11} className="p-8 text-center text-gray-400 italic">
                Please make your selections.
                {/* You can add loading skeletons here if you want */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-2 text-xs text-gray-500">
        Report Updated: Jul 10, 2025 &nbsp; | &nbsp; Displaying 16 of 22 columns &nbsp;|&nbsp; <span className="text-teal-700 cursor-pointer">Customize Columns (22)</span>
      </div>
    </div>
  );
}
