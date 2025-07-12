import React from "react";

export default function RetailAnalyticsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* TAB BAR (Sales, Inventory, Catalog) */}
      <div className="flex items-center gap-8 px-8 pt-8 pb-2 border-b">
        <div className="flex items-center gap-2">
          <span className="text-xl text-teal-700">🏠</span>
          <span className="text-teal-700 font-semibold text-lg border-b-2 border-teal-700 pb-2">Sales</span>
        </div>
        <div className="font-semibold text-base text-gray-700 hover:text-teal-700 pb-2 cursor-pointer">
          Inventory
        </div>
        <div className="font-semibold text-base text-gray-700 hover:text-teal-700 pb-2 cursor-pointer">
          Catalog
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Page Header */}
        <h1 className="text-4xl font-bold mb-1">Retail Analytics</h1>
        <div className="text-gray-700 text-base mb-8">
          Monitor product performance, inventory health, and catalog quality to make data-driven decisions.
        </div>

        {/* Metric Cards */}
        <div className="flex flex-wrap gap-6 mb-12">
          <div className="bg-white border rounded-xl p-6 w-72 shadow-sm">
            <div className="font-bold text-gray-800 mb-1">Customer Returns</div>
            <div className="text-teal-700 text-3xl font-bold mb-1">1</div>
            <div className="text-xs text-gray-600">7/10/2025 - Sourcing View</div>
          </div>
          <div className="bg-white border rounded-xl p-6 w-72 shadow-sm">
            <div className="font-bold text-gray-800 mb-1">Sellable On Hand Units</div>
            <div className="text-teal-700 text-3xl font-bold mb-1">769</div>
            <div className="text-xs text-gray-600">7/10/2025 - Sourcing View</div>
          </div>
          <div className="bg-white border rounded-xl p-6 w-72 shadow-sm">
            <div className="font-bold text-gray-800 mb-1">Unsellable On Hand Units</div>
            <div className="text-teal-700 text-3xl font-bold mb-1">2</div>
            <div className="text-xs text-gray-600">7/10/2025 - Sourcing View</div>
          </div>
        </div>

        {/* Announcements Section */}
        <div className="mb-2 flex items-center gap-2">
          <span className="text-2xl">💬</span>
          <span className="text-2xl font-semibold">Announcements</span>
        </div>
        <div className="flex flex-wrap gap-6 mb-12">
          <div className="bg-white border rounded-xl p-5 w-[27rem] shadow-sm">
            <div className="font-semibold text-lg mb-1">Column Title Updates in Regional Vendor Views</div>
            <div className="text-xs text-gray-400 mb-2">5/6/2025</div>
            <div className="text-sm text-gray-700">
              We've updated metric names for improved clarity. "Marketplace code" is now "Store Code", showing the store reflecting the URL where item was purchased, and "Country" is now "Destination Country", showing where item was shipped to.
            </div>
          </div>
          <div className="bg-white border rounded-xl p-5 w-[27rem] shadow-sm">
            <div className="font-semibold text-lg mb-1">New Metrics Added</div>
            <div className="text-xs text-gray-400 mb-2">3/26/2025</div>
            <div className="text-sm text-gray-700">
              New metrics are available in all reports. To access them please go to "customize columns" and add metrics as needed.
            </div>
            <div className="mt-2 text-teal-700 text-sm font-medium cursor-pointer">Try now &rarr;</div>
          </div>
          <div className="bg-white border rounded-xl p-5 w-[27rem] shadow-sm">
            <div className="font-semibold text-lg mb-1">View by "Vendor Code"</div>
            <div className="text-xs text-gray-400 mb-2">3/11/2025</div>
            <div className="text-sm text-gray-700">
              We've expanded our reporting capabilities to give you the ability to view Sales, Inventory and Net ppm reports by "vendor code".
            </div>
            <div className="mt-2 text-teal-700 text-sm font-medium cursor-pointer">Try now &rarr;</div>
          </div>
        </div>
      </div>
    </div>
  );
}
