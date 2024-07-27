import React, { useState, useEffect } from 'react';

const Options: React.FC = () => {
  const [color, setColor] = useState<string>('');

  useEffect(() => {
    chrome.storage.sync.get({ favoriteColor: 'red' }, (items) => {
      setColor(items.favoriteColor);
    });
  }, []);

  const saveOptions = () => {
    chrome.storage.sync.set({ favoriteColor: color }, () => {
      const status = document.getElementById('status');
      if (status) {
        status.textContent = 'Options saved.';
        setTimeout(() => {
          status.textContent = '';
        }, 750);
      }
    });
  };

  return (
    <div className="options">
      <h1>Extension Options</h1>
      <div>
        <label htmlFor="color">Favorite color: </label>
        <select
          id="color"
          value={color}
          onChange={(event) => setColor(event.target.value)}
        >
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
          <option value="yellow">yellow</option>
        </select>
      </div>
      <div id="status"></div>
      <button onClick={saveOptions}>Save</button>
    </div>
  );
};

export default Options;