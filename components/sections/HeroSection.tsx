"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

/**
 * Hero Section - Landing page dengan spotlight effect
 */
export function HeroSection() {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

            <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Your Name</span>
                </h1>

                <TextGenerateEffect
                    words="Full Stack Developer & Creative Problem Solver"
                    className="text-center text-xl md:text-2xl mt-4 text-neutral-300"
                />

                <p className="mt-6 font-normal text-base text-neutral-300 max-w-2xl text-center mx-auto">
                    I build exceptional digital experiences that combine beautiful design with powerful functionality.
                    Specialized in modern web technologies and passionate about creating solutions that make a difference.
                </p>

                <div className="flex gap-4 justify-center mt-10">
                    <Link href="#projects">
                        <Button
                            duration={3000}
                            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            View My Work
                        </Button>
                    </Link>

                    <Link href="#contact">
                        <button className="px-8 py-3 rounded-lg bg-transparent border border-neutral-600 text-neutral-300 hover:bg-neutral-800 transition-colors">
                            Get In Touch
                        </button>
                    </Link>
                </div>
            </div>

            {/* Grid background */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
    );
}
