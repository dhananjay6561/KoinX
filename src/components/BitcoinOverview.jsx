import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

const data = [
  { name: '16 Dec', value: 42000 },
  { name: '17 Dec', value: 44000 },
  { name: '18 Dec', value: 45000 },
  { name: '19 Dec', value: 46000 },
  { name: '20 Dec', value: 47000 },
  { name: '21 Dec', value: 46500 },
  { name: '22 Dec', value: 46953 },
];

function BitcoinOverview() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-4">
        <img src="/bitcoin-logo.png" alt="Bitcoin" className="w-8 h-8 mr-2" />
        <h2 className="text-2xl font-bold">Bitcoin</h2>
        <span className="text-gray-500 ml-2">BTC</span>
        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded ml-2 text-sm">Rank #1</span>
      </div>
      <div className="flex items-center mb-4">
        <span className="text-3xl font-bold mr-4">$46,953.04</span>
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm flex items-center">
          <TrendingUp size={16} className="mr-1" />
          2.51%
        </span>
        <span className="text-gray-500 ml-2">(24H)</span>
      </div>
      <div className="text-gray-700 mb-4">₹ 39,42,343</div>
      <h3 className="text-xl font-semibold mb-4">Bitcoin Price Chart (USD)</h3>
      <div className="mb-4 flex flex-wrap">
        {['1H', '24H', '7D', '1M', '3M', '6M', '1Y', 'ALL'].map((period, index) => (
          <button
            key={period}
            className={`px-3 py-1 rounded mr-2 mb-2 ${index === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            {period}
          </button>
        ))}
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BitcoinOverview;
