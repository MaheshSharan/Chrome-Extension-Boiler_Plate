console.log('Content script loaded');

// Example: Modify the page content
const app = document.createElement('div');
app.id = 'my-extension-root';
app.textContent = 'My Extension Content';
document.body.appendChild(app);

export {};