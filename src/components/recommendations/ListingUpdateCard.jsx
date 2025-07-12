import React from 'react';

const ListingUpdateCard = () => {
  return (
    <div className="border rounded-lg shadow p-4 text-sm bg-blue-50">
      <h3 className="text-blue-800 font-semibold mb-1">Listing Updates</h3>
      <p className="font-medium mb-1">Review upcoming listing changes</p>
      <p className="text-gray-600 text-xs mb-3">
        We are using the power of AI to enrich content...
      </p>
      <button className="bg-blue-700 text-white px-3 py-1 rounded text-sm">
        Review changes
      </button>
    </div>
  );
};

export default ListingUpdateCard;
