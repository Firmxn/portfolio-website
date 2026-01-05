import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Personal Portfolio",
    description: "A modern portfolio website built with Next.js and Aceternity UI",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
