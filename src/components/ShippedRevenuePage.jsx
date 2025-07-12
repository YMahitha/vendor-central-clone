// src/components/ShippedRevenuePage.jsx

import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function ShippedRevenuePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-8 rounded-xl shadow w-full max-w-5xl mx-auto mt-8">
      {/* Top Navigation Bar */}
      <div className="flex items-center gap-8 border-b border-gray-200 pb-2 mb-6">
        <div
          className="flex items-center gap-2 text-teal-700 font-bold text-lg cursor-pointer"
          onClick={() => navigate("/retail-analytics")}
        >
          <AiOutlineHome className="text-xl" />
          <span>Home</span>
        </div>
        <div className="font-semibold text-base text-black border-b-2 border-teal-700 pb-1 cursor-pointer">
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

      {/* Title and Description */}
      <h2 className="text-2xl font-semibold mb-2">Sales</h2>
      <p className="mb-4 text-gray-600">
        Quickly identify opportunities by determining what is contributing to sales performance.
      </p>

      {/* Main Filter Row (Row 1) */}
      <div className="flex flex-wrap items-end gap-4 mb-2">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Time frame</label>
          <select className="border p-2 rounded text-sm min-w-[120px]">
            <option>Custom</option>
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Quarterly</option>
            <option>Yearly</option>
            <option>To date</option>
            <option>Trailing</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Lookback</label>
          <select className="border p-2 rounded text-sm min-w-[130px]">
            <option>Custom</option>
            <option>Week to date</option>
            <option>Month to date</option>
            <option>Quarter to date</option>
            <option>Year to date</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">View By</label>
          <select className="border p-2 rounded text-sm min-w-[100px]">
            <option>ASIN</option>
            <option>Vendor Code</option>
            <option>Brand</option>
            <option>Category</option>
            <option>Subcategory</option>
            <option>Postal Code</option>
            <option>City</option>
            <option>State</option>
            <option>Destination Country</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Distributor View</label>
          <select className="border p-2 rounded text-sm min-w-[120px]">
            <option>Sourcing</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Program View</label>
          <select className="border p-2 rounded text-sm min-w-[100px]">
            <option>Retail</option>
          </select>
        </div>
        <button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 rounded text-sm font-semibold mt-5">
          Apply
        </button>
        <div className="ml-auto flex items-center space-x-2 mt-5">
          <span className="text-xs text-gray-500 mr-1">Download</span>
          <button className="border px-3 py-1 rounded text-xs font-medium">CSV</button>
          <button className="border px-3 py-1 rounded text-xs font-medium">Excel</button>
        </div>
      </div>

      {/* Hide Additional Filters */}
      <div className="mb-2">
        <button className="flex items-center text-teal-700 font-medium mb-1 text-sm focus:outline-none hover:underline">
          <span className="mr-2">▾</span>
          Hide Additional Filters
        </button>
      </div>

      {/* Additional Filters Row */}
      <div className="flex flex-wrap gap-3 mb-5 mt-2 items-center">
        <label className="flex items-center gap-1 text-sm text-gray-700 font-medium">
          Search
          <select className="border rounded px-3 py-2 text-sm min-w-[90px]">
            <option>ASIN</option>
            <option>EAN</option>
            <option>ISBN</option>
            <option>Parent ASIN</option>
            <option>UPC</option>
          </select>
          <input
            type="text"
            className="border rounded px-3 py-2 text-sm min-w-[200px]"
            placeholder="Search up to 100 ASINs"
          />
        </label>
        <select className="border rounded px-3 py-2 text-sm min-w-[120px]">
          <option>Brand</option>
        </select>
        <select className="border rounded px-3 py-2 text-sm min-w-[120px]">
          <option>Category</option>
        </select>
        <select className="border rounded px-3 py-2 text-sm min-w-[120px]">
          <option>Subcategory</option>
        </select>
        <select className="border rounded px-3 py-2 text-sm min-w-[170px]">
          <option>$ - USD - United States Dollars</option>
          <option> - UK - United Kingdom</option>
        </select>
        <label className="flex items-center ml-4 text-xs gap-1">
          <input type="checkbox" className="accent-teal-700" />
          Prior Period
        </label>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">ASIN</th>
              <th className="p-2 border">Product Title</th>
              <th className="p-2 border">Brand</th>
              <th className="p-2 border">Shipped Revenue</th>
              <th className="p-2 border">Shipped COGS</th>
              <th className="p-2 border">Shipped Units</th>
              <th className="p-2 border">Customer Returns</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-semibold bg-gray-50">
              <td className="p-2 border">Total:</td>
              <td className="p-2 border"></td>
              <td className="p-2 border"></td>
              <td className="p-2 border">$97.86</td>
              <td className="p-2 border">$74.77</td>
              <td className="p-2 border">3</td>
              <td className="p-2 border">2</td>
            </tr>
            <tr>
              <td className="p-2 border font-semibold">B076BVVGWP</td>
              <td className="p-2 border">BenchMaster X-BLOCK Shooting Rest, Compact 8”x 6”…</td>
              <td className="p-2 border">Benchmaster</td>
              <td className="p-2 border font-semibold">$53.80</td>
              <td className="p-2 border">$43.12</td>
              <td className="p-2 border">2</td>
              <td className="p-2 border">-</td>
            </tr>
            {/* ... more rows */}
          </tbody>
        </table>
      </div>
      <div className="mt-3 text-xs text-gray-500">
        Report Updated: Jul 9, 2025 &nbsp; | &nbsp; Viewing Dates: Jul 1, 2025 - Jul 9, 2025
      </div>
    </div>
  );
}
