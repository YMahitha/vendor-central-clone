// src/components/BusinessSnapshot.jsx
import React from 'react';
import ShippedRevenueDropdown from './ShippedRevenueDropdown';
import OpenPOQtyDropdown from './OpenPOQtyDropdown';
import OnHandUnitsDropdown from './OnHandUnitsDropdown';

const BusinessSnapshot = () => {
  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-4">
      <h2 className="text-sm font-semibold text-gray-800 mb-3">Business Snapshot</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-x divide-gray-200">
        {/* Shipped Revenue */}
        <div className="px-4">
          <div className="flex items-center text-sm text-gray-700 mb-1">
            <ShippedRevenueDropdown />
          </div>
          <div className="text-2xl font-bold text-teal-700">$5,196,342.63</div>
        </div>

        {/* Open PO Qty */}
        <div className="px-4">
          <div className="flex items-center text-sm text-gray-700 mb-1">
            <OpenPOQtyDropdown />
          </div>
          <div className="text-2xl font-bold text-teal-700">12,426</div>
        </div>

        {/* On Hand Units */}
        <div className="px-4">
          <div className="flex items-center text-sm text-gray-700 mb-1">
            <OnHandUnitsDropdown />
          </div>
          <div className="text-2xl font-bold text-teal-700">247,397</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSnapshot;
