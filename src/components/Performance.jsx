import React from 'react';

function Performance() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-semibold mb-4">Performance</h3>
      <div className="flex justify-between mb-2">
        <span>Today's Low</span>
        <span>Today's High</span>
      </div>
      <div className="h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded mb-2"></div>
      <div className="flex justify-between mb-4">
        <span>$46,930.22</span>
        <span>$49,343.83</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>52W Low</span>
        <span>52W High</span>
      </div>
      <div className="h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded mb-2"></div>
      <div className="flex justify-between">
        <span>$16,930.22</span>
        <span>$49,743.83</span>
      </div>
    </div>
  );
}

export default Performance;
