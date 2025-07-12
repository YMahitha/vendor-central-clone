// components/Recommendations.jsx
import React from 'react';
import ListingUpdateCard from './recommendations/ListingUpdateCard';
import BusinessGrowthCard from './recommendations/BusinessGrowthCard';
import SupplyChainCard from './recommendations/SupplyChainCard';
import BlockedOffersCard from './recommendations/BlockedOffersCard';
import VideoGrowthCard from './recommendations/VideoGrowthCard';
import EssentialTrainingCard from './recommendations/EssentialTrainingCard';
import CustomProductCard from './recommendations/CustomProductCard';

const Recommendations = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow border mt-4">
      <h2 className="text-lg font-semibold mb-4">Recommendations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <ListingUpdateCard />
        <BusinessGrowthCard />
        <SupplyChainCard />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <BlockedOffersCard />
        <VideoGrowthCard />
        <EssentialTrainingCard />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <CustomProductCard />
      </div>
    </div>
  );
};

export default Recommendations;
