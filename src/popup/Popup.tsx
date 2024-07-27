import React, { useState, useEffect } from 'react';

const Popup: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    chrome.action.getBadgeText({}, (result) => {
      setCount(parseInt(result) || 0);
    });
  }, []);

  return (
    <div className="popup">
      <h1>My Chrome Extension</h1>
      <p>You've clicked the icon {count} times!</p>
    </div>
  );
};

export default Popup;