import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Portfolio | Full Stack Developer",
    description: "A modern portfolio website showcasing my projects, experience, and skills. Built with Next.js, TypeScript, and Aceternity UI.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
