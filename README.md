
# 📅 Booking Calendar – React + TypeScript + Vite

A modular and responsive **booking calendar** built with modern tools like React 19, TypeScript, Vite, and Tailwind CSS. Designed for date selection with pricing logic, and static disabled dates.

---

## ⚙️ Tech Stack

| Tool               | Description                       |
|--------------------|-----------------------------------|
| React 19           | UI library                        |
| TypeScript         | Static type checker               |
| Vite               | Fast development/build tooling    |
| Tailwind CSS       | Utility-first CSS framework       |
| ESLint             | Code quality and formatting       |

---

## 📁 Project Structure

```
src/
├── components/               # Reusable UI components
│   └── BookingCalendar/
                └── BookingCalendar
                └── CalenderGrid
                └── LeftPanel
                └── RightPanel
├── hooks/
│   └── useCalendar.ts        # Custom hook
├── config/
│   └── calendar.config.ts    # Static config values
├── types/
│   └── index.ts              # Shared type definitions
├── App.tsx
├── main.tsx
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/sunil-dsb/booking-calender.git
cd booking-calendar
npm install
npm run dev
```

> Open [http://localhost:5173](http://localhost:5173) in your browser

---

## 📦 Build for Production

```bash
npm run build
```

> Output will be generated in `dist/`

---

## 📐 Linting

```bash
npm run lint
```

## 📘 ESLint Setup

This project uses [`@eslint/js`](https://www.npmjs.com/package/@eslint/js) for core rules and React lint plugins.

To expand ESLint with **type-aware** rules in production, use the config below:

```ts
// eslint.config.js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
```

For React-specific rules, you can install:

- [`eslint-plugin-react-x`](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x)
- [`eslint-plugin-react-dom`](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom)

```ts
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config([
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
```

## 🧾 License

MIT

---

## 👤 Author

Developed by [Sunil Negi](https://github.com/sunil-dsb)
