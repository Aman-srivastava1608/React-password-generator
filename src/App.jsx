import React, { useState, useCallback } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (numbers) str += '1234567890';
    if (characters) str += '!@#$%^&*()_+';

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numbers, characters]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center">Password Generator</h1>
        <div className="space-y-5">
          <div>
            <label htmlFor="length" className="block text-sm font-medium text-gray-700 mb-1">
              Length: <span className="font-semibold text-blue-600">{length}</span>
            </label>
            <input
              type="range"
              id="length"
              min="4"
              max="30"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="numbers"
              checked={numbers}
              onChange={(e) => setNumbers(e.target.checked)}
              className="accent-blue-500"
            />
            <label htmlFor="numbers" className="text-sm text-gray-700">Include Numbers</label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="characters"
              checked={characters}
              onChange={(e) => setCharacters(e.target.checked)}
              className="accent-blue-500"
            />
            <label htmlFor="characters" className="text-sm text-gray-700">Include Special Characters</label>
          </div>

          <button
            onClick={generatePassword}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-full px-4 py-2 text-sm font-semibold shadow-md hover:scale-95 transition-transform duration-100 active:scale-90"
          >
            <span className="inline-flex">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path fill="#fff" d="M12 17a1 1 0 0 1-.7-.29l-5-5a1 1 0 1 1 1.4-1.42L12 14.59l4.3-4.3a1 1 0 1 1 1.4 1.42l-5 5A1 1 0 0 1 12 17Z"/>
              </svg>
            </span>
            Generate Password
          </button>
        </div>

        {password && (
          <div className="mt-8 bg-blue-50 rounded-lg p-4 text-center">
            <h2 className="text-lg font-semibold text-blue-700 mb-2">Your Password:</h2>
            <p className="font-mono text-blue-900 break-all">{password}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
