// src/components/ShippedRevenuePage.jsx

import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function ShippedRevenuePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-8 rounded-xl shadow w-full max-w-7xl mx-auto mt-8">
      {/* Top Navigation */}
      <div className="flex items-center gap-8 border-b border-gray-200 pb-2 mb-6">
        <div
          className="flex items-center gap-2 text-teal-700 font-bold text-lg cursor-pointer"
          onClick={() => navigate("/retail-analytics")}
        >
          <AiOutlineHome className="text-xl" />
          <span>Home</span>
        </div>
        <div className="font-semibold text-base text-black border-b-2 border-teal-700 pb-1">
          Sales
        </div>
        <div
          className="font-semibold text-base text-gray-700 hover:text-teal-700 cursor-pointer pb-1"
          onClick={() => navigate("/inventory")}
        >
          Inventory
        </div>
        <div
          className="font-semibold text-base text-gray-700 hover:text-teal-700 cursor-pointer pb-1"
          onClick={() => navigate("/catalog")}
        >
          Catalog
        </div>
      </div>

      {/* Page Title and Help Links */}
      <div className="flex items-center mb-1">
        <h1 className="text-4xl font-bold">Sales</h1>
        <span className="ml-4 text-teal-700 font-medium cursor-pointer">Help</span>
        <span className="ml-2 text-teal-700 font-medium cursor-pointer">| View Training</span>
      </div>
      <p className="mb-4 text-gray-700 text-base">
        Quickly identify opportunities by determining what is contributing to sales performance.
      </p>

      {/* Filters Row */}
      <div className="flex flex-wrap gap-4 items-end mb-2">
        {[
          { label: "Time frame", options: ["Custom", "Daily", "Weekly", "Monthly"] },
          { label: "Lookback", options: ["Custom", "Month to date", "Year to date"] },
          { label: "View By", options: ["ASIN", "Brand", "Category"] },
          { label: "Distributor View", options: ["Sourcing"] },
          { label: "Program View", options: ["Retail"] },
        ].map(({ label, options }) => (
          <div key={label}>
            <label className="block text-xs text-gray-600 mb-1">{label}</label>
            <select className="border px-3 py-2 rounded text-sm min-w-[140px]">
              {options.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>
        ))}
        <button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 rounded text-sm font-semibold">
          Apply
        </button>
        <div className="ml-auto flex items-center space-x-2">
          <span className="text-sm text-gray-600 font-medium">Download</span>
          <button className="border rounded px-4 py-1 text-sm bg-gray-100">CSV</button>
          <button className="border rounded px-4 py-1 text-sm bg-gray-100">Excel</button>
        </div>
      </div>

      {/* Additional Filters */}
      <div className="mb-2">
        <span className="text-teal-700 font-medium cursor-pointer">
          <span className="mr-1">▼</span> Hide Additional Filters
        </span>
      </div>

      <div className="flex flex-wrap gap-3 items-center mb-4">
        <div className="flex">
          <select className="border rounded-l px-3 py-2 text-sm bg-white">
            <option>ASIN</option>
            <option>UPC</option>
            <option>ISBN</option>
          </select>
          <input
            type="text"
            placeholder="Search up to 100 ASINs"
            className="border rounded-r px-3 py-2 text-sm min-w-[180px]"
          />
        </div>
        <select className="border rounded px-3 py-2 text-sm min-w-[130px]">
          <option>Brand</option>
        </select>
        <select className="border rounded px-3 py-2 text-sm min-w-[130px]">
          <option>Category</option>
        </select>
        <select className="border rounded px-3 py-2 text-sm min-w-[130px]">
          <option>Subcategory</option>
        </select>
        <select className="border rounded px-3 py-2 text-sm min-w-[170px]">
          <option>USD - United States Dollar</option>
        </select>
        <label className="flex items-center ml-4 text-xs gap-1">
          <input type="checkbox" className="accent-teal-700" />
          Prior Period
        </label>
        <label className="flex items-center ml-2 text-xs gap-1">
          <input type="checkbox" className="accent-teal-700" />
          Year over Year
        </label>
        <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded text-sm font-semibold ml-auto">
          Refine Results
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              {[
                "ASIN",
                "Product Title",
                "Brand",
                "Shipped Revenue",
                "Shipped COGS",
                "Shipped Units",
                "Customer Returns",
              ].map((col) => (
                <th key={col} className="p-2 border">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="font-bold bg-white border-b">
              <td className="p-2 border">Total:</td>
              <td className="p-2 border" colSpan={2}></td>
              <td className="p-2 border">$97.86</td>
              <td className="p-2 border">$74.77</td>
              <td className="p-2 border">3</td>
              <td className="p-2 border">3</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 border">B076BVVGWP</td>
              <td className="p-2 border">
                BenchMaster X-BLOCK Shooting Rest, Compact 8″x 6″…
              </td>
              <td className="p-2 border">Benchmaster</td>
              <td className="p-2 border">$53.80</td>
              <td className="p-2 border">$43.12</td>
              <td className="p-2 border">2</td>
              <td className="p-2 border">-</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 border">B00X69LVKK</td>
              <td className="p-2 border">ESS Gray Safety Glasses</td>
              <td className="p-2 border">ESS</td>
              <td className="p-2 border">$44.06</td>
              <td className="p-2 border">$31.65</td>
              <td className="p-2 border">1</td>
              <td className="p-2 border">-</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-3 text-xs text-gray-500">
        Report Updated: Jul 10, 2025 &nbsp; | &nbsp; Viewing Dates: Jul 1 - Jul 10, 2025
        &nbsp; | &nbsp; Displaying 7 of 26 columns &nbsp;
        <span className="text-teal-700 cursor-pointer">Customize Columns (26)</span>
      </div>
    </div>
  );
}
