"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface TextGenerateEffectProps {
    words: string;
    className?: string;
}

/**
 * Text generate effect component dari Aceternity UI
 * Animasi text yang muncul kata per kata
 */
export const TextGenerateEffect = ({
    words,
    className,
}: TextGenerateEffectProps) => {
    const wordsArray = words.split(" ");

    return (
        <div className={cn("font-bold", className)}>
            <div className="mt-4">
                <div className="text-black dark:text-white leading-snug tracking-wide">
                    {wordsArray.map((word, idx) => (
                        <motion.span
                            key={word + idx}
                            className="opacity-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: idx * 0.1,
                            }}
                        >
                            {word}{" "}
                        </motion.span>
                    ))}
                </div>
            </div>
        </div>
    );
};
