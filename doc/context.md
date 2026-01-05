
---


**PROJECT TITLE:** Personal Portfolio Website
**DESIGN SYSTEM:** Aceternity UI (Aceternity-based)
**CONTENT STRATEGY:** Static Content (V1)

#### 1. TECH STACK & ENVIRONMENT

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Animation Engine:** Framer Motion (Required for Aceternity)
* **Icons:** Tabler Icons / Lucide React
* **Utilities:** `clsx` and `tailwind-merge`

#### 2. DIRECTORY STRUCTURE (MANDATORY)

Follow this "Feature-based + Atomic Hybrid" structure for maintainability:

```text
/
├── app/                      # App Router (Routing & Layouts only)
│   ├── globals.css           # Tailwind imports
│   ├── layout.tsx            # Root Layout
│   └── page.tsx              # Main composition (imports from @sections)
│
├── components/
│   ├── ui/                   # RAW Aceternity Components (Dumb Components)
│   │                         # RULE: Do NOT hardcode data here. Use props.
│   │                         # RULE: Must have "use client" if using Framer Motion.
│   │
│   ├── sections/             # Logical Page Sections (Smart Components)
│   │                         # RULE: Import UI components here & map data from @data.
│   │                         # Ex: HeroSection.tsx, ProjectsSection.tsx
│   │
│   └── layout/               # Global components (Navbar, Footer)
│
├── data/                     # STATIC DATA CENTER (The "CMS")
│   ├── index.ts              # Barrel file
│   ├── projects.ts           # Array of project objects
│   ├── experience.ts         # Career history
│   └── social.ts             # Social links
│
├── lib/
│   └── utils.ts              # The `cn` helper function (Crucial)
│
├── types/                    # TypeScript Interfaces
│   └── index.ts              # Definitions for Project, Experience, etc.
│
└── tailwind.config.ts        # Must be configured for Aceternity plugins

```

#### 3. DEVELOPMENT RULES & GUIDELINES

**A. Aceternity UI Implementation**

1. **Helper Setup:** Ensure `lib/utils.ts` exists with `clsx` and `tailwind-merge` configuration before creating components.
2. **Client-Side Rendering:** Most Aceternity components rely on Framer Motion. Always check if `"use client";` is needed at the top of the file.
3. **Tailwind Config:** When adding a new component, check if it requires `addVariablesForColors` plugin or specific `animation/keyframes` in `tailwind.config.ts`.
4. **Image Optimization:** Refactor raw `<img>` tags in Aceternity code to Next.js `<Image />` component.

**B. Data Management (Static Approach)**

* Do not use a Database for this version.
* All content must be stored in `data/*.ts` files as exported arrays/objects.
* Components in `components/sections/` must import this data and pass it to `components/ui/`.

**C. Maintenance & Scalability**

* Use Path Aliases (e.g., `@/components`, `@/data`) to avoid relative path hell (`../../`).
* Strict TypeScript typing: Define interfaces in `types/` before creating data arrays.

**D. Mobile Responsiveness & Performance**

* Aceternity animations can be heavy.
* **Rule:** For very heavy animations (like "Background Beams" or "Globe"), use Tailwind classes to hide them on mobile (e.g., `hidden md:block`) and provide a lighter static alternative for mobile screens.

**E. Deployment (Vercel)**

* Ensure all file imports match exact casing (Linux case-sensitivity) to prevent Vercel build errors.
* Run `npm run build` locally to ensure no TypeScript errors before deploying.

---
