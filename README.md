# DODOKU GMIM Website

A Next.js website for DODOKU GMIM with a beautiful purple-themed design.

## Features

- **Modern Design**: Purple gradient theme matching the GMIM branding
- **Responsive Layout**: Works perfectly on desktop and mobile devices
- **Navigation Bar**: Clean navigation with menu items
- **Hero Section**: Striking hero section with call-to-action
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **React 18** - UI library

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── Navbar.tsx     # Navigation component
│   │   └── Hero.tsx       # Hero section component
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
└── package.json          # Dependencies
```

## Customization

The website uses a purple color scheme that can be customized in `tailwind.config.js`. The main components are modular and can be easily modified or extended. 