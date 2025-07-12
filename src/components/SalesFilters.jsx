import React, { useState } from "react";

const SalesFilters = () => {
  const [showFilters, setShowFilters] = useState(true);

  return (
    <div className="bg-white rounded-t-lg border-b p-6 pb-2 mb-0">
      <div className="flex flex-col gap-4">
        {/* Row 1: Main Filters */}
        <div className="flex flex-wrap gap-4 mb-2">
          {/* Time frame */}
          <div>
            <label className="block text-xs text-gray-600 mb-1">Time frame</label>
            <select className="border rounded px-3 py-1 text-sm">
              <option>To date</option>
              <option>Custom</option>
            </select>
          </div>
          {/* Lookback */}
          <div>
            <label className="block text-xs text-gray-600 mb-1">Lookback</label>
            <select className="border rounded px-3 py-1 text-sm">
              <option>Month to date</option>
              <option>Quarter to date</option>
            </select>
          </div>
          {/* View By */}
          <div>
            <label className="block text-xs text-gray-600 mb-1">View By</label>
            <select className="border rounded px-3 py-1 text-sm">
              <option>ASIN</option>
            </select>
          </div>
          {/* Distributor View */}
          <div>
            <label className="block text-xs text-gray-600 mb-1">Distributor View</label>
            <select className="border rounded px-3 py-1 text-sm">
              <option>Sourcing</option>
            </select>
          </div>
          {/* Program View */}
          <div>
            <label className="block text-xs text-gray-600 mb-1">Program View</label>
            <select className="border rounded px-3 py-1 text-sm">
              <option>Retail</option>
            </select>
          </div>
          {/* Apply Button */}
          <div className="flex items-end">
            <button className="bg-teal-700 hover:bg-teal-800 text-white rounded px-6 py-2 font-semibold">Apply</button>
          </div>
          {/* Download */}
          <div className="flex flex-col items-start ml-auto mt-2 md:mt-0">
            <label className="block text-xs text-gray-600 mb-1">Download</label>
            <div>
              <button className="border px-2 py-1 mr-2 rounded text-sm hover:bg-gray-100">CSV</button>
              <button className="border px-2 py-1 rounded text-sm hover:bg-gray-100">Excel</button>
            </div>
          </div>
        </div>

        {/* Toggle Filters */}
        <button
          className="flex items-center gap-2 text-teal-700 text-sm font-medium focus:outline-none mb-2"
          onClick={() => setShowFilters((prev) => !prev)}
        >
          <span className="font-semibold">{showFilters ? "Hide" : "Show"} Additional Filters</span>
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className={`transition-transform ${showFilters ? "rotate-0" : "-rotate-90"}`}>
            <path d="M6 8l4 4 4-4" stroke="#0891b2" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Row 2: Additional Filters */}
        {showFilters && (
          <div className="flex flex-wrap gap-4 mb-2">
            {/* Search */}
            <div className="flex">
              <select className="border rounded-l px-3 py-1 text-sm">
                <option>ASIN</option>
              </select>
              <input type="text" className="border-t border-b border-r rounded-r px-3 py-1 text-sm w-48" placeholder="Search up to 100 ASINs" />
            </div>
            {/* Brand */}
            <div>
              <select className="border rounded px-3 py-1 text-sm min-w-[120px]">
                <option>Brand</option>
              </select>
            </div>
            {/* Category */}
            <div>
              <select className="border rounded px-3 py-1 text-sm min-w-[120px]">
                <option>Category</option>
              </select>
            </div>
            {/* Subcategory */}
            <div>
              <select className="border rounded px-3 py-1 text-sm min-w-[120px]">
                <option>Subcategory</option>
              </select>
            </div>
            {/* Currency */}
            <div>
              <select className="border rounded px-3 py-1 text-sm min-w-[120px]">
                <option>$ - USD - United States Dollars</option>
              </select>
            </div>
            {/* Prior Period */}
            <div className="flex items-center ml-4">
              <input id="prior" type="checkbox" className="mr-1" />
              <label htmlFor="prior" className="text-sm text-gray-600">Prior Period</label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SalesFilters;
