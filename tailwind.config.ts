import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
            },
            animation: {
                // Custom animations untuk Aceternity UI akan ditambahkan di sini
            },
            keyframes: {
                // Custom keyframes untuk Aceternity UI akan ditambahkan di sini
            },
        },
    },
    plugins: [
        // Plugin untuk Aceternity UI
        addVariablesForColors,
    ],
};

// Plugin untuk menambahkan CSS variables dari Tailwind colors
function addVariablesForColors({ addBase, theme }: any) {
    let allColors = theme("colors");
    if (!allColors || typeof allColors !== "object") return;

    let newVars = Object.fromEntries(
        Object.entries(allColors).flatMap(([key, val]) =>
            typeof val === "object" && val !== null
                ? Object.entries(val).map(([subKey, subVal]) => [
                    `--${key}-${subKey}`,
                    subVal,
                ])
                : [[`--${key}`, val]]
        )
    );

    addBase({
        ":root": newVars,
    });
}

export default config;
