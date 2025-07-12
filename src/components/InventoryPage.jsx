// src/components/InventoryPage.jsx
import React from "react";
import TabBar from "./TabBar";

export default function InventoryPage() {
  return (
    <div className="bg-white min-h-screen">
      <TabBar />

      <div className="max-w-7xl mx-auto p-8">
        {/* Title and actions */}
        <div className="flex items-center gap-4 mb-2 mt-4">
          <h1 className="text-4xl font-bold">Inventory</h1>
          <span className="text-teal-700 font-medium cursor-pointer ml-4">Help</span>
          <span className="text-teal-700 font-medium cursor-pointer ml-2">| View Training</span>
        </div>
        <div className="mb-4 text-gray-700 text-base">
          Monitor the health of the inventory of your products through weekly updates; quickly identify and respond to unfavorable trends.
        </div>

        {/* Filters Row 1 */}
        <div className="flex flex-wrap gap-4 mb-2 items-end">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Time frame</label>
            <select className="border rounded px-3 py-2 text-sm min-w-[130px]">
              <option>Custom</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Start Date</label>
            <input type="date" className="border rounded px-3 py-2 text-sm min-w-[130px]" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">End Date</label>
            <input type="date" className="border rounded px-3 py-2 text-sm min-w-[130px]" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">View By</label>
            <select className="border rounded px-3 py-2 text-sm min-w-[100px]">
              <option>ASIN</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Distributor View</label>
            <select className="border rounded px-3 py-2 text-sm min-w-[120px]">
              <option>Sourcing</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Program View</label>
            <select className="border rounded px-3 py-2 text-sm min-w-[110px]">
              <option>Retail</option>
            </select>
          </div>
          <button className="bg-gray-700 text-white font-semibold px-8 py-2 rounded ml-2">Apply</button>
          <div className="ml-auto flex gap-2 items-center">
            <span className="text-xs font-medium">Download</span>
            <button className="border rounded px-4 py-1 text-sm bg-gray-100">CSV</button>
            <button className="border rounded px-4 py-1 text-sm bg-gray-100">Excel</button>
          </div>
        </div>

        {/* Additional Filters */}
        <div className="bg-[#f6fafd] rounded p-4 mb-3">
          <div className="flex flex-wrap gap-3 mb-2 items-end">
            <div className="flex">
              <select className="border rounded-l px-3 py-2 text-sm bg-white">
                <option>ASIN</option>
              </select>
              <input
                type="text"
                placeholder="Search up to 100 ASINs"
                className="border rounded-r px-3 py-2 text-sm min-w-[180px]"
              />
            </div>
            <select className="border rounded px-3 py-2 text-sm min-w-[120px]"><option>Brand</option></select>
            <select className="border rounded px-3 py-2 text-sm min-w-[120px]"><option>Category</option></select>
            <select className="border rounded px-3 py-2 text-sm min-w-[120px]"><option>Subcategory</option></select>
            <select className="border rounded px-3 py-2 text-sm min-w-[220px]"><option>$ - USD - United States Dollars</option></select>
            <div className="flex items-center ml-2">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Prior Period</span>
            </div>
            <div className="flex items-center ml-2">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Year over Year</span>
            </div>
            <button className="bg-gray-700 text-white font-semibold px-6 py-2 rounded ml-2">Refine Results</button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border rounded">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-2 border">ASIN</th>
                <th className="p-2 border">Product Title</th>
                <th className="p-2 border">Brand</th>
                <th className="p-2 border">Vendor Confirmation %</th>
                <th className="p-2 border">Net Received</th>
                <th className="p-2 border">Net Received Units</th>
                <th className="p-2 border">Open Purchase Order Quantity</th>
                <th className="p-2 border">Receive Fill %</th>
                <th className="p-2 border">Overall Vendor Lead Time (days)</th>
                {/* ...add other columns as needed */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={9} className="p-8 text-center text-gray-400 italic">
                  Please make your selections.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Footer */}
        <div className="mt-2 text-xs text-gray-500">
          Report Updated: Jul 10, 2025 &nbsp; | &nbsp; Displaying 18 of 38 columns &nbsp;|&nbsp; <span className="text-teal-700 cursor-pointer">Customize Columns (38)</span>
        </div>
      </div>
    </div>
  );
}
