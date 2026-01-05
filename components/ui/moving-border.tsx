"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MovingBorderProps {
    children: React.ReactNode;
    duration?: number;
    className?: string;
    containerClassName?: string;
    borderClassName?: string;
    as?: React.ElementType;
    [key: string]: any;
}

/**
 * Moving border button component dari Aceternity UI
 * Button dengan border yang bergerak/animated
 */
export const MovingBorder = ({
    children,
    duration = 2000,
    className,
    containerClassName,
    borderClassName,
    as: Component = "button",
    ...otherProps
}: MovingBorderProps) => {
    return (
        <Component
            className={cn(
                "relative p-[1px] overflow-hidden",
                containerClassName
            )}
            {...otherProps}
        >
            <motion.div
                className={cn(
                    "absolute inset-0 rounded-lg",
                    borderClassName
                )}
                style={{
                    background:
                        "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
                    backgroundSize: "200% 200%",
                }}
                animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                    duration: duration / 1000,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <div
                className={cn(
                    "relative bg-slate-900 text-white rounded-lg px-8 py-3 font-medium",
                    className
                )}
            >
                {children}
            </div>
        </Component>
    );
};

export const Button = MovingBorder;
