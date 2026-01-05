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
                spotlight: "spotlight 2s ease .75s 1 forwards",
            },
            keyframes: {
                spotlight: {
                    "0%": {
                        opacity: "0",
                        transform: "translate(-72%, -62%) scale(0.5)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translate(-50%,-40%) scale(1)",
                    },
                },
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
