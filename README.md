# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, designed to showcase your projects, experience, and skills using Aceternity UI components.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Animation:** Framer Motion (for Aceternity UI)
- **Icons:** Tabler Icons & Lucide React
- **Utilities:** clsx & tailwind-merge

## 📁 Project Structure

```
/
├── app/                      # App Router (Routing & Layouts)
│   ├── globals.css           # Tailwind imports & custom styles
│   ├── layout.tsx            # Root Layout
│   └── page.tsx              # Main page
│
├── components/
│   ├── ui/                   # RAW Aceternity Components (Dumb Components)
│   ├── sections/             # Logical Page Sections (Smart Components)
│   └── layout/               # Global components (Navbar, Footer)
│
├── data/                     # Static Data Center
│   ├── index.ts              # Barrel file
│   ├── projects.ts           # Project data
│   ├── experience.ts         # Work experience data
│   └── social.ts             # Social media links
│
├── lib/
│   └── utils.ts              # Utility functions (cn helper)
│
├── types/                    # TypeScript Interfaces
│   └── index.ts              # Type definitions
│
└── doc/                      # Documentation
    ├── context.md            # Project context & guidelines
    └── rules.md              # Development rules
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding Content

1. **Projects:** Edit `data/projects.ts`
2. **Experience:** Edit `data/experience.ts`
3. **Social Links:** Edit `data/social.ts`

### Adding Aceternity UI Components

1. Copy component code to `components/ui/`
2. Add `"use client"` directive if using Framer Motion
3. Import and use in `components/sections/`
4. Update `tailwind.config.ts` if component needs custom animations

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Use the `cn()` utility from `lib/utils.ts` for conditional classes

## 📚 Documentation

- **Context & Guidelines:** See `doc/context.md`
- **Development Rules:** See `doc/rules.md`

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy automatically

### Important Notes

- Ensure all file imports match exact casing (Linux case-sensitivity)
- Run `npm run build` locally before deploying to catch errors
- Heavy animations are hidden on mobile for better performance

## 📄 License

MIT

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using Next.js and Aceternity UI
