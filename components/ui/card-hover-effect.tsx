"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface HoverEffectProps {
    items: {
        title: string;
        description: string;
        link?: string;
    }[];
    className?: string;
}

/**
 * Hover effect component dari Aceternity UI
 * Card dengan hover effect yang smooth
 */
export const HoverEffect = ({ items, className }: HoverEffectProps) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                className
            )}
        >
            {items.map((item, idx) => (
                <Card key={idx} {...item} />
            ))}
        </div>
    );
};

const Card = ({
    title,
    description,
    link,
}: {
    title: string;
    description: string;
    link?: string;
}) => {
    const [hovering, setHovering] = useState(false);

    const CardContent = (
        <motion.div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="relative group block p-6 h-full w-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
        >
            <div className="relative z-20">
                <h3 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 mb-2">
                    {title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    {description}
                </p>
            </div>
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: hovering ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 border border-transparent group-hover:border-neutral-300 dark:group-hover:border-neutral-700 rounded-lg transition-colors duration-300" />
        </motion.div>
    );

    if (link) {
        return (
            <Link href={link} className="block">
                {CardContent}
            </Link>
        );
    }

    return CardContent;
};
