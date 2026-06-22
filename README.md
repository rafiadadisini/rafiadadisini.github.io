# rafiadadisini.github.io

A personal portfolio website showcasing the profile information of **@rafiadadisini**.

---

## 🚀 Key Features

1. **Bilingual Support (ID/EN)**
   - Supports instant language switching between Indonesian (ID) and English (EN) via a dedicated toggle button in the navigation bar.
   - The default language is set to English (EN) when the page is first loaded.
   - Content localization is synchronized across all static and dynamic elements using a centralized dataset.

2. **Dark Mode Toggle**
   - Built-in dynamic theme switcher (dark/light) utilizing class-based Tailwind CSS (`.dark`).
   - Interactive single-icon action button (displays a Sun icon in light mode and a Moon icon in dark mode).

3. **Asynchronous Dynamic Data Loading**
   - Projects, education history, work experience, and certifications are loaded asynchronously (Fetch API) from a centralized local static database file: [data/data.json](data/data.json).
   - Allows updating the portfolio content easily by modifying the JSON file without having to refactor the main HTML structure.

4. **Clean CSS Architecture (Tailwind CSS)**
   - Fully styled using utility-first Tailwind CSS classes.
   - Custom CSS rules (e.g., global color transitions, dark mode specific overrides, button styles, and skill icon contrast filters) are maintained in the source file [src/tailwind.css](src/tailwind.css) and compiled into [public/css/style.css](public/css/style.css).

---

## 🛠️ Tech Stack

* **HTML5**: Semantic document structure optimized for SEO.
* **JavaScript (ES6+)**: Handles dynamic data fetching, bilingual switching, and theme toggling logic.
* **Tailwind CSS v3**: Utility-first CSS framework for interface design.
* **FontAwesome**: Standard library for UI iconography.
* **Flowbite**: UI component library integrated with Tailwind CSS.

---

## 💻 Local Development

Follow the instructions below to set up and develop this project locally:

### 1. Install Dependencies
Install all required Node modules by running:
```bash
npm install
```

### 2. Run Tailwind CSS compiler (Watcher Mode)
To monitor CSS classes in HTML/JS files and automatically compile them to the production output file, run:
```bash
npm run dev
```
*This script runs the underlying terminal command:*
`tailwindcss -i ./src/tailwind.css -o ./public/css/style.css --watch`

### 3. Directory Structure
* `index.html`: Main HTML document.
* `admin.html`: Administrative layout (ignored in main tracking).
* `src/tailwind.css`: Tailwind CSS entry source file.
* `public/css/style.css`: Compiled production CSS output file.
* `public/js/app.js`: Main client-side script for loading JSON data and handling translations.
* `data/data.json`: Local static database for dynamic portfolio content.
