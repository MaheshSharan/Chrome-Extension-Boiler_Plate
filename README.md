## Chrome Extension Boilerplate: TypeScript, React, and Webpack

This boilerplate provides a solid foundation for building Chrome extensions using TypeScript, React, and Webpack, ensuring a well-organized and maintainable codebase.

**Key Features:**

* **TypeScript:** Strong typing for robust code and fewer errors.
* **React:** Build dynamic and interactive user interfaces.
* **Webpack:** Bundle and manage your extension's assets efficiently.
* **Popup:** A simple popup that displays user interface.
* **Options Page:**  Allows customization of settings (e.g., color).
* **Content Script:**  Injects content into web pages for interactions.
* **Background Script:** Handles background tasks and events.
* **Clean and Modular Structure:** Easy to understand and expand.

**Getting Started:**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MaheshSharan/Chrome-Extension-Boiler_Plate.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd chrome-extension-typescript-starter
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Build the extension:**
   ```bash
   npm run build
   ```

5. **Load the extension:**
    * Open Chrome and navigate to `chrome://extensions`.
    * Enable "Developer mode" in the top right corner.
    * Click "Load unpacked" and select the `dist` folder.

**Project Structure:**

* **`src/`:**  Source code for your extension.
    * **`background/`:** Handles background tasks and events.
    * **`content/`:** Injects content into web pages.
    * **`popup/`:**  Contains the React components for the popup.
    * **`options/`:**  Contains the React components for the options page.
    * **`styles/`:**  CSS files for styling.
* **`public/`:**  Static assets.
    * **`manifest.json`:** Defines the extension's metadata and features.
    * **`options.html`:** The HTML template for the options page.
    * **`popup.html`:** The HTML template for the popup.
    * **`images/`:**  Contains the icon files for the extension. 
* **`webpack/`:**  Configuration files for Webpack.
    * **`webpack.common.js`:**  Common Webpack configuration for both development and production.
    * **`webpack.dev.js`:**  Development-specific Webpack configuration.
    * **`webpack.prod.js`:** Production-specific Webpack configuration.

**Running the Extension:**

* **Development:**
    * Run `npm run start` to start a development server that will watch for changes in your code.
    * The extension will reload automatically whenever you save changes.
* **Production:**
    * Run `npm run build` to create a production build of the extension.
    * The built files will be located in the `dist` folder.

**Customization:**

* **Modify the popup:**
    * Edit the files in `src/popup/` to customize the popup's content and functionality.
    * Remember to update the popup's content in `public/popup.html`.
* **Customize the options page:**
    * Edit the files in `src/options/` to change the options and their behavior.
    * Update the options page's content in `public/options.html`.
* **Add more functionality:**
    * Extend the background script (`src/background/index.ts`) to handle additional events or tasks.
    * Create new content scripts for specific web pages or interactions.
* **Remove unwanted features:**
    * **Popup:** If you don't need the popup, you can:
        * Remove the `popup` entry from the `webpack.common.js` file.
        * Delete the files in `src/popup/` and `public/popup.html`.
    * **Options Page:** If you don't need the options page:
        * Remove the `options` entry from the `webpack.common.js` file.
        * Delete the files in `src/options/` and `public/options.html`.
    * **Content Script:** If you don't need the content script:
        * Remove the `content_scripts` section from `public/manifest.json`.
        * Delete the files in `src/content/`.
    * **Background Script:** If you don't need the background script:
        * Remove the `background` entry from the `webpack.common.js` file.
        * Delete the files in `src/background/`.

**Benefits:**

* **Clear Structure:** Easy to maintain and understand, allowing for collaboration.
* **TypeScript:** Improves code quality and catches errors early.
* **React:**  Creates dynamic and user-friendly UIs.
* **Webpack:** Efficiently manages assets and simplifies the build process.

**Contribution:**

This project is open source! If you have any suggestions or find issues, feel free to contribute:

1. **Fork the repository:** Click the "Fork" button on GitHub.
2. **Create a branch:** Use `git checkout -b your-new-feature`.
3. **Make your changes:** Add or modify files as needed.
4. **Commit your changes:** Use `git commit -am "Your commit message"`.
5. **Push your changes:**  Use `git push origin your-new-feature`.
6. **Create a pull request:** Click the "Pull Request" button on GitHub.

**We welcome your contributions!**
