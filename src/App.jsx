import React, { useState } from 'react';
import Header from './components/Header';
import BitcoinOverview from './components/BitcoinOverview';
import Performance from './components/Performance';
import Fundamentals from './components/Fundamentals';
import Sentiment from './components/Sentiment';
import AboutBitcoin from './components/AboutBitcoin';
import Tokenomics from './components/Tokenomics';
import Team from './components/Team';
import TrendingCoins from './components/TrendingCoin';
import YouMayAlsoLike from './components/YouMayAlsoLike';
import GetStarted from './components/GetStarted';

const App = () => {
  const [activeSection, setActiveSection] = useState('Overview');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto p-4 md:flex md:space-x-4">
        <div className="md:w-2/3">
          {activeSection === 'Overview' && <BitcoinOverview />}
          {activeSection === 'Fundamentals' && <Fundamentals />}
          {activeSection === 'News Insights' && <div>News Insights</div>} {/* Add corresponding component */}
          {activeSection === 'Sentiments' && <Sentiment />}
          {activeSection === 'Team' && <Team />}
          {activeSection === 'Technicals' && <div>Technicals</div>} {/* Add corresponding component */}
          {activeSection === 'Tokenomics' && <Tokenomics />}
          
          <div className="flex space-x-4 mb-4">
            <button
              className={`px-4 py-2 rounded ${activeSection === 'Overview' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
              onClick={() => handleSectionClick('Overview')}
            >
              Overview
            </button>
            <button
              className={`px-4 py-2 rounded ${activeSection === 'Fundamentals' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
              onClick={() => handleSectionClick('Fundamentals')}
            >
              Fundamentals
            </button>
            <button
              className={`px-4 py-2 rounded ${activeSection === 'News Insights' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
              onClick={() => handleSectionClick('News Insights')}
            >
              News Insights
            </button>
            <button
              className={`px-4 py-2 rounded ${activeSection === 'Sentiments' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
              onClick={() => handleSectionClick('Sentiments')}
            >
              Sentiments
            </button>
            <button
              className={`px-4 py-2 rounded ${activeSection === 'Team' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
              onClick={() => handleSectionClick('Team')}
            >
              Team
            </button>
            <button
              className={`px-4 py-2 rounded ${activeSection === 'Technicals' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
              onClick={() => handleSectionClick('Technicals')}
            >
              Technicals
            </button>
            <button
              className={`px-4 py-2 rounded ${activeSection === 'Tokenomics' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
              onClick={() => handleSectionClick('Tokenomics')}
            >
              Tokenomics
            </button>
          </div>

          <Performance />
          <Sentiment />
          <AboutBitcoin />
          <Tokenomics />
          <Team />
        </div>
        <div className="md:w-1/3">
          <GetStarted />
          <TrendingCoins />
        </div>
      </main>
      <YouMayAlsoLike />
    </div>
  );
};

export default App;
