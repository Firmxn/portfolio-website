"use client";

import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

/**
 * Hero Section - Clean and minimal landing
 */
export function HeroSection() {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-in">
                {/* Greeting */}
                <div className="space-y-2">
                    <p className="text-muted-foreground text-sm md:text-base font-medium tracking-wide uppercase">
                        Welcome to my portfolio
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                        Hi, I'm{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10">Your Name</span>
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/10 -rotate-1"></span>
                        </span>
                    </h1>
                </div>

                {/* Tagline */}
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Full Stack Developer & Creative Problem Solver
                </p>

                {/* Description */}
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    I build exceptional digital experiences that combine beautiful design with powerful functionality.
                    Specialized in modern web technologies and passionate about creating solutions that make a difference.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <Link href="#projects">
                        <button className="group px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 flex items-center gap-2">
                            View My Work
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>

                    <Link href="#contact">
                        <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors duration-200 flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            Get In Touch
                        </button>
                    </Link>
                </div>

                {/* Scroll Indicator */}
                <div className="pt-12">
                    <div className="inline-flex flex-col items-center gap-2 text-muted-foreground">
                        <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
                        <div className="w-px h-12 bg-border animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
