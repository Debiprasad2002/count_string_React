import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [counts, setCounts] = useState({ alphabets: 0, digits: 0, specialSymbols: 0, spaces: 0 });

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    countCharacters(e.target.value);
  };

  const countCharacters = (str) => {
    let alphabets = 0;
    let digits = 0;
    let specialSymbols = 0;
    let spaces = 0;

    for (let char of str) {
      if (/[a-zA-Z]/.test(char)) {
        alphabets++;
      } else if (/\d/.test(char)) {
        digits++;
      } else if (/[\s]/.test(char)) {
        spaces++;
      } else {
        specialSymbols++;
      }
    }

    setCounts({ alphabets, digits, specialSymbols, spaces });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Character Counter</h1>
        <textarea
          className="input-field"
          placeholder="Enter text here..."
          value={inputText}
          onChange={handleInputChange}
        />
        <div className="count-results">
          <div className="count-item">
            <h2>Alphabets</h2>
            <div className="count">{counts.alphabets}</div>
          </div>
          <div className="count-item">
            <h2>Digits</h2>
            <div className="count">{counts.digits}</div>
          </div>
          <div className="count-item">
            <h2>Special Symbols</h2>
            <div className="count">{counts.specialSymbols}</div>
          </div>
          <div className="count-item">
            <h2>Spaces</h2>
            <div className="count">{counts.spaces}</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
