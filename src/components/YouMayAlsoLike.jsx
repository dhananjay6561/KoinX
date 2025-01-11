import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const CoinCard = ({ name, symbol, price, change }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <div className="flex items-center mb-2">
      <img
        src={`/${symbol.toLowerCase()}-logo.png`}
        alt={name}
        className="w-6 h-6 mr-2"
      />
      <span>{name}</span>
      <span
        className={`ml-2 flex items-center ${
          change >= 0 ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {change >= 0 ? (
          <TrendingUp size={16} className="mr-1" />
        ) : (
          <TrendingDown size={16} className="mr-1" />
        )}
        {Math.abs(change)}%
      </span>
    </div>
    <p className="font-semibold">{price}</p>
  </div>
);

const YouMayAlsoLike = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-semibold mb-4">You May Also Like</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <CoinCard name="Bitcoin" symbol="BTC" price="$45,332.83" change={0.1} />
        <CoinCard name="Ethereum" symbol="ETH" price="$2,375.15" change={-0.21} />
        <CoinCard name="Staked Ether" symbol="stETH" price="$2,371.72" change={-0.34} />
        <CoinCard name="Uniswap" symbol="UNI" price="$7.3192" change={-4.02} />
        <CoinCard name="Centrifuge" symbol="CFG" price="$0.773600" change={-1.76} />
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
