import React from 'react';

const BusinessGrowthCard = () => {
  return (
    <div className="border rounded-lg shadow p-4 text-sm bg-blue-50">
      <h3 className="text-blue-800 font-semibold mb-1">Notification</h3>
      <p className="font-medium mb-1">Business Growth Opportunity</p>
      <p className="text-gray-600 text-xs mb-3">
        You have an opportunity to improve your business growth.
      </p>
      <button className="bg-blue-700 text-white px-3 py-1 rounded text-sm">
        Review recommendations
      </button>
    </div>
  );
};

export default BusinessGrowthCard;
