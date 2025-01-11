import React from 'react';
import { TrendingUp } from 'lucide-react';

const TrendingCoins = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-semibold mb-4">Trending Coins (24h)</h3>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span>Ethereum (ETH)</span>
          <span className="text-green-500 flex items-center"><TrendingUp size={16} className="mr-1" />8.21%</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Bitcoin (BTC)</span>
          <span className="text-green-500 flex items-center"><TrendingUp size={16} className="mr-1" />5.26%</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Polygon (MATIC)</span>
          <span className="text-green-500 flex items-center"><TrendingUp size={16} className="mr-1" />4.32%</span>
        </div>
      </div>
    </div>
  );
};

export default TrendingCoins;
