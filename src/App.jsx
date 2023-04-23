import React, { useState } from 'react';
import './App.css'
import PokerHandsTable from './Components/PokerHandsTable';

const App = () => {
  const [betSize, setBetSize] = useState('');
  const [action, setAction] = useState('');

  const betSizes = ['1/4 Pot', '1/2 Pot', '2/3 Pot', 'Pot', '1.5 Pot'];
  const actions = ['call', 'raise', 'fold'];

  const handleBetSizeClick = (size) => {
    setBetSize(size);
  };

  const handleActionClick = (act) => {
    setAction(act);
  };

  return (
    <div>
      <h1>Poker Hands</h1>
      <PokerHandsTable />
      <div>
        <h2>Bet Size</h2>
        {betSizes.map((size, index) => (
          <button key={index} onClick={() => handleBetSizeClick(size)} className={size === betSize ? 'active' : ''}>
            {size}
          </button>
        ))}
      </div>
      <div>
        <h2>Action</h2>
        {actions.map((act, index) => (
          <button
            key={index}
            onClick={() => handleActionClick(act)}
            className={`${act === action ? `${act}-active` : ''}`}
          >
            {act.charAt(0).toUpperCase() + act.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
