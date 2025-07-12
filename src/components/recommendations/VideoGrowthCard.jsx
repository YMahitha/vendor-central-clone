import React from 'react';

const VideoGrowthCard = () => {
  return (
    <div className="bg-white border rounded-lg shadow p-4 text-sm">
      <h3 className="font-semibold">Videos May Grow Sales</h3>
      <p className="text-blue-700 text-xs mb-1">FROGG TOGGS Ultra-lite2 W...</p>
      <p className="text-gray-600 text-xs mb-1">ASIN: BOCTJHBHHY</p>
      <p className="text-xs text-right text-blue-600 cursor-pointer mb-2">Dismiss</p>
      <div className="text-xs text-gray-700 space-y-1">
        <p>Product views (last 30 days): <strong>166,445</strong></p>
        <p>Conversion rate (last 30 days): <strong>14.75%</strong></p>
        <p>Units ordered (last 30 days): <strong>24,547</strong></p>
      </div>
      <button className="w-full mt-3 bg-teal-700 text-white text-xs py-1 rounded">
        Upload a video to this product
      </button>
    </div>
  );
};

export default VideoGrowthCard;
