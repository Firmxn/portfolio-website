"use client";

import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Hero Section - Clean and minimal landing
 */
const HeroSectionWithParallax = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="w-full border-b border-[#EAEDF1] bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto border-x border-[#EAEDF1]">
                {/* Parallax Content Container */}
                <motion.div
                    style={{ y: yText, opacity }}
                    className="min-h-screen flex items-center justify-center px-4 py-20"
                >
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        {/* Greeting */}
                        <ScrollAnimation animation="slide-up" delay={0.1} width="100%">
                            <div className="space-y-2">
                                <p className="text-muted-foreground text-sm md:text-base font-medium tracking-wide uppercase">
                                    Welcome to my portfolio
                                </p>
                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                                    Hi, I'm{" "}
                                    <span className="relative inline-block">
                                        <span className="relative z-10">Firmansyah Pramudia</span>
                                        <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/10 -rotate-1"></span>
                                    </span>
                                </h1>
                            </div>
                        </ScrollAnimation>

                        {/* Tagline */}
                        <ScrollAnimation animation="slide-up" delay={0.2} width="100%">
                            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                Full Stack Developer & Creative Problem Solver
                            </p>
                        </ScrollAnimation>

                        {/* Description */}
                        <ScrollAnimation animation="slide-up" delay={0.3} width="100%">
                            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                I build exceptional digital experiences that combine beautiful design with powerful functionality.
                                Specialized in modern web technologies and passionate about creating solutions that make a difference.
                            </p>
                        </ScrollAnimation>

                        {/* CTA Buttons */}
                        <ScrollAnimation animation="slide-up" delay={0.4} width="100%">
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
                        </ScrollAnimation>

                        {/* Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="pt-12"
                        >
                            <div className="inline-flex flex-col items-center gap-2 text-muted-foreground">
                                <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
                                <div className="flex flex-col items-center">
                                    <div className="w-px h-12 bg-border mb-2"></div>
                                    <motion.div
                                        className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px]"
                                        animate={{
                                            y: [0, 5, 0],
                                            scale: [1, 1.2, 1],
                                            borderTopColor: ["#EAEDF1", "#171717", "#EAEDF1"]
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export function HeroSection() {
    return <HeroSectionWithParallax />;
}
