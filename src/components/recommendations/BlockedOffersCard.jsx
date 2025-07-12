import React from 'react';

const BlockedOffersCard = () => {
  return (
    <div className="border rounded-lg shadow p-4 text-sm">
      <h3 className="font-semibold mb-2">Blocked Existing Offers</h3>
      <div className="flex gap-3 items-start mb-2">
        <img
          src="https://via.placeholder.com/40"
          alt="Product"
          className="rounded w-10 h-10"
        />
        <div className="text-xs text-gray-700">
          <p className="font-medium">Mr. Heater Portable Buddy H...</p>
          <p>ASIN: B002G51BZU</p>
          <p>Vendor Code: SPPQ9</p>
          <p>Current Cost: $81.59</p>
          <p>Recommended Cost: $59.52</p>
        </div>
      </div>
      <button className="w-full bg-teal-700 text-white py-1 text-xs rounded">
        Review Cost
      </button>
    </div>
  );
};

export default BlockedOffersCard;
