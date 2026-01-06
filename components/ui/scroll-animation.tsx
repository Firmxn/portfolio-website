"use client";

import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    // Animation types
    animation?: "fade-in" | "slide-up" | "slide-right" | "slide-left" | "scale-up" | "none";
    // For staggering children (use on parent container)
    staggerChildren?: boolean;
    staggerDelay?: number;
}

export const ScrollAnimation = ({
    children,
    width = "fit-content",
    className = "",
    delay = 0,
    duration = 0.5,
    animation = "slide-up",
    staggerChildren = false,
    staggerDelay = 0.1,
}: ScrollAnimationProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const variants: Record<string, Variant> = {
        hidden: {
            opacity: 0,
            y: animation === "slide-up" ? 40 : 0,
            x: animation === "slide-right" ? -40 : animation === "slide-left" ? 40 : 0,
            scale: animation === "scale-up" ? 0.8 : 1,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                duration: duration,
                delay: delay,
                ease: "easeOut",
                staggerChildren: staggerChildren ? staggerDelay : 0,
            },
        },
    };

    // If "none", just render children without motion to avoid unnecessary overhead
    if (animation === "none") {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            className={className}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
};

export const MotionItem = motion.div;
