chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
  });
  
  let count = 0;
  
  chrome.action.onClicked.addListener((tab) => {
    count++;
    chrome.action.setBadgeText({ text: count.toString() });
  });
  
  export {};