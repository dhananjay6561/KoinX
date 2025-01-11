import React from 'react';

function Sentiment() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-semibold mb-4">Sentiment</h3>
      <h4 className="text-lg font-semibold mb-2">Key Events</h4>
      <div className="bg-blue-100 p-4 rounded-lg mb-4">
        <h5 className="font-semibold mb-2">Lorem ipsum dolor sit amet consectetur.</h5>
        <p>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</p>
      </div>
      <h4 className="text-lg font-semibold mb-2">Analyst Estimates</h4>
      <div className="flex items-center">
        <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-3xl font-bold text-green-600">
          76%
        </div>
        <div className="ml-4 flex-1">
          <div className="flex items-center mb-2">
            <span className="w-10">Buy</span>
            <div className="h-2 bg-green-500 w-3/4 rounded"></div>
            <span className="ml-2">76%</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="w-10">Hold</span>
            <div className="h-2 bg-gray-300 w-1/12 rounded"></div>
            <span className="ml-2">8%</span>
          </div>
          <div className="flex items-center">
            <span className="w-10">Sell</span>
            <div className="h-2 bg-red-500 w-1/6 rounded"></div>
            <span className="ml-2">16%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sentiment;
