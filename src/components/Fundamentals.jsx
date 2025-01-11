import React from 'react';

function Fundamentals() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-semibold mb-4">Fundamentals</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="flex justify-between"><span>Bitcoin Price</span><span>$16,815.46</span></p>
          <p className="flex justify-between"><span>24h Low / 24h High</span><span>$16,382.07 / $16,874.12</span></p>
          <p className="flex justify-between"><span>7d Low / 7d High</span><span>$16,382.07 / $16,874.12</span></p>
          <p className="flex justify-between"><span>Trading Volume</span><span>$23,249,202,782</span></p>
          <p className="flex justify-between"><span>Market Cap Rank</span><span>#1</span></p>
        </div>
        <div>
          <p className="flex justify-between"><span>Market Cap</span><span>$323,507,290,047</span></p>
          <p className="flex justify-between"><span>Market Cap Dominance</span><span>38.343%</span></p>
          <p className="flex justify-between"><span>Volume / Market Cap</span><span>0.0718</span></p>
          <p className="flex justify-between"><span>All-Time High</span><span>$69,044.77 -75.6%</span></p>
          <p className="flex justify-between"><span>All-Time Low</span><span>$67.81 24729.1%</span></p>
        </div>
      </div>
    </div>
  );
}

export default Fundamentals;
