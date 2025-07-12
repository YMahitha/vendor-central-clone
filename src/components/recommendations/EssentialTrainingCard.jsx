import React from 'react';

const EssentialTrainingCard = () => {
  return (
    <div className="bg-white border rounded-lg shadow p-4 text-sm">
      <h3 className="font-semibold">Essential Trainings</h3>
      <p className="text-xs text-gray-700 mb-2">You have incomplete Essential Trainings</p>
      <div className="flex justify-between mb-1">
        <span className="text-gray-500">Outstanding Trainings</span>
        <span className="font-semibold">17</span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="text-gray-500">All available Essential Trainings</span>
        <span className="font-semibold">17</span>
      </div>
      <button className="w-full bg-teal-700 text-white text-xs py-1 rounded">
        View all Essential Trainings
      </button>
    </div>
  );
};

export default EssentialTrainingCard;
