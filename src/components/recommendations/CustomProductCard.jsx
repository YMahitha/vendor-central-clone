import React from 'react';

const CustomProductCard = () => {
  return (
    <div className="bg-white border rounded-lg shadow p-4 text-sm">
      <h3 className="font-semibold mb-2">Custom products</h3>
      <img
        src="https://m.media-amazon.com/images/I/61L7uXGNVbL._AC_SY355_.jpg"
        alt="Custom products"
        className="w-full h-28 object-cover mb-2 rounded"
      />
      <p className="text-xs text-gray-700 mb-4">Sell customizable products</p>
      <button className="w-full bg-teal-700 text-white text-xs py-1 rounded">
        Learn about Amazon Custom
      </button>
    </div>
  );
};

export default CustomProductCard;
